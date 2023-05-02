import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Typography,
} from "@mui/material";

type Props = Pick<DialogProps, "open"> & {
  readonly infractionsCount: number;
  readonly handleClose: () => void;
  readonly handleConfirm: () => void;
};

const ApproveDialog: React.FC<Props> = ({
  infractionsCount,
  handleClose,
  handleConfirm,
  ...props
}) => {
  return (
    <Dialog {...props} maxWidth={"sm"} fullWidth onClose={handleClose}>
      <DialogTitle>Approve Disputes</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to{" "}
          <Typography
            sx={{
              fontWeight: "bold",
              display: "inline",
              color: (theme) => theme.palette.success.main,
            }}
          >
            approve {infractionsCount}
          </Typography>{" "}
          infraction disputes?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            handleClose();
            handleConfirm();
          }}
        >
          Approve All
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApproveDialog;
