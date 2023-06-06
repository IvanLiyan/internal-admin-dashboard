import LoadingIndicator from "@app/core/components/LoadingIndicator";
import PageRoot from "@app/core/components/PageRoot";
import Searchbox from "@app/core/components/Searchbox";
import AlternatingTableRow from "@app/infractions/components/AlternatingTableRow";
import CompactTableCell from "@app/infractions/components/CompactTableCell";
import TableContextProvider from "@app/infractions/components/TableContext";
import TableHeading from "@app/infractions/components/TableHeading";
import ClaimButton from "@app/infractions/components/buttons/ClaimButton";
import ClaimSelectedButton from "@app/infractions/components/buttons/ClaimSelectedButton";
import DumpSelectedButton from "@app/infractions/components/buttons/DumpSelectedButton";
import ClaimFilter from "@app/infractions/components/filters/ClaimFilter";
import CounterfeitReasonFilter from "@app/infractions/components/filters/CounterfeitReasonFilter";
import CounterfeitSubreasonFilter from "@app/infractions/components/filters/CounterfeitSubreasonFilter";
import DateFilter from "@app/infractions/components/filters/DateFilter";
import ReasonFilter from "@app/infractions/components/filters/ReasonFilter";
import MessagePreviewDialog from "@app/infractions/components/modals/MessagePreviewDialog";
import {
  initTableState,
  tableStateReducer,
} from "@app/infractions/toolkit/reducer";
import {
  PaymentReleaseReviewTableColumns,
  useSelectHandlers,
  useTableData,
  useTableQuery,
} from "@app/infractions/toolkit/table";
import { Visibility } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import dayjs from "dayjs";
import { NextPage } from "next";
import { useReducer, useState } from "react";

const PaymentReleaseReviewPage: NextPage<Record<string, never>> = () => {
  const [msgPreview, setMsgPreview] = useState<{
    open: boolean;
    id: string | null;
  }>({ open: false, id: null });

  const [state, dispatch] = useReducer(
    tableStateReducer,
    { order: "ASC", orderBy: "lastUpdated", states: ["REQUEST_PAYMENT"] },
    initTableState
  );
  const [{ data, fetching }, reexecuteQuery] = useTableQuery(state);
  const tableData = useTableData(data);
  const { onSelect, onSelectAll } = useSelectHandlers(
    state,
    dispatch,
    tableData
  );
  const isSelected = (name: string) => state.selected.indexOf(name) !== -1;

  return (
    <PageRoot title="Payment Release Review">
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
                placeholder="Search by MID/PID/OID/IID"
                sx={{ minWidth: 400, mx: 1 }}
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
                onConfirm={(category) => {
                  dispatch({ category });
                }}
              />
              <CounterfeitSubreasonFilter
                onConfirm={(subcategory) => {
                  dispatch({ subcategory });
                }}
              />
            </Stack>
          </Stack>
          {fetching ? (
            <LoadingIndicator />
          ) : (
            <TableContainer>
              <Table size={"medium"}>
                <TableHeading
                  columns={PaymentReleaseReviewTableColumns}
                  numSelected={state.selected.length}
                  order={state.order == "ASC" ? "asc" : "desc"}
                  orderBy={state.orderBy}
                  onSelectAllClick={onSelectAll}
                  rowCount={tableData.length}
                />
                <TableBody>
                  {tableData?.map((row) => {
                    const isItemSelected = isSelected(row.infractionId);
                    return (
                      <AlternatingTableRow
                        hover
                        tabIndex={-1}
                        key={row.infractionId}
                        selected={isItemSelected}
                      >
                        <CompactTableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onClick={(event) =>
                              onSelect(event, row.infractionId)
                            }
                          />
                        </CompactTableCell>
                        {PaymentReleaseReviewTableColumns.map((col) => (
                          <CompactTableCell key={col} align="left">
                            {row[col]}
                          </CompactTableCell>
                        ))}
                        <CompactTableCell align="center">
                          <IconButton
                            onClick={() => {
                              setMsgPreview({
                                open: true,
                                id: row.infractionId,
                              });
                            }}
                          >
                            <Visibility />
                          </IconButton>
                        </CompactTableCell>
                        <CompactTableCell align="center">
                          <Button
                            size="small"
                            href={`/warning/view/${row.infractionId}`}
                            target="_blank"
                          >
                            View
                          </Button>
                          <ClaimButton infraction={row} />
                        </CompactTableCell>
                      </AlternatingTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {msgPreview.open && (
            <MessagePreviewDialog
              infractionId={msgPreview.id}
              open={msgPreview.open}
              handleClose={() => {
                setMsgPreview({ open: false, id: null });
              }}
            />
          )}
        </TableContextProvider>
      </Paper>
    </PageRoot>
  );
};

export default PaymentReleaseReviewPage;
