import PageRoot from "@app/core/components/PageRoot";
import Searchbox from "@app/core/components/Searchbox";
import BulkActionDialog from "@app/infractions/components/BulkActionDialog";
import ClaimFilter from "@app/infractions/components/ClaimFilter";
import CounterfeitReasonFilter from "@app/infractions/components/CounterfeitReasonFilter";
import DateFilter from "@app/infractions/components/DateFilter";
import ReasonFilter from "@app/infractions/components/ReasonFilter";
import ActionRequiredTableHead from "@app/infractions/components/action-required/TableHead";
import {
  Data,
  MockActionRequiredData,
  Order,
} from "@app/infractions/toolkit/mocks";
import {
  Button,
  Checkbox,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const DEFAULT_ORDER = "asc";
const DEFAULT_ORDER_BY: keyof Data = "created";
const DEFAULT_ROWS_PER_PAGE = 25;

/**
 * Scaffolding for Awaiting Admin page
 */
const RequiresReviewPage: NextPage<Record<string, never>> = () => {
  const [bulkActionOpen, setBulkActionOpen] = useState(false);
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
    <PageRoot title="Infractions Require Admin Approval">
      <Paper>
        <Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Searchbox
              onConfirm={(token) => {
                console.log(token);
              }}
              size="small"
              placeholder="Infraction ID, Product ID, Order ID"
              sx={{ minWidth: 400, mx: 1 }}
            />
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component={"div"}
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
          </Stack>
          <Stack direction={"row"} justifyContent={"flex-end"} m={1}>
            <Button variant="text">Dump selected claim</Button>
            <Button variant="text">Claim selected</Button>
            <Button variant="contained" onClick={() => setBulkActionOpen(true)}>
              Take further action
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={1} m={1}>
            {/* Place filters here */}
            <DateFilter
              onChangeStartDate={() => {
                return;
              }}
              onChangeEndDate={() => {
                return;
              }}
            />
            <ClaimFilter
              onConfirm={() => {
                return;
              }}
            />
            <ReasonFilter
              onConfirm={() => {
                return;
              }}
            />
            <CounterfeitReasonFilter
              onConfirm={() => {
                return;
              }}
            />
          </Stack>
        </Stack>
        <TableContainer>
          <Table size={"medium"}>
            <ActionRequiredTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
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
        <BulkActionDialog
          approveAction
          declineAction
          open={bulkActionOpen}
          handleClose={() => setBulkActionOpen(false)}
          infractions={
            visibleRows?.filter((r) => selected.includes(r.infractionID)) || []
          }
        />
      </Paper>
    </PageRoot>
  );
};

export default RequiresReviewPage;
