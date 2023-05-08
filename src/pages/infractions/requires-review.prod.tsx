import LoadingIndicator from "@app/core/components/LoadingIndicator";
import PageRoot from "@app/core/components/PageRoot";
import Searchbox from "@app/core/components/Searchbox";
import TableHeading from "@app/infractions/components/TableHeading";
import ClaimFilter from "@app/infractions/components/filters/ClaimFilter";
import CounterfeitReasonFilter from "@app/infractions/components/filters/CounterfeitReasonFilter";
import DateFilter from "@app/infractions/components/filters/DateFilter";
import ReasonFilter from "@app/infractions/components/filters/ReasonFilter";
import { TableColumns } from "@app/infractions/toolkit/requires-review";
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
import {
  MerchantWarningReason,
  MerchantWarningState,
  SortOrderType,
} from "@schema";
import dayjs from "dayjs";
import { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "urql";

const RequiresReviewPage: NextPage<Record<string, never>> = () => {
  const [order] = useState<SortOrderType>("ASC");
  const [orderBy] = useState<(typeof TableColumns)[number]>("created");
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [states] = useState<MerchantWarningState[]>(["REQUIRES_ADMIN_REVIEW"]);
  const [issueDateStart, setIssueDateStart] = useState<number | null>(null);
  const [issueDateEnd, setIssueDateEnd] = useState<number | null>(null);
  const [reasons, setReasons] = useState<
    MerchantWarningReason[] | null | undefined
  >(null);

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
      issueDateStart:
        issueDateStart != null
          ? {
              unix: issueDateStart,
            }
          : undefined,
      issueDateEnd: issueDateEnd != null ? { unix: issueDateEnd } : undefined,
      reasons,
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
              showFirstButton
              showLastButton
              rowsPerPageOptions={[10, 50, 100]}
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
            <Button size="small" variant="text">
              Confirm
            </Button>
            <Button size="small" variant="text">
              Delete
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={1} m={1}>
            {/* Place filters here */}
            <DateFilter
              onChangeStartDate={(startDate) => {
                if (startDate == null) {
                  setIssueDateStart(null);
                  return;
                }
                setIssueDateStart(dayjs(startDate).unix());
              }}
              onChangeEndDate={(endDate) => {
                if (endDate == null) {
                  setIssueDateEnd(null);
                  return;
                }
                setIssueDateEnd(dayjs(endDate).unix());
              }}
            />
            <ClaimFilter
              onConfirm={() => {
                return;
              }}
            />
            <ReasonFilter
              onConfirm={(reason) => {
                setReasons(reason);
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
          <ThemeProvider
            theme={(theme) =>
              createTheme({ ...theme, ...InfractionTableThemeOptions })
            }
          >
            <TableContainer>
              <Table size={"small"}>
                <TableHeading
                  columns={TableColumns}
                  numSelected={selected.length}
                  order={order == "ASC" ? "asc" : "desc"}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
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
                          <Button size="small">Edit</Button>
                          <Button size="small">Delete</Button>
                          <Button size="small">Confirm</Button>
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
      </Paper>
    </PageRoot>
  );
};

export default RequiresReviewPage;
