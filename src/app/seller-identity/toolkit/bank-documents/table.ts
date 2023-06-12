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
};

export const ColumnLabel = {
  documentState: "Status",
  documentType: "Type",
  uploadedAt: "Uploaded At",
  reviewedAt: "Reviewed At",
  reviewer: "Reviewer",
  comment: "Comment",
} as const;

export const TableColumns = [
  "documentState",
  "documentType",
  "uploadedAt",
  "reviewedAt",
  "reviewer",
  "comment",
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
        };
      }
    ) || []
  );
};
