/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query AuthQuery {\n    currentUser {\n      id\n      roles {\n        id\n      }\n    }\n  }\n": types.AuthQueryDocument,
    "\n  mutation Disputes_BulkAction($input: BulkUpsertMerchantWarningInput) {\n    policy {\n      bulkUpsertMerchantWarning(input: $input) {\n        ok\n        message\n      }\n    }\n  }\n": types.Disputes_BulkActionDocument,
    "\n  query Disputes_BulkStatus(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $types: [BulkMerchantWarningAction!]\n  ) {\n    policy {\n      merchantWarningBulkProcessCount(search: $search, types: $types)\n      merchantWarningBulkProcesses(\n        offset: $offset\n        limit: $limit\n        search: $search\n        types: $types\n      ) {\n        id\n        submitted {\n          unix\n        }\n        type\n        requestedBy\n        requestedWarningIds\n        results {\n          warningId\n          success\n          error\n        }\n      }\n    }\n  }\n": types.Disputes_BulkStatusDocument,
    "\n  query Disputes_GetInfractions(\n    $id: ObjectIdType\n    $offset: Int\n    $limit: Int\n    $states: [MerchantWarningState!]\n    $claimStatus: MerchantWarningClaimStatus\n    $reasons: [MerchantWarningReason!]\n    $sort: MerchantWarningSort\n    $issueDateStart: DatetimeInput\n    $issueDateEnd: DatetimeInput\n    $searchProofIdTypes: [MerchantWarningProofType!]\n  ) {\n    policy {\n      merchantWarningCount(\n        id: $id\n        states: $states\n        claimStatus: $claimStatus\n        reasons: $reasons\n        issueDateStart: $issueDateStart\n        issueDateEnd: $issueDateEnd\n        searchProofIdTypes: $searchProofIdTypes\n      )\n      merchantWarnings(\n        id: $id\n        offset: $offset\n        limit: $limit\n        states: $states\n        claimStatus: $claimStatus\n        reasons: $reasons\n        sort: $sort\n        issueDateStart: $issueDateStart\n        issueDateEnd: $issueDateEnd\n        searchProofIdTypes: $searchProofIdTypes\n      ) {\n        id\n        creatorName\n        adminReasonText\n        counterfeitReasonText\n        banned\n        correspondenceStatus\n        wssImpact\n        createdTime {\n          unix\n        }\n        lastUpdate {\n          unix\n        }\n        merchant {\n          id\n          displayName\n          accountManager {\n            name\n            bdMerchantCountry\n          }\n          wishSellerStandard {\n            level\n          }\n          storeStats {\n            thirtyDayTotals: totals(days: 30) {\n              orders\n            }\n            sevenDayTotals: totals(days: 7) {\n              gmv {\n                display\n              }\n            }\n            totalGmv {\n              display\n            }\n          }\n        }\n      }\n    }\n  }\n": types.Disputes_GetInfractionsDocument,
    "\n  mutation Authentication_LoginMutation($input: LoginMutationInput!) {\n    authentication {\n      login(input: $input) {\n        loginOk\n        error\n        errorState\n      }\n    }\n  }\n": types.Authentication_LoginMutationDocument,
    "\n  query DevOnly_GetUser {\n    currentUser {\n      id\n    }\n  }\n": types.DevOnly_GetUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AuthQuery {\n    currentUser {\n      id\n      roles {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query AuthQuery {\n    currentUser {\n      id\n      roles {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Disputes_BulkAction($input: BulkUpsertMerchantWarningInput) {\n    policy {\n      bulkUpsertMerchantWarning(input: $input) {\n        ok\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Disputes_BulkAction($input: BulkUpsertMerchantWarningInput) {\n    policy {\n      bulkUpsertMerchantWarning(input: $input) {\n        ok\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Disputes_BulkStatus(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $types: [BulkMerchantWarningAction!]\n  ) {\n    policy {\n      merchantWarningBulkProcessCount(search: $search, types: $types)\n      merchantWarningBulkProcesses(\n        offset: $offset\n        limit: $limit\n        search: $search\n        types: $types\n      ) {\n        id\n        submitted {\n          unix\n        }\n        type\n        requestedBy\n        requestedWarningIds\n        results {\n          warningId\n          success\n          error\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Disputes_BulkStatus(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $types: [BulkMerchantWarningAction!]\n  ) {\n    policy {\n      merchantWarningBulkProcessCount(search: $search, types: $types)\n      merchantWarningBulkProcesses(\n        offset: $offset\n        limit: $limit\n        search: $search\n        types: $types\n      ) {\n        id\n        submitted {\n          unix\n        }\n        type\n        requestedBy\n        requestedWarningIds\n        results {\n          warningId\n          success\n          error\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Disputes_GetInfractions(\n    $id: ObjectIdType\n    $offset: Int\n    $limit: Int\n    $states: [MerchantWarningState!]\n    $claimStatus: MerchantWarningClaimStatus\n    $reasons: [MerchantWarningReason!]\n    $sort: MerchantWarningSort\n    $issueDateStart: DatetimeInput\n    $issueDateEnd: DatetimeInput\n    $searchProofIdTypes: [MerchantWarningProofType!]\n  ) {\n    policy {\n      merchantWarningCount(\n        id: $id\n        states: $states\n        claimStatus: $claimStatus\n        reasons: $reasons\n        issueDateStart: $issueDateStart\n        issueDateEnd: $issueDateEnd\n        searchProofIdTypes: $searchProofIdTypes\n      )\n      merchantWarnings(\n        id: $id\n        offset: $offset\n        limit: $limit\n        states: $states\n        claimStatus: $claimStatus\n        reasons: $reasons\n        sort: $sort\n        issueDateStart: $issueDateStart\n        issueDateEnd: $issueDateEnd\n        searchProofIdTypes: $searchProofIdTypes\n      ) {\n        id\n        creatorName\n        adminReasonText\n        counterfeitReasonText\n        banned\n        correspondenceStatus\n        wssImpact\n        createdTime {\n          unix\n        }\n        lastUpdate {\n          unix\n        }\n        merchant {\n          id\n          displayName\n          accountManager {\n            name\n            bdMerchantCountry\n          }\n          wishSellerStandard {\n            level\n          }\n          storeStats {\n            thirtyDayTotals: totals(days: 30) {\n              orders\n            }\n            sevenDayTotals: totals(days: 7) {\n              gmv {\n                display\n              }\n            }\n            totalGmv {\n              display\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Disputes_GetInfractions(\n    $id: ObjectIdType\n    $offset: Int\n    $limit: Int\n    $states: [MerchantWarningState!]\n    $claimStatus: MerchantWarningClaimStatus\n    $reasons: [MerchantWarningReason!]\n    $sort: MerchantWarningSort\n    $issueDateStart: DatetimeInput\n    $issueDateEnd: DatetimeInput\n    $searchProofIdTypes: [MerchantWarningProofType!]\n  ) {\n    policy {\n      merchantWarningCount(\n        id: $id\n        states: $states\n        claimStatus: $claimStatus\n        reasons: $reasons\n        issueDateStart: $issueDateStart\n        issueDateEnd: $issueDateEnd\n        searchProofIdTypes: $searchProofIdTypes\n      )\n      merchantWarnings(\n        id: $id\n        offset: $offset\n        limit: $limit\n        states: $states\n        claimStatus: $claimStatus\n        reasons: $reasons\n        sort: $sort\n        issueDateStart: $issueDateStart\n        issueDateEnd: $issueDateEnd\n        searchProofIdTypes: $searchProofIdTypes\n      ) {\n        id\n        creatorName\n        adminReasonText\n        counterfeitReasonText\n        banned\n        correspondenceStatus\n        wssImpact\n        createdTime {\n          unix\n        }\n        lastUpdate {\n          unix\n        }\n        merchant {\n          id\n          displayName\n          accountManager {\n            name\n            bdMerchantCountry\n          }\n          wishSellerStandard {\n            level\n          }\n          storeStats {\n            thirtyDayTotals: totals(days: 30) {\n              orders\n            }\n            sevenDayTotals: totals(days: 7) {\n              gmv {\n                display\n              }\n            }\n            totalGmv {\n              display\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Authentication_LoginMutation($input: LoginMutationInput!) {\n    authentication {\n      login(input: $input) {\n        loginOk\n        error\n        errorState\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Authentication_LoginMutation($input: LoginMutationInput!) {\n    authentication {\n      login(input: $input) {\n        loginOk\n        error\n        errorState\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query DevOnly_GetUser {\n    currentUser {\n      id\n    }\n  }\n"): (typeof documents)["\n  query DevOnly_GetUser {\n    currentUser {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;