import { CounterfeitReasonCode, TaggingViolationSubReasonCode } from "@schema";

type CategoryWithSubreasons = ExtractStrict<
  CounterfeitReasonCode,
  | "SMOKING"
  | "NUDITY"
  | "HATE_CRIME"
  | "FALSE_ADVERTISING"
  | "AMBIGUOUS_LISTING"
  | "UNLICENSED_MEDIA"
  | "MISLEADING_LISTING"
  | "MEDICAL_MATERIALS"
  | "HAZARDOUS_MATERIALS"
  | "CONSUMPTION_MATERIALS"
  | "WEAPON"
  | "ILLEGAL_ELECTRONICS"
  | "RECALLED_TOYS"
  | "VIRTUAL_GOODS"
  | "BLURRED_INFORMATION"
  | "SAFETY_EQUIPMENT"
  | "UNVERIFIED_MONEY"
  | "ANIMAL_PRODUCTS"
  | "REGIONAL_RESTRICTIONS"
  | "CN_PROHIBITED_PRODUCTS"
  | "PLANTS_AND_SEEDS"
  | "JEWELRY_AND_METALS"
  | "DANGEROUS_ITEMS"
  | "PRODUCT_MODIFIED"
>;

type SmokingSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "TOBACCO"
  | "MARIJUANA"
  | "CIGARETTE"
  | "ECIGARETTE_VAPE"
  | "VAPE_LIQUID"
  | "HOOKAH_PEN"
  | "TOBACCO_SEEDS"
  | "POPPERS_AND_MUSCLE_RELAXANTS"
  | "MOD_BOXES"
  | "RECREATIONAL_DRUGS_AND_CHEMICALS"
  | "PILL_PRESSES"
  | "PROHIBITED_SUBSTANCE_PIPE"
  | "LISTING_PROMOTES_HIDING_PROHIBITED_SUBSTANCE"
>;

type NuditySubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "SEXUAL_CONTENT_INCLUDING_MINOR"
  | "IMAGE_OF_PENETRATION"
  | "FULLY_EXPOSED_GENITAL"
  | "FULLY_EXPOSED_NIPPLE"
  | "IMAGE_OF_MASTURBATION"
  | "UNCENSORED_EROTIC_ANIME"
  | "FULLY_EXPOSED_ANUS"
  | "SEXUALLY_EXPLICIT_MATERIAL"
  | "ANIME_PRODUCTS"
  | "SEXUALLY_SUGGESTIVE_CONTENT"
  | "EROTIC_SETUPS"
  | "NUDE_MINOR_IN_NON_SEXUAL_CONTEXT"
  | "SEXUALLY_EXPLICIT_CONTENT"
  | "HYPERREALISTIC_CONTENT"
  | "NON_CLINICAL_CONTENT"
>;

type HateCrimeSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "KKK_PARAPHERNALIA"
  | "NAZI_MEMORABILIA"
  | "HITLER_IMAGERY"
  | "ANTI_GAY"
  | "BULLYING"
  | "HATE_SPEECH"
  | "HATEFUL_IMAGERY"
  | "RACIAL_CLEANSING"
  | "TERRORIST_PROMOTION_GROUPS"
  | "HATEFUL_CORONAVIRUS_PRODUCTS"
  | "CONFEDERATE_FLAG"
  | "PROUD_BOY_MEMORABILIA"
  | "QANON_MEMORABILIA"
  | "OTHER_WHITE_SUPREMACY_MEMORABILIA"
  | "HATE_GROUPS"
  | "DOMESTIC_TERRORISTS_MEMORABILIA"
>;

type FalseAdvertisingSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "COMPETITOR_WATERMARK"
  | "UNVERIFIED_SHIPPING_TIME_FRAME"
  | "UNVERIFIED_FREE_SHIPPING"
  | "UNAUTHROIZED_USE_WISH"
  | "UNVERIFIED_WARRANTIES"
  | "PLANT_SEED_WITH_IMPOSSIBLE_CLAIM"
  | "UNVERIFIED_LOGO"
  | "UNVERFIED_PRICE_INFORMATION"
  | "MERCAHNT_CONTACT_OR_REFERAL"
  | "UNREALISTIC_HEALTH_CLAIM_PRODUCTS"
>;

type AmbiguousListingSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "SURPRISE_BOX"
  | "SIZE_COLOR_OPTION_GAMING"
  | "PRODUCT_VARIANCE"
  | "NOT_FOCUS_OF_MAIN_IMAGE"
  | "NOT_DESCRIBE_AVAILABLE_QUANTITY"
  | "SIZE_MISPRESENTATION"
  | "VALUE_VARIANCE"
  | "RANDOM_PRODUCT"
>;

type UnlicensedMediaSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "BLUE_RAY"
  | "DVD"
  | "CD"
  | "VIDEO_GAME"
  | "VHS_TAPE"
  | "CASSETTE_TAPE"
  | "RECORDS"
  | "SOFTWARE"
  | "LASER_DISC"
>;

type MisleadingListingSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "PRICE_POINT_UNREASONABLE"
  | "TITLE_IMAGE_MISMATCH"
  | "SIZE_NOT_AS_ADVERTISED"
  | "IMAGE_NOT_PRODUCT"
  | "REVIEW_SHOW_WRONG_PRODUCT"
  | "RATING_SHOW_WRONG_PRODUCT"
  | "FEEDBACK_ABOUT_NO_PRODUCT"
  | "NOT_FOCUS_MAIN_IMAGE"
  | "SIZE_MISREPRESENTATION_MAIN_IMAGE"
  | "CUSTOMER_FEEDBACK_ABOUT_FALSE_SPEC"
  | "MISLEADING_WIG"
  | "UNSUPPORTED_MEDICAL_CLAIMS"
  | "MISLEADING_KEY_FEATURE"
  | "BRAND_DISCREPANCY"
  | "UNREASONABLE_SPEC"
  | "CLAIM_FREE_PRODUCT_OFFERS"
>;

type MedicalMaterialsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "CONTACTS"
  | "CONTACT_LENS_SOLUTION"
  | "HUMAN_GROWTH_HORMONE"
  | "CHLOROFORM"
  | "PENICILLIN"
  | "EYELASH_GROWTH_SERUM"
  | "PRESCRIPTION_STRENGTH_ITEMS"
  | "INJECTABLE_ITEMS"
  | "OTC_MEDICATION"
  | "OXIMETERS"
  | "CATHETERS"
  | "BLOOD_COLLECTION_TUBES"
  | "SYRINGES"
>;

type HazardousMaterialsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "BUTANE"
  | "HOVERBOARDS"
  | "HUMAN_BY_PRODUCTS"
  | "COCKROACH_CHALK"
  | "PESTICIDES"
  | "TIRE_SPIKES"
  | "GLYPHOSATE"
  | "BENZENE"
  | "STANDALONE_LITHIUM_BATTERY"
>;

type ConsumptionMaterialsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  "FOOD" | "PET_FOOD" | "BEVERAGES" | "ALCOHOL" | "VITAMINS_AND_SUPPLEMENTS"
>;

type WeaponSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "FIREARMS_AND_GUNS"
  | "AMMUNITION"
  | "METAL_NINJA_STARS"
  | "EXPLOSIVE_WEAPONS"
  | "LASER_POINTERS"
  | "GUN_SILENCERS"
  | "GUN_BUILDING_KITS"
  | "ASSAULT_WEAPON_CONVERSION_PIECES"
  | "GUN_SILENCER_MISUSE"
  | "GUN_SILENCER_COMPONENTS"
  | "BRASS_OR_METAL_KNUCKLES"
>;

type IllegalElectronicsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "JAMMERS"
  | "SPY_CAMERAS"
  | "ODOMETER_CORRECTION_TOOLS"
  | "FULLY_LOADED_TV_BOXES"
>;

type RecalledToysSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "MAGNETS_AS_TOYS"
  | "CPSC_VIOLATION"
  | "SELF_FEEDING_BABY_PILLOWS"
  | "SELF_FEEDING_BABY_BOTTLE_CLIPS"
>;

type VirtualGoodsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "GIFT_CARDS_OR_ACCESS_CODES"
  | "SUBSCRIPTIONS_OR_MEMBERSHIPS"
  | "VIRTUAL_MONEY"
  | "HOUSEKEEPING_TOUR_PACKAGES"
  | "PURCHANSED_FOLLOWERS"
>;

type BlurredInformationSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  "BLURRED_TAGS" | "BLURRED_LOGOS" | "BLURRED_WATERMARKS"
>;

type SafetyEquipmentSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  "CHILD_HARNESS" | "CHILD_CARSEAT" | "SEATBELTS"
>;

type UnverifiedMoneySubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "EURO_CURRENCY"
  | "IMITATION_CURRENCY"
  | "COUNTERFEIT_CURRENCY"
  | "US_PROP_MONEY"
>;

type AnimalProductsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  "LIVE_ANIMAL" | "ENDANGERED_SPECIES"
>;
type RegionalRestrictionsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  "EPA_PESTICIDES_US" | "EPA_EMMISIONS_DEFEAT_US" | "PROHIBITED_CUSTOMS_CN"
>;

type CNProhibitedProductsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "CN_PROHIBITED_PRODUCT_TASERS"
  | "CN_PROHIBITED_PRODUCT_STUN_GUNS"
  | "CN_PROHIBITED_PRODUCT_AIRSOFT"
  | "CN_PROHIBITED_PRODUCT_BB_GUNS"
  | "CN_PROHIBITED_PRODUCT_IMITATION_FIREARMS"
>;

type PlantsAndSeedsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  "PLANTS" | "PLANT_SEEDS" | "PLANT_SEED_WITH_IMPOSSIBLE_CLAIM_V2"
>;

type JewelryAndMetalsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "MISLEADING_CLAIMS"
  | "CONTAINS_HARMFUL_CONTENT"
  | "MISSING_KEY_REQUIREMENTS"
  | "BULLION"
>;

type DangerousItemsSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  "DANGEROUS_CPA_VIOLATION" | "DANGEROUS_NON_CPA_VIOLATION"
>;

type ProductModifiedSubreasons = ExtractStrict<
  TaggingViolationSubReasonCode,
  | "BRANDING_CHANGE"
  | "IMAGE_OR_TITLE_CHANGE"
  | "GRADUAL_CHANGE"
  | "HIDDEN_SEX_TOYS"
>;

type CounterfeitSubreasonsCategory<T> = T extends SmokingSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "SMOKING">
  : T extends NuditySubreasons
  ? ExtractStrict<CategoryWithSubreasons, "NUDITY">
  : T extends HateCrimeSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "HATE_CRIME">
  : T extends FalseAdvertisingSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "FALSE_ADVERTISING">
  : T extends AmbiguousListingSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "AMBIGUOUS_LISTING">
  : T extends UnlicensedMediaSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "UNLICENSED_MEDIA">
  : T extends MisleadingListingSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "MISLEADING_LISTING">
  : T extends MedicalMaterialsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "MEDICAL_MATERIALS">
  : T extends HazardousMaterialsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "HAZARDOUS_MATERIALS">
  : T extends ConsumptionMaterialsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "CONSUMPTION_MATERIALS">
  : T extends WeaponSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "WEAPON">
  : T extends IllegalElectronicsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "ILLEGAL_ELECTRONICS">
  : T extends RecalledToysSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "RECALLED_TOYS">
  : T extends VirtualGoodsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "VIRTUAL_GOODS">
  : T extends BlurredInformationSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "BLURRED_INFORMATION">
  : T extends SafetyEquipmentSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "SAFETY_EQUIPMENT">
  : T extends UnverifiedMoneySubreasons
  ? ExtractStrict<CategoryWithSubreasons, "UNVERIFIED_MONEY">
  : T extends AnimalProductsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "ANIMAL_PRODUCTS">
  : T extends RegionalRestrictionsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "REGIONAL_RESTRICTIONS">
  : T extends CNProhibitedProductsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "CN_PROHIBITED_PRODUCTS">
  : T extends PlantsAndSeedsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "PLANTS_AND_SEEDS">
  : T extends JewelryAndMetalsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "JEWELRY_AND_METALS">
  : T extends DangerousItemsSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "DANGEROUS_ITEMS">
  : T extends ProductModifiedSubreasons
  ? ExtractStrict<CategoryWithSubreasons, "PRODUCT_MODIFIED">
  : never;

export const CounterfeitSubreasonsDictionary: {
  [T in TaggingViolationSubReasonCode]: {
    readonly categoryCode: CounterfeitSubreasonsCategory<T>;
    readonly text: string;
  };
} = {
  TOBACCO: { categoryCode: "SMOKING", text: "Tobacco" },
  MARIJUANA: { categoryCode: "SMOKING", text: "Marijuana/Cannabis" },
  CIGARETTE: { categoryCode: "SMOKING", text: "Cigars and Cigarettes" },
  ECIGARETTE_VAPE: { categoryCode: "SMOKING", text: "E-cigarettes/Vape Pens" },
  VAPE_LIQUID: {
    categoryCode: "SMOKING",
    text: "E-Juice / E-Liquid / Vape liquid",
  },
  HOOKAH_PEN: { categoryCode: "SMOKING", text: "Hookah pens" },
  TOBACCO_SEEDS: {
    categoryCode: "SMOKING",
    text: "Tobacco/Marijuana/Cannabis/Hemp Seeds",
  },
  POPPERS_AND_MUSCLE_RELAXANTS: {
    categoryCode: "SMOKING",
    text: "Poppers and Muscle Relaxants",
  },
  MOD_BOXES: { categoryCode: "SMOKING", text: "Mod Boxes" },
  RECREATIONAL_DRUGS_AND_CHEMICALS: {
    categoryCode: "SMOKING",
    text: "Recreational Drugs and/or Research Chemicals",
  },
  PILL_PRESSES: { categoryCode: "SMOKING", text: "Pill Press Machines" },
  PROHIBITED_SUBSTANCE_PIPE: {
    categoryCode: "SMOKING",
    text: "Prohibited Substance Pipe",
  },
  LISTING_PROMOTES_HIDING_PROHIBITED_SUBSTANCE: {
    categoryCode: "SMOKING",
    text: "Listing Promotes Hiding Prohibited Substance",
  },

  NUDE_MINOR_IN_NON_SEXUAL_CONTEXT: {
    categoryCode: "NUDITY",
    text: "Nude Minor In Non-Sexual Context",
  },
  SEXUAL_CONTENT_INCLUDING_MINOR: {
    categoryCode: "NUDITY",
    text: "Sexual Content Including Minor",
  },
  IMAGE_OF_PENETRATION: {
    categoryCode: "NUDITY",
    text: "Image of Penetration",
  },
  FULLY_EXPOSED_GENITAL: {
    categoryCode: "NUDITY",
    text: "Fully Exposed, Real Male / Female Genitals",
  },
  FULLY_EXPOSED_NIPPLE: {
    categoryCode: "NUDITY",
    text: "Fully Exposed Real Female Nipples",
  },
  IMAGE_OF_MASTURBATION: {
    categoryCode: "NUDITY",
    text: "Image of Masturbation",
  },
  UNCENSORED_EROTIC_ANIME: {
    categoryCode: "NUDITY",
    text: "Uncensored Erotic Anime",
  },
  FULLY_EXPOSED_ANUS: {
    categoryCode: "NUDITY",
    text: "Fully Exposed Real Anus",
  },
  SEXUALLY_EXPLICIT_MATERIAL: {
    categoryCode: "NUDITY",
    text: "Sexually Explicit Material",
  },
  ANIME_PRODUCTS: {
    categoryCode: "NUDITY",
    text: "Anime Products without sufficient censorship",
  },
  SEXUALLY_SUGGESTIVE_CONTENT: {
    categoryCode: "NUDITY",
    text: "Sexually Suggestive Content",
  },
  EROTIC_SETUPS: { categoryCode: "NUDITY", text: "Erotic Setups" },
  SEXUALLY_EXPLICIT_CONTENT: {
    categoryCode: "NUDITY",
    text: "Sexually Explicit Content",
  },
  HYPERREALISTIC_CONTENT: {
    categoryCode: "NUDITY",
    text: "Hyperrealistic Product",
  },
  NON_CLINICAL_CONTENT: {
    categoryCode: "NUDITY",
    text: "Non-Clinical Content",
  },

  KKK_PARAPHERNALIA: { categoryCode: "HATE_CRIME", text: "KKK Paraphernalia" },
  NAZI_MEMORABILIA: { categoryCode: "HATE_CRIME", text: "Nazi Memorabilia" },
  HITLER_IMAGERY: { categoryCode: "HATE_CRIME", text: "Hitler Imagery" },
  ANTI_GAY: { categoryCode: "HATE_CRIME", text: "Anti-gay" },
  BULLYING: { categoryCode: "HATE_CRIME", text: "Bullying" },
  HATE_SPEECH: { categoryCode: "HATE_CRIME", text: "Hate Speech" },
  HATEFUL_IMAGERY: { categoryCode: "HATE_CRIME", text: "Hateful Imagery" },
  RACIAL_CLEANSING: { categoryCode: "HATE_CRIME", text: "Racial Cleansing" },
  TERRORIST_PROMOTION_GROUPS: {
    categoryCode: "HATE_CRIME",
    text: "Terrorist Promotion Groups",
  },
  HATEFUL_CORONAVIRUS_PRODUCTS: {
    categoryCode: "HATE_CRIME",
    text: "Hateful Coronavirus Products",
  },
  CONFEDERATE_FLAG: { categoryCode: "HATE_CRIME", text: "Confederate Flag" },
  PROUD_BOY_MEMORABILIA: {
    categoryCode: "HATE_CRIME",
    text: "Proud Boy Memorabilia",
  },
  QANON_MEMORABILIA: { categoryCode: "HATE_CRIME", text: "Qanon Memorabilia" },
  OTHER_WHITE_SUPREMACY_MEMORABILIA: {
    categoryCode: "HATE_CRIME",
    text: "Other White Supremacy Memorabilia",
  },
  HATE_GROUPS: { categoryCode: "HATE_CRIME", text: "Hate Groups" },
  DOMESTIC_TERRORISTS_MEMORABILIA: {
    categoryCode: "HATE_CRIME",
    text: "Domestic Terrorists Memorabilia",
  },

  COMPETITOR_WATERMARK: {
    categoryCode: "FALSE_ADVERTISING",
    text: "Competitor Watermark",
  },
  UNVERIFIED_SHIPPING_TIME_FRAME: {
    categoryCode: "FALSE_ADVERTISING",
    text: "Unverified Shipping Time Frame Information",
  },
  UNVERIFIED_FREE_SHIPPING: {
    categoryCode: "FALSE_ADVERTISING",
    text: "Unverified Free Shipping Claim",
  },
  UNAUTHROIZED_USE_WISH: {
    categoryCode: "FALSE_ADVERTISING",
    text: 'Unauthorized use of "Verified by Wish" or "Wish Express"',
  },
  UNVERIFIED_WARRANTIES: {
    categoryCode: "FALSE_ADVERTISING",
    text: "Unverified Warranties",
  },
  PLANT_SEED_WITH_IMPOSSIBLE_CLAIM: {
    categoryCode: "FALSE_ADVERTISING",
    text: "Plant Seeds with Impossible Claims",
  },
  UNVERIFIED_LOGO: {
    categoryCode: "FALSE_ADVERTISING",
    text: "Unverified Logos from credible agencies",
  },
  UNVERFIED_PRICE_INFORMATION: {
    categoryCode: "FALSE_ADVERTISING",
    text: "Unverified Price Information",
  },
  MERCAHNT_CONTACT_OR_REFERAL: {
    categoryCode: "FALSE_ADVERTISING",
    text: "Merchant Contact or Referral Information",
  },
  UNREALISTIC_HEALTH_CLAIM_PRODUCTS: {
    categoryCode: "FALSE_ADVERTISING",
    text: "Unrealistic Health Claim Products",
  },

  SURPRISE_BOX: { categoryCode: "AMBIGUOUS_LISTING", text: "Surprise Boxes" },
  SIZE_COLOR_OPTION_GAMING: {
    categoryCode: "AMBIGUOUS_LISTING",
    text: "Size/Color Option Gaming",
  },
  PRODUCT_VARIANCE: {
    categoryCode: "AMBIGUOUS_LISTING",
    text: "Product Variance",
  },
  NOT_FOCUS_OF_MAIN_IMAGE: {
    categoryCode: "AMBIGUOUS_LISTING",
    text: "Product is not the focus of the main image",
  },
  NOT_DESCRIBE_AVAILABLE_QUANTITY: {
    categoryCode: "AMBIGUOUS_LISTING",
    text: "First Image/Title does not explicitly describe each available quantities",
  },
  SIZE_MISPRESENTATION: {
    categoryCode: "AMBIGUOUS_LISTING",
    text: "Size Misrepresentation (Product Image Only)",
  },
  VALUE_VARIANCE: { categoryCode: "AMBIGUOUS_LISTING", text: "Value Variance" },
  RANDOM_PRODUCT: {
    categoryCode: "AMBIGUOUS_LISTING",
    text: "Random/Undefined product",
  },

  BLUE_RAY: { categoryCode: "UNLICENSED_MEDIA", text: "Blu-rays" },
  DVD: { categoryCode: "UNLICENSED_MEDIA", text: "DVDs" },
  CD: { categoryCode: "UNLICENSED_MEDIA", text: "CDs" },
  VIDEO_GAME: { categoryCode: "UNLICENSED_MEDIA", text: "Video Games" },
  VHS_TAPE: { categoryCode: "UNLICENSED_MEDIA", text: "VHS Tapes" },
  CASSETTE_TAPE: { categoryCode: "UNLICENSED_MEDIA", text: "Cassette Tapes" },
  RECORDS: { categoryCode: "UNLICENSED_MEDIA", text: "Records" },
  SOFTWARE: { categoryCode: "UNLICENSED_MEDIA", text: "Software" },
  LASER_DISC: { categoryCode: "UNLICENSED_MEDIA", text: "Laser Discs" },

  PRICE_POINT_UNREASONABLE: {
    categoryCode: "MISLEADING_LISTING",
    text: "Price Point Unreasonable",
  },
  TITLE_IMAGE_MISMATCH: {
    categoryCode: "MISLEADING_LISTING",
    text: "Title and Main Image Discrepancy",
  },
  SIZE_NOT_AS_ADVERTISED: {
    categoryCode: "MISLEADING_LISTING",
    text: "Description & Package Size not as Advertised",
  },
  CUSTOMER_FEEDBACK_ABOUT_FALSE_SPEC: {
    categoryCode: "MISLEADING_LISTING",
    text: "Customer Feedback About False Spec",
  },
  IMAGE_NOT_PRODUCT: {
    categoryCode: "MISLEADING_LISTING",
    text: "More than One Image Not of Product",
  },
  REVIEW_SHOW_WRONG_PRODUCT: {
    categoryCode: "MISLEADING_LISTING",
    text: "Customer Feedback About Different Product",
  },
  RATING_SHOW_WRONG_PRODUCT: {
    categoryCode: "MISLEADING_LISTING",
    text: "Customer Images Show Different Product",
  },
  FEEDBACK_ABOUT_NO_PRODUCT: {
    categoryCode: "MISLEADING_LISTING",
    text: "Customer Feedback About No Product Received",
  },
  NOT_FOCUS_MAIN_IMAGE: {
    categoryCode: "MISLEADING_LISTING",
    text: "Product is not the focus of the main image",
  },
  SIZE_MISREPRESENTATION_MAIN_IMAGE: {
    categoryCode: "MISLEADING_LISTING",
    text: "Size Misrepresentation (Product Image Only)",
  },
  MISLEADING_WIG: {
    categoryCode: "MISLEADING_LISTING",
    text: "Misleading Wig",
  },
  UNSUPPORTED_MEDICAL_CLAIMS: {
    categoryCode: "MISLEADING_LISTING",
    text: "Unsupported Medical Claims",
  },
  MISLEADING_KEY_FEATURE: {
    categoryCode: "MISLEADING_LISTING",
    text: "Misleading key feature",
  },
  BRAND_DISCREPANCY: {
    categoryCode: "MISLEADING_LISTING",
    text: "Brand Discrepancy",
  },
  UNREASONABLE_SPEC: {
    categoryCode: "MISLEADING_LISTING",
    text: "Unreasonable/Exaggerated Spec",
  },
  CLAIM_FREE_PRODUCT_OFFERS: {
    categoryCode: "MISLEADING_LISTING",
    text: "Claim Free Product Offers",
  },

  CONTACTS: { categoryCode: "MEDICAL_MATERIALS", text: "Contacts" },
  CONTACT_LENS_SOLUTION: {
    categoryCode: "MEDICAL_MATERIALS",
    text: "Contact Lens Solution",
  },
  HUMAN_GROWTH_HORMONE: {
    categoryCode: "MEDICAL_MATERIALS",
    text: "Human Growth Hormone",
  },
  CHLOROFORM: { categoryCode: "MEDICAL_MATERIALS", text: "Chloroform" },
  PENICILLIN: { categoryCode: "MEDICAL_MATERIALS", text: "Penicillin" },
  BLOOD_COLLECTION_TUBES: {
    categoryCode: "MEDICAL_MATERIALS",
    text: "Blood Collection Tubes",
  },
  SYRINGES: { categoryCode: "MEDICAL_MATERIALS", text: "Syringes" },
  EYELASH_GROWTH_SERUM: {
    categoryCode: "MEDICAL_MATERIALS",
    text: "Eyelash Growth Serum",
  },
  PRESCRIPTION_STRENGTH_ITEMS: {
    categoryCode: "MEDICAL_MATERIALS",
    text: "Prescription Strength Items",
  },
  INJECTABLE_ITEMS: {
    categoryCode: "MEDICAL_MATERIALS",
    text: "Injectable Items",
  },
  OTC_MEDICATION: {
    categoryCode: "MEDICAL_MATERIALS",
    text: "OTC Medications",
  },
  OXIMETERS: { categoryCode: "MEDICAL_MATERIALS", text: "Oximeters" },
  CATHETERS: { categoryCode: "MEDICAL_MATERIALS", text: "Catheters" },

  PLANTS: { categoryCode: "PLANTS_AND_SEEDS", text: "Plants" },
  PLANT_SEEDS: { categoryCode: "PLANTS_AND_SEEDS", text: "Plant Seeds" },
  PLANT_SEED_WITH_IMPOSSIBLE_CLAIM_V2: {
    categoryCode: "PLANTS_AND_SEEDS",
    text: "Plant Seeds with Impossible Claims",
  },

  BUTANE: { categoryCode: "HAZARDOUS_MATERIALS", text: "Butane" },
  HOVERBOARDS: { categoryCode: "HAZARDOUS_MATERIALS", text: "Hoverboards" },
  HUMAN_BY_PRODUCTS: {
    categoryCode: "HAZARDOUS_MATERIALS",
    text: "Human By-products",
  },
  COCKROACH_CHALK: {
    categoryCode: "HAZARDOUS_MATERIALS",
    text: "Cockroach chalk",
  },
  PESTICIDES: { categoryCode: "HAZARDOUS_MATERIALS", text: "Pesticides" },
  TIRE_SPIKES: { categoryCode: "HAZARDOUS_MATERIALS", text: "Tire Spikes" },
  GLYPHOSATE: { categoryCode: "HAZARDOUS_MATERIALS", text: "Glyphosate" },
  BENZENE: { categoryCode: "HAZARDOUS_MATERIALS", text: "Benzene" },
  STANDALONE_LITHIUM_BATTERY: {
    categoryCode: "HAZARDOUS_MATERIALS",
    text: "Standalone Lithium or Litium-Ion batteries",
  },

  FOOD: { categoryCode: "CONSUMPTION_MATERIALS", text: "Food" },
  PET_FOOD: { categoryCode: "CONSUMPTION_MATERIALS", text: "Pet Food" },
  BEVERAGES: { categoryCode: "CONSUMPTION_MATERIALS", text: "Beverages" },
  ALCOHOL: { categoryCode: "CONSUMPTION_MATERIALS", text: "Alcohol" },
  VITAMINS_AND_SUPPLEMENTS: {
    categoryCode: "CONSUMPTION_MATERIALS",
    text: "Vitamins & Supplements",
  },

  FIREARMS_AND_GUNS: { categoryCode: "WEAPON", text: "Firearms/Guns" },
  AMMUNITION: { categoryCode: "WEAPON", text: "Ammunition" },
  METAL_NINJA_STARS: {
    categoryCode: "WEAPON",
    text: "Real, metal ninja stars",
  },
  EXPLOSIVE_WEAPONS: { categoryCode: "WEAPON", text: "Explosive weapons" },
  LASER_POINTERS: {
    categoryCode: "WEAPON",
    text: "High-powered laser pointers",
  },
  GUN_SILENCERS: { categoryCode: "WEAPON", text: "Gun Silencer" },
  GUN_BUILDING_KITS: { categoryCode: "WEAPON", text: "Real gun building kits" },
  ASSAULT_WEAPON_CONVERSION_PIECES: {
    categoryCode: "WEAPON",
    text: "Assault Weapon Conversion Pieces",
  },
  GUN_SILENCER_MISUSE: { categoryCode: "WEAPON", text: "Gun Silencer Misuse" },
  GUN_SILENCER_COMPONENTS: {
    categoryCode: "WEAPON",
    text: "Gun Silencer Components",
  },
  BRASS_OR_METAL_KNUCKLES: {
    categoryCode: "WEAPON",
    text: "Brass or Metal Knuckles",
  },

  JAMMERS: { categoryCode: "ILLEGAL_ELECTRONICS", text: "Jammers" },
  SPY_CAMERAS: {
    categoryCode: "ILLEGAL_ELECTRONICS",
    text: "Spy Cameras w/ Sexually Exploitive Surveillance images",
  },
  ODOMETER_CORRECTION_TOOLS: {
    categoryCode: "ILLEGAL_ELECTRONICS",
    text: "Any equipment or device used to change odometer readings",
  },
  FULLY_LOADED_TV_BOXES: {
    categoryCode: "ILLEGAL_ELECTRONICS",
    text: "Media streaming devices that provide unauthorized access to content",
  },

  MAGNETS_AS_TOYS: {
    categoryCode: "RECALLED_TOYS",
    text: "Bucky Balls / Small Magnets advertised as Toys",
  },
  CPSC_VIOLATION: {
    categoryCode: "RECALLED_TOYS",
    text: "Consumer Protection Agencies (CPA) violation",
  },
  SELF_FEEDING_BABY_PILLOWS: {
    categoryCode: "RECALLED_TOYS",
    text: "Self Feeding Baby Pillows",
  },
  SELF_FEEDING_BABY_BOTTLE_CLIPS: {
    categoryCode: "RECALLED_TOYS",
    text: "Self Feeding Baby Bottle Clips",
  },

  GIFT_CARDS_OR_ACCESS_CODES: {
    categoryCode: "VIRTUAL_GOODS",
    text: "Gift cards or access codes",
  },
  SUBSCRIPTIONS_OR_MEMBERSHIPS: {
    categoryCode: "VIRTUAL_GOODS",
    text: "Subscriptions to channels, websites, or other memberships",
  },
  VIRTUAL_MONEY: {
    categoryCode: "VIRTUAL_GOODS",
    text: "Virtual money for online games",
  },
  HOUSEKEEPING_TOUR_PACKAGES: {
    categoryCode: "VIRTUAL_GOODS",
    text: "Housekeeping, tour packages, or other services",
  },
  PURCHANSED_FOLLOWERS: {
    categoryCode: "VIRTUAL_GOODS",
    text: "Purchased Social Media Followers",
  },

  BLURRED_TAGS: {
    categoryCode: "BLURRED_INFORMATION",
    text: "Blurred or Censored Tags",
  },
  BLURRED_LOGOS: {
    categoryCode: "BLURRED_INFORMATION",
    text: "Blurred or Censored Logos",
  },
  BLURRED_WATERMARKS: {
    categoryCode: "BLURRED_INFORMATION",
    text: "Blurred Watermarks",
  },

  CHILD_HARNESS: { categoryCode: "SAFETY_EQUIPMENT", text: "Child Harness" },
  CHILD_CARSEAT: { categoryCode: "SAFETY_EQUIPMENT", text: "Child Carseat" },
  SEATBELTS: {
    categoryCode: "SAFETY_EQUIPMENT",
    text: "Seatbelts & Seatbelt Extenders",
  },

  EURO_CURRENCY: { categoryCode: "UNVERIFIED_MONEY", text: "Euro Currency" },
  IMITATION_CURRENCY: {
    categoryCode: "UNVERIFIED_MONEY",
    text: "Imitation Currency Not Properly Labeled",
  },
  COUNTERFEIT_CURRENCY: {
    categoryCode: "UNVERIFIED_MONEY",
    text: "CPA: Counterfeit Currency",
  },
  US_PROP_MONEY: { categoryCode: "UNVERIFIED_MONEY", text: "US Prop Money" },

  LIVE_ANIMAL: { categoryCode: "ANIMAL_PRODUCTS", text: "Living Animals" },
  ENDANGERED_SPECIES: {
    categoryCode: "ANIMAL_PRODUCTS",
    text: "Endangered Species",
  },

  EPA_PESTICIDES_US: {
    categoryCode: "REGIONAL_RESTRICTIONS",
    text: "EPA pesticide products available in the United States",
  },
  EPA_EMMISIONS_DEFEAT_US: {
    categoryCode: "REGIONAL_RESTRICTIONS",
    text: "EPA emission defeat devices available in the United States",
  },
  PROHIBITED_CUSTOMS_CN: {
    categoryCode: "REGIONAL_RESTRICTIONS",
    text: "Prohibited products for import/export from China under China Customs Policy.",
  },

  CN_PROHIBITED_PRODUCT_TASERS: {
    categoryCode: "CN_PROHIBITED_PRODUCTS",
    text: "Tasers",
  },
  CN_PROHIBITED_PRODUCT_STUN_GUNS: {
    categoryCode: "CN_PROHIBITED_PRODUCTS",
    text: "Stun Guns",
  },
  CN_PROHIBITED_PRODUCT_AIRSOFT: {
    categoryCode: "CN_PROHIBITED_PRODUCTS",
    text: "Airsoft",
  },
  CN_PROHIBITED_PRODUCT_BB_GUNS: {
    categoryCode: "CN_PROHIBITED_PRODUCTS",
    text: "BB Guns",
  },
  CN_PROHIBITED_PRODUCT_IMITATION_FIREARMS: {
    categoryCode: "CN_PROHIBITED_PRODUCTS",
    text: "Imitation Firearms",
  },

  DANGEROUS_CPA_VIOLATION: {
    categoryCode: "DANGEROUS_ITEMS",
    text: "Consumer Protection Agencies (CPA) Violation",
  },
  DANGEROUS_NON_CPA_VIOLATION: {
    categoryCode: "DANGEROUS_ITEMS",
    text: "Dangerous (Non-CPA Violation)",
  },

  MISLEADING_CLAIMS: {
    categoryCode: "JEWELRY_AND_METALS",
    text: "Misleading Claims",
  },
  CONTAINS_HARMFUL_CONTENT: {
    categoryCode: "JEWELRY_AND_METALS",
    text: "Contains Harmful Content",
  },
  MISSING_KEY_REQUIREMENTS: {
    categoryCode: "JEWELRY_AND_METALS",
    text: "Missing Key Requirements",
  },
  BULLION: { categoryCode: "JEWELRY_AND_METALS", text: "Bullion" },

  BRANDING_CHANGE: {
    categoryCode: "PRODUCT_MODIFIED",
    text: "Branding Change",
  },
  IMAGE_OR_TITLE_CHANGE: {
    categoryCode: "PRODUCT_MODIFIED",
    text: "Image and/or Title Change",
  },
  GRADUAL_CHANGE: {
    categoryCode: "PRODUCT_MODIFIED",
    text: "Gradual Change (Merchant Gaming)",
  },
  HIDDEN_SEX_TOYS: {
    categoryCode: "PRODUCT_MODIFIED",
    text: "Hidden Sex Toys",
  },
};

export const CounterfeitSubreasonOptions = Object.keys(
  CounterfeitSubreasonsDictionary
) as ReadonlyArray<keyof typeof CounterfeitSubreasonsDictionary>;
