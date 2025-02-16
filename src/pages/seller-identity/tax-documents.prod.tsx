import { useState } from "react";
import LoadingIndicator from "@app/core/components/LoadingIndicator";
import PageRoot from "@app/core/components/PageRoot";
import CommentButton from "@app/seller-identity/components/tax-documents/CommentButton";
import { TaxDocumentsTableContext } from "@app/seller-identity/toolkit/tax-documents/context";
import {
  TaxAccountDocumentsQuery,
  ColumnLabel,
  TableColumns,
  useTableData,
  ReauthenticationListRequest,
  ReauthenticationListResponse,
} from "@app/seller-identity/toolkit/tax-documents/table";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { useRequest } from "@app/core/toolkit/restApi";
import { merchFeUrl } from "@app/core/toolkit/router";
import { useEffect } from "react";

const TaxDocumentsPage: NextPage<Record<string, never>> = () => {
  const { query } = useRouter();
  const mid = query.mid as string;
  const [SPVReauthenticationLink, setSPVReauthenticationLink] =
    useState<string>("");

  const { data: ReauthenticationListData } = useRequest<
    ReauthenticationListResponse,
    ReauthenticationListRequest
  >({
    url: "/api/reauthentication-list",
    body: {
      reauthState: "approved",
      gotoPage: 0,
      followupOpDone: true,
      followupOpNotDone: true,
      followupOpNA: true,
      sortColumn: "updatedTime",
      sortOrder: "desc",
      merchantId: mid,
      creator: "all",
      bd: "all",
    },
  });

  const [{ fetching, data }, reexecuteQuery] = useQuery({
    query: TaxAccountDocumentsQuery,
    variables: {
      merchantId: typeof mid === "string" ? mid : "",
      verificationType: "TAX_FORM",
    },
    requestPolicy: "cache-and-network",
  });

  useEffect(() => {
    let ticketId = null;
    if (ReauthenticationListData?.tickets.length > 0) {
      ticketId = ReauthenticationListData?.tickets[0].ticketId;
    }
    if (ticketId != null) {
      setSPVReauthenticationLink(`/reauthentication-detail/${ticketId}`);
    }
  }, [ReauthenticationListData]);

  const tableData = useTableData(data);

  if (fetching) {
    return <LoadingIndicator />;
  }

  return (
    <PageRoot title="Tax Account Documents">
      <Paper>
        <TaxDocumentsTableContext.Provider value={{ reexecuteQuery }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {TableColumns.map((col) => (
                    <TableCell key={col}>{ColumnLabel[col]}</TableCell>
                  ))}
                  <TableCell>Reason</TableCell>
                  <TableCell>SPV</TableCell>
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
                      {row["stateReason"]?.map((item) => (
                        <div key={item}>{item}</div>
                      ))}
                    </TableCell>
                    <TableCell>
                      <Link
                        target="_blank"
                        underline="none"
                        href={
                          SPVReauthenticationLink
                            ? merchFeUrl(SPVReauthenticationLink)
                            : merchFeUrl(`/merchants-review/${row.userId}`)
                        }
                      >
                        SPV details
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Button
                        disabled={row.documentState == "PENDING"}
                        component="a"
                        href={`/internal-admin/seller-identity/review-pdf?documentUrlId=${row.documentUrlId}`}
                        target="_blank"
                      >
                        View
                      </Button>
                      {row.documentState == "SUBMITTED" && (
                        <>
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
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TaxDocumentsTableContext.Provider>
      </Paper>
    </PageRoot>
  );
};

export default TaxDocumentsPage;
