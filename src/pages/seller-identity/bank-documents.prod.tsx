import LoadingIndicator from "@app/core/components/LoadingIndicator";
import PageRoot from "@app/core/components/PageRoot";
import CommentButton from "@app/seller-identity/components/bank-documents/CommentButton";
import {
  BankAccountDocumentsQuery,
  ColumnLabel,
  TableColumns,
  useTableData,
} from "@app/seller-identity/toolkit/bank-documents/table";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "urql";

const BankDocumentsPage: NextPage<Record<string, never>> = () => {
  const { mid } = useRouter().query;

  const [{ fetching, data }] = useQuery({
    query: BankAccountDocumentsQuery,
    variables: {
      merchantId: typeof mid === "string" ? mid : null,
    },
  });

  const tableData = useTableData(data);

  if (fetching) {
    return <LoadingIndicator />;
  }

  return (
    <PageRoot title="Bank Account Documents">
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{ColumnLabel.documentState}</TableCell>
                <TableCell>{ColumnLabel.documentType}</TableCell>
                <TableCell>{ColumnLabel.uploadedAt}</TableCell>
                <TableCell>{ColumnLabel.reviewedAt}</TableCell>
                <TableCell>{ColumnLabel.reviewer}</TableCell>
                <TableCell>{ColumnLabel.comment}</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.documentId}>
                  {TableColumns.map((col) => (
                    <TableCell key={col}>{row[col]}</TableCell>
                  ))}
                  <TableCell>
                    <Button
                      onClick={() => window.open(row.documentUrl, "_blank")}
                    >
                      View
                    </Button>
                    <CommentButton
                      docAction={"APPROVED"}
                      mid={row.mid}
                      row={row}
                    >
                      Approve
                    </CommentButton>
                    <CommentButton
                      docAction={"REJECTED"}
                      mid={row.mid}
                      row={row}
                    >
                      Reject
                    </CommentButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </PageRoot>
  );
};

export default BankDocumentsPage;
