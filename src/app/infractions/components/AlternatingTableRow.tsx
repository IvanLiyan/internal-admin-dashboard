import { TableRow, TableRowProps, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

const AlternatingTableRow = styled(TableRow)<TableRowProps>(() => ({
  ":nth-of-type(even)": {
    backgroundColor: grey[100],
  },
}));

export default AlternatingTableRow;
