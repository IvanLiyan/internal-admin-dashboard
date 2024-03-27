import { graphql } from "src/schema";
import { ResultOf } from "@graphql-typed-document-node/core";
import dayjs from "dayjs";
import { MerchantIdentityVerificationStatus } from "@schema";

export type TableData = {
  readonly id: string;
  readonly status: MerchantIdentityVerificationStatus;
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

export const TaxAccountVerificationsQuery = graphql(`
  query SellerIdentityTaxAccountVerifications(
    $offset: Int
    $limit: Int
    $merchantId: ObjectIdType
    $state: MerchantIdentityVerificationStatus
    $verificationType: MerchantIdentityVerificationType
  ) {
    merchantIdentity {
      merchantIdentityVerificationsCount(
        merchantId: $merchantId
        state: $state
        verificationType: $verificationType
      )
      merchantIdentityVerifications(
        offset: $offset
        limit: $limit
        merchantId: $merchantId
        state: $state
        verificationType: $verificationType
      ) {
        id
        merchantId
        state
        lastUploadedAt {
          unix
        }
        lastReviewedAt {
          unix
        }
      }
    }
  }
`);

export const useTableData = (
  data: ResultOf<typeof TaxAccountVerificationsQuery> | null | undefined
): ReadonlyArray<TableData> => {
  return (
    data?.merchantIdentity?.merchantIdentityVerifications?.map(
      (verification) => {
        return {
          id: verification.merchantId,
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
      }
    ) || []
  );
};

export const VerificationStatusLabel: {
  [T in MerchantIdentityVerificationStatus]: string;
} = {
  APPROVED: "Approved",
  PENDING: "Pending",
  REJECTED: "Rejected",
  SUBMITTED: "Submitted",
};
