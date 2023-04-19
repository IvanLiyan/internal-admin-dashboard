import { Data } from "@app/infractions/toolkit/mocks";
import { BulkActionModalSchema } from "@app/infractions/toolkit/validation";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";

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
  const formik = useFormik({
    initialValues: { message: "", internalMessage: "" },
    validationSchema: BulkActionModalSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onClose = () => {
    handleClose();
    formik.resetForm();
  };

  return (
    <Dialog {...props} maxWidth={"sm"} fullWidth onClose={onClose}>
      <DialogTitle>Bulk Action</DialogTitle>
      <DialogContent>
        <TextField
          id="message"
          sx={{ my: 1 }}
          label="Message to Merchant"
          error={formik.touched.message && Boolean(formik.errors.message)}
          value={formik.values.message}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          helperText={formik.touched.message && formik.errors.message}
          required
          multiline
          minRows={5}
          fullWidth
        />
        <TextField
          id="internalMessage"
          sx={{ my: 1 }}
          label="Internal Comments"
          error={
            formik.touched.internalMessage &&
            Boolean(formik.errors.internalMessage)
          }
          value={formik.values.internalMessage}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={
            formik.touched.internalMessage && formik.errors.internalMessage
          }
          required
          multiline
          minRows={5}
          fullWidth
        />
        <DialogContentText>Selected Infractions</DialogContentText>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableCell>ID</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableHead>
            <TableBody>
              {infractions.map((row) => (
                <TableRow key={row.infractionID}>
                  <TableCell>{row.infractionID}</TableCell>
                  <TableCell>{row.reasons}</TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat("en-us").format(
                      new Date(row.lastUpdate / 1000)
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {!!declineAction && <Button onClick={onClose}>Decline</Button>}
        {!!approveAction && <Button onClick={onClose}>Approve</Button>}
        {!!reverseAction && <Button onClick={onClose}>Reverse</Button>}
      </DialogActions>
    </Dialog>
  );
};

export default BulkActionDialog;
