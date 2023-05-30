import LoadingIndicator from "@app/core/components/LoadingIndicator";
import PageRoot from "@app/core/components/PageRoot";
import Searchbox from "@app/core/components/Searchbox";
import CompactTableCell from "@app/infractions/components/CompactTableCell";
import TableContextProvider from "@app/infractions/components/TableContext";
import TableHeading from "@app/infractions/components/TableHeading";
import ClaimButton from "@app/infractions/components/buttons/ClaimButton";
import ClaimSelectedButton from "@app/infractions/components/buttons/ClaimSelectedButton";
import ConfirmButton from "@app/infractions/components/buttons/ConfirmButton";
import DeleteButton from "@app/infractions/components/buttons/DeleteButton";
import DumpSelectedButton from "@app/infractions/components/buttons/DumpSelectedButton";
import ClaimFilter from "@app/infractions/components/filters/ClaimFilter";
import CounterfeitReasonFilter from "@app/infractions/components/filters/CounterfeitReasonFilter";
import DateFilter from "@app/infractions/components/filters/DateFilter";
import ReasonFilter from "@app/infractions/components/filters/ReasonFilter";
import {
  initTableState,
  tableStateReducer,
} from "@app/infractions/toolkit/reducer";
import {
  RequiresReviewTableColumns,
  useSelectHandlers,
  useTableData,
  useTableQuery,
} from "@app/infractions/toolkit/table";
import {
  Button,
  Checkbox,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import dayjs from "dayjs";
import { NextPage } from "next";
import { useEffect, useReducer } from "react";

const RequiresReviewPage: NextPage<Record<string, never>> = () => {
  const [state, dispatch] = useReducer(
    tableStateReducer,
    { order: "ASC", orderBy: "created", states: ["REQUIRES_ADMIN_REVIEW"] },
    initTableState
  );
  const [{ data, fetching }, reexecuteQuery] = useTableQuery(state);
  const tableData = useTableData(data);
  const { onSelect, onSelectAll } = useSelectHandlers(
    state,
    dispatch,
    tableData
  );
  const isSelected = (name: string) => state.selected.includes(name);

  useEffect(() => {
    dispatch({
      selected: state.selected.filter((id) =>
        tableData.some((row) => row.infractionId == id && !row.bulkStatus)
      ),
    });
  }, [state.selected, tableData]);

  return (
    <PageRoot title="Infractions Require Admin Approval">
      <Paper>
        <TableContextProvider
          state={state}
          dispatch={{ dispatch, reexecuteQuery }}
        >
          <Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Searchbox
                onConfirm={(token) => {
                  dispatch({ search: token });
                }}
                size="small"
                placeholder="Search"
                sx={{ minWidth: 400, mx: 1 }}
                searchBy={{
                  keys: ["ID", "Merchant Name"],
                  onSearchByChange: (searchBy) => dispatch({ searchBy }),
                  defaultKey: "ID",
                }}
              />
              <TablePagination
                showFirstButton
                showLastButton
                rowsPerPageOptions={[10, 50, 100]}
                component={"div"}
                count={data?.policy?.merchantWarningCount || 0}
                rowsPerPage={state.limit}
                page={state.page}
                onPageChange={(_, page) => {
                  dispatch({ page });
                }}
                onRowsPerPageChange={(event) => {
                  dispatch({
                    limit: parseInt(event.target.value),
                  });
                }}
              />
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"} m={1}>
              <DumpSelectedButton />
              <ClaimSelectedButton />
              <ConfirmButton />
              <DeleteButton />
            </Stack>
            <Stack direction={"row"} spacing={1} m={1}>
              {/* Place filters here */}
              <DateFilter
                onChangeStartDate={(startDate) => {
                  dispatch({
                    issueDateStart:
                      startDate != null ? dayjs(startDate).unix() : null,
                  });
                }}
                onChangeEndDate={(endDate) => {
                  dispatch({
                    issueDateEnd:
                      endDate != null ? dayjs(endDate).unix() : null,
                  });
                }}
              />
              <ClaimFilter
                onConfirm={(status) => {
                  dispatch({ claimStatus: status });
                }}
              />
              <ReasonFilter
                onConfirm={(reason) => {
                  dispatch({ reasons: reason });
                }}
              />
              <CounterfeitReasonFilter
                onConfirm={() => {
                  return;
                }}
              />
            </Stack>
          </Stack>
          {fetching ? (
            <LoadingIndicator />
          ) : (
            <TableContainer>
              <Table size={"small"}>
                <TableHeading
                  columns={RequiresReviewTableColumns}
                  numSelected={state.selected.length}
                  order={state.order == "ASC" ? "asc" : "desc"}
                  orderBy={state.orderBy}
                  onSelectAllClick={onSelectAll}
                  rowCount={tableData.length}
                />
                <TableBody>
                  {tableData.map((row) => {
                    const isItemSelected = isSelected(row.infractionId);
                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={row.infractionId}
                        selected={isItemSelected}
                      >
                        <CompactTableCell padding="checkbox">
                          <Checkbox
                            disabled={row.bulkStatus}
                            checked={isItemSelected}
                            onClick={(event) =>
                              onSelect(event, row.infractionId)
                            }
                          />
                        </CompactTableCell>
                        {RequiresReviewTableColumns.map((col) => (
                          <CompactTableCell key={col} align="right">
                            {row[col]}
                          </CompactTableCell>
                        ))}
                        <CompactTableCell align="center">
                          <Button
                            disabled={row.bulkStatus}
                            size="small"
                            href={`/warning/edit/${row.infractionId}`}
                            target="_blank"
                          >
                            Edit
                          </Button>
                          <DeleteButton infraction={row} />
                          <ConfirmButton infraction={row} />
                          <ClaimButton infraction={row} />
                        </CompactTableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </TableContextProvider>
      </Paper>
    </PageRoot>
  );
};

export default RequiresReviewPage;
