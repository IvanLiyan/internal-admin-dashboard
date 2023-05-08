import { BulkDisputeQuery } from "@app/infractions/toolkit/table";
import { VariablesOf } from "@graphql-typed-document-node/core";

export type SearchTypes = "ID" | "Merchant Name";

export const useInfractionSearch = <T extends SearchTypes>(
  searchBy: T,
  query: string
): VariablesOf<typeof BulkDisputeQuery> => {
  if (!query) {
    return {};
  }
  switch (searchBy) {
    case "Merchant Name":
      // TODO GQL not ready
      return {};
    case "ID":
      return {
        id: query,
        searchProofIdTypes: ["MERCHANT", "PRODUCT", "ORDER"],
      };
  }
  return {};
};
