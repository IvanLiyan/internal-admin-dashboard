import { graphql } from "src/schema";
import { ResultOf } from "@graphql-typed-document-node/core";
import dayjs from "dayjs";
import {
  BankAccountDocumentType,
  BankAccountVerificationStatus,
} from "@schema";

export type TableData = {
  readonly mid: string | null | undefined;
  readonly documentId: string;
  readonly documentState: BankAccountVerificationStatus;
  readonly documentType: BankAccountDocumentType;
  readonly documentUrl?: string;
  readonly uploadedAt: string;
  readonly reviewedAt: string;
  readonly reviewer: string;
  readonly comment: string;
  readonly last4Digits: string;
  readonly stateReason: string;
};

export const ColumnLabel = {
  mid: "MID",
  documentState: "Status",
  documentType: "Type",
  uploadedAt: "Uploaded At",
  reviewedAt: "Reviewed At",
  reviewer: "Reviewer",
  comment: "Comment",
  last4Digits: "Last 4 Digits",
  stateReason: "Reason",
} as const;

export const TableColumns = [
  "mid",
  "documentState",
  "documentType",
  "uploadedAt",
  "reviewedAt",
  "reviewer",
  "comment",
  "last4Digits",
  "stateReason",
] as const;

export const BankAccountDocumentsQuery = graphql(`
  query SellerIdentity_BankAccountDocuments($merchantId: ObjectIdType) {
    merchants {
      merchant(id: $merchantId) {
        state
        bankAccountVerification {
          id
          state
          bankAccountDocuments {
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
            last4Digits
            stateReason
          }
        }
      }
    }
  }
`);

export const useTableData = (
  data: ResultOf<typeof BankAccountDocumentsQuery> | null | undefined
): ReadonlyArray<TableData> => {
  return (
    data?.merchants?.merchant?.bankAccountVerification?.bankAccountDocuments?.map(
      (doc) => {
        return {
          mid: data.merchants?.merchant?.bankAccountVerification?.id,
          documentId: doc.id,
          documentState: doc.state,
          documentType: doc.documentType ?? "UNIDENTIFIED",
          documentUrl: doc.documentFile?.fileUrl,
          uploadedAt: dayjs
            .unix(doc.uploadedAt.unix)
            .format("YYYY-MM-DD HH:MM"),
          reviewedAt:
            doc.reviewedAt?.unix != null
              ? dayjs.unix(doc.reviewedAt?.unix).format("YYYY-MM-DD HH:MM")
              : "n/a",
          comment: doc.comment ?? "n/a",
          reviewer: doc.reviewer?.name ?? "n/a",
          last4Digits: doc.last4Digits ?? "n/a",
          stateReason: doc.stateReason ?? "n/a",
        };
      }
    ) || []
  );
};
