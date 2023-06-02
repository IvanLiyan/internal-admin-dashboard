import { useToast } from "@app/core/toast/ToastProvider";
import { ReviewBankDocumentMutation } from "@app/seller-identity/toolkit/bank-documents/action";
import { TableData } from "@app/seller-identity/toolkit/bank-documents/table";
import {
  Box,
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { BankAccountVerificationStatus } from "@schema";
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
  const toast = useToast();

  const onSubmit = async () => {
    if (mid == null) {
      return;
    }
    return review({
      input: {
        documentId: row.documentId,
        documentType: row.documentType,
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
          <Box pt={1}>
            <TextField
              fullWidth
              label="Comment"
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={!mid}
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
