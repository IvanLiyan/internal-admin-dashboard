import { useToast } from "@app/core/toast/ToastProvider";
import { ReviewTaxDocumentMutation } from "@app/seller-identity/toolkit/tax-documents/action";
import { useTaxDocumentsTableContext } from "@app/seller-identity/toolkit/tax-documents/context";
import { TableData } from "@app/seller-identity/toolkit/tax-documents/table";
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
  TextField,
  Box,
  Typography,
  Chip,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  TaxVerificationStatusReason,
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
  const [, review] = useMutation(ReviewTaxDocumentMutation);
  const [comment, setComment] = useState<string>("");
  const [stateReason, setStateReason] = useState<
    Array<TaxVerificationStatusReason>
  >([]);
  const toast = useToast();

  const { reexecuteQuery } = useTaxDocumentsTableContext();

  const handleOpen = () => {
    setComment("");
    setStateReason([]);
    setOpen(true);
  };

  const onSubmit = async (submitState: string) => {
    if (mid == null) {
      return;
    }

    return review({
      input: {
        comment: comment,
        documentId: row.documentId,
        documentType: row.documentType,
        merchantId: mid,
        state: docAction,
        stateReason: submitState == "APPROVE" ? ["APPROVE"] : stateReason,
        verificationType: "TAX_FORM",
      },
    }).then((result) => {
      if (
        !result.data?.merchantIdentity?.merchantIdentityVerification
          ?.reviewIdentityVerificationDocument?.ok
      ) {
        toast.alert(
          "error",
          result.data?.merchantIdentity?.merchantIdentityVerification
            ?.reviewIdentityVerificationDocument?.message ||
            result.error?.message
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
                    <Typography>Are you sure to approve?</Typography>
                  </FormControl>
                );
              case "REJECTED":
                return (
                  <>
                    <FormControl sx={{ mt: 2 }} fullWidth>
                      <InputLabel id="document-type-select-label">
                        State reason
                      </InputLabel>
                      <Select
                        labelId="document-type-select-label"
                        fullWidth
                        label={"State reason"}
                        required
                        multiple
                        value={stateReason}
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        variant="outlined"
                        onChange={(
                          event: SelectChangeEvent<
                            TaxVerificationStatusReason[]
                          >
                        ) => {
                          const reasonsArray: TaxVerificationStatusReason[] =
                            event.target.value as TaxVerificationStatusReason[];

                          setStateReason(reasonsArray);
                        }}
                      >
                        {(
                          [
                            "CERTIFICATION_UNCHECKED",
                            "INCORRECT_NAME",
                            "INCORRECT_SSN_TIN_FTIN",
                            "INCORRECT_TAX_FORM_TYPE",
                            "MISSING_OR_INCORRECT_SIGNATURE",
                            "MISSING_OR_OUTDATED_SIGNING_DATE",
                            "OTHERS",
                            "UNCLEAR_TAX_FORM",
                            "W8_BEN_E_ITEM_4",
                            "W8_BEN_E_ITEM_5",
                            "W9_ITEM_3",
                          ] as const
                        ).map((stateReason) => (
                          <MenuItem key={stateReason} value={stateReason}>
                            {stateReason}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {stateReason.includes("OTHERS") && (
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
                    )}
                  </>
                );
              default:
                return null;
            }
          })()}
        </DialogContent>
        <DialogActions>
          {(() => {
            switch (docAction) {
              case "APPROVED":
                return (
                  <>
                    <Button
                      disabled={!mid}
                      onClick={() => {
                        setStateReason(["APPROVE"]);
                        setOpen(false);
                        onSubmit("APPROVE");
                      }}
                    >
                      Yes
                    </Button>
                    <Button
                      disabled={!mid}
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      No
                    </Button>
                  </>
                );
              case "REJECTED":
                return (
                  <Button
                    disabled={
                      !mid || (docAction === "REJECTED" && !stateReason)
                    }
                    onClick={() => {
                      setOpen(false);
                      onSubmit("REJECT");
                    }}
                  >
                    Submit
                  </Button>
                );
              default:
                return null;
            }
          })()}
        </DialogActions>
      </Dialog>
      <Button {...buttonProps} onClick={() => handleOpen()} disabled={!mid}>
        {children}
      </Button>
    </>
  );
};

export default CommentButton;
