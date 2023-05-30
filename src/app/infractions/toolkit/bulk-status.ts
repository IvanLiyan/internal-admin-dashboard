import { graphql } from "src/schema";
import { ResultOf } from "@graphql-typed-document-node/core";
import dayjs from "dayjs";

export type TableData = {
  requestId: string;
  status: "In Progress" | "Complete";
  submitted: string;
  type: string;
  requestor: string;
  errors: number;
  infractions: ReadonlyArray<{
    infractionId: string;
    status: "Passed" | "Failed" | "In Progress";
    reason: string;
  }>;
};

export const ColumnLabels: { [P in keyof TableData]: string } = {
  requestId: "Request ID",
  status: "Status",
  submitted: "Submitted",
  type: "Type",
  requestor: "Requested by",
  errors: "Errors",
  infractions: "Infractions",
};

export const TableColumns = [
  "requestId",
  "status",
  "submitted",
  "type",
  "requestor",
  "errors",
] as const;

export const ExpandRowLabels: {
  [P in keyof TableData["infractions"][number]]: string;
} = {
  infractionId: "Infraction ID",
  status: "Status",
  reason: "Reason",
};

export const ExpandRowColumns = ["infractionId", "status", "reason"] as const;

export const useTableData = (
  data: ResultOf<typeof BulkProcessingStatusQuery> | undefined
): ReadonlyArray<TableData> => {
  return (
    data?.policy?.merchantWarningBulkProcesses?.map((row) => {
      return {
        requestId: row.id,
        status:
          (row.results?.length || 0) < (row.requestedWarningIds?.length || 0)
            ? "In Progress"
            : "Complete",
        submitted: dayjs.unix(row.submitted.unix).format("YYYY-MM-DD HH:MM"),
        type: row.type,
        requestor: row.requestedBy,
        errors:
          row.results?.reduce<number>((sum, c) => {
            if (!c.success) {
              return sum + 1;
            }
            return sum;
          }, 0) || 0,
        infractions: [
          ...(row.results?.map<TableData["infractions"][number]>((result) => {
            return {
              infractionId: result.warningId,
              status: result.success ? "Passed" : "Failed",
              reason: result.error || "N/A",
            };
          }) || []),
          ...(row.requestedWarningIds
            ?.filter((id) =>
              row.results?.every((result) => result.warningId != id)
            )
            ?.map<TableData["infractions"][number]>((request) => {
              return {
                infractionId: request,
                status: "In Progress",
                reason: "N/A",
              };
            }) || []),
        ],
      };
    }) || []
  );
};

export const BulkProcessingStatusQuery = graphql(`
  query Disputes_BulkStatus(
    $offset: Int
    $limit: Int
    $search: String
    $types: [BulkMerchantWarningAction!]
  ) {
    policy {
      merchantWarningBulkProcessCount(search: $search, types: $types)
      merchantWarningBulkProcesses(
        offset: $offset
        limit: $limit
        search: $search
        types: $types
      ) {
        id
        submitted {
          unix
        }
        type
        requestedBy
        requestedWarningIds
        results {
          warningId
          success
          error
        }
      }
    }
  }
`);
