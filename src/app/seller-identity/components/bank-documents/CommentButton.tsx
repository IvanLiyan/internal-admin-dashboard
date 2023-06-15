import { useToast } from "@app/core/toast/ToastProvider";
import { ReviewBankDocumentMutation } from "@app/seller-identity/toolkit/bank-documents/action";
import { useBankDocumentsTableContext } from "@app/seller-identity/toolkit/bank-documents/context";
import { TableData } from "@app/seller-identity/toolkit/bank-documents/table";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  BankAccountDocumentType,
  BankAccountVerificationStatus,
} from "@schema";
import { useState } from "react";
import { useMutation } from "urql";

type Props = ButtonProps & {
  readonly docAction: ExtractStrict<
    BankAccountVerificationStatus,
    "APPROVED" | "REJECTED"
  >;
  readonly row: TableData;
  readonly mid: string | null | undefined;
};

const CommentButton: React.FC<Props> = ({
  docAction,
  row,
  mid,
  children,
  ...buttonProps
}) => {
  const [open, setOpen] = useState(false);
  const [, review] = useMutation(ReviewBankDocumentMutation);
  const [comment, setComment] = useState<string>("");
  const [docType, setDocType] = useState<BankAccountDocumentType | null>(null);
  const toast = useToast();

  const { reexecuteQuery } = useBankDocumentsTableContext();

  const onSubmit = async () => {
    if (mid == null || docType == null) {
      return;
    }
    return review({
      input: {
        documentId: row.documentId,
        documentType: docType,
        merchantId: mid,
        state: docAction,
        comment: comment,
      },
    }).then((result) => {
      if (
        !result.data?.merchantIdentity?.bankAccountVerification.reviewDocument
          ?.ok
      ) {
        toast.alert(
          "error",
          result.data?.merchantIdentity?.bankAccountVerification.reviewDocument
            ?.message || result.error?.message
        );
      } else {
        toast.alert("success", `${docAction} action completed successfully`);
        reexecuteQuery();
      }
      return result;
    });
  };

  return (
    <>
      <Dialog
        maxWidth={"xs"}
        fullWidth
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Provide comment</DialogTitle>
        <DialogContent>
          <FormControl sx={{ mt: 2 }} fullWidth>
            <TextField
              multiline
              fullWidth
              label="Comment"
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
          </FormControl>

          <FormControl sx={{ mt: 2 }} fullWidth>
            <InputLabel id="document-type-select-label">
              Document type
            </InputLabel>
            <Select
              labelId="document-type-select-label"
              fullWidth
              label={"Document type"}
              required
              value={docType ?? undefined}
              variant="outlined"
              onChange={(event) =>
                setDocType(event.target.value as BankAccountDocumentType)
              }
            >
              {(
                [
                  "BANK_DOCUMENT",
                  "GOVERNMENT_DOCUMENT",
                  "UNIDENTIFIED",
                ] as const
              ).map((bankDocType) => (
                <MenuItem key={bankDocType} value={bankDocType}>
                  {bankDocType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={!mid || !docType}
            onClick={() => {
              setOpen(false);
              onSubmit();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Button {...buttonProps} onClick={() => setOpen(true)} disabled={!mid}>
        {children}
      </Button>
    </>
  );
};

export default CommentButton;
