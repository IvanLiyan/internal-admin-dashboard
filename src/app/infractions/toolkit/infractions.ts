import { MerchantWarningReason } from "@schema";

type MerchantInfractions = ExtractStrict<
  MerchantWarningReason,
  | "REQUEST_USER_EMAIL"
  | "REQUEST_MONEY"
  | "BAD_CUSTOMER_SERVICE"
  | "DISINGENUOUS_CUSTOMER_SERVICE"
  | "TAKE_USER_OUTSIDE_WISH"
  | "VIOLATE_POLICY"
  | "SUSPECTED_FRAUD"
  | "REPEAT_IP_INFRINGEMENT_ON_BRAND_OWNER"
  | "MERCHANT_CONTACT_INFO_INVALID"
  | "RESPOND_TO_ADMIN"
  | "WISHPOST_NEGATIVE_BALANCE"
  | "HIGH_IP_INFRINGEMENT"
  | "VIOLATE_TS_POLICY"
  | "BAN_EARLY_STAGE_MERCHANT"
  | "INACTIVE_ACCOUNT"
  | "WISH_STANDARDS_BAN"
  | "SUSPENDED_FOR_UNDER_PERFORMING"
  | "PRODUCT_LIMIT_REACHED"
  | "ADDITIONAL_TAX_INFO"
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
    readonly text: string;
  };
} = {
  BAD_CUSTOMER_SERVICE: {
    category: "Merchant Infractions",
    text: "Discourteous customer service",
  },
  BAN_EARLY_STAGE_MERCHANT: {
    category: "Merchant Infractions",
    text: "Violated Merchant Policy",
  },
  DISINGENUOUS_CUSTOMER_SERVICE: {
    category: "Merchant Infractions",
    text: "Disingenuous to customer",
  },
  RESPOND_TO_ADMIN: {
    category: "Merchant Infractions",
    text: "Wish Admin message response needed",
  },
  VIOLATE_TS_POLICY: {
    category: "Merchant Infractions",
    text: "Wish merchant policy violation",
  },
  BRANDED_PRODUCT_GEOBLOCK: {
    category: "Listing Infractions",
    text: "Proof of authorization needed to use IP in specific regions",
  },
  CN_PROHIBITED_PRODUCTS: {
    category: "Listing Infractions",
    text: "Import/export of product prohibited from China",
  },
  CONFIRMED_DELIVERY_POLICY: {
    category: "Deprecated Infractions",
    text: "Merchant is not meeting Confirmed Delivery Policy requirements",
  },
  COUNTERFEIT_GOODS: {
    category: "Deprecated Infractions",
    text: "Wish requires proof of authorization to use intellectual property",
  },
  CS_LATE_RESPONSE_RATE: {
    category: "Deprecated Infractions",
    text: "Long customer ticket response times",
  },
  CS_LOW_CSAT_SCORE: {
    category: "Deprecated Infractions",
    text: "Low customer satisfaction score",
  },
  DECEPTIVE_FULFILLMENT: {
    category: "Deprecated Infractions",
    text: "Store is violating Deceptive Fulfillment Policy",
  },
  DUPLICATE_ACCOUNTS: {
    category: "Deprecated Infractions",
    text: "Multiple merchant accounts",
  },
  DUPLICATE_PRODUCTS: {
    category: "Deprecated Infractions",
    text: "Duplicate listing",
  },
  EMPTY_PACKAGES: {
    category: "Deprecated Infractions",
    text: "Empty packages sent to consumers",
  },
  FAKE_RATING: {
    category: "Deprecated Infractions",
    text: "Manipulated ratings and reviews",
  },
  FAKE_TRACKING: { category: "Order Infractions", text: "Misleading tracking" },
  FINE_FOR_COUNTERFEIT_GOODS: {
    category: "Listing Infractions",
    text: "Intellectual Property Violation",
  },
  FINE_PRODUCT_SWAPPED: {
    category: "Listing Infractions",
    text: "Material listing change",
  },
  FINE_WISH_EXPRESS_POLICY_VIOLATION: {
    category: "Deprecated Infractions",
    text: "Wish Express late fulfillment",
  },
  HIGH_AUTO_REFUND: {
    category: "Deprecated Infractions",
    text: "Store has auto refund ratio >= 10%",
  },
  HIGH_CHARGEBACK_AND_FRAUD_REFUND_RATIO: {
    category: "Deprecated Infractions",
    text: "Store has combined chargeback and fraud refund ratio >= 10%",
  },
  HIGH_CHARGEBACK_RATIO: {
    category: "Deprecated Infractions",
    text: "Store has chargeback ratio >= 5%",
  },
  HIGH_GMV_FROM_GAMING_AUDIT: {
    category: "Deprecated Infractions",
    text: "High share of sales from misleading listings and/or tracking",
  },
  HIGH_GMV_FROM_GAMING_BAN: {
    category: "Deprecated Infractions",
    text: "High share of sales from misleading listings and/or tracking",
  },
  HIGH_GMV_FROM_GAMING_FREEZE: {
    category: "Deprecated Infractions",
    text: "High share of sales from misleading listings and/or tracking",
  },
  HIGH_IP_INFRINGEMENT: {
    category: "Merchant Infractions",
    text: "Suspension: Large number of IP infringements",
  },
  HIGH_REFUND_RATIO: {
    category: "Deprecated Infractions",
    text: "Store has an extremely high refund ratio",
  },
  INACTIVE_ACCOUNT: {
    category: "Merchant Infractions",
    text: "Inactive Account",
  },
  INVALID_EU_RESPONSIBLE_PERSON: {
    category: "Deprecated Infractions",
    text: "Invalid EU responsible person",
  },
  INVALID_TRACKING_NUMBERS: {
    category: "Deprecated Infractions",
    text: "Store is using invalid tracking numbers",
  },
  LATE_CONFIRMED_FULFILLMENT_VIOLATION: {
    category: "Order Infractions",
    text: "Late confirmed fulfillment",
  },
  LATE_FULFILLMENT_RATE: {
    category: "Deprecated Infractions",
    text: "Store has an extremely high late confirmed fulfillment rate",
  },
  LEGAL_TRO_TAKEDOWN: {
    category: "Listing Infractions",
    text: "Intellectual Property Violation",
  },
  MERCHANT_CANCELLATION_VIOLATION: {
    category: "Order Infractions",
    text: "Order cancellation",
  },
  MERCHANT_CONTACT_INFO_INVALID: {
    category: "Merchant Infractions",
    text: "Invalid merchant contact information",
  },
  MERCHANT_HARASSMENT: {
    category: "Deprecated Infractions",
    text: "Harassment of Wish employees or property",
  },
  MERCHANT_HIGH_CANCEL_ORDER_RATE: {
    category: "Deprecated Infractions",
    text: "Store has high order cancellation rate",
  },
  MERCHANT_HIGH_QUALITY_REFUND_RATIO: {
    category: "Deprecated Infractions",
    text: "Merchant has an extremely high refund rate from quality-related reasons",
  },
  MERCHANT_HIGH_REFUND_EAT_COST: {
    category: "Deprecated Infractions",
    text: "Store has a high refund ratio",
  },
  MISLEADING_VARIATION: {
    category: "Listing Infractions",
    text: "Misleading product variation in listing",
  },
  ORDER_NOT_DELIVERED: {
    category: "Order Infractions",
    text: "Order not delivered",
  },
  PENALTY_FOR_AUTO_REFUND: {
    category: "Deprecated Infractions",
    text: "High number of unfulfilled orders for product listing.",
  },
  PRODUCT_GEOBLOCK: {
    category: "Listing Infractions",
    text: "Regionally Restricted Product Listing",
  },
  PRODUCT_HIGH_CANCEL_ORDER_RATE: {
    category: "Deprecated Infractions",
    text: "Product has high order cancellation rate",
  },
  PRODUCT_HIGH_QUALITY_REFUND_RATIO: {
    category: "Deprecated Infractions",
    text: "High product quality-related refund rate",
  },
  PRODUCT_HIGH_REFUND_RATIO: {
    category: "Order Infractions",
    text: "High refund rate - Product quality",
  },
  PRODUCT_HIGH_REFUND_RATIO_NO_REMOVE: {
    category: "Deprecated Infractions",
    text: "High refund rate - Product quality",
  },
  PRODUCT_IS_INAPPROPRIATE: {
    category: "Listing Infractions",
    text: "Inappropriate Content",
  },
  PRODUCT_LOW_RATING: {
    category: "Deprecated Infractions",
    text: "Low rated product",
  },
  PRODUCT_LOW_RATING_NO_REMOVE: {
    category: "Deprecated Infractions",
    text: "Low rated product",
  },
  RELATED_ACCOUNT_IS_BANNED: {
    category: "Deprecated Infractions",
    text: "Related merchant account suspended",
  },
  REPEAT_IP_INFRINGEMENT_ON_BRAND_OWNER: {
    category: "Merchant Infractions",
    text: "Repeat IP Infringement",
  },
  REQUEST_MONEY: {
    category: "Merchant Infractions",
    text: "Payment from customer requested outside Wish",
  },
  REQUEST_USER_EMAIL: {
    category: "Merchant Infractions",
    text: "Personal information of customer requested",
  },
  STORE_VALIDATION_INCOMPLETE: {
    category: "Deprecated Infractions",
    text: "Incomplete store validation",
  },
  STRIKE_BASED_HIGH_RISK_PROHIBITED: {
    category: "Listing Infractions",
    text: "High Risk Prohibited Content Strike",
  },
  SUSPECTED_FRAUD: {
    category: "Merchant Infractions",
    text: "Suspected Fraud",
  },
  TAKE_USER_OUTSIDE_WISH: {
    category: "Merchant Infractions",
    text: "Directing customers off of Wish",
  },
  TAX_SETTING_NOT_UPDATED: {
    category: "Deprecated Infractions",
    text: "Tax setting update required",
  },
  UNCONFIRMED_TRACKING_NUMBERS: {
    category: "Deprecated Infractions",
    text: "Store is using unconfirmed tracking numbers",
  },
  UNFULFILLED_ORDER: {
    category: "Order Infractions",
    text: "Unfulfilled order",
  },
  US_TAX_INFO_UNVALIDATED: {
    category: "Deprecated Infractions",
    text: "U.S. Tax Identity Information UnvalidatedU.S. Tax Identity Information Unvalidated",
  },
  VIOLATE_POLICY: {
    category: "Merchant Infractions",
    text: "Wish merchant policy violation",
  },
  WAREHOUSE_FULFILLMENT_POLICY_VIOLATION: {
    category: "Order Infractions",
    text: "Order delivered later than merchant-set Max Delivery Days",
  },
  WISH_EXPRESS_POLICY_MERCHANT: {
    category: "Deprecated Infractions",
    text: "Wish Express Terms of Service violation: Merchant",
  },
  WISH_EXPRESS_POLICY_PRODUCT: {
    category: "Deprecated Infractions",
    text: "Wish Express Terms of Service violation: Product",
  },
  WISH_EXPRESS_POLICY_VIOLATION: {
    category: "Deprecated Infractions",
    text: "Wish Express late confirmed delivery",
  },
  WISH_STANDARDS_BAN: {
    category: "Merchant Infractions",
    text: "Wish standards ban",
  },
  WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION: {
    category: "Deprecated Infractions",
    text: "Face recognition incomplete for wishpost ID",
  },
  WISHPOST_NEGATIVE_BALANCE: {
    category: "Merchant Infractions",
    text: "WishPost negative account balance",
  },
  SUSPENDED_FOR_UNDER_PERFORMING: {
    category: "Merchant Infractions",
    text: "Low performing catalo",
  },
  PRODUCT_LIMIT_REACHED: {
    category: "Merchant Infractions",
    text: "Product limit reached",
  },
  ADDITIONAL_TAX_INFO: {
    category: "Merchant Infractions",
    text: "Tax information required",
  },
};

export const InfractionsDictionary = {
  ...CategorizedInfractionsDictionary,
};

export const InfractionOptions = Object.keys(
  CategorizedInfractionsDictionary
) as ReadonlyArray<keyof typeof CategorizedInfractionsDictionary>;
