import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Box,
  Table,
  TableHead,
  TableBody,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  ExpandRowColumns,
  ExpandRowLabels,
  TableColumns,
  TableData,
} from "@app/infractions/toolkit/bulk-status";

const BulkProcessRequestRow: React.FC<{
  readonly row: TableData;
}> = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {TableColumns.map((col) => (
          <TableCell key={col} align="right">
            {row[col]}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {ExpandRowColumns.map((col) => (
                      <TableCell key={col} align="right">
                        {ExpandRowLabels[col]}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.infractions.map((item, i) => (
                    <TableRow
                      key={`${row.requestId}-${item.infractionId}-${i}`}
                    >
                      {ExpandRowColumns.map((ec) => (
                        <TableCell key={ec} align="right">
                          {item[ec]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default BulkProcessRequestRow;
