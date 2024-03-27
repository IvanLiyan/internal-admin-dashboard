import { graphql } from "src/schema";

export const ReviewTaxDocumentMutation = graphql(`
  mutation SellerIdentity_ReviewTaxDocument(
    $input: ReviewMerchantIdentityDocumentInput!
  ) {
    merchantIdentity {
      merchantIdentityVerification {
        reviewIdentityVerificationDocument(input: $input) {
          ok
          message
        }
      }
    }
  }
`);
