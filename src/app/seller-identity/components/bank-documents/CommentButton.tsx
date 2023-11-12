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
  BankAccountVerificationStatusReason,
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
  const [stateReason, setStateReason] =
    useState<BankAccountVerificationStatusReason | null>(null);
  const toast = useToast();

  const { reexecuteQuery } = useBankDocumentsTableContext();

  const handleOpen = () => {
    setComment("");
    setDocType(null);
    setStateReason(null);
    setOpen(true);
  };

  const onSubmit = async () => {
    if (mid == null) {
      return;
    }
    return review({
      input: {
        documentId: row.documentId,
        documentType: docType || "UNIDENTIFIED",
        merchantId: mid,
        state: docAction,
        comment: comment,
        stateReason: stateReason || "APPROVE",
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
          {(() => {
            switch (docAction) {
              case "APPROVED":
                return (
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
                        setDocType(
                          event.target.value as BankAccountDocumentType
                        )
                      }
                    >
                      {(
                        [
                          "BANK_STATEMENT",
                          "BANK_ACCOUNT_CERTIFICATE",
                          "BANK_ACCOUNT_CARD",
                          "UNIDENTIFIED",
                        ] as const
                      ).map((bankDocType) => (
                        <MenuItem key={bankDocType} value={bankDocType}>
                          {bankDocType}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                );
              case "REJECTED":
                return (
                  <>
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
                        State reason
                      </InputLabel>
                      <Select
                        labelId="document-type-select-label"
                        fullWidth
                        label={"State reason"}
                        required
                        value={stateReason ?? undefined}
                        variant="outlined"
                        onChange={(event) =>
                          setStateReason(
                            event.target
                              .value as BankAccountVerificationStatusReason
                          )
                        }
                      >
                        {(
                          [
                            "BLURRY_IMAGE",
                            "INVALID_DOCUMENT",
                            "MISMATCH_LAST_FOUR_DIGITS",
                            "PARTIAL_IMAGE",
                            "UNQUALIFIED_BANK_DOCUMENT",
                          ] as const
                        ).map((stateReason) => (
                          <MenuItem key={stateReason} value={stateReason}>
                            {stateReason}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </>
                );
              default:
                return null;
            }
          })()}
        </DialogContent>
        <DialogActions>
          <Button
            disabled={
              !mid ||
              (docAction === "APPROVED" && !docType) ||
              (docAction === "REJECTED" && !stateReason)
            }
            onClick={() => {
              setOpen(false);
              onSubmit();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Button {...buttonProps} onClick={() => handleOpen()} disabled={!mid}>
        {children}
      </Button>
    </>
  );
};

export default CommentButton;
