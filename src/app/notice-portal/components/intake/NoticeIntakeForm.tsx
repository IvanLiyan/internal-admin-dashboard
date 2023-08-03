import { useState } from "react";
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

const NoticeIntakeForm: React.FC = () => {
  const [description, setDescription] = useState<string>("");
  const [wishUrls, setWishUrls] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const baseFormGroupProps: FormGroupProps = {
    sx: {
      mb: 3,
    },
  };

  const fileInputProps: FileInputProps = {
    maxSizeMB: 1000,
    bucket: "TEMP_UPLOADS_V2",
    onUpload: (files: ReadonlyArray<AttachmentInfo>) => console.log(files),
  };

  return (
    <Box sx={{ maxWidth: "700px" }}>
      <FormGroup {...baseFormGroupProps}>
        <Typography>Description of Content*</Typography>
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
        <Typography>Wish URLs*</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Add the Wish URLs you're reporting. Separate multiple URLs with
          newlines
        </Typography>
        <TextField
          multiline
          fullWidth
          required
          placeholder="URLs"
          rows={4}
          value={wishUrls}
          onChange={(e) => setWishUrls(e.target.value)}
        />
      </FormGroup>
      <FormGroup {...baseFormGroupProps}>
        <Typography>Name*</Typography>
        <TextField
          fullWidth
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup {...baseFormGroupProps}>
        <Typography>Email Address*</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Trusted flaggers: use your trusted flagger email to prioritize your
          report
        </Typography>
        <TextField
          fullWidth
          required
          placeholder="Email address"
          value={email}
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
          control={<Checkbox />}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          label="I confirm that the provided information is accurate and complete."
        />
      </FormGroup>
      <Button
        variant="contained"
        size="large"
        disableRipple
        disableElevation
        sx={{ borderRadius: 10, textTransform: "capitalize" }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default NoticeIntakeForm;
