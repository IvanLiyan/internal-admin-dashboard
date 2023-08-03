import Image from "next/image";
import { observer } from "mobx-react";
import { runInAction } from "mobx";
import { MouseEventHandler, useState } from "react";
import { gql, useMutation } from "urql";
import Dropzone, { DropzoneState } from "react-dropzone";

import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { CloudUpload, Delete, InsertDriveFile } from "@mui/icons-material";

import { useToast } from "@app/core/toast/ToastProvider";
import { readFile } from "@app/core/toolkit/fs";

import {
  UploadMutations,
  InitiateUploadInput,
  InitiateUploadMutation,
  ClientWritableBucket,
  UploadMutationsInitiateUploadArgs,
} from "@schema";

type FileUploadResponse = {
  readonly uploads: Pick<UploadMutations, "initiateUpload"> & {
    readonly initiateUpload: InitiateUploadMutation;
  };
};

const InitiateUpload = gql<
  FileUploadResponse,
  UploadMutationsInitiateUploadArgs
>`
  mutation Toolkit_InitialUpload($input: InitiateUploadInput!) {
    uploads {
      initiateUpload(input: $input) {
        ok
        message
        uploadUrl
        uploadHeaders
        downloadUrl
      }
    }
  }
`;

export type AttachmentServerParams = {
  readonly url: string;
  readonly original_filename: string;
};

export type AttachmentInfo = {
  readonly id: string;
  readonly url: string;
  readonly file: File;
  readonly fileName: string;
  readonly ext?: string | null | undefined;
  readonly serverParams?: AttachmentServerParams;
};

export type PendingAttachment = {
  readonly ext: string | null | undefined;
  readonly id: string;
  readonly fileName: string;
};

export type FileInputProps = {
  readonly maxSizeMB: number;
  readonly bucket: ClientWritableBucket;
  readonly onUpload: (files: ReadonlyArray<AttachmentInfo>) => unknown;
  readonly attachments: ReadonlyArray<AttachmentInfo>;
  readonly maxAttachments?: number;
};

const FileInput: React.FC<FileInputProps> = ({
  maxSizeMB,
  bucket,
  onUpload,
  maxAttachments,
  attachments,
}) => {
  const toast = useToast();
  const [, uploadFile] = useMutation(InitiateUpload);
  const [pendingAttachments, setPendingAttachments] = useState<
    ReadonlyArray<PendingAttachment>
  >([]);

  const removePendingAttachment = (pendingAttachment: PendingAttachment) => {
    setPendingAttachments(
      pendingAttachments.filter((a) => a.id !== pendingAttachment.id)
    );
  };

  const removeInternalAttachment = (internalAttachment: AttachmentInfo) => {
    onAttachmentsChanged(
      attachments.filter((a) => a.id !== internalAttachment.id)
    );
  };

  const onAttachmentsChanged = (
    newAttachments: ReadonlyArray<AttachmentInfo>
  ) => {
    onUpload(newAttachments);
  };

  const onUploadFiles = async (acceptedFiles: ReadonlyArray<File>) => {
    const totalAttachments = acceptedFiles.length + attachments.length;
    if (maxAttachments && totalAttachments > maxAttachments) {
      toast.alert(
        "error",
        `Too many files attached. Maximum is ${maxAttachments}`
      );
      return;
    }

    let newAttachments = [...attachments];
    let newPendingAttachments = [...pendingAttachments];
    for (const file of acceptedFiles) {
      const ext = file.name.split(".").pop()?.toLowerCase();
      if (ext == null) {
        return;
      }

      const newPendingAttachment: PendingAttachment = {
        fileName: file.name,
        id: `${new Date().getTime()}`,
        ext: ext,
      };

      // Validate file is readable
      const data = await readFile(file);
      if (data == null) {
        toast.alert("error", "Could not read the file you uploaded");
        return;
      }
      newPendingAttachments.push(newPendingAttachment);
      setPendingAttachments(newPendingAttachments);

      // Some machines do not assign .csv MIME type correctly
      // https://stackoverflow.com/questions/51724649/mime-type-of-file-returning-empty-in-javascript-on-some-machines
      const rawContentType = file.type;
      const contentType =
        (rawContentType == null || rawContentType == "") && ext == "csv"
          ? "text/csv"
          : rawContentType;

      const response = await upload(file, {
        bucket,
        filename: file.name,
        contentType,
      });

      const downloadUrl = response?.downloadUrl;
      if (downloadUrl == null || response?.ok == false) {
        newPendingAttachments = newPendingAttachments.filter(
          (i) => i.id !== newPendingAttachment.id
        );
        removePendingAttachment(newPendingAttachment);
        return;
      }

      runInAction(() => {
        newAttachments = [
          ...newAttachments,
          {
            id: `${new Date().getTime()}`,
            ext: ext,
            url: downloadUrl || "",
            fileName: file.name,
            file: file,
            serverParams: {
              url: downloadUrl || "",
              original_filename: file.name,
            },
          },
        ];
        onAttachmentsChanged(newAttachments);
        newPendingAttachments = newPendingAttachments.filter(
          (i) => i.id !== newPendingAttachment.id
        );
        removePendingAttachment(newPendingAttachment);
      });
    }
  };

  const upload = async (
    file: File,
    input: InitiateUploadInput
  ): Promise<
    Pick<InitiateUploadMutation, "ok" | "message" | "downloadUrl">
  > => {
    const uploadFileResult = await uploadFile({ input });

    if (uploadFileResult.data == null || uploadFileResult.error) {
      return {
        ok: false,
        message: "Something went wrong",
        downloadUrl: null,
      };
    }

    const {
      uploads: {
        initiateUpload: { ok, message, uploadUrl, uploadHeaders, downloadUrl },
      },
    } = uploadFileResult.data;

    if (
      !ok ||
      uploadUrl == null ||
      uploadHeaders == null ||
      downloadUrl == null
    ) {
      return {
        ok: ok,
        message: message || "Something went wrong",
        downloadUrl: undefined,
      };
    }

    await fetch(uploadUrl, {
      method: "PUT",
      body: file,
      headers: JSON.parse(uploadHeaders),
    });

    return {
      ok: ok,
      message: message,
      downloadUrl: downloadUrl,
    };
  };

  const renderDropzoneContent = ({ getRootProps }: DropzoneState) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 5,
          border: "1px dashed grey",
          borderRadius: "5px",
        }}
        {...getRootProps()}
      >
        <Typography sx={{ mb: 1.25 }}>Drop files here to upload</Typography>
        <Button
          variant="outlined"
          startIcon={<CloudUpload />}
          sx={{ textTransform: "capitalize" }}
        >
          Select Files
        </Button>
      </Box>
    );
  };

  const renderAttachments = () => {
    if (attachments.length == 0 && pendingAttachments.length == 0) {
      return;
    }
    return (
      <Stack
        flexWrap="wrap"
        useFlexGap
        direction="row"
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mt: 2,
          p: 2,
          borderRadius: "5px",
          backgroundColor: "grey.200",
        }}
      >
        {attachments.map((attachment) => renderInternalAttachment(attachment))}
        {pendingAttachments.map((pendingAttachment) =>
          renderPendingAttachment(pendingAttachment)
        )}
      </Stack>
    );
  };

  const renderAttachment = (
    key: string,
    url: string | null = null,
    fileName: string,
    onDelete: MouseEventHandler,
    isPending = false
  ) => {
    return (
      <Box sx={{ width: 200, height: 175 }} key={key}>
        <Paper
          variant="outlined"
          sx={{
            width: "100%",
            height: "80%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isPending || url == null ? (
            <InsertDriveFile fontSize="medium" />
          ) : (
            <Image src={url} alt={fileName} draggable={false} />
          )}
          <IconButton
            sx={{
              border: "1px solid grey",
              borderRadius: "50%",
              position: "absolute",
              bottom: 10,
              right: 10,
            }}
            size="small"
            onClick={onDelete}
          >
            <Delete fontSize="small" />
          </IconButton>
        </Paper>
        <Typography sx={{ width: 200, height: "20%" }} variant="caption">
          {fileName}
        </Typography>
      </Box>
    );
  };

  const renderInternalAttachment = (attachment: AttachmentInfo) => {
    return renderAttachment(
      attachment.id,
      attachment.url,
      attachment.fileName || "",
      () => removeInternalAttachment(attachment),
      false
    );
  };

  const renderPendingAttachment = (pendingAttachment: PendingAttachment) => {
    return renderAttachment(
      pendingAttachment.id,
      null,
      pendingAttachment.fileName || "",
      () => removePendingAttachment(pendingAttachment),
      true
    );
  };

  return (
    <Box>
      <Dropzone
        maxSize={maxSizeMB * 1000000}
        maxFiles={maxAttachments || 0}
        onDropAccepted={onUploadFiles}
      >
        {renderDropzoneContent}
      </Dropzone>
      {renderAttachments()}
    </Box>
  );
};

export default observer(FileInput);
