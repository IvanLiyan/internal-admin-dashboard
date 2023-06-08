import LoadingIndicator from "@app/core/components/LoadingIndicator";
import PageRoot from "@app/core/components/PageRoot";
import Searchbox from "@app/core/components/Searchbox";
import AlternatingTableRow from "@app/infractions/components/AlternatingTableRow";
import CompactTableCell from "@app/infractions/components/CompactTableCell";
import TableHeading from "@app/infractions/components/TableHeading";
import ClaimButton from "@app/infractions/components/buttons/ClaimButton";
import ClaimSelectedButton from "@app/infractions/components/buttons/ClaimSelectedButton";
import DumpSelectedButton from "@app/infractions/components/buttons/DumpSelectedButton";
import ClaimFilter from "@app/infractions/components/filters/ClaimFilter";
import CounterfeitReasonFilter from "@app/infractions/components/filters/CounterfeitReasonFilter";
import CounterfeitSubreasonFilter from "@app/infractions/components/filters/CounterfeitSubreasonFilter";
import DateFilter from "@app/infractions/components/filters/DateFilter";
import ReasonFilter from "@app/infractions/components/filters/ReasonFilter";
import BulkActionDialog from "@app/infractions/components/modals/BulkActionDialog";
import MessagePreviewDialog from "@app/infractions/components/modals/MessagePreviewDialog";
import { TableContext } from "@app/infractions/toolkit/context";
import {
  initQueryState,
  queryStateReducer,
} from "@app/infractions/toolkit/reducer";
import {
  ActionRequiredTableColumns,
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
import { NextPage } from "next";
import { useEffect, useReducer, useState } from "react";

const ActionRequiredPage: NextPage<Record<string, never>> = () => {
  const [bulkActionOpen, setBulkActionOpen] = useState(false);
  const [msgPreview, setMsgPreview] = useState<{
    open: boolean;
    id: string | null;
  }>({ open: false, id: null });

  const [queryState, dispatch] = useReducer(
    queryStateReducer,
    { order: "ASC", orderBy: "lastUpdated", states: ["AWAITING_ADMIN"] },
    initQueryState
  );
  const [{ data, fetching }, reexecuteQuery] = useTableQuery(queryState);
  const tableData = useTableData(data);
  const { onSelect } = useSelectHandlers(queryState, dispatch, tableData);

  const isSelected = (name: string) => queryState.selected.includes(name);

  useEffect(() => {
    dispatch({
      actionType: "VALIDATE_SELECTION",
      validRows: tableData,
    });
  }, [tableData]);

  return (
    <PageRoot title="Infractions Action Required">
      <Paper>
        <TableContext.Provider
          value={{ dispatch, queryState, reexecuteQuery, tableData }}
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
                rowsPerPage={queryState.limit}
                page={queryState.page}
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
              <Button
                disabled={!queryState.selected.length}
                size="small"
                variant="contained"
                onClick={() => setBulkActionOpen(true)}
              >
                Take further action
              </Button>
            </Stack>
            <Stack direction={"row"} spacing={1} m={1}>
              {/* Place filters here */}
              <DateFilter />
              <ClaimFilter />
              <ReasonFilter />
              <CounterfeitReasonFilter />
              <CounterfeitSubreasonFilter />
            </Stack>
          </Stack>
          {fetching ? (
            <LoadingIndicator />
          ) : (
            <TableContainer>
              <Table>
                <TableHeading
                  columns={ActionRequiredTableColumns}
                  sortableColumns={["created", "lastUpdated"]}
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
                        {ActionRequiredTableColumns.map((col) => (
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
          {bulkActionOpen && (
            <BulkActionDialog
              approveAction
              declineAction
              reverseAction
              open={bulkActionOpen}
              handleClose={() => setBulkActionOpen(false)}
              infractions={
                data?.policy?.merchantWarnings?.filter((r) =>
                  queryState.selected.includes(r.id)
                ) || []
              }
            />
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
        </TableContext.Provider>
      </Paper>
    </PageRoot>
  );
};

export default ActionRequiredPage;
