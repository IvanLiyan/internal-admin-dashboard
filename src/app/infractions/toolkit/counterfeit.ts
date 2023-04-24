import { CounterfeitReason } from "@app/schema";

type MisleadingTaggingReasons = ExtractStrict<
  CounterfeitReason,
  | "MISLEADING_LISTING"
  | "AMBIGUOUS_LISTING"
  | "PRICE_GOUGING"
  | "JEWELRY_AND_METALS"
>;

type InappropriateTaggingReasons = Exclude<
  ExtractStrict<
    CounterfeitReason,
    | "WEAPON"
    | "SMOKING"
    | "RECALLED_TOYS"
    | "VIRTUAL_GOODS"
    | "NUDITY"
    | "HATE_CRIME"
    | "FALSE_ADVERTISING"
    | "ILLEGAL_ELECTRONICS"
    | "AMBIGUOUS_LISTING"
    | "MISLEADING_LISTING"
    | "MEDICAL_MATERIALS"
    | "HAZARDOUS_MATERIALS"
    | "CONSUMPTION_MATERIALS"
    | "SAFETY_EQUIPMENT"
    | "UNVERIFIED_MONEY"
    | "ANIMAL_PRODUCTS"
    | "PLANTS_AND_SEEDS"
    | "DANGEROUS_ITEMS"
    | "DISTASTEFUL_CONTENT"
    | "GRAPHIC_VIOLENCE"
    | "JEWELRY_AND_METALS"
  >,
  MisleadingTaggingReasons
>;

type IPViolationTaggingReasons = ExtractStrict<
  CounterfeitReason,
  | "IS_MAJOR_BRAND"
  | "PICTURED_WITH_MAJOR_BRAND"
  | "TEAM_LOGO"
  | "UNLICENSED_MEDIA"
  | "BLURRED_INFORMATION"
>;

type CounterfeitReasonCategory<T> = T extends MisleadingTaggingReasons
  ? "Misleading tagging reasons"
  : T extends InappropriateTaggingReasons
  ? "Inappropriate tagging reasons"
  : T extends IPViolationTaggingReasons
  ? "IP violation tagging reasons"
  : never;

const CategorizedCounterfeitReasonsDictionary: {
  [T in
    | MisleadingTaggingReasons
    | InappropriateTaggingReasons
    | IPViolationTaggingReasons]: {
    readonly text: string;
    readonly category: CounterfeitReasonCategory<T>;
  };
} = {
  IS_MAJOR_BRAND: {
    text: "Counterfeit and/or IP Violation",
    category: "IP violation tagging reasons",
  },
  PICTURED_WITH_MAJOR_BRAND: {
    text: "Pictured with boxes/bag/hanger/store front of a major brand",
    category: "IP violation tagging reasons",
  },
  WEAPON: { text: "Weapon", category: "Inappropriate tagging reasons" },
  TEAM_LOGO: {
    text: "Sporting Trademark",
    category: "IP violation tagging reasons",
  },
  SMOKING: {
    text: "Drugs and Drug Paraphernalia",
    category: "Inappropriate tagging reasons",
  },
  NUDITY: {
    text: "Graphic Sexual Content",
    category: "Inappropriate tagging reasons",
  },
  RECALLED_TOYS: {
    text: "Recalled Items",
    category: "Inappropriate tagging reasons",
  },
  VIRTUAL_GOODS: {
    text: "Virtual Goods",
    category: "Inappropriate tagging reasons",
  },
  HATE_CRIME: {
    text: "Hateful Symbols & Messages",
    category: "Inappropriate tagging reasons",
  },
  FALSE_ADVERTISING: {
    text: "False Advertising",
    category: "Inappropriate tagging reasons",
  },
  ILLEGAL_ELECTRONICS: {
    text: "Privacy and Technology Violations",
    category: "Inappropriate tagging reasons",
  },
  AMBIGUOUS_LISTING: {
    text: "Ambiguous Listing",
    category: "Misleading tagging reasons",
  },
  UNLICENSED_MEDIA: {
    text: "Unlicensed Media",
    category: "IP violation tagging reasons",
  },
  MISLEADING_LISTING: {
    text: "Misleading Listing",
    category: "Misleading tagging reasons",
  },
  MEDICAL_MATERIALS: {
    text: "Medically Regulated Materials",
    category: "Inappropriate tagging reasons",
  },
  HAZARDOUS_MATERIALS: {
    text: "Hazardous Materials",
    category: "Inappropriate tagging reasons",
  },
  CONSUMPTION_MATERIALS: {
    text: "Materials for Consumption",
    category: "Inappropriate tagging reasons",
  },
  BLURRED_INFORMATION: {
    text: "Blurred Information",
    category: "IP violation tagging reasons",
  },
  SAFETY_EQUIPMENT: {
    text: "Safety Equipment",
    category: "Inappropriate tagging reasons",
  },
  UNVERIFIED_MONEY: {
    text: "Unverified Currency",
    category: "Inappropriate tagging reasons",
  },
  PRICE_GOUGING: {
    text: "Price Gouging",
    category: "Misleading tagging reasons",
  },
  ANIMAL_PRODUCTS: {
    text: "Animal Products",
    category: "Inappropriate tagging reasons",
  },
  PLANTS_AND_SEEDS: {
    text: "Plants and Plant Seeds",
    category: "Inappropriate tagging reasons",
  },
  DANGEROUS_ITEMS: {
    text: "Dangerous Items",
    category: "Inappropriate tagging reasons",
  },
  DISTASTEFUL_CONTENT: {
    text: "Distasteful Content",
    category: "Inappropriate tagging reasons",
  },
  GRAPHIC_VIOLENCE: {
    text: "Graphic Violence",
    category: "Inappropriate tagging reasons",
  },
  JEWELRY_AND_METALS: {
    text: "Jewelry and Metals",
    category: "Misleading tagging reasons",
  },
};

const UncategorizedCounterfeitReasonsDictionary: {
  [T in ExcludeStrict<
    CounterfeitReason,
    | MisleadingTaggingReasons
    | InappropriateTaggingReasons
    | IPViolationTaggingReasons
  >]: {
    readonly text: string;
  };
} = {
  BLURRED_LABEL: { text: "Blurred out tag or label" },
  BLURRED_WATERMARK: { text: "Blurred watermark" },
  CENSORED_FACE: { text: "Blurred or censored face" },
  CELEBRITY_PHOTO: { text: "Celebrity photo" },
  WISH_ADMIN: { text: "Inappropriate Product" },
  CARSEAT: { text: "Child Carseat" },
  HARNESS: { text: "Child Harness" },
  PIERCING_GUN: { text: "Piercing Gun" },
  TATTOO_GUN: { text: "Tattoo Gun" },
  LIGHTERS: { text: "Lighters" },
  HARMFUL_CHEMICALS: {
    text: "Medically Regulated, Hazardous, or Consumable Materials",
  },
  ADULT_CONTENT: { text: "Adult Content" },
  BIKE_HELMETS: { text: "Bike and Motorcyle Helmets" },
  PLANT_SEEDS: { text: "Plant Seeds" },
  PRODUCT_MODIFIED: { text: "Product Modified" },
  HOVERBOARD: { text: "Hoverboard" },
  CONTACT_LENSES: { text: "Contact Lenses" },
  TRICK_CANDLES: { text: "Trick Candles" },
  PROP_MONEY: { text: "Prop Money" },
  MISLEADING_LISTING_AUTHENTIC_BRAND: {
    text: "Misleading Listing - Authentic Brands",
  },
  REGIONAL_RESTRICTIONS: { text: "Regional Restrictions" },
  CN_PROHIBITED_PRODUCTS: { text: "CN Prohibited Products" },
};

export const CounterfeitReasonsDictionary = {
  ...CategorizedCounterfeitReasonsDictionary,
  ...UncategorizedCounterfeitReasonsDictionary,
};

export const CounterfeitReasonOptions = Object.keys(
  CategorizedCounterfeitReasonsDictionary
) as ReadonlyArray<keyof typeof CategorizedCounterfeitReasonsDictionary>;
