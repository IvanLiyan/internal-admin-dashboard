import { CounterfeitSubreasonsDictionary } from "@app/infractions/toolkit/counterfeit-sub-reason";
import { Action, QueryState } from "@app/infractions/toolkit/reducer";
import { ResultOf, VariablesOf } from "@graphql-typed-document-node/core";
import { Link } from "@mui/material";
import { MerchantWarningSortFieldType } from "@schema";
import dayjs from "dayjs";
import React, { Dispatch, ReactNode } from "react";
import { graphql } from "src/schema";
import { useQuery } from "urql";

export type TableData = Record<
  ExcludeStrict<keyof typeof ColumnLabel, "merchantId" | "merchantName">,
  string
> & {
  readonly merchantId: ReactNode;
  readonly merchantName: ReactNode;
  readonly claimed: boolean;
  readonly bulkStatus: boolean;
};

export const ColumnLabel = {
  created: "Created",
  creator: "Creator",
  lastUpdated: "Last Update",
  merchantName: "Merchant",
  merchantId: "MID",
  infractionId: "Infraction ID",
  bdRep: "BD Rep",
  geo: "Geo",
  reason: "Reason",
  parentCategory: "Parent Category",
  subCategory: "Sub-Category",
  ban: "Ban",
  gmv7Day: "GMV Last Week",
  gmv7DayPercentage: "% GMV Last Week",
  gmvLifetime: "Lifetime GMV",
  orderCount30Day: "# Orders in Last 30 Days",
  wssTier: "WSS Tier",
  wssImpact: "WSS Impact",
  correspondenceStatus: "Correspondence Status",
} as const;

const OrderBy: {
  [T in keyof typeof ColumnLabel]?: MerchantWarningSortFieldType | null;
} = {
  created: "CREATED_TIME",
  lastUpdated: "LAST_UPDATE",
};

export const ActionRequiredTableColumns = [
  "created",
  "creator",
  "lastUpdated",
  "merchantName",
  "merchantId",
  "infractionId",
  "reason",
  "parentCategory",
  "subCategory",
  "bdRep",
  "geo",
  "wssTier",
  "wssImpact",
  "correspondenceStatus",
] as const;

export const AllInfractionTableColumns = [
  "created",
  "creator",
  "lastUpdated",
  "merchantName",
  "merchantId",
  "infractionId",
  "reason",
  "parentCategory",
  "subCategory",
  "bdRep",
  "geo",
  "wssTier",
  "wssImpact",
] as const;

export const AwaitingMerchantTableColumns = [
  "created",
  "creator",
  "lastUpdated",
  "merchantName",
  "merchantId",
  "infractionId",
  "reason",
  "parentCategory",
  "subCategory",
  "bdRep",
  "geo",
  "wssTier",
  "wssImpact",
] as const;

export const ClosedInfractionTableColumns = [
  "created",
  "creator",
  "lastUpdated",
  "merchantName",
  "merchantId",
  "infractionId",
  "reason",
  "parentCategory",
  "subCategory",
  "bdRep",
  "geo",
  "wssTier",
] as const;

export const PaymentReleaseReviewTableColumns = [
  "created",
  "creator",
  "lastUpdated",
  "merchantName",
  "merchantId",
  "infractionId",
  "reason",
  "parentCategory",
  "subCategory",
  "bdRep",
  "geo",
  "wssTier",
  "wssImpact",
] as const;

export const RequiresReviewTableColumns = [
  "infractionId",
  "created",
  "creator",
  "merchantName",
  "bdRep",
  "geo",
  "reason",
  "parentCategory",
  "ban",
  "gmv7Day",
  "gmv7DayPercentage",
  "gmvLifetime",
  "orderCount30Day",
] as const;

export const BulkDisputeQuery = graphql(`
  query Disputes_GetInfractions(
    $id: ObjectIdType
    $offset: Int
    $limit: Int
    $states: [MerchantWarningState!]
    $claimStatus: MerchantWarningClaimStatus
    $reasons: [MerchantWarningReason!]
    $sort: MerchantWarningSort
    $issueDateStart: DatetimeInput
    $issueDateEnd: DatetimeInput
    $searchProofIdTypes: [MerchantWarningProofType!]
    $category: CounterfeitReasonCode
    $subcategory: TaggingViolationSubReasonCode
  ) {
    currentUser {
      id
    }
    policy {
      merchantWarningCount(
        id: $id
        states: $states
        claimStatus: $claimStatus
        reasons: $reasons
        issueDateStart: $issueDateStart
        issueDateEnd: $issueDateEnd
        searchProofIdTypes: $searchProofIdTypes
        category: $category
        subcategory: $subcategory
      )
      merchantWarnings(
        id: $id
        offset: $offset
        limit: $limit
        states: $states
        claimStatus: $claimStatus
        reasons: $reasons
        sort: $sort
        issueDateStart: $issueDateStart
        issueDateEnd: $issueDateEnd
        searchProofIdTypes: $searchProofIdTypes
        category: $category
        subcategory: $subcategory
      ) {
        id
        creatorName
        adminReasonText
        counterfeitReasonText
        banned
        correspondenceStatus
        wssImpact
        bulkProcessing
        productTrueTagInfo {
          subreason {
            subcategory
          }
        }
        claimedBy {
          id
        }
        createdTime {
          unix
        }
        lastUpdate {
          unix
        }
        merchant {
          id
          displayName
          accountManager {
            name
            bdMerchantCountry
          }
          wishSellerStandard {
            level
          }
          storeStats {
            thirtyDayTotals: totals(days: 30) {
              orders
            }
            sevenDayTotals: totals(days: 7) {
              gmv {
                display
              }
            }
            totalGmv {
              display
            }
          }
        }
      }
    }
  }
`);

export const useTableData = (
  data: ResultOf<typeof BulkDisputeQuery> | null | undefined
): ReadonlyArray<TableData> => {
  return (
    data?.policy?.merchantWarnings?.map<TableData>((i) => {
      const subcategory = i.productTrueTagInfo?.subreason?.subcategory;
      return {
        created: dayjs.unix(i.createdTime.unix).format("YYYY-MM-DD HH:MM"),
        creator: i.creatorName ?? "N/A",
        lastUpdated: dayjs.unix(i.lastUpdate.unix).format("YYYY-MM-DD HH:MM"),
        merchantName:
          i.merchant?.displayName != null ? (
            <Link
              target="_blank"
              href={`/merchants#merchant=${i.merchant.displayName}`}
            >
              {i.merchant?.displayName}
            </Link>
          ) : (
            "N/A"
          ),
        merchantId: i.merchant?.id ?? "N/A",
        infractionId: i.id,
        bdRep: i.merchant?.accountManager?.name ?? "N/A",
        geo: i.merchant?.accountManager?.bdMerchantCountry ?? "N/A",
        reason: i.adminReasonText ?? "N/A",
        parentCategory: i.counterfeitReasonText ?? "N/A",
        subCategory:
          subcategory != null
            ? CounterfeitSubreasonsDictionary[subcategory].text
            : "N/A",
        ban: i.banned == null ? "N/A" : i.banned ? "Yes" : "No",
        gmv7Day: i.merchant?.storeStats.sevenDayTotals.gmv.display ?? "N/A",
        gmv7DayPercentage:
          i.merchant?.storeStats.sevenDayTotals.gmv.display ?? "N/A",
        gmvLifetime: i.merchant?.storeStats.totalGmv.display ?? "N/A",
        orderCount30Day:
          i.merchant?.storeStats.thirtyDayTotals.orders == null
            ? "N/A"
            : `${i.merchant?.storeStats.thirtyDayTotals.orders}`,
        wssTier: i.merchant?.wishSellerStandard.level ?? "N/A",
        wssImpact: i.wssImpact,
        correspondenceStatus: i.correspondenceStatus ?? "N/A",
        claimed: i.claimedBy?.id == data.currentUser?.id,
        bulkStatus: !!i.bulkProcessing,
      };
    }) || []
  );
};

export type SearchTypes = "ID";

const useSearchVars = <T extends SearchTypes>(
  searchBy: T,
  query: string
): VariablesOf<typeof BulkDisputeQuery> => {
  if (!query) {
    return {};
  }
  switch (searchBy) {
    case "ID":
      return {
        id: query,
        searchProofIdTypes: ["MERCHANT", "PRODUCT", "ORDER"],
      };
  }
  return {};
};

export const useTableQuery = (state: QueryState) => {
  const gqlOrderBy = OrderBy[state.orderBy];
  return useQuery({
    query: BulkDisputeQuery,
    variables: {
      limit: state.limit,
      offset: state.offset,
      states: state.states,
      sort:
        gqlOrderBy == null
          ? undefined
          : { field: gqlOrderBy, order: state.order },
      issueDateStart:
        state.issueDateStart != null
          ? {
              unix: state.issueDateStart,
            }
          : undefined,
      issueDateEnd:
        state.issueDateEnd != null ? { unix: state.issueDateEnd } : undefined,
      reasons: state.reasons,
      claimStatus: state.claimStatus,
      category: state.category,
      subcategory: state.subcategory,
      ...useSearchVars(state.searchBy, state.search),
    },
  });
};

export const useSelectHandlers = (
  state: QueryState,
  dispatch: Dispatch<Action>,
  tableData: ReturnType<typeof useTableData>
) => {
  const onSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch({
        selected: tableData
          .filter((n) => !n.bulkStatus)
          .map((n) => n.infractionId),
      });
      return;
    }
    dispatch({
      selected: [],
    });
  };

  const onSelect = (event: React.MouseEvent<unknown>, infractionId: string) => {
    if (state.selected.includes(infractionId)) {
      dispatch({
        selected: state.selected.filter((i) => i !== infractionId),
      });
      return;
    }
    dispatch({
      selected: [...state.selected, infractionId],
    });
  };
  return { onSelectAll, onSelect };
};
