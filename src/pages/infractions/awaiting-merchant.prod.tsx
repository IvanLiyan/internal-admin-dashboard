import LoadingIndicator from "@app/core/components/LoadingIndicator";
import PageRoot from "@app/core/components/PageRoot";
import Searchbox from "@app/core/components/Searchbox";
import TableHeading from "@app/infractions/components/TableHeading";
import ClaimFilter from "@app/infractions/components/filters/ClaimFilter";
import CounterfeitReasonFilter from "@app/infractions/components/filters/CounterfeitReasonFilter";
import CounterfeitSubreasonFilter from "@app/infractions/components/filters/CounterfeitSubreasonFilter";
import DateFilter from "@app/infractions/components/filters/DateFilter";
import ReasonFilter from "@app/infractions/components/filters/ReasonFilter";
import BulkActionDialog from "@app/infractions/components/modals/BulkActionDialog";
import { TableColumns } from "@app/infractions/toolkit/awaiting-merchant";
import {
  BulkDisputeQuery,
  OrderBy,
  useInfractionTableData,
} from "@app/infractions/toolkit/table";
import { InfractionTableThemeOptions } from "@app/infractions/toolkit/theme";
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
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { MerchantWarningState, SortOrderType } from "@schema";
import { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "urql";

const AwaitingMerchantPage: NextPage<Record<string, never>> = () => {
  const [bulkActionOpen, setBulkActionOpen] = useState(false);
  const [order] = useState<SortOrderType>("ASC");
  const [orderBy] = useState<(typeof TableColumns)[number]>("lastUpdated");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [states] = useState<MerchantWarningState[]>(["AWAITING_MERCHANT"]);

  const offset = page * limit;
  const gqlOrderBy = OrderBy[orderBy];

  const [{ data, fetching }] = useQuery({
    query: BulkDisputeQuery,
    variables: {
      limit,
      offset,
      states,
      sort:
        gqlOrderBy == null ? undefined : { field: gqlOrderBy, order: order },
    },
  });

  const tableData = useInfractionTableData(TableColumns, data);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(tableData.map((n) => n.infractionId));
      return;
    }
    setSelected([]);
  };

  const handleClick = (
    event: React.MouseEvent<unknown>,
    infractionId: string
  ) => {
    if (selected.includes(infractionId)) {
      setSelected((prev) => prev.filter((i) => i !== infractionId));
      return;
    }
    setSelected((prev) => [...prev, infractionId]);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  return (
    <PageRoot title="Infractions Awaiting Merchant Response">
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
              count={data?.policy?.merchantWarningCount || 0}
              rowsPerPage={limit}
              page={page}
              onPageChange={(_, page) => {
                setPage(page);
              }}
              onRowsPerPageChange={(event) => {
                setLimit(parseInt(event.target.value));
              }}
            />
          </Stack>
          <Stack direction={"row"} justifyContent={"flex-end"} m={1}>
            <Button size="small" variant="text">
              Dump selected claim
            </Button>
            <Button size="small" variant="text">
              Claim selected
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => setBulkActionOpen(true)}
            >
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
            <CounterfeitSubreasonFilter
              onConfirm={() => {
                return;
              }}
            />
          </Stack>
        </Stack>
        {fetching ? (
          <LoadingIndicator />
        ) : (
          <ThemeProvider
            theme={(theme) =>
              createTheme({ ...theme, ...InfractionTableThemeOptions })
            }
          >
            <TableContainer>
              <Table size={"medium"}>
                <TableHeading
                  columns={TableColumns}
                  numSelected={selected.length}
                  order={order == "ASC" ? "asc" : "desc"}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  rowCount={tableData.length}
                />
                <TableBody>
                  {tableData?.map((row) => {
                    const isItemSelected = isSelected(row.infractionId);
                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={row.infractionId}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onClick={(event) =>
                              handleClick(event, row.infractionId)
                            }
                          />
                        </TableCell>
                        {TableColumns.map((col) => (
                          <TableCell key={col} align="right">
                            {row[col]}
                          </TableCell>
                        ))}
                        <TableCell align="center">
                          <Button size="small">View</Button>
                          <Button size="small">Claim</Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </ThemeProvider>
        )}
        <BulkActionDialog
          reverseAction
          open={bulkActionOpen}
          handleClose={() => setBulkActionOpen(false)}
          infractions={
            data?.policy?.merchantWarnings?.filter((r) =>
              selected.includes(r.id)
            ) || []
          }
        />
      </Paper>
    </PageRoot>
  );
};

export default AwaitingMerchantPage;
