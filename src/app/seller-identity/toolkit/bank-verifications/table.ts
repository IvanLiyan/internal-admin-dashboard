import { graphql } from "src/schema";
import { ResultOf } from "@graphql-typed-document-node/core";
import dayjs from "dayjs";
import { BankAccountVerificationStatus } from "@schema";

export type TableData = {
  readonly id: string;
  readonly status: BankAccountVerificationStatus;
  readonly reviewedAt: string;
  readonly uploadedAt: string;
};

export const ColumnLabel = {
  id: "Merchant ID",
  status: "Status",
  reviewedAt: "Reviewed At",
  uploadedAt: "Uploaded At",
} as const;

export const TableColumns = [
  "id",
  "status",
  "reviewedAt",
  "uploadedAt",
] as const;

export const BankAccountVerificationsQuery = graphql(`
  query SellerIdentity_BankAccountVerifications(
    $offset: Int
    $limit: Int
    $merchantId: ObjectIdType
    $state: BankAccountVerificationStatus
  ) {
    merchantIdentity {
      bankAccountVerificationsCount(merchantId: $merchantId, state: $state)
      bankAccountVerifications(
        offset: $offset
        limit: $limit
        merchantId: $merchantId
        state: $state
      ) {
        id
        state
        lastReviewedAt {
          unix
        }
        lastUploadedAt {
          unix
        }
        bankAccountDocuments {
          id
        }
      }
    }
  }
`);

export const useTableData = (
  data: ResultOf<typeof BankAccountVerificationsQuery> | null | undefined
): ReadonlyArray<TableData> => {
  return (
    data?.merchantIdentity?.bankAccountVerifications?.map((verification) => {
      return {
        id: verification.id,
        reviewedAt:
          verification.lastReviewedAt?.unix != null
            ? dayjs
                .unix(verification.lastReviewedAt.unix)
                .format("YYYY-MM-DD HH:MM")
            : "n/a",
        uploadedAt:
          verification.lastUploadedAt?.unix != null
            ? dayjs
                .unix(verification.lastUploadedAt.unix)
                .format("YYYY-MM-DD HH:MM")
            : "n/a",
        status: verification.state,
      };
    }) || []
  );
};

export const VerificationStatusLabel: {
  [T in BankAccountVerificationStatus]: string;
} = {
  APPROVED: "Approved",
  PENDING: "Pending",
  REJECTED: "Rejected",
  SUBMITTED: "Submitted",
};
