import { Data, Order } from "@app/infractions/toolkit/types";
import { MockActionRequiredData } from "@app/infractions/toolkit/mocks";
import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import RequiresReviewTableHead from "@app/infractions/components/requires-review/TableHead";
import { Heading } from "@ContextLogic/atlas-ui";
import React, { useEffect, useState } from "react";

const DEFAULT_ORDER = "asc";
const DEFAULT_ORDER_BY: keyof Data = "created";
const DEFAULT_ROWS_PER_PAGE = 25;

/**
 * Scaffolding for Awaiting Admin page
 */
const AwaitingAdminPage: React.FC = () => {
  const [order] = useState<Order>(DEFAULT_ORDER);
  const [orderBy] = useState<keyof Data>(DEFAULT_ORDER_BY);
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [visibleRows, setVisibleRows] = useState<Data[] | null>(null);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);

  useEffect(() => {
    setVisibleRows(MockActionRequiredData.slice(0, rowsPerPage));
  }, [rowsPerPage]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = MockActionRequiredData.map((n) => n.infractionID);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  return (
    <Box>
      <Heading variant="h4">Infractions Action Required</Heading>
      <Paper>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={MockActionRequiredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, page) => {
            setPage(page);
          }}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value));
          }}
        />

        <TableContainer>
          <Table size={"medium"}>
            <RequiresReviewTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              // onRequestSort={() => {}}
              rowCount={MockActionRequiredData.length}
            />
            <TableBody>
              {visibleRows?.map((row) => {
                const isItemSelected = isSelected(row.infractionID);
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.infractionID}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onClick={(event) =>
                          handleClick(event, row.infractionID)
                        }
                      />
                    </TableCell>
                    <TableCell align="right">
                      {new Intl.DateTimeFormat("en-us", {
                        dateStyle: "medium",
                        timeStyle: "medium",
                      }).format(new Date(row.created / 1000))}
                    </TableCell>
                    <TableCell align="right">
                      {new Intl.DateTimeFormat("en-us", {
                        dateStyle: "medium",
                        timeStyle: "medium",
                      }).format(new Date(row.lastUpdate / 1000))}
                    </TableCell>
                    <TableCell align="right">{row.mid}</TableCell>
                    <TableCell align="right">{row.infractionID}</TableCell>
                    <TableCell align="right">{row.reasons}</TableCell>
                    <TableCell align="right">{row.parentCategory}</TableCell>
                    <TableCell align="right">{row.subCategory}</TableCell>
                    <TableCell align="right">{row.bdReps}</TableCell>
                    <TableCell align="right">{row.geo}</TableCell>
                    <TableCell align="right">{row.wssTier}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AwaitingAdminPage;
