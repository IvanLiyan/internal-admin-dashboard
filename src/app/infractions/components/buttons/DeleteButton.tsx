import {
  CancelReasonLabel,
  CancelReasons,
  useBulkDisputeAction,
  useDisputeAction,
} from "@app/infractions/toolkit/action";
import {
  TableDispatchContext,
  TableStateContext,
} from "@app/infractions/toolkit/context";
import { TableData } from "@app/infractions/toolkit/table";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { CancelReason } from "@schema";
import { useContext, useState } from "react";

type Props = ButtonProps & {
  infraction?: Pick<TableData, "infractionId" | "bulkStatus">;
};

const DeleteButton: React.FC<Props> = ({ infraction, ...buttonProps }) => {
  const { onDelete } = useDisputeAction();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [cancelReason, setCancelReason] =
    useState<CancelReason>("POLICY_UPDATE");

  const state = useContext(TableStateContext);
  const dispatchContext = useContext(TableDispatchContext);
  const handleBulkAction = useBulkDisputeAction();

  return (
    <>
      {dialogOpen && (
        <Dialog
          open={dialogOpen}
          maxWidth={"sm"}
          fullWidth
          onClose={() => setDialogOpen(false)}
        >
          <DialogTitle>Cancel Reason</DialogTitle>
          <DialogContent>
            <Typography>
              Please enter a reason for deleting the infraction(s)
            </Typography>
            <Select
              variant="standard"
              value={cancelReason}
              onChange={(event) => {
                setCancelReason(event.target.value as CancelReason);
              }}
            >
              {CancelReasons.map((reason) => (
                <MenuItem key={reason} value={reason}>
                  {CancelReasonLabel[reason]}
                </MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setDialogOpen(false);
                if (infraction != null) {
                  onDelete({
                    warningId: infraction.infractionId,
                    cancelInput: { reason: cancelReason },
                  }).then((result) => {
                    if (
                      result.data?.policy?.merchantWarning
                        ?.upsertMerchantWarning?.ok
                    ) {
                      dispatchContext?.reexecuteQuery({
                        requestPolicy: "cache-and-network",
                      });
                    }
                  });
                } else {
                  handleBulkAction("DELETE", {
                    warningIds: state?.selected || [],
                  }).then((result) => {
                    if (result.data?.policy?.bulkUpsertMerchantWarning?.ok) {
                      dispatchContext?.reexecuteQuery({
                        requestPolicy: "cache-and-network",
                      });
                    }
                  });
                }
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Button
        {...buttonProps}
        disabled={
          !!infraction?.bulkStatus ||
          (infraction == null && !state?.selected.length)
        }
        size="small"
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        Delete
      </Button>
    </>
  );
};

export default DeleteButton;
