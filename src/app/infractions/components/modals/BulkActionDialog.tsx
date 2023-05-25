import { useToast } from "@app/core/toast/ToastProvider";
import ApproveDialog from "@app/infractions/components/modals/ApproveDialog";
import DeclineDialog from "@app/infractions/components/modals/DeclineDialog";
import MessagePreviewDialog from "@app/infractions/components/modals/MessagePreviewDialog";
import ReverseDialog from "@app/infractions/components/modals/ReverseDialog";
import { BulkActionMutation } from "@app/infractions/toolkit/bulk-action";
import { BulkActionModalSchema } from "@app/infractions/toolkit/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Delete, Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { BulkMerchantWarningAction, MerchantWarningSchema } from "@schema";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "urql";

type InfractionData = Pick<MerchantWarningSchema, "id" | "adminReasonText"> & {
  readonly lastUpdate: {
    readonly unix: number;
  };
};

type Props = Pick<DialogProps, "open"> & {
  readonly infractions: ReadonlyArray<InfractionData>;
  readonly handleClose: () => void;
  readonly approveAction?: boolean;
  readonly declineAction?: boolean;
  readonly reverseAction?: boolean;
};

const BulkActionDialog: React.FC<Props> = ({
  infractions,
  handleClose,
  approveAction,
  declineAction,
  reverseAction,
  ...props
}) => {
  const toast = useToast();

  const [approveOpen, setApproveOpen] = useState(false);
  const [declineOpen, setDeclineOpen] = useState(false);
  const [reverseOpen, setReverseOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [previewInfractionId, setPreviewInfractionId] = useState<string | null>(
    null
  );
  const [rows, setRows] = useState<ReadonlyArray<InfractionData>>([]);

  const [, bulkAction] = useMutation(BulkActionMutation);

  const {
    reset,
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: { message: "", internalMessage: "" },
    resolver: yupResolver(BulkActionModalSchema),
    mode: "all",
  });

  useEffect(() => {
    setRows(infractions);
  }, [infractions]);

  const onClose = () => {
    handleClose();
    reset();
  };

  const handleAction = (action: BulkMerchantWarningAction) => {
    handleSubmit((data) => {
      bulkAction({
        input: {
          action: action,
          warningIds: rows.map((row) => row.id),
          comment: data.internalMessage,
          message: data.message,
        },
      }).then((result) => {
        if (!result.data?.policy?.bulkUpsertMerchantWarning?.ok) {
          toast.alert(
            "error",
            result.data?.policy?.bulkUpsertMerchantWarning?.message ||
              result.error?.message
          );
          return;
        }
        toast.alert("success", "Bulk action submitted successfully");
      });
    })();
    onClose();
  };

  return (
    <Dialog {...props} maxWidth={"md"} fullWidth onClose={onClose}>
      <ApproveDialog
        open={approveOpen}
        infractionsCount={rows.length}
        handleClose={() => setApproveOpen(false)}
        handleConfirm={() => handleAction("APPROVE")}
      />
      <DeclineDialog
        open={declineOpen}
        infractionsCount={rows.length}
        handleClose={() => setDeclineOpen(false)}
        handleConfirm={() => handleAction("DECLINE")}
      />
      <ReverseDialog
        open={reverseOpen}
        infractionsCount={rows.length}
        handleClose={() => setReverseOpen(false)}
        handleConfirm={() => handleAction("REVERSE")}
      />
      <MessagePreviewDialog
        infractionId={previewInfractionId}
        open={messageOpen}
        handleClose={() => {
          setMessageOpen(false);
          setPreviewInfractionId(null);
        }}
      />
      <form>
        <DialogTitle>Bulk Action</DialogTitle>
        <DialogContent>
          <Controller
            name="message"
            control={control}
            render={({ field, formState: { errors } }) => (
              <TextField
                label="Message to Merchant"
                sx={{ my: 1 }}
                multiline
                minRows={5}
                fullWidth
                {...field}
                error={Boolean(errors.message?.message)}
                helperText={errors.message?.message}
                required
              />
            )}
          />
          <Controller
            name="internalMessage"
            control={control}
            render={({ field, formState: { errors } }) => (
              <TextField
                label="Internal Comments"
                sx={{ my: 1 }}
                multiline
                minRows={5}
                fullWidth
                {...field}
                error={Boolean(errors.internalMessage?.message)}
                helperText={errors.internalMessage?.message}
                required
              />
            )}
          />
          <Box>
            <Typography>Selected Infractions</Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">ID</TableCell>
                    <TableCell align="left">Reason</TableCell>
                    <TableCell align="left">Last Updated</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="left">{row.id}</TableCell>
                      <TableCell align="left">
                        {row.adminReasonText ?? "N/A"}
                      </TableCell>
                      <TableCell align="left">
                        {dayjs.unix(row.lastUpdate.unix).format("lll")}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={() => {
                            setPreviewInfractionId(row.id);
                            setMessageOpen(true);
                          }}
                        >
                          <Visibility />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setRows((prev) =>
                              prev.filter((r) => r.id !== row.id)
                            );
                          }}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          {!!declineAction && (
            <Button
              color="error"
              disabled={!rows.length || !isValid}
              onClick={() => setDeclineOpen(true)}
            >
              Decline
            </Button>
          )}
          {!!approveAction && (
            <Button
              color="success"
              disabled={!rows.length || !isValid}
              onClick={() => setApproveOpen(true)}
            >
              Approve
            </Button>
          )}
          {!!reverseAction && (
            <Button
              color="warning"
              disabled={!rows.length || !isValid}
              onClick={() => setReverseOpen(true)}
            >
              Reverse
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BulkActionDialog;
