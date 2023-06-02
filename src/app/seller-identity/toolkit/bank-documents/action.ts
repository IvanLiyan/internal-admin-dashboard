import { graphql } from "src/schema";

export const ReviewBankDocumentMutation = graphql(`
  mutation SellerIdentity_ReviewBankDocument(
    $input: ReviewBankAccountDocumentInput!
  ) {
    merchantIdentity {
      bankAccountVerification {
        reviewDocument(input: $input) {
          ok
          message
        }
      }
    }
  }
`);
