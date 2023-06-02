import LoadingIndicator from "@app/core/components/LoadingIndicator";
import PageRoot from "@app/core/components/PageRoot";
import Searchbox from "@app/core/components/Searchbox";
import StatusFilter from "@app/seller-identity/components/StatusFilter";
import TableContextProvider from "@app/seller-identity/components/bank-verifications/TableContext";
import {
  initTableState,
  tableStateReducer,
} from "@app/seller-identity/toolkit/bank-verifications/reducer";
import {
  BankAccountVerificationsQuery,
  ColumnLabel,
  TableColumns,
  useTableData,
} from "@app/seller-identity/toolkit/bank-verifications/table";
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useReducer } from "react";
import { useQuery } from "urql";

const BankVerificationsPage: NextPage<Record<string, never>> = () => {
  const [state, dispatch] = useReducer(tableStateReducer, {}, initTableState);
  const router = useRouter();

  const [{ fetching, data }] = useQuery({
    query: BankAccountVerificationsQuery,
    variables: {
      limit: state.limit,
      merchantId: state.merchantId,
      offset: state.offset,
      state: state.status,
    },
  });

  const tableData = useTableData(data);

  return (
    <PageRoot title="Bank Account Verification">
      <Paper>
        <TableContextProvider state={state} dispatch={{ dispatch }}>
          <Stack
            padding={1}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Searchbox
              placeholder="Search by MID"
              onConfirm={(token) => dispatch({ merchantId: token })}
              size="small"
              sx={{ minWidth: 300 }}
            />
            <TablePagination
              showFirstButton
              showLastButton
              rowsPerPageOptions={[10, 50, 100]}
              component={"div"}
              count={data?.merchantIdentity?.bankAccountVerificationsCount || 0}
              rowsPerPage={state.limit}
              page={state.page}
              onPageChange={(_, page) => dispatch({ page })}
              onRowsPerPageChange={(event) =>
                dispatch({ limit: parseInt(event.target.value) })
              }
            />
          </Stack>

          {fetching ? (
            <LoadingIndicator />
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {TableColumns.map((col) => {
                      if (col === "status") {
                        return (
                          <TableCell key={col}>
                            <StatusFilter />
                            {ColumnLabel.status}
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={col}>{ColumnLabel[col]}</TableCell>
                      );
                    })}
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.id}>
                      {TableColumns.map((col) => (
                        <TableCell key={col}>{row[col]}</TableCell>
                      ))}
                      <TableCell>
                        <Button
                          onClick={() =>
                            router.push(
                              `/seller-identity/bank-documents?mid=${row.id}`
                            )
                          }
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </TableContextProvider>
      </Paper>
    </PageRoot>
  );
};

export default BankVerificationsPage;
