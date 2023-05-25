import { graphql } from "src/schema";

export const BulkActionMutation = graphql(`
  mutation Disputes_BulkAction($input: BulkUpsertMerchantWarningInput) {
    policy {
      bulkUpsertMerchantWarning(input: $input) {
        ok
        message
      }
    }
  }
`);
