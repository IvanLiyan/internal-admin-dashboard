import LoadingIndicator from "@app/core/components/LoadingIndicator";
import PageRoot from "@app/core/components/PageRoot";
import Searchbox from "@app/core/components/Searchbox";
import BulkProcessRequestRow from "@app/infractions/components/BulkProcessRequestRow";
import {
  BulkProcessingStatusQuery,
  ColumnLabels,
  TableColumns,
  useTableData,
} from "@app/infractions/toolkit/bulk-status";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "urql";

const BulkProcessStatusPage: NextPage<Record<string, never>> = () => {
  const [search, setSearch] = useState("");
  const [orderBy] = useState<(typeof TableColumns)[number]>("submitted");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const offset = page * limit;

  const [{ data, fetching }] = useQuery({
    query: BulkProcessingStatusQuery,
    variables: {
      limit,
      offset,
      search,
    },
  });

  const tableData = useTableData(data);

  return (
    <PageRoot title="Bulk Infraction Requests">
      <Paper>
        <Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Searchbox
              onConfirm={(token) => {
                setSearch(token);
              }}
              size="small"
              placeholder="Search"
              sx={{ minWidth: 400, mx: 1 }}
            />
            <TablePagination
              showFirstButton
              showLastButton
              rowsPerPageOptions={[10, 50, 100]}
              component={"div"}
              count={data?.policy?.merchantWarningBulkProcessCount || 0}
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
        </Stack>
        {fetching ? (
          <LoadingIndicator />
        ) : (
          <TableContainer>
            <Table size={"medium"}>
              <TableHead>
                <TableRow>
                  <TableCell />

                  {TableColumns.map((headCell) => {
                    const key = headCell;
                    const label = ColumnLabels[headCell];
                    return (
                      <TableCell
                        key={key}
                        align={"right"}
                        sortDirection={orderBy === key ? "asc" : false}
                      >
                        <TableSortLabel
                          active={orderBy === key}
                          direction={
                            orderBy === key && "asc" ? "asc" : undefined
                          }
                        >
                          {label}
                        </TableSortLabel>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>

              <TableBody>
                {tableData?.map((row) => {
                  return (
                    <BulkProcessRequestRow key={row.requestId} row={row} />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </PageRoot>
  );
};

export default BulkProcessStatusPage;
