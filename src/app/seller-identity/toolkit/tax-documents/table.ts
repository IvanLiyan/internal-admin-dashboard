import { graphql } from "src/schema";
import { ResultOf } from "@graphql-typed-document-node/core";
import dayjs from "dayjs";
import {
  MerchantIdentityDocumentType,
  MerchantIdentityVerificationStatus,
  MerchantVerificationStatusReason,
} from "@schema";

export type TableData = {
  readonly mid: string | undefined;
  readonly userId: string | undefined;
  readonly documentId: string;
  readonly documentState: MerchantIdentityVerificationStatus;
  readonly documentType: MerchantIdentityDocumentType;
  readonly documentUrl?: string;
  readonly documentUrlId?: string;
  readonly uploadedAt: string;
  readonly reviewedAt: string;
  readonly reviewer: string;
  readonly comment: string;
  readonly stateReason?: Maybe<Array<Maybe<MerchantVerificationStatusReason>>>;
};

export const ColumnLabel = {
  mid: "MID",
  documentState: "Status",
  documentType: "Type",
  uploadedAt: "Uploaded At",
  reviewedAt: "Reviewed At",
  reviewer: "Reviewer",
  comment: "Comment",
} as const;

export const TableColumns = [
  "mid",
  "documentState",
  "documentType",
  "uploadedAt",
  "reviewedAt",
  "reviewer",
  "comment",
] as const;

export const TaxAccountDocumentsQuery = graphql(`
  query SellerIdentityTaxAccountDocuments(
    $merchantId: ObjectIdType!
    $verificationType: MerchantIdentityVerificationType
  ) {
    merchants {
      mainUser(merchantId: $merchantId) {
        id
      }
      merchant(id: $merchantId) {
        id
        state
        merchantIdentityVerification(verificationType: $verificationType) {
          id
          state
          merchantIdentityDocuments {
            id
            state
            documentFile {
              id
              fileUrl(console: true)
            }
            uploadedAt {
              unix
            }
            comment
            documentType
            reviewedAt {
              unix
            }
            reviewer {
              name
            }
            stateReason
          }
        }
      }
    }
  }
`);

export const GetSellerIdentityRejectReasonQuery = graphql(`
  query getSellerIdentityRejectReasons(
    $verificationType: MerchantIdentityVerificationType
  ) {
    merchantIdentity {
      rejectReasons(verificationType: $verificationType)
    }
  }
`);

export type TaxRejectReasonObj = {
  [key in MerchantVerificationStatusReason]: string;
};

export const useTableData = (
  data: ResultOf<typeof TaxAccountDocumentsQuery> | undefined
): ReadonlyArray<TableData> => {
  return (
    data?.merchants?.merchant?.merchantIdentityVerification?.merchantIdentityDocuments?.map(
      (doc) => {
        return {
          userId: data.merchants?.mainUser?.id,
          mid: data.merchants?.merchant?.id,
          documentId: doc.id,
          documentState: doc.state,
          documentType: doc.documentType,
          documentUrl: doc.documentFile?.fileUrl,
          documentUrlId: doc.documentFile?.id,
          uploadedAt:
            doc.uploadedAt?.unix != null
              ? dayjs.unix(doc?.uploadedAt.unix).format("YYYY-MM-DD HH:MM")
              : "n/a",
          reviewedAt:
            doc.reviewedAt?.unix != null
              ? dayjs.unix(doc.reviewedAt?.unix).format("YYYY-MM-DD HH:MM")
              : "n/a",
          comment: doc.comment ?? "n/a",
          reviewer: doc.reviewer?.name ?? "n/a",
          stateReason: doc.stateReason ?? [],
        };
      }
    ) || []
  );
};

export type ReauthenticationListRequest = {
  readonly reauthState: string;
  readonly gotoPage: number;
  readonly followupOpDone: boolean;
  readonly followupOpNotDone: boolean;
  readonly followupOpNA: boolean;
  readonly sortColumn: string;
  readonly sortOrder: string;
  readonly merchantId: string;
  readonly creator: string;
  readonly bd: string;
};

export type ReauthenticationListResponse = {
  readonly tickets: any;
  readonly hasNext: boolean;
  readonly rangeEnd: number;
  readonly rangeStart: number;
  readonly hasPrev: boolean;
  readonly sortColumn: string;
  readonly totalItems: number;
  readonly currentPage: number;
};
