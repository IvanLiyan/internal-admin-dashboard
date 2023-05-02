import ApproveDialog from "@app/infractions/components/ApproveDialog";
import DeclineDialog from "@app/infractions/components/DeclineDialog";
import MessagePreviewDialog from "@app/infractions/components/MessagePreviewDialog";
import ReverseDialog from "@app/infractions/components/ReverseDialog";
import { Data } from "@app/infractions/toolkit/mocks";
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
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

type Props = Pick<DialogProps, "open"> & {
  readonly infractions: ReadonlyArray<Data>;
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
  const [approveOpen, setApproveOpen] = useState(false);
  const [declineOpen, setDeclineOpen] = useState(false);
  const [reverseOpen, setReverseOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [previewInfractionId, setPreviewInfractionId] = useState<string | null>(
    null
  );

  const [rows, setRows] = useState<ReadonlyArray<Data>>([]);

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

  const handleApprove = () => {
    handleSubmit((data) => {
      return data;
    })();
    onClose();
  };

  const handleDecline = () => {
    handleSubmit((data) => {
      return data;
    })();
    onClose();
  };

  const handleReverse = () => {
    handleSubmit((data) => {
      return data;
    })();
    onClose();
  };

  return (
    <Dialog {...props} maxWidth={"sm"} fullWidth onClose={onClose}>
      <ApproveDialog
        open={approveOpen}
        infractionsCount={rows.length}
        handleClose={() => setApproveOpen(false)}
        handleConfirm={handleApprove}
      />
      <DeclineDialog
        open={declineOpen}
        infractionsCount={rows.length}
        handleClose={() => setDeclineOpen(false)}
        handleConfirm={handleDecline}
      />
      <ReverseDialog
        open={reverseOpen}
        infractionsCount={rows.length}
        handleClose={() => setReverseOpen(false)}
        handleConfirm={handleReverse}
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
                    <TableRow key={row.infractionID}>
                      <TableCell align="left">{row.infractionID}</TableCell>
                      <TableCell align="left">{row.reasons}</TableCell>
                      <TableCell align="left">
                        {new Intl.DateTimeFormat("en-us").format(
                          new Date(row.lastUpdate / 1000)
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={() => {
                            setPreviewInfractionId(row.infractionID);
                            setMessageOpen(true);
                          }}
                        >
                          <Visibility />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            setRows((prev) =>
                              prev.filter(
                                (r) => r.infractionID !== row.infractionID
                              )
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
