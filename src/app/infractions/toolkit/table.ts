import { graphql } from "src/schema";
import { ResultOf } from "@graphql-typed-document-node/core";
import dayjs from "dayjs";
import { MerchantWarningSortFieldType } from "@schema";

export const InfractionsTableColumns = {
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

export type InfractionTableData = {
  readonly [T in keyof typeof InfractionsTableColumns]: string;
};

export const OrderBy: {
  [T in keyof typeof InfractionsTableColumns]: MerchantWarningSortFieldType | null;
} = {
  bdRep: null,
  correspondenceStatus: null,
  created: "CREATED_TIME",
  creator: null,
  geo: null,
  ban: null,
  gmv7Day: null,
  gmv7DayPercentage: null,
  gmvLifetime: null,
  infractionId: null,
  lastUpdated: "LAST_UPDATE",
  merchantId: null,
  merchantName: null,
  orderCount30Day: null,
  parentCategory: null,
  reason: null,
  subCategory: null,
  wssImpact: null,
  wssTier: null,
};

export const useInfractionTableData = <
  T extends ReadonlyArray<keyof typeof InfractionsTableColumns>
>(
  columns: T,
  data: ResultOf<typeof BulkDisputeQuery> | null | undefined
) => {
  const allData =
    data?.policy?.merchantWarnings?.map<{
      [P in keyof typeof InfractionsTableColumns]: string;
    }>((i) => {
      return {
        created: dayjs.unix(i.createdTime.unix).format("YYYY-MM-DD HH:MM"),
        creator: i.creatorName ?? "N/A",
        lastUpdated: dayjs.unix(i.lastUpdate.unix).format("YYYY-MM-DD HH:MM"),
        merchantName: i.merchant?.displayName ?? "N/A",
        merchantId: i.merchant?.id ?? "N/A",
        infractionId: i.id,
        bdRep: i.merchant?.accountManager?.name ?? "N/A",
        geo: i.merchant?.accountManager?.bdMerchantCountry ?? "N/A",
        reason: i.adminReasonText ?? "N/A",
        parentCategory: i.counterfeitReasonText ?? "N/A",
        subCategory: "N/A",
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
      };
    }) || [];

  return allData.map((data) => {
    return (Object.keys(data) as (keyof typeof data)[]).reduce((acc, cur) => {
      if (columns.includes(cur)) {
        return {
          ...acc,
          [cur]: data[cur],
        };
      }
      return {
        ...acc,
      };
    }, {} as { [K in T[number]]: string });
  });
};

export const BulkDisputeQuery = graphql(`
  query BulkDisputes_Infractions(
    $id: ObjectIdType
    $offset: Int
    $limit: Int
    $states: [MerchantWarningState!]
    $claimStatus: MerchantWarningClaimStatus
    $reasons: [MerchantWarningReason!]
    $sort: MerchantWarningSort
  ) {
    policy {
      merchantWarningCount(
        states: $states
        claimStatus: $claimStatus
        reasons: $reasons
      )
      merchantWarnings(
        id: $id
        offset: $offset
        limit: $limit
        states: $states
        claimStatus: $claimStatus
        reasons: $reasons
        sort: $sort
      ) {
        id
        creatorName
        adminReasonText
        counterfeitReasonText
        banned
        correspondenceStatus
        wssImpact
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
