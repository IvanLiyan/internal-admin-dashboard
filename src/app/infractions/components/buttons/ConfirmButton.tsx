import {
  useBulkDisputeAction,
  useDisputeAction,
} from "@app/infractions/toolkit/action";
import {
  TableDispatchContext,
  TableStateContext,
} from "@app/infractions/toolkit/context";
import { TableData } from "@app/infractions/toolkit/table";
import {
  Box,
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";

type Props = ButtonProps & {
  infraction?: Pick<TableData, "infractionId" | "merchantName" | "bulkStatus">;
};

const ConfirmButton: React.FC<Props> = ({ infraction, ...buttonProps }) => {
  const { onConfirm } = useDisputeAction();
  const [dialogOpen, setDialogOpen] = useState(false);

  const state = useContext(TableStateContext);
  const dispatchContext = useContext(TableDispatchContext);
  const handleBulkAction = useBulkDisputeAction();

  return (
    <>
      {dialogOpen && (
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            {infraction != null ? (
              <Typography>
                Are you sure you want to confirm infraction for the merchant{" "}
                <Box fontWeight={"bold"} component={"span"}>
                  {infraction.merchantName}
                </Box>{" "}
                and all its related merchants?
              </Typography>
            ) : (
              <Typography>
                Are you sure you want to confirm the{" "}
                {state?.selected.length || 0} selected infractions?
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setDialogOpen(false);
                if (infraction != null) {
                  onConfirm({
                    warningId: infraction.infractionId,
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
                  handleBulkAction("CONFIRM", {
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
              Confirm Infraction
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
        Confirm
      </Button>
    </>
  );
};

export default ConfirmButton;
