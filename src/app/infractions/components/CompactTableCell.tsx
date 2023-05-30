import { TableCell, TableCellProps, styled } from "@mui/material";

const CompactTableCell = styled(TableCell)<TableCellProps>(() => ({
  padding: "2px 4px",
}));

export default CompactTableCell;
