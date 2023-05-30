import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Typography,
} from "@mui/material";

type Props = Pick<DialogProps, "open"> & {
  readonly infractionsCount: number;
  readonly handleClose: () => void;
  readonly handleConfirm: () => void;
};

const ReverseDialog: React.FC<Props> = ({
  infractionsCount,
  handleClose,
  handleConfirm,
  ...props
}) => {
  return (
    <Dialog {...props} maxWidth={"sm"} fullWidth onClose={handleClose}>
      <DialogTitle>Decline Disputes</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to{" "}
          <Box
            component={"span"}
            sx={{
              fontWeight: "bold",
              display: "inline",
              color: (theme) => theme.palette.warning.main,
            }}
          >
            reverse {infractionsCount}
          </Box>{" "}
          infraction disputes?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            handleClose();
            handleConfirm();
          }}
        >
          Reverse All
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReverseDialog;
