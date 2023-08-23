import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "urql";
import {
  PublicDsaMutationsCreateNoticeArgs,
  CreateNotice,
  DsaMutations,
  PublicDsaMutations,
} from "@schema";
import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
  FormGroup,
  FormGroupProps,
} from "@mui/material";
import FileInput, {
  AttachmentInfo,
  FileInputProps,
} from "@app/core/components/FileInput";
import { useToast } from "@app/core/toast/ToastProvider";

type CreateNoticeResponse = {
  readonly dsa: Pick<DsaMutations, "public"> & {
    readonly public: Pick<PublicDsaMutations, "createNotice"> & {
      readonly createNotice: CreateNotice;
    };
  };
};

const CreateNotice = gql<
  CreateNoticeResponse,
  PublicDsaMutationsCreateNoticeArgs
>`
  mutation NoticePortal_CreateNotice($input: CreateNoticeInput!) {
    dsa {
      public {
        createNotice(input: $input) {
          ok
          message
        }
      }
    }
  }
`;

const NoticeIntakeForm: React.FC = () => {
  const toast = useToast();
  const [description, setDescription] = useState<string>("");
  const [wishUrls, setWishUrls] = useState<string[]>([]);
  const [wishUrlError, setWishUrlError] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [files, setFiles] = useState<ReadonlyArray<AttachmentInfo>>([]);
  const [, createNotice] = useMutation(CreateNotice);

  const baseFormGroupProps: FormGroupProps = {
    sx: {
      mb: 3,
    },
  };

  const fileInputProps: FileInputProps = {
    maxSizeMB: 1000,
    maxAttachments: 5,
    bucket: "TEMP_UPLOADS_V2",
    attachments: files,
    onUpload: setFiles,
  };

  const resetForm = () => {
    setDescription("");
    setWishUrls([]);
    setName("");
    setOrganization("");
    setEmail("");
    setChecked(false);
    setFiles([]);
  };

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  const wishUrlRegex = /^https:\/\/www.wish.com\/c\/[a-f\d]{24}$/;

  const canSubmit = () => {
    if (!email.match(emailRegex)) {
      return false;
    }

    for (const url of wishUrls) {
      if (!url.match(wishUrlRegex)) {
        return false;
      }
    }

    return description && wishUrls.length && name && email && checked;
  };

  const onSubmit = async () => {
    const inputArgs: PublicDsaMutationsCreateNoticeArgs = {
      input: {
        description: description,
        notifierEmail: email,
        notifierOrganization:
          organization.length > 0 ? organization : undefined,
        notifierName: name,
        productIds: wishUrls.map((url) => url.trim().split("/").pop() || ""),
        supportFiles: files.map((file) => {
          return {
            fileName: file.fileName,
            url: file.url,
          };
        }),
      },
    };

    const { data, error } = await createNotice(inputArgs);
    if (error || data == null) {
      toast.alert("error", "Something went wrong");
      return;
    }

    const {
      dsa: {
        public: {
          createNotice: { ok, message },
        },
      },
    } = data;

    if (!ok) {
      toast.alert("error", message);
      return;
    }

    toast.alert("success", "Notice created successfully");
    resetForm();
  };

  const handleWishUrlsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const urls = e.target.value.split("\n");
    for (const url of urls) {
      if (!url.match(wishUrlRegex)) {
        setWishUrlError(true);
        setWishUrls(urls);
        return;
      }
    }
    setWishUrlError(false);
    setWishUrls(urls);
  };

  return (
    <Box sx={{ maxWidth: "700px" }}>
      <FormGroup {...baseFormGroupProps}>
        <Typography>Description of Content *</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Explain why you believe these listings may be illegal
        </Typography>
        <TextField
          multiline
          fullWidth
          required
          placeholder="Description of content"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormGroup>
      <FormGroup {...baseFormGroupProps}>
        <Typography>Wish URLs *</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Add the Wish URLs you&apos;re reporting. Separate multiple URLs with
          newlines
        </Typography>
        <TextField
          multiline
          fullWidth
          required
          placeholder="URLs"
          rows={4}
          value={wishUrls.join("\n")}
          onChange={handleWishUrlsChange}
          helperText="Must be of the format https://www.wish.com/c/<product_id>"
          error={wishUrls.length != 0 && wishUrlError}
        />
      </FormGroup>
      <FormGroup {...baseFormGroupProps}>
        <Typography>Name *</Typography>
        <TextField
          fullWidth
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup {...baseFormGroupProps}>
        <Typography>Organization</Typography>
        <TextField
          fullWidth
          required
          placeholder="Organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
      </FormGroup>
      <FormGroup {...baseFormGroupProps}>
        <Typography>Email Address *</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Trusted flaggers: use your trusted flagger email to prioritize your
          report
        </Typography>
        <TextField
          fullWidth
          required
          placeholder="Email address"
          value={email}
          error={!email.match(emailRegex) && email != ""}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup {...baseFormGroupProps}>
        <Typography>Upload documents</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          You can upload up to 5 supporting documents
        </Typography>
        <FileInput {...fileInputProps} />
      </FormGroup>
      <FormGroup {...baseFormGroupProps}>
        <FormControlLabel
          required
          control={
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          }
          label="I confirm that the provided information is accurate and complete."
        />
      </FormGroup>
      <Button
        variant="contained"
        size="large"
        disableRipple
        disableElevation
        sx={{ borderRadius: 10, textTransform: "capitalize" }}
        disabled={!canSubmit()}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default NoticeIntakeForm;
