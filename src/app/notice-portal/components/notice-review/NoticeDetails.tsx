import { Divider, Link, Stack, Typography, Button, TextField,
  Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { MerchantFileSchema, NoticeSchema } from "@schema";
import { useState } from "react";
import { useToast } from "@app/core/toast/ToastProvider";
import { UpsertNote, DsaMutationsUpsertNoteArgs } from "@schema"; // 导入你的 GraphQL 查询或变更以及相应的参数类型
import { gql, useMutation } from "urql";

const UpsertNoteMutation = gql<UpsertNoteResponse, DsaMutationsUpsertNoteArgs>`
  mutation UpsertNote($input: UpsertNoteInput!) {
    dsa {
      upsertNote(input: $input) {
        ok
        message
      }
    }
  }
`;

export type NoticeDetailsProps = {
  readonly notice: NoticeSchema;
};

const NoticeDetails: React.FC<NoticeDetailsProps> = (
  props: NoticeDetailsProps
) => {
  const { notice } = props;
  const [noteModalShow, setNoteModalShow] = useState(false);
  const [noteContent, setNoteContent] = useState('');
  const toast = useToast();
  const [, upsertNote] = useMutation(UpsertNoteMutation);

  const renderNoticeDetailRow = (label: string, content: string) => {
    return (
      <Stack direction={"row"} sx={{ mb: 1 }}>
        <Typography sx={{ fontWeight: "fontWeightBold", mr: 1 }}>
          {`${label}:`}
        </Typography>
        <Typography>{content}</Typography>
      </Stack>
    );
  };

  const renderSupportFiles = (label: string, files: MerchantFileSchema[]) => {
    if (!files.length) {
      return;
    }
    return (
      <Stack sx={{ mb: 1 }}>
        <Typography sx={{ fontWeight: "fontWeightBold", mr: 1 }}>
          {`${label}:`}
        </Typography>
        {files.map((file) => (
          <Link
            href={file.fileUrl}
            key={file.id}
            sx={{ ml: 1, width: "min-content" }}
          >
            <Typography>{file.displayFilename}</Typography>
          </Link>
        ))}
      </Stack>
    );
  };

  const renderNoticeDetailNoteRow = (label: string, content: string) => {
    return (
      <Stack sx={{ mb: 1 }}>
        <Typography sx={{ fontWeight: "fontWeightBold", display: "flex", alignItems: "center" }}>
          {`${label}:`}
          <EditIcon sx={{ ml: 1, cursor: "pointer" }} onClick={openNoteModal}/>
        </Typography>
        <Typography sx={{ wordWrap: "break-word" }}>{content}</Typography>
      </Stack>
    );
  };

  const changeNoteValue = (e:{ target:{ value: string }}) => {
    setNoteContent(e.target.value)
  }

  const openNoteModal = () => {
    setNoteContent(notice.note ?? '');
    setNoteModalShow(true);
  }

  const closeNoteModal = () => {
    setNoteModalShow(false);
  }

  const handleCancel = () => {
    setNoteModalShow(false);
  }

  const handleSave = () => {
    notice.note = noteContent;
    handleSaveNote()
    setNoteModalShow(false);
  }

  const handleSaveNote = async () => {
    const variables: DsaMutationsUpsertNoteArgs = {
      input: {
        noticeId: notice.id,
        note: noteContent
      },
    };
    const { data, error } = await upsertNote(variables);
    if (error || data == null) {
      toast.alert("error", "Something went wrong");
      return;
    }

    const {
      dsa: {
        upsertNote: { ok, message },
      },
    } = data;

    if (!ok) {
      toast.alert("error", message);
      return;
    }

    toast.alert("success", "Note upserted successfully");
  };

  const renderNoteModal = () => {
    return (
      <Dialog open={noteModalShow} fullWidth onClose={closeNoteModal}>
        <DialogTitle>Edit/Add custom note</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            fullWidth
            id="outlined-multiline-static"
            placeholder="text"
            label="Custom note"
            multiline
            rows={8}
            defaultValue={notice.note}
            onChange={(e) => changeNoteValue(e)}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    )
  }

  return (
    <Stack sx={{ mb: 3 }}>
      {renderNoticeDetailRow("Name", notice.notifierName)}
      {renderNoticeDetailRow("Email", notice.notifierEmail)}
      {renderNoticeDetailRow(
        "Organization",
        notice.notifierOrganization || "N/A"
      )}
      {renderNoticeDetailRow(
        "Submission Date",
        notice.datetimeCreated.datetime
      )}
      {renderNoticeDetailRow("Reason", notice.description)}
      {renderNoticeDetailNoteRow("Custom note", notice.note ?? "")}
      {renderSupportFiles("Supporting Attachments", notice.supportFiles)}
      <Divider orientation="horizontal" sx={{ mt: 2, mb: 2 }} />
      {notice.disputeDescription &&
        renderNoticeDetailRow("Dispute Reason", notice.disputeDescription)}
      {notice.datetimeDisputed?.datetime &&
        renderNoticeDetailRow("Dispute Date", notice.datetimeDisputed.datetime)}
      {renderSupportFiles(
        "Dispute Attachments",
        notice.disputeSupportFiles || []
      )}
      {renderNoteModal()}
    </Stack>
  );
};

export default NoticeDetails;
