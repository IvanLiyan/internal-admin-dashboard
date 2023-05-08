import { MerchantWarningReason } from "@schema";

type MerchantInfractions = ExtractStrict<
  MerchantWarningReason,
  | "REQUEST_USER_EMAIL"
  | "REQUEST_MONEY"
  | "BAD_CUSTOMER_SERVICE"
  | "TAKE_USER_OUTSIDE_WISH"
  | "VIOLATE_POLICY"
  | "SUSPECTED_FRAUD"
  | "REPEAT_IP_INFRINGEMENT_ON_BRAND_OWNER"
  | "MERCHANT_CONTACT_INFO_INVALID"
  | "WISHPOST_NEGATIVE_BALANCE"
  | "HIGH_IP_INFRINGEMENT"
  | "INACTIVE_ACCOUNT"
  | "WISH_STANDARDS_BAN"
>;

type OrderInfractions = ExtractStrict<
  MerchantWarningReason,
  | "PRODUCT_HIGH_REFUND_RATIO"
  | "WAREHOUSE_FULFILLMENT_POLICY_VIOLATION"
  | "FAKE_TRACKING"
  | "MERCHANT_CANCELLATION_VIOLATION"
  | "LATE_CONFIRMED_FULFILLMENT_VIOLATION"
  | "UNFULFILLED_ORDER"
  | "ORDER_NOT_DELIVERED"
>;

type ListingInfractions = ExtractStrict<
  MerchantWarningReason,
  | "FINE_FOR_COUNTERFEIT_GOODS"
  | "FINE_PRODUCT_SWAPPED"
  | "PRODUCT_IS_INAPPROPRIATE"
  | "LEGAL_TRO_TAKEDOWN"
  | "MISLEADING_VARIATION"
  | "CN_PROHIBITED_PRODUCTS"
  | "STRIKE_BASED_HIGH_RISK_PROHIBITED"
  | "PRODUCT_GEOBLOCK"
  | "BRANDED_PRODUCT_GEOBLOCK"
>;

type DeprecatedInfractions = ExtractStrict<
  MerchantWarningReason,
  | "COUNTERFEIT_GOODS"
  | "RELATED_ACCOUNT_IS_BANNED"
  | "HIGH_REFUND_RATIO"
  | "PENALTY_FOR_AUTO_REFUND"
  | "HIGH_AUTO_REFUND"
  | "HIGH_CHARGEBACK_RATIO"
  | "DUPLICATE_ACCOUNTS"
  | "PRODUCT_HIGH_REFUND_RATIO_NO_REMOVE"
  | "DUPLICATE_PRODUCTS"
  | "UNCONFIRMED_TRACKING_NUMBERS"
  | "EMPTY_PACKAGES"
  | "INVALID_TRACKING_NUMBERS"
  | "PRODUCT_LOW_RATING"
  | "PRODUCT_LOW_RATING_NO_REMOVE"
  | "HIGH_CHARGEBACK_AND_FRAUD_REFUND_RATIO"
  | "LATE_FULFILLMENT_RATE"
  | "WISH_EXPRESS_POLICY_MERCHANT"
  | "WISH_EXPRESS_POLICY_PRODUCT"
  | "MERCHANT_HIGH_REFUND_EAT_COST"
  | "CONFIRMED_DELIVERY_POLICY"
  | "PRODUCT_HIGH_QUALITY_REFUND_RATIO"
  | "MERCHANT_HIGH_QUALITY_REFUND_RATIO"
  | "FINE_WISH_EXPRESS_POLICY_VIOLATION"
  | "DECEPTIVE_FULFILLMENT"
  | "HIGH_GMV_FROM_GAMING_AUDIT"
  | "HIGH_GMV_FROM_GAMING_FREEZE"
  | "HIGH_GMV_FROM_GAMING_BAN"
  | "MERCHANT_HARASSMENT"
  | "FAKE_RATING"
  | "MERCHANT_HIGH_CANCEL_ORDER_RATE"
  | "PRODUCT_HIGH_CANCEL_ORDER_RATE"
  | "STORE_VALIDATION_INCOMPLETE"
  | "CS_LATE_RESPONSE_RATE"
  | "CS_LOW_CSAT_SCORE"
  | "WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION"
  | "INVALID_EU_RESPONSIBLE_PERSON"
  | "TAX_SETTING_NOT_UPDATED"
  | "WISH_EXPRESS_POLICY_VIOLATION"
  | "US_TAX_INFO_UNVALIDATED"
>;

type InfractionCategory<
  T extends
    | MerchantInfractions
    | ListingInfractions
    | OrderInfractions
    | DeprecatedInfractions
> = T extends MerchantInfractions
  ? "Merchant Infractions"
  : T extends ListingInfractions
  ? "Listing Infractions"
  : T extends OrderInfractions
  ? "Order Infractions"
  : "Deprecated Infractions";

const CategorizedInfractionsDictionary: {
  [T in
    | MerchantInfractions
    | ListingInfractions
    | OrderInfractions
    | DeprecatedInfractions]: {
    readonly category: InfractionCategory<T>;
    readonly text: T;
  };
} = {
  BAD_CUSTOMER_SERVICE: {
    category: "Merchant Infractions",
    text: "BAD_CUSTOMER_SERVICE",
  },
  BRANDED_PRODUCT_GEOBLOCK: {
    category: "Listing Infractions",
    text: "BRANDED_PRODUCT_GEOBLOCK",
  },
  CN_PROHIBITED_PRODUCTS: {
    category: "Listing Infractions",
    text: "CN_PROHIBITED_PRODUCTS",
  },
  CONFIRMED_DELIVERY_POLICY: {
    category: "Deprecated Infractions",
    text: "CONFIRMED_DELIVERY_POLICY",
  },
  COUNTERFEIT_GOODS: {
    category: "Deprecated Infractions",
    text: "COUNTERFEIT_GOODS",
  },
  CS_LATE_RESPONSE_RATE: {
    category: "Deprecated Infractions",
    text: "CS_LATE_RESPONSE_RATE",
  },
  CS_LOW_CSAT_SCORE: {
    category: "Deprecated Infractions",
    text: "CS_LOW_CSAT_SCORE",
  },
  DECEPTIVE_FULFILLMENT: {
    category: "Deprecated Infractions",
    text: "DECEPTIVE_FULFILLMENT",
  },
  DUPLICATE_ACCOUNTS: {
    category: "Deprecated Infractions",
    text: "DUPLICATE_ACCOUNTS",
  },
  DUPLICATE_PRODUCTS: {
    category: "Deprecated Infractions",
    text: "DUPLICATE_PRODUCTS",
  },
  EMPTY_PACKAGES: {
    category: "Deprecated Infractions",
    text: "EMPTY_PACKAGES",
  },
  FAKE_RATING: { category: "Deprecated Infractions", text: "FAKE_RATING" },
  FAKE_TRACKING: { category: "Order Infractions", text: "FAKE_TRACKING" },
  FINE_FOR_COUNTERFEIT_GOODS: {
    category: "Listing Infractions",
    text: "FINE_FOR_COUNTERFEIT_GOODS",
  },
  FINE_PRODUCT_SWAPPED: {
    category: "Listing Infractions",
    text: "FINE_PRODUCT_SWAPPED",
  },
  FINE_WISH_EXPRESS_POLICY_VIOLATION: {
    category: "Deprecated Infractions",
    text: "FINE_WISH_EXPRESS_POLICY_VIOLATION",
  },
  HIGH_AUTO_REFUND: {
    category: "Deprecated Infractions",
    text: "HIGH_AUTO_REFUND",
  },
  HIGH_CHARGEBACK_AND_FRAUD_REFUND_RATIO: {
    category: "Deprecated Infractions",
    text: "HIGH_CHARGEBACK_AND_FRAUD_REFUND_RATIO",
  },
  HIGH_CHARGEBACK_RATIO: {
    category: "Deprecated Infractions",
    text: "HIGH_CHARGEBACK_RATIO",
  },
  HIGH_GMV_FROM_GAMING_AUDIT: {
    category: "Deprecated Infractions",
    text: "HIGH_GMV_FROM_GAMING_AUDIT",
  },
  HIGH_GMV_FROM_GAMING_BAN: {
    category: "Deprecated Infractions",
    text: "HIGH_GMV_FROM_GAMING_BAN",
  },
  HIGH_GMV_FROM_GAMING_FREEZE: {
    category: "Deprecated Infractions",
    text: "HIGH_GMV_FROM_GAMING_FREEZE",
  },
  HIGH_IP_INFRINGEMENT: {
    category: "Merchant Infractions",
    text: "HIGH_IP_INFRINGEMENT",
  },
  HIGH_REFUND_RATIO: {
    category: "Deprecated Infractions",
    text: "HIGH_REFUND_RATIO",
  },
  INACTIVE_ACCOUNT: {
    category: "Merchant Infractions",
    text: "INACTIVE_ACCOUNT",
  },
  INVALID_EU_RESPONSIBLE_PERSON: {
    category: "Deprecated Infractions",
    text: "INVALID_EU_RESPONSIBLE_PERSON",
  },
  INVALID_TRACKING_NUMBERS: {
    category: "Deprecated Infractions",
    text: "INVALID_TRACKING_NUMBERS",
  },
  LATE_CONFIRMED_FULFILLMENT_VIOLATION: {
    category: "Order Infractions",
    text: "LATE_CONFIRMED_FULFILLMENT_VIOLATION",
  },
  LATE_FULFILLMENT_RATE: {
    category: "Deprecated Infractions",
    text: "LATE_FULFILLMENT_RATE",
  },
  LEGAL_TRO_TAKEDOWN: {
    category: "Listing Infractions",
    text: "LEGAL_TRO_TAKEDOWN",
  },
  MERCHANT_CANCELLATION_VIOLATION: {
    category: "Order Infractions",
    text: "MERCHANT_CANCELLATION_VIOLATION",
  },
  MERCHANT_CONTACT_INFO_INVALID: {
    category: "Merchant Infractions",
    text: "MERCHANT_CONTACT_INFO_INVALID",
  },
  MERCHANT_HARASSMENT: {
    category: "Deprecated Infractions",
    text: "MERCHANT_HARASSMENT",
  },
  MERCHANT_HIGH_CANCEL_ORDER_RATE: {
    category: "Deprecated Infractions",
    text: "MERCHANT_HIGH_CANCEL_ORDER_RATE",
  },
  MERCHANT_HIGH_QUALITY_REFUND_RATIO: {
    category: "Deprecated Infractions",
    text: "MERCHANT_HIGH_QUALITY_REFUND_RATIO",
  },
  MERCHANT_HIGH_REFUND_EAT_COST: {
    category: "Deprecated Infractions",
    text: "MERCHANT_HIGH_REFUND_EAT_COST",
  },
  MISLEADING_VARIATION: {
    category: "Listing Infractions",
    text: "MISLEADING_VARIATION",
  },
  ORDER_NOT_DELIVERED: {
    category: "Order Infractions",
    text: "ORDER_NOT_DELIVERED",
  },
  PENALTY_FOR_AUTO_REFUND: {
    category: "Deprecated Infractions",
    text: "PENALTY_FOR_AUTO_REFUND",
  },
  PRODUCT_GEOBLOCK: {
    category: "Listing Infractions",
    text: "PRODUCT_GEOBLOCK",
  },
  PRODUCT_HIGH_CANCEL_ORDER_RATE: {
    category: "Deprecated Infractions",
    text: "PRODUCT_HIGH_CANCEL_ORDER_RATE",
  },
  PRODUCT_HIGH_QUALITY_REFUND_RATIO: {
    category: "Deprecated Infractions",
    text: "PRODUCT_HIGH_QUALITY_REFUND_RATIO",
  },
  PRODUCT_HIGH_REFUND_RATIO: {
    category: "Order Infractions",
    text: "PRODUCT_HIGH_REFUND_RATIO",
  },
  PRODUCT_HIGH_REFUND_RATIO_NO_REMOVE: {
    category: "Deprecated Infractions",
    text: "PRODUCT_HIGH_REFUND_RATIO_NO_REMOVE",
  },
  PRODUCT_IS_INAPPROPRIATE: {
    category: "Listing Infractions",
    text: "PRODUCT_IS_INAPPROPRIATE",
  },
  PRODUCT_LOW_RATING: {
    category: "Deprecated Infractions",
    text: "PRODUCT_LOW_RATING",
  },
  PRODUCT_LOW_RATING_NO_REMOVE: {
    category: "Deprecated Infractions",
    text: "PRODUCT_LOW_RATING_NO_REMOVE",
  },
  RELATED_ACCOUNT_IS_BANNED: {
    category: "Deprecated Infractions",
    text: "RELATED_ACCOUNT_IS_BANNED",
  },
  REPEAT_IP_INFRINGEMENT_ON_BRAND_OWNER: {
    category: "Merchant Infractions",
    text: "REPEAT_IP_INFRINGEMENT_ON_BRAND_OWNER",
  },
  REQUEST_MONEY: { category: "Merchant Infractions", text: "REQUEST_MONEY" },
  REQUEST_USER_EMAIL: {
    category: "Merchant Infractions",
    text: "REQUEST_USER_EMAIL",
  },
  STORE_VALIDATION_INCOMPLETE: {
    category: "Deprecated Infractions",
    text: "STORE_VALIDATION_INCOMPLETE",
  },
  STRIKE_BASED_HIGH_RISK_PROHIBITED: {
    category: "Listing Infractions",
    text: "STRIKE_BASED_HIGH_RISK_PROHIBITED",
  },
  SUSPECTED_FRAUD: {
    category: "Merchant Infractions",
    text: "SUSPECTED_FRAUD",
  },
  TAKE_USER_OUTSIDE_WISH: {
    category: "Merchant Infractions",
    text: "TAKE_USER_OUTSIDE_WISH",
  },
  TAX_SETTING_NOT_UPDATED: {
    category: "Deprecated Infractions",
    text: "TAX_SETTING_NOT_UPDATED",
  },
  UNCONFIRMED_TRACKING_NUMBERS: {
    category: "Deprecated Infractions",
    text: "UNCONFIRMED_TRACKING_NUMBERS",
  },
  UNFULFILLED_ORDER: {
    category: "Order Infractions",
    text: "UNFULFILLED_ORDER",
  },
  US_TAX_INFO_UNVALIDATED: {
    category: "Deprecated Infractions",
    text: "US_TAX_INFO_UNVALIDATED",
  },
  VIOLATE_POLICY: { category: "Merchant Infractions", text: "VIOLATE_POLICY" },
  WAREHOUSE_FULFILLMENT_POLICY_VIOLATION: {
    category: "Order Infractions",
    text: "WAREHOUSE_FULFILLMENT_POLICY_VIOLATION",
  },
  WISH_EXPRESS_POLICY_MERCHANT: {
    category: "Deprecated Infractions",
    text: "WISH_EXPRESS_POLICY_MERCHANT",
  },
  WISH_EXPRESS_POLICY_PRODUCT: {
    category: "Deprecated Infractions",
    text: "WISH_EXPRESS_POLICY_PRODUCT",
  },
  WISH_EXPRESS_POLICY_VIOLATION: {
    category: "Deprecated Infractions",
    text: "WISH_EXPRESS_POLICY_VIOLATION",
  },
  WISH_STANDARDS_BAN: {
    category: "Merchant Infractions",
    text: "WISH_STANDARDS_BAN",
  },
  WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION: {
    category: "Deprecated Infractions",
    text: "WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION",
  },
  WISHPOST_NEGATIVE_BALANCE: {
    category: "Merchant Infractions",
    text: "WISHPOST_NEGATIVE_BALANCE",
  },
};

export const InfractionsDictionary = {
  ...CategorizedInfractionsDictionary,
};

export const InfractionOptions = Object.keys(
  CategorizedInfractionsDictionary
) as ReadonlyArray<keyof typeof CategorizedInfractionsDictionary>;
