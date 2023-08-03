/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  DateTime: any;
  GenericScalar: any;
  JSONString: string;
  ObjectIdType: string;
};

export type AcceptDeComplianceTermsOfService = {
  __typename?: 'AcceptDEComplianceTermsOfService';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AcceptEuComplianceTermsOfService = {
  __typename?: 'AcceptEUComplianceTermsOfService';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AcceptFrComplianceTermsOfService = {
  __typename?: 'AcceptFRComplianceTermsOfService';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AcceptMerchantPolicy = {
  __typename?: 'AcceptMerchantPolicy';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AcceptMerchantPolicyInput = {
  agreed: Scalars['Boolean'];
  source: MerchantPolicyAgreementSource;
};

export type AcceptTermsOfService = {
  __typename?: 'AcceptTermsOfService';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AcceptTermsOfServiceInput = {
  tosRegion?: InputMaybe<TermsOfServiceRegionType>;
  tosVersion: Scalars['Int'];
};

export type AcceptTos = {
  __typename?: 'AcceptTos';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AcceptTosInput = {
  country: CountryCode;
};

export type AccountBalanceType =
  | 'CONFIRMED'
  | 'PENDING';

export type ActionRequiredOrdersCsvDownload = {
  __typename?: 'ActionRequiredOrdersCsvDownload';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ActionRequiredOrdersCsvDownloadInput = {
  endDate?: InputMaybe<DatetimeInput>;
  filter?: InputMaybe<CsvExportFilterType>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ActionRequiredSearchType>;
  sort?: InputMaybe<ActionRequiredSort>;
  startDate?: InputMaybe<DatetimeInput>;
  wishExpressOnly?: InputMaybe<Scalars['Boolean']>;
};

export type ActionRequiredSearchType =
  | 'ORDER_ID'
  | 'PRODUCT_ID'
  | 'TRACKING_NUMBER'
  | 'TRANSACTION_ID'
  | 'USER_NAME';

export type ActionRequiredSort = {
  field: ActionRequiredSortFieldType;
  order: SortOrderType;
};

export type ActionRequiredSortFieldType =
  | 'ORDER_TIME'
  | 'RELEASED_TIME';

export type AdaptivePolicyAdminMutations = {
  __typename?: 'AdaptivePolicyAdminMutations';
  manualEnroll?: Maybe<AdaptivePolicyManualEnroll>;
  manualEnrollUpload?: Maybe<AdaptivePolicyManualEnrollUpload>;
};


export type AdaptivePolicyAdminMutationsManualEnrollArgs = {
  input: AdaptivePolicyManualEnrollConfirmInput;
};


export type AdaptivePolicyAdminMutationsManualEnrollUploadArgs = {
  input: AdaptivePolicyManualEnrollUploadInput;
};

export type AdaptivePolicyManualEnroll = {
  __typename?: 'AdaptivePolicyManualEnroll';
  logs?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AdaptivePolicyManualEnrollConfirmInput = {
  allPrivileges: Scalars['Boolean'];
  fileUrl: Scalars['String'];
  resetRevenueShare: Scalars['Boolean'];
};

export type AdaptivePolicyManualEnrollSchema = {
  __typename?: 'AdaptivePolicyManualEnrollSchema';
  merchantId: Scalars['ObjectIdType'];
  policyTier: Scalars['String'];
  reason: Scalars['String'];
};

export type AdaptivePolicyManualEnrollUpload = {
  __typename?: 'AdaptivePolicyManualEnrollUpload';
  logs?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  updateList: Array<AdaptivePolicyManualEnrollSchema>;
};

export type AdaptivePolicyManualEnrollUploadInput = {
  fileUrl: Scalars['String'];
};

export type AddProductPostInput = {
  merchantId: Scalars['ObjectIdType'];
  productId: Scalars['ObjectIdType'];
  sourceBucket: Scalars['String'];
  sourceBucketKey: Scalars['String'];
};

export type AddProductPostMutation = {
  __typename?: 'AddProductPostMutation';
  errorCode?: Maybe<ProductPostErrorCode>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AddTrademark = {
  __typename?: 'AddTrademark';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AddTrademarkInput = {
  brandInfoId: Scalars['ObjectIdType'];
  trademarkInfo: BrandPartnerTrademarkInfoInputObject;
};

export type AddressInput = {
  city: Scalars['String'];
  countryCode?: InputMaybe<CountryCode>;
  county?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  neighborhood?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  state: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2?: InputMaybe<Scalars['String']>;
  streetAddress3?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type AddressSchema = {
  __typename?: 'AddressSchema';
  city: Scalars['String'];
  country: Country;
  countryCode: CountryCode;
  county?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress1: Scalars['String'];
  streetAddress2?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type AddressUpdateError = {
  __typename?: 'AddressUpdateError';
  message: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
};

export type AddressVerificationState =
  | 'NOT_VERIFIED'
  | 'REQUEST_VERIFICATION'
  | 'SYSTEM_VERIFIED'
  | 'USER_VERIFIED'
  | 'WPS_VERIFIED';

export type AlertSchema = {
  __typename?: 'AlertSchema';
  date?: Maybe<Datetime>;
  description: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  sentiment?: Maybe<AlertSentiment>;
};

export type AlertSentiment =
  | 'INFO'
  | 'NEGATIVE'
  | 'WARNING';

export type AnalyticsServiceMutations = {
  __typename?: 'AnalyticsServiceMutations';
  log?: Maybe<LogToTreasureData>;
};


export type AnalyticsServiceMutationsLogArgs = {
  input: LogToTreasureDataInput;
};

export type AnnouncementAdmin = {
  __typename?: 'AnnouncementAdmin';
  announcement?: Maybe<AnnouncementSchema>;
  announcementJob?: Maybe<AnnouncementJobSchema>;
  announcementJobCount: Scalars['Int'];
  announcementJobs?: Maybe<Array<AnnouncementJobSchema>>;
  announcements?: Maybe<AnnouncementListSchema>;
  csv?: Maybe<CsvAnnouncementSchema>;
  options?: Maybe<AnnouncementOptionsSchema>;
};


export type AnnouncementAdminAnnouncementArgs = {
  id: Scalars['String'];
};


export type AnnouncementAdminAnnouncementJobArgs = {
  id: Scalars['String'];
};


export type AnnouncementAdminAnnouncementJobsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type AnnouncementAdminAnnouncementsArgs = {
  announcementType?: InputMaybe<AnnouncementType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  senderId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type AnnouncementAdminMutations = {
  __typename?: 'AnnouncementAdminMutations';
  createBdBaseAnnouncement?: Maybe<CreateBdBaseAnnouncement>;
  createSystemUpdateBaseAnnouncement?: Maybe<CreateSystemUpdateBaseAnnouncement>;
  publishAnnouncement?: Maybe<PublishAnnouncement>;
  updateSystemUpdateBaseAnnouncement?: Maybe<UpdateSystemUpdateBaseAnnouncement>;
};


export type AnnouncementAdminMutationsCreateBdBaseAnnouncementArgs = {
  input: BdBaseAnnouncementInput;
};


export type AnnouncementAdminMutationsCreateSystemUpdateBaseAnnouncementArgs = {
  input: CreateSystemUpdateBaseAnnouncementInput;
};


export type AnnouncementAdminMutationsPublishAnnouncementArgs = {
  input: PublishAnnouncementInput;
};


export type AnnouncementAdminMutationsUpdateSystemUpdateBaseAnnouncementArgs = {
  input: UpdateSystemUpdateBaseAnnouncementInput;
};

export type AnnouncementAudienceGroup = {
  __typename?: 'AnnouncementAudienceGroup';
  title: Scalars['String'];
  value: AudienceGroup;
};

export type AnnouncementAudienceSourceType =
  | 'AUDIENCE_SOURCE_TYPE_CSV'
  | 'AUDIENCE_SOURCE_TYPE_ENUM'
  | 'AUDIENCE_SOURCE_TYPE_UNSPECIFIED';

export type AnnouncementCsvFieldsSchemaInput = {
  columnMapping: Array<CsvColumnMappingEntryInput>;
  placeholders?: InputMaybe<Array<Scalars['String']>>;
  sourceFileUrl: Scalars['String'];
  sourceS3FileName: Scalars['String'];
};

export type AnnouncementCategory =
  | 'CATEGORY_ACCOUNTSETTINGS'
  | 'CATEGORY_API'
  | 'CATEGORY_INSIGHTS'
  | 'CATEGORY_INTELLECTUALPROPERTY'
  | 'CATEGORY_LOCALCURRENCY'
  | 'CATEGORY_LOGISTICS'
  | 'CATEGORY_LOGISTICSPRICING'
  | 'CATEGORY_ORDERS'
  | 'CATEGORY_PAYMENTS'
  | 'CATEGORY_POLICIESANDTERMS'
  | 'CATEGORY_PRODUCTS'
  | 'CATEGORY_SHIPPINGCARRIERS'
  | 'CATEGORY_TAX'
  | 'CATEGORY_UNSPECIFIED';

export type AnnouncementCategorySchema = {
  __typename?: 'AnnouncementCategorySchema';
  text: Scalars['String'];
  type: MerchantAnnouncementCategory;
};

export type AnnouncementCategorySchemaV2 = {
  __typename?: 'AnnouncementCategorySchemaV2';
  text: Scalars['String'];
  type: AnnouncementCategory;
};

export type AnnouncementContentSchema = {
  __typename?: 'AnnouncementContentSchema';
  ctaDueDate?: Maybe<Datetime>;
  ctaText?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  locale: AnnouncementLocale;
  message: Scalars['String'];
  title: Scalars['String'];
};

export type AnnouncementContentType =
  | 'ANNOUNCEMENT_CONTENT_TYPE_DYNAMIC'
  | 'ANNOUNCEMENT_CONTENT_TYPE_STATIC'
  | 'ANNOUNCEMENT_CONTENT_TYPE_UNSPECIFIED';

export type AnnouncementJobSchema = {
  __typename?: 'AnnouncementJobSchema';
  annUrlsCsvFileUrl?: Maybe<Scalars['String']>;
  baseAnnouncementCount: Scalars['Int'];
  baseAnnouncementTotal?: Maybe<Scalars['Int']>;
  createdTime: Datetime;
  csvS3Url: Scalars['String'];
  id: Scalars['ObjectIdType'];
  jobType: AnnouncementJobType;
  messageTemplateCn?: Maybe<Scalars['String']>;
  messageTemplateEn: Scalars['String'];
  midCount: Scalars['Int'];
  s3Filename: Scalars['String'];
  sender: UserSchema;
  state: AnnouncementJobState;
  titleEn: Scalars['String'];
};

export type AnnouncementJobState =
  | 'COMPLETE'
  | 'CREATING_ANNOUNCEMENTS'
  | 'DOWNLOADING_CSV'
  | 'NEW'
  | 'PARSING_CSV'
  | 'RETRIEVING_MERCHANTS';

export type AnnouncementJobType =
  | 'DYNAMIC_TEXT'
  | 'STATIC_TEXT';

export type AnnouncementListSchema = {
  __typename?: 'AnnouncementListSchema';
  announcements?: Maybe<Array<AnnouncementSchema>>;
  count?: Maybe<Scalars['Int']>;
};

export type AnnouncementLocale =
  | 'LOCALE_CN'
  | 'LOCALE_DE_DE'
  | 'LOCALE_EN'
  | 'LOCALE_ES_LA'
  | 'LOCALE_FR_FR'
  | 'LOCALE_IT_IT'
  | 'LOCALE_JA_JP'
  | 'LOCALE_KO_KR'
  | 'LOCALE_PT_BR'
  | 'LOCALE_UNSPECIFIED';

export type AnnouncementMutations = {
  __typename?: 'AnnouncementMutations';
  admin?: Maybe<AnnouncementAdminMutations>;
};

export type AnnouncementOptionsSchema = {
  __typename?: 'AnnouncementOptionsSchema';
  audienceGroups?: Maybe<Array<AnnouncementAudienceGroup>>;
  types?: Maybe<Array<AnnouncementType>>;
};

export type AnnouncementProgram =
  | 'PROGRAM_ADVANCED_LOGISTICS'
  | 'PROGRAM_EPC'
  | 'PROGRAM_FBW_FBS'
  | 'PROGRAM_MERCHANT_FUNDED_PROMOTIONS'
  | 'PROGRAM_MERCHANT_STANDING'
  | 'PROGRAM_PARTIAL_REFUNDS'
  | 'PROGRAM_PRODUCT_BOOST'
  | 'PROGRAM_RETURNS_PROGRAM'
  | 'PROGRAM_UNSPECIFIED'
  | 'PROGRAM_VIDEOS'
  | 'PROGRAM_WISHPOST'
  | 'PROGRAM_WISH_EXPRESS'
  | 'PROGRAM_WISH_STANDARDS';

export type AnnouncementProgramSchema = {
  __typename?: 'AnnouncementProgramSchema';
  text: Scalars['String'];
  type: MerchantAnnouncementProgram;
};

export type AnnouncementProgramSchemaV2 = {
  __typename?: 'AnnouncementProgramSchemaV2';
  text: Scalars['String'];
  type: AnnouncementProgram;
};

export type AnnouncementSchema = {
  __typename?: 'AnnouncementSchema';
  audienceGroups?: Maybe<Array<AudienceGroup>>;
  audienceSourceType: AnnouncementAudienceSourceType;
  categories: Array<AnnouncementCategory>;
  content: Array<AnnouncementContentSchema>;
  contentType?: Maybe<AnnouncementContentType>;
  expiryDate?: Maybe<Datetime>;
  id: Scalars['ObjectIdType'];
  locales: Array<AnnouncementLocale>;
  merchantIds?: Maybe<Array<Scalars['ObjectIdType']>>;
  merchants?: Maybe<Array<UserSchema>>;
  overrideEmailPreference: Scalars['Boolean'];
  program: AnnouncementProgram;
  publishDate?: Maybe<Datetime>;
  sender: UserSchema;
  sourceS3FileName?: Maybe<Scalars['String']>;
  sourceS3FileUrl?: Maybe<Scalars['String']>;
  state: AnnouncementState;
  type: AnnouncementType;
  userAnnouncementCount: Scalars['Int'];
};


export type AnnouncementSchemaMerchantsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type AnnouncementState =
  | 'ANNOUNCEMENT_STATE_COMPLETE'
  | 'ANNOUNCEMENT_STATE_CREATING'
  | 'ANNOUNCEMENT_STATE_DOWNLOADING_CSV'
  | 'ANNOUNCEMENT_STATE_NEW'
  | 'ANNOUNCEMENT_STATE_PARSING_CSV'
  | 'ANNOUNCEMENT_STATE_RETRIEVING_MERCHANTS'
  | 'ANNOUNCEMENT_STATE_UNSPECIFIED'
  | 'ANNOUNCEMENT_STATE_UPDATE'
  | 'ANNOUNCEMENT_STATE_UPDATING';

export type AnnouncementType =
  | 'ANNOUNCEMENT_TYPE_BD_ANNOUNCEMENT'
  | 'ANNOUNCEMENT_TYPE_SYSTEM_UPDATE'
  | 'ANNOUNCEMENT_TYPE_UNSPECIFIED';

export type AnnouncementsForUsersV2Schema = {
  __typename?: 'AnnouncementsForUsersV2Schema';
  list?: Maybe<Array<MerchantAnnouncementV2Schema>>;
  single?: Maybe<MerchantAnnouncementV2Schema>;
};


export type AnnouncementsForUsersV2SchemaListArgs = {
  announcementType: AnnouncementType;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type AnnouncementsForUsersV2SchemaSingleArgs = {
  announcementId: Scalars['ObjectIdType'];
};

export type AnnouncementsService = {
  __typename?: 'AnnouncementsService';
  admin?: Maybe<AnnouncementAdmin>;
  forUsers?: Maybe<Array<MerchantAnnouncementSchema>>;
  forUsersV2?: Maybe<AnnouncementsForUsersV2Schema>;
};


export type AnnouncementsServiceForUsersArgs = {
  announcementType: MerchantAnnouncementType;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ApproveTrademarks = {
  __typename?: 'ApproveTrademarks';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ApproveTrademarksInput = {
  brandInfoId: Scalars['ObjectIdType'];
  newBrandId?: InputMaybe<Scalars['ObjectIdType']>;
  trademarkIds: Array<Scalars['ObjectIdType']>;
};

export type Area = {
  __typename?: 'Area';
  unit: AreaUnit;
  value: Scalars['Float'];
};


export type AreaValueArgs = {
  targetUnit?: InputMaybe<AreaUnit>;
};

export type AreaInput = {
  unit: AreaUnit;
  value: Scalars['Float'];
};

export type AreaUnit =
  | 'SQUARE_FOOT'
  | 'SQUARE_METER';

export type AttributeConfigEntryMode =
  | 'FREE_TEXT'
  | 'MULTI_SELECTION'
  | 'SINGLE_SELECTION';

export type AttributeConfigSchema = {
  __typename?: 'AttributeConfigSchema';
  attributeField: Scalars['String'];
  attributeValues?: Maybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  entryMode: AttributeConfigEntryMode;
  maxMultiSelect?: Maybe<Scalars['Int']>;
};

export type AttributeDataType =
  | 'ATTRIBUTE_DATA_TYPE_DATE'
  | 'ATTRIBUTE_DATA_TYPE_NUMBER'
  | 'ATTRIBUTE_DATA_TYPE_STRING'
  | 'ATTRIBUTE_DATA_TYPE_STRING_ARRAY'
  | 'ATTRIBUTE_DATA_TYPE_UNSPECIFIED';

export type AttributeDataTypeFormat =
  | 'ATTRIBUTE_DATA_TYPE_FORMAT_DATE_YYYY'
  | 'ATTRIBUTE_DATA_TYPE_FORMAT_DATE_YYYY_MM'
  | 'ATTRIBUTE_DATA_TYPE_FORMAT_DATE_YYYY_MM_DD'
  | 'ATTRIBUTE_DATA_TYPE_FORMAT_NUMBER_DOUBLE'
  | 'ATTRIBUTE_DATA_TYPE_FORMAT_NUMBER_INT32'
  | 'ATTRIBUTE_DATA_TYPE_FORMAT_UNSPECIFIED';

export type AttributeExtractionTagSubmissionSchema = {
  __typename?: 'AttributeExtractionTagSubmissionSchema';
  attributeExtractionResult: Array<AttributeFieldTagResultSchema>;
  submissionDatetime: Datetime;
  tagger: UserSchema;
};

export type AttributeExtractionTaggerJobSchema = {
  __typename?: 'AttributeExtractionTaggerJobSchema';
  attributeConfigs: Array<AttributeConfigSchema>;
  jobId: Scalars['ObjectIdType'];
  jobType: AttributeExtractionTaggerJobType;
  preloadingResult?: Maybe<Array<AttributeFieldTagResultSchema>>;
  productDescription?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['ObjectIdType']>;
  productImageUrls?: Maybe<Array<Scalars['String']>>;
  productTitle?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  tagSubmissions?: Maybe<Array<AttributeExtractionTagSubmissionSchema>>;
  taskId: Scalars['String'];
  text: Scalars['String'];
};

export type AttributeExtractionTaggerJobType =
  | 'PRODUCT'
  | 'QUERY';

export type AttributeFieldTagResultSchema = {
  __typename?: 'AttributeFieldTagResultSchema';
  annotationResult: Array<Scalars['String']>;
  attributeField: Scalars['String'];
};

export type AttributeInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Array<AttributeValueInput>>;
};

export type AttributeLevel =
  | 'ATTRIBUTE_LEVEL_PRODUCT'
  | 'ATTRIBUTE_LEVEL_UNSPECIFIED'
  | 'ATTRIBUTE_LEVEL_VARIANT';

export type AttributeMode =
  | 'ATTRIBUTE_MODE_FREE_TEXT'
  | 'ATTRIBUTE_MODE_MULTI_SELECTION_ONLY'
  | 'ATTRIBUTE_MODE_SINGLE_SELECTION_ONLY'
  | 'ATTRIBUTE_MODE_UNSPECIFIED';

export type AttributeUsage =
  | 'ATTRIBUTE_USAGE_OPTIONAL'
  | 'ATTRIBUTE_USAGE_RECOMMENDED'
  | 'ATTRIBUTE_USAGE_REQUIRED'
  | 'ATTRIBUTE_USAGE_UNSPECIFIED';

export type AttributeValueInput = {
  id?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['String']>;
};

export type AudienceGroup =
  | 'AUDIENCE_GROUP_ACCENTURE_DETAIL_LEAD'
  | 'AUDIENCE_GROUP_ACCENTURE_DETAIL_WORKER'
  | 'AUDIENCE_GROUP_ACCENTURE_TAGGER_LEAD'
  | 'AUDIENCE_GROUP_ACCENTURE_TAGGER_WORKER'
  | 'AUDIENCE_GROUP_ACCENTURE_WORKER'
  | 'AUDIENCE_GROUP_ALL_MERCHANTS'
  | 'AUDIENCE_GROUP_ALORICA_LEAD'
  | 'AUDIENCE_GROUP_ALORICA_WORKER'
  | 'AUDIENCE_GROUP_BRAND_PROTECTION_WORKER'
  | 'AUDIENCE_GROUP_CN_MERCHANTS'
  | 'AUDIENCE_GROUP_CS_REP_INTERNAL'
  | 'AUDIENCE_GROUP_ERP_PARTNERS'
  | 'AUDIENCE_GROUP_IN_HOUSE_TAGGER'
  | 'AUDIENCE_GROUP_LOCAL_STORES'
  | 'AUDIENCE_GROUP_MERCHANT_PLUS_MERCHANTS'
  | 'AUDIENCE_GROUP_NON_CN_MERCHANTS'
  | 'AUDIENCE_GROUP_SPECIFIC_MERCHANT_IDS'
  | 'AUDIENCE_GROUP_TELEPERFORMANCE_BOGOTA_LEAD'
  | 'AUDIENCE_GROUP_TELEPERFORMANCE_BOGOTA_WORKER'
  | 'AUDIENCE_GROUP_TELEPERFORMANCE_LEAD'
  | 'AUDIENCE_GROUP_TELEPERFORMANCE_WORKER'
  | 'AUDIENCE_GROUP_TRANSCOSMOS_LEAD'
  | 'AUDIENCE_GROUP_TRANSCOSMOS_WORKER'
  | 'AUDIENCE_GROUP_UNSPECIFIED'
  | 'AUDIENCE_GROUP_WISHEXPRESS_MERCHANTS';

export type AudioGenre =
  | 'ACOUSTIC'
  | 'BLUES'
  | 'CHILDREN'
  | 'CLASSICAL'
  | 'COMEDY'
  | 'COUNTRY'
  | 'ELECTRONICA_DANCE'
  | 'FILM'
  | 'FUNK'
  | 'HIP_HOP'
  | 'LATIN'
  | 'POP'
  | 'RNB_SOUL'
  | 'ROCK'
  | 'WORLD_COUNTRIES';

export type AudioMoodEmotion =
  | 'ANGRY'
  | 'BUSY_FRANTIC'
  | 'CHANGING_TEMPO'
  | 'CHASING'
  | 'COUNTRYSIDE'
  | 'DARK'
  | 'DREAMY'
  | 'ECCENTRIC'
  | 'ELEGANT'
  | 'EPIC'
  | 'EUPHORIC'
  | 'FLOATING'
  | 'FUNNY'
  | 'GLAMOROUS'
  | 'HAPPY'
  | 'HEAVY_PONDEROUS'
  | 'HOPEFUL'
  | 'INDUSTRY'
  | 'LAID_BACK'
  | 'LOUNGE'
  | 'MARCHING'
  | 'MYSTERIOUS'
  | 'PEACEFUL'
  | 'QUIRKY'
  | 'RELAXING'
  | 'RESTLESS'
  | 'ROMANTIC'
  | 'RUNNING'
  | 'SAD'
  | 'SCARY'
  | 'SENTIMENTAL'
  | 'SEXY'
  | 'SMOOTH'
  | 'SPORTS_ARENA'
  | 'SUNNY_HOLIDAY'
  | 'SUSPENSE'
  | 'WEIRD';

export type AudioProductCategory =
  | 'ACCESSORIES'
  | 'AUTOMOTIVE'
  | 'BABY_KIDS'
  | 'FASHION'
  | 'FLOOR_CARE'
  | 'GADGETS'
  | 'HEALTH_WELLNESS'
  | 'HOBBIES'
  | 'HOME_DECOR'
  | 'HOUSEHOLD_SUPPLIES'
  | 'MAKEUP_BEAUTY'
  | 'MEN_CLOTHING'
  | 'PHONE_UPGRADES'
  | 'SHOES'
  | 'SMALL_APPLIANCES'
  | 'WALLETS_BAGS'
  | 'WATCHES'
  | 'WOMEN_CLOTHING';

export type AuthType =
  | 'MERCHANT'
  | 'WISH';

export type AuthenticationMutations = {
  __typename?: 'AuthenticationMutations';
  checkWechatScan?: Maybe<WechatCheckScanMutation>;
  gen2faCode?: Maybe<TwoFactorGenTokenMutation>;
  genWechatQr?: Maybe<GenWechatQrMutation>;
  login?: Maybe<LoginMutation>;
  loginAs?: Maybe<LoginAsMutations>;
  logout?: Maybe<LogoutMutation>;
  merchantLeadSubmission?: Maybe<MerchantLeadSubmissionMutation>;
  merchantSignup?: Maybe<MerchantSignupMutation>;
  merchantSignupSendPhoneVerification?: Maybe<MerchantSignupSendPhoneVerificationMutation>;
  mmsLeadSubmission?: Maybe<MmsLeadSubmissionMutation>;
  notifyPasswordRecovery?: Maybe<NotifyPasswordRecoveryMutation>;
  resetPassword?: Maybe<ResetPasswordMutation>;
};


export type AuthenticationMutationsCheckWechatScanArgs = {
  input: WechatCheckScanInput;
};


export type AuthenticationMutationsGen2faCodeArgs = {
  input: TwoFactorGenTokenInput;
};


export type AuthenticationMutationsGenWechatQrArgs = {
  input: GenWechatQrInput;
};


export type AuthenticationMutationsLoginArgs = {
  input: LoginMutationInput;
};


export type AuthenticationMutationsMerchantLeadSubmissionArgs = {
  input: MerchantLeadSubmissionInput;
};


export type AuthenticationMutationsMerchantSignupArgs = {
  input: MerchantSignupInput;
};


export type AuthenticationMutationsMerchantSignupSendPhoneVerificationArgs = {
  input: MerchantSignupSendPhoneVerificationInput;
};


export type AuthenticationMutationsMmsLeadSubmissionArgs = {
  input: MmsLeadSubmissionInput;
};


export type AuthenticationMutationsNotifyPasswordRecoveryArgs = {
  input: NotifyPasswordRecoveryMutationInput;
};


export type AuthenticationMutationsResetPasswordArgs = {
  input: ResetPasswordMutationInput;
};

export type AuthenticationServiceSchema = {
  __typename?: 'AuthenticationServiceSchema';
  bdSignupCodeInfo?: Maybe<BdSignupCodeInfo>;
  countriesWeShipTo: Array<Country>;
  merchantInviteInfo?: Maybe<MerchantInviteInfo>;
  passwordEvaluation: PasswordEvaluation;
  salesforceLeadInfo?: Maybe<SalesforceLeadInfo>;
  shopifyOnboardingAuthInfo: ShopifyOnboardingAuthInfo;
  showCaptchaOnSignup: Scalars['Boolean'];
  storeCategories: Array<Scalars['String']>;
};


export type AuthenticationServiceSchemaBdSignupCodeInfoArgs = {
  bdSignupCode?: InputMaybe<Scalars['String']>;
};


export type AuthenticationServiceSchemaMerchantInviteInfoArgs = {
  invite?: InputMaybe<Scalars['String']>;
};


export type AuthenticationServiceSchemaPasswordEvaluationArgs = {
  password: Scalars['String'];
};


export type AuthenticationServiceSchemaSalesforceLeadInfoArgs = {
  salesforceLeadId?: InputMaybe<Scalars['String']>;
};

export type AuthorizeReturn = {
  __typename?: 'AuthorizeReturn';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type AuthorizeReturnInput = {
  orderId: Scalars['ObjectIdType'];
  prepaidReturnLabelFilename: Scalars['String'];
  prepaidReturnLabelUrl: Scalars['String'];
  returnShippingCarrier: Scalars['String'];
  returnTrackingId: Scalars['String'];
};

export type BdAudienceInput =
  | 'ALL'
  | 'MERCHANT_IDS';

export type BdBaseAnnouncementInput = {
  audienceType?: InputMaybe<BdAudienceInput>;
  expiryDate?: InputMaybe<DatetimeInput>;
  merchantIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  message: Scalars['String'];
  publishDate: DatetimeInput;
  title: Scalars['String'];
};

export type BdMerchantCountryCodeType =
  | 'BR'
  | 'CN'
  | 'EU'
  | 'HK'
  | 'JP'
  | 'KR'
  | 'MX'
  | 'MY'
  | 'SG'
  | 'TW'
  | 'US'
  | 'VN';

export type BalanceTransactionRecord = {
  __typename?: 'BalanceTransactionRecord';
  balanceAfterUpdate: CurrencyValue;
  balanceBeforeUpdate: CurrencyValue;
  campaignId?: Maybe<Scalars['ObjectIdType']>;
  dateCreated: Datetime;
  id: Scalars['ObjectIdType'];
  productId?: Maybe<Scalars['ObjectIdType']>;
  receiptId?: Maybe<Scalars['ObjectIdType']>;
  transactionAmount: CurrencyValue;
  updateReasonDescription: Scalars['String'];
  updatedReason: BalanceUpdateReason;
};

export type BalanceUpdateReason =
  | 'ISSUING_CREDITS'
  | 'PAYMENT_BY_CREDITS'
  | 'REFUND';

export type BankAccountDocumentSchema = {
  __typename?: 'BankAccountDocumentSchema';
  comment?: Maybe<Scalars['String']>;
  documentFile?: Maybe<MerchantFileSchema>;
  documentType?: Maybe<BankAccountDocumentType>;
  id: Scalars['ObjectIdType'];
  reviewedAt?: Maybe<Datetime>;
  reviewer?: Maybe<UserSchema>;
  state: BankAccountVerificationStatus;
  uploadedAt: Datetime;
};

export type BankAccountDocumentType =
  | 'BANK_DOCUMENT'
  | 'GOVERNMENT_DOCUMENT'
  | 'UNIDENTIFIED';

export type BankAccountVerificationMerchantMutations = {
  __typename?: 'BankAccountVerificationMerchantMutations';
  uploadDocument: UploadBankAccountDocument;
};


export type BankAccountVerificationMerchantMutationsUploadDocumentArgs = {
  input: UploadBankAccountDocumentInput;
};

export type BankAccountVerificationReviewerMutations = {
  __typename?: 'BankAccountVerificationReviewerMutations';
  reviewDocument?: Maybe<ReviewBankAccountDocument>;
};


export type BankAccountVerificationReviewerMutationsReviewDocumentArgs = {
  input: ReviewBankAccountDocumentInput;
};

export type BankAccountVerificationSchema = {
  __typename?: 'BankAccountVerificationSchema';
  bankAccountDocuments?: Maybe<Array<BankAccountDocumentSchema>>;
  id: Scalars['ObjectIdType'];
  lastReviewedAt?: Maybe<Datetime>;
  lastUploadedAt?: Maybe<Datetime>;
  state: BankAccountVerificationStatus;
};

export type BankAccountVerificationStatus =
  | 'APPROVED'
  | 'PENDING'
  | 'REJECTED'
  | 'SUBMITTED';

export type BdSignupCodeInfo = {
  __typename?: 'BdSignupCodeInfo';
  bdName?: Maybe<Scalars['String']>;
  hasPromotion?: Maybe<Scalars['Boolean']>;
  useMarketingTransactionBonus?: Maybe<Scalars['Boolean']>;
  valid: Scalars['Boolean'];
};

export type BlurredInformationCategory =
  | 'BLURRED_OR_CENSORED_LOGOS'
  | 'BLURRED_OR_CENSORED_TAGS'
  | 'BLURRED_WATERMARKS';

export type BonusBudgetSchema = {
  __typename?: 'BonusBudgetSchema';
  bonusBudget: CurrencyValue;
  bonusBudgetRate: Scalars['Float'];
  bonusBudgetType: MarketingBonusBudgetType;
  eligibleBonusBudgetType: MarketingBonusBudgetType;
  isBonusBudgetCampaign: Scalars['Boolean'];
  usedBonusBudget: CurrencyValue;
};

export type BrandAuthorizationSchema = {
  __typename?: 'BrandAuthorizationSchema';
  brand: BrandSchema;
  id: Scalars['ObjectIdType'];
  merchantId: Scalars['ObjectIdType'];
  state: BrandAuthorizationState;
};

export type BrandAuthorizationState =
  | 'APPROVED'
  | 'CLOSED'
  | 'EXPIRED'
  | 'NOT_APPROVED'
  | 'PENDING'
  | 'PENDING_ADMIN'
  | 'PENDING_MERCHANT';

export type BrandCategoryCode =
  | 'BEAUTY'
  | 'BRANDED_ACCESSORIES'
  | 'COPYRIGHTED_IMAGES'
  | 'ELECTRONIC'
  | 'FASHION'
  | 'KID_TOYS_OR_GAME'
  | 'LUXURY_WELL_KNOWN'
  | 'MEDIA'
  | 'MOTOR'
  | 'SHOE'
  | 'SPORTS';

export type BrandEnrollmentMutations = {
  __typename?: 'BrandEnrollmentMutations';
  addTrademark?: Maybe<AddTrademark>;
  createBrandEnrollmentRequest?: Maybe<CreateBrandEnrollmentRequest>;
  deleteBrandEnrollment?: Maybe<DeleteBrandEnrollment>;
};


export type BrandEnrollmentMutationsAddTrademarkArgs = {
  input?: InputMaybe<AddTrademarkInput>;
};


export type BrandEnrollmentMutationsCreateBrandEnrollmentRequestArgs = {
  input?: InputMaybe<CreateBrandEnrollmentInput>;
};


export type BrandEnrollmentMutationsDeleteBrandEnrollmentArgs = {
  input?: InputMaybe<DeleteBrandEnrollmentInput>;
};

export type BrandManagement = {
  __typename?: 'BrandManagement';
  brands: Array<BrandSchema>;
  canManageBrandToProduct: Scalars['Boolean'];
  canManageBrands: Scalars['Boolean'];
  numBrands: Scalars['Int'];
};


export type BrandManagementBrandsArgs = {
  brandIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  brandName?: InputMaybe<Scalars['String']>;
  brandTypes?: InputMaybe<Array<BrandTypeCode>>;
  count?: InputMaybe<Scalars['Int']>;
  hideDeleted?: InputMaybe<Scalars['Boolean']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type BrandManagementNumBrandsArgs = {
  brandIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  brandName?: InputMaybe<Scalars['String']>;
  brandTypes?: InputMaybe<Array<BrandTypeCode>>;
  hideDeleted?: InputMaybe<Scalars['Boolean']>;
};

export type BrandMutations = {
  __typename?: 'BrandMutations';
  everc?: Maybe<EverCBrandMutations>;
  injunctionMerchantFreeze?: Maybe<InjunctionMerchantFreezeMutations>;
};

export type BrandPartnerAdmin = {
  __typename?: 'BrandPartnerAdmin';
  brandEnrollments: Array<BrandPartnerBrandInfoSchema>;
  brandPartners: Array<BrandPartnerInfoSchema>;
  numBrandEnrollments: Scalars['Int'];
  numBrandPartners: Scalars['Int'];
};


export type BrandPartnerAdminBrandEnrollmentsArgs = {
  brandInfoId?: InputMaybe<Scalars['String']>;
  brandName?: InputMaybe<Scalars['String']>;
  brandPartnerId?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  trademarkStates?: InputMaybe<Array<BrandPartnerTrademarkState>>;
};


export type BrandPartnerAdminBrandPartnersArgs = {
  brandName?: InputMaybe<Scalars['String']>;
  brandPartnerId?: InputMaybe<Scalars['String']>;
  brandPartnerStates?: InputMaybe<Array<BrandPartnerState>>;
  count?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  trademarkStates?: InputMaybe<Array<BrandPartnerTrademarkState>>;
};


export type BrandPartnerAdminNumBrandEnrollmentsArgs = {
  brandInfoId?: InputMaybe<Scalars['String']>;
  brandName?: InputMaybe<Scalars['String']>;
  brandPartnerId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  trademarkStates?: InputMaybe<Array<BrandPartnerTrademarkState>>;
};


export type BrandPartnerAdminNumBrandPartnersArgs = {
  brandName?: InputMaybe<Scalars['String']>;
  brandPartnerId?: InputMaybe<Scalars['String']>;
  brandPartnerStates?: InputMaybe<Array<BrandPartnerState>>;
  email?: InputMaybe<Scalars['String']>;
  trademarkStates?: InputMaybe<Array<BrandPartnerTrademarkState>>;
};

export type BrandPartnerAdminMutations = {
  __typename?: 'BrandPartnerAdminMutations';
  approveTrademarks?: Maybe<ApproveTrademarks>;
  disableBrandPartner?: Maybe<DisableBrandPartner>;
  editTrademarksAndBrandInfo?: Maybe<EditTrademarksAndBrandInfo>;
  rejectTrademarksAndBrandInfo?: Maybe<RejectTrademarksAndBrandInfo>;
};


export type BrandPartnerAdminMutationsApproveTrademarksArgs = {
  input: ApproveTrademarksInput;
};


export type BrandPartnerAdminMutationsDisableBrandPartnerArgs = {
  input: DisableBrandPartnerInput;
};


export type BrandPartnerAdminMutationsEditTrademarksAndBrandInfoArgs = {
  input: EditTrademarksAndBrandInfoInput;
};


export type BrandPartnerAdminMutationsRejectTrademarksAndBrandInfoArgs = {
  input: RejectTrademarksAndBrandInfoInput;
};

export type BrandPartnerAuthenticationMutations = {
  __typename?: 'BrandPartnerAuthenticationMutations';
  resetPassword?: Maybe<BrandPartnerResetPassword>;
  sendPasswordResetEmail?: Maybe<BrandPartnerSendPasswordResetEmail>;
};


export type BrandPartnerAuthenticationMutationsResetPasswordArgs = {
  input: BrandPartnerResetPasswordInput;
};


export type BrandPartnerAuthenticationMutationsSendPasswordResetEmailArgs = {
  input: BrandPartnerSendPasswordResetEmailInput;
};

export type BrandPartnerBrandInfoSchema = {
  __typename?: 'BrandPartnerBrandInfoSchema';
  authorizationProofs: Array<MerchantFileSchema>;
  brandOwnerName: Scalars['String'];
  brandPartnerId: Scalars['ObjectIdType'];
  brandRepName: Scalars['String'];
  brandRepTitle: Scalars['String'];
  confirmedBrand?: Maybe<BrandSchema>;
  confirmedBrandId?: Maybe<Scalars['ObjectIdType']>;
  email: Scalars['String'];
  enrollmentDate: Datetime;
  id: Scalars['ObjectIdType'];
  isNewBrand: Scalars['Boolean'];
  numTrademarks: Scalars['Int'];
  phoneNumber: Scalars['String'];
  proposedBrandId?: Maybe<Scalars['ObjectIdType']>;
  providedBrandAdditionalInfo?: Maybe<Scalars['String']>;
  providedBrandLogo?: Maybe<MerchantFileSchema>;
  providedBrandName: Scalars['String'];
  providedBrandWebsite?: Maybe<Scalars['String']>;
  rejectionReason?: Maybe<Scalars['String']>;
  state: BrandPartnerBrandState;
  trademarks: Array<BrandPartnerTrademarkInfoSchema>;
};


export type BrandPartnerBrandInfoSchemaNumTrademarksArgs = {
  states?: InputMaybe<Array<BrandPartnerTrademarkState>>;
};


export type BrandPartnerBrandInfoSchemaTrademarksArgs = {
  count?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  states?: InputMaybe<Array<BrandPartnerTrademarkState>>;
};

export type BrandPartnerBrandState =
  | 'APPROVED'
  | 'PENDING'
  | 'REJECTED';

export type BrandPartnerChangeUserInfo = {
  __typename?: 'BrandPartnerChangeUserInfo';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type BrandPartnerChangeUserInfoInput = {
  brandPartnerId?: InputMaybe<Scalars['ObjectIdType']>;
  city?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  currentPassword?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  internalNote?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  newPassword?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  professionalTitle?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress1?: InputMaybe<Scalars['String']>;
  streetAddress2?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type BrandPartnerCountryAndRegion = {
  __typename?: 'BrandPartnerCountryAndRegion';
  code: BrandPartnerCountryAndRegionCode;
  name: Scalars['String'];
};

export type BrandPartnerCountryAndRegionCode =
  | 'AD'
  | 'AE'
  | 'AL'
  | 'AR'
  | 'AT'
  | 'AU'
  | 'BA'
  | 'BE'
  | 'BG'
  | 'BR'
  | 'CA'
  | 'CH'
  | 'CL'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CZ'
  | 'DE'
  | 'DK'
  | 'EE'
  | 'ES'
  | 'EU'
  | 'FI'
  | 'FR'
  | 'GB'
  | 'GI'
  | 'GR'
  | 'HR'
  | 'HU'
  | 'IE'
  | 'IL'
  | 'IS'
  | 'IT'
  | 'JP'
  | 'KR'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MK'
  | 'MT'
  | 'MX'
  | 'NL'
  | 'NO'
  | 'NZ'
  | 'PE'
  | 'PL'
  | 'PR'
  | 'PT'
  | 'RO'
  | 'RS'
  | 'SE'
  | 'SG'
  | 'SI'
  | 'SK'
  | 'SM'
  | 'TR'
  | 'UA'
  | 'US'
  | 'VI'
  | 'ZA';

export type BrandPartnerInfoSchema = {
  __typename?: 'BrandPartnerInfoSchema';
  brandInfos: Array<BrandPartnerBrandInfoSchema>;
  brandPartnerName: Scalars['String'];
  businessAddress?: Maybe<AddressSchema>;
  companyName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ObjectIdType'];
  internalNote?: Maybe<Scalars['String']>;
  isBrandPartnerV2: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  lastUpdated: Datetime;
  numBrandInfos: Scalars['Int'];
  numTakedownRequests: Scalars['Int'];
  onboarding: BrandPartnerOnboardingSchema;
  phoneNumber?: Maybe<Scalars['String']>;
  professionalTitle?: Maybe<Scalars['String']>;
  state: BrandPartnerState;
  takedownRequests: Array<TakedownRequestSchema>;
};


export type BrandPartnerInfoSchemaBrandInfosArgs = {
  brandInfoIdQuery?: InputMaybe<Scalars['String']>;
  brandNameQuery?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  states?: InputMaybe<Array<BrandPartnerBrandState>>;
};


export type BrandPartnerInfoSchemaNumBrandInfosArgs = {
  brandNameQuery?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<Array<BrandPartnerBrandState>>;
};


export type BrandPartnerInfoSchemaNumTakedownRequestsArgs = {
  brandNameQuery?: InputMaybe<Scalars['String']>;
  reportIdQuery?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<Array<TakedownRequestState>>;
};


export type BrandPartnerInfoSchemaTakedownRequestsArgs = {
  brandNameQuery?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  reportIdQuery?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<Array<TakedownRequestState>>;
};

export type BrandPartnerMutations = {
  __typename?: 'BrandPartnerMutations';
  admin?: Maybe<BrandPartnerAdminMutations>;
  authentication?: Maybe<BrandPartnerAuthenticationMutations>;
  brandEnrollmentMutations?: Maybe<BrandEnrollmentMutations>;
  takedownRequest?: Maybe<TakedownRequestMutations>;
  user?: Maybe<BrandPartnerUserMutations>;
};

export type BrandPartnerOnboardingSchema = {
  __typename?: 'BrandPartnerOnboardingSchema';
  numSteps: Scalars['Int'];
  numStepsCompleted: Scalars['Int'];
  numStepsLeft: Scalars['Int'];
  steps: Array<BrandPartnerOnboardingStep>;
};


export type BrandPartnerOnboardingSchemaStepsArgs = {
  completed?: InputMaybe<Scalars['Boolean']>;
};

export type BrandPartnerOnboardingStep = {
  __typename?: 'BrandPartnerOnboardingStep';
  completed: Scalars['Boolean'];
  ctaLink: Scalars['String'];
  ctaText: Scalars['String'];
  description: Scalars['String'];
  illustration?: Maybe<Scalars['String']>;
  name: BrandPartnerOnboardingSteps;
  title: Scalars['String'];
};

export type BrandPartnerOnboardingSteps =
  | 'CONFIRM_EMAIL'
  | 'ENROLL_BRAND';

export type BrandPartnerResetPassword = {
  __typename?: 'BrandPartnerResetPassword';
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type BrandPartnerResetPasswordInput = {
  password: Scalars['String'];
  tfaToken?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};

export type BrandPartnerSendPasswordResetEmail = {
  __typename?: 'BrandPartnerSendPasswordResetEmail';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type BrandPartnerSendPasswordResetEmailInput = {
  email: Scalars['String'];
};

export type BrandPartnerState =
  | 'ACTIVE'
  | 'PENDING'
  | 'PENDING_EMAIL'
  | 'PENDING_PHONE'
  | 'PENDING_REVIEW'
  | 'REJECTED';

export type BrandPartnerTrademarkInfoInputObject = {
  location: BrandPartnerCountryAndRegionCode;
  registrationDocs: Array<FileInput>;
  registrationNumber: Scalars['String'];
  registrationUrl?: InputMaybe<Scalars['String']>;
  trademarkName: Scalars['String'];
  trademarkType: BrandPartnerTrademarkType;
};

export type BrandPartnerTrademarkInfoSchema = {
  __typename?: 'BrandPartnerTrademarkInfoSchema';
  brandId?: Maybe<Scalars['ObjectIdType']>;
  brandInfoId: Scalars['ObjectIdType'];
  brandPartnerId: Scalars['ObjectIdType'];
  enrollmentDate: Datetime;
  id: Scalars['ObjectIdType'];
  location: BrandPartnerCountryAndRegion;
  registrationDocs: Array<MerchantFileSchema>;
  registrationNumber: Scalars['String'];
  registrationUrl?: Maybe<Scalars['String']>;
  rejectionReason?: Maybe<Scalars['String']>;
  state: BrandPartnerTrademarkState;
  trademarkName: Scalars['String'];
  trademarkType: BrandPartnerTrademarkType;
};

export type BrandPartnerTrademarkState =
  | 'APPROVED'
  | 'PENDING'
  | 'REJECTED';

export type BrandPartnerTrademarkType =
  | 'DESIGNMARK'
  | 'OTHER'
  | 'WORDMARK';

export type BrandPartnerUserMutations = {
  __typename?: 'BrandPartnerUserMutations';
  changeUserInfo?: Maybe<BrandPartnerChangeUserInfo>;
};


export type BrandPartnerUserMutationsChangeUserInfoArgs = {
  input: BrandPartnerChangeUserInfoInput;
};

export type BrandProtection = {
  __typename?: 'BrandProtection';
  canManageFreezes: Scalars['Boolean'];
  injunctionMerchantFreezes: Array<InjunctionMerchantFreezeSchema>;
  numInjunctionMerchantFreezes: Scalars['Int'];
};


export type BrandProtectionInjunctionMerchantFreezesArgs = {
  count?: InputMaybe<Scalars['Int']>;
  fineIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  freezeTypes?: InputMaybe<Array<InjunctionMerchantFreezeType>>;
  imfIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  legalEndDateUnix?: InputMaybe<Scalars['Int']>;
  legalStartDateUnix?: InputMaybe<Scalars['Int']>;
  merchantIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  offset?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Array<InjunctionMerchantFreezeState>>;
  troNumbers?: InputMaybe<Array<Scalars['Int']>>;
  updatedEndDateUnix?: InputMaybe<Scalars['Int']>;
  updatedStartDateUnix?: InputMaybe<Scalars['Int']>;
};


export type BrandProtectionNumInjunctionMerchantFreezesArgs = {
  fineIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  freezeTypes?: InputMaybe<Array<InjunctionMerchantFreezeType>>;
  imfIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  legalEndDateUnix?: InputMaybe<Scalars['Int']>;
  legalStartDateUnix?: InputMaybe<Scalars['Int']>;
  merchantIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  state?: InputMaybe<Array<InjunctionMerchantFreezeState>>;
  troNumbers?: InputMaybe<Array<Scalars['Int']>>;
  updatedEndDateUnix?: InputMaybe<Scalars['Int']>;
  updatedStartDateUnix?: InputMaybe<Scalars['Int']>;
};

export type BrandProtectionConstants = {
  __typename?: 'BrandProtectionConstants';
  holidayMessage: Scalars['String'];
};

export type BrandReach =
  | 'INTERNATIONAL'
  | 'LOCAL'
  | 'ONLINE'
  | 'REGIONAL';

export type BrandRegistrationCountry =
  | 'EU'
  | 'Japan'
  | 'Others'
  | 'US';

export type BrandSchema = {
  __typename?: 'BrandSchema';
  autoApproveMerchantIds?: Maybe<Array<Scalars['ObjectIdType']>>;
  brandOwnerEntityCountry?: Maybe<Country>;
  brandProductTags?: Maybe<Array<TrueTagSchema>>;
  brandReach?: Maybe<BrandReach>;
  brandTypes?: Maybe<Array<BrandType>>;
  brandUrl?: Maybe<Scalars['String']>;
  counterfeitRiskLevel?: Maybe<CounterfeitRiskLevel>;
  displayName: Scalars['String'];
  evercBrands?: Maybe<Array<EverCBrandSchema>>;
  id: Scalars['ObjectIdType'];
  internalNote?: Maybe<Scalars['String']>;
  ipViolationCategory?: Maybe<IpViolationBrandCategory>;
  isActive: Scalars['Boolean'];
  isAdult: Scalars['Boolean'];
  isTrueBrand: Scalars['Boolean'];
  keywords?: Maybe<Array<Scalars['String']>>;
  logoAspectRatio: Scalars['Float'];
  logoUrl?: Maybe<Scalars['String']>;
  manufacturingCountry?: Maybe<Country>;
  minimumPrice?: Maybe<CurrencyValue>;
  name: Scalars['String'];
  numTaggedProducts?: Maybe<Scalars['Int']>;
  severity?: Maybe<BrandSeverity>;
};

export type BrandServiceSchema = {
  __typename?: 'BrandServiceSchema';
  acceptedTrademarkCountries: Array<TrademarkCountryCode>;
  brandAuthorizations?: Maybe<Array<BrandAuthorizationSchema>>;
  brandManagement?: Maybe<BrandManagement>;
  brandPartnerAdmin?: Maybe<BrandPartnerAdmin>;
  brandPartnerTrademarkLocations: Array<BrandPartnerCountryAndRegion>;
  brandProtection?: Maybe<BrandProtection>;
  trueBrands: Array<BrandSchema>;
};


export type BrandServiceSchemaAcceptedTrademarkCountriesArgs = {
  usePriorityOrdering?: InputMaybe<Scalars['Boolean']>;
};


export type BrandServiceSchemaBrandAuthorizationsArgs = {
  id?: InputMaybe<Scalars['ObjectIdType']>;
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  states?: InputMaybe<Array<BrandAuthorizationState>>;
};


export type BrandServiceSchemaTrueBrandsArgs = {
  brandIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  brandName?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  queryString?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<BrandSort>;
};

export type BrandSeverity =
  | 'HIGH'
  | 'LOW'
  | 'MEDIUM';

export type BrandSort = {
  field: BrandSortField;
  order: SortOrderType;
};

export type BrandSortField =
  | 'ID'
  | 'NAME';

export type BrandType = {
  __typename?: 'BrandType';
  brandType: BrandTypeCode;
  displayName: Scalars['String'];
};

export type BrandTypeCode =
  | 'BRAND_OF_INTEREST'
  | 'COPYRIGHT_IMAGE'
  | 'DEFAULT'
  | 'TRO'
  | 'TRUE_BRAND';

export type BrandedMerchantLifeTimeStatsObjectSchema = {
  __typename?: 'BrandedMerchantLifeTimeStatsObjectSchema';
  cost: CurrencyValue;
  feedImpressions: Scalars['Int'];
  gmv: CurrencyValue;
  orders: Scalars['Int'];
  quantitiesSold: Scalars['Int'];
};

export type BrandingSchema = {
  __typename?: 'BrandingSchema';
  brands: Array<MerchantBrandSchema>;
  latestDateWithBrandData?: Maybe<Datetime>;
};


export type BrandingSchemaBrandsArgs = {
  brandIds?: InputMaybe<Array<Scalars['String']>>;
};

export type BulkMerchantWarningAction =
  | 'APPROVE'
  | 'CONFIRM'
  | 'DECLINE'
  | 'DECLINE_AND_CLOSE'
  | 'DELETE'
  | 'REVERSE';

export type BulkReviewInput = {
  merchantIds: Array<Scalars['ObjectIdType']>;
  pausedImpressionState?: InputMaybe<Scalars['Boolean']>;
  reviewComment: Scalars['String'];
  reviewState: SanctionScreeningHitStateType;
};

export type BulkReviewMutation = {
  __typename?: 'BulkReviewMutation';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  successfullyUpdated: Scalars['Int'];
  totalToUpdate: Scalars['Int'];
  updatedIds: Array<Scalars['ObjectIdType']>;
};

export type BulkUpsertMerchantWarning = {
  __typename?: 'BulkUpsertMerchantWarning';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type BulkUpsertMerchantWarningInput = {
  action: BulkMerchantWarningAction;
  comment?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  warningIds: Array<Scalars['ObjectIdType']>;
};

export type BusinessDocTypes =
  | 'ARTICLES_OF_INCORPORATION'
  | 'CERTIFICATE_OF_INCORPORATION'
  | 'CREDIT_CARD_STATEMENT'
  | 'ENTITY_TRADING_NAME'
  | 'GOVERNMENT_ISSUED_BUSINESS_LICENSE'
  | 'OFFICIAL_BANK_STATEMENT'
  | 'PRODUCT_LICENSING'
  | 'RECENT_BUSINESS_RETURNS'
  | 'SHARE_ALLOCATION_CERTIFICATE'
  | 'TAX_FORM'
  | 'TAX_FORM_W_8'
  | 'TAX_FORM_W_9'
  | 'UTILITY_BILL_STATEMENT';

export type BuyerFraudReasonCategory =
  | 'MERCHANT_REPORTED_OTHER'
  | 'MERCHANT_REPORTED_POLICY_ABUSE'
  | 'MERCHANT_REPORTED_SUSPICIOUS_QUANTITY_OR_PAYMENT'
  | 'MERCHANT_REPORTED_SUSPICIOUS_SHIPPING_LOCATION';

export type ByUserIdInput = {
  id: Scalars['ObjectIdType'];
};

export type ByUserIdMutation = {
  __typename?: 'ByUserIdMutation';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  sessionKey?: Maybe<Scalars['String']>;
};

export type CaTaxConstants = {
  __typename?: 'CATaxConstants';
  marketplaceProvinces: Array<Scalars['String']>;
  pstQstProvinces: Array<Scalars['String']>;
};

export type CsPerformanceStats = {
  __typename?: 'CSPerformanceStats';
  averageRating30d?: Maybe<Scalars['Float']>;
  averageTicketResponseTime?: Maybe<Timedelta>;
  chargeback?: Maybe<Scalars['Int']>;
  chargebackAmount: CurrencyValue;
  chargebackAmountRatio?: Maybe<Scalars['Float']>;
  chargebackRatio?: Maybe<Scalars['Float']>;
  customerSatisfaction?: Maybe<Scalars['Float']>;
  customerSatisfactionScore?: Maybe<Scalars['Float']>;
  endDate: Datetime;
  gmv: CurrencyValue;
  lateResponseRate30d?: Maybe<Scalars['Float']>;
  orders?: Maybe<Scalars['Int']>;
  orders30d?: Maybe<Scalars['Int']>;
  orders93d?: Maybe<Scalars['Int']>;
  refund30d?: Maybe<Scalars['Int']>;
  refund93d?: Maybe<Scalars['Int']>;
  refundRatio30d?: Maybe<Scalars['Float']>;
  refundRatio93d?: Maybe<Scalars['Float']>;
  startDate: Datetime;
  ticketRatio?: Maybe<Scalars['Float']>;
  tickets?: Maybe<Scalars['Int']>;
};

export type CsvAnnouncementSchema = {
  __typename?: 'CSVAnnouncementSchema';
  validate?: Maybe<CsvValidationSchema>;
};


export type CsvAnnouncementSchemaValidateArgs = {
  contentType: AnnouncementContentType;
  csvFileUrl: Scalars['String'];
  messageTemplateCn?: InputMaybe<Scalars['String']>;
  messageTemplateEn: Scalars['String'];
};

export type CsvExportFilterType =
  | 'FBS'
  | 'FBW'
  | 'NO_TRACKING'
  | 'REFUNDED'
  | 'REFUNDED_BY_WISH'
  | 'SHIPPED'
  | 'UNCONFIRMED_TRACKING';

export type CsvProductImportJobSchema = {
  __typename?: 'CSVProductImportJobSchema';
  addedCount: Scalars['Int'];
  csvUrl?: Maybe<Scalars['String']>;
  errorCount: Scalars['Int'];
  feedType: ProductCsvJobType;
  fileName?: Maybe<Scalars['String']>;
  fpApprovedCount: Scalars['Int'];
  fpBlockedCount: Scalars['Int'];
  id: Scalars['ObjectIdType'];
  processedCount: Scalars['Int'];
  startTime: Datetime;
  status: MerchantFeedJobStatus;
  totalRows: Scalars['Int'];
  updatedCount: Scalars['Int'];
};

export type CsvValidationSchema = {
  __typename?: 'CSVValidationSchema';
  columnMapping: Array<CsvColumnMappingEntrySchema>;
  errors?: Maybe<Scalars['String']>;
  midCount?: Maybe<Scalars['Int']>;
  placeholderKeys?: Maybe<Array<Scalars['String']>>;
  previewData?: Maybe<Scalars['JSONString']>;
};

export type CalculatedShippingAccountConfigType =
  | 'ACCOUNT_LEVEL_OFF'
  | 'ACCOUNT_LEVEL_ON'
  | 'USE_PRODUCT_LEVEL_CONFIG';

export type CampaignEventInfo = {
  __typename?: 'CampaignEventInfo';
  countries: Array<Country>;
  description?: Maybe<Scalars['String']>;
  endTime: Datetime;
  id: Scalars['ObjectIdType'];
  minDiscountPercentage: Scalars['Float'];
  name: Scalars['String'];
  productCategoryRestrictions: Array<TaxonomyCategorySchema>;
  promotionType: MfpCampaignPromotionType;
  startTime: Datetime;
  submissionDeadline: Datetime;
};

export type CampaignEventSort = {
  field: MfpCampaignEventSortBy;
  order: SortOrderType;
};

export type CampaignProductSchema = {
  __typename?: 'CampaignProductSchema';
  brandId?: Maybe<Scalars['ObjectIdType']>;
  isMaxboost: Scalars['Boolean'];
  keywords: Array<Scalars['String']>;
  product?: Maybe<ProductSchema>;
  productId: Scalars['ObjectIdType'];
};

export type CampaignSchema = {
  __typename?: 'CampaignSchema';
  bonusBudget: BonusBudgetSchema;
  endDate: Datetime;
  flexibleBudget: FlexibleBudgetSchema;
  id: Scalars['ObjectIdType'];
  intenseBoost: Scalars['Boolean'];
  isEvergreen: Scalars['Boolean'];
  localizedCurrency: PaymentCurrencyCode;
  maxBudget: CurrencyValue;
  merchant: MerchantSchema;
  merchantBudget: CurrencyValue;
  merchantId: Scalars['ObjectIdType'];
  name: Scalars['String'];
  products: Array<CampaignProductSchema>;
  scheduledAddBudget: ScheduledAddBudgetSchema;
  startDate: Datetime;
  state: MarketingCampaignState;
};

export type CancelChargeTransactionInput = {
  chargeId: Scalars['String'];
};

export type CancelChargeTransactionMutation = {
  __typename?: 'CancelChargeTransactionMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CancelInfractionInput = {
  reason: CancelReason;
};

export type CancelMfpCampaign = {
  __typename?: 'CancelMFPCampaign';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CancelMfpCampaignInput = {
  campaignId: Scalars['ObjectIdType'];
  cancelReason: MfpCampaignCancelReason;
  comment?: InputMaybe<Scalars['String']>;
};

export type CancelReason =
  | 'AGENT_ERROR'
  | 'ALREADY_DELETED'
  | 'EXPIRED'
  | 'INCORRECT_DATA'
  | 'OFFENDING_CONTENT_REMOVED'
  | 'PASSED_AUTHORIZATION_TAGGING'
  | 'POLICY_UPDATE'
  | 'WHITE_GLOVE_WISH_X_STRAT_MERCH';

export type CancelReturn = {
  __typename?: 'CancelReturn';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CancelReturnInput = {
  cancelReason: ReturnRequestCancelReason;
  message: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
  otherReasonExplanation?: InputMaybe<Scalars['String']>;
  supportingDocument?: InputMaybe<Scalars['String']>;
};

export type CancelWfpWithholdMutation = {
  __typename?: 'CancelWFPWithholdMutation';
  merchantId?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  ok: Scalars['Boolean'];
  orderId?: Maybe<Scalars['String']>;
};

export type CancelWfpWithholdMutationInput = {
  cancelReason?: InputMaybe<Scalars['String']>;
  cancelTicket: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
};

export type CancelWpsTrackingIdInput = {
  orderId: Scalars['ObjectIdType'];
};

export type CancelWpsTrackingIdMutation = {
  __typename?: 'CancelWPSTrackingIDMutation';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  wpsShipmentId?: Maybe<Scalars['String']>;
};

export type CannedResponseCategorySchema = {
  __typename?: 'CannedResponseCategorySchema';
  id: Scalars['ObjectIdType'];
  name: Scalars['String'];
};

export type CannedResponseFeature =
  | 'DISPUTE'
  | 'FRAUD'
  | 'TICKET'
  | 'TRACKING_DISPUTE'
  | 'WARNING';

export type CannedResponseHub = {
  __typename?: 'CannedResponseHub';
  cannedResponseCategories?: Maybe<Array<CannedResponseCategorySchema>>;
  cannedResponseCategoriesCount?: Maybe<Scalars['Int']>;
  cannedResponses?: Maybe<Array<CannedResponseSchema>>;
  cannedResponsesCount?: Maybe<Scalars['Int']>;
  filledCannedResponseText?: Maybe<FilledCannedResponseTextSchema>;
};


export type CannedResponseHubCannedResponseCategoriesArgs = {
  feature: CannedResponseFeature;
  locale?: InputMaybe<Locale>;
};


export type CannedResponseHubCannedResponseCategoriesCountArgs = {
  feature: CannedResponseFeature;
  locale?: InputMaybe<Locale>;
};


export type CannedResponseHubCannedResponsesArgs = {
  canRePurchase?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Scalars['ObjectIdType']>;
  feature: CannedResponseFeature;
  isRefund?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Locale>;
};


export type CannedResponseHubCannedResponsesCountArgs = {
  canRePurchase?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Scalars['ObjectIdType']>;
  feature?: InputMaybe<CannedResponseFeature>;
  isRefund?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Locale>;
};


export type CannedResponseHubFilledCannedResponseTextArgs = {
  cannedResponseId: Scalars['ObjectIdType'];
  searchId: Scalars['ObjectIdType'];
  searchType?: InputMaybe<FilledCannedResponseSearchType>;
};

export type CannedResponseSchema = {
  __typename?: 'CannedResponseSchema';
  id: Scalars['ObjectIdType'];
  name: Scalars['String'];
};

export type CartPriceDetailSchema = {
  __typename?: 'CartPriceDetailSchema';
  productPrice?: Maybe<CurrencyValue>;
  shippingPrice?: Maybe<CurrencyValue>;
  total?: Maybe<CurrencyValue>;
};


export type CartPriceDetailSchemaProductPriceArgs = {
  forMmrpRefund?: InputMaybe<Scalars['Boolean']>;
  includeTax?: InputMaybe<Scalars['Boolean']>;
};


export type CartPriceDetailSchemaShippingPriceArgs = {
  forMmrpRefund?: InputMaybe<Scalars['Boolean']>;
  includeTax?: InputMaybe<Scalars['Boolean']>;
};

export type CategorizationSource =
  | 'DISPUTE'
  | 'HUMAN_LABELED'
  | 'INFERENCE_MODEL'
  | 'MANUAL_OVERRIDE_TOOL'
  | 'MERCHANT_SPECIFIED'
  | 'MONGO_BACK_FILL';

export type CategoryClassificationTaggerJobSchema = {
  __typename?: 'CategoryClassificationTaggerJobSchema';
  description: Scalars['String'];
  imageUrls?: Maybe<Array<Scalars['String']>>;
  jobId: Scalars['ObjectIdType'];
  merchantGeneratedCategory?: Maybe<TaxonomyCategorySchema>;
  modelGeneratedCategory?: Maybe<TaxonomyCategorySchema>;
  title: Scalars['String'];
  treeVersion?: Maybe<Scalars['String']>;
};

export type CategoryEprSchema = {
  __typename?: 'CategoryEprSchema';
  category: Scalars['Int'];
  categoryName: Scalars['String'];
  id?: Maybe<Scalars['ObjectIdType']>;
  inScopePidCount: Scalars['Int'];
  responsibleEntityName?: Maybe<Scalars['String']>;
  status?: Maybe<EprStatus>;
  uin?: Maybe<Scalars['String']>;
};

export type ChangeDisplayNameInput = {
  displayName: Scalars['String'];
};

export type ChangeDisplayNameMutation = {
  __typename?: 'ChangeDisplayNameMutation';
  displayName?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
};

export type ChangeEmailInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ChangeEmailMutation = {
  __typename?: 'ChangeEmailMutation';
  email?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  passwordOk?: Maybe<Scalars['Boolean']>;
};

export type ChangeLocale = {
  __typename?: 'ChangeLocale';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ChangeLocaleInput = {
  locale: Locale;
};

export type ChangeMftOptOutInput = {
  isOptedOut: Scalars['Boolean'];
};

export type ChangeMftOptOutMutation = {
  __typename?: 'ChangeMFTOptOutMutation';
  error?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['String']>;
};

export type ChangePasswordInput = {
  curPassword?: InputMaybe<Scalars['String']>;
  newPassword?: InputMaybe<Scalars['String']>;
};

export type ChangePasswordMutation = {
  __typename?: 'ChangePasswordMutation';
  error?: Maybe<Scalars['String']>;
  passwordOk?: Maybe<Scalars['Boolean']>;
};

export type ChangePhoneNumberMutation = {
  __typename?: 'ChangePhoneNumberMutation';
  sendCode: ChangePhoneNumberSendCodeMutation;
  verifyCode: ChangePhoneNumberVerifyCodeMutation;
};


export type ChangePhoneNumberMutationSendCodeArgs = {
  input: ChangePhoneNumberSendCodeInput;
};


export type ChangePhoneNumberMutationVerifyCodeArgs = {
  input: ChangePhoneNumberVerifyCodeInput;
};

export type ChangePhoneNumberSendCodeInput = {
  newPhoneNumber: Scalars['String'];
};

export type ChangePhoneNumberSendCodeMutation = {
  __typename?: 'ChangePhoneNumberSendCodeMutation';
  error?: Maybe<Scalars['String']>;
  sentOk: Scalars['Boolean'];
};

export type ChangePhoneNumberVerifyCodeInput = {
  newPhoneNumber: Scalars['String'];
  verificationCode: Scalars['String'];
};

export type ChangePhoneNumberVerifyCodeMutation = {
  __typename?: 'ChangePhoneNumberVerifyCodeMutation';
  error?: Maybe<Scalars['String']>;
  verifiedOk: Scalars['Boolean'];
};

export type ChangePreferredUnitsInput = {
  preferredLengthUnit: LengthUnit;
  preferredWeightUnit: WeightUnit;
};

export type ChangePreferredUnitsMutation = {
  __typename?: 'ChangePreferredUnitsMutation';
  error?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeShippingProviderStatus = {
  __typename?: 'ChangeShippingProviderStatus';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  shippingProvider?: Maybe<ShippingProviderSchema>;
};

export type ChangeShippingProviderStatusInput = {
  providerId: Scalars['Int'];
};

export type ChangeVacationSettingsInput = {
  endDate?: InputMaybe<DatetimeInput>;
  primaryWarehouseOnly: Scalars['Boolean'];
  startDate?: InputMaybe<DatetimeInput>;
};

export type ChangeVacationSettingsMutation = {
  __typename?: 'ChangeVacationSettingsMutation';
  message?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChargeInput = {
  chargeId: Scalars['String'];
  chargeProvider?: InputMaybe<ChargePaymentProviderType>;
  clientToken?: InputMaybe<Scalars['String']>;
  paypalDeviceData?: InputMaybe<Scalars['String']>;
  paypalPayerEmail?: InputMaybe<Scalars['String']>;
  paypalPayerId?: InputMaybe<Scalars['String']>;
};

export type ChargeItem = {
  __typename?: 'ChargeItem';
  type: ChargeItemType;
};

export type ChargeItemType =
  | 'PRODUCT_BOOST_CAMPAIGN'
  | 'STORE_REGISTRATION_FEE';

export type ChargeMutation = {
  __typename?: 'ChargeMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ChargePaymentProviderType =
  | 'NONE'
  | 'PAYONEER'
  | 'PAYPAL'
  | 'UMPAY';

export type ChargeTransactionInfo = {
  __typename?: 'ChargeTransactionInfo';
  canChangeChargeProvider: Scalars['Boolean'];
  chargeCreatedTime: Datetime;
  chargeItem?: Maybe<ChargeItem>;
  chargeProvider?: Maybe<ChargePaymentProviderType>;
  chargeReceivedTime?: Maybe<Datetime>;
  clientToken?: Maybe<Scalars['String']>;
  currency?: Maybe<PaymentCurrencyCode>;
  signupUrl?: Maybe<Scalars['String']>;
  state: ChargeTransactionState;
  totalAmount?: Maybe<CurrencyValue>;
  totalAmountInUsd?: Maybe<CurrencyValue>;
  type: ChargeTransactionType;
};

export type ChargeTransactionState =
  | 'EXCEPTION'
  | 'FAILED'
  | 'NEW'
  | 'PENDING'
  | 'REFUNDED'
  | 'REQUIRE_REVIEW'
  | 'SUCCEEDED'
  | 'VOIDED';

export type ChargeTransactionType =
  | 'BUYING'
  | 'INVOICING';

export type CheckpointAfterActionState =
  | 'ALERT'
  | 'ARRIVE_AT_DEST_COUNTRY'
  | 'ATTEMPT_FAIL'
  | 'AVAILABLE_FOR_PICKUP'
  | 'CANCELLED'
  | 'DELETE_FAIL'
  | 'DELETE_FOR_REUSE_API_FAIL'
  | 'DELETE_FOR_REUSE_API_SUCCESS'
  | 'DELETE_FOR_REUSE_DATA'
  | 'DELETE_SUCCESS'
  | 'DELIVERED'
  | 'EXCEPTION'
  | 'EXPIRED'
  | 'INFO_RECEIVED'
  | 'IN_TRANSIT'
  | 'MARKED_SHIPPED'
  | 'ORDER_PLACED'
  | 'OUT_FOR_DELIVERY'
  | 'PENDING'
  | 'REACTIVATE_FAIL'
  | 'REACTIVATE_SUCCESS'
  | 'SEND_TRACKING_FAIL'
  | 'SEND_TRACKING_SUCCESS'
  | 'TRACKING_CHANGED'
  | 'TRACK_END';

export type ChromeBadgeSchema = {
  __typename?: 'ChromeBadgeSchema';
  badgeType?: Maybe<ChromeBadgeType>;
  expiryDate?: Maybe<Datetime>;
};

export type ChromeBadgeType =
  | 'BETA'
  | 'NEW';

export type ChromeNodeSchema = {
  __typename?: 'ChromeNodeSchema';
  badge?: Maybe<ChromeBadgeSchema>;
  children?: Maybe<Array<ChromeNodeSchema>>;
  countSelectors?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Scalars['String']>>;
  label?: Maybe<Scalars['String']>;
  mostRecentHit?: Maybe<Datetime>;
  nodeid?: Maybe<Scalars['String']>;
  openInNewTab?: Maybe<Scalars['Boolean']>;
  overviewLabel?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  searchPhrase?: Maybe<Scalars['String']>;
  showInSideMenu?: Maybe<Scalars['Boolean']>;
  totalHits?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type ChromeSchema = {
  __typename?: 'ChromeSchema';
  merchantGraph?: Maybe<ChromeNodeSchema>;
  merchantGraphString?: Maybe<Scalars['String']>;
  objectSearch?: Maybe<NavigationResultSchema>;
};


export type ChromeSchemaObjectSearchArgs = {
  currentPath?: InputMaybe<Scalars['String']>;
  objectId: Scalars['ObjectIdType'];
};

export type ClaimInfractionInput = {
  warningIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
};

export type ClaimNotices = {
  __typename?: 'ClaimNotices';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ClaimNoticesInput = {
  noticeIds: Array<Scalars['ObjectIdType']>;
};

export type ClearAllUiState = {
  __typename?: 'ClearAllUIState';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ClearUiState = {
  __typename?: 'ClearUIState';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ClearVacationSettingsMutation = {
  __typename?: 'ClearVacationSettingsMutation';
  message?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type ClientWritableBucket =
  | 'BANK_ACCOUNT_DOCUMENTS'
  | 'BRAND_LOGO'
  | 'PUBLIC_APP_LOGO'
  | 'RACC_SOURCE_ASSETS'
  | 'REGULATOR_REPORT_FILE_UPLOADS'
  | 'TAX_SETTING_FILE_UPLOADS'
  | 'TEMP_UPLOADS'
  | 'TEMP_UPLOADS_V2';

export type CloseInfractionInput = {
  warningIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
};

export type ColumnCategoryId =
  | 'ADDITIONAL_ITEM_SHIPPING'
  | 'COUNTRY_SHIPPING'
  | 'LOGISTICS'
  | 'PRODUCT_DETAILS'
  | 'TTD';

export type ColumnCategorySchema = {
  __typename?: 'ColumnCategorySchema';
  id: ColumnCategoryId;
  name: Scalars['String'];
};

export type CommerceMerchantEuEntityStatus =
  | 'NOT_ESTABLISHED'
  | 'NOT_STARTED'
  | 'PENDING_REVIEW'
  | 'REJECTED'
  | 'VALIDATED';

export type CommerceMerchantReviewStatus =
  | 'APPROVED'
  | 'FAILED'
  | 'NOT_APPLICABLE'
  | 'PENDING_ADMIN_REVIEW'
  | 'PENDING_AUTO_REVIEW';

export type CommerceMerchantState =
  | 'APPROVED'
  | 'DISABLED'
  | 'PENDING'
  | 'PENDING_EMAIL'
  | 'PENDING_PHONE'
  | 'REQUEST_INFO'
  | 'VACATION'
  | 'WISH_EXPRESS_ONLY';

export type CommerceMerchantTaxInfoGermanyNoNumberReason =
  | 'BUYER_IS_IMPORTER_OF_RECORD'
  | 'WILL_REGISTER_SOON';

export type CommerceMerchantTaxInfoStatus =
  | 'ACTIVE'
  | 'FAILED_REVIEW'
  | 'INACTIVE'
  | 'OLD_ACTIVE_NEW_PENDING_REVIEW'
  | 'PENDING_ONESOURCE_SETUP'
  | 'PENDING_REVIEW';

export type CommerceProductCondition =
  | 'NEW'
  | 'REFURBISHED'
  | 'USED';

export type CommerceProductFpReviewStatus =
  | 'APPROVED'
  | 'BLOCKED'
  | 'UNDER_REVIEW';

export type CommerceProductListingState =
  | 'ACTIVE'
  | 'MERCHANT_INACTIVE'
  | 'REMOVED_BY_MERCHANT'
  | 'REMOVED_BY_WISH'
  | 'WISH_INACTIVE';

export type CommerceProductListingStateReason =
  | 'AVAILABLE'
  | 'AVAILABLE_AND_BLOCKED_EDIT'
  | 'AVAILABLE_AND_PENDING_EDIT'
  | 'LISTING_BLOCKED'
  | 'LISTING_UNDER_REVIEW'
  | 'MERCH_INACTIVE'
  | 'MERCH_INACTIVE_AND_BLOCKED_EDIT'
  | 'MERCH_INACTIVE_AND_PENDING_EDIT'
  | 'NEW_LISTING_BLOCKED'
  | 'NEW_LISTING_UNDER_REVIEW'
  | 'NOT_AVAILABLE'
  | 'REMOVED_BY_MERCH'
  | 'REMOVED_BY_WISH';

export type CommerceProductReviewStatus =
  | 'APPROVED'
  | 'PENDING'
  | 'REJECTED';

export type CommerceProductStatus =
  | 'DISABLED'
  | 'ENABLED'
  | 'REMOVED_BY_MERCHANT';

export type CommerceTransactionClient =
  | 'ANDROID_APP'
  | 'ANDROID_INSTANT_APP'
  | 'IOS_APP'
  | 'IPAD_APP'
  | 'MOBILE_WEB'
  | 'WEB'
  | 'WINDOWS_APP'
  | 'WINDOWS_PHONE_APP';

export type CommerceTransactionState =
  | 'ACKNOWLEDGED'
  | 'APPROVED'
  | 'C2C_ACCEPTED'
  | 'C2C_DELIVERED'
  | 'C2C_ON_DELIVERY'
  | 'DECLINED'
  | 'DELAYING'
  | 'EXCEPTION'
  | 'GIFT_WAITING_FOR_ACCEPT'
  | 'LABEL_DOWNLOADED'
  | 'LABEL_GENERATED'
  | 'PENDING'
  | 'REFUNDED'
  | 'REQUIRE_REVIEW'
  | 'SHIPPED';

export type CommerceTransactionTaxEventType =
  | 'REFUND_PRICE'
  | 'REFUND_SHIPPING'
  | 'SALE_PRICE'
  | 'SALE_SHIPPING';

export type CommerceTransactionTaxRemitType =
  | 'MERCHANT_REMIT'
  | 'NO_REMIT'
  | 'TBD_REMIT'
  | 'WISH_REMIT';

export type CompleteDisputeReview = {
  __typename?: 'CompleteDisputeReview';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CompleteDisputeReviewInput = {
  disputeReviewResponse: Scalars['String'];
  noticeId: Scalars['ObjectIdType'];
};

export type CompleteNoticeReview = {
  __typename?: 'CompleteNoticeReview';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CompleteNoticeReviewInput = {
  noticeId: Scalars['ObjectIdType'];
  reviewResponse: Scalars['String'];
};

export type ConfirmedDeliveryCarriers = {
  __typename?: 'ConfirmedDeliveryCarriers';
  availableCountries: Array<Country>;
  availableShippingCountries: Array<CountryAvailableShippingProviders>;
  shippingProviders: Array<ShippingProviderSchema>;
  swedenConfirmedDeliveredCarrierTypes: Array<SwedenConfirmedDeliveredCarrierTypes>;
};

export type ContactBuyer = {
  __typename?: 'ContactBuyer';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ContactBuyerInput = {
  contactReason: ReturnRequestContactBuyerReason;
  message: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
  otherReasonExplanation?: InputMaybe<Scalars['String']>;
  supportingDocument?: InputMaybe<Scalars['String']>;
};

export type ContestWarningType =
  | 'CHEMICAL'
  | 'DEP_PASSENGER_OFF_ROAD_VEHICLE'
  | 'DEP_RECREATIONAL_VESSEL'
  | 'DIESEL_ENGINE'
  | 'FOOD'
  | 'FURNITURE'
  | 'ON_PRODUCT_CANCER'
  | 'ON_PRODUCT_COMBINED_CANCER_REPRODUCTIVE'
  | 'ON_PRODUCT_REPRODUCTIVE'
  | 'RAW_WOOD';

export type ConversionRate =
  | 'MKL_POLICY'
  | 'WISH_LATEST';

export type ConvertToPlus = {
  __typename?: 'ConvertToPlus';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ConvertToPlusInput = {
  merchantIds: Array<Scalars['ObjectIdType']>;
};

export type Count = {
  __typename?: 'Count';
  unit: CountUnit;
  value: Scalars['Float'];
};


export type CountValueArgs = {
  targetUnit?: InputMaybe<CountUnit>;
};

export type CountInput = {
  unit: CountUnit;
  value: Scalars['Float'];
};

export type CountUnit =
  | 'COUNT'
  | 'LOAD'
  | 'POD'
  | 'ROLL'
  | 'WASH';

export type CounterfeitReasonCode =
  | 'ADULT_CONTENT'
  | 'AMBIGUOUS_LISTING'
  | 'ANIMAL_PRODUCTS'
  | 'BIKE_HELMETS'
  | 'BLURRED_INFORMATION'
  | 'BLURRED_LABEL'
  | 'BLURRED_WATERMARK'
  | 'CARSEAT'
  | 'CELEBRITY_PHOTO'
  | 'CENSORED_FACE'
  | 'CN_PROHIBITED_PRODUCTS'
  | 'CONSUMPTION_MATERIALS'
  | 'CONTACT_LENSES'
  | 'DANGEROUS_ITEMS'
  | 'DISTASTEFUL_CONTENT'
  | 'FALSE_ADVERTISING'
  | 'GRAPHIC_VIOLENCE'
  | 'HARMFUL_CHEMICALS'
  | 'HARNESS'
  | 'HATE_CRIME'
  | 'HAZARDOUS_MATERIALS'
  | 'HOVERBOARD'
  | 'ILLEGAL_ELECTRONICS'
  | 'IS_MAJOR_BRAND'
  | 'JEWELRY_AND_METALS'
  | 'LIGHTERS'
  | 'MEDICAL_MATERIALS'
  | 'MISLEADING_LISTING'
  | 'MISLEADING_LISTING_AUTHENTIC_BRAND'
  | 'NUDITY'
  | 'PICTURED_WITH_MAJOR_BRAND'
  | 'PIERCING_GUN'
  | 'PLANTS_AND_SEEDS'
  | 'PLANT_SEEDS'
  | 'PRICE_GOUGING'
  | 'PRODUCT_MODIFIED'
  | 'PROP_MONEY'
  | 'RECALLED_TOYS'
  | 'REGIONAL_RESTRICTIONS'
  | 'SAFETY_EQUIPMENT'
  | 'SMOKING'
  | 'TATTOO_GUN'
  | 'TEAM_LOGO'
  | 'TRICK_CANDLES'
  | 'UNLICENSED_MEDIA'
  | 'UNVERIFIED_MONEY'
  | 'VIRTUAL_GOODS'
  | 'WEAPON'
  | 'WISH_ADMIN';

export type CounterfeitRiskLevel =
  | 'HIGH'
  | 'LOW'
  | 'MEDIUM';

export type CounterfeitViolationSchema = {
  __typename?: 'CounterfeitViolationSchema';
  isConfirmed: Scalars['Boolean'];
  reason?: Maybe<CounterfeitReasonCode>;
  reasonDisplayName?: Maybe<Scalars['String']>;
  reasonExplanation?: Maybe<Scalars['String']>;
  subcategoryMessage?: Maybe<Scalars['String']>;
};

export type Country = {
  __typename?: 'Country';
  code: CountryCode;
  gmvRank?: Maybe<Scalars['Int']>;
  hasWishReturnFacility: Scalars['Boolean'];
  isEuVat: Scalars['Boolean'];
  isFinalSaleAllowed: Scalars['Boolean'];
  isInEurope: Scalars['Boolean'];
  isMerchantReturnWishAuthAllowed: Scalars['Boolean'];
  name: Scalars['String'];
  regions?: Maybe<Array<Region>>;
  restrictedProductRegion?: Maybe<RestrictedProductRegion>;
  wishExpress: WishExpressCountryDetails;
};


export type CountryNameArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};

export type CountryActionInput = {
  action: CountryActionType;
  countryCode: ShippableCountryCode;
  data?: InputMaybe<Scalars['String']>;
};

export type CountryActionType =
  | 'ADD'
  | 'DELETE'
  | 'UPDATE';

export type CountryAvailableShippingProviders = {
  __typename?: 'CountryAvailableShippingProviders';
  country: Country;
  providers: Array<ShippingProviderSchema>;
};

export type CountryCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AN'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'FX'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TP'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UK'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'YU'
  | 'ZA'
  | 'ZM'
  | 'ZR'
  | 'ZW';

export type CountryEprSchema = {
  __typename?: 'CountryEPRSchema';
  categories: Array<CategoryEprSchema>;
  categoriesWithEpr: Scalars['Int'];
  categoriesWithoutEpr: Scalars['Int'];
  country: Country;
  hasAcceptedTos: Scalars['Boolean'];
  tos: Scalars['String'];
};

export type CountryShippingInput = {
  additionalPrice?: InputMaybe<CurrencyInput>;
  countryCode: CountryCode;
  enabled?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<CurrencyInput>;
  regionShipping?: InputMaybe<Array<RegionShippingInput>>;
  timeToDoor?: InputMaybe<Scalars['Int']>;
};

export type CountryShippingSchema = {
  __typename?: 'CountryShippingSchema';
  additionalPrice?: Maybe<CurrencyValue>;
  country: Country;
  enabled: Scalars['Boolean'];
  price?: Maybe<CurrencyValue>;
  regionShipping?: Maybe<Array<RegionShippingSchema>>;
  timeToDoor?: Maybe<Scalars['Int']>;
  wishExpressTtdRequirement?: Maybe<Scalars['Int']>;
};

export type CountryShippingSetting = {
  countryCode: ShippableCountryCode;
  enabled: Scalars['Boolean'];
  price?: InputMaybe<CurrencyInput>;
};

export type CreateAnnouncementContentSchemaInput = {
  ctaDueDate?: InputMaybe<DatetimeInput>;
  ctaText?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  locale: AnnouncementLocale;
  message: Scalars['String'];
  title: Scalars['String'];
};

export type CreateBdBaseAnnouncement = {
  __typename?: 'CreateBDBaseAnnouncement';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateBrandEnrollmentInput = {
  brandOwnerName: Scalars['String'];
  brandRepName: Scalars['String'];
  brandRepTitle: Scalars['String'];
  email: Scalars['String'];
  isNewBrand: Scalars['Boolean'];
  phoneNumber: Scalars['String'];
  proofOfAuthorizations: Array<FileInput>;
  proposedBrandId?: InputMaybe<Scalars['ObjectIdType']>;
  providedBrandAdditionalInfo?: InputMaybe<Scalars['String']>;
  providedBrandLogoFile?: InputMaybe<FileInput>;
  providedBrandName: Scalars['String'];
  providedBrandWebsite?: InputMaybe<Scalars['String']>;
  trademarkInfos: Array<BrandPartnerTrademarkInfoInputObject>;
};

export type CreateBrandEnrollmentRequest = {
  __typename?: 'CreateBrandEnrollmentRequest';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateBulkOneoffAdminToolPayments = {
  __typename?: 'CreateBulkOneoffAdminToolPayments';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateBulkOneoffAdminToolPaymentsInput = {
  s3FileUrl: Scalars['String'];
};

export type CreateChargeTransactionInput = {
  amount: CurrencyInput;
  flowType: ChargeTransactionType;
  redirectUrl?: InputMaybe<Scalars['String']>;
  type: ChargeItemType;
};

export type CreateChargeTransactionMutation = {
  __typename?: 'CreateChargeTransactionMutation';
  chargeId?: Maybe<Scalars['ObjectIdType']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateClaim = {
  __typename?: 'CreateClaim';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateClaimInput = {
  claimReason: ReturnRequestClaimReason;
  message: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
  otherReasonExplanation?: InputMaybe<Scalars['String']>;
  supportingDocument?: InputMaybe<Scalars['String']>;
};

export type CreateLqdCampaign = {
  __typename?: 'CreateLQDCampaign';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateNotice = {
  __typename?: 'CreateNotice';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateNoticeInput = {
  description: Scalars['String'];
  notifierEmail: Scalars['String'];
  notifierName: Scalars['String'];
  productIds: Array<Scalars['ObjectIdType']>;
  supportFiles?: InputMaybe<Array<FileInput>>;
};

export type CreateNotifier = {
  __typename?: 'CreateNotifier';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateNotifierInput = {
  countryCodes: Array<CountryCode>;
  email: Scalars['String'];
  isTrustedFlagger?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  notifierType: NotifierType;
  organization: Scalars['String'];
};

export type CreateProductTaxonomyCategoryDispute = {
  __typename?: 'CreateProductTaxonomyCategoryDispute';
  ok: Scalars['Boolean'];
  productDisputeEligibility: ProductTaxonomyCategoryDisputeEligibilityEnum;
};

export type CreateProductTaxonomyCategoryDisputeInput = {
  categoryIdProposed: Scalars['Int'];
  categoryTreeVersion: Scalars['String'];
  merchantNote?: InputMaybe<Scalars['String']>;
  productId: Scalars['ObjectIdType'];
  supportFiles?: InputMaybe<Array<FileInput>>;
};

export type CreateProductsDownloadJobInput = {
  eventId?: InputMaybe<Scalars['ObjectIdType']>;
  promotionType: MfpCampaignPromotionType;
};

export type CreateProductsDownloadJobMutation = {
  __typename?: 'CreateProductsDownloadJobMutation';
  jobId?: Maybe<Scalars['ObjectIdType']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateShippingPlan = {
  __typename?: 'CreateShippingPlan';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  shippingPlan?: Maybe<ShippingPlanSchema>;
};

export type CreateShippingProvider = {
  __typename?: 'CreateShippingProvider';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  shippingProvider?: Maybe<ShippingProviderSchema>;
};

export type CreateSystemUpdateBaseAnnouncement = {
  __typename?: 'CreateSystemUpdateBaseAnnouncement';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateSystemUpdateBaseAnnouncementInput = {
  audienceGroups?: InputMaybe<Array<AudienceGroup>>;
  audienceSourceType: AnnouncementAudienceSourceType;
  categories: Array<AnnouncementCategory>;
  content: Array<CreateAnnouncementContentSchemaInput>;
  contentType?: InputMaybe<AnnouncementContentType>;
  csvFields?: InputMaybe<AnnouncementCsvFieldsSchemaInput>;
  expiryDate?: InputMaybe<DatetimeInput>;
  locales: Array<AnnouncementLocale>;
  merchantIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  overrideEmailPreference: Scalars['Boolean'];
  program?: InputMaybe<AnnouncementProgram>;
  publishDate?: InputMaybe<DatetimeInput>;
};

export type CreateTakedownRequest = {
  __typename?: 'CreateTakedownRequest';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  takedownRequestId?: Maybe<Scalars['ObjectIdType']>;
};

export type CreateTakedownRequestInput = {
  brandPartnerBrandInfoId: Scalars['ObjectIdType'];
  notes?: InputMaybe<Scalars['String']>;
  productIds: Array<Scalars['ObjectIdType']>;
  typeOfInfringement: TypeOfInfringement;
};

export type CreateUin = {
  __typename?: 'CreateUin';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateUinInput = {
  category: Scalars['Int'];
  country: CountryCode;
  responsibleEntityName: Scalars['String'];
  uin: Scalars['String'];
};

export type CreateWhitelistProductsInput = {
  merchantId: Scalars['ObjectIdType'];
  productIds: Array<Scalars['ObjectIdType']>;
};

export type CreateWhitelistProductsMutation = {
  __typename?: 'CreateWhitelistProductsMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreditPaymentType =
  | 'ENROLLMENT_FEE'
  | 'IMPRESSION_FEE'
  | 'OTHER';

export type CreditTransactionRecord = {
  __typename?: 'CreditTransactionRecord';
  campaignId?: Maybe<Scalars['ObjectIdType']>;
  dateCreated: Datetime;
  expiredDate?: Maybe<Datetime>;
  id: Scalars['ObjectIdType'];
  paymentType?: Maybe<CreditPaymentType>;
  productId?: Maybe<Scalars['ObjectIdType']>;
  receiptId?: Maybe<Scalars['ObjectIdType']>;
  transactionAmount?: Maybe<CurrencyValue>;
  updateReasonDescription: Scalars['String'];
  updatedReason: CreditUpdateReason;
};

export type CreditUpdateReason =
  | 'ISSUING_CREDITS'
  | 'PAYMENT_BY_CREDITS'
  | 'REFUND';

export type CsvColumnMappingEntryInput = {
  key: Scalars['String'];
  value: Scalars['Int'];
};

export type CsvColumnMappingEntrySchema = {
  __typename?: 'CsvColumnMappingEntrySchema';
  key: Scalars['String'];
  value: Scalars['Int'];
};

export type CsvFulfillmentErrorSchema = {
  __typename?: 'CsvFulfillmentErrorSchema';
  message: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
  row: Scalars['String'];
};

export type CsvFulfillmentJobSchema = {
  __typename?: 'CsvFulfillmentJobSchema';
  csvUrl: Scalars['String'];
  errorCount: Scalars['Int'];
  errors?: Maybe<Array<CsvFulfillmentErrorSchema>>;
  fileName?: Maybe<Scalars['String']>;
  fulfilledCount: Scalars['Int'];
  id: Scalars['ObjectIdType'];
  processedCount: Scalars['Int'];
  startTime: Datetime;
  status: MerchantFeedJobStatus;
  totalRows: Scalars['Int'];
};

export type CurrencyInput = {
  amount: Scalars['Float'];
  currencyCode: PaymentCurrencyCode;
};

export type CurrencyValue = {
  __typename?: 'CurrencyValue';
  amount: Scalars['Float'];
  convertedTo: CurrencyValue;
  currencyCode: Scalars['String'];
  display: Scalars['String'];
};


export type CurrencyValueConvertedToArgs = {
  currency: PaymentCurrencyCode;
  rate: ConversionRate;
};

export type CustomerIdentityInfo = {
  __typename?: 'CustomerIdentityInfo';
  number: Scalars['String'];
  numberName: Scalars['String'];
};

export type CustomerPaymentSchema = {
  __typename?: 'CustomerPaymentSchema';
  id?: Maybe<Scalars['String']>;
  paymentProvider: TransactionPaymentType;
};

export type CustomerPriceSchema = {
  __typename?: 'CustomerPriceSchema';
  credit?: Maybe<CurrencyValue>;
  total: CurrencyValue;
  unitPrice: CurrencyValue;
  unitShipping: CurrencyValue;
};


export type CustomerPriceSchemaCreditArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};


export type CustomerPriceSchemaTotalArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};


export type CustomerPriceSchemaUnitPriceArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};


export type CustomerPriceSchemaUnitShippingArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};

export type CustomerSchema = {
  __typename?: 'CustomerSchema';
  payment: CustomerPaymentSchema;
  pricing: CustomerPriceSchema;
  user?: Maybe<WishUserSchema>;
};

export type CustomerSupportConstants = {
  __typename?: 'CustomerSupportConstants';
  issues: Array<CustomerSupportIssueType>;
};

export type CustomerSupportIssueType = {
  __typename?: 'CustomerSupportIssueType';
  id: Scalars['Int'];
  label: Scalars['String'];
};

export type CustomerSupportServiceSchema = {
  __typename?: 'CustomerSupportServiceSchema';
  ticket?: Maybe<CustomerSupportTicket>;
  ticketCount: Scalars['Int'];
  tickets: Array<CustomerSupportTicket>;
};


export type CustomerSupportServiceSchemaTicketArgs = {
  id: Scalars['ObjectIdType'];
};


export type CustomerSupportServiceSchemaTicketCountArgs = {
  includeMissingTicketType?: InputMaybe<Scalars['Boolean']>;
  issueTypes?: InputMaybe<Array<Scalars['Int']>>;
  query?: InputMaybe<Scalars['String']>;
  requestTypes?: InputMaybe<Array<CustomerSupportTicketRequestType>>;
  searchType?: InputMaybe<TicketSearchType>;
  states?: InputMaybe<Array<CustomerSupportTicketState>>;
  types?: InputMaybe<Array<CustomerSupportTicketType>>;
};


export type CustomerSupportServiceSchemaTicketsArgs = {
  includeMissingTicketType?: InputMaybe<Scalars['Boolean']>;
  issueTypes?: InputMaybe<Array<Scalars['Int']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  requestTypes?: InputMaybe<Array<CustomerSupportTicketRequestType>>;
  searchType?: InputMaybe<TicketSearchType>;
  sort?: InputMaybe<CustomerSupportTicketSort>;
  states?: InputMaybe<Array<CustomerSupportTicketState>>;
  types?: InputMaybe<Array<CustomerSupportTicketType>>;
};

export type CustomerSupportTicket = {
  __typename?: 'CustomerSupportTicket';
  closeDate?: Maybe<Datetime>;
  createdTime: Datetime;
  id: Scalars['ObjectIdType'];
  issueType?: Maybe<CustomerSupportIssueType>;
  lastUpdateTime?: Maybe<Datetime>;
  orderId?: Maybe<Scalars['ObjectIdType']>;
  replies?: Maybe<Array<CustomerSupportTicketReplySchema>>;
  requestType?: Maybe<CustomerSupportTicketRequestType>;
  returnInformation?: Maybe<ReturnInformationSchema>;
  state: CustomerSupportTicketState;
  timeToRespond?: Maybe<Timedelta>;
  type?: Maybe<CustomerSupportTicketType>;
  user: WishUserSchema;
};

export type CustomerSupportTicketCancelReturnReasonSchema = {
  __typename?: 'CustomerSupportTicketCancelReturnReasonSchema';
  reason: ReturnRequestCancelReason;
};

export type CustomerSupportTicketIssueRefundReasonSchema = {
  __typename?: 'CustomerSupportTicketIssueRefundReasonSchema';
  reason: ReturnRequestRefundReason;
  reasonText: Scalars['String'];
};

export type CustomerSupportTicketMutations = {
  __typename?: 'CustomerSupportTicketMutations';
  authorizeReturn?: Maybe<AuthorizeReturn>;
  cancelReturn?: Maybe<CancelReturn>;
  contactBuyer?: Maybe<ContactBuyer>;
  createClaim?: Maybe<CreateClaim>;
  issueRefund?: Maybe<IssueRefund>;
  rejectReturn?: Maybe<RejectReturn>;
};


export type CustomerSupportTicketMutationsAuthorizeReturnArgs = {
  input: AuthorizeReturnInput;
};


export type CustomerSupportTicketMutationsCancelReturnArgs = {
  input: CancelReturnInput;
};


export type CustomerSupportTicketMutationsContactBuyerArgs = {
  input: ContactBuyerInput;
};


export type CustomerSupportTicketMutationsCreateClaimArgs = {
  input: CreateClaimInput;
};


export type CustomerSupportTicketMutationsIssueRefundArgs = {
  input: IssueRefundInput;
};


export type CustomerSupportTicketMutationsRejectReturnArgs = {
  input: RejectReturnInput;
};

export type CustomerSupportTicketReplyMessageType =
  | 'ACCEPT_REPLACEMENT_REQUEST'
  | 'ADMIN_DELEGATE'
  | 'ADMIN_REPLY'
  | 'ADMIN_REQUEST_REFUND_CONFIRMATION'
  | 'ADMIN_REQUEST_SUPER'
  | 'AUTO_BOUNCED_TO_ADMIN'
  | 'AUTO_BOUNCED_TO_ADMIN_24'
  | 'AUTO_BOUNCED_TO_ADMIN_120'
  | 'CANCELLED_REPLACEMENT_REQUEST'
  | 'CHANGE_LOCALE_REPLY'
  | 'CLOSE_REPLY'
  | 'COMMENT'
  | 'DECLINE_REPLACEMENT_REQUEST'
  | 'ESCALATE_TO_FRAUD_INTERNAL'
  | 'ESCALATE_TO_INTERNAL'
  | 'ESCALATE_TO_MERCHANT'
  | 'EXPIRED_REPLACEMENT_REQUEST'
  | 'GURU_LINK'
  | 'HIDDEN_TO_MERCHANT_ADMIN_REPLY'
  | 'LOGGED_OUT_FORM_CREATION_MESSAGE'
  | 'MANUAL_REFUND_CONFIRMATION'
  | 'MERCHANT_APPEAL_TO_SUPPORT'
  | 'MERGED'
  | 'MESSAGE_TO_ADMIN'
  | 'MOVE_TO_FRAUD_QUEUE'
  | 'MOVE_TO_ORIGINAL_QUEUE'
  | 'REFUND_CONFIRMATION'
  | 'RELABEL_REPLY'
  | 'REOPENED'
  | 'REPORT_STORE'
  | 'REQUIRE_REVIEW_MERCHANT_REPLY'
  | 'TEXT_REPLY'
  | 'USER_APPEAL_TO_SUPPORT'
  | 'WISH_APPEAL_TO_SUPPORT';

export type CustomerSupportTicketReplySchema = {
  __typename?: 'CustomerSupportTicketReplySchema';
  date?: Maybe<Datetime>;
  id?: Maybe<Scalars['ObjectIdType']>;
  imageUrls?: Maybe<Array<Scalars['String']>>;
  message: Scalars['String'];
  messageType: CustomerSupportTicketReplyMessageType;
  replyAttachments: Array<MerchantFileSchema>;
  senderTitle: Scalars['String'];
  senderType: CustomerSupportTicketReplySenderType;
  userLocale?: Maybe<Scalars['String']>;
  visibleToUser: Scalars['Boolean'];
};

export type CustomerSupportTicketReplySenderType =
  | 'ADMIN'
  | 'AUTO'
  | 'FAKE_AS_ADMIN'
  | 'LIVE_CHAT'
  | 'MERCHANT'
  | 'SHIP_PROVIDER'
  | 'USER'
  | 'WISH_ASSISTANT';

export type CustomerSupportTicketRequestType =
  | 'CLAIM'
  | 'OTHERS'
  | 'REFUND_REQUEST'
  | 'RETURN_REQUEST';

export type CustomerSupportTicketSort = {
  field: TicketSortFieldType;
  order: SortOrderType;
};

export type CustomerSupportTicketState =
  | 'ADMIN'
  | 'AWAITING_FRAUD'
  | 'AWAITING_MERCHANT'
  | 'AWAITING_REFUND_CONFIRMATION'
  | 'AWAITING_SHIP_PROVIDER'
  | 'AWAITING_USER'
  | 'CLOSED'
  | 'DELAYED'
  | 'ESCALATED_TO_FRAUD_INTERNAL'
  | 'ESCALATED_TO_INTERNAL'
  | 'MANUAL_REFUND_CONFIRMATION'
  | 'NEW'
  | 'PERM_CLOSED'
  | 'RETURN_AUTO_TICKET'
  | 'REVIEW_MERCHANT_REPLY'
  | 'SUPER_ADMIN';

export type CustomerSupportTicketType =
  | 'NON_ORDER'
  | 'ORDER'
  | 'POST_CUSTOMER_SUPPORT'
  | 'PRE_PURCHASE';

export type DsaCannedResponseSchema = {
  __typename?: 'DSACannedResponseSchema';
  content: Scalars['String'];
  name: Scalars['String'];
};

export type DsaHub = {
  __typename?: 'DSAHub';
  notice?: Maybe<NoticeSchema>;
  noticeCount: Scalars['Int'];
  notices: Array<NoticeSchema>;
  notifierCount: Scalars['Int'];
  notifierOrganizations: Array<Scalars['String']>;
  notifiers: Array<NotifierSchema>;
  reviewCannedResponses: Array<DsaCannedResponseSchema>;
};


export type DsaHubNoticeArgs = {
  noticeId: Scalars['ObjectIdType'];
};


export type DsaHubNoticeCountArgs = {
  queryInput: NoticeQueryInput;
};


export type DsaHubNoticesArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  queryInput: NoticeQueryInput;
};


export type DsaHubNotifierCountArgs = {
  queryInput: NotifierQueryInput;
};


export type DsaHubNotifiersArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  queryInput: NotifierQueryInput;
};

export type DsaMutations = {
  __typename?: 'DSAMutations';
  claimNotices?: Maybe<ClaimNotices>;
  completeDisputeReview?: Maybe<CompleteDisputeReview>;
  completeNoticeReview?: Maybe<CompleteNoticeReview>;
  createNotifier?: Maybe<CreateNotifier>;
  public?: Maybe<PublicDsaMutations>;
  removeNotifier?: Maybe<RemoveNotifier>;
  unclaimNotices?: Maybe<UnclaimNotices>;
  updateNotifier?: Maybe<UpdateNotifier>;
};


export type DsaMutationsClaimNoticesArgs = {
  input: ClaimNoticesInput;
};


export type DsaMutationsCompleteDisputeReviewArgs = {
  input: CompleteDisputeReviewInput;
};


export type DsaMutationsCompleteNoticeReviewArgs = {
  input: CompleteNoticeReviewInput;
};


export type DsaMutationsCreateNotifierArgs = {
  input: CreateNotifierInput;
};


export type DsaMutationsRemoveNotifierArgs = {
  input: RemoveNotifierInput;
};


export type DsaMutationsUnclaimNoticesArgs = {
  input: UnclaimNoticesInput;
};


export type DsaMutationsUpdateNotifierArgs = {
  input: UpdateNotifierInput;
};

export type Datetime = {
  __typename?: 'Datetime';
  datetime: Scalars['String'];
  formatted: Scalars['String'];
  hasPassed: Scalars['Boolean'];
  inTimezone: Datetime;
  iso8061: Scalars['String'];
  mmddyyyy: Scalars['String'];
  timeSince: Timedelta;
  timeUntil: Timedelta;
  timezone: Scalars['String'];
  unix: Scalars['Int'];
};


export type DatetimeFormattedArgs = {
  fmt?: InputMaybe<Scalars['String']>;
};


export type DatetimeInTimezoneArgs = {
  identifier: Scalars['String'];
};

export type DatetimeInput = {
  fmt?: InputMaybe<Scalars['String']>;
  formatted?: InputMaybe<Scalars['String']>;
  iso8061?: InputMaybe<Scalars['String']>;
  unix?: InputMaybe<Scalars['Int']>;
};

export type DeciderKeySchema = {
  __typename?: 'DeciderKeySchema';
  decideForName: Scalars['Boolean'];
};


export type DeciderKeySchemaDecideForNameArgs = {
  name: Scalars['String'];
};

export type DedupImageLibraryHub = {
  __typename?: 'DedupImageLibraryHub';
  imageCount: Scalars['Int'];
  images: Array<DedupImageSchema>;
};


export type DedupImageLibraryHubImageCountArgs = {
  imageType: DedupImageType;
  inappropriateReasons?: InputMaybe<Array<CounterfeitReasonCode>>;
  inappropriateSubcategories?: InputMaybe<Array<TaggingViolationSubReasonCode>>;
  lastUpdateTimeEnd?: InputMaybe<DatetimeInput>;
  lastUpdateTimeStart?: InputMaybe<DatetimeInput>;
  query?: InputMaybe<Scalars['String']>;
};


export type DedupImageLibraryHubImagesArgs = {
  imageType: DedupImageType;
  inappropriateReasons?: InputMaybe<Array<CounterfeitReasonCode>>;
  inappropriateSubcategories?: InputMaybe<Array<TaggingViolationSubReasonCode>>;
  lastUpdateTimeEnd?: InputMaybe<DatetimeInput>;
  lastUpdateTimeStart?: InputMaybe<DatetimeInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<DedupImageSort>;
};

export type DedupImageSchema = {
  __typename?: 'DedupImageSchema';
  brand?: Maybe<BrandSchema>;
  counterfeitReason?: Maybe<TaggingViolationReason>;
  counterfeitSubcategory?: Maybe<TaggingViolationSubcategory>;
  createdTime: Datetime;
  id: Scalars['ObjectIdType'];
  imagePhash: Scalars['String'];
  imageType: DedupImageType;
  inappropriateReason?: Maybe<TaggingViolationReason>;
  inappropriateSubcategory?: Maybe<TaggingViolationSubcategory>;
  sampleImageUrl?: Maybe<Scalars['String']>;
  source?: Maybe<DedupSource>;
  updateTime: Datetime;
};

export type DedupImageSort = {
  field: DedupImageSortFieldType;
  order: SortOrderType;
};

export type DedupImageSortFieldType =
  | 'BRAND_NAME'
  | 'CREATED_TIME'
  | 'LAST_UPDATE';

export type DedupImageType =
  | 'INAPPROPRIATE'
  | 'IP_VIOLATION';

export type DedupSource =
  | 'AUDIT_FEEDBACK'
  | 'MANUALLY_ADDED'
  | 'MANUAL_TAG'
  | 'TAKEDOWN_REQUEST';

export type DefaultShippingInput = {
  price: CurrencyInput;
  warehouseId: Scalars['ObjectIdType'];
};

export type DefaultShippingSchema = {
  __typename?: 'DefaultShippingSchema';
  price: CurrencyValue;
  timeToDoor?: Maybe<Scalars['Int']>;
  warehouseId: Scalars['ObjectIdType'];
};

export type DeleteAllDevicesMutation = {
  __typename?: 'DeleteAllDevicesMutation';
  deletedDeviceIds?: Maybe<Array<Scalars['ObjectIdType']>>;
  deletedSessionIds?: Maybe<Array<Scalars['ObjectIdType']>>;
  error?: Maybe<Scalars['String']>;
};

export type DeleteBrandEnrollment = {
  __typename?: 'DeleteBrandEnrollment';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteBrandEnrollmentInput = {
  brandInfoId: Scalars['ObjectIdType'];
};

export type DeleteDedupImage = {
  __typename?: 'DeleteDedupImage';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteDedupImageInput = {
  imageIds: Array<Scalars['ObjectIdType']>;
};

export type DeleteDeviceInput = {
  deviceId: Scalars['ObjectIdType'];
};

export type DeleteDeviceMutation = {
  __typename?: 'DeleteDeviceMutation';
  error?: Maybe<Scalars['String']>;
};

export type DeleteMerchantSenderAddressInput = {
  merchantSenderAddressId: Scalars['ObjectIdType'];
};

export type DeleteMerchantSenderAddressMutation = {
  __typename?: 'DeleteMerchantSenderAddressMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteMerchantWarehouseInput = {
  id: Scalars['ObjectIdType'];
};

export type DeleteMerchantWarehouseMutation = {
  __typename?: 'DeleteMerchantWarehouseMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteProductPostsInput = {
  postIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
};

export type DeleteProductPostsMutation = {
  __typename?: 'DeleteProductPostsMutation';
  errorCode?: Maybe<ProductPostErrorCode>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteUin = {
  __typename?: 'DeleteUin';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteUinInput = {
  id: Scalars['ObjectIdType'];
};

export type DeleteWebhookSubscription = {
  __typename?: 'DeleteWebhookSubscription';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteWebhookSubscriptionInput = {
  subscriptionId: Scalars['ObjectIdType'];
};

export type DeliveryCarrierUpsertInput = {
  carrierId: Scalars['Int'];
  countries: Array<CountryActionInput>;
  date: Scalars['String'];
  extraCountryData?: InputMaybe<ExtraCountryDataInput>;
  reason?: InputMaybe<Scalars['String']>;
};

export type DeliveryPerformanceStats = {
  __typename?: 'DeliveryPerformanceStats';
  endDate: Datetime;
  ordersConfirmedDelivered?: Maybe<Scalars['Int']>;
  ordersConfirmedDeliveredRate?: Maybe<Scalars['Float']>;
  shippingTime?: Maybe<Timedelta>;
  startDate: Datetime;
  timeToDoor?: Maybe<Timedelta>;
};

export type DestinationShippingProfileInput = {
  destination?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  maxHoursToDoor?: InputMaybe<Scalars['Int']>;
  rate?: InputMaybe<CurrencyInput>;
  shippingDetailsPerDestination?: InputMaybe<Array<DestinationShippingProfileInput>>;
};

export type DestinationShippingProfileSchema = {
  __typename?: 'DestinationShippingProfileSchema';
  destination: Scalars['String'];
  displayName: Scalars['String'];
  enabled: Scalars['Boolean'];
  maxHoursToDoor: Scalars['Int'];
  rate: CurrencyValue;
  shippingDetailsPerDestination?: Maybe<Array<DestinationShippingProfileSchema>>;
};

export type DetailedMerchantWarningReason =
  | 'BAD_CUSTOMER_SERVICE'
  | 'BAN_EARLY_STAGE_MERCHANT'
  | 'BRANDED_PRODUCT_GEOBLOCK'
  | 'CN_PROHIBITED_PRODUCTS'
  | 'CONFIRMED_DELIVERY_POLICY'
  | 'COUNTERFEIT_GOODS'
  | 'CS_LATE_RESPONSE_RATE'
  | 'CS_LOW_CSAT_SCORE'
  | 'DECEPTIVE_FULFILLMENT'
  | 'DEP_BAIT_VARIABLE_PRICING'
  | 'DEP_FINE_DISABLE_PROMOTED_PRODUCT'
  | 'DEP_FINE_DISABLE_PROMOTED_PRODUCT_FOR_COUNTRY'
  | 'DISINGENUOUS_CUSTOMER_SERVICE'
  | 'DUPLICATE_ACCOUNTS'
  | 'DUPLICATE_PRODUCTS'
  | 'EMPTY_PACKAGES'
  | 'EXTREMELY_HIGH_PRICE_SPREAD'
  | 'FAKE_RATING'
  | 'FAKE_TRACKING'
  | 'FINAL_JUDGEMENT_ORDER'
  | 'FINE_FOR_COUNTERFEIT_GOODS'
  | 'FINE_PRODUCT_SWAPPED'
  | 'FINE_UPDATE_TO_COUNTERFEIT'
  | 'FINE_WISH_EXPRESS_POLICY_VIOLATION'
  | 'HIGH_AUTO_REFUND'
  | 'HIGH_CHARGEBACK_AND_FRAUD_REFUND_RATIO'
  | 'HIGH_CHARGEBACK_RATIO'
  | 'HIGH_GMV_FROM_GAMING_AUDIT'
  | 'HIGH_GMV_FROM_GAMING_BAN'
  | 'HIGH_GMV_FROM_GAMING_FREEZE'
  | 'HIGH_GMV_FROM_MISLEADING_PRODUCTS'
  | 'HIGH_IP_INFRINGEMENT'
  | 'HIGH_REFUND_RATIO'
  | 'HIGH_RISK_PROHIBITED_PRODUCT'
  | 'INACTIVE_ACCOUNT'
  | 'INVALID_EU_RESPONSIBLE_PERSON'
  | 'INVALID_TRACKING_NUMBERS'
  | 'LATE_CONFIRMED_FULFILLMENT_VIOLATION'
  | 'LATE_FULFILLMENT_RATE'
  | 'LEGAL_TRO_TAKEDOWN'
  | 'MERCHANT_CANCELLATION_VIOLATION'
  | 'MERCHANT_CONTACT_INFO_INVALID'
  | 'MERCHANT_HARASSMENT'
  | 'MERCHANT_HIGH_CANCEL_ORDER_RATE'
  | 'MERCHANT_HIGH_QUALITY_REFUND_RATIO'
  | 'MERCHANT_HIGH_REFUND_EAT_COST'
  | 'MISLEADING_LISTING'
  | 'MISLEADING_VARIATION'
  | 'ORDER_NOT_DELIVERED'
  | 'PENALTY_FOR_AUTO_REFUND'
  | 'POLICY_TIER_DEMOTION'
  | 'PRODUCT_GEOBLOCK'
  | 'PRODUCT_HIGH_CANCEL_ORDER_RATE'
  | 'PRODUCT_HIGH_QUALITY_REFUND_RATIO'
  | 'PRODUCT_HIGH_REFUND_RATIO'
  | 'PRODUCT_HIGH_REFUND_RATIO_NO_REMOVE'
  | 'PRODUCT_IS_INAPPROPRIATE'
  | 'PRODUCT_LOW_RATING'
  | 'PRODUCT_LOW_RATING_NO_REMOVE'
  | 'PROHIBITED_PRODUCT'
  | 'RELATED_ACCOUNT_IS_BANNED'
  | 'REPEAT_IP_INFRINGEMENT_ON_BRAND_OWNER'
  | 'REPEAT_PRODUCT_SWAPPING'
  | 'REQUEST_MONEY'
  | 'REQUEST_USER_EMAIL'
  | 'RESPOND_TO_ADMIN'
  | 'REUPLOADING_COUNTERFEITS'
  | 'STORE_VALIDATION_INCOMPLETE'
  | 'STRIKE_BASED_HIGH_RISK_PROHIBITED'
  | 'SUSPECTED_FRAUD'
  | 'TAKE_USER_OUTSIDE_WISH'
  | 'TAX_SETTING_NOT_UPDATED'
  | 'UNCONFIRMED_TRACKING_NUMBERS'
  | 'UNFULFILLED_ORDER'
  | 'US_TAX_INFO_UNVALIDATED'
  | 'VIOLATE_POLICY'
  | 'VIOLATE_TS_POLICY'
  | 'VIOLATION_OF_POLICY_TIER'
  | 'VIOLATION_OF_TERMS'
  | 'WAREHOUSE_FULFILLMENT_POLICY_VIOLATION'
  | 'WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION'
  | 'WISHPOST_NEGATIVE_BALANCE'
  | 'WISH_EXPRESS_POLICY_MERCHANT'
  | 'WISH_EXPRESS_POLICY_PRODUCT'
  | 'WISH_EXPRESS_POLICY_VIOLATION'
  | 'WISH_STANDARDS_BAN';

export type DetailedMerchantWarningReasonSchema = {
  __typename?: 'DetailedMerchantWarningReasonSchema';
  reason: DetailedMerchantWarningReason;
  text: Scalars['String'];
};

export type DetectionFactor = {
  __typename?: 'DetectionFactor';
  detectedCountry?: Maybe<Country>;
  factor: MerchantCountryDetectionFactorType;
};

export type DeviceSchema = {
  __typename?: 'DeviceSchema';
  deviceName?: Maybe<Scalars['String']>;
  firstUsed: Scalars['DateTime'];
  id: Scalars['ObjectIdType'];
  ip?: Maybe<Scalars['String']>;
  lastUsed?: Maybe<Scalars['DateTime']>;
  location?: Maybe<Scalars['String']>;
  status: DeviceStatus;
  userAgent?: Maybe<Scalars['String']>;
};

export type DeviceStatus =
  | 'ACTIVE'
  | 'CURRENT'
  | 'INACTIVE';

export type DisableBrandPartner = {
  __typename?: 'DisableBrandPartner';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DisableBrandPartnerInput = {
  brandPartnerId: Scalars['ObjectIdType'];
};

export type DisbursementScheduleInfo = {
  __typename?: 'DisbursementScheduleInfo';
  merchantFileLink?: Maybe<Scalars['String']>;
};

export type DisputeInfractionInput = {
  category?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<CurrencyInput>;
  description?: InputMaybe<Scalars['String']>;
  disputeProof?: InputMaybe<Array<FileInput>>;
  explanation?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Array<FileInput>>;
  productName?: InputMaybe<Scalars['String']>;
  retailPrice?: InputMaybe<CurrencyInput>;
  subcategory?: InputMaybe<Scalars['String']>;
  variationCount?: InputMaybe<Scalars['Int']>;
  variationsSamePrice?: InputMaybe<Scalars['Boolean']>;
  variationsSameProduct?: InputMaybe<Scalars['Boolean']>;
  vendorAddress?: InputMaybe<AddressInput>;
};

export type DisputeMessageSchema = {
  __typename?: 'DisputeMessageSchema';
  date: Datetime;
  files: Array<MerchantFileSchema>;
  message?: Maybe<Scalars['String']>;
  senderName: Scalars['String'];
  senderType: DisputeMessageSenderType;
  type: DisputeMessageType;
};

export type DisputeMessageSenderType =
  | 'ADMIN'
  | 'MERCHANT'
  | 'VIEW_ONLY';

export type DisputeMessageType =
  | 'ADMIN_COMMENT'
  | 'APPROVED'
  | 'CANCELLED'
  | 'CLOSED'
  | 'INITIATED'
  | 'PAID'
  | 'REOPEN'
  | 'REPLY';

export type DisputeNotice = {
  __typename?: 'DisputeNotice';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DisputeNoticeInput = {
  disputeDescription: Scalars['String'];
  disputeSupportFiles?: InputMaybe<Array<FileInput>>;
  noticeId: Scalars['ObjectIdType'];
  productIds: Array<Scalars['ObjectIdType']>;
};

export type DisputeReason =
  | 'AUTHORIZED_TO_SELL'
  | 'BANNED_MERCHANT'
  | 'CORRECT_SIZE'
  | 'COUNTERFEIT_ITEM'
  | 'DELIVERED_TO_WRONG_ADDRESS'
  | 'DID_NOT_ACCEPT_TOS_ON_TIME'
  | 'EPC_LAST_MILE_CARRIERS_UNABLE_TO_SHIP'
  | 'EPC_OVERSIZE'
  | 'EPC_OVERVALUE'
  | 'EPC_OVERWEIGHT'
  | 'FAKE_TRACKING'
  | 'FBS_ITEM_NOT_PICKUP'
  | 'FRAUDULENT_BEHAVIOR'
  | 'INCOMPLETE_ORDER'
  | 'ITEM_IS_DAMAGED'
  | 'ITEM_IS_DANGEROUS'
  | 'ITEM_MARKED_DELIVERED_BUT_DID_NOT_ARRIVE'
  | 'ITEM_NOT_MATCH_LISTING'
  | 'LATE_CONFIRMED_FULFILLMENT'
  | 'MERCHANT_HIGH_REFUND_EAT_COST'
  | 'MERCHANT_MANAGED_SERVICES'
  | 'MERCHANT_REPORT_FRAUD'
  | 'MERCHANT_REPORT_RETURN'
  | 'MISLEADING_PRODUCT_TAG'
  | 'NOT_DELIVERED_ON_TIME'
  | 'NOT_QUALIFIED_SHIPPING_PROVIDER'
  | 'OUT_OF_STOCK'
  | 'PRODUCT_HIGH_REFUND_RATIO'
  | 'PRODUCT_LOW_RATING'
  | 'RETURNED_TO_SENDER'
  | 'RIGHT_OF_WITHDRAWAL'
  | 'STORE_UPLOADED_INVENTORY_RETURN'
  | 'VALID_TRACKING'
  | 'WISHBLUE_EPC_LATE_FULFULLMENT';

export type DisputeReasonSchema = {
  __typename?: 'DisputeReasonSchema';
  reason: DisputeReason;
  subReason?: Maybe<DisputeSubReason>;
  subReasonText?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type DisputeSchema = {
  __typename?: 'DisputeSchema';
  refundDispute?: Maybe<RefundDisputeHub>;
  trackingDispute?: Maybe<TrackingDisputeHub>;
};

export type DisputeSort = {
  field: DisputeSortFieldType;
  order: SortOrderType;
};

export type DisputeSortFieldType =
  | 'DisputeID'
  | 'LastUpdate';

export type DisputeState =
  | 'APPROVED'
  | 'AWAITING_ADMIN'
  | 'AWAITING_MERCHANT'
  | 'CANCELLED'
  | 'CLOSED'
  | 'INVALID'
  | 'NEW'
  | 'PAID';

export type DisputeSubReason =
  | 'DID_NOT_RECEIVE_ITEM'
  | 'INCOMPLETE_ITEM'
  | 'INCORRECT_ITEM';

export type DomesticShippingInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<CurrencyInput>;
  warehouseId: Scalars['ObjectIdType'];
};

export type DomesticShippingSchema = {
  __typename?: 'DomesticShippingSchema';
  enabled: Scalars['Boolean'];
  price: CurrencyValue;
  priceEstimate: CurrencyValue;
  warehouseId: Scalars['ObjectIdType'];
};

export type DownloadAllProducts = {
  __typename?: 'DownloadAllProducts';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DownloadAllProductsCsv = {
  __typename?: 'DownloadAllProductsCSV';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DownloadAllProductsCsvInput = {
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  includeRejected?: InputMaybe<Scalars['Boolean']>;
  templateType?: InputMaybe<ProductsCsvTemplateType>;
  warehouseId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type DownloadAllProductsInput = {
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  fileType?: InputMaybe<FileType>;
  includeRejected?: InputMaybe<Scalars['Boolean']>;
  templateType?: InputMaybe<ProductsCsvTemplateType>;
  warehouseId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type DownloadEuComplianceProductLinks = {
  __typename?: 'DownloadEUComplianceProductLinks';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EprMutations = {
  __typename?: 'EPRMutations';
  acceptTos?: Maybe<AcceptTos>;
  createUin?: Maybe<CreateUin>;
  deleteUin?: Maybe<DeleteUin>;
  updateUin?: Maybe<UpdateUin>;
};


export type EprMutationsAcceptTosArgs = {
  input: AcceptTosInput;
};


export type EprMutationsCreateUinArgs = {
  input: CreateUinInput;
};


export type EprMutationsDeleteUinArgs = {
  input: DeleteUinInput;
};


export type EprMutationsUpdateUinArgs = {
  input: UpdateUinInput;
};

export type EprNonCompliantSummaryRecordSchema = {
  __typename?: 'EPRNonCompliantSummaryRecordSchema';
  country: Country;
  eprCategoryName: Scalars['String'];
  nonCompliantProductCount: Scalars['Int'];
};

export type EprNonCompliantSummarySchema = {
  __typename?: 'EPRNonCompliantSummarySchema';
  productRecordTotal: Scalars['Int'];
  productRecords: Array<EprProductRecordSchema>;
  summaryRecords: Array<EprNonCompliantSummaryRecordSchema>;
};


export type EprNonCompliantSummarySchemaProductRecordTotalArgs = {
  countryCode: CountryCode;
  eprCategories?: InputMaybe<Array<Scalars['Int']>>;
  productId?: InputMaybe<Scalars['String']>;
};


export type EprNonCompliantSummarySchemaProductRecordsArgs = {
  countryCode: CountryCode;
  eprCategories?: InputMaybe<Array<Scalars['Int']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['String']>;
  sortDesc?: InputMaybe<Scalars['Boolean']>;
};

export type EprProductRecordSchema = {
  __typename?: 'EPRProductRecordSchema';
  country: Country;
  eprCategoryNames: Array<Scalars['String']>;
  productId: Scalars['ObjectIdType'];
  taxonomyCategoryNames: Array<Scalars['String']>;
};

export type EprStatus =
  | 'ADMIN_APPROVED'
  | 'COMPLETE'
  | 'DELETED'
  | 'IN_REVIEW'
  | 'REJECTED';

export type EuComplianceAddressInput = {
  city: Scalars['String'];
  countryCode?: InputMaybe<EuComplianceResponsiblePersonCountriesAndRegionsCode>;
  county?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  neighborhood?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  state: Scalars['String'];
  streetAddress1: Scalars['String'];
  streetAddress2?: InputMaybe<Scalars['String']>;
  streetAddress3?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type EuComplianceMutations = {
  __typename?: 'EUComplianceMutations';
  downloadProductLinks?: Maybe<DownloadEuComplianceProductLinks>;
  upsertLink?: Maybe<UpsertLinkProductCompliance>;
  upsertResponsiblePerson?: Maybe<UpsertResponsiblePerson>;
};


export type EuComplianceMutationsUpsertLinkArgs = {
  input?: InputMaybe<LinkProductComplianceUpsertInput>;
};


export type EuComplianceMutationsUpsertResponsiblePersonArgs = {
  input?: InputMaybe<ResponsiblePersonUpsertInput>;
};

export type EuComplianceResponsiblePersonCountriesAndRegions = {
  __typename?: 'EUComplianceResponsiblePersonCountriesAndRegions';
  code: EuComplianceResponsiblePersonCountriesAndRegionsCode;
  name: Scalars['String'];
};

export type EuComplianceResponsiblePersonCountriesAndRegionsCode =
  | 'AT'
  | 'BE'
  | 'BG'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DK'
  | 'EE'
  | 'ES'
  | 'FI'
  | 'FR'
  | 'GR'
  | 'HR'
  | 'HU'
  | 'IE'
  | 'IS'
  | 'IT'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'MT'
  | 'NIE'
  | 'NL'
  | 'NO'
  | 'PL'
  | 'PT'
  | 'RO'
  | 'SE'
  | 'SI'
  | 'SK';

export type EuProductComplianceCategory =
  | 'CHEMICAL'
  | 'COSMETICS'
  | 'EEE'
  | 'ENVIRONMENT'
  | 'FOOD'
  | 'OTHER'
  | 'TOYS';

export type EuvatRegistrationFieldsInput = {
  countryCode: CountryCode;
  vatNumber: Scalars['String'];
};

export type EuvatSchema = {
  __typename?: 'EUVATSchema';
  invoiceAmount?: Maybe<CurrencyValue>;
  shippingPrice?: Maybe<CurrencyValue>;
};


export type EuvatSchemaInvoiceAmountArgs = {
  inAuthorityCurrency?: InputMaybe<Scalars['Boolean']>;
};


export type EuvatSchemaShippingPriceArgs = {
  inAuthorityCurrency?: InputMaybe<Scalars['Boolean']>;
};

export type EuvatTaxMutations = {
  __typename?: 'EUVATTaxMutations';
  uploadVatTaxQuestionnaire?: Maybe<UploadEuvatTaxQuestionnaire>;
};


export type EuvatTaxMutationsUploadVatTaxQuestionnaireArgs = {
  input: EuvatTaxQuestionnaireInput;
};

export type EuvatTaxQuestionnaireAddressInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  countryCode: CountryCode;
  state: Scalars['String'];
  zipcode: Scalars['String'];
};

export type EuvatTaxQuestionnaireInput = {
  businessAddress?: InputMaybe<EuvatTaxQuestionnaireAddressInput>;
  businessAddressInEu?: InputMaybe<Scalars['Boolean']>;
  businessRegistrationNumber?: InputMaybe<Scalars['String']>;
  employPersonnelInEu?: InputMaybe<Scalars['Boolean']>;
  euVatRegistration?: InputMaybe<EuvatRegistrationFieldsInput>;
  fileUrl?: InputMaybe<Scalars['String']>;
  registeredWithTradeRegistryInEu?: InputMaybe<Scalars['Boolean']>;
  subjectToTaxInEu?: InputMaybe<Scalars['Boolean']>;
};

export type EuvatTaxSchema = {
  __typename?: 'EUVATTaxSchema';
  euVatEntityStatus?: Maybe<CommerceMerchantEuEntityStatus>;
  euVatSelfRemittanceEligible?: Maybe<Scalars['Boolean']>;
};

export type EditAddressInput = {
  address: AddressInput;
  orderId: Scalars['ObjectIdType'];
};

export type EditOriginAddresses = {
  __typename?: 'EditOriginAddresses';
  errorMessages?: Maybe<Array<AddressUpdateError>>;
  updatedCount: Scalars['Int'];
};

export type EditShippingAddresses = {
  __typename?: 'EditShippingAddresses';
  errorMessages?: Maybe<Array<AddressUpdateError>>;
  updatedCount: Scalars['Int'];
};

export type EditTrademarkInput = {
  id: Scalars['ObjectIdType'];
  location: BrandPartnerCountryAndRegionCode;
  registrationDocs?: InputMaybe<Array<FileInput>>;
  registrationNumber: Scalars['String'];
  registrationUrl?: InputMaybe<Scalars['String']>;
  type: BrandPartnerTrademarkType;
};

export type EditTrademarksAndBrandInfo = {
  __typename?: 'EditTrademarksAndBrandInfo';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditTrademarksAndBrandInfoInput = {
  brandInfoId: Scalars['ObjectIdType'];
  brandOwnerName?: InputMaybe<Scalars['String']>;
  brandRepName?: InputMaybe<Scalars['String']>;
  brandRepTitle?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  isNewBrand: Scalars['Boolean'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  proofOfAuthorizations?: InputMaybe<Array<FileInput>>;
  proposedBrandId?: InputMaybe<Scalars['ObjectIdType']>;
  providedBrandAdditionalInfo?: InputMaybe<Scalars['String']>;
  providedBrandLogoFile?: InputMaybe<FileInput>;
  providedBrandName: Scalars['String'];
  providedBrandWebsite?: InputMaybe<Scalars['String']>;
  trademarks: Array<EditTrademarkInput>;
};

export type EligibleProductInfo = {
  __typename?: 'EligibleProductInfo';
  product: ProductSchema;
  variations: Array<VariationSchema>;
};

export type EntityTypes =
  | 'COMPANY'
  | 'INDIVIDUAL';

export type ErrorCode =
  | 'ERROR_CODE_BOTH_PRODUCT_ID_AND_L1_CATEGORY_ID_SPECIFIED'
  | 'ERROR_CODE_INTERNAL_SERVER_ERROR'
  | 'ERROR_CODE_INVALID_L1_CATEGORY'
  | 'ERROR_CODE_INVALID_MERCHANT_ID'
  | 'ERROR_CODE_INVALID_PRODUCT_ID'
  | 'ERROR_CODE_MERCHANT_LISTING_INSIGHTS_UNAVAILABLE'
  | 'ERROR_CODE_MERCHANT_PERFORMANCE_UNAVAILABLE'
  | 'ERROR_CODE_NO_PRODUCT_ID_OR_L1_CATEGORY_ID_SPECIFIED'
  | 'ERROR_CODE_RATE_LIMIT'
  | 'ERROR_CODE_UNSPECIFIED';

export type EverCBrandCreateBrand = {
  __typename?: 'EverCBrandCreateBrand';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EverCBrandDeleteBrand = {
  __typename?: 'EverCBrandDeleteBrand';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EverCBrandMutations = {
  __typename?: 'EverCBrandMutations';
  createBrand?: Maybe<EverCBrandCreateBrand>;
  deleteBrand?: Maybe<EverCBrandDeleteBrand>;
  updateBrand?: Maybe<EverCBrandUpdateBrand>;
};


export type EverCBrandMutationsCreateBrandArgs = {
  input: EvercBrandUpsertBrandInput;
};


export type EverCBrandMutationsDeleteBrandArgs = {
  input: EvercBrandDeleteBrandInput;
};


export type EverCBrandMutationsUpdateBrandArgs = {
  input: EvercBrandUpsertBrandInput;
};

export type EverCBrandSchema = {
  __typename?: 'EverCBrandSchema';
  displayName: Scalars['String'];
  id: Scalars['ObjectIdType'];
  name: Scalars['String'];
  rightsHolderNames: Array<Scalars['String']>;
};

export type EverCBrandUpdateBrand = {
  __typename?: 'EverCBrandUpdateBrand';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EvercBrandDeleteBrandInput = {
  evercBrandId: Scalars['ObjectIdType'];
};

export type EvercBrandUpsertBrandInput = {
  displayName?: InputMaybe<Scalars['String']>;
  evercBrandId?: InputMaybe<Scalars['ObjectIdType']>;
  rightsHolders?: InputMaybe<Array<Scalars['String']>>;
  wishBrandId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type ExistingSellingLocations =
  | 'NONE'
  | 'ONLINE'
  | 'ONLINE_AND_RETAIL'
  | 'RETAIL';

export type ExpSchema = {
  __typename?: 'ExpSchema';
  bucket: Scalars['String'];
};


export type ExpSchemaBucketArgs = {
  name: Scalars['String'];
};

export type ExpireWhitelistProductsInput = {
  merchantId: Scalars['ObjectIdType'];
  productIds: Array<Scalars['ObjectIdType']>;
};

export type ExpireWhitelistProductsMutation = {
  __typename?: 'ExpireWhitelistProductsMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ExtendedProducerResponsibilitySchema = {
  __typename?: 'ExtendedProducerResponsibilitySchema';
  countries: Array<CountryEprSchema>;
  country: CountryEprSchema;
  eprNonCompliantSummary: EprNonCompliantSummarySchema;
};


export type ExtendedProducerResponsibilitySchemaCountryArgs = {
  countryCode: CountryCode;
};

export type ExternalBoostAttributedStats = {
  __typename?: 'ExternalBoostAttributedStats';
  gmv: CurrencyValue;
  orders: Scalars['Int'];
};

export type ExternalBoostChargingMethod =
  | 'CPA'
  | 'CPC';

export type ExtraCountryDataInput = {
  swedenDeliveredCarrierTypes: Array<SwedenDeliveredCarrierType>;
};

export type ExtractionResultInput = {
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type FbwInventorySchema = {
  __typename?: 'FBWInventorySchema';
  activeInventory: Scalars['Int'];
  pendingInventory: Scalars['Int'];
  shippingType: WarehouseShippingType;
  warehouse: FbwWarehouseSchema;
};

export type FbwRegion =
  | 'CN'
  | 'EU'
  | 'EU_UNBONDED'
  | 'US';

export type FbwWarehouseSchema = {
  __typename?: 'FBWWarehouseSchema';
  address: AddressSchema;
  code: Scalars['String'];
  estimatedFulfillTime: Timedelta;
  feeLink: Scalars['String'];
  id: Scalars['ObjectIdType'];
  maxWeight: Weight;
  name: Scalars['String'];
  region: FbwRegion;
};

export type FpProductStateAttributeSchema = {
  __typename?: 'FPProductStateAttributeSchema';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type FpProductStateCondition =
  | 'NEW'
  | 'REFURBISHED'
  | 'USED';

export type FpProductStateCountryShippingSchema = {
  __typename?: 'FPProductStateCountryShippingSchema';
  destination: Scalars['String'];
  isEnabled?: Maybe<Scalars['Boolean']>;
  maxDeliveryDays?: Maybe<Scalars['Int']>;
  overrides?: Maybe<Array<FpProductStateRegionShippingSchema>>;
  price?: Maybe<CurrencyValue>;
};

export type FpProductStateDefaultShippingSchema = {
  __typename?: 'FPProductStateDefaultShippingSchema';
  price: CurrencyValue;
  warehouseId: Scalars['ObjectIdType'];
};

export type FpProductStateImageSchema = {
  __typename?: 'FPProductStateImageSchema';
  id: Scalars['Int'];
  isCleanImage?: Maybe<Scalars['Boolean']>;
  removed?: Maybe<Scalars['Boolean']>;
  wishUrl?: Maybe<Scalars['String']>;
};

export type FpProductStateInventorySchema = {
  __typename?: 'FPProductStateInventorySchema';
  count: Scalars['Int'];
  warehouseId: Scalars['ObjectIdType'];
};

export type FpProductStateRegionShippingSchema = {
  __typename?: 'FPProductStateRegionShippingSchema';
  destination: Scalars['String'];
  isEnabled?: Maybe<Scalars['Boolean']>;
  maxDeliveryDays?: Maybe<Scalars['Int']>;
  price?: Maybe<CurrencyValue>;
  useCountryShippingPrice?: Maybe<Scalars['Boolean']>;
};

export type FpProductStateSchema = {
  __typename?: 'FPProductStateSchema';
  attributes?: Maybe<Array<FpProductStateAttributeSchema>>;
  brandId?: Maybe<Scalars['ObjectIdType']>;
  chemicalNames?: Maybe<Array<Scalars['String']>>;
  condition?: Maybe<FpProductStateCondition>;
  defaultShipping?: Maybe<Array<FpProductStateDefaultShippingSchema>>;
  description?: Maybe<Scalars['String']>;
  extraImages?: Maybe<Array<FpProductStateImageSchema>>;
  mainImage?: Maybe<FpProductStateImageSchema>;
  maxQuantity?: Maybe<Scalars['Int']>;
  msrp?: Maybe<CurrencyValue>;
  name?: Maybe<Scalars['String']>;
  parentSku?: Maybe<Scalars['String']>;
  referenceUnit?: Maybe<UnitCombined>;
  referenceValue?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Scalars['String']>>;
  variations?: Maybe<Array<FpProductStateVariationSchema>>;
  warehouseToShippings?: Maybe<Array<FpProductStateWarehouseToShippingSchema>>;
  warningType?: Maybe<FpProductStateWarningType>;
};

export type FpProductStateVariationSchema = {
  __typename?: 'FPProductStateVariationSchema';
  color?: Maybe<Scalars['String']>;
  customsHsCode?: Maybe<Scalars['String']>;
  declaredLocalName?: Maybe<Scalars['String']>;
  declaredName?: Maybe<Scalars['String']>;
  declaredValue?: Maybe<CurrencyValue>;
  enabled?: Maybe<Scalars['Boolean']>;
  gtin?: Maybe<Scalars['String']>;
  hasBattery?: Maybe<Scalars['Boolean']>;
  hasLiquid?: Maybe<Scalars['Boolean']>;
  hasMetal?: Maybe<Scalars['Boolean']>;
  hasPowder?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Length>;
  id: Scalars['ObjectIdType'];
  image?: Maybe<FpProductStateImageSchema>;
  inventory?: Maybe<Array<FpProductStateInventorySchema>>;
  length?: Maybe<Length>;
  originCountry?: Maybe<Country>;
  pieces?: Maybe<Scalars['Int']>;
  price?: Maybe<CurrencyValue>;
  productId: Scalars['String'];
  size?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  weight?: Maybe<Weight>;
  width?: Maybe<Length>;
};

export type FpProductStateWarehouseToShippingSchema = {
  __typename?: 'FPProductStateWarehouseToShippingSchema';
  shippingDetails: Array<FpProductStateCountryShippingSchema>;
  warehouseId: Scalars['String'];
};

export type FpProductStateWarningType =
  | 'CHEMICAL'
  | 'DEP_PASSENGER_OFF_ROAD_VEHICLE'
  | 'DEP_RECREATIONAL_VESSEL'
  | 'DIESEL_ENGINE'
  | 'FOOD'
  | 'FURNITURE'
  | 'ON_PRODUCT_CANCER'
  | 'ON_PRODUCT_COMBINED_CANCER_REPRODUCTIVE'
  | 'ON_PRODUCT_REPRODUCTIVE'
  | 'RAW_WOOD';

export type FactoryMerchantConversionInput = {
  userId: Scalars['String'];
};

export type FactoryToMerchantConversionMutation = {
  __typename?: 'FactoryToMerchantConversionMutation';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type FactoryUserMutations = {
  __typename?: 'FactoryUserMutations';
  convertFactoryToMerchant: FactoryToMerchantConversionMutation;
  convertMerchantToFactory: MerchantToFactoryConversionMutation;
};


export type FactoryUserMutationsConvertFactoryToMerchantArgs = {
  input: FactoryMerchantConversionInput;
};


export type FactoryUserMutationsConvertMerchantToFactoryArgs = {
  input: FactoryMerchantConversionInput;
};

export type FeedProcessingWorkflowSchema = {
  __typename?: 'FeedProcessingWorkflowSchema';
  blockingReason?: Maybe<Scalars['String']>;
  createdAt: Datetime;
  id: Scalars['String'];
  isMainImageBlankError: Scalars['Boolean'];
  originalState?: Maybe<FpProductStateSchema>;
  reviewStatus: CommerceProductFpReviewStatus;
  upsertState?: Maybe<FpProductStateSchema>;
};

export type FileDataSchema = {
  __typename?: 'FileDataSchema';
  fileName: Scalars['String'];
  fileUrl: Scalars['String'];
  merchantFileId: Scalars['String'];
  pictureType: PictureType;
};

export type FileInput = {
  fileName: Scalars['String'];
  url: Scalars['String'];
};

export type FileType =
  | 'CSV'
  | 'XLSX';

export type FilledCannedResponseSearchType =
  | 'COMMERCE_TICKET_ID'
  | 'DISPUTE_ID'
  | 'TRACKING_DISPUTE_ID';

export type FilledCannedResponseTextSchema = {
  __typename?: 'FilledCannedResponseTextSchema';
  customizations: Array<Scalars['String']>;
  text: Scalars['String'];
};

export type FinalSaleCategory =
  | 'ADULT_TOYS'
  | 'FOOD_AND_BEVERAGES'
  | 'HOUSEHOLD_SUPPLIES'
  | 'MAKEUP_AND_BEAUTY'
  | 'OTC_MEDICATION'
  | 'PET_FOOD'
  | 'PLANT_AND_PLANT_SEEDS'
  | 'VITAMINS_AND_SUPPLEMENTS';

export type FinalSaleCategorySchema = {
  __typename?: 'FinalSaleCategorySchema';
  category: FinalSaleCategory;
  description: Scalars['String'];
  finalSaleEnabled: Scalars['Boolean'];
  name: Scalars['String'];
  totalProducts: Scalars['Int'];
};

export type FineReason =
  | 'B2B_SALE_FEE'
  | 'CN_ORDER_NOT_SHIP_WITH_WISHPOST'
  | 'CN_PROHIBITED_PRODUCTS'
  | 'COLLECTIONS_BOOST_CAMPAIGN_FEE'
  | 'CONSOLIDATE_MP_FINE'
  | 'DECEPTIVE_FULFILLMENT'
  | 'DEP_INFRACTION'
  | 'EARLY_PAYMENT_DEDUCTION'
  | 'EXTERNAL_BOOST_CPA_FEE'
  | 'EXTERNAL_BOOST_FEE'
  | 'FAKE_RATING'
  | 'FAKE_TRACKING'
  | 'FBW_FEE'
  | 'INVALID_EU_RESPONSIBLE_PERSON'
  | 'IP_INFRINGEMENT'
  | 'LATE_CONFIRMED_FULFILLMENT'
  | 'LCL_FBW_FEE'
  | 'LEGAL_SETTLEMENT'
  | 'LEGAL_SETTLEMENT_PAID'
  | 'LEGAL_SETTLEMENT_RESERVED'
  | 'LOGISTIC_FEE'
  | 'MERCHANT_CANCELLATION'
  | 'MERCHANT_HARASSMENT'
  | 'MERCHANT_INCENTIVE'
  | 'MISLEADING_LISTING'
  | 'MISLEADING_LISTING_AUTHENTIC_BRAND'
  | 'MISLEADING_VARIATION'
  | 'ONEOFF'
  | 'ONEOFF_FEE'
  | 'PAID_PLACEMENT_ENROLLMENT_FEE'
  | 'PAID_PLACEMENT_IMPRESSION_FEE'
  | 'POLICY_VIOLATION'
  | 'PRODUCT_LISTING_FEE'
  | 'PRODUCT_SWAPPED'
  | 'PROHIBITED_PRODUCT_FINE'
  | 'PROMOTED_PRODUCT_DISABLE_FINE'
  | 'PROMOTION_FEE'
  | 'QUALITY_REFUND_FINE'
  | 'REPEAT_IP_INFRINGEMENT'
  | 'RETURN_LABEL_FEE'
  | 'SE_CASH_BACK'
  | 'STORE_PAYMENT_CANCELLATION'
  | 'STORE_PAYMENT_DEDUCTION'
  | 'UNCONFIRMED_CARRIER'
  | 'UNFULFILLED_ORDER'
  | 'UNREASONABLE_PRICE_GAUGE'
  | 'WISHPOST_ADJUSTMENT_DEDUCTION'
  | 'WISHPOST_FULFILLMENT_FEE'
  | 'WISHPOST_LOGISTICS_FEE'
  | 'WISH_EXPRESS_VIOLATION'
  | 'WISH_EXPRESS_WITHHELD_ORDER'
  | 'WISH_PARCEL_SERVICE_ADJUST_FEE'
  | 'WISH_PARCEL_SERVICE_FEE'
  | 'WITHHOLD_FUND';

export type FlatRateShippingCountryCandidate = {
  __typename?: 'FlatRateShippingCountryCandidate';
  country: Country;
  price: CurrencyValue;
};

export type FlexibleBudgetSchema = {
  __typename?: 'FlexibleBudgetSchema';
  enabled: Scalars['Boolean'];
  type: MarketingFlexibleBudgetType;
};

export type FloorBidsSchema = {
  __typename?: 'FloorBidsSchema';
  bidPrice: CurrencyValue;
  date: Datetime;
  trueTag: TrueTagSchema;
  trueTagId: Scalars['ObjectIdType'];
};

export type ForceApproveProduct = {
  __typename?: 'ForceApproveProduct';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ForceApproveProductInput = {
  productId: Scalars['ObjectIdType'];
};

export type FranceComplianceMutations = {
  __typename?: 'FranceComplianceMutations';
  upsertLink?: Maybe<UpsertFranceLinkProductCompliance>;
  upsertUin?: Maybe<UpsertFranceProductUniqueIdentificationNumber>;
};


export type FranceComplianceMutationsUpsertLinkArgs = {
  input: UpsertFranceLinkProductComplianceInput;
};


export type FranceComplianceMutationsUpsertUinArgs = {
  input?: InputMaybe<FranceProductUniqueIdentificationNumberUpsertInput>;
};

export type FranceProductUniqueIdentificationNumberAction =
  | 'CREATE'
  | 'DELETE'
  | 'UPDATE';

export type FranceProductUniqueIdentificationNumberCategory =
  | 'BATTERIES'
  | 'ELECTRIC_AND_ELECTRONIC_EQUIPMENTS'
  | 'FURNITURE'
  | 'PAPER'
  | 'PRIMARY_PACKAGING'
  | 'SECONDARY_PACKAGING'
  | 'TEXTILE'
  | 'TIRES';

export type FranceProductUniqueIdentificationNumberSchema = {
  __typename?: 'FranceProductUniqueIdentificationNumberSchema';
  category?: Maybe<FranceProductUniqueIdentificationNumberCategory>;
  id: Scalars['ObjectIdType'];
  linkCount: Scalars['Int'];
  merchant: MerchantSchema;
  productResponsibilityOrganization: Scalars['String'];
  status?: Maybe<FranceProductUniqueIdentificationNumberStatus>;
  uniqueIdentificationNumber: Scalars['String'];
};

export type FranceProductUniqueIdentificationNumberStatus =
  | 'ADMIN_APPROVED'
  | 'COMPLETE'
  | 'DELETED'
  | 'INREVIEW'
  | 'REJECTED';

export type FranceProductUniqueIdentificationNumberUpsertInput = {
  action: FranceProductUniqueIdentificationNumberAction;
  category?: InputMaybe<FranceProductUniqueIdentificationNumberCategory>;
  productResponsibilityOrganization?: InputMaybe<Scalars['String']>;
  uinId?: InputMaybe<Scalars['ObjectIdType']>;
  uniqueIdentificationNumber?: InputMaybe<Scalars['String']>;
};

export type FreezeReversalType =
  | 'FINE_PAYMENT_ONLY'
  | 'FINE_REVERSAL_AND_PAYMENT'
  | 'FINE_REVERSAL_ONLY';

export type FulfillOrderInput = {
  orderId: Scalars['ObjectIdType'];
  originCountryCode: CountryCode;
  providerId: Scalars['Int'];
  shipNote?: InputMaybe<Scalars['String']>;
  trackingId: Scalars['String'];
};

export type FulfillOrders = {
  __typename?: 'FulfillOrders';
  errorMessages?: Maybe<Array<FulfillmentError>>;
  reusedTracking: Scalars['Boolean'];
  shippedCount: Scalars['Int'];
};

export type FulfilledByWishMutations = {
  __typename?: 'FulfilledByWishMutations';
  createShippingPlan?: Maybe<CreateShippingPlan>;
};


export type FulfilledByWishMutationsCreateShippingPlanArgs = {
  input: ShippingPlanInput;
};

export type FulfilledByWishSchema = {
  __typename?: 'FulfilledByWishSchema';
  actionRequiredShippingPlans?: Maybe<Scalars['Int']>;
  lowInventoryCount?: Maybe<Scalars['Int']>;
  totalActionRequired?: Maybe<Scalars['Int']>;
};

export type FulfillmentCsvSchema = {
  __typename?: 'FulfillmentCSVSchema';
  optionalColumns: Array<OrderCsvColumnSchema>;
  requiredColumns: Array<OrderCsvColumnSchema>;
};

export type FulfillmentError = {
  __typename?: 'FulfillmentError';
  message: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
};

export type FulfillmentMutation = {
  __typename?: 'FulfillmentMutation';
  actionRequiredOrdersCsvDownload: ActionRequiredOrdersCsvDownload;
  cancelWpsTrackingId: CancelWpsTrackingIdMutation;
  editOriginAddresses: EditOriginAddresses;
  editShippingAddresses: EditShippingAddresses;
  fulfillOrders: FulfillOrders;
  fulfillOrdersFromCsv: FulfillmentOrdersFromCsv;
  generateTestOrders?: Maybe<GenerateTestOrders>;
  modifyTrackingOrders: ModifyTrackingOrders;
  modifyWpsTrackingId: ModifyWpsTrackingIdMutation;
  ordersCsvDownload: OrdersCsvDownload;
  refundOrders: RefundOrders;
  selectWpsShippingOption: SelectWpsShippingOptionMutation;
  setWpsPackageType: SetWpsPackageTypeMutation;
  updateDeliveryConfirmation: UpdateOrderDeliveryConfirmation;
};


export type FulfillmentMutationActionRequiredOrdersCsvDownloadArgs = {
  input: ActionRequiredOrdersCsvDownloadInput;
};


export type FulfillmentMutationCancelWpsTrackingIdArgs = {
  input: CancelWpsTrackingIdInput;
};


export type FulfillmentMutationEditOriginAddressesArgs = {
  input: Array<EditAddressInput>;
};


export type FulfillmentMutationEditShippingAddressesArgs = {
  input: Array<EditAddressInput>;
};


export type FulfillmentMutationFulfillOrdersArgs = {
  input: Array<FulfillOrderInput>;
};


export type FulfillmentMutationFulfillOrdersFromCsvArgs = {
  input: FulfillmentOrdersFromCsvInput;
};


export type FulfillmentMutationGenerateTestOrdersArgs = {
  input: GenerateTestOrdersInput;
};


export type FulfillmentMutationModifyTrackingOrdersArgs = {
  input: Array<ModifyTrackingOrderInput>;
};


export type FulfillmentMutationModifyWpsTrackingIdArgs = {
  input: ModifyWpsTrackingIdInput;
};


export type FulfillmentMutationOrdersCsvDownloadArgs = {
  input: OrdersCsvDownloadInput;
};


export type FulfillmentMutationRefundOrdersArgs = {
  input: Array<RefundOrderInput>;
};


export type FulfillmentMutationSelectWpsShippingOptionArgs = {
  input: SelectWpsShippingOptionInput;
};


export type FulfillmentMutationSetWpsPackageTypeArgs = {
  input: SetWpsPackageTypeInput;
};


export type FulfillmentMutationUpdateDeliveryConfirmationArgs = {
  input: UpdateOrderDeliveryConfirmationInput;
};

export type FulfillmentOrdersFromCsv = {
  __typename?: 'FulfillmentOrdersFromCsv';
  errorMessage?: Maybe<Scalars['String']>;
  jobUrl?: Maybe<Scalars['String']>;
  status?: Maybe<MerchantFeedJobStatus>;
};

export type FulfillmentOrdersFromCsvInput = {
  columnIdList: Array<Scalars['String']>;
  csvDelimiter: Scalars['String'];
  fileUrl: Scalars['String'];
};

export type FulfillmentSchema = {
  __typename?: 'FulfillmentSchema';
  actionRequiredOrderCount?: Maybe<Scalars['Int']>;
  actionRequiredOrders?: Maybe<Array<OrderSchema>>;
  actionRequiredOrdersCsvUrl?: Maybe<Scalars['String']>;
  bulkJobs?: Maybe<Array<CsvFulfillmentJobSchema>>;
  csvFulfillmentJobsCount?: Maybe<Scalars['Int']>;
  fulfillmentCsv?: Maybe<FulfillmentCsvSchema>;
  historicalOrders?: Maybe<Array<OrderSchema>>;
  order?: Maybe<OrderSchema>;
  orders?: Maybe<Array<OrderSchema>>;
  ordersCount?: Maybe<Scalars['Int']>;
  ordersCsvUrl?: Maybe<Scalars['String']>;
  wpsShippingOptions?: Maybe<WpsGetShippingOptionsSchema>;
};


export type FulfillmentSchemaActionRequiredOrderCountArgs = {
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ActionRequiredSearchType>;
  wishExpress?: InputMaybe<Scalars['Boolean']>;
};


export type FulfillmentSchemaActionRequiredOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ActionRequiredSearchType>;
  sort?: InputMaybe<ActionRequiredSort>;
  wishExpress?: InputMaybe<Scalars['Boolean']>;
};


export type FulfillmentSchemaActionRequiredOrdersCsvUrlArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ActionRequiredSearchType>;
  sort?: InputMaybe<ActionRequiredSort>;
  wishExpress?: InputMaybe<Scalars['Boolean']>;
};


export type FulfillmentSchemaBulkJobsArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
};


export type FulfillmentSchemaHistoricalOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<OrderHistorySearchType>;
  sort?: InputMaybe<OrderHistorySort>;
  wishExpress?: InputMaybe<Scalars['Boolean']>;
};


export type FulfillmentSchemaOrderArgs = {
  id: Scalars['String'];
};


export type FulfillmentSchemaOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<OrderHistorySearchType>;
  sort?: InputMaybe<OrderHistorySort>;
  states?: InputMaybe<Array<CommerceTransactionState>>;
  wishExpress?: InputMaybe<Scalars['Boolean']>;
};


export type FulfillmentSchemaOrdersCountArgs = {
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<OrderHistorySearchType>;
  states?: InputMaybe<Array<CommerceTransactionState>>;
  wishExpress?: InputMaybe<Scalars['Boolean']>;
};


export type FulfillmentSchemaOrdersCsvUrlArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<OrderHistorySearchType>;
  sort?: InputMaybe<OrderHistorySort>;
  wishExpress?: InputMaybe<Scalars['Boolean']>;
};


export type FulfillmentSchemaWpsShippingOptionsArgs = {
  orderId: Scalars['String'];
};

export type GbVatEntityType =
  | 'HAVE_OBLIGATION'
  | 'NOT_APPLICABLE'
  | 'NO_OBLIGATION';

export type GcpeListingReviewSchema = {
  __typename?: 'GCPEListingReviewSchema';
  datetimeCompleted?: Maybe<Datetime>;
  datetimeQueued: Datetime;
  mainImageUrl: Scalars['String'];
  oldMainImageUrl?: Maybe<Scalars['String']>;
  oldProductName?: Maybe<Scalars['String']>;
  productId: Scalars['ObjectIdType'];
  productName: Scalars['String'];
  reviewId: Scalars['ObjectIdType'];
};

export type GenWechatQrInput = {
  scene?: InputMaybe<Scalars['String']>;
};

export type GenWechatQrMutation = {
  __typename?: 'GenWechatQrMutation';
  ticket?: Maybe<Scalars['String']>;
};

export type Gender =
  | 'FEMALE'
  | 'MALE'
  | 'NEUTRAL'
  | 'UNKNOWN';

export type GeneralTaggingManagement = {
  __typename?: 'GeneralTaggingManagement';
  localToLocalAllowedSubcategories?: Maybe<Array<TaggingViolationSubcategory>>;
  taxonomyCategory?: Maybe<TaxonomyCategorySchema>;
};


export type GeneralTaggingManagementTaxonomyCategoryArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  treeVersion?: InputMaybe<Scalars['String']>;
};

export type GenerateTestOrders = {
  __typename?: 'GenerateTestOrders';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GenerateTestOrdersInput = {
  country?: InputMaybe<CountryCode>;
  logisticsOption: GenerateTestOrdersLogisticsOptions;
  productId?: InputMaybe<Scalars['ObjectIdType']>;
  quantity?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  variationId?: InputMaybe<Scalars['ObjectIdType']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type GenerateTestOrdersLogisticsOptions =
  | 'ADVANCED_LOGISTICS'
  | 'CONFIRMED_DELIVERY_POLICY'
  | 'LESS_THAN_TRUCKLOAD'
  | 'NONE'
  | 'OPTIONAL_ADVANCED_LOGISTICS'
  | 'RANDOM'
  | 'WISH_EXPRESS';

export type GenerateVideoInput = {
  slides?: InputMaybe<Array<VideoSlideSpec>>;
};

export type GenerateVideoMutation = {
  __typename?: 'GenerateVideoMutation';
  ok?: Maybe<Scalars['Boolean']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type GeoCoordinates = {
  __typename?: 'GeoCoordinates';
  latitude: Scalars['String'];
  longitude: Scalars['String'];
};

export type GermanyComplianceMutations = {
  __typename?: 'GermanyComplianceMutations';
  upsertLink?: Maybe<UpsertGermanyLinkProductCompliance>;
  upsertUin?: Maybe<UpsertGermanyProductUniqueIdentificationNumber>;
};


export type GermanyComplianceMutationsUpsertLinkArgs = {
  input: UpsertGermanyLinkProductComplianceInput;
};


export type GermanyComplianceMutationsUpsertUinArgs = {
  input?: InputMaybe<GermanyProductUniqueIdentificationNumberUpsertInput>;
};

export type GermanyProductUniqueIdentificationNumberAction =
  | 'CREATE'
  | 'DELETE'
  | 'UPDATE';

export type GermanyProductUniqueIdentificationNumberCategory =
  | 'BATTERIES'
  | 'ELECTRIC_AND_ELECTRONIC_EQUIPMENTS'
  | 'PACKAGING';

export type GermanyProductUniqueIdentificationNumberSchema = {
  __typename?: 'GermanyProductUniqueIdentificationNumberSchema';
  category?: Maybe<GermanyProductUniqueIdentificationNumberCategory>;
  eprNumber: Scalars['String'];
  id: Scalars['ObjectIdType'];
  linkCount: Scalars['Int'];
  merchant: MerchantSchema;
  organizationOrRepresentativeName?: Maybe<Scalars['String']>;
  status?: Maybe<GermanyProductUniqueIdentificationNumberStatus>;
  updateTime?: Maybe<Datetime>;
};

export type GermanyProductUniqueIdentificationNumberStatus =
  | 'ADMIN_APPROVED'
  | 'COMPLETE'
  | 'DELETED'
  | 'INREVIEW'
  | 'REJECTED';

export type GermanyProductUniqueIdentificationNumberUpsertInput = {
  action: GermanyProductUniqueIdentificationNumberAction;
  category?: InputMaybe<GermanyProductUniqueIdentificationNumberCategory>;
  eprNumber?: InputMaybe<Scalars['String']>;
  organizationOrRepresentativeName?: InputMaybe<Scalars['String']>;
  uinId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type GetAndClaimProductTaxonomyCategoryDisputeForReview = {
  __typename?: 'GetAndClaimProductTaxonomyCategoryDisputeForReview';
  dispute?: Maybe<ProductTaxonomyCategoryDisputeSchema>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetAndClaimProductTaxonomyCategoryDisputeForReviewInput = {
  disputeId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type GoogleLoginDetails = {
  __typename?: 'GoogleLoginDetails';
  authUrl: Scalars['String'];
};

export type GtinProductSchema = {
  __typename?: 'GtinProductSchema';
  asin?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Scalars['String']>;
  gtinFormats?: Maybe<Array<Scalars['String']>>;
  gtins: Array<Scalars['String']>;
  imageUrls?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  variations?: Maybe<Array<GtinVariationSchema>>;
  wishBrand?: Maybe<BrandSchema>;
};

export type GtinProductServiceSchema = {
  __typename?: 'GtinProductServiceSchema';
  product?: Maybe<GtinProductSchema>;
};


export type GtinProductServiceSchemaProductArgs = {
  gtins: Array<Scalars['String']>;
};

export type GtinVariationSchema = {
  __typename?: 'GtinVariationSchema';
  ageGroup?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  energyEfficiencyClass?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  gtin: Scalars['String'];
  height?: Maybe<Length>;
  imageUrls?: Maybe<Array<Scalars['String']>>;
  ingredients?: Maybe<Scalars['String']>;
  length?: Maybe<Length>;
  manufacturer?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  mpn?: Maybe<Scalars['String']>;
  multipack?: Maybe<Scalars['String']>;
  nutritionFacts?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  price?: Maybe<CurrencyValue>;
  size?: Maybe<Scalars['String']>;
  weight?: Maybe<Weight>;
  width?: Maybe<Length>;
};

export type IpViolationBrandCategory = {
  __typename?: 'IPViolationBrandCategory';
  category: BrandCategoryCode;
  displayName: Scalars['String'];
};

export type IpViolationTaggingManagement = {
  __typename?: 'IPViolationTaggingManagement';
  brandCategories: Array<IpViolationBrandCategory>;
  ipViolationReasons: Array<TaggingViolationReason>;
  taggableBrands: Array<BrandSchema>;
};

export type IdDetails = {
  __typename?: 'IdDetails';
  id: Scalars['String'];
  redirectType: RedirectType;
};

export type IdDocTypes =
  | 'DRIVER_LICENSE'
  | 'GOVERNMENT_ISSUED_STATE_ID'
  | 'PASSPORT';

export type IdentityMutations = {
  __typename?: 'IdentityMutations';
  factoryMutations?: Maybe<FactoryUserMutations>;
  updatePermission?: Maybe<UpdatePermissionMutation>;
  updateQueue?: Maybe<UpdateUserQueuesMutation>;
  updateRole?: Maybe<UpdateRoleMutation>;
  updateUserInfo?: Maybe<UpdateUserInfoMutation>;
};


export type IdentityMutationsUpdatePermissionArgs = {
  input: UpdatePermissionInput;
};


export type IdentityMutationsUpdateQueueArgs = {
  input: UpdateUserQueuesInput;
};


export type IdentityMutationsUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type IdentityMutationsUpdateUserInfoArgs = {
  input: UpdateUserInfoInput;
};

export type IdentityServiceSchema = {
  __typename?: 'IdentityServiceSchema';
  platformBdMerchantCountries: Array<BdMerchantCountryCodeType>;
  platformRoles: Array<RoleSchema>;
  user?: Maybe<UserSchema>;
  users?: Maybe<Array<UserSchema>>;
  usersCount?: Maybe<Scalars['Int']>;
  visibleRoles: Array<RoleSchema>;
};


export type IdentityServiceSchemaUserArgs = {
  id: Scalars['String'];
};


export type IdentityServiceSchemaUsersArgs = {
  includeDisabledUsers?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<RoleType>>;
  sortField?: InputMaybe<UsersSortFieldType>;
  sortOrder?: InputMaybe<SortOrderType>;
};


export type IdentityServiceSchemaUsersCountArgs = {
  includeDisabledUsers?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<RoleType>>;
};

export type ImageChangeMlTaggerJobSchema = {
  __typename?: 'ImageChangeMlTaggerJobSchema';
  datetimeCompleted?: Maybe<Datetime>;
  datetimeQueued: Datetime;
  gcpeListingReview: GcpeListingReviewSchema;
  jobId: Scalars['ObjectIdType'];
  mlEdition?: Maybe<Scalars['Int']>;
  predictionProbability?: Maybe<Scalars['Float']>;
  productId: Scalars['ObjectIdType'];
  result?: Maybe<TaggingMlResult>;
  state: TaggingJobState;
  taggingUser?: Maybe<UserSchema>;
};

export type ImageInput = {
  id?: InputMaybe<Scalars['Int']>;
  isCleanImage?: InputMaybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type ImageSchema = {
  __typename?: 'ImageSchema';
  id: Scalars['Int'];
  isCleanImage: Scalars['Boolean'];
  wishUrl: Scalars['String'];
};


export type ImageSchemaWishUrlArgs = {
  size?: InputMaybe<ImageSize>;
};

export type ImageSize =
  | 'LARGE'
  | 'MEDIUM'
  | 'ORIGINAL'
  | 'SMALL'
  | 'TINY';

export type InappropriateViolationSchema = {
  __typename?: 'InappropriateViolationSchema';
  isConfirmed: Scalars['Boolean'];
  reason?: Maybe<CounterfeitReasonCode>;
  reasonDisplayName?: Maybe<Scalars['String']>;
  reasonExplanation?: Maybe<Scalars['String']>;
  subcategoryMessage?: Maybe<Scalars['String']>;
};

export type InappropriateViolationTaggingManagement = {
  __typename?: 'InappropriateViolationTaggingManagement';
  violationReasons: Array<TaggingViolationReason>;
  violationSubcategories: Array<TaggingViolationSubcategory>;
};


export type InappropriateViolationTaggingManagementViolationSubcategoriesArgs = {
  inappropirateReason?: InputMaybe<CounterfeitReasonCode>;
};

export type InfoCollectedForPaymentProvider = {
  __typename?: 'InfoCollectedForPaymentProvider';
  email?: Maybe<Scalars['String']>;
};

export type InfractionSchema = {
  __typename?: 'InfractionSchema';
  id: Scalars['String'];
  reasonText?: Maybe<Scalars['String']>;
  stateText?: Maybe<Scalars['String']>;
  updatedAt: Datetime;
};

export type InitiateUploadInput = {
  bucket: ClientWritableBucket;
  contentType: Scalars['String'];
  filename?: InputMaybe<Scalars['String']>;
};

export type InitiateUploadMutation = {
  __typename?: 'InitiateUploadMutation';
  downloadUrl?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  uploadHeaders?: Maybe<Scalars['JSONString']>;
  uploadUrl?: Maybe<Scalars['String']>;
};

export type InjunctionMerchantFreezeBulkCreateFreezes = {
  __typename?: 'InjunctionMerchantFreezeBulkCreateFreezes';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type InjunctionMerchantFreezeBulkReverseFreezes = {
  __typename?: 'InjunctionMerchantFreezeBulkReverseFreezes';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type InjunctionMerchantFreezeBulkUploadInput = {
  file: FileInput;
};

export type InjunctionMerchantFreezeCreateFreeze = {
  __typename?: 'InjunctionMerchantFreezeCreateFreeze';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type InjunctionMerchantFreezeCreateFreezeInput = {
  creationTimestamp: DatetimeInput;
  fine?: InputMaybe<CurrencyInput>;
  fineType: FineReason;
  freezeType: InjunctionMerchantFreezeType;
  isCascading: Scalars['Boolean'];
  merchantId: Scalars['ObjectIdType'];
  notes: Scalars['String'];
  troNumber: Scalars['Int'];
  useFullAccountBalance: Scalars['Boolean'];
};

export type InjunctionMerchantFreezeExportCsv = {
  __typename?: 'InjunctionMerchantFreezeExportCSV';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type InjunctionMerchantFreezeFilterInput = {
  fineIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  freezeIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  freezeTypes?: InputMaybe<Array<InjunctionMerchantFreezeType>>;
  legalEndDateUnix?: InputMaybe<Scalars['Int']>;
  legalStartDateUnix?: InputMaybe<Scalars['Int']>;
  merchantIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  states?: InputMaybe<Array<InjunctionMerchantFreezeState>>;
  troNumbers?: InputMaybe<Array<Scalars['Int']>>;
  updatedEndDateUnix?: InputMaybe<Scalars['Int']>;
  updatedStartDateUnix?: InputMaybe<Scalars['Int']>;
};

export type InjunctionMerchantFreezeFinePaymentInput = {
  amountInUsd: Scalars['Float'];
  fineType: FineReason;
  merchantId: Scalars['ObjectIdType'];
  troNumber: Scalars['Int'];
};

export type InjunctionMerchantFreezeFineReversalInput = {
  fineId: Scalars['ObjectIdType'];
  notes: Scalars['String'];
  reversal: CurrencyInput;
  shouldCascadeFunds: Scalars['Boolean'];
};

export type InjunctionMerchantFreezeMutations = {
  __typename?: 'InjunctionMerchantFreezeMutations';
  bulkCreateFreezes?: Maybe<InjunctionMerchantFreezeBulkCreateFreezes>;
  bulkReverseFreezes?: Maybe<InjunctionMerchantFreezeBulkReverseFreezes>;
  createFreeze?: Maybe<InjunctionMerchantFreezeCreateFreeze>;
  exportCsv?: Maybe<InjunctionMerchantFreezeExportCsv>;
  resolveFreeze?: Maybe<InjunctionMerchantFreezeResolveFreeze>;
  reverseAllFines?: Maybe<InjunctionMerchantFreezeReverseAllFines>;
  reverseFreeze?: Maybe<InjunctionMerchantFreezeReverseFreeze>;
  updateLegalTimestamp?: Maybe<InjunctionMerchantFreezeUpdateLegalTimestamp>;
};


export type InjunctionMerchantFreezeMutationsBulkCreateFreezesArgs = {
  input: InjunctionMerchantFreezeBulkUploadInput;
};


export type InjunctionMerchantFreezeMutationsBulkReverseFreezesArgs = {
  input: InjunctionMerchantFreezeBulkUploadInput;
};


export type InjunctionMerchantFreezeMutationsCreateFreezeArgs = {
  input: Array<InjunctionMerchantFreezeCreateFreezeInput>;
};


export type InjunctionMerchantFreezeMutationsExportCsvArgs = {
  input: InjunctionMerchantFreezeFilterInput;
};


export type InjunctionMerchantFreezeMutationsResolveFreezeArgs = {
  input: InjunctionMerchantFreezeResolveFreezeInput;
};


export type InjunctionMerchantFreezeMutationsReverseAllFinesArgs = {
  input: InjunctionMerchantFreezeReverseAllFinesInput;
};


export type InjunctionMerchantFreezeMutationsReverseFreezeArgs = {
  input: InjunctionMerchantFreezeReverseFreezeInput;
};


export type InjunctionMerchantFreezeMutationsUpdateLegalTimestampArgs = {
  input: InjunctionMerchantFreezeUpdateLegalTimestampInput;
};

export type InjunctionMerchantFreezeResolveFreeze = {
  __typename?: 'InjunctionMerchantFreezeResolveFreeze';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type InjunctionMerchantFreezeResolveFreezeInput = {
  freezeId: Scalars['ObjectIdType'];
};

export type InjunctionMerchantFreezeReversalRequestInput = {
  paymentInput?: InputMaybe<InjunctionMerchantFreezeFinePaymentInput>;
  reversalInput?: InputMaybe<InjunctionMerchantFreezeFineReversalInput>;
  reversalType: FreezeReversalType;
};

export type InjunctionMerchantFreezeReverseAllFines = {
  __typename?: 'InjunctionMerchantFreezeReverseAllFines';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type InjunctionMerchantFreezeReverseAllFinesInput = {
  freezeId: Scalars['ObjectIdType'];
  merchantId: Scalars['ObjectIdType'];
  requests: Array<InjunctionMerchantFreezeFineReversalInput>;
};

export type InjunctionMerchantFreezeReverseFreeze = {
  __typename?: 'InjunctionMerchantFreezeReverseFreeze';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type InjunctionMerchantFreezeReverseFreezeInput = {
  requests: Array<InjunctionMerchantFreezeReversalRequestInput>;
  useBackend?: InputMaybe<Scalars['Boolean']>;
};

export type InjunctionMerchantFreezeSchema = {
  __typename?: 'InjunctionMerchantFreezeSchema';
  fineIds: Array<Scalars['ObjectIdType']>;
  fines: Array<MerchantFineSchema>;
  freezeType: InjunctionMerchantFreezeType;
  id: Scalars['ObjectIdType'];
  lastUpdatedAt: Datetime;
  legalCounselCreationTs: Datetime;
  merchantId: Scalars['ObjectIdType'];
  state: InjunctionMerchantFreezeState;
  sumOfFineAmounts: CurrencyValue;
  tentativeFreezeAmount?: Maybe<CurrencyValue>;
  troNumber: Scalars['Int'];
};

export type InjunctionMerchantFreezeState =
  | 'ACTIVE'
  | 'RESOLVED';

export type InjunctionMerchantFreezeType =
  | 'FULL_ASSET_FREEZE'
  | 'ONE_TIME_FREEZE';

export type InjunctionMerchantFreezeUpdateLegalTimestamp = {
  __typename?: 'InjunctionMerchantFreezeUpdateLegalTimestamp';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type InjunctionMerchantFreezeUpdateLegalTimestampInput = {
  freezeId: Scalars['ObjectIdType'];
  newTimestamp: DatetimeInput;
};

export type InventoryInput = {
  count: Scalars['Int'];
  warehouseId: Scalars['ObjectIdType'];
};

export type InventorySchema = {
  __typename?: 'InventorySchema';
  count: Scalars['Int'];
  shippingType: WarehouseShippingType;
  warehouseId: Scalars['ObjectIdType'];
};

export type IsRequiredEnum =
  | 'NOT_INCLUDED'
  | 'OPTIONAL'
  | 'REQUIRED';

export type IssueRefund = {
  __typename?: 'IssueRefund';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type IssueRefundInput = {
  message: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
  partialRefundType?: InputMaybe<PartialRefundType>;
  refundAmount?: InputMaybe<CurrencyInput>;
  refundPercentage?: InputMaybe<Scalars['Float']>;
  refundQuantity?: InputMaybe<Scalars['Int']>;
  refundReason: ReturnRequestRefundReason;
  refundType: RefundType;
};

export type KycMerchantType =
  | 'COMPANY'
  | 'INDIVIDUAL'
  | 'NOT_SET';

export type KycProfilePaymentStatus =
  | 'PAYMENT_ALLOWED'
  | 'PAYMENT_HELD'
  | 'PAYMENT_HOLD_PROPOSED';

export type KycProfileVerificationAdminStatus =
  | 'APPROVED'
  | 'INVALID'
  | 'IN_PROGRESS'
  | 'NOT_SET'
  | 'ON_HOLD'
  | 'REJECTED';

export type KycProfileVerificationRiskScore =
  | 'HIGH'
  | 'LOW'
  | 'MEDIUM'
  | 'NOT_SET'
  | 'VERY_HIGH';

export type KycProfileVerificationStatus =
  | 'COMPLETE'
  | 'INCOMPLETE'
  | 'REJECTED';

export type KycVerificationSchema = {
  __typename?: 'KycVerificationSchema';
  adminStatus?: Maybe<KycProfileVerificationAdminStatus>;
  canStart: Scalars['Boolean'];
  fromV2Flow: Scalars['Boolean'];
  isMandatory?: Maybe<Scalars['Boolean']>;
  merchantType?: Maybe<KycMerchantType>;
  paymentStatus?: Maybe<KycProfilePaymentStatus>;
  riskScore?: Maybe<KycProfileVerificationRiskScore>;
  status?: Maybe<KycProfileVerificationStatus>;
};

export type LqdCampaignInput = {
  productId: Scalars['ObjectIdType'];
  startDate: DatetimeInput;
};

export type LqdCampaignSchema = {
  __typename?: 'LQDCampaignSchema';
  endDate: Datetime;
  id: Scalars['ObjectIdType'];
  impressions: Scalars['Int'];
  product: ProductSchema;
  productId: Scalars['ObjectIdType'];
  startDate: Datetime;
  state: LqdCampaignState;
};

export type LqdCampaignState =
  | 'CANCELLED'
  | 'ENDED'
  | 'NEW'
  | 'SAVED'
  | 'STARTED';

export type LqdProductStatsByDaySchema = {
  __typename?: 'LQDProductStatsByDaySchema';
  clicks: Scalars['Int'];
  date: Datetime;
  gmv: CurrencyValue;
  impressions: Scalars['Int'];
  lqdOrders: Scalars['Int'];
  orders: Scalars['Int'];
  product: ProductSchema;
  productId: Scalars['ObjectIdType'];
};

export type LqdPromotionSchema = {
  __typename?: 'LQDPromotionSchema';
  campaigns: Array<LqdCampaignSchema>;
  campaignsCount: Scalars['Int'];
};


export type LqdPromotionSchemaCampaignsArgs = {
  endDate: DatetimeInput;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  startDate: DatetimeInput;
};


export type LqdPromotionSchemaCampaignsCountArgs = {
  endDate: DatetimeInput;
  startDate: DatetimeInput;
};

export type LqdPromotionStats = {
  __typename?: 'LQDPromotionStats';
  byDay: Array<LqdProductStatsByDaySchema>;
};

export type LateDeliverySchema = {
  __typename?: 'LateDeliverySchema';
  rate?: Maybe<Scalars['Float']>;
  threshhold?: Maybe<Scalars['Float']>;
};

export type LedgerAccountBalance = {
  __typename?: 'LedgerAccountBalance';
  amount: Scalars['Float'];
  balanceType: LedgerAccountBalanceType;
  currency: PaymentCurrencyCode;
};

export type LedgerAccountBalanceType =
  | 'CONFIRMED'
  | 'PENDING';

export type LedgerEvent = {
  __typename?: 'LedgerEvent';
  data: Scalars['String'];
  documentId?: Maybe<Scalars['String']>;
  eventTime: Datetime;
  eventType: LedgerEventType;
  id: Scalars['String'];
};

export type LedgerEventType =
  | 'ACCOUNT_BALANCES_FETCH'
  | 'ARRIVE_AT_EPC_WAREHOUSE'
  | 'CONFIRMED_DELIVERED'
  | 'CONFIRMED_SHIPPED'
  | 'DISPUTE_SUCCESS'
  | 'FEE_CREATION'
  | 'FEE_ELIGIBILITY_UPDATE'
  | 'FEE_REVERSAL'
  | 'FINE_CREATION'
  | 'FINE_ELIGIBILITY_UPDATE'
  | 'FINE_REVERSAL'
  | 'LEDGER_ITEM_FETCH'
  | 'LEDGER_ITEM_STATE_BATCH_UPDATE'
  | 'MARKED_SHIPPED'
  | 'ONEOFF_PAYMENT_CANCEL'
  | 'ONEOFF_PAYMENT_CREATION'
  | 'ORDER_REFUND'
  | 'ORDER_RELEASED'
  | 'ORDER_WITHHOLD'
  | 'ORDER_WITHHOLD_CANCEL'
  | 'PAYMENT_AMOUNT_AMENDMENT'
  | 'REBATE_CANCEL'
  | 'REBATE_CREATE'
  | 'RECEIVE_INITIAL_WP_SHIPPING'
  | 'RECEIVE_WP_SHIPPING_ADJUSTMENT'
  | 'REMOVED_FROM_A_PLUS'
  | 'TAX_ADJUSTMENT'
  | 'TAX_UPDATE'
  | 'TRACKING_AMENDMENT'
  | 'TRACKING_CANCELLED'
  | 'USER_CONFIRMED_DELIVERED';

export type LedgerItem = {
  __typename?: 'LedgerItem';
  createdTime: Datetime;
  creditAmount?: Maybe<CurrencyValue>;
  debitAmount?: Maybe<CurrencyValue>;
  description: LedgerItemDescriptionDetails;
  documentId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  merchantId: Scalars['String'];
  merchantPayableId: Scalars['String'];
  payableType: LedgerPayableType;
  paymentEligibleTime?: Maybe<Datetime>;
  paymentType: PaymentType;
  state: LedgerPayableState;
  type: LedgerLineItemType;
};

export type LedgerItemDescriptionDetails = {
  __typename?: 'LedgerItemDescriptionDetails';
  descriptionText: Scalars['String'];
  idDetailList?: Maybe<Array<IdDetails>>;
};

export type LedgerItemInfo = {
  __typename?: 'LedgerItemInfo';
  itemCount?: Maybe<Scalars['Int']>;
  itemList?: Maybe<Array<LedgerItem>>;
  nextCutoffId?: Maybe<Scalars['String']>;
  nextCutoffTime?: Maybe<Datetime>;
};

export type LedgerLineItemType =
  | 'CONSOLIDATION'
  | 'ESTIMATED_WP_SHIPPING'
  | 'ESTIMATED_WP_SHIPPING_REFUND'
  | 'FEE_DEDUCTION'
  | 'FEE_REVERSAL'
  | 'FINE_DEDUCTION'
  | 'FINE_REVERSAL'
  | 'INITIAL_WP_SHIPPING'
  | 'INITIAL_WP_SHIPPING_OFFSET'
  | 'INITIAL_WP_SHIPPING_REFUND'
  | 'INITIAL_WP_SHIPPING_REFUND_OFFSET'
  | 'ONEOFF_PAYMENT'
  | 'ONEOFF_PAYMENT_CANCELLATION'
  | 'ORDER'
  | 'PAYMENT'
  | 'REBATE'
  | 'REBATE_CANCEL'
  | 'REFUND'
  | 'TAX'
  | 'TAX_ADJUSTMENT'
  | 'TAX_REFUND';

export type LedgerOrderInfo = {
  __typename?: 'LedgerOrderInfo';
  carrierTier?: Maybe<OrderCarrierTier>;
  confirmedDeliveredTime?: Maybe<Datetime>;
  confirmedShippedTime?: Maybe<Datetime>;
  disputeCarrierTier?: Maybe<OrderCarrierTier>;
  disputeConfirmedTime?: Maybe<Datetime>;
  disputeDeliveredTime?: Maybe<Datetime>;
  isAplusOrder?: Maybe<Scalars['Boolean']>;
  isEpcOrder?: Maybe<Scalars['Boolean']>;
  isExpeditedPolicy?: Maybe<Scalars['Boolean']>;
  isFakeTrackingOrder?: Maybe<Scalars['Boolean']>;
  isFbwFastPayment?: Maybe<Scalars['Boolean']>;
  isTopStandingMerchant?: Maybe<Scalars['Boolean']>;
  isUnityOrder?: Maybe<Scalars['Boolean']>;
  isValueOrder?: Maybe<Scalars['Boolean']>;
  isWishExpress?: Maybe<Scalars['Boolean']>;
  isWishLocal?: Maybe<Scalars['Boolean']>;
  orderReleasedTime?: Maybe<Datetime>;
  removedFromAplusTime?: Maybe<Datetime>;
  shippedTime?: Maybe<Datetime>;
  trackingCancelledTime?: Maybe<Datetime>;
  trackingId?: Maybe<Scalars['String']>;
  userReceivedTime?: Maybe<Datetime>;
  warehouseArrivalTime?: Maybe<Datetime>;
};

export type LedgerPayableInfo = {
  __typename?: 'LedgerPayableInfo';
  ledgerEvents?: Maybe<Array<LedgerEvent>>;
  ledgerItems?: Maybe<Array<LedgerItem>>;
};

export type LedgerPayableState =
  | 'LIMBO'
  | 'NEW'
  | 'PAID_IN_CLROOT'
  | 'SETTLED';

export type LedgerPayableType =
  | 'FINE'
  | 'ONEOFF'
  | 'ORDER'
  | 'PAYOUT'
  | 'SETTLEMENT';

export type LegacyRefundSource =
  | 'AUTO_LATE_FULFILL'
  | 'MERCHANT'
  | 'USER_CANCEL'
  | 'WISH_ADMIN_BOTH_EAT_COST'
  | 'WISH_ADMIN_MERCHANT_EATS_COST'
  | 'WISH_ADMIN_WISH_EATS_COST';

export type Length = {
  __typename?: 'Length';
  unit: LengthUnit;
  value: Scalars['Float'];
};


export type LengthValueArgs = {
  targetUnit?: InputMaybe<LengthUnit>;
};

export type LengthInput = {
  unit: LengthUnit;
  value: Scalars['Float'];
};

export type LengthUnit =
  | 'CENTIMETER'
  | 'FEET'
  | 'INCH'
  | 'METER'
  | 'YARD';

export type LineItemSearchType =
  | 'CAMPAIGN_ID'
  | 'CHARGING_ID'
  | 'CTXN_REFUND_ITEM_ID'
  | 'DISPUTE_ID'
  | 'FBW_INVOICE_ID'
  | 'FINE_ID'
  | 'FINE_REVERSAL_ID'
  | 'ID'
  | 'LOGISTIC_OPTION_ID'
  | 'LOGISTIC_PROVIDER_ID'
  | 'MERCHANT_ONEOFF_PAYMENT_ID'
  | 'MERCHANT_PAYMENT_ID'
  | 'ORDER_ID'
  | 'REFUND_DETAIL_ID'
  | 'TRANSACTION_REFUND_ID'
  | 'WARNING_ID';

export type LineItemType =
  | 'B2B_SALE_FEE'
  | 'CANCEL_WITHHOLD_PAYMENT'
  | 'CHINA_POST_SUBSIDY'
  | 'CHINA_POST_SUBSIDY_REVERSE'
  | 'CN_ORDER_NOT_SHIP_WITH_WISHPOST_FINE'
  | 'COLLECTIONS_BOOST_CAMPAIGN_FEE'
  | 'CONSOLIDATE_MP_FINE'
  | 'CONSOLIDATE_MP_PAYMENT'
  | 'COUNTERFEIT_REFUND'
  | 'COVID19_SUBSIDY'
  | 'COVID19_SUBSIDY_REVERSE'
  | 'DECEPTIVE_FULFILLMENT_FINE'
  | 'DISPUTE_APPROVED'
  | 'DOUBLE_DEDUCTION_BOOK_KEEPER'
  | 'EARLY_PAYMENT'
  | 'EARLY_PAYMENT_CANCELLATION'
  | 'EARLY_PAYMENT_DEDUCTION'
  | 'EARLY_PAYMENT_REIMBURSEMENT_FEE'
  | 'ESTIMATED_WISHPOST_SHIPPING'
  | 'ESTIMATED_WISHPOST_SHIPPING_REFUND'
  | 'EXTERNAL_BOOST_CPA_FEE'
  | 'EXTERNAL_BOOST_FEE'
  | 'FAKE_RATING_FINE'
  | 'FAKE_TRACKING_FINE'
  | 'FBW_FEE'
  | 'FBW_PAYMENT'
  | 'FINE_REVERSED'
  | 'INFRACTION_FINE'
  | 'INITIAL_WISHPOST_SHIPPING'
  | 'INITIAL_WISHPOST_SHIPPING_OFFSET'
  | 'INITIAL_WISHPOST_SHIPPING_REFUND'
  | 'INITIAL_WISHPOST_SHIPPING_REFUND_OFFSET'
  | 'LATE_CONFIRMED_FULFILLMENT_FINE'
  | 'LCL_FBW_FEE'
  | 'LEGAL_SETTLEMENT_FINE'
  | 'LEGAL_SETTLEMENT_PAID_PENALTY'
  | 'LEGAL_SETTLEMENT_RESERVED_PENALTY'
  | 'LOGISTIC_FEE'
  | 'MARKETING_REBATE'
  | 'MARKETING_REBATE_REVERSE'
  | 'MERCHANT_CANCELLATION_FINE'
  | 'MERCHANT_HARASSMENT'
  | 'MERCHANT_INCENTIVE'
  | 'MERCHANT_INCENTIVE_REVERSE'
  | 'MISLEADING_VARIATION_FINE'
  | 'NEW_REFUNDED'
  | 'ONEOFF'
  | 'ONEOFF_ADMIN_TOOL'
  | 'ONEOFF_FINE'
  | 'OTHER_DEDUCTION'
  | 'OVERPAY_PAYMENT_AMOUNT'
  | 'PAID_PLACEMENT_ENROLLMENT_FEE'
  | 'PAID_PLACEMENT_IMPRESSION_FEE'
  | 'PAYMENT'
  | 'POLICY_VIOLATION_FINE'
  | 'PRODUCT_BOOST_BALANCE_REFUND'
  | 'PRODUCT_LISTING_FEE'
  | 'PRODUCT_REBATE'
  | 'PRODUCT_UNTAGGED_MISLEADING'
  | 'PROMOTED_PRODUCT_DISABLE_FINE'
  | 'PROMOTION_FEE'
  | 'QUALITY_REFUND_FINE'
  | 'REFUNDED'
  | 'REGISTRATION_REFUND'
  | 'RETROACTIVE_REFUND_FOR_LOW_RATED_PRODUCT'
  | 'RETROACTIVE_REFUND_FOR_PROBLEM_PRODUCT'
  | 'RETURN_LABEL_FEE'
  | 'REV_SHARE_ADJUST_PAYMENT'
  | 'SE_CASH_BACK'
  | 'SE_CASH_BACK_REVERSE'
  | 'SHIPPED'
  | 'STORE_PAYMENT'
  | 'STORE_PAYMENT_CANCELLATION'
  | 'STORE_PAYMENT_DEDUCTION'
  | 'STRATEGIC_ORDER_REBATE'
  | 'STRATEGIC_ORDER_REBATE_REVERSE'
  | 'TRANSACTION_FEE_REBATE'
  | 'TRANSACTION_FEE_REBATE_REVERSE'
  | 'UNCONFIRMED_CARRIER_FINE'
  | 'UNDERPAY_PAYMENT_AMOUNT'
  | 'UNFULFILLED_ORDER_FINE'
  | 'WISHPOST_ADJUSTMENT_DEDUCTION'
  | 'WISHPOST_ADJUSTMENT_PAYMENT'
  | 'WISHPOST_FULFILLMENT_FEE'
  | 'WISHPOST_LOGISTICS_FEE'
  | 'WISH_EXPRESS_REBATE'
  | 'WISH_EXPRESS_REBATE_REVERSE'
  | 'WISH_PARCEL_SERVICE_ADJUST_FEE'
  | 'WISH_PARCEL_SERVICE_ADJUST_PAYMENT'
  | 'WISH_PARCEL_SERVICE_FEE'
  | 'WITHHELD_RELEASED'
  | 'WITHHOLD_FUND_FINE'
  | 'WITHHOLD_PAYMENT'
  | 'WITHHOLD_RELEASE';

export type LinkProductComplianceAction =
  | 'UPDATE_EU_RP'
  | 'UPDATE_FRANCE_UIN'
  | 'UPDATE_GERMANY_UIN';

export type LinkProductComplianceSchema = {
  __typename?: 'LinkProductComplianceSchema';
  complianceCategories: Array<EuProductComplianceCategory>;
  euResponsiblePerson?: Maybe<ResponsiblePersonSchema>;
  franceUins?: Maybe<Array<FranceProductUniqueIdentificationNumberSchema>>;
  germanyUins?: Maybe<Array<GermanyProductUniqueIdentificationNumberSchema>>;
  id: Scalars['ObjectIdType'];
  isLinkedWithFranceUin?: Maybe<Scalars['Boolean']>;
  isLinkedWithGermanyUin?: Maybe<Scalars['Boolean']>;
  merchantId: Scalars['ObjectIdType'];
  product?: Maybe<ProductSchema>;
  productCategories: Array<MsrCategory>;
  reviewState: LinkProductComplianceState;
  trueTags?: Maybe<Array<TrueTagSchema>>;
};

export type LinkProductComplianceState =
  | 'HAS_RP'
  | 'HAS_UIN'
  | 'NO_RP'
  | 'NO_UIN';

export type LinkProductComplianceType =
  | 'DE_COMPLIANCE'
  | 'EU_COMPLIANCE'
  | 'FR_COMPLIANCE';

export type LinkProductComplianceUpsertInput = {
  action: LinkProductComplianceAction;
  productIds: Array<Scalars['ObjectIdType']>;
  responsiblePersonId?: InputMaybe<Scalars['ObjectIdType']>;
  uinIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
};

export type LinkShippingProfile = {
  __typename?: 'LinkShippingProfile';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ListingQualityInsightsReportSchema = {
  __typename?: 'ListingQualityInsightsReportSchema';
  errorCode?: Maybe<ErrorCode>;
  presignedS3Url?: Maybe<Scalars['String']>;
  reportName?: Maybe<Scalars['String']>;
};

export type ListingQualityInsightsSchema = {
  __typename?: 'ListingQualityInsightsSchema';
  report?: Maybe<ListingQualityInsightsReportSchema>;
};

export type ListingStateSchema = {
  __typename?: 'ListingStateSchema';
  reason?: Maybe<CommerceProductListingStateReason>;
  state: CommerceProductListingState;
};

export type Locale =
  | 'ar'
  | 'cs'
  | 'da'
  | 'de'
  | 'en'
  | 'es'
  | 'fi'
  | 'fr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'sv'
  | 'th'
  | 'tr'
  | 'up'
  | 'vi'
  | 'zh';

export type LocaleMutations = {
  __typename?: 'LocaleMutations';
  changeLocale: ChangeLocale;
};


export type LocaleMutationsChangeLocaleArgs = {
  input: ChangeLocaleInput;
};

export type LogToTreasureData = {
  __typename?: 'LogToTreasureData';
  ok?: Maybe<Scalars['Boolean']>;
};

export type LogToTreasureDataInput = {
  data: Scalars['JSONString'];
  table: LoggableTable;
};

export type LoggableTable =
  | 'ADD_GTIN_PRODUCT'
  | 'ADD_PRODUCT_BUTTON_CLICK'
  | 'BLACKLIST_CRITERIA_DASHBOARD_ACTION'
  | 'BRAND_EDUCATION_CLICK'
  | 'CAMPAIGN_DETAILS_PAGE_MERCHANT_ACTION'
  | 'CHROME_SEARCH'
  | 'CLICK_CHECK_MY_MAIL'
  | 'COLLECTIONS_BOOST_UI'
  | 'EARLY_PAYMENT_PAGE'
  | 'EARLY_PAYMENT_REQUESTS'
  | 'FBS_PERFORMANCE_PAGE_ACTION'
  | 'FBW_INVENTORY_LISTING_PAGE_ACTION'
  | 'FBW_RECOMMENDATION_DASHBOARD_CLICK'
  | 'FBW_SHIPPING_PLAN_CREATION'
  | 'FBW_SPLASH_PAGE'
  | 'FINE_POLICY_PAGE_CLICK'
  | 'HOME_BANNER_CTA_CLICK'
  | 'HOME_BANNER_IMPRESSION'
  | 'HOME_PAGE_TUTORIAL_VIDEO_PLAYS'
  | 'MERCHANT_CS_SURVEY_RESULT'
  | 'MERCHANT_FAILED_PASSWORD_ATTEMPTS'
  | 'MERCHANT_NAV_CLICK'
  | 'MERCHANT_STANDING_CLICK'
  | 'MERCHANT_TODO_ITEMS'
  | 'MERCHANT_VACATION_MODE_SURVEY'
  | 'MERCHANT_WISH_PARCEL_SERVICE'
  | 'MFP_MERCHANT_ACTIVITY_LOG'
  | 'MM_INTERNAL_DOWNLOADS'
  | 'PB_AUTOMATED_CAMPAIGN_PUBLISHED_NOTI'
  | 'PB_BUDGET_DEPLETION_NOTI'
  | 'PB_BUDGET_DEPLETION_SOURCE'
  | 'PB_CREATE_CAMPAIGN_ACTIVITY_TRACKER'
  | 'PB_CREATE_CAMPAIGN_BUDGET_TRACKER'
  | 'PB_CREATE_CAMPAIGN_USER_ERRORS'
  | 'PB_PRODUCT_FEED_UPLOAD_PORTAL'
  | 'PB_V2_CREATE_CAMPAIGN_ACTIVITY_TRACKER'
  | 'PERFORMANCE_OVERVIEW_DASHBOARD'
  | 'PLUS_KYC_VERIFICATION_UI'
  | 'PLUS_PRODUCT_UPLOAD'
  | 'PLUS_SELLER_VERIFICATION_UI'
  | 'PLUS_WISH_EXPRESS_UI'
  | 'PRODUCT_BOOST_CREATE_DAILY_BUDGET_CAMPAIGN_CLICK'
  | 'PRODUCT_BOOST_CREATE_DAILY_BUDGET_CAMPAIGN_PAGE_VIEW'
  | 'PRODUCT_BOOST_DUPLICATE_CAMPAIGN_REMINDER_CLICK'
  | 'PRODUCT_BOOST_DUPLICATE_CAMPAIGN_REMINDER_VIEW'
  | 'PRODUCT_BOOST_ENABLE_PENDING_CAMPAIGN_MODAL'
  | 'PRODUCT_BOOST_ENABLE_PENDING_CAMPAIGN_MODAL_CLICK'
  | 'PRODUCT_BOOST_EXPOSURE_BOX_CREATE_CLICK'
  | 'PRODUCT_BOOST_EXPOSURE_BOX_LEARN_MORE_CLICK'
  | 'PRODUCT_BOOST_EXPOSURE_BOX_VIEW'
  | 'PRODUCT_BOOST_FREE_CREDIT_MODAL'
  | 'PRODUCT_BOOST_FREE_PROMOTION_CAMPAIGN_MODAL_CLICK'
  | 'PRODUCT_BOOST_FREE_PROMOTION_CAMPAIGN_MODAL_VIEW'
  | 'PRODUCT_BOOST_LIST_CAMPAIGN_BUDGET_DEPLETION_CLICK'
  | 'PRODUCT_BOOST_LIST_CAMPAIGN_BUDGET_DEPLETION_VIEW'
  | 'PRODUCT_BOOST_MANAGE_DAILY_BUDGET_CAMPAIGN_PAGE_VIEW'
  | 'PRODUCT_BOOST_NEW_NAV_TAB_CLICK'
  | 'PRODUCT_BOOST_NEW_PAGES_BUTTON_CLICK'
  | 'PRODUCT_BOOST_ONE_CLICK_DUPLICATE_AUTOMATED'
  | 'PRODUCT_BOOST_PRODUCT_FEEDBACK_VIEW'
  | 'PRODUCT_BOOST_PRODUCT_LIFETIME_PERFORMANCE_PAGE_VIEW'
  | 'PRODUCT_BOOST_PROMOTION_MODAL'
  | 'PRODUCT_BOOST_PUBLISH_AUTOMATED_CAMPAIGN_MODAL_CLICK'
  | 'PRODUCT_BOOST_PUBLISH_AUTOMATED_CAMPAIGN_MODAL_VIEW'
  | 'PRODUCT_BOOST_SPLASH_PAGE'
  | 'PRODUCT_BOOST_TRENDING_CATEGORIES_MODAL'
  | 'PRODUCT_BOOST_UPDATE_DAILY_BUDGET_CAMPAIGN_CLICK'
  | 'PRODUCT_SHIPPING_CLICK_SAVE'
  | 'PRODUCT_SHIPPING_PAGE_VIEW'
  | 'RECOMMENDATION_EMAIL_METRICS'
  | 'RESELLER_AGREEMENT_PAGE'
  | 'SIGNUP_V3_ID_CARD_EXAMPLE'
  | 'TAX_DECLINE_ENROLLMENT';

export type LogicalQueueSchema = {
  __typename?: 'LogicalQueueSchema';
  id: Scalars['ObjectIdType'];
  name?: Maybe<Scalars['String']>;
  state?: Maybe<LogicalQueueStateType>;
};

export type LogicalQueueStateType =
  | 'ACTIVE'
  | 'DISABLED';

export type LoginAsMutations = {
  __typename?: 'LoginAsMutations';
  user?: Maybe<ByUserIdMutation>;
};


export type LoginAsMutationsUserArgs = {
  input: ByUserIdInput;
};

export type LoginErrorState =
  | 'CAPTCHA_REQUIRED'
  | 'LOGIN_ERROR'
  | 'TFA_REQUIRED';

export type LoginMutation = {
  __typename?: 'LoginMutation';
  error?: Maybe<Scalars['String']>;
  errorState?: Maybe<LoginErrorState>;
  loginOk: Scalars['Boolean'];
  obfuscatedPhoneNumber?: Maybe<Scalars['String']>;
  preferQr?: Maybe<Scalars['Boolean']>;
  sessionKey?: Maybe<Scalars['String']>;
  wechatBound?: Maybe<Scalars['Boolean']>;
};

export type LoginMutationInput = {
  captchaCode?: InputMaybe<Scalars['String']>;
  captchaToken?: InputMaybe<Scalars['String']>;
  deviceId?: InputMaybe<Scalars['String']>;
  deviceName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  qrTicket?: InputMaybe<Scalars['String']>;
  rememberMe?: InputMaybe<Scalars['Boolean']>;
  tfaToken?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type LogisticsMetadataSchema = {
  __typename?: 'LogisticsMetadataSchema';
  gmvPer1k?: Maybe<CurrencyValue>;
  height?: Maybe<Length>;
  isFbwRecommended?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Length>;
  weight?: Maybe<Weight>;
  width?: Maybe<Length>;
};

export type LogisticsMutations = {
  __typename?: 'LogisticsMutations';
  changeShippingProviderStatus: ChangeShippingProviderStatus;
  createShippingProvider: CreateShippingProvider;
  fulfilledByWish?: Maybe<FulfilledByWishMutations>;
  updateShippingProvider: UpdateShippingProvider;
  updateShippingProviderName: UpdateShippingProviderName;
  upsertConfirmedDeliveryCarrier?: Maybe<UpsertConfirmedDeliveryCarrier>;
};


export type LogisticsMutationsChangeShippingProviderStatusArgs = {
  input: ChangeShippingProviderStatusInput;
};


export type LogisticsMutationsCreateShippingProviderArgs = {
  input: ShippingProviderInput;
};


export type LogisticsMutationsUpdateShippingProviderArgs = {
  input: ShippingProviderInput;
};


export type LogisticsMutationsUpdateShippingProviderNameArgs = {
  input: UpdateShippingProviderNameInput;
};


export type LogisticsMutationsUpsertConfirmedDeliveryCarrierArgs = {
  input: DeliveryCarrierUpsertInput;
};

export type LogisticsSchema = {
  __typename?: 'LogisticsSchema';
  confirmedDeliveryCarrier?: Maybe<ConfirmedDeliveryCarriers>;
  fbw: FulfilledByWishSchema;
  nextProviderId?: Maybe<Scalars['Int']>;
  shippingProviders?: Maybe<Array<ShippingProviderSchema>>;
  shippingProvidersCount?: Maybe<Scalars['Int']>;
};


export type LogisticsSchemaShippingProvidersArgs = {
  isQualified?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ShippingProviderSearchType>;
  states?: InputMaybe<Array<ShippingProviderState>>;
};


export type LogisticsSchemaShippingProvidersCountArgs = {
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ShippingProviderSearchType>;
  states?: InputMaybe<Array<ShippingProviderState>>;
};

export type LogoutMutation = {
  __typename?: 'LogoutMutation';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MfpCampaignCancelInfo = {
  __typename?: 'MFPCampaignCancelInfo';
  cancelledTime: Datetime;
  comment?: Maybe<Scalars['String']>;
  reason: MfpCampaignCancelReason;
};

export type MfpCampaignCancelReason =
  | 'MERCHANT_CANCELLED_WRONG_CAMPAIGN_INFO'
  | 'OTHER'
  | 'WISH_CANCELLED_FAILED_DEPENDENCIES'
  | 'WISH_CANCELLED_UNQUALIFIED_MERCHANT'
  | 'WRONG_PRODUCTS';

export type MfpCampaignConstantsSchema = {
  __typename?: 'MFPCampaignConstantsSchema';
  maxAllowedQuantity: Scalars['Int'];
  maxCampaignDelayInHour: Scalars['Int'];
  maxCampaignDurationInDays: Scalars['Int'];
  maxCampaignNameLength: Scalars['Int'];
  maxCampaignsPerRequest: Scalars['Int'];
  maxDiscountPercentage: Scalars['Float'];
  maxProductVariations: Scalars['Int'];
  minCampaignDelayInHour: Scalars['Int'];
  minDiscountPercentage: Scalars['Float'];
  pricingGamingCancelThreshold: Scalars['Float'];
  pricingGamingIgnoreThreshold: Scalars['Float'];
};

export type MfpCampaignEventConfig =
  | 'EVENT_ONLY'
  | 'EXCLUDE_EVENT'
  | 'UNSPECIFIED';

export type MfpCampaignEventSortBy =
  | 'END_TIME'
  | 'START_TIME'
  | 'SUBMISSION_DEADLINE';

export type MfpCampaignPromotionType =
  | 'FLASH_SALE'
  | 'PRICE_DISCOUNT'
  | 'SPEND_MORE_AND_SAVE_MORE';

export type MfpCampaignSchema = {
  __typename?: 'MFPCampaignSchema';
  cancelInfo?: Maybe<MfpCampaignCancelInfo>;
  countries?: Maybe<Array<Country>>;
  creationTime: Datetime;
  discountDetails?: Maybe<Array<MfpVariationDiscountData>>;
  discountDetailsProductCount?: Maybe<Scalars['Int']>;
  endTime: Datetime;
  event?: Maybe<CampaignEventInfo>;
  flashSaleDetails?: Maybe<Array<MfpVariationDiscountData>>;
  flashSaleDetailsProductCount?: Maybe<Scalars['Int']>;
  genericDiscountDetails?: Maybe<Scalars['GenericScalar']>;
  genericFlashSaleDetails?: Maybe<Scalars['GenericScalar']>;
  genericUnqualifiedProductVariations?: Maybe<Scalars['GenericScalar']>;
  id: Scalars['ObjectIdType'];
  name: Scalars['String'];
  promotionType: MfpCampaignPromotionType;
  skipShipping: Scalars['Boolean'];
  startTime: Datetime;
  state: MfpCampaignState;
  unqualifiedProductVariations?: Maybe<Array<MfpUnqualifiedVariationData>>;
};


export type MfpCampaignSchemaGenericDiscountDetailsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  performanceEndDate?: InputMaybe<DatetimeInput>;
  performanceStartDate?: InputMaybe<DatetimeInput>;
};


export type MfpCampaignSchemaGenericFlashSaleDetailsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  performanceEndDate?: InputMaybe<DatetimeInput>;
  performanceStartDate?: InputMaybe<DatetimeInput>;
};

export type MfpCampaignSearchType =
  | 'CAMPAIGN_ID'
  | 'CAMPAIGN_NAME'
  | 'PRODUCT_ID';

export type MfpCampaignState =
  | 'APPROVED'
  | 'CANCELLED'
  | 'PENDING';

export type MfpConstantsSchema = {
  __typename?: 'MFPConstantsSchema';
  campaign?: Maybe<MfpCampaignConstantsSchema>;
  discountCampaign?: Maybe<MfpDiscountCampaignConstantsSchema>;
  flashSaleCampaign?: Maybe<MfpFlashSaleConstantsSchema>;
};

export type MfpDiscountCampaignConstantsSchema = {
  __typename?: 'MFPDiscountCampaignConstantsSchema';
  maxDiscountDifference: Scalars['Float'];
  maxDiscountPercentage: Scalars['Float'];
  maxShippingIncreasePercentage: Scalars['Float'];
  minDaysProductListed: Scalars['Int'];
  minDaysVariationListed: Scalars['Int'];
  minDiscountPercentage: Scalars['Float'];
  minStartTimeForLaunch: Datetime;
  minimumCooldownDays: Scalars['Int'];
  minimumPercentageRequired: Scalars['Int'];
  minimumProductHistoryDays: Scalars['Int'];
  minimumProductRatingRequired: Scalars['Int'];
  minimumProductSaleRequired: Scalars['Int'];
  productAndShippingPriceDays: Scalars['Int'];
};

export type MfpFlashSaleConstantsSchema = {
  __typename?: 'MFPFlashSaleConstantsSchema';
  maxDiscountDifference: Scalars['Float'];
  maxDiscountPercentage: Scalars['Float'];
  maxShippingIncreasePercentage: Scalars['Float'];
  minDaysProductListed: Scalars['Int'];
  minDaysVariationListed: Scalars['Int'];
  minDealQuantityPercentage: Scalars['Float'];
  minDiscountPercentage: Scalars['Float'];
  minStartTimeForLaunch: Datetime;
  minimumCooldownDays: Scalars['Int'];
  minimumPercentageRequired: Scalars['Int'];
  minimumProductHistoryDays: Scalars['Int'];
  minimumProductRatingRequired: Scalars['Int'];
  minimumProductSaleRequired: Scalars['Int'];
  productAndShippingPriceDays: Scalars['Int'];
};

export type MfpProductSearchType =
  | 'ID'
  | 'NAME'
  | 'SKU';

export type MfpServiceAdminMutations = {
  __typename?: 'MFPServiceAdminMutations';
  createWhitelistProducts: CreateWhitelistProductsMutation;
  expireWhitelistProducts: ExpireWhitelistProductsMutation;
};


export type MfpServiceAdminMutationsCreateWhitelistProductsArgs = {
  input: CreateWhitelistProductsInput;
};


export type MfpServiceAdminMutationsExpireWhitelistProductsArgs = {
  input: ExpireWhitelistProductsInput;
};

export type MfpServiceMutations = {
  __typename?: 'MFPServiceMutations';
  admin?: Maybe<MfpServiceAdminMutations>;
  cancelMfpCampaign: CancelMfpCampaign;
  createProductsDownloadJob: CreateProductsDownloadJobMutation;
  upsertDiscountCampaign: UpsertDiscountCampaignMutation;
  upsertFlashSaleCampaign: UpsertFlashSaleCampaignMutation;
};


export type MfpServiceMutationsCancelMfpCampaignArgs = {
  input: CancelMfpCampaignInput;
};


export type MfpServiceMutationsCreateProductsDownloadJobArgs = {
  input: CreateProductsDownloadJobInput;
};


export type MfpServiceMutationsUpsertDiscountCampaignArgs = {
  input: UpsertDiscountCampaignInput;
};


export type MfpServiceMutationsUpsertFlashSaleCampaignArgs = {
  input: UpsertFlashSaleCampaignInput;
};

export type MfpServiceSchema = {
  __typename?: 'MFPServiceSchema';
  activeWhitelistProducts?: Maybe<Array<WhitelistProductInfo>>;
  activeWhitelistProductsCount?: Maybe<Scalars['Int']>;
  campaignEvents?: Maybe<Array<CampaignEventInfo>>;
  campaignEventsCount?: Maybe<Scalars['Int']>;
  campaigns?: Maybe<Array<MfpCampaignSchema>>;
  campaignsCount?: Maybe<Scalars['Int']>;
  checkEligibility?: Maybe<Scalars['GenericScalar']>;
  eligibleProducts?: Maybe<Array<EligibleProductInfo>>;
  eligibleProductsCount?: Maybe<Scalars['Int']>;
  genericCampaigns?: Maybe<Array<Scalars['GenericScalar']>>;
  genericEligibleProducts?: Maybe<Scalars['GenericScalar']>;
};


export type MfpServiceSchemaActiveWhitelistProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  productIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  sort?: InputMaybe<WhitelistProductSort>;
};


export type MfpServiceSchemaActiveWhitelistProductsCountArgs = {
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  productIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
};


export type MfpServiceSchemaCampaignEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  promotionTypes?: InputMaybe<Array<MfpCampaignPromotionType>>;
  sort?: InputMaybe<CampaignEventSort>;
  startAtMax?: InputMaybe<DatetimeInput>;
  startAtMin?: InputMaybe<DatetimeInput>;
  submitAtMax?: InputMaybe<DatetimeInput>;
  submitAtMin?: InputMaybe<DatetimeInput>;
};


export type MfpServiceSchemaCampaignEventsCountArgs = {
  promotionTypes?: InputMaybe<Array<MfpCampaignPromotionType>>;
  startAtMax?: InputMaybe<DatetimeInput>;
  startAtMin?: InputMaybe<DatetimeInput>;
  submitAtMax?: InputMaybe<DatetimeInput>;
  submitAtMin?: InputMaybe<DatetimeInput>;
};


export type MfpServiceSchemaCampaignsArgs = {
  endAtMax?: InputMaybe<DatetimeInput>;
  endAtMin?: InputMaybe<DatetimeInput>;
  eventConfig?: InputMaybe<MfpCampaignEventConfig>;
  eventIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  promotionTypes?: InputMaybe<Array<MfpCampaignPromotionType>>;
  searchQuery?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<MfpCampaignSearchType>;
  startAtMax?: InputMaybe<DatetimeInput>;
  startAtMin?: InputMaybe<DatetimeInput>;
  states?: InputMaybe<Array<MfpCampaignState>>;
};


export type MfpServiceSchemaCampaignsCountArgs = {
  endAtMax?: InputMaybe<DatetimeInput>;
  endAtMin?: InputMaybe<DatetimeInput>;
  eventConfig?: InputMaybe<MfpCampaignEventConfig>;
  eventIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  promotionTypes?: InputMaybe<Array<MfpCampaignPromotionType>>;
  searchQuery?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<MfpCampaignSearchType>;
  startAtMax?: InputMaybe<DatetimeInput>;
  startAtMin?: InputMaybe<DatetimeInput>;
  states?: InputMaybe<Array<MfpCampaignState>>;
};


export type MfpServiceSchemaCheckEligibilityArgs = {
  eventId?: InputMaybe<Scalars['ObjectIdType']>;
  promotionType?: InputMaybe<MfpCampaignPromotionType>;
  variationIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
};


export type MfpServiceSchemaEligibleProductsArgs = {
  eventId?: InputMaybe<Scalars['ObjectIdType']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  promotionType?: InputMaybe<MfpCampaignPromotionType>;
  searchQuery?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<MfpProductSearchType>;
  sort?: InputMaybe<ProductSort>;
};


export type MfpServiceSchemaEligibleProductsCountArgs = {
  eventId?: InputMaybe<Scalars['ObjectIdType']>;
  promotionType?: InputMaybe<MfpCampaignPromotionType>;
  searchQuery?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<MfpProductSearchType>;
};


export type MfpServiceSchemaGenericCampaignsArgs = {
  endAtMax?: InputMaybe<DatetimeInput>;
  endAtMin?: InputMaybe<DatetimeInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  performanceEndDate?: InputMaybe<DatetimeInput>;
  performanceStartDate?: InputMaybe<DatetimeInput>;
  promotionTypes?: InputMaybe<Array<MfpCampaignPromotionType>>;
  searchQuery?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<MfpCampaignSearchType>;
  startAtMax?: InputMaybe<DatetimeInput>;
  startAtMin?: InputMaybe<DatetimeInput>;
  states?: InputMaybe<Array<MfpCampaignState>>;
};


export type MfpServiceSchemaGenericEligibleProductsArgs = {
  countries?: InputMaybe<Array<CountryCode>>;
  currency: PaymentCurrencyCode;
  eventId?: InputMaybe<Scalars['ObjectIdType']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  promotionType?: InputMaybe<MfpCampaignPromotionType>;
  searchQuery?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<MfpProductSearchType>;
  sort?: InputMaybe<ProductSort>;
};

export type MfpUnqualifiedVariationData = {
  __typename?: 'MFPUnqualifiedVariationData';
  product: ProductSchema;
  productId: Scalars['ObjectIdType'];
  reason: MfpVariationUnqualifiedReason;
  variation: VariationSchema;
  variationId: Scalars['ObjectIdType'];
};

export type MfpVariationDiscountData = {
  __typename?: 'MFPVariationDiscountData';
  discountAmount?: Maybe<CurrencyValue>;
  discountPercentage: Scalars['Float'];
  maxQuantity?: Maybe<Scalars['Int']>;
  product: ProductSchema;
  productId: Scalars['ObjectIdType'];
  scheduledEndTime?: Maybe<Datetime>;
  scheduledStartTime?: Maybe<Datetime>;
  variation: VariationSchema;
  variationId: Scalars['ObjectIdType'];
};

export type MfpVariationUnqualifiedReason =
  | 'CAMPAIGN_LIMIT'
  | 'COMPETING_PROMOTION'
  | 'DISCOUNT_PRICE_HISTORY'
  | 'FLASH_SALE_MINIMUM_DEAL_QUANTITY'
  | 'FLASH_SALE_MINIMUM_VARIATION_INVENTORY'
  | 'FRS_DISCOUNT_PRICE'
  | 'FRS_HIGH_DISCOUNT'
  | 'FRS_LOW_DISCOUNT'
  | 'FRS_NEGATIVE_PRICE'
  | 'INVALID_ID'
  | 'LOW_RATING'
  | 'MERCHANT_ELIGIBILITY'
  | 'MININUM_VARIATION_PERCENTAGE'
  | 'NEGATIVE_PRODUCT_PRICE'
  | 'NOT_IN_STOCK'
  | 'NOT_OWNED_BY_MERCHANT'
  | 'PRODUCT_CATEGORY'
  | 'PRODUCT_LISTED_DAYS'
  | 'PRODUCT_PRICE'
  | 'PRODUCT_SHIPPING_PRICE'
  | 'PROMOTION_HISTORY'
  | 'SALE_HISTORY'
  | 'UNITY_PRODUCT'
  | 'VARIATIONS_PRICING_GAMING';

export type MfpWhitelistProductSortBy =
  | 'END_TIME'
  | 'START_TIME';

export type MmsLeadProductCategory =
  | 'ARTS_CRAFTS_AND_SEWING'
  | 'BABY_AND_TODDLER'
  | 'BOOKS'
  | 'CARS_AND_AUTOMOTIVE'
  | 'CLOTHING_SHOES_AND_ACCESSORIES'
  | 'COLLECTABLES_AND_MEMORABILIA'
  | 'ELECTRONICS_AND_TECHNOLOGY'
  | 'FOOD_AND_DRINK'
  | 'HEALTH_AND_BEAUTY'
  | 'HOME_GARDEN_AND_PETS'
  | 'HOUSEHOLD_SUPPLIES'
  | 'JEWELLERY_AND_WATCHES'
  | 'MOVIES_VIDEO_GAMES_AND_MUSIC'
  | 'MUSICAL_INSTRUMENTS_AND_DJ'
  | 'OTHER'
  | 'REFURBISHED_ELECTRONICS'
  | 'SPORTS_AND_OUTDOORS'
  | 'TOOLS_AND_DIY'
  | 'TOYS_AND_GAMES';

export type MmsLeadSubmissionInput = {
  annualRevenue: MmsLeadYearlyRevenue;
  companyLegalName: Scalars['String'];
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  productCategory: MmsLeadProductCategory;
  websiteUrl: Scalars['String'];
};

export type MmsLeadSubmissionMutation = {
  __typename?: 'MMSLeadSubmissionMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MmsLeadYearlyRevenue = {
  end: CurrencyInput;
  start: CurrencyInput;
};

export type MsrCategory =
  | 'ELECTRICAL_PRODUCTS'
  | 'ELECTRONICS'
  | 'PPE'
  | 'TOYS';

export type ManualLinkAuthentication = {
  merchant: Scalars['String'];
  password: Scalars['String'];
  sendPhoneCall?: InputMaybe<Scalars['Boolean']>;
};

export type ManualLinkAuthenticationMutation = {
  __typename?: 'ManualLinkAuthenticationMutation';
  message?: Maybe<Scalars['String']>;
  obfuscatedPhoneNumber?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  supportVerificationCode?: Maybe<Scalars['String']>;
};

export type ManualLinkDeletion = {
  merchant: Scalars['String'];
};

export type ManualLinkDeletionMutation = {
  __typename?: 'ManualLinkDeletionMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ManualLinkVerification = {
  merchant: Scalars['String'];
  verificationCode: Scalars['String'];
};

export type ManualLinkVerificationMutation = {
  __typename?: 'ManualLinkVerificationMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MarkProductTaxonomyCategoryDisputeUnchanged = {
  __typename?: 'MarkProductTaxonomyCategoryDisputeUnchanged';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MarkProductTaxonomyCategoryDisputeUnchangedInput = {
  adminNote?: InputMaybe<Scalars['String']>;
  adminUnchangedReason: ProductTaxonomyCategoryDisputeAdminUnchangedReason;
  disputeId: Scalars['ObjectIdType'];
};

export type MarkProductTaxonomyCategoryDisputeUpdated = {
  __typename?: 'MarkProductTaxonomyCategoryDisputeUpdated';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MarkProductTaxonomyCategoryDisputeUpdatedInput = {
  categoryIdApproved: Scalars['Int'];
  categoryPath: Scalars['String'];
  categoryTreeId: Scalars['Int'];
  categoryTreeVersion: Scalars['String'];
  disputeId: Scalars['ObjectIdType'];
  l1CategoryIdApproved: Scalars['Int'];
};

export type MarketingBonusBudgetType =
  | 'CNY_BONUS_BUDGET'
  | 'DECREASED_PB_SPEND_BONUS_BUDGET'
  | 'NO_PROMOTION'
  | 'VIDEO_PRODUCTS_BONUS_BUDGET';

export type MarketingCampaignPropertySchema = {
  __typename?: 'MarketingCampaignPropertySchema';
  campaignLockDays: Scalars['Int'];
  flexibleBudgetSuggestedBudgetFactor: Scalars['Float'];
  learningStatusThreshold: Scalars['Int'];
  maxBid: CurrencyValue;
  maxCampaignNameLength: Scalars['Int'];
  maxCsvDownloadRows: Scalars['Int'];
  maxKeywordLen: Scalars['Int'];
  maxKeywords: Scalars['Int'];
  maxNumWeeks: Scalars['Int'];
  maxProducts: Scalars['Int'];
  maxStartDate: Datetime;
  minBid: CurrencyValue;
  minKeywords: Scalars['Int'];
  minStartDate: Datetime;
};

export type MarketingCampaignState =
  | 'CANCELLED'
  | 'DRAFTING'
  | 'ENDED'
  | 'NEW'
  | 'PAID'
  | 'PENDING'
  | 'READY'
  | 'SAVED'
  | 'STARTED'
  | 'STOPPED';

export type MarketingFlexibleBudgetType =
  | 'ALL_TIER'
  | 'DISABLED'
  | 'SILVER_TIER';

export type MarketingImpressionDailyStats = {
  __typename?: 'MarketingImpressionDailyStats';
  date: Datetime;
  impressions?: Maybe<Scalars['Int']>;
};

export type MarketingMerchantPropertySchema = {
  __typename?: 'MarketingMerchantPropertySchema';
  allowLocalizedCurrency: Scalars['Boolean'];
  allowMaxboost: Scalars['Boolean'];
  canAcceptTos: Scalars['Boolean'];
  dailyMinBudget: CurrencyValue;
  defaultFlexibleBudgetType: MarketingFlexibleBudgetType;
  hasAutomatedCampaign: Scalars['Boolean'];
  isFreeBudgetMerchant: Scalars['Boolean'];
  latestTosVersion: Scalars['Int'];
  maxBudgetToAdd: CurrencyValue;
  minBudgetToAdd: CurrencyValue;
  minSpendPerProduct: CurrencyValue;
  offsiteBoost: OffsiteBoost;
  refundAssuranceConstants: RefundAssuranceConstants;
  showCredits: Scalars['Boolean'];
  spending: MarketingSpendingBreakdown;
  state: MarketingMerchantState;
  wishSubsidyDiscountFactor: Scalars['Float'];
};

export type MarketingMerchantState =
  | 'APPROVED'
  | 'INVITED'
  | 'PENDING'
  | 'REJECTED';

export type MarketingPeriodImpressionStats = {
  __typename?: 'MarketingPeriodImpressionStats';
  endDate: Datetime;
  impressionDailyStats: Array<MarketingImpressionDailyStats>;
  startDate: Datetime;
  totalImpressions: Scalars['String'];
};

export type MarketingServiceMutations = {
  __typename?: 'MarketingServiceMutations';
  acceptTos: ProductBoostAcceptTos;
  createLqdCampaign: CreateLqdCampaign;
  updateOffsiteBoost: UpdateOffsiteBoost;
};


export type MarketingServiceMutationsAcceptTosArgs = {
  input: ProductBoostAcceptTosInput;
};


export type MarketingServiceMutationsCreateLqdCampaignArgs = {
  input: LqdCampaignInput;
};


export type MarketingServiceMutationsUpdateOffsiteBoostArgs = {
  input: OffsiteBoostPropertyInput;
};

export type MarketingServiceSchema = {
  __typename?: 'MarketingServiceSchema';
  actionRequiredCampaignCount: Scalars['Int'];
  balanceTransactions: Array<BalanceTransactionRecord>;
  balanceTransactionsCount: Scalars['Int'];
  campaign?: Maybe<CampaignSchema>;
  campaignProperty?: Maybe<MarketingCampaignPropertySchema>;
  creditTransactions: Array<CreditTransactionRecord>;
  creditTransactionsCount: Scalars['Int'];
  currentMerchant?: Maybe<MarketingMerchantPropertySchema>;
  floorbids: Array<FloorBidsSchema>;
  impressionStats: MarketingPeriodImpressionStats;
  lowBudgetCampaignCount: Scalars['Int'];
  lqdPromotion: LqdPromotionSchema;
  merchantProperty?: Maybe<MarketingMerchantPropertySchema>;
  pendingCampaignCount: Scalars['Int'];
  productPromotion?: Maybe<ProductPromotionSchema>;
  productPromotions: Array<ProductPromotionSchema>;
  productPromotionsCount: Scalars['Int'];
  promotableProducts: Array<PromotableProduct>;
  promotableProductsCount: Scalars['Int'];
  trendingCategories: Array<TrueTagSchema>;
};


export type MarketingServiceSchemaActionRequiredCampaignCountArgs = {
  createdInPastDays?: InputMaybe<Scalars['Int']>;
};


export type MarketingServiceSchemaBalanceTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type MarketingServiceSchemaCampaignArgs = {
  duplicateId?: InputMaybe<Scalars['ObjectIdType']>;
  id: Scalars['ObjectIdType'];
};


export type MarketingServiceSchemaCreditTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type MarketingServiceSchemaImpressionStatsArgs = {
  endTime: DatetimeInput;
  startTime: DatetimeInput;
};


export type MarketingServiceSchemaMerchantPropertyArgs = {
  merchantId: Scalars['ObjectIdType'];
};


export type MarketingServiceSchemaPendingCampaignCountArgs = {
  createdInPastDays?: InputMaybe<Scalars['Int']>;
};


export type MarketingServiceSchemaProductPromotionArgs = {
  productId: Scalars['ObjectIdType'];
};


export type MarketingServiceSchemaProductPromotionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  promotionStatuses?: InputMaybe<Array<ProductPromotionStatus>>;
  query?: InputMaybe<Scalars['String']>;
  refundAssuranceType?: InputMaybe<ProductPromotionRefundAssuranceType>;
  searchType?: InputMaybe<ProductPromotionSearchType>;
};


export type MarketingServiceSchemaProductPromotionsCountArgs = {
  promotionStatuses?: InputMaybe<Array<ProductPromotionStatus>>;
  query?: InputMaybe<Scalars['String']>;
  refundAssuranceType?: InputMaybe<ProductPromotionRefundAssuranceType>;
  searchType?: InputMaybe<ProductPromotionSearchType>;
};


export type MarketingServiceSchemaPromotableProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ProductPromotionSearchType>;
  wishExpressOnly?: InputMaybe<Scalars['Boolean']>;
};


export type MarketingServiceSchemaPromotableProductsCountArgs = {
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ProductPromotionSearchType>;
  wishExpressOnly?: InputMaybe<Scalars['Boolean']>;
};

export type MarketingSpendingBreakdown = {
  __typename?: 'MarketingSpendingBreakdown';
  accountBalance: CurrencyValue;
  budgetAvailable: CurrencyValue;
  pending: CurrencyValue;
  promotionBalance: CurrencyValue;
  promotionCredit: CurrencyValue;
  promotionLoan: CurrencyValue;
  promotionLoanDescription: Scalars['String'];
};

export type MarketingStats = {
  __typename?: 'MarketingStats';
  lqdPromotion: LqdPromotionStats;
  offsiteBoost: OffsiteBoostStats;
};


export type MarketingStatsLqdPromotionArgs = {
  campaignId: Scalars['ObjectIdType'];
};


export type MarketingStatsOffsiteBoostArgs = {
  endDate: DatetimeInput;
  startDate: DatetimeInput;
};

export type MerchantActionsRequiredSchema = {
  __typename?: 'MerchantActionsRequiredSchema';
  actionsCompleted: Array<MerchantActionsType>;
  actionsRequired: Array<MerchantActionsType>;
  currentAction: MerchantActionsType;
  id: Scalars['ObjectIdType'];
  merchantId: Scalars['ObjectIdType'];
  state: MerchantActionsRequiredStateType;
};

export type MerchantActionsRequiredStateType =
  | 'COMPLETED'
  | 'IN_PROGRESS'
  | 'REJECTED';

export type MerchantActionsType =
  | 'BANK_VERIFICATION'
  | 'SELLER_PROFILE_VERIFICATION';

export type MerchantAnnouncementCategory =
  | 'ACCOUNT_SETTINGS'
  | 'API'
  | 'INSIGHTS'
  | 'INTELLECTUAL_PROPERTY'
  | 'LOCAL_CURRENCY'
  | 'LOGISTICS'
  | 'LOGISTICS_PRICING'
  | 'ORDERS'
  | 'PAYMENTS'
  | 'POLICIES_AND_TERMS'
  | 'PRODUCTS'
  | 'SHIPPING_CARRIERS'
  | 'TAX';

export type MerchantAnnouncementProgram =
  | 'ADVANCED_LOGISTICS_PROGRAM'
  | 'EPC'
  | 'FBW_FBS'
  | 'MERCHANT_FUNDED_PROMOTIONS'
  | 'MERCHANT_STANDING'
  | 'PARTIAL_REFUNDS'
  | 'PRODUCTBOOST'
  | 'RETURNS_PROGRAM'
  | 'VIDEOS'
  | 'WISHPOST'
  | 'WISH_EXPRESS'
  | 'WISH_STANDARDS';

export type MerchantAnnouncementSchema = {
  __typename?: 'MerchantAnnouncementSchema';
  categories?: Maybe<Array<AnnouncementCategorySchema>>;
  createdAt?: Maybe<Datetime>;
  ctaDueDate?: Maybe<Datetime>;
  ctaLink?: Maybe<Scalars['String']>;
  ctaText?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Datetime>;
  id: Scalars['ObjectIdType'];
  important?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  program?: Maybe<AnnouncementProgramSchema>;
  sender: UserSchema;
  state: MerchantAnnouncementState;
  title?: Maybe<Scalars['String']>;
  type: MerchantAnnouncementType;
};

export type MerchantAnnouncementState =
  | 'COMPLETE'
  | 'CREATING'
  | 'NEW'
  | 'UPDATE'
  | 'UPDATING';

export type MerchantAnnouncementType =
  | 'BD_ANNOUNCEMENT'
  | 'SYSTEM_UPDATE';

export type MerchantAnnouncementV2Schema = {
  __typename?: 'MerchantAnnouncementV2Schema';
  audienceSourceType: AnnouncementAudienceSourceType;
  categories: Array<AnnouncementCategorySchemaV2>;
  contentType?: Maybe<AnnouncementContentType>;
  ctaDueDate?: Maybe<Datetime>;
  ctaText?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Datetime>;
  id: Scalars['ObjectIdType'];
  important?: Maybe<Scalars['Boolean']>;
  link?: Maybe<Scalars['String']>;
  locales: Array<AnnouncementLocale>;
  message?: Maybe<Scalars['String']>;
  program?: Maybe<AnnouncementProgramSchemaV2>;
  publishDate: Datetime;
  sender: UserSchema;
  state: AnnouncementState;
  title?: Maybe<Scalars['String']>;
  type: AnnouncementType;
  userAnnouncementCount: Scalars['Int'];
};

export type MerchantBrandSchema = {
  __typename?: 'MerchantBrandSchema';
  brand: BrandSchema;
  lifetimeStatsObject?: Maybe<BrandedMerchantLifeTimeStatsObjectSchema>;
  numProducts: Scalars['Int'];
};

export type MerchantConnectionSchema = {
  __typename?: 'MerchantConnectionSchema';
  confidence?: Maybe<Scalars['Float']>;
  id: Scalars['ObjectIdType'];
  matchedValue: Scalars['String'];
  merchantIds: Array<Scalars['String']>;
  merchants: Array<MerchantSchema>;
  reason: Scalars['String'];
  updatedTime?: Maybe<Datetime>;
};

export type MerchantCountryDetailsSchema = {
  __typename?: 'MerchantCountryDetailsSchema';
  detectedDomicileCountry?: Maybe<Country>;
  detectedShipFromCountry?: Maybe<Country>;
  domicileDetectionFactors: Array<DetectionFactor>;
  domicileDetectionReason?: Maybe<Scalars['String']>;
};

export type MerchantCountryDetectionFactorType =
  | 'BD_REP_COUNTRY'
  | 'BOUND_WISHPOST'
  | 'BUSINESS_ADDRESS'
  | 'DOMICILE_OVERRIDE'
  | 'EMAIL_PROVIDER'
  | 'ERP_ENROLLMENT'
  | 'GEOIP_LOGIN'
  | 'MERCHANT_GROUP'
  | 'ORDER_SHIPPING_PROVIDER'
  | 'ORDER_TRACKING_ORIGIN'
  | 'PAYMENT_PROVIDER'
  | 'PHONE_COUNTRY'
  | 'SHIP_FROM_OVERRIDE'
  | 'STORE_ADDRESS'
  | 'VERIFIED_PROFILE'
  | 'WISHPOST_LINKED';

export type MerchantEntityManualLinkMutations = {
  __typename?: 'MerchantEntityManualLinkMutations';
  completeManualLink?: Maybe<ManualLinkVerificationMutation>;
  deleteManualLink?: Maybe<ManualLinkDeletionMutation>;
  requestManualLink?: Maybe<ManualLinkAuthenticationMutation>;
};


export type MerchantEntityManualLinkMutationsCompleteManualLinkArgs = {
  input: ManualLinkVerification;
};


export type MerchantEntityManualLinkMutationsDeleteManualLinkArgs = {
  input: ManualLinkDeletion;
};


export type MerchantEntityManualLinkMutationsRequestManualLinkArgs = {
  input: ManualLinkAuthentication;
};

export type MerchantEntitySchema = {
  __typename?: 'MerchantEntitySchema';
  id?: Maybe<Scalars['ObjectIdType']>;
  merchantConnections?: Maybe<Array<MerchantConnectionSchema>>;
  merchants?: Maybe<Array<MerchantSchema>>;
  updatedTime?: Maybe<Datetime>;
};

export type MerchantFbwSchema = {
  __typename?: 'MerchantFBWSchema';
  availableWarehouses?: Maybe<Array<FbwWarehouseSchema>>;
  availableWarehousesForShippingPlanSubmission?: Maybe<Array<FbwWarehouseSchema>>;
};

export type MerchantFacingPayoutState =
  | 'CANCELLED'
  | 'DELAYED'
  | 'FAILED'
  | 'GENERATING'
  | 'IN_PROGRESS'
  | 'NA'
  | 'PENDING'
  | 'REISSUED'
  | 'RELEASED'
  | 'RESUBMITTED'
  | 'SUCCESS'
  | 'WITHHOLD';

export type MerchantFeedJobStatus =
  | 'CANCELLED'
  | 'EXCEPTION'
  | 'FINISHED'
  | 'FINISHED_AND_EMAILED'
  | 'NEW'
  | 'NEW_AND_EMAILED'
  | 'PENDING'
  | 'RUNNING';

export type MerchantFileSchema = {
  __typename?: 'MerchantFileSchema';
  displayFilename: Scalars['String'];
  fileUrl: Scalars['String'];
  id: Scalars['ObjectIdType'];
  isImageFile: Scalars['Boolean'];
};


export type MerchantFileSchemaFileUrlArgs = {
  console?: InputMaybe<Scalars['Boolean']>;
};

export type MerchantFinalSaleAction =
  | 'DISABLE'
  | 'ENABLE';

export type MerchantFinalSaleMutations = {
  __typename?: 'MerchantFinalSaleMutations';
  updateMerchantFinalSale?: Maybe<UpdateMerchantFinalSale>;
};


export type MerchantFinalSaleMutationsUpdateMerchantFinalSaleArgs = {
  input?: InputMaybe<MerchantFinalSaleUpdateInput>;
};

export type MerchantFinalSaleUpdateInput = {
  action: MerchantFinalSaleAction;
  category: FinalSaleCategory;
  merchantId: Scalars['ObjectIdType'];
};

export type MerchantFineExemptionInfoLinkType =
  | 'ARTICLE'
  | 'CATEGORY'
  | 'FULL_LINK';

export type MerchantFineSchema = {
  __typename?: 'MerchantFineSchema';
  amount?: Maybe<Scalars['Float']>;
  creator?: Maybe<UserSchema>;
  delayedDeductionDate?: Maybe<Datetime>;
  exemptInfoLink?: Maybe<Scalars['String']>;
  exemptLinkType?: Maybe<MerchantFineExemptionInfoLinkType>;
  fineType: FineReason;
  id: Scalars['ObjectIdType'];
  isExempt: Scalars['Boolean'];
  localizedAmount?: Maybe<CurrencyValue>;
  merchantId: Scalars['ObjectIdType'];
  merchantPaymentId?: Maybe<Scalars['ObjectIdType']>;
  merchantPaymentTime?: Maybe<Datetime>;
  phabTicketId?: Maybe<Scalars['String']>;
  policyLink?: Maybe<Scalars['String']>;
  reversals?: Maybe<Array<Reversal>>;
  status: Status;
  timestamp?: Maybe<Datetime>;
};

export type MerchantFulfillmentTimeInfoInput = {
  carrierPickupTime?: InputMaybe<Scalars['String']>;
  merchantHandlingTime?: InputMaybe<Scalars['Int']>;
  pickupCarrier?: InputMaybe<PickupCarrier>;
  workdayCalendar?: InputMaybe<WorkdayCalenderInput>;
  workdayOverrideCalendar?: InputMaybe<Array<InputMaybe<WorkDayOverrideInput>>>;
};

export type MerchantGamingReviewFieldTicketType =
  | 'lastSourceUpsertDate';

export type MerchantGamingReviewMutations = {
  __typename?: 'MerchantGamingReviewMutations';
  manualCreate?: Maybe<MerchantGamingReviewTicketManualCreation>;
  manualCreateUpload?: Maybe<MerchantGamingReviewTicketManualCreationUpload>;
  updateMerchantGamingReviewTicket?: Maybe<UpdateMerchantGamingReviewTicket>;
};


export type MerchantGamingReviewMutationsManualCreateArgs = {
  input: MerchantGamingReviewTicketManualCreationUploadInput;
};


export type MerchantGamingReviewMutationsManualCreateUploadArgs = {
  input: MerchantGamingReviewTicketManualCreationUploadInput;
};


export type MerchantGamingReviewMutationsUpdateMerchantGamingReviewTicketArgs = {
  input?: InputMaybe<MerchantGamingReviewUpdateInput>;
};

export type MerchantGamingReviewPolicyTierType =
  | 'HOME_TIER'
  | 'PROBATION_TIER'
  | 'SUSPICIOUS_TIER';

export type MerchantGamingReviewSourceType =
  | 'GATE_KEEPER'
  | 'POLICY'
  | 'WISH_ADMIN';

export type MerchantGamingReviewState =
  | 'AWAITING_ADMIN'
  | 'CLOSED'
  | 'CONFIRMED'
  | 'ESCALATED'
  | 'REJECTED';

export type MerchantGamingReviewTicketAction =
  | 'CLAIM'
  | 'CLOSE'
  | 'COMMENT'
  | 'ESCALATE'
  | 'UNCLAIM'
  | 'UPDATE_POLICY_TIER';

export type MerchantGamingReviewTicketCommentSchema = {
  __typename?: 'MerchantGamingReviewTicketCommentSchema';
  date: Datetime;
  message: Scalars['String'];
  senderId?: Maybe<Scalars['ObjectIdType']>;
  senderName?: Maybe<Scalars['String']>;
};

export type MerchantGamingReviewTicketManualCreation = {
  __typename?: 'MerchantGamingReviewTicketManualCreation';
  logs?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MerchantGamingReviewTicketManualCreationSchema = {
  __typename?: 'MerchantGamingReviewTicketManualCreationSchema';
  merchantId: Scalars['ObjectIdType'];
  reason: Scalars['String'];
};

export type MerchantGamingReviewTicketManualCreationUpload = {
  __typename?: 'MerchantGamingReviewTicketManualCreationUpload';
  logs?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  updateList: Array<MerchantGamingReviewTicketManualCreationSchema>;
};

export type MerchantGamingReviewTicketManualCreationUploadInput = {
  fileUrl: Scalars['String'];
};

export type MerchantGamingReviewTicketSchema = {
  __typename?: 'MerchantGamingReviewTicketSchema';
  claimedAdminId?: Maybe<Scalars['ObjectIdType']>;
  claimedAdminUser?: Maybe<UserSchema>;
  claimedDate?: Maybe<Datetime>;
  comments?: Maybe<Array<MerchantGamingReviewTicketCommentSchema>>;
  decisionAdminId?: Maybe<Scalars['ObjectIdType']>;
  decisionDate?: Maybe<Datetime>;
  id: Scalars['ObjectIdType'];
  infractionIds?: Maybe<Array<Scalars['ObjectIdType']>>;
  isClaimed: Scalars['Boolean'];
  isClosed: Scalars['Boolean'];
  isOpen: Scalars['Boolean'];
  lastSourceUpsertDate: Datetime;
  merchant?: Maybe<MerchantSchema>;
  merchantGamingReviewPolicyTier?: Maybe<MerchantGamingReviewPolicyTierType>;
  merchantId: Scalars['ObjectIdType'];
  sources: Array<MerchantGamingReviewTicketSourceSchema>;
  state: MerchantGamingReviewState;
};

export type MerchantGamingReviewTicketSort = {
  field: MerchantGamingReviewFieldTicketType;
  order: SortOrderType;
};

export type MerchantGamingReviewTicketSourceSchema = {
  __typename?: 'MerchantGamingReviewTicketSourceSchema';
  creator?: Maybe<UserSchema>;
  reason?: Maybe<Scalars['String']>;
  sourceType: MerchantGamingReviewSourceType;
  triggerDate: Datetime;
};

export type MerchantGamingReviewUpdateInput = {
  action: MerchantGamingReviewTicketAction;
  id: Scalars['ObjectIdType'];
  infractionIds?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  policyTier?: InputMaybe<MerchantGamingReviewPolicyTierType>;
};

export type MerchantIdentityMutations = {
  __typename?: 'MerchantIdentityMutations';
  bankAccountVerification: BankAccountVerificationReviewerMutations;
};

export type MerchantIdentityServiceSchema = {
  __typename?: 'MerchantIdentityServiceSchema';
  bankAccountVerifications?: Maybe<Array<BankAccountVerificationSchema>>;
  bankAccountVerificationsCount?: Maybe<Scalars['Int']>;
};


export type MerchantIdentityServiceSchemaBankAccountVerificationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<BankAccountVerificationStatus>;
};


export type MerchantIdentityServiceSchemaBankAccountVerificationsCountArgs = {
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  state?: InputMaybe<BankAccountVerificationStatus>;
};

export type MerchantInviteInfo = {
  __typename?: 'MerchantInviteInfo';
  email?: Maybe<Scalars['String']>;
  promotionPeriodInDays?: Maybe<Scalars['Int']>;
  promotionRevShare?: Maybe<Scalars['Float']>;
  useMarketingTransactionBonus?: Maybe<Scalars['Boolean']>;
  valid: Scalars['Boolean'];
};

export type MerchantLeadNumberOfSkUs = {
  end: Scalars['Int'];
  start: Scalars['Int'];
};

export type MerchantLeadProductCategory =
  | 'ARTS_CRAFTS_AND_SEWING'
  | 'BABY_AND_TODDLER'
  | 'BOOKS'
  | 'CARS_AND_AUTOMOTIVE'
  | 'CLOTHING_SHOES_AND_ACCESSORIES'
  | 'COLLECTABLES_AND_MEMORABILIA'
  | 'ELECTRONICS_AND_TECHNOLOGY'
  | 'FOOD_AND_DRINK'
  | 'HEALTH_AND_BEAUTY'
  | 'HOME_GARDEN_AND_PETS'
  | 'HOUSEHOLD_SUPPLIES'
  | 'JEWELLERY_AND_WATCHES'
  | 'MOVIES_VIDEO_GAMES_AND_MUSIC'
  | 'MUSICAL_INSTRUMENTS_AND_DJ'
  | 'OTHER'
  | 'REFURBISHED_ELECTRONICS'
  | 'SPORTS_AND_OUTDOORS'
  | 'TOOLS_AND_DIY'
  | 'TOYS_AND_GAMES';

export type MerchantLeadSellingYearsRange = {
  end: Scalars['Int'];
  start: Scalars['Int'];
};

export type MerchantLeadSubmissionInput = {
  annualRevenue: MerchantLeadYearlyRevenue;
  brandRegistrationCountry?: InputMaybe<BrandRegistrationCountry>;
  channelPartners?: InputMaybe<Scalars['String']>;
  companyLegalName: Scalars['String'];
  country: CountryCode;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  howLongSelling: MerchantLeadSellingYearsRange;
  lastName: Scalars['String'];
  merchantPartnerName?: InputMaybe<Scalars['String']>;
  merchantType?: InputMaybe<MerchantType>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  productCategory: MerchantLeadProductCategory;
  registeredBefore?: InputMaybe<Scalars['Boolean']>;
  skuQuantity: MerchantLeadNumberOfSkUs;
  utmSource?: InputMaybe<Scalars['String']>;
  websiteUrl: Scalars['String'];
};

export type MerchantLeadSubmissionMutation = {
  __typename?: 'MerchantLeadSubmissionMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MerchantLeadYearlyRevenue = {
  end: CurrencyInput;
  start: CurrencyInput;
};

export type MerchantMobile = {
  __typename?: 'MerchantMobile';
  minimumAppVersion: Scalars['String'];
};


export type MerchantMobileMinimumAppVersionArgs = {
  currentVersion: Scalars['String'];
  platform: MobilePlatformType;
};

export type MerchantMutation = {
  __typename?: 'MerchantMutation';
  bankAccountVerification: BankAccountVerificationMerchantMutations;
  changeDisplayName: ChangeDisplayNameMutation;
  changePreferredUnits: ChangePreferredUnitsMutation;
  euVatTax?: Maybe<EuvatTaxMutations>;
  merchantSenderAddress: MerchantSenderAddressMutations;
  merchantTaxIdentification: MerchantTaxIdentificationMutations;
  merchantTermsAgreed?: Maybe<MerchantTermsAgreedMutations>;
  mftOptOut?: Maybe<ChangeMftOptOutMutation>;
  returnSettings: MerchantReturnSettingsMutations;
  returnWarehouseSettings?: Maybe<MerchantReturnWarehouseMutations>;
  sellerIdentityCnVerification: SellerIdentityCnVerificationMutations;
  sellerIdentityVerification: SellerIdentityVerificationMutations;
  shippingSetting: ShippingSettingMutations;
  taxSettings: TaxSettingsMutations;
  vacationSettings: VacationSettings;
  warehouseSettings?: Maybe<MerchantWarehouseMutations>;
};


export type MerchantMutationChangeDisplayNameArgs = {
  input: ChangeDisplayNameInput;
};


export type MerchantMutationChangePreferredUnitsArgs = {
  input: ChangePreferredUnitsInput;
};


export type MerchantMutationMftOptOutArgs = {
  input: ChangeMftOptOutInput;
};

export type MerchantOnboardingStep =
  | 'ADD_PRODUCT'
  | 'BLUE_DOWNLOAD_APP_DEPRECATED'
  | 'BLUE_LIST_FIRST_PRODUCT_DEPRECATED'
  | 'BLUE_SET_PAYMENT_INFO_DEPRECATED'
  | 'BLUE_SET_STORE_HOURS_DEPRECATED'
  | 'BLUE_SET_STORE_PHOTO_DEPRECATED'
  | 'BUSINESS_INFO'
  | 'CONFIRM_EMAIL'
  | 'CONFIRM_PHONE'
  | 'CONFIRM_TOS'
  | 'CONTACT_INFO'
  | 'DEP_STORE_REGISTRATION_FEE'
  | 'ENABLE_2FA'
  | 'EXTRA_INFO'
  | 'LEARN_ABOUT_WE'
  | 'PAYMENT_INFO'
  | 'RESELLER_AGREEMENT'
  | 'SETUP_ACCOUNT'
  | 'SETUP_SHIPPING'
  | 'STORE_IDENTIFICATION'
  | 'STORE_IDENTIFICATION_DEPRECATED'
  | 'STORE_INFO';

export type MerchantOneoffPaymentMutations = {
  __typename?: 'MerchantOneoffPaymentMutations';
  createBulkOneoffAdminToolPayments?: Maybe<CreateBulkOneoffAdminToolPayments>;
};


export type MerchantOneoffPaymentMutationsCreateBulkOneoffAdminToolPaymentsArgs = {
  input: CreateBulkOneoffAdminToolPaymentsInput;
};

export type MerchantOneoffPaymentSchema = {
  __typename?: 'MerchantOneoffPaymentSchema';
  amount: CurrencyValue;
  creationTime: Datetime;
  disputeId?: Maybe<Scalars['ObjectIdType']>;
  eligibleTime: Datetime;
  id: Scalars['ObjectIdType'];
  localizedAmount?: Maybe<CurrencyValue>;
  merchantId: Scalars['ObjectIdType'];
  merchantPaymentTime?: Maybe<Datetime>;
  orderId?: Maybe<Scalars['ObjectIdType']>;
  paymentId?: Maybe<Scalars['ObjectIdType']>;
  status: OneoffPaymentStatus;
  ticketId?: Maybe<Scalars['String']>;
  type: OneoffPaymentType;
};


export type MerchantOneoffPaymentSchemaAmountArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};

export type MerchantPaymentCollectorType =
  | 'BUSINESS'
  | 'INDIVIDUAL';

export type MerchantPaymentCycle =
  | 'NORMAL'
  | 'WEEKLY';

export type MerchantPaymentDetail = {
  __typename?: 'MerchantPaymentDetail';
  accountBalance?: Maybe<CurrencyValue>;
  allowedProviders: Array<PaymentProvider>;
  businessInfo?: Maybe<PaymentBusinessInfo>;
  canEditPaymentInfo: Scalars['Boolean'];
  chargeTransaction?: Maybe<ChargeTransactionInfo>;
  connectedChargeProviders?: Maybe<Array<ChargePaymentProviderType>>;
  currentProvider?: Maybe<PaymentProvider>;
  fullyEnrolledInPaymentCycle: Scalars['Boolean'];
  hasActiveLoan: Scalars['Boolean'];
  hasPaymentInfoNotice: Scalars['Boolean'];
  hasPayoutInProgress: Scalars['Boolean'];
  infoCollectedForPaymentProvider?: Maybe<InfoCollectedForPaymentProvider>;
  ledgerAccountBalances?: Maybe<Array<LedgerAccountBalance>>;
  ledgerItemInfo?: Maybe<LedgerItemInfo>;
  lineItemCount?: Maybe<Scalars['Int']>;
  lineItemSearchTypes?: Maybe<Array<LineItemSearchType>>;
  lineItemTypes?: Maybe<Array<MerchantPaymentLineItemType>>;
  lineItems?: Maybe<Array<MerchantPaymentLineItem>>;
  messages?: Maybe<Array<MerchantPaymentWarningMessage>>;
  nextPayoutTime?: Maybe<Datetime>;
  paymentCycle: MerchantPaymentCycle;
  payoutHistory?: Maybe<Array<MerchantPayoutHistory>>;
  payoutHistoryCount?: Maybe<Scalars['Int']>;
  pendingChargeProviders?: Maybe<Array<ChargePaymentProviderType>>;
  personalInfo?: Maybe<PaymentPersonalInfo>;
  releasePayoutRequest?: Maybe<ReleasePayoutRequest>;
  showLedgerUi: Scalars['Boolean'];
};


export type MerchantPaymentDetailAccountBalanceArgs = {
  balanceType: AccountBalanceType;
  currency: PaymentCurrencyCode;
};


export type MerchantPaymentDetailChargeTransactionArgs = {
  id: Scalars['ObjectIdType'];
};


export type MerchantPaymentDetailLedgerItemInfoArgs = {
  balanceType: LedgerAccountBalanceType;
  currency: PaymentCurrencyCode;
  cutoffId?: InputMaybe<Scalars['String']>;
  cutoffTime?: InputMaybe<DatetimeInput>;
  endDate?: InputMaybe<DatetimeInput>;
  includeTotalCount?: InputMaybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  startDate?: InputMaybe<DatetimeInput>;
};


export type MerchantPaymentDetailLineItemCountArgs = {
  balanceType: AccountBalanceType;
  currency: PaymentCurrencyCode;
  endDate?: InputMaybe<DatetimeInput>;
  lineItemTypes?: InputMaybe<Array<LineItemType>>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<LineItemSearchType>;
  startDate?: InputMaybe<DatetimeInput>;
};


export type MerchantPaymentDetailLineItemsArgs = {
  balanceType: AccountBalanceType;
  currency: PaymentCurrencyCode;
  endDate?: InputMaybe<DatetimeInput>;
  limit: Scalars['Int'];
  lineItemTypes?: InputMaybe<Array<LineItemType>>;
  offset: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<LineItemSearchType>;
  startDate?: InputMaybe<DatetimeInput>;
};


export type MerchantPaymentDetailPayoutHistoryArgs = {
  endDate?: InputMaybe<DatetimeInput>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  provider?: InputMaybe<PayoutPaymentProviderType>;
  startDate?: InputMaybe<DatetimeInput>;
};


export type MerchantPaymentDetailPayoutHistoryCountArgs = {
  endDate?: InputMaybe<DatetimeInput>;
  provider?: InputMaybe<PayoutPaymentProviderType>;
  startDate?: InputMaybe<DatetimeInput>;
};

export type MerchantPaymentLineItem = {
  __typename?: 'MerchantPaymentLineItem';
  createdTime: Datetime;
  creditAmount?: Maybe<CurrencyValue>;
  debitAmount?: Maybe<CurrencyValue>;
  description: Scalars['String'];
  type: LineItemType;
};

export type MerchantPaymentLineItemType =
  | 'B2B_SALE_FEE'
  | 'CANCEL_WITHHOLD_PAYMENT'
  | 'CHINA_POST_SUBSIDY'
  | 'CHINA_POST_SUBSIDY_REVERSE'
  | 'CN_ORDER_NOT_SHIP_WITH_WISHPOST_FINE'
  | 'COLLECTIONS_BOOST_CAMPAIGN_FEE'
  | 'CONSOLIDATE_MP_FINE'
  | 'CONSOLIDATE_MP_PAYMENT'
  | 'COUNTERFEIT_REFUND'
  | 'COVID19_SUBSIDY'
  | 'COVID19_SUBSIDY_REVERSE'
  | 'DECEPTIVE_FULFILLMENT_FINE'
  | 'DISPUTE_APPROVED'
  | 'DOUBLE_DEDUCTION_BOOK_KEEPER'
  | 'EARLY_PAYMENT'
  | 'EARLY_PAYMENT_CANCELLATION'
  | 'EARLY_PAYMENT_DEDUCTION'
  | 'EARLY_PAYMENT_REIMBURSEMENT_FEE'
  | 'ESTIMATED_WISHPOST_SHIPPING'
  | 'ESTIMATED_WISHPOST_SHIPPING_REFUND'
  | 'EXTERNAL_BOOST_CPA_FEE'
  | 'EXTERNAL_BOOST_FEE'
  | 'FAKE_RATING_FINE'
  | 'FAKE_TRACKING_FINE'
  | 'FBW_FEE'
  | 'FBW_PAYMENT'
  | 'FINE_REVERSED'
  | 'INFRACTION_FINE'
  | 'INITIAL_WISHPOST_SHIPPING'
  | 'INITIAL_WISHPOST_SHIPPING_OFFSET'
  | 'INITIAL_WISHPOST_SHIPPING_REFUND'
  | 'INITIAL_WISHPOST_SHIPPING_REFUND_OFFSET'
  | 'LATE_CONFIRMED_FULFILLMENT_FINE'
  | 'LCL_FBW_FEE'
  | 'LEGAL_SETTLEMENT_FINE'
  | 'LEGAL_SETTLEMENT_PAID_PENALTY'
  | 'LEGAL_SETTLEMENT_RESERVED_PENALTY'
  | 'LOGISTIC_FEE'
  | 'MARKETING_REBATE'
  | 'MARKETING_REBATE_REVERSE'
  | 'MERCHANT_CANCELLATION_FINE'
  | 'MERCHANT_HARASSMENT'
  | 'MERCHANT_INCENTIVE'
  | 'MERCHANT_INCENTIVE_REVERSE'
  | 'MISLEADING_VARIATION_FINE'
  | 'NEW_REFUNDED'
  | 'ONEOFF'
  | 'ONEOFF_ADMIN_TOOL'
  | 'ONEOFF_FINE'
  | 'OTHER_DEDUCTION'
  | 'OVERPAY_PAYMENT_AMOUNT'
  | 'PAID_PLACEMENT_ENROLLMENT_FEE'
  | 'PAID_PLACEMENT_IMPRESSION_FEE'
  | 'PAYMENT'
  | 'POLICY_VIOLATION_FINE'
  | 'PRODUCT_BOOST_BALANCE_REFUND'
  | 'PRODUCT_LISTING_FEE'
  | 'PRODUCT_REBATE'
  | 'PRODUCT_UNTAGGED_MISLEADING'
  | 'PROMOTED_PRODUCT_DISABLE_FINE'
  | 'PROMOTION_FEE'
  | 'QUALITY_REFUND_FINE'
  | 'REFUNDED'
  | 'REGISTRATION_REFUND'
  | 'RETROACTIVE_REFUND_FOR_LOW_RATED_PRODUCT'
  | 'RETROACTIVE_REFUND_FOR_PROBLEM_PRODUCT'
  | 'RETURN_LABEL_FEE'
  | 'REV_SHARE_ADJUST_PAYMENT'
  | 'SE_CASH_BACK'
  | 'SE_CASH_BACK_REVERSE'
  | 'SHIPPED'
  | 'STORE_PAYMENT'
  | 'STORE_PAYMENT_CANCELLATION'
  | 'STORE_PAYMENT_DEDUCTION'
  | 'STRATEGIC_ORDER_REBATE'
  | 'STRATEGIC_ORDER_REBATE_REVERSE'
  | 'TRANSACTION_FEE_REBATE'
  | 'TRANSACTION_FEE_REBATE_REVERSE'
  | 'UNCONFIRMED_CARRIER_FINE'
  | 'UNDERPAY_PAYMENT_AMOUNT'
  | 'UNFULFILLED_ORDER_FINE'
  | 'WISHPOST_ADJUSTMENT_DEDUCTION'
  | 'WISHPOST_ADJUSTMENT_PAYMENT'
  | 'WISHPOST_FULFILLMENT_FEE'
  | 'WISHPOST_LOGISTICS_FEE'
  | 'WISH_EXPRESS_REBATE'
  | 'WISH_EXPRESS_REBATE_REVERSE'
  | 'WISH_PARCEL_SERVICE_ADJUST_FEE'
  | 'WISH_PARCEL_SERVICE_ADJUST_PAYMENT'
  | 'WISH_PARCEL_SERVICE_FEE'
  | 'WITHHELD_RELEASED'
  | 'WITHHOLD_FUND_FINE'
  | 'WITHHOLD_PAYMENT'
  | 'WITHHOLD_RELEASE';

export type MerchantPaymentLinkInfo = {
  __typename?: 'MerchantPaymentLinkInfo';
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MerchantPaymentStatus =
  | 'DEDUCTED_WITHOUT_REFUND'
  | 'PAID'
  | 'PAID_BT'
  | 'REFUNDED'
  | 'UNPAID';

export type MerchantPaymentWarningMessage = {
  __typename?: 'MerchantPaymentWarningMessage';
  link?: Maybe<MerchantPaymentLinkInfo>;
  sentiment?: Maybe<SentimentType>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MerchantPaymentsMutation = {
  __typename?: 'MerchantPaymentsMutation';
  cancelChargeTransaction?: Maybe<CancelChargeTransactionMutation>;
  charge?: Maybe<ChargeMutation>;
  createChargeTransaction?: Maybe<CreateChargeTransactionMutation>;
  payableCleanup?: Maybe<PayableCleanupMutation>;
  payableValidation?: Maybe<PayableValidationMutation>;
  payoneerSignup?: Maybe<PayoneerSignupMutation>;
  resetPayment?: Maybe<ResetReleasePaymentRequestMutation>;
  updatePayoneerSetting?: Maybe<UpdatePayoneerSettingMutation>;
  updatePaypalSetting?: Maybe<UpdatePayPalSettingMutation>;
};


export type MerchantPaymentsMutationCancelChargeTransactionArgs = {
  input: CancelChargeTransactionInput;
};


export type MerchantPaymentsMutationChargeArgs = {
  input: ChargeInput;
};


export type MerchantPaymentsMutationCreateChargeTransactionArgs = {
  input: CreateChargeTransactionInput;
};


export type MerchantPaymentsMutationPayableCleanupArgs = {
  input: PayableCleanupInput;
};


export type MerchantPaymentsMutationPayableValidationArgs = {
  input: PayableValidationInput;
};


export type MerchantPaymentsMutationResetPaymentArgs = {
  input: ResetReleasePaymentRequestInput;
};


export type MerchantPaymentsMutationUpdatePayoneerSettingArgs = {
  input: UpdatePayoneerSettingInput;
};


export type MerchantPaymentsMutationUpdatePaypalSettingArgs = {
  input: UpdatePayPalSettingInput;
};

export type MerchantPaymentsService = {
  __typename?: 'MerchantPaymentsService';
  currentMerchant?: Maybe<MerchantPaymentDetail>;
  disbursementScheduleInfo?: Maybe<DisbursementScheduleInfo>;
  ledgerOrderInfo?: Maybe<LedgerOrderInfo>;
  ledgerPayableInfo?: Maybe<LedgerPayableInfo>;
  paymentInfo?: Maybe<MerchantPaymentDetail>;
};


export type MerchantPaymentsServiceDisbursementScheduleInfoArgs = {
  paymentCycle: Scalars['Int'];
  year: Scalars['Int'];
};


export type MerchantPaymentsServiceLedgerOrderInfoArgs = {
  orderId: Scalars['String'];
};


export type MerchantPaymentsServiceLedgerPayableInfoArgs = {
  includeEvents?: InputMaybe<Scalars['Boolean']>;
  payableId: Scalars['String'];
  payableType: Scalars['String'];
};


export type MerchantPaymentsServicePaymentInfoArgs = {
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type MerchantPayoutHistory = {
  __typename?: 'MerchantPayoutHistory';
  currency: PaymentCurrencyCode;
  description?: Maybe<MerchantPayoutHistoryDescription>;
  id: Scalars['String'];
  merchantFacingState: MerchantFacingPayoutState;
  payoutDate: Datetime;
  payoutProvider: PaymentProvider;
  rebateAmount?: Maybe<CurrencyValue>;
  totalAmount: CurrencyValue;
};

export type MerchantPayoutHistoryDescription = {
  __typename?: 'MerchantPayoutHistoryDescription';
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MerchantPolicyAgreementSource =
  | 'CN_SIGNUP_VALIDATION_FLOW'
  | 'EEA_KYC_VALIDATION_FLOW'
  | 'SELLER_PROFILE_VALIDATION_FLOW';

export type MerchantPolicyTierFactorSettings = {
  __typename?: 'MerchantPolicyTierFactorSettings';
  exemptions: Array<Maybe<MerchantPriviledge>>;
  factor: PolicyFactor;
};

export type MerchantPolicyTierSchema = {
  __typename?: 'MerchantPolicyTierSchema';
  policyFactorSettings: Array<Maybe<MerchantPolicyTierFactorSettings>>;
  tier: MerchantTier;
};

export type MerchantPreorder = {
  __typename?: 'MerchantPreorder';
  isPreorderMerchant: Scalars['Boolean'];
  productsAreSyncing: Scalars['Boolean'];
};

export type MerchantPriviledge =
  | 'WAIVE_BAN_MERCHANT'
  | 'WAIVE_CREATE_WARNING'
  | 'WAIVE_IMPRESSION_SUSPENSION'
  | 'WAIVE_ISSUE_FINE'
  | 'WAIVE_PAYMENT_WITHHOLD'
  | 'WAIVE_PRODUCT_TAKEDOWN';

export type MerchantProofDocSchema = {
  __typename?: 'MerchantProofDocSchema';
  docName: Scalars['String'];
  docType: Scalars['String'];
  expDate?: Maybe<Datetime>;
  fileDataList?: Maybe<Array<FileDataSchema>>;
  id: Scalars['ObjectIdType'];
  idNumber?: Maybe<Scalars['String']>;
  layoutTag?: Maybe<Scalars['String']>;
  wishValidationCode?: Maybe<Scalars['String']>;
};

export type MerchantProvidedAttributeSchema = {
  __typename?: 'MerchantProvidedAttributeSchema';
  name: Scalars['String'];
  value: Array<Scalars['String']>;
};

export type MerchantReturnSettingPolicyTypeOptionSchema = {
  __typename?: 'MerchantReturnSettingPolicyTypeOptionSchema';
  policyType: PolicyType;
  policyTypeText: Scalars['String'];
};

export type MerchantReturnSettingsMutations = {
  __typename?: 'MerchantReturnSettingsMutations';
  upsertMerchantReturnSettings: UpsertMerchantReturnSettingsMutation;
};


export type MerchantReturnSettingsMutationsUpsertMerchantReturnSettingsArgs = {
  input: UpsertMerchantReturnSettingsMutationInput;
};

export type MerchantReturnSettingsSchema = {
  __typename?: 'MerchantReturnSettingsSchema';
  authType?: Maybe<AuthType>;
  country: Country;
  isActive: Scalars['Boolean'];
  policyType: PolicyType;
  policyTypeText: Scalars['String'];
  returnWarehouses?: Maybe<MerchantReturnWarehouseSchema>;
  useWishReturnWarehouse: Scalars['Boolean'];
};

export type MerchantReturnWarehouseMutations = {
  __typename?: 'MerchantReturnWarehouseMutations';
  upsertWarehouse?: Maybe<UpsertMerchantReturnWarehouseMutation>;
};


export type MerchantReturnWarehouseMutationsUpsertWarehouseArgs = {
  input: UpsertReturnWarehouseInput;
};

export type MerchantReturnWarehouseSchema = {
  __typename?: 'MerchantReturnWarehouseSchema';
  address?: Maybe<AddressSchema>;
  id: Scalars['ObjectIdType'];
  name: Scalars['String'];
};

export type MerchantSafetyMutations = {
  __typename?: 'MerchantSafetyMutations';
  reportOrder?: Maybe<ReportOrderMutation>;
};


export type MerchantSafetyMutationsReportOrderArgs = {
  input: ReportOrderInput;
};

export type MerchantSafetySchema = {
  __typename?: 'MerchantSafetySchema';
  reportOrderReasons: Array<OrderReportReasonSchema>;
};

export type MerchantSchema = {
  __typename?: 'MerchantSchema';
  accountManager?: Maybe<UserSchema>;
  allowMfp: Scalars['Boolean'];
  allowMfpEligibleProducts: Scalars['Boolean'];
  bankAccountVerification?: Maybe<BankAccountVerificationSchema>;
  branding: BrandingSchema;
  businessAddress?: Maybe<AddressSchema>;
  businessName?: Maybe<Scalars['String']>;
  bypassProductRestrictions?: Maybe<Array<TaggingViolationSubcategory>>;
  calculatedShippingAccountConfig?: Maybe<CalculatedShippingAccountConfigType>;
  canAccessAdditionalItemShipping: Scalars['Boolean'];
  canAccessCalculatedShippingAccountConfig?: Maybe<Scalars['Boolean']>;
  canAccessEarlyPayment: Scalars['Boolean'];
  canAccessFinalSale: Scalars['Boolean'];
  canAccessFlatRateShippingOptInOptOut?: Maybe<Scalars['Boolean']>;
  canAccessHome: Scalars['Boolean'];
  canAccessPaidPlacement: Scalars['Boolean'];
  canAccessRestrictedProduct: Scalars['Boolean'];
  canManageShipping: Scalars['Boolean'];
  canUseVacationMode: Scalars['Boolean'];
  countryDetails?: Maybe<MerchantCountryDetailsSchema>;
  countryOfDomicile?: Maybe<Country>;
  daysToFulfill: Scalars['Int'];
  disableReasonCategory?: Maybe<Scalars['String']>;
  disableWarningId?: Maybe<Scalars['ObjectIdType']>;
  displayName: Scalars['String'];
  displayPictureUrl?: Maybe<Scalars['String']>;
  eatCostWarningId?: Maybe<Scalars['ObjectIdType']>;
  eligibleForExpeditedPaymentPolicy?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  euVatTax?: Maybe<EuvatTaxSchema>;
  exp: ExpSchema;
  fulfilledByWish: MerchantFbwSchema;
  hasEuComplianceImpressionBlock: Scalars['Boolean'];
  hasMfpWhitelistProducts: Scalars['Boolean'];
  hasReducedRevShare: Scalars['Boolean'];
  hasSetupPaymentInfo: Scalars['Boolean'];
  id: Scalars['ObjectIdType'];
  inEuComplianceScope: Scalars['Boolean'];
  isBba?: Maybe<Scalars['Boolean']>;
  isCnForFulfillment: Scalars['Boolean'];
  isCnMerchant: Scalars['Boolean'];
  isConsignmentMode?: Maybe<Scalars['Boolean']>;
  isFactory: Scalars['Boolean'];
  isFlatRateShippingOptedIn?: Maybe<Scalars['Boolean']>;
  isIdentifiedUsTax?: Maybe<Scalars['Boolean']>;
  isMerchantFulfillmentTimeOptOut?: Maybe<Scalars['Boolean']>;
  isMerchantInCalculatedShippingBeta: Scalars['Boolean'];
  isPayable: Scalars['Boolean'];
  isStoreMerchant: Scalars['Boolean'];
  isUnityEnabled: Scalars['Boolean'];
  isWhiteGlove: Scalars['Boolean'];
  isWishBlueSelfInventory: Scalars['Boolean'];
  latestActionsRequired?: Maybe<MerchantActionsRequiredSchema>;
  lead: UserSchema;
  marketing: MarketingMerchantPropertySchema;
  maxDeliveryDays: Scalars['Int'];
  merchantPolicyTier?: Maybe<MerchantPolicyTierSchema>;
  merchantTermsAgreed?: Maybe<MerchantTermsAgreedSchema>;
  onVacationMode: Scalars['Boolean'];
  originCountry?: Maybe<Country>;
  preferredLengthUnit?: Maybe<LengthUnit>;
  preferredWeightUnit?: Maybe<WeightUnit>;
  preorder: MerchantPreorder;
  primaryCurrency: PaymentCurrencyCode;
  productListingPlan?: Maybe<ProductListingPlanHub>;
  proofOfIdentity?: Maybe<Array<MerchantFileSchema>>;
  restrictedProductDefaultCountry?: Maybe<Country>;
  restrictedProductRegions?: Maybe<Array<RestrictedProductRegion>>;
  returnSettingPolicyTypeOptions?: Maybe<Array<MerchantReturnSettingPolicyTypeOptionSchema>>;
  returnSettings?: Maybe<Array<MerchantReturnSettingsSchema>>;
  returnWarehouses?: Maybe<Array<MerchantReturnWarehouseSchema>>;
  revShare: Scalars['Float'];
  sellerVerification: SellerVerificationSchema;
  senderAddresses: Array<MerchantSenderAddressSchema>;
  shippingOrigins: Array<ShippingOriginSettings>;
  shippingSettings?: Maybe<Array<ShippingSettingsSchema>>;
  shopify?: Maybe<ShopifySchema>;
  showFeedProcessing: Scalars['Boolean'];
  showMfp: Scalars['Boolean'];
  signupSource?: Maybe<SignupSource>;
  signupTime: Datetime;
  standardWarehouseId: Scalars['ObjectIdType'];
  state: CommerceMerchantState;
  storeStats: MerchantStats;
  suspectedCountry?: Maybe<Country>;
  tax?: Maybe<MerchantTaxSchema>;
  taxIdentification?: Maybe<MerchantTaxIdentificationSchema>;
  usdConversionRate: Scalars['Float'];
  useShopifyShippingRate: Scalars['Boolean'];
  users: Array<UserSchema>;
  vacationSettings?: Maybe<VacationSettingsSchema>;
  warehouses?: Maybe<Array<MerchantWarehouseSchema>>;
  wishSellerStandard: MerchantWishSellerStandardDetails;
  wps?: Maybe<MerchantWpsSchema>;
};


export type MerchantSchemaReturnSettingsArgs = {
  isActive?: InputMaybe<Scalars['Boolean']>;
};


export type MerchantSchemaReturnWarehousesArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MerchantSchemaShippingSettingsArgs = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};


export type MerchantSchemaUsersArgs = {
  includeLead?: InputMaybe<Scalars['Boolean']>;
};


export type MerchantSchemaWarehousesArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type MerchantSenderAddressMutations = {
  __typename?: 'MerchantSenderAddressMutations';
  deleteMerchantSenderAddress: DeleteMerchantSenderAddressMutation;
  upsertMerchantSenderAddress: UpsertMerchantSenderAddressMutation;
};


export type MerchantSenderAddressMutationsDeleteMerchantSenderAddressArgs = {
  input: DeleteMerchantSenderAddressInput;
};


export type MerchantSenderAddressMutationsUpsertMerchantSenderAddressArgs = {
  input: UpsertMerchantSenderAddressInput;
};

export type MerchantSenderAddressSchema = {
  __typename?: 'MerchantSenderAddressSchema';
  address: AddressSchema;
  id: Scalars['ObjectIdType'];
  isDefault: Scalars['Boolean'];
  warehouseName: Scalars['String'];
};

export type MerchantServiceSchema = {
  __typename?: 'MerchantServiceSchema';
  mainUser?: Maybe<UserSchema>;
  merchant?: Maybe<MerchantSchema>;
  merchants?: Maybe<Array<MerchantSchema>>;
  vipoutlet?: Maybe<MerchantSchema>;
};


export type MerchantServiceSchemaMainUserArgs = {
  merchantId: Scalars['ObjectIdType'];
};


export type MerchantServiceSchemaMerchantArgs = {
  id?: InputMaybe<Scalars['ObjectIdType']>;
  userId?: InputMaybe<Scalars['ObjectIdType']>;
};


export type MerchantServiceSchemaMerchantsArgs = {
  bdRep?: InputMaybe<Scalars['ObjectIdType']>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<MerchantSort>;
  states?: InputMaybe<Array<CommerceMerchantState>>;
};

export type MerchantSignupInput = {
  bdSignupCode?: InputMaybe<Scalars['String']>;
  captchaCode?: InputMaybe<Scalars['String']>;
  captchaToken?: InputMaybe<Scalars['String']>;
  deviceId?: InputMaybe<Scalars['String']>;
  deviceName?: InputMaybe<Scalars['String']>;
  emailAddress: Scalars['String'];
  existingStoreUrl?: InputMaybe<Scalars['String']>;
  googleAdsGroupId?: InputMaybe<Scalars['String']>;
  googleClickId?: InputMaybe<Scalars['String']>;
  greenChannelCode?: InputMaybe<Scalars['String']>;
  invite?: InputMaybe<Scalars['String']>;
  landingSource?: InputMaybe<Scalars['String']>;
  landingSourceSubpage?: InputMaybe<Scalars['String']>;
  merchantInvitationCode?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  paypalMerchantId?: InputMaybe<Scalars['String']>;
  referralId?: InputMaybe<Scalars['String']>;
  salesforceCmCat?: InputMaybe<Scalars['String']>;
  salesforceLeadId?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<MerchantSignupSourceType>;
  storeName: Scalars['String'];
  utmCampaign?: InputMaybe<Scalars['String']>;
  utmContent?: InputMaybe<Scalars['String']>;
  utmSource?: InputMaybe<Scalars['String']>;
  utmTerm?: InputMaybe<Scalars['String']>;
};

export type MerchantSignupMutation = {
  __typename?: 'MerchantSignupMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  session?: Maybe<Scalars['String']>;
  shouldRedirectCnMerchant?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['ObjectIdType']>;
};

export type MerchantSignupSendPhoneVerificationInput = {
  newPhoneNumber: Scalars['String'];
};

export type MerchantSignupSendPhoneVerificationMutation = {
  __typename?: 'MerchantSignupSendPhoneVerificationMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MerchantSignupSourceType =
  | 'SIGNUP_EXPRESS'
  | 'SIGNUP_GREEN_CHANNEL'
  | 'SIGNUP_LEGACY'
  | 'SIGNUP_MERCHANT_PLUS'
  | 'SIGNUP_MOBILE'
  | 'SIGNUP_V3'
  | 'SIGNUP_V4'
  | 'SIGNUP_V5';

export type MerchantSort = {
  field: MerchantSortFieldType;
  order: SortOrderType;
};

export type MerchantSortFieldType =
  | 'MERCHANT_ID'
  | 'NAME';

export type MerchantStats = {
  __typename?: 'MerchantStats';
  cs?: Maybe<CsPerformanceStats>;
  daily: Array<MerchantTotalStats>;
  delivery?: Maybe<DeliveryPerformanceStats>;
  lastThirtyDayGmv: CurrencyValue;
  marketing: MarketingStats;
  productRatings: Array<ProductRating>;
  productRatingsCount: Scalars['Int'];
  rating?: Maybe<RatingPerformanceStats>;
  refunds?: Maybe<RefundPerformanceStats>;
  storeRatings: Array<StoreRating>;
  storeRatingsCount: Scalars['Int'];
  topMerchantPerformer?: Maybe<SalesPerformanceStats>;
  topProductPerformer?: Maybe<SalesPerformanceStats>;
  totalGmv: CurrencyValue;
  totalImpressions: Scalars['Int'];
  totalSold: Scalars['Int'];
  totalWishes: Scalars['Int'];
  totals: MerchantTotalStats;
  tracking?: Maybe<TrackingPerformanceStats>;
  updateTime?: Maybe<Datetime>;
  weekly: Array<MerchantWeeklyStats>;
};


export type MerchantStatsDailyArgs = {
  coreMetricsOnly?: InputMaybe<Scalars['Boolean']>;
  days?: InputMaybe<Scalars['Int']>;
  offsetDays?: InputMaybe<Scalars['Int']>;
};


export type MerchantStatsProductRatingsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  listingTab?: InputMaybe<ProductRatingListingTab>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type MerchantStatsStoreRatingsArgs = {
  filterByStars?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type MerchantStatsStoreRatingsCountArgs = {
  filterByStars?: InputMaybe<Scalars['Int']>;
};


export type MerchantStatsTotalsArgs = {
  coreMetricsOnly?: InputMaybe<Scalars['Boolean']>;
  days?: InputMaybe<Scalars['Int']>;
};


export type MerchantStatsWeeklyArgs = {
  weeks?: InputMaybe<Scalars['Int']>;
};

export type MerchantSupportConfigSchema = {
  __typename?: 'MerchantSupportConfigSchema';
  isEnBd: Scalars['Boolean'];
  isNonEnBd: Scalars['Boolean'];
};

export type MerchantTaxIdentificationBusinessType =
  | 'C_CORP'
  | 'LCC'
  | 'PARTNERSHIP'
  | 'S_CORP'
  | 'TRUST_OR_ESTATE';

export type MerchantTaxIdentificationFormType =
  | 'W_8BEN'
  | 'W_8BEN_E'
  | 'W_9';

export type MerchantTaxIdentificationMutations = {
  __typename?: 'MerchantTaxIdentificationMutations';
  upsertMerchantTaxIdentification: UpsertMerchantTaxIdentificationMutation;
};


export type MerchantTaxIdentificationMutationsUpsertMerchantTaxIdentificationArgs = {
  input: UpsertMerchantTaxIdentificationInput;
};

export type MerchantTaxIdentificationPaymentReceiverEntity =
  | 'NON_US'
  | 'US';

export type MerchantTaxIdentificationRejectReson =
  | 'INVALID_TIN'
  | 'WRONG_DOC';

export type MerchantTaxIdentificationReviewAction =
  | 'APPROVE'
  | 'REJECT';

export type MerchantTaxIdentificationSchema = {
  __typename?: 'MerchantTaxIdentificationSchema';
  actionDate?: Maybe<Datetime>;
  actionUsername?: Maybe<Scalars['String']>;
  address: AddressSchema;
  businessName?: Maybe<Scalars['String']>;
  businessType?: Maybe<MerchantTaxIdentificationBusinessType>;
  domicileExplanation?: Maybe<Scalars['String']>;
  employeeIdNumber?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  foreignTaxId?: Maybe<Scalars['String']>;
  formType: MerchantTaxIdentificationFormType;
  id: Scalars['ObjectIdType'];
  lastName?: Maybe<Scalars['String']>;
  lastUpdated: Datetime;
  paymentReceiverIdentity: MerchantTaxIdentificationPaymentReceiverEntity;
  rejectedReason?: Maybe<MerchantTaxIdentificationRejectReson>;
  selfIdentityClassification: MerchantTaxIdentificationSelfIdentityClassification;
  signDate: Datetime;
  status: MerchantTaxIdentificationStatus;
};

export type MerchantTaxIdentificationSearchType =
  | 'MERCHANT_ID';

export type MerchantTaxIdentificationSelfIdentityClassification =
  | 'BUSINESS'
  | 'INDIVIDUAL';

export type MerchantTaxIdentificationSortFieldType =
  | 'SUBMITTED_DATE';

export type MerchantTaxIdentificationStatus =
  | 'APPROVED'
  | 'NOT_SUBMIT'
  | 'PENDING'
  | 'REJECTED';

export type MerchantTaxSchema = {
  __typename?: 'MerchantTaxSchema';
  enrollableCountries: Array<Country>;
  hasConfiguredTaxesBefore: Scalars['Boolean'];
  settings?: Maybe<Array<TaxSetting>>;
};

export type MerchantTermsActionEnum =
  | 'AGREE'
  | 'DISAGREE'
  | 'VIEW';

export type MerchantTermsAgreedMutations = {
  __typename?: 'MerchantTermsAgreedMutations';
  acceptDeComplianceTermsOfService: AcceptDeComplianceTermsOfService;
  acceptEuComplianceTermsOfService: AcceptEuComplianceTermsOfService;
  acceptFrComplianceTermsOfService: AcceptFrComplianceTermsOfService;
  acceptMerchantPolicy: AcceptMerchantPolicy;
  acceptTermsOfService: AcceptTermsOfService;
  actOnWpsTermsOfService: MerchantWpsTermsOfServiceMutation;
  viewTermsOfService: ViewTermsOfService;
  viewTermsOfServiceById: ViewTermsOfServiceById;
};


export type MerchantTermsAgreedMutationsAcceptMerchantPolicyArgs = {
  input: AcceptMerchantPolicyInput;
};


export type MerchantTermsAgreedMutationsAcceptTermsOfServiceArgs = {
  input: AcceptTermsOfServiceInput;
};


export type MerchantTermsAgreedMutationsActOnWpsTermsOfServiceArgs = {
  input: MerchantWpsTermsOfServiceInput;
};


export type MerchantTermsAgreedMutationsViewTermsOfServiceByIdArgs = {
  input: ViewTermsOfServiceByIdInput;
};

export type MerchantTermsAgreedSchema = {
  __typename?: 'MerchantTermsAgreedSchema';
  agreedToDeComplianceTos?: Maybe<Scalars['Boolean']>;
  agreedToEuComplianceTos?: Maybe<Scalars['Boolean']>;
  agreedToFrComplianceTos?: Maybe<Scalars['Boolean']>;
  agreedToRealNameAuth?: Maybe<Scalars['Boolean']>;
  agreedToTermsOfService: Scalars['Boolean'];
  wpsTermsOfService?: Maybe<MerchantWpsTermsOfServiceSchema>;
};

export type MerchantTermsOfServiceAgreementSchema = {
  __typename?: 'MerchantTermsOfServiceAgreementSchema';
  state?: Maybe<MerchantTosAgreementStateType>;
};

export type MerchantTermsOfServiceSchema = {
  __typename?: 'MerchantTermsOfServiceSchema';
  latestVersion: Scalars['Int'];
};

export type MerchantTier =
  | 'CN_BD_REFERRED'
  | 'CN_BRAND_OWNER'
  | 'CN_DEFAULT'
  | 'CN_ERP_REFERRED'
  | 'CPG'
  | 'EU_BD_REFERRED'
  | 'EU_BRAND_OWNER'
  | 'EU_DEFAULT'
  | 'LATAM_BD_BRAND_OWNER'
  | 'LATAM_BD_REFERRED'
  | 'NON_CN_BD_REFERRED'
  | 'NON_CN_BRAND_OWNER'
  | 'NON_CN_DEFAULT'
  | 'NON_CN_ERP_REFERRED'
  | 'NOT_ENROLL'
  | 'PHANTOM'
  | 'PROBATION'
  | 'PROMOTED_WHITELIST_FINE_EXEMPTION'
  | 'SELF_INVENTORY'
  | 'SUSPICIOUS'
  | 'US_BD_REFERRED'
  | 'US_BRAND_OWNER'
  | 'US_CONTROL'
  | 'US_DEFAULT'
  | 'US_DELIVERR_REFERRED'
  | 'US_PAYPAL_REFERRED'
  | 'US_SHOPIFY_REFERRED'
  | 'WISH_STORE_TRUST';

export type MerchantToFactoryConversionMutation = {
  __typename?: 'MerchantToFactoryConversionMutation';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type MerchantTodoItemSentiment =
  | 'INFO'
  | 'NEGATIVE'
  | 'POSITIVE'
  | 'WARNING';

export type MerchantTodoItemType =
  | 'ACCEPT_TERMS_OF_SERVICE'
  | 'ADD_PAYMENT'
  | 'ADD_WAREHOUSE'
  | 'APPLY_RESTRICTED_PRODUCT_REQUEST'
  | 'BANK_ACCOUNT_VERIFICATION'
  | 'BIND_WECHAT'
  | 'BRL_CURRENCY_CODE_MIGRATION'
  | 'COMPLETE_EU_VAT_TAX_QUESTIONNAIRE'
  | 'CURRENCY_CODE_MIGRATION'
  | 'ENABLE_2FA'
  | 'ENROLL_PRODUCTS_IN_RETURNS'
  | 'EUR_CURRENCY_CODE_MIGRATION'
  | 'EU_PRODUCT_COMPLIANCE'
  | 'FRANCE_PRODUCT_COMPLIANCE'
  | 'GBP_CURRENCY_CODE_MIGRATION'
  | 'GERMANY_PRODUCT_COMPLIANCE'
  | 'JOIN_WISH_EXPRESS'
  | 'NON_CN_UPLOAD_NEW_PRODUCTS'
  | 'PRE_ORDER_UNFULFILLED_ORDER'
  | 'PRICE_DROP_NEW_OFFERS'
  | 'PRICE_DROP_UNCOMPETITIVE_CAMPAIGN'
  | 'PRICE_DROP_VIEW_ONGOING_CAMPAIGNS'
  | 'REAUTHENTICATION_ATO'
  | 'REAUTHENTICATION_KYC_PROFILE'
  | 'REAUTHENTICATION_REGINFO'
  | 'REAUTHENTICATION_SELLER_PROFILE'
  | 'REJECTED_VIDEOS'
  | 'RESELLER_AGREEMENT'
  | 'REVIEW_CURRENCY'
  | 'SETUP_TAX_INFO'
  | 'TAX_VERIFICATION_FAILED'
  | 'UK_VAT_OBLIGATION_NOTICE'
  | 'UPLOAD_NEW_PRODUCTS'
  | 'VALIDATE_TAX_IDENTITY'
  | 'VERIFY_PRODUCT_BRANDS'
  | 'WE_REAPPLICATION_ELIGIBLE';

export type MerchantTosAgreementStateType =
  | 'AGREED'
  | 'DISAGREED'
  | 'IMPLICIT_AGREED';

export type MerchantTotalStats = {
  __typename?: 'MerchantTotalStats';
  addToCarts: Scalars['Int'];
  averageFulfillmentTime?: Maybe<Timedelta>;
  averageRating30d?: Maybe<Scalars['Float']>;
  averageShippingDelay?: Maybe<Timedelta>;
  averageShippingTime?: Maybe<Timedelta>;
  endDate: Datetime;
  gmv: CurrencyValue;
  impressions: Scalars['BigInt'];
  orders: Scalars['Int'];
  pageViews: Scalars['BigInt'];
  refundRate30d?: Maybe<Scalars['Float']>;
  startDate: Datetime;
};

export type MerchantType =
  | 'Brand'
  | 'Factory'
  | 'Others'
  | 'Trading_Company';

export type MerchantUserGateAllowAll = {
  __typename?: 'MerchantUserGateAllowAll';
  ok?: Maybe<Scalars['Boolean']>;
};

export type MerchantUserGateAllowAllInput = {
  name: Scalars['String'];
};

export type MerchantUserGateAllowMerchants = {
  __typename?: 'MerchantUserGateAllowMerchants';
  ok?: Maybe<Scalars['Boolean']>;
};

export type MerchantUserGateAllowMerchantsInput = {
  merchantIds: Array<Scalars['ObjectIdType']>;
  name: Scalars['String'];
};

export type MerchantUserGateAllowUsers = {
  __typename?: 'MerchantUserGateAllowUsers';
  ok?: Maybe<Scalars['Boolean']>;
};

export type MerchantUserGateAllowUsersInput = {
  name: Scalars['String'];
  userIds: Array<Scalars['ObjectIdType']>;
};

export type MerchantUserGateMutations = {
  __typename?: 'MerchantUserGateMutations';
  allowAll?: Maybe<MerchantUserGateAllowAll>;
  allowMerchants?: Maybe<MerchantUserGateAllowMerchants>;
  allowUsers?: Maybe<MerchantUserGateAllowUsers>;
};


export type MerchantUserGateMutationsAllowAllArgs = {
  input: MerchantUserGateAllowAllInput;
};


export type MerchantUserGateMutationsAllowMerchantsArgs = {
  input: MerchantUserGateAllowMerchantsInput;
};


export type MerchantUserGateMutationsAllowUsersArgs = {
  input: MerchantUserGateAllowUsersInput;
};

export type MerchantWpsSchema = {
  __typename?: 'MerchantWPSSchema';
  enabledDestinationCountries: Array<Country>;
  enabledOriginCountries: Array<Country>;
};

export type MerchantWpsTermsOfServiceInput = {
  merchantAction: MerchantTermsActionEnum;
  tos: WpsTermsTypeEnum;
};

export type MerchantWpsTermsOfServiceMutation = {
  __typename?: 'MerchantWPSTermsOfServiceMutation';
  ok: Scalars['Boolean'];
};

export type MerchantWpsTermsOfServiceSchema = {
  __typename?: 'MerchantWPSTermsOfServiceSchema';
  agreedUpsTos: Scalars['Boolean'];
  agreedWpsTos: Scalars['Boolean'];
  viewedUpsTos: Scalars['Boolean'];
  viewedWpsTos: Scalars['Boolean'];
};

export type MerchantWarehouseMutations = {
  __typename?: 'MerchantWarehouseMutations';
  deleteWarehouse?: Maybe<DeleteMerchantWarehouseMutation>;
  submitWarehouseVerificationRequest?: Maybe<SubmitWarehouseVerificationRequestMutation>;
  upsertWarehouse?: Maybe<UpsertMerchantWarehouseMutation>;
};


export type MerchantWarehouseMutationsDeleteWarehouseArgs = {
  input: DeleteMerchantWarehouseInput;
};


export type MerchantWarehouseMutationsSubmitWarehouseVerificationRequestArgs = {
  input: SubmitWarehouseVerificationRequestInput;
};


export type MerchantWarehouseMutationsUpsertWarehouseArgs = {
  input: UpsertWarehouseInput;
};

export type MerchantWarehouseSchema = {
  __typename?: 'MerchantWarehouseSchema';
  address?: Maybe<AddressSchema>;
  carrierPickupTime?: Maybe<Scalars['String']>;
  enabledCountries: Array<Country>;
  id: Scalars['String'];
  merchantHandlingTime?: Maybe<Scalars['Int']>;
  pickupCarrier?: Maybe<PickupCarrier>;
  unitId: Scalars['String'];
  verificationRequest?: Maybe<WarehouseVerificationRequestSchema>;
  verificationState?: Maybe<WarehouseVerificationState>;
  weekStats?: Maybe<Array<MerchantWarehouseWeekStatsSchema>>;
  weekStatsCount: Scalars['Int'];
  workdayCalendar?: Maybe<WorkdayCalender>;
  workdayOverrideCalendar?: Maybe<Array<WorkDayOverride>>;
};


export type MerchantWarehouseSchemaWeekStatsArgs = {
  endDate?: InputMaybe<DatetimeInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MerchantWarehouseWeekStatsSort>;
  startDate?: InputMaybe<DatetimeInput>;
};


export type MerchantWarehouseSchemaWeekStatsCountArgs = {
  endDate?: InputMaybe<DatetimeInput>;
  startDate?: InputMaybe<DatetimeInput>;
};

export type MerchantWarehouseWeekStatsSchema = {
  __typename?: 'MerchantWarehouseWeekStatsSchema';
  endDate: Datetime;
  expectedDeliveries: Scalars['Int'];
  isLateDeliveryRateAtRisk?: Maybe<Scalars['Boolean']>;
  isLateDeliveryRateHigh?: Maybe<Scalars['Boolean']>;
  lateDeliveries: Scalars['Int'];
  lateDeliveryRate?: Maybe<Scalars['Float']>;
  maxExpectedGmv: CurrencyValue;
  merchantId: Scalars['ObjectIdType'];
  startDate: Datetime;
};


export type MerchantWarehouseWeekStatsSchemaIsLateDeliveryRateAtRiskArgs = {
  orderPolicyType?: InputMaybe<OrderPolicyType>;
};


export type MerchantWarehouseWeekStatsSchemaIsLateDeliveryRateHighArgs = {
  orderPolicyType?: InputMaybe<OrderPolicyType>;
};


export type MerchantWarehouseWeekStatsSchemaLateDeliveryRateArgs = {
  orderPolicyType?: InputMaybe<OrderPolicyType>;
};

export type MerchantWarehouseWeekStatsSort = {
  field: MerchantWarehouseWeekStatsSortFieldType;
  order: SortOrderType;
};

export type MerchantWarehouseWeekStatsSortFieldType =
  | 'START_DATE';

export type MerchantWarningAction =
  | 'CANCEL'
  | 'CLAIM'
  | 'CLOSE'
  | 'CONFIRM'
  | 'LISTING_LEVEL_DISPUTE'
  | 'MERCHANT_LEVEL_DISPUTE'
  | 'REPLY'
  | 'REQUEST_PAYMENT_RELEASE'
  | 'UNCLAIM';

export type MerchantWarningAuditAction =
  | 'BATCH_CLAIM'
  | 'CLAIM'
  | 'CONFIRM'
  | 'REVERT';

export type MerchantWarningAuditRevertReason =
  | 'AGENT_ERROR'
  | 'INCORRECTED_DATA'
  | 'POLICY_UPDATE';

export type MerchantWarningAuditStatus =
  | 'CONFIRMED'
  | 'REQUIRE_AUDIT'
  | 'REVERTED';

export type MerchantWarningBulkProcessSchema = {
  __typename?: 'MerchantWarningBulkProcessSchema';
  id: Scalars['ObjectIdType'];
  requestedBy: Scalars['String'];
  requestedWarningIds?: Maybe<Array<Scalars['ObjectIdType']>>;
  results?: Maybe<Array<MerchantWarningProcessResultSchema>>;
  submitted: Datetime;
  type: BulkMerchantWarningAction;
};

export type MerchantWarningClaimStatus =
  | 'ALL'
  | 'CLAIMED'
  | 'CLAIMED_BY_ME'
  | 'NOT_CLAIMED';

export type MerchantWarningCorrespondenceStatus =
  | 'HOLD'
  | 'NEW'
  | 'OPEN';

export type MerchantWarningFixAction =
  | 'ADDRESS_UNDERLYING_INFRACTION'
  | 'DISPUTE'
  | 'EDIT_PRODUCT_LISTING'
  | 'MESSAGE'
  | 'PAY_WISHPOST_BALANCE'
  | 'PRODUCT_AUTHORIZATION'
  | 'PROVE_AUTHENTICITY'
  | 'REQUEST_PAYMENT_RELEASE'
  | 'UPDATE_MAX_DELIVERY_DAYS';

export type MerchantWarningImpactSchema = {
  __typename?: 'MerchantWarningImpactSchema';
  countries?: Maybe<Array<Country>>;
  endDate?: Maybe<Datetime>;
  startDate?: Maybe<Datetime>;
  type: MerchantWarningImpactType;
};

export type MerchantWarningImpactType =
  | 'AUTO_REFUND'
  | 'EAT_COST_FOR_PRODUCT'
  | 'GEOBLOCK'
  | 'MERCHANT_BAN'
  | 'MERCHANT_IMPRESSION_BLOCK'
  | 'MERCHANT_PAYMENT_HOLD'
  | 'ORDER_PAYMENT_HOLD'
  | 'PRODUCT_IMPRESSION_BLOCK'
  | 'PRODUCT_PAYMENT_HOLD'
  | 'PRODUCT_TAKEDOWN'
  | 'VARIATION_TAKEDOWN';

export type MerchantWarningMutations = {
  __typename?: 'MerchantWarningMutations';
  updateAuditQueueWarning?: Maybe<UpdateAuditQueueWarning>;
  upsertMerchantWarning?: Maybe<UpsertMerchantWarning>;
};


export type MerchantWarningMutationsUpdateAuditQueueWarningArgs = {
  input?: InputMaybe<UpdateAuditQueueWarningInput>;
};


export type MerchantWarningMutationsUpsertMerchantWarningArgs = {
  input?: InputMaybe<UpsertMerchantWarningInput>;
};

export type MerchantWarningProcessResultSchema = {
  __typename?: 'MerchantWarningProcessResultSchema';
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  warningId: Scalars['ObjectIdType'];
};

export type MerchantWarningProofDisputeStatus =
  | 'DISPUTE_FAILED'
  | 'DISPUTE_SUCCESS'
  | 'DISPUTING'
  | 'NOT_DISPUTED';

export type MerchantWarningProofSchema = {
  __typename?: 'MerchantWarningProofSchema';
  brandAuthorization?: Maybe<BrandAuthorizationSchema>;
  disputeStatus: MerchantWarningProofDisputeStatus;
  id: Scalars['ObjectIdType'];
  message?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  order?: Maybe<OrderSchema>;
  product?: Maybe<ProductSchema>;
  type: MerchantWarningProofType;
  warningId?: Maybe<Scalars['ObjectIdType']>;
};

export type MerchantWarningProofType =
  | 'MERCHANT'
  | 'ORDER'
  | 'PRODUCT'
  | 'PRODUCT_RATING'
  | 'TICKET'
  | 'VARIATION';

export type MerchantWarningReason =
  | 'BAD_CUSTOMER_SERVICE'
  | 'BAN_EARLY_STAGE_MERCHANT'
  | 'BRANDED_PRODUCT_GEOBLOCK'
  | 'CN_PROHIBITED_PRODUCTS'
  | 'CONFIRMED_DELIVERY_POLICY'
  | 'COUNTERFEIT_GOODS'
  | 'CS_LATE_RESPONSE_RATE'
  | 'CS_LOW_CSAT_SCORE'
  | 'DECEPTIVE_FULFILLMENT'
  | 'DEP_BAIT_VARIABLE_PRICING'
  | 'DEP_FINE_DISABLE_PROMOTED_PRODUCT'
  | 'DEP_FINE_DISABLE_PROMOTED_PRODUCT_FOR_COUNTRY'
  | 'DISINGENUOUS_CUSTOMER_SERVICE'
  | 'DUPLICATE_ACCOUNTS'
  | 'DUPLICATE_PRODUCTS'
  | 'EMPTY_PACKAGES'
  | 'EXTREMELY_HIGH_PRICE_SPREAD'
  | 'FAKE_RATING'
  | 'FAKE_TRACKING'
  | 'FINAL_JUDGEMENT_ORDER'
  | 'FINE_FOR_COUNTERFEIT_GOODS'
  | 'FINE_PRODUCT_SWAPPED'
  | 'FINE_UPDATE_TO_COUNTERFEIT'
  | 'FINE_WISH_EXPRESS_POLICY_VIOLATION'
  | 'HIGH_AUTO_REFUND'
  | 'HIGH_CHARGEBACK_AND_FRAUD_REFUND_RATIO'
  | 'HIGH_CHARGEBACK_RATIO'
  | 'HIGH_GMV_FROM_GAMING_AUDIT'
  | 'HIGH_GMV_FROM_GAMING_BAN'
  | 'HIGH_GMV_FROM_GAMING_FREEZE'
  | 'HIGH_GMV_FROM_MISLEADING_PRODUCTS'
  | 'HIGH_IP_INFRINGEMENT'
  | 'HIGH_REFUND_RATIO'
  | 'INACTIVE_ACCOUNT'
  | 'INVALID_EU_RESPONSIBLE_PERSON'
  | 'INVALID_TRACKING_NUMBERS'
  | 'LATE_CONFIRMED_FULFILLMENT_VIOLATION'
  | 'LATE_FULFILLMENT_RATE'
  | 'LEGAL_TRO_TAKEDOWN'
  | 'MERCHANT_CANCELLATION_VIOLATION'
  | 'MERCHANT_CONTACT_INFO_INVALID'
  | 'MERCHANT_HARASSMENT'
  | 'MERCHANT_HIGH_CANCEL_ORDER_RATE'
  | 'MERCHANT_HIGH_QUALITY_REFUND_RATIO'
  | 'MERCHANT_HIGH_REFUND_EAT_COST'
  | 'MISLEADING_VARIATION'
  | 'ORDER_NOT_DELIVERED'
  | 'PENALTY_FOR_AUTO_REFUND'
  | 'POLICY_TIER_DEMOTION'
  | 'PRODUCT_GEOBLOCK'
  | 'PRODUCT_HIGH_CANCEL_ORDER_RATE'
  | 'PRODUCT_HIGH_QUALITY_REFUND_RATIO'
  | 'PRODUCT_HIGH_REFUND_RATIO'
  | 'PRODUCT_HIGH_REFUND_RATIO_NO_REMOVE'
  | 'PRODUCT_IS_INAPPROPRIATE'
  | 'PRODUCT_LOW_RATING'
  | 'PRODUCT_LOW_RATING_NO_REMOVE'
  | 'RELATED_ACCOUNT_IS_BANNED'
  | 'REPEAT_IP_INFRINGEMENT_ON_BRAND_OWNER'
  | 'REPEAT_PRODUCT_SWAPPING'
  | 'REQUEST_MONEY'
  | 'REQUEST_USER_EMAIL'
  | 'RESPOND_TO_ADMIN'
  | 'REUPLOADING_COUNTERFEITS'
  | 'STORE_VALIDATION_INCOMPLETE'
  | 'STRIKE_BASED_HIGH_RISK_PROHIBITED'
  | 'SUSPECTED_FRAUD'
  | 'TAKE_USER_OUTSIDE_WISH'
  | 'TAX_SETTING_NOT_UPDATED'
  | 'UNCONFIRMED_TRACKING_NUMBERS'
  | 'UNFULFILLED_ORDER'
  | 'US_TAX_INFO_UNVALIDATED'
  | 'VIOLATE_POLICY'
  | 'VIOLATE_TS_POLICY'
  | 'VIOLATION_OF_POLICY_TIER'
  | 'VIOLATION_OF_TERMS'
  | 'WAREHOUSE_FULFILLMENT_POLICY_VIOLATION'
  | 'WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION'
  | 'WISHPOST_NEGATIVE_BALANCE'
  | 'WISH_EXPRESS_POLICY_MERCHANT'
  | 'WISH_EXPRESS_POLICY_PRODUCT'
  | 'WISH_EXPRESS_POLICY_VIOLATION'
  | 'WISH_STANDARDS_BAN';

export type MerchantWarningReasonSchema = {
  __typename?: 'MerchantWarningReasonSchema';
  reason: MerchantWarningReason;
  text: Scalars['String'];
};

export type MerchantWarningReplySchema = {
  __typename?: 'MerchantWarningReplySchema';
  date?: Maybe<Datetime>;
  displayName?: Maybe<Scalars['String']>;
  files?: Maybe<Array<MerchantFileSchema>>;
  idFiles?: Maybe<Array<MerchantFileSchema>>;
  images?: Maybe<Array<Scalars['String']>>;
  message?: Maybe<Scalars['String']>;
  senderName?: Maybe<Scalars['String']>;
  senderType?: Maybe<MerchantWarningReplySenderType>;
  translatedMessage?: Maybe<Scalars['String']>;
  type?: Maybe<MerchantWarningReplyType>;
};

export type MerchantWarningReplySenderType =
  | 'ADMIN'
  | 'ADMIN_BAN'
  | 'ADMIN_UNBAN'
  | 'ADMIN_UNBAN_PENDING'
  | 'MERCHANT';

export type MerchantWarningReplyType =
  | 'ADMIN_COMMENT'
  | 'APPROVE_PAYMENT_RELEASE'
  | 'AUTOBOT_REPLY'
  | 'BAN_EXPLANATION'
  | 'BD_APPROVE_PAYMENT_RELEASE'
  | 'CLOSE_EXPLANATION'
  | 'CLOSE_REPLY'
  | 'REGULAR_REPLY'
  | 'REJECT_PAYMENT_RELEASE'
  | 'REMOVE_WITHHOLD_FUNDS_EXPLANATION'
  | 'REOPEN_REPLY'
  | 'REQUEST_PAYMENT_RELEASE'
  | 'RESET_PAYMENT_RELEASE'
  | 'SEND_PB_INCENTIVE'
  | 'UNBAN_EXPLANATION'
  | 'WITHHOLD_FUNDS_EXPLANATION';

export type MerchantWarningSchema = {
  __typename?: 'MerchantWarningSchema';
  adminReasonText?: Maybe<Scalars['String']>;
  auditStatus?: Maybe<MerchantWarningAuditStatus>;
  banned?: Maybe<Scalars['Boolean']>;
  bulkProcessing?: Maybe<Scalars['Boolean']>;
  claimedBy?: Maybe<UserSchema>;
  correspondenceStatus?: Maybe<MerchantWarningCorrespondenceStatus>;
  counterfeitBrand?: Maybe<BrandSchema>;
  counterfeitReasonText?: Maybe<Scalars['String']>;
  createdTime: Datetime;
  creatorName?: Maybe<Scalars['String']>;
  disputeCutoffDay: Scalars['Int'];
  effectiveDisputeDeadlineDate: Datetime;
  fine?: Maybe<MerchantFineSchema>;
  fineAmount?: Maybe<CurrencyValue>;
  id: Scalars['ObjectIdType'];
  impacts?: Maybe<Array<MerchantWarningImpactSchema>>;
  lastUpdate: Datetime;
  merchant?: Maybe<MerchantSchema>;
  merchantActions?: Maybe<Array<MerchantWarningFixAction>>;
  merchantReasonText?: Maybe<Scalars['String']>;
  order?: Maybe<OrderSchema>;
  outstandingMerchantActions?: Maybe<Array<MerchantWarningFixAction>>;
  product?: Maybe<ProductSchema>;
  productCount?: Maybe<Scalars['Int']>;
  productEditRequestCount?: Maybe<Scalars['Int']>;
  productGmvAtAudit?: Maybe<CurrencyValue>;
  productTrueTagInfo?: Maybe<ProductTrueTagInfoSchema>;
  products?: Maybe<Array<ProductSchema>>;
  proofs: Array<MerchantWarningProofSchema>;
  reason: MerchantWarningReasonSchema;
  replies?: Maybe<Array<MerchantWarningReplySchema>>;
  resolved: Scalars['Boolean'];
  state: MerchantWarningState;
  takedownRequest?: Maybe<TakedownRequestSchema>;
  trackingDispute?: Maybe<TrackingDisputeSchema>;
  urgencyScore?: Maybe<Scalars['Float']>;
  wssImpact: WssImpactState;
};


export type MerchantWarningSchemaFineAmountArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};


export type MerchantWarningSchemaProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type MerchantWarningSort = {
  field: MerchantWarningSortFieldType;
  order: SortOrderType;
};

export type MerchantWarningSortFieldType =
  | 'CREATED_TIME'
  | 'LAST_UPDATE'
  | 'PRODUCT_GMV_AT_AUDIT'
  | 'URGENCY_SCORE';

export type MerchantWarningState =
  | 'AWAITING_ADMIN'
  | 'AWAITING_ADMIN_BOT'
  | 'AWAITING_AUTH_TAGGING_HIGH_GMV'
  | 'AWAITING_AUTH_TAGGING_LOW_GMV'
  | 'AWAITING_MERCHANT'
  | 'CANCELLED'
  | 'CLOSED'
  | 'CN_BD_REVIEW_PAYMENT'
  | 'NEW'
  | 'REQUEST_PAYMENT'
  | 'REQUIRES_ADMIN_REVIEW'
  | 'US_BD_REVIEW_PAYMENT';

export type MerchantWeeklyStats = {
  __typename?: 'MerchantWeeklyStats';
  cs: CsPerformanceStats;
  delivery: DeliveryPerformanceStats;
  endDate: Datetime;
  product: ProductPerformanceStats;
  rating: RatingPerformanceStats;
  refund: RefundPerformanceStats;
  sales: SalesPerformanceStats;
  startDate: Datetime;
  tracking: TrackingPerformanceStats;
};

export type MerchantWishSellerStandardDetails = {
  __typename?: 'MerchantWishSellerStandardDetails';
  complianceUpdateStats?: Maybe<WishSellerStandardStats>;
  deepDive?: Maybe<WssPerformanceDeepDiveHub>;
  endDateForLastMonthlyUpdateCalcWindow?: Maybe<Datetime>;
  fulfillmentInfractionWindowEndDate?: Maybe<Datetime>;
  fulfillmentInfractionWindowStartDate?: Maybe<Datetime>;
  isInactiveToBan?: Maybe<Scalars['Boolean']>;
  lastTierUpdateDate?: Maybe<Datetime>;
  lastUpdatedStats?: Maybe<Datetime>;
  layer1Level?: Maybe<WssMerchantLevelType>;
  level?: Maybe<WssMerchantLevelType>;
  monthlyUpdateStats?: Maybe<WishSellerStandardStats>;
  nextMonthlyTierUpdateDate?: Maybe<Datetime>;
  policyInfractionWindowEndDate?: Maybe<Datetime>;
  policyInfractionWindowStartDate?: Maybe<Datetime>;
  prevLevel?: Maybe<WssMerchantLevelType>;
  rawLevel?: Maybe<WssMerchantLevelType>;
  recentStats?: Maybe<Array<WishSellerStandardStats>>;
  stats?: Maybe<WishSellerStandardStats>;
  thingsToWatchBoard?: Maybe<WssThingsToWatchBoard>;
};


export type MerchantWishSellerStandardDetailsRecentStatsArgs = {
  days?: InputMaybe<Scalars['Int']>;
};

export type MfpCampaignPriceDiscounted =
  | 'PRICE'
  | 'SHIPPING';

export type MisleadingViolationTaggingManagement = {
  __typename?: 'MisleadingViolationTaggingManagement';
  violationReasons: Array<TaggingViolationReason>;
};

export type MobilePlatformType =
  | 'ANDROID'
  | 'IOS';

export type ModifyTrackingError = {
  __typename?: 'ModifyTrackingError';
  message: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
};

export type ModifyTrackingOrderInput = {
  orderId: Scalars['ObjectIdType'];
  originCountryCode: CountryCode;
  providerId: Scalars['Int'];
  shipNote?: InputMaybe<Scalars['String']>;
  trackingId: Scalars['String'];
};

export type ModifyTrackingOrders = {
  __typename?: 'ModifyTrackingOrders';
  errorMessages?: Maybe<Array<ModifyTrackingError>>;
  modifyTrackingCount: Scalars['Int'];
};

export type ModifyWpsTrackingIdInput = {
  additionalServiceOptions?: InputMaybe<Array<WpsAvailableServices>>;
  orderId: Scalars['ObjectIdType'];
  shippingOptionId: Scalars['String'];
};

export type ModifyWpsTrackingIdMutation = {
  __typename?: 'ModifyWPSTrackingIDMutation';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  providerId?: Maybe<Scalars['Int']>;
  trackingId?: Maybe<Scalars['String']>;
  wpsShipmentId?: Maybe<Scalars['String']>;
};

export type NavigationResultSchema = {
  __typename?: 'NavigationResultSchema';
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  nuggets?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  type: NavigationResultType;
  url: Scalars['String'];
};

export type NavigationResultType =
  | 'MERCHANT'
  | 'ORDER'
  | 'PRODUCT'
  | 'WARNING';

export type NoticePriority =
  | 'DEFAULT'
  | 'HIGH';

export type NoticeProductSchema = {
  __typename?: 'NoticeProductSchema';
  product: ProductSchema;
  status: NoticeProductStatus;
};

export type NoticeProductStatus =
  | 'ALREADY_REMOVED'
  | 'DISPUTED'
  | 'GEO_BLOCKED'
  | 'INAPPROPRIATE_REMOVED'
  | 'IP_REMOVED'
  | 'REPORTED';

export type NoticeQueryInput = {
  endDate?: InputMaybe<DatetimeInput>;
  notifierEmail?: InputMaybe<Scalars['String']>;
  notifierOrganization?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['ObjectIdType']>;
  sort?: InputMaybe<Array<NoticeQuerySortInput>>;
  startDate?: InputMaybe<DatetimeInput>;
  statuses?: InputMaybe<Array<NoticeStatus>>;
};

export type NoticeQuerySortInput = {
  field: NoticeSortField;
  order: SortOrderType;
};

export type NoticeSchema = {
  __typename?: 'NoticeSchema';
  datetimeCreated: Datetime;
  datetimeDisputeReviewed?: Maybe<Datetime>;
  datetimeDisputed?: Maybe<Datetime>;
  datetimeReviewed?: Maybe<Datetime>;
  description: Scalars['String'];
  disputeDescription?: Maybe<Scalars['String']>;
  disputeEligibility: Scalars['Boolean'];
  disputeReviewResponse?: Maybe<Scalars['String']>;
  disputeReviewer?: Maybe<UserSchema>;
  disputeSupportFiles?: Maybe<Array<MerchantFileSchema>>;
  id: Scalars['ObjectIdType'];
  lastClaimedUser?: Maybe<UserSchema>;
  notifier?: Maybe<NotifierSchema>;
  notifierEmail: Scalars['String'];
  notifierName: Scalars['String'];
  priority: NoticePriority;
  products: Array<NoticeProductSchema>;
  reviewResponse?: Maybe<Scalars['String']>;
  reviewer?: Maybe<UserSchema>;
  status: NoticeStatus;
  supportFiles: Array<MerchantFileSchema>;
};

export type NoticeSortField =
  | 'DATETIME_CREATED'
  | 'DATETIME_DISPUTED'
  | 'PRIORITY';

export type NoticeStatus =
  | 'DISPUTE_PENDING_REVIEW'
  | 'DISPUTE_UNDER_REVIEW'
  | 'PARTIALLY_REJECTED'
  | 'PENDING_REVIEW'
  | 'REJECTED'
  | 'RESOLVED'
  | 'UNDER_REVIEW';

export type NotificationsServiceSchema = {
  __typename?: 'NotificationsServiceSchema';
  notificationCount: Scalars['Int'];
};


export type NotificationsServiceSchemaNotificationCountArgs = {
  viewed?: InputMaybe<Scalars['Boolean']>;
};

export type NotifierQueryInput = {
  countryCode?: InputMaybe<CountryCode>;
  email?: InputMaybe<Scalars['String']>;
  isTrustedFlagger?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  type: NotifierType;
};

export type NotifierSchema = {
  __typename?: 'NotifierSchema';
  countries: Array<Country>;
  email: Scalars['String'];
  id: Scalars['ObjectIdType'];
  isTrustedFlagger: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  organization: Scalars['String'];
  type: NotifierType;
};

export type NotifierType =
  | 'EMAIL_ADDRESS'
  | 'EMAIL_DOMAIN';

export type NotifyPasswordRecoveryMutation = {
  __typename?: 'NotifyPasswordRecoveryMutation';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type NotifyPasswordRecoveryMutationInput = {
  email: Scalars['String'];
};

export type OffsiteBoost = {
  __typename?: 'OffsiteBoost';
  chargingMethod: ExternalBoostChargingMethod;
  dailyBudget: CurrencyValue;
  enabled: Scalars['Boolean'];
  maxDailyBudget: CurrencyValue;
  minDailyBudget: CurrencyValue;
  statsAvailableDate: Datetime;
};

export type OffsiteBoostDailyStats = {
  __typename?: 'OffsiteBoostDailyStats';
  attributed?: Maybe<ExternalBoostAttributedStats>;
  clicks: Scalars['Int'];
  date: Datetime;
  gmv: CurrencyValue;
  orders: Scalars['Int'];
  spend: CurrencyValue;
};

export type OffsiteBoostPropertyInput = {
  dailyBudget?: InputMaybe<CurrencyInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type OffsiteBoostStats = {
  __typename?: 'OffsiteBoostStats';
  daily: Array<OffsiteBoostDailyStats>;
  endDate: Datetime;
  startDate: Datetime;
};

export type OidcCredentialSchema = {
  __typename?: 'OidcCredentialSchema';
  authEmail: Scalars['String'];
  authProvider: OidcProviderEnum;
  id: Scalars['ObjectIdType'];
};

export type OidcProviderEnum =
  | 'GOOGLE'
  | 'WISH_AUTH'
  | 'WISH_OKTA';

export type OnboardingSchema = {
  __typename?: 'OnboardingSchema';
  completed: Scalars['Boolean'];
  numSteps: Scalars['Int'];
  numStepsCompleted: Scalars['Int'];
  numStepsLeft: Scalars['Int'];
  steps?: Maybe<Array<OnboardingStep>>;
};


export type OnboardingSchemaNumStepsArgs = {
  requiredForSubmission?: InputMaybe<Scalars['Boolean']>;
};


export type OnboardingSchemaNumStepsCompletedArgs = {
  requiredForSubmission?: InputMaybe<Scalars['Boolean']>;
};


export type OnboardingSchemaNumStepsLeftArgs = {
  requiredForSubmission?: InputMaybe<Scalars['Boolean']>;
};


export type OnboardingSchemaStepsArgs = {
  completed?: InputMaybe<Scalars['Boolean']>;
  requiredForSubmission?: InputMaybe<Scalars['Boolean']>;
};

export type OnboardingStep = {
  __typename?: 'OnboardingStep';
  completed: Scalars['Boolean'];
  ctaLink?: Maybe<Scalars['String']>;
  ctaText: Scalars['String'];
  description: Scalars['String'];
  illustration?: Maybe<Scalars['String']>;
  name: MerchantOnboardingStep;
  title: Scalars['String'];
};

export type OneoffPaymentStatus =
  | 'CANCELLED'
  | 'PAID'
  | 'UNPAID';

export type OneoffPaymentType =
  | 'CONSOLIDATE_MP_PAYMENT'
  | 'DISPUTE_APPROVED'
  | 'EARLY_PAYMENT'
  | 'EARLY_PAYMENT_REIMBURSEMENT_FEE'
  | 'FBW_PAYMENT'
  | 'FINE_REVERSED'
  | 'MERCHANT_INCENTIVE'
  | 'ONEOFF'
  | 'ONEOFF_ADMIN_TOOL'
  | 'PRODUCT_BOOST_BALANCE_REFUND'
  | 'PRODUCT_REBATE'
  | 'PRODUCT_UNTAGGED_MISLEADING'
  | 'REGISTRATION_REFUND'
  | 'REV_SHARE_ADJUSTMENT'
  | 'SE_CASH_BACK'
  | 'STORE_PAYMENT'
  | 'WISHPOST_ADJUSTMENT_PAYMENT'
  | 'WISH_PARCEL_SERVICE_ADJUSTMENT'
  | 'WITHHOLD_RELEASE';

export type OrderAdvancedLogisticsInfoSchema = {
  __typename?: 'OrderAdvancedLogisticsInfoSchema';
  canUncombine: Scalars['Boolean'];
};

export type OrderBadge =
  | 'ADVANCED_LOGISTICS'
  | 'APLUS_FAST_PAYMENT'
  | 'CHINA_POST_SUBSIDY'
  | 'COMBINED'
  | 'CONFIRMED_DELIVERY_REQUIRED'
  | 'COUNTRY_BADGE_BR'
  | 'COUNTRY_BADGE_CL'
  | 'COUNTRY_BADGE_GB'
  | 'COUNTRY_BADGE_KR'
  | 'COUNTRY_BADGE_NO'
  | 'EPC_FAST_PAYMENT'
  | 'EU_VAT'
  | 'FBW'
  | 'LESS_THAN_TRUCK_LOAD'
  | 'MERCHANT_STANDING_BENEFIT'
  | 'NON_COMPLIANT_WISH_EXPRESS'
  | 'OPTIONAL_ADVANCED_LOGISTICS'
  | 'PAY_CUSTOMER_VAT_REQUIRED_EU'
  | 'PAY_CUSTOMER_VAT_REQUIRED_LEGACY_DE'
  | 'PAY_CUSTOMER_VAT_REQUIRED_UK'
  | 'PREMIUM_SHIPPING_CARRIER_UPGRADE'
  | 'SE_CASHBACK'
  | 'STRATEGIC_COUNTRY_REBATE'
  | 'STRATEGIC_ORDER_REBATE'
  | 'TRACKING_CANCELLED'
  | 'TRACKING_CANCELLED_A_PLUS'
  | 'UNIFICATION_INITIATIVE'
  | 'WISH_EXPRESS'
  | 'WPS_ELIGIBLE';

export type OrderCsvColumnSchema = {
  __typename?: 'OrderCSVColumnSchema';
  description: Scalars['String'];
  name: Scalars['String'];
};

export type OrderCarrierTier =
  | 'Tier1'
  | 'Tier2'
  | 'Tier3'
  | 'Tier4';

export type OrderConstants = {
  __typename?: 'OrderConstants';
  dadaPolicyDaysToConfirmedDelivered?: Maybe<Scalars['Int']>;
};

export type OrderEpcInfoSchema = {
  __typename?: 'OrderEPCInfoSchema';
  canUncombine: Scalars['Boolean'];
};

export type OrderEstimatedShippingTimelineSchema = {
  __typename?: 'OrderEstimatedShippingTimelineSchema';
  maxDeliveryTime?: Maybe<Datetime>;
  maxShipTime: Datetime;
};

export type OrderFbwDetailsSchema = {
  __typename?: 'OrderFBWDetailsSchema';
  isFbw: Scalars['Boolean'];
  warehouseId: Scalars['String'];
  warehouseName: Scalars['String'];
};

export type OrderHistorySearchType =
  | 'DISPUTE_ID'
  | 'ORDER_ID'
  | 'PRODUCT_ID'
  | 'TRACKING_NUMBER'
  | 'TRANSACTION_ID'
  | 'USER_NAME';

export type OrderHistorySort = {
  field: OrderHistorySortFieldType;
  order: SortOrderType;
};

export type OrderHistorySortFieldType =
  | 'LAST_UPDATE'
  | 'ORDER_TIME';

export type OrderInfractionDisputeAction =
  | 'ADMIN_COMMENT'
  | 'APPROVE'
  | 'CANCEL'
  | 'CLAIM'
  | 'CLOSE'
  | 'CREATE'
  | 'HOLD'
  | 'REJECT'
  | 'REOPEN'
  | 'REPLY';

export type OrderInfractionDisputeMutations = {
  __typename?: 'OrderInfractionDisputeMutations';
  upsertOrderInfractionDispute?: Maybe<UpsertOrderInfractionDispute>;
};


export type OrderInfractionDisputeMutationsUpsertOrderInfractionDisputeArgs = {
  input?: InputMaybe<UpsertOrderInfractionDisputeInput>;
};

export type OrderInfractionDisputeSubreason =
  | 'ADDRESS_PO_BOX'
  | 'AMBIGUOUS_CUSTOMER_ADDRESS'
  | 'CANNOT_SHIP_TO_REGION'
  | 'CAN_PROVIDE_CORRECT_TRACKING_INFO'
  | 'INCORRECT_CONFIRMED_DELIVERY_DATE_FROM_CARRIER'
  | 'INCORRECT_CONFIRMED_FULFILLMENT_DATE'
  | 'INCORRECT_TRACKING_INFO'
  | 'NATIONAL_HOLIDAY'
  | 'NATURAL_DISASTER'
  | 'OPERATIONAL_OR_IT_ISSUE'
  | 'OTHER'
  | 'RESHIP_PACKAGE'
  | 'SHIPMENT_RETURNED'
  | 'SHIPMENT_STUCK_AT_CUSTOMS'
  | 'TECHNICAL_ISSUE'
  | 'UNVERIFIABLE_ADDRESS'
  | 'WISH_LOGISTICS_CANNOT_FULFILL';

export type OrderLimboState =
  | 'LIMBO_AND_CUSTOMER_REFUNDED'
  | 'LIMBO_AND_NOT_ROUTED'
  | 'LIMBO_AND_ROUTED'
  | 'NOT_LIMBO';

export type OrderLogicalPaymentState =
  | 'FBW_PAID'
  | 'HAS_BEEN_PAID'
  | 'PENDING_CONFIRMED_SHIP'
  | 'PENDING_WFP_WITHHOLD'
  | 'PENDING_WISHPOST_SHIPPING'
  | 'TO_BE_PAID'
  | 'UNDER_REVIEW'
  | 'WILL_NOT_BE_PAID'
  | 'WITHHELD';

export type OrderMfpCampaignSchema = {
  __typename?: 'OrderMFPCampaignSchema';
  campaign?: Maybe<MfpCampaignSchema>;
  campaignId: Scalars['String'];
  campaignName: Scalars['String'];
  priceDiscountType: MfpCampaignPriceDiscounted;
};

export type OrderNoFulfillSchema = {
  __typename?: 'OrderNOFulfillSchema';
  isBoundOrder: Scalars['Boolean'];
};

export type OrderOnTimeDeliveryCriteria =
  | 'DADA'
  | 'WISH_EXPRESS';

export type OrderPolicyType =
  | 'WAREHOUSE_FULFILLMENT_POLICY'
  | 'WISH_EXPRESS';

export type OrderRebateCancelType =
  | 'CANCEL_AFTER_PAYMENT'
  | 'CANCEL_BEFORE_PAYMENT'
  | 'NO_CANCEL';

export type OrderRebateSchema = {
  __typename?: 'OrderRebateSchema';
  amount: CurrencyValue;
  cancelState?: Maybe<OrderRebateCancelType>;
  id: Scalars['ObjectIdType'];
  localizedRebateAmount: CurrencyValue;
  paymentId?: Maybe<Scalars['ObjectIdType']>;
  refundPaymentId?: Maybe<Scalars['ObjectIdType']>;
  type: OrderRebateType;
};


export type OrderRebateSchemaAmountArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};

export type OrderRebateType =
  | 'CHINA_POST_SUBSITY'
  | 'COVID19_SUBSIDY'
  | 'MARKETING_REBATE'
  | 'STRATEGIC_ORDER_REBATE'
  | 'TRANSACTION_FEE_REBATE'
  | 'WISH_EXPRESS_REBATE';

export type OrderRefundBuyerFraudSubreasonSchema = {
  __typename?: 'OrderRefundBuyerFraudSubreasonSchema';
  reason: BuyerFraudReasonCategory;
  text: Scalars['String'];
};

export type OrderRefundDeductedStatus =
  | 'DEDUCTED_AFTER_PAYMENT'
  | 'DEDUCTED_BEFORE_PAYMENT'
  | 'UNDEDUCTED';

export type OrderRefundItemDisputeSchema = {
  __typename?: 'OrderRefundItemDisputeSchema';
  isApproved: Scalars['Boolean'];
  paymentId?: Maybe<Scalars['ObjectIdType']>;
  supportingPolicy: Scalars['String'];
};

export type OrderRefundItemSchema = {
  __typename?: 'OrderRefundItemSchema';
  canReportFraud: Scalars['Boolean'];
  dispute?: Maybe<OrderRefundItemDisputeSchema>;
  disputeId?: Maybe<Scalars['ObjectIdType']>;
  eatCostWarning?: Maybe<MerchantWarningSchema>;
  id: Scalars['ObjectIdType'];
  isDisputable: Scalars['Boolean'];
  localizedMerchantResponsibleAmount?: Maybe<CurrencyValue>;
  merchantResponsibilityRatio: Scalars['Float'];
  merchantResponsibleAmount?: Maybe<CurrencyValue>;
  note?: Maybe<Scalars['String']>;
  payment: OrderRefundPaymentSchema;
  quantity: Scalars['Int'];
  reasonInfo: OrderRefundReasonSchema;
  refundTax?: Maybe<CurrencyValue>;
  refundTime: Datetime;
  source: RefundSource;
};


export type OrderRefundItemSchemaMerchantResponsibleAmountArgs = {
  includeWishpostFee?: InputMaybe<Scalars['Boolean']>;
  localized?: InputMaybe<Scalars['Boolean']>;
};


export type OrderRefundItemSchemaRefundTaxArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};

export type OrderRefundItemsSummarySchema = {
  __typename?: 'OrderRefundItemsSummarySchema';
  isPartialAmountRefunded: Scalars['Boolean'];
  refundedPercentage?: Maybe<Scalars['Float']>;
  refundedQuantity: Scalars['Int'];
};

export type OrderRefundPaymentSchema = {
  __typename?: 'OrderRefundPaymentSchema';
  id?: Maybe<Scalars['ObjectIdType']>;
  merchantAmount?: Maybe<CurrencyValue>;
  status: OrderRefundDeductedStatus;
  time?: Maybe<Datetime>;
};


export type OrderRefundPaymentSchemaMerchantAmountArgs = {
  includeWishpostFee?: InputMaybe<Scalars['Boolean']>;
  localized?: InputMaybe<Scalars['Boolean']>;
};

export type OrderRefundReasonSchema = {
  __typename?: 'OrderRefundReasonSchema';
  reason: RefundReasonCategory;
  text?: Maybe<Scalars['String']>;
};

export type OrderReportReasonSchema = {
  __typename?: 'OrderReportReasonSchema';
  reportOrderReason: ReportOrderReasons;
  reportOrderReasonText: Scalars['String'];
};

export type OrderReturnLabelFeeSchema = {
  __typename?: 'OrderReturnLabelFeeSchema';
  amount: CurrencyValue;
  id: Scalars['ObjectIdType'];
};


export type OrderReturnLabelFeeSchemaAmountArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};

export type OrderReturnsSchema = {
  __typename?: 'OrderReturnsSchema';
  canOpenReturnDispute: Scalars['Boolean'];
};

export type OrderRevShareProductCategory =
  | 'APPAREL_ACCESSORY'
  | 'CLOTHING'
  | 'ELECTRONICS'
  | 'HOUSEHOLD'
  | 'JEWELRY_AND_ACCESSORY'
  | 'OTHER'
  | 'SEX_TOY'
  | 'SHOES'
  | 'WATCH';

export type OrderSalesTaxDetailsSchema = {
  __typename?: 'OrderSalesTaxDetailsSchema';
  authorityCountry?: Maybe<Country>;
  itemCount: Scalars['Int'];
  items: Array<OrderTaxItemSchema>;
  netTax: CurrencyValue;
  refundedTax: CurrencyValue;
  remitTypes: Array<CommerceTransactionTaxRemitType>;
  salesTax: CurrencyValue;
};


export type OrderSalesTaxDetailsSchemaItemsArgs = {
  remitType?: InputMaybe<CommerceTransactionTaxRemitType>;
};


export type OrderSalesTaxDetailsSchemaNetTaxArgs = {
  inMerchantCurrency?: InputMaybe<Scalars['Boolean']>;
  remitType?: InputMaybe<CommerceTransactionTaxRemitType>;
  targetCurrency?: InputMaybe<TaxTargetCurrency>;
};


export type OrderSalesTaxDetailsSchemaRefundedTaxArgs = {
  inMerchantCurrency?: InputMaybe<Scalars['Boolean']>;
  remitType?: InputMaybe<CommerceTransactionTaxRemitType>;
  targetCurrency?: InputMaybe<TaxTargetCurrency>;
};


export type OrderSalesTaxDetailsSchemaSalesTaxArgs = {
  eventTypes?: InputMaybe<Array<CommerceTransactionTaxEventType>>;
  inMerchantCurrency?: InputMaybe<Scalars['Boolean']>;
  remitType?: InputMaybe<CommerceTransactionTaxRemitType>;
  targetCurrency?: InputMaybe<TaxTargetCurrency>;
};

export type OrderSchema = {
  __typename?: 'OrderSchema';
  acceptableShippingOrigins: Array<Country>;
  adjustedProductPrice?: Maybe<CurrencyValue>;
  adjustedShippingPrice?: Maybe<CurrencyValue>;
  advancedLogistics?: Maybe<OrderAdvancedLogisticsInfoSchema>;
  availableShippingProviders: Array<ShippingProviderSchema>;
  badges: Array<OrderBadge>;
  canEditShippingAddress: Scalars['Boolean'];
  canModifyTrackingInfo: Scalars['Boolean'];
  canRefund: Scalars['Boolean'];
  canRequestAddressVerification: Scalars['Boolean'];
  canShowCarrierTier: Scalars['Boolean'];
  canUploadDeliveryConfirmation: Scalars['Boolean'];
  cartPrice?: Maybe<CartPriceDetailSchema>;
  chargeback: Scalars['Boolean'];
  client?: Maybe<CommerceTransactionClient>;
  colorAtPurchaseTime?: Maybe<Scalars['String']>;
  combinedOrderId?: Maybe<Scalars['ObjectIdType']>;
  confirmedDelivered: Scalars['Boolean'];
  counterfeitRefundWarningId?: Maybe<Scalars['ObjectIdType']>;
  customer: CustomerSchema;
  customerIdentifyInfo?: Maybe<CustomerIdentityInfo>;
  customerPaidCurrency: Scalars['String'];
  deliveryDeadline?: Maybe<Datetime>;
  epc?: Maybe<OrderEpcInfoSchema>;
  estimatedShippingTimeline?: Maybe<OrderEstimatedShippingTimelineSchema>;
  estimatedWishpostShipping?: Maybe<CurrencyValue>;
  expectedDeliveryDate?: Maybe<Datetime>;
  expectedTtdBusinessDays?: Maybe<Scalars['Int']>;
  fbwDetails?: Maybe<OrderFbwDetailsSchema>;
  hasShipped: Scalars['Boolean'];
  hoursLeftToFulfill?: Maybe<Scalars['Int']>;
  id: Scalars['ObjectIdType'];
  inRefundLimbo: Scalars['Boolean'];
  infractions: Array<MerchantWarningSchema>;
  initialWishpostShipping?: Maybe<CurrencyValue>;
  isAdvancedLogistics: Scalars['Boolean'];
  isBlueFusion: Scalars['Boolean'];
  isCombinedOrder: Scalars['Boolean'];
  isEligibleToShipWithWps: Scalars['Boolean'];
  isExpeditedPolicy: Scalars['Boolean'];
  isFbwFastPayment: Scalars['Boolean'];
  isFreeShippingEligible: Scalars['Boolean'];
  isInIncentiveProgram: Scalars['Boolean'];
  isNewRefund: Scalars['Boolean'];
  isPickupNow: Scalars['Boolean'];
  isProcessing: Scalars['Boolean'];
  isRemovedFromAdvancedLogistics: Scalars['Boolean'];
  isRouted: Scalars['Boolean'];
  isShippedWithQualifiedDadaCarrier: Scalars['Boolean'];
  isStoreUploaded: Scalars['Boolean'];
  isStreamline: Scalars['Boolean'];
  isTopStandingMerchant: Scalars['Boolean'];
  isUnityOrder: Scalars['Boolean'];
  isWishExpress: Scalars['Boolean'];
  isWishLocal: Scalars['Boolean'];
  legacyRefundSource?: Maybe<LegacyRefundSource>;
  limboState: OrderLimboState;
  merchantCommissionFees?: Maybe<CurrencyValue>;
  merchantCurrencyAtPurchaseTime: PaymentCurrencyCode;
  merchantFundedPromotions?: Maybe<Array<OrderMfpCampaignSchema>>;
  merchantId: Scalars['ObjectIdType'];
  merchantPaymentId?: Maybe<Scalars['ObjectIdType']>;
  merchantPaymentStatus: MerchantPaymentStatus;
  merchantPaymentTime?: Maybe<Datetime>;
  merchantPrice: CurrencyValue;
  merchantPriceAfterMfpDiscount: CurrencyValue;
  merchantShipping: CurrencyValue;
  merchantShippingAfterMfpDiscount: CurrencyValue;
  merchantTotal: CurrencyValue;
  merchantTotalAfterMfpDiscount: CurrencyValue;
  norwayDetails?: Maybe<OrderNoFulfillSchema>;
  oneoffPayment?: Maybe<MerchantOneoffPaymentSchema>;
  orderTime?: Maybe<Datetime>;
  originalRevShare?: Maybe<Scalars['Float']>;
  packageOverviewDocumentUrl?: Maybe<Scalars['String']>;
  paidAmount: CurrencyValue;
  pastTracking?: Maybe<PastOrderTrackingInfoSchema>;
  paymentStatus: OrderLogicalPaymentState;
  penalties: Array<PenaltySchema>;
  priceCost: CurrencyValue;
  product?: Maybe<ProductSchema>;
  productCategoryDispute?: Maybe<ProductCategoryDisputeSchema>;
  productId: Scalars['ObjectIdType'];
  productName: Scalars['String'];
  quantity: Scalars['Int'];
  reReleasedTime?: Maybe<Datetime>;
  rebates?: Maybe<Array<OrderRebateSchema>>;
  refundItems?: Maybe<Array<OrderRefundItemSchema>>;
  refundItemsSummary?: Maybe<OrderRefundItemsSummarySchema>;
  refundedTime?: Maybe<Datetime>;
  releasedTime?: Maybe<Datetime>;
  removedFromAplusTime?: Maybe<Datetime>;
  requiresConfirmedDelivery: Scalars['Boolean'];
  requiresDeliveredDutyPaid: Scalars['Boolean'];
  returnDetailsId?: Maybe<Scalars['ObjectIdType']>;
  returnLabelFee?: Maybe<OrderReturnLabelFeeSchema>;
  returnRequest?: Maybe<ReturnRequestSchema>;
  returns?: Maybe<OrderReturnsSchema>;
  revShare: RevShareInfoSchema;
  routedTo?: Maybe<OrderSchema>;
  routingOriginalOrderId?: Maybe<Scalars['ObjectIdType']>;
  shippedDate?: Maybe<Datetime>;
  shippingCost: CurrencyValue;
  shippingDetails?: Maybe<ShippingDetailsSchema>;
  shippingEstimate?: Maybe<OrderShippingEstimate>;
  shippingOrigin?: Maybe<Country>;
  shippingOriginAddress?: Maybe<AddressSchema>;
  shippingProviderId?: Maybe<Scalars['Int']>;
  shopifyDetails?: Maybe<OrderShopifyDetailsSchema>;
  shouldDisplayDeliveryStatus: Scalars['Boolean'];
  showAplusShippingAddressTooltip: Scalars['Boolean'];
  showMerchantCommissionFees?: Maybe<Scalars['Boolean']>;
  sizeAtPurchaseTime?: Maybe<Scalars['String']>;
  skuAtPurchaseTime: Scalars['String'];
  specialPrograms: Array<SpecialOrderProgramSchema>;
  state: CommerceTransactionState;
  supportTicket?: Maybe<CustomerSupportTicket>;
  tax?: Maybe<OrderTaxSchema>;
  totalCost: CurrencyValue;
  tracking?: Maybe<OrderTrackingInfoSchema>;
  trackingCancelledDate?: Maybe<Datetime>;
  trackingDispute?: Maybe<TrackingDisputeSchema>;
  transactionId?: Maybe<Scalars['ObjectIdType']>;
  ttd?: Maybe<Scalars['Int']>;
  ttdBusinessDays?: Maybe<Scalars['Int']>;
  ukDetails?: Maybe<OrderUkFulfillSchema>;
  unityWishpostShipping?: Maybe<CurrencyValue>;
  updatedRevShare?: Maybe<Scalars['Float']>;
  userReceivedTime?: Maybe<Datetime>;
  validRefundReasons: Array<OrderRefundReasonSchema>;
  variation?: Maybe<VariationSchema>;
  warehouse?: Maybe<MerchantWarehouseSchema>;
  warehouseFulfillmentPolicyInfo?: Maybe<OrderWfpInfoSchema>;
  warehouseId?: Maybe<Scalars['String']>;
  warehouseShippingType?: Maybe<OrderWarehouseShippingType>;
  wasDeliveredOnTime?: Maybe<Scalars['Boolean']>;
  wishExpressExtensionDays: Scalars['Int'];
  wishpostShippingUpdates: Array<WishPostShippingUpdatesSchema>;
  withholdReasonText?: Maybe<Scalars['String']>;
  withholdWarningId?: Maybe<Scalars['ObjectIdType']>;
  wpsFulfillment?: Maybe<WpsFulfillmentInfoSchema>;
};


export type OrderSchemaAvailableShippingProvidersArgs = {
  originCountryCode: CountryCode;
};


export type OrderSchemaMerchantPriceArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};


export type OrderSchemaMerchantShippingArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};


export type OrderSchemaShippingCostArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};


export type OrderSchemaWasDeliveredOnTimeArgs = {
  criteria?: InputMaybe<OrderOnTimeDeliveryCriteria>;
};

export type OrderShippingEstimate = {
  __typename?: 'OrderShippingEstimate';
  maxTime?: Maybe<Timedelta>;
  minTime?: Maybe<Timedelta>;
};

export type OrderShopifyDetailsSchema = {
  __typename?: 'OrderShopifyDetailsSchema';
  shopifyOrderId: Scalars['String'];
};

export type OrderTaxItemSchema = {
  __typename?: 'OrderTaxItemSchema';
  authority: TaxAuthoritySchema;
  createdTime: Datetime;
  eventType: CommerceTransactionTaxEventType;
  exemptAmount?: Maybe<CurrencyValue>;
  grossAmount: CurrencyValue;
  id: Scalars['String'];
  isRefund: Scalars['Boolean'];
  isSale: Scalars['Boolean'];
  orderId: Scalars['ObjectIdType'];
  quantity: Scalars['Int'];
  refundItemId?: Maybe<Scalars['ObjectIdType']>;
  remitType: CommerceTransactionTaxRemitType;
  taxAmount: CurrencyValue;
  taxRate: Scalars['Float'];
  taxType: TaxType;
  taxableAddress: AddressSchema;
  taxableAmount: CurrencyValue;
  transactionId: Scalars['ObjectIdType'];
  variationId: Scalars['ObjectIdType'];
};

export type OrderTaxSchema = {
  __typename?: 'OrderTaxSchema';
  euVat?: Maybe<EuvatSchema>;
  isVatOrder?: Maybe<Scalars['Boolean']>;
  isWishReseller: Scalars['Boolean'];
  norwayVatNumber?: Maybe<Scalars['String']>;
  salesTax: OrderSalesTaxDetailsSchema;
};

export type OrderTrackingInfoSchema = {
  __typename?: 'OrderTrackingInfoSchema';
  carrierTier?: Maybe<OrderCarrierTier>;
  checkpoints?: Maybe<Array<TrackingCheckpointSchema>>;
  confirmedDeliveredTime?: Maybe<Datetime>;
  confirmedFulfillmentDate?: Maybe<Datetime>;
  deliveredDate?: Maybe<Datetime>;
  disputeCarrierTier?: Maybe<OrderCarrierTier>;
  disputeConfirmedTime?: Maybe<Datetime>;
  disputeDeliveredTime?: Maybe<Datetime>;
  isFakeTrackingOrder: Scalars['Boolean'];
  isTrackingConfirmed: Scalars['Boolean'];
  warehouseArrivalTime?: Maybe<Datetime>;
  wishReceivedShippedTime?: Maybe<Datetime>;
};

export type OrderUkFulfillSchema = {
  __typename?: 'OrderUKFulfillSchema';
  isBoundOrder: Scalars['Boolean'];
};

export type OrderWfpInfoSchema = {
  __typename?: 'OrderWFPInfoSchema';
  deliveryState: WfpOrderDeliveryState;
  wfpWithholdReason?: Maybe<WfpWithholdReasonSchema>;
  wishExpress?: Maybe<WishExpressInfoSchema>;
};

export type OrderWarehouseShippingType =
  | 'FBW_V1'
  | 'FBW_V1_WLC'
  | 'FBW_V2'
  | 'FBW_V2_CALCULATED'
  | 'FBW_V2_EXPRESS'
  | 'FBW_V2_REGULAR'
  | 'MERCHANT_TTD_1_DAY'
  | 'MERCHANT_TTD_2_DAY'
  | 'MERCHANT_TTD_3_DAY'
  | 'MERCHANT_TTD_4_DAY'
  | 'MERCHANT_TTD_5_DAY'
  | 'MERCHANT_TTD_6_DAY'
  | 'MERCHANT_TTD_7_DAY'
  | 'MERCHANT_TTD_8_DAY'
  | 'MERCHANT_TTD_9_DAY'
  | 'MERCHANT_TTD_10_DAY'
  | 'MERCHANT_TTD_11_DAY'
  | 'MERCHANT_TTD_12_DAY'
  | 'MERCHANT_TTD_13_DAY'
  | 'MERCHANT_TTD_14_DAY'
  | 'MERCHANT_TTD_15_DAY'
  | 'MERCHANT_TTD_16_DAY'
  | 'MERCHANT_TTD_17_DAY'
  | 'MERCHANT_TTD_18_DAY'
  | 'MERCHANT_TTD_19_DAY'
  | 'MERCHANT_TTD_20_DAY'
  | 'MERCHANT_TTD_21_DAY'
  | 'MERCHANT_TTD_22_DAY'
  | 'MERCHANT_TTD_23_DAY'
  | 'MERCHANT_TTD_24_DAY'
  | 'MERCHANT_TTD_25_DAY'
  | 'MERCHANT_TTD_26_DAY'
  | 'MERCHANT_TTD_27_DAY'
  | 'MERCHANT_TTD_28_DAY'
  | 'MERCHANT_TTD_29_DAY'
  | 'MERCHANT_TTD_30_DAY'
  | 'MERCHANT_TTD_31_DAY'
  | 'MERCHANT_TTD_32_DAY'
  | 'MERCHANT_TTD_33_DAY'
  | 'MERCHANT_TTD_34_DAY'
  | 'MERCHANT_TTD_35_DAY'
  | 'MERCHANT_TTD_36_DAY'
  | 'MERCHANT_TTD_37_DAY'
  | 'MERCHANT_TTD_38_DAY'
  | 'MERCHANT_TTD_39_DAY'
  | 'MERCHANT_TTD_40_DAY'
  | 'MERCHANT_TTD_41_DAY'
  | 'MERCHANT_TTD_42_DAY'
  | 'MERCHANT_TTD_43_DAY'
  | 'MERCHANT_TTD_44_DAY'
  | 'MERCHANT_TTD_45_DAY'
  | 'REGULAR'
  | 'WAIT_AND_SAVE'
  | 'WISH_BLUE'
  | 'WISH_EXPRESS'
  | 'WISH_EXPRESS_2_DAY'
  | 'WISH_EXPRESS_7_DAY';

export type OrdersCsvDownload = {
  __typename?: 'OrdersCsvDownload';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type OrdersCsvDownloadInput = {
  endDate: DatetimeInput;
  filter?: InputMaybe<CsvExportFilterType>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<OrderHistorySearchType>;
  sort?: InputMaybe<OrderHistorySort>;
  startDate: DatetimeInput;
  wishExpressOnly?: InputMaybe<Scalars['Boolean']>;
};

export type OtherCountriesShippingSetting = {
  enabled: Scalars['Boolean'];
  price: CurrencyInput;
};

export type PackageDimensionsInput = {
  height?: InputMaybe<LengthInput>;
  length?: InputMaybe<LengthInput>;
  weight: WeightInput;
  width?: InputMaybe<LengthInput>;
};

export type PartialRefundType =
  | 'PARTIAL_AMOUNT'
  | 'PERCENTAGE'
  | 'PRODUCT_PRICE'
  | 'QUANTITY';

export type PasswordEvaluation = {
  __typename?: 'PasswordEvaluation';
  errorMessage?: Maybe<Scalars['String']>;
  valid: Scalars['Boolean'];
};

export type PasswordMutations = {
  __typename?: 'PasswordMutations';
  change?: Maybe<ChangePasswordMutation>;
};


export type PasswordMutationsChangeArgs = {
  input: ChangePasswordInput;
};

export type PastOrderTrackingInfoSchema = {
  __typename?: 'PastOrderTrackingInfoSchema';
  lastUpdatedDate?: Maybe<Datetime>;
  provider?: Maybe<ShippingProviderSchema>;
  tracking?: Maybe<OrderTrackingInfoSchema>;
  trackingId?: Maybe<Scalars['String']>;
};

export type PayableCleanupInput = {
  localCleanUp: Scalars['Boolean'];
  payableIds: Array<Scalars['String']>;
  payableTypes: Array<Scalars['String']>;
  validationId?: InputMaybe<Scalars['String']>;
};

export type PayableCleanupMutation = {
  __typename?: 'PayableCleanupMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type PayableInfoSchema = {
  __typename?: 'PayableInfoSchema';
  finePayables?: Maybe<Array<MerchantFineSchema>>;
  oneoffPayables?: Maybe<Array<MerchantOneoffPaymentSchema>>;
  orderPayables?: Maybe<Array<OrderSchema>>;
  validationResult?: Maybe<Array<ValidationResultSchema>>;
};


export type PayableInfoSchemaFinePayablesArgs = {
  payableIds?: InputMaybe<Array<Scalars['String']>>;
};


export type PayableInfoSchemaOneoffPayablesArgs = {
  payableIds?: InputMaybe<Array<Scalars['String']>>;
};


export type PayableInfoSchemaOrderPayablesArgs = {
  payableIds?: InputMaybe<Array<Scalars['String']>>;
};


export type PayableInfoSchemaValidationResultArgs = {
  validationId?: InputMaybe<Scalars['String']>;
};

export type PayableValidationInput = {
  payableIds: Array<Scalars['String']>;
  payableTypes: Array<Scalars['String']>;
};

export type PayableValidationMutation = {
  __typename?: 'PayableValidationMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  validationId?: Maybe<Scalars['String']>;
};

export type PaymentBusinessInfo = {
  __typename?: 'PaymentBusinessInfo';
  businessId: Scalars['String'];
  name: Scalars['String'];
};

export type PaymentCurrencyCode =
  | 'AUD'
  | 'BRL'
  | 'CAD'
  | 'CHF'
  | 'CNY'
  | 'CZK'
  | 'DKK'
  | 'EUR'
  | 'GBP'
  | 'JPY'
  | 'MXN'
  | 'SEK'
  | 'TRY'
  | 'UAH'
  | 'USD';

export type PaymentPersonalInfo = {
  __typename?: 'PaymentPersonalInfo';
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  contactInfo?: Maybe<PaymentProviderContactInfo>;
  logo: Scalars['String'];
  name: Scalars['String'];
  type: PayoutPaymentProviderType;
};

export type PaymentProviderContactInfo = {
  __typename?: 'PaymentProviderContactInfo';
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  qqUserId?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  wechatUsername?: Maybe<Scalars['String']>;
};

export type PaymentType =
  | 'CREDIT'
  | 'DEBIT';

export type PayoneerSignupMutation = {
  __typename?: 'PayoneerSignupMutation';
  alreadyRegistered?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  redirectUrl?: Maybe<Scalars['String']>;
};

export type PayoutPaymentProviderType =
  | 'ALLPAY'
  | 'BILL'
  | 'CARDINFOLINK'
  | 'LIANLIAN'
  | 'PAYECO2'
  | 'PAYONEER'
  | 'PAYPAL'
  | 'PAYPAL_EEA'
  | 'PAYPAL_MERCH'
  | 'PINGPONG'
  | 'UMPAY'
  | 'UMPAY2'
  | 'UMPAY_ENTERPRISE'
  | 'WISHPAY';

export type PenaltySchema = {
  __typename?: 'PenaltySchema';
  reason: FineReason;
};

export type PermissionSchema = {
  __typename?: 'PermissionSchema';
  description?: Maybe<Scalars['String']>;
  id: PermissionType;
  name: Scalars['String'];
};

export type PermissionStatusType =
  | 'ASSIGNABLE'
  | 'ASSIGNED'
  | 'DEFAULT';

export type PermissionType =
  | 'ACCEPT_MERCHANT_TERMS'
  | 'ACCESS_EXTERNAL_APIS'
  | 'ACCESS_PSP_SIGN_UP'
  | 'ADD_PRODUCTS'
  | 'ADD_SIZE_COLOR'
  | 'API_ACCESS'
  | 'AUDIT_ALL_CS_TEAMS'
  | 'AUDIT_ALL_TEAM'
  | 'AUDIT_CS_TICKETS'
  | 'AUDIT_TAGGING_BY_TAGGERS'
  | 'AUDIT_TICKET_REPLIES'
  | 'AUTHORIZED_MERCHANT'
  | 'BOOST'
  | 'BOXC_LOGISTIC'
  | 'BRAND_REVIEW_TAG'
  | 'CAN_ACCESS_AUTH_BRAND_AUDIT'
  | 'CAN_ACCESS_BLANKET_AUTHORIZATION'
  | 'CAN_ACCESS_BULK_ORDER_INFRACTION_TOOL'
  | 'CAN_ACCESS_CONFIRM_DELIVERED_CARRIER'
  | 'CAN_ACCESS_GATEKEEPER_PAYMENT_HOLD_ONEOFF'
  | 'CAN_ACCESS_INAPPROPRIATE_DEDUP_LIB_TOOL'
  | 'CAN_ACCESS_IPV_DEDUP_LIB_TOOL'
  | 'CAN_ACCESS_IPV_DETECTION_EXTERNAL_V3_API'
  | 'CAN_ACCESS_MANUAL_REVIEW_ONLY_TOOL'
  | 'CAN_ACCESS_MERCHANT_RISK_REVIEW_OUTCOME_ONEOFF'
  | 'CAN_ACCESS_ONEOFF_API_GET_APPROVERS'
  | 'CAN_ACCESS_ONEOFF_API_GET_FIELDS_INFO'
  | 'CAN_ACCESS_ONEOFF_API_LIST'
  | 'CAN_ACCESS_ONEOFF_API_REMOVE'
  | 'CAN_ACCESS_ONEOFF_API_REVIEW'
  | 'CAN_ACCESS_ONEOFF_API_SAVE'
  | 'CAN_ACCESS_ONEOFF_INJUNCTION_REQUEST'
  | 'CAN_ACCESS_ONEOFF_PAGE_LIST'
  | 'CAN_ACCESS_ONEOFF_PAGE_REVIEW'
  | 'CAN_ACCESS_ONEOFF_PAGE_SUBMIT'
  | 'CAN_ACCESS_ONEOFF_REQ_TOOL'
  | 'CAN_ACCESS_ONEOFF_VIEW_ALL_REQUESTS'
  | 'CAN_ACCESS_ORDERS_MANAGER'
  | 'CAN_ACCESS_REFRESHING_TRACKING'
  | 'CAN_ACCESS_SHIPPING_PROVIDER'
  | 'CAN_ACCESS_TRACKING_NUMBER_PAGE'
  | 'CAN_ACCESS_UPDATE_CONFIRMED'
  | 'CAN_ACCESS_UPDATE_TRACKING'
  | 'CAN_ACCESS_V2_HOMEPAGE'
  | 'CAN_ACCESS_WISHPOST_EXTERNAL_V3_API'
  | 'CAN_ACT_ON_ASIAN_MERCHANT'
  | 'CAN_ACT_ON_BR_MERCHANT'
  | 'CAN_ACT_ON_CN_MERCHANT'
  | 'CAN_ACT_ON_EU_MERCHANT'
  | 'CAN_ACT_ON_KR_MERCHANT'
  | 'CAN_ACT_ON_MX_MERCHANT'
  | 'CAN_ACT_ON_US_MERCHANT'
  | 'CAN_ADMIN_CANNED_RESPONSES'
  | 'CAN_ALLOW_REPURCHASE'
  | 'CAN_APPROVE_ANY_MERCHANT'
  | 'CAN_APPROVE_PRODUCT_BOOST_MERCHANTS'
  | 'CAN_AUDIT_REVIEW_RESULT'
  | 'CAN_BE_ASSIGNED_MANAGER'
  | 'CAN_BE_ASSIGNED_MERCHANT_COUNTRY'
  | 'CAN_BE_VIEWED_BY_OUTSOURCE_MERCHANT'
  | 'CAN_BLOCK_USER_ON_USER_REVIEW'
  | 'CAN_CHECK_EXTERNAL_TRACKING'
  | 'CAN_CHECK_INTERNAL_TRACKING'
  | 'CAN_CONVERT_ALL_USERS'
  | 'CAN_CREATE_BLUE_ADMIN'
  | 'CAN_CREATE_BULK_ONEOFF_PAYMENTS'
  | 'CAN_CREATE_ONEOFF_PAYMENT'
  | 'CAN_CREATE_USERS'
  | 'CAN_CREATE_WECHAT_OFFICIAL_ACCOUNT_MENU'
  | 'CAN_DOWNLOAD_ENTIRE_ORDER_HISTORY'
  | 'CAN_EDIT_CANNED_RESPONSES'
  | 'CAN_EDIT_EXTERNAL_FRAUD_TEAM_ACCESS'
  | 'CAN_EDIT_SHIP_TO_STORE_PACKAGE'
  | 'CAN_EDIT_TAGGING_TESTS'
  | 'CAN_GET_COLLECTIONBOOST'
  | 'CAN_GET_EARLY_PAYMENT_AMOUNT_AVAILABLE'
  | 'CAN_GROUP_MERCHANTS'
  | 'CAN_HANDLE_FRAUD_INFRACTION'
  | 'CAN_HANDLE_LIVE_CHAT'
  | 'CAN_HANDLE_ORDER_CHANGE_REQUEST'
  | 'CAN_HANDLE_VIOLATION_REPORT'
  | 'CAN_INVITE_CN_MERCHANTS'
  | 'CAN_ISSUE_PB_CREDITS'
  | 'CAN_LOGIN_AS_ADMIN'
  | 'CAN_LOGIN_AS_BD'
  | 'CAN_LOGIN_AS_FACTORY_MANAGERS'
  | 'CAN_LOGIN_AS_OTHER_USER'
  | 'CAN_LOGIN_TO_GENERAL_MERCHANT_SUPPORT_CN'
  | 'CAN_LOGIN_TO_GENERAL_MERCHANT_SUPPORT_HK'
  | 'CAN_LOGIN_TO_GENERAL_MERCHANT_SUPPORT_KR'
  | 'CAN_LOGIN_TO_GENERAL_MERCHANT_SUPPORT_MY'
  | 'CAN_LOGIN_TO_GENERAL_MERCHANT_SUPPORT_SG'
  | 'CAN_LOGIN_TO_GENERAL_MERCHANT_SUPPORT_TW'
  | 'CAN_LOGIN_TO_GENERAL_MERCHANT_SUPPORT_VIP'
  | 'CAN_LOGIN_WITH_CREDENTIALS'
  | 'CAN_MANAGE_BLUE_AMBASSADORS'
  | 'CAN_MANAGE_BRAND_LIST'
  | 'CAN_MANAGE_BRAND_TO_PRODUCT'
  | 'CAN_MANAGE_CHINESE_BDS'
  | 'CAN_MANAGE_GS_MERCHANT'
  | 'CAN_MANAGE_JP_MERCHANT'
  | 'CAN_MANAGE_KR_MERCHANT'
  | 'CAN_MANAGE_MERCHANT_ACCOUNT_BALANCES'
  | 'CAN_MANAGE_MY_MERCHANT'
  | 'CAN_MANAGE_PERMISSIONS_FOR_ALL_USERS'
  | 'CAN_MANAGE_ROLES_FOR_ALL_USERS'
  | 'CAN_MANAGE_SG_MERCHANT'
  | 'CAN_MANAGE_US_BDS'
  | 'CAN_PERFORM_ACTION_ON_WISH_USERS'
  | 'CAN_PERFORM_CHARGEBACK_REVIEW'
  | 'CAN_PERFORM_CHARGEBACK_REVIEW_AUDIT'
  | 'CAN_PROVIDE_MERCHANT_CHAT_SUPPORT'
  | 'CAN_RECEIVE_SMS_ON_QA_ENV'
  | 'CAN_REVERSE_FINE'
  | 'CAN_REVIEW_BANK_ACCOUNT_DOCUMENT'
  | 'CAN_REVIEW_CN_PAYMENT_REQUEST'
  | 'CAN_REVIEW_DISPUTES'
  | 'CAN_REVIEW_EPC_APPLICATION'
  | 'CAN_REVIEW_EU_MERCHANTS'
  | 'CAN_REVIEW_MERCHANTS'
  | 'CAN_REVIEW_MERCHANT_INFO_ONLY'
  | 'CAN_REVIEW_MERCHANT_KYC'
  | 'CAN_REVIEW_PRODUCT_CATEGORY_DISPUTE'
  | 'CAN_REVIEW_RESPONSIBLE_PERSON'
  | 'CAN_REVIEW_TRACKING_DISPUTES'
  | 'CAN_REVIEW_TRUE_BRAND_REQUEST'
  | 'CAN_REVIEW_UNSAFE'
  | 'CAN_REVIEW_US_PAYMENT_REQUEST'
  | 'CAN_SEND_ANNOUNCEMENTS_AS_EDUCATION_TEAM'
  | 'CAN_SEND_EMAIL'
  | 'CAN_SEND_SMS'
  | 'CAN_SEND_WECHAT_MESSAGE'
  | 'CAN_TOGGLE_ADMIN_EDIT_ON_ALL_USERS'
  | 'CAN_TOGGLE_ADMIN_EDIT_ON_STORE_USERS'
  | 'CAN_TOGGLE_MERCHANT_AUTOBAN'
  | 'CAN_TRANSFER_ANY_MERCHANTS'
  | 'CAN_TRANSFER_MERCHANTS'
  | 'CAN_TRIGGER_BANK_ACCOUNT_VERIFICATION'
  | 'CAN_UNCOMBINE_APLUS_ORDERS'
  | 'CAN_UNENROLL_WHITE_GLOVE'
  | 'CAN_UPDATE_COLLECTIONBOOST'
  | 'CAN_UPDATE_CSP_CONFIG'
  | 'CAN_UPLOAD_BANK_ACCOUNT_DOCUMENT'
  | 'CAN_USE_BP_DATA_TOOL'
  | 'CAN_USE_TFA_ADMIN_TOOL'
  | 'CAN_USE_TFA_BD_TOOL'
  | 'CAN_USE_WISH_EXPRESS_SUPPORT_FEATURE'
  | 'CAN_VIEW_ACCOUNT_BALANCE'
  | 'CAN_VIEW_ALL_INTERNAL_USERS'
  | 'CAN_VIEW_ALL_MERCHANT_FILES'
  | 'CAN_VIEW_BAN_INFRACTION'
  | 'CAN_VIEW_BDS'
  | 'CAN_VIEW_BLANKET_AUTHORIZATION_STATUS'
  | 'CAN_VIEW_BRANDS'
  | 'CAN_VIEW_BRAND_LIST'
  | 'CAN_VIEW_CN_INFRACTIONS'
  | 'CAN_VIEW_CS_REPS'
  | 'CAN_VIEW_DISABLED_INFO'
  | 'CAN_VIEW_DISPUTES'
  | 'CAN_VIEW_EARLY_PAYMENT_RISK_CONTROL'
  | 'CAN_VIEW_EPC_APPLICATION'
  | 'CAN_VIEW_FACTORY_LIST'
  | 'CAN_VIEW_FRAUD_INFRACTION_QUEUE'
  | 'CAN_VIEW_FRAUD_WORKERS'
  | 'CAN_VIEW_GS_MERCHANT_INFO'
  | 'CAN_VIEW_HR_RELATED_USERS'
  | 'CAN_VIEW_MERCHANT_GROUP'
  | 'CAN_VIEW_MERCHANT_IDS'
  | 'CAN_VIEW_ORDERS'
  | 'CAN_VIEW_ORDER_SHIPPING_ESTIMATE'
  | 'CAN_VIEW_PRODUCT_STATUS'
  | 'CAN_VIEW_REGULATOR_REPORT_FILES'
  | 'CAN_VIEW_SHIP_TO_STORE_PACKAGE'
  | 'CAN_VIEW_TRACKING_DISPUTES'
  | 'CAN_VIEW_TRANSACTION_DETAIL'
  | 'CAN_VIEW_US_BD_STATS'
  | 'CAN_VIEW_US_INFRACTIONS'
  | 'CAN_VIEW_VMPI_ALERT'
  | 'CAN_VIEW_WISH_USERS'
  | 'CAN_VIEW_WISH_USER_INFO'
  | 'CHANGE_DISPLAY_SETTINGS'
  | 'CHANGE_EMAIL_SETTINGS'
  | 'CHANGE_LANGUAGE'
  | 'CHANGE_SELLER_PROFILE'
  | 'CNY_PROMOTED_DISABLE'
  | 'COMPLETE_AUTHENTIC_BRAND_SELLER_BADGE_APPLICATIONS'
  | 'COUNTERFEIT_HELP_TAG'
  | 'COUNTERFEIT_TAG'
  | 'COUNTERFEIT_TAG_AUDIT'
  | 'COUNTERFEIT_TAG_AUDIT_IN_HOUSE'
  | 'COUNTERFEIT_TAG_MANUAL'
  | 'COUNTERFEIT_TAG_RESOLUTION'
  | 'CREATE_ADMIN'
  | 'CREATE_ADMIN_ACCOUNT'
  | 'CREATE_ATO_HOLD'
  | 'CREATE_B2B_SALE_FEE'
  | 'CREATE_BATCH_WARNING'
  | 'CREATE_DECEPTIVE_FULFILLMENT_FINE'
  | 'CREATE_FAILED_IDENTITY_REVERIFICATION_HOLD'
  | 'CREATE_FAKE_TRACKING_FINE'
  | 'CREATE_FRAUDULENT_ACTIVITES_HOLD'
  | 'CREATE_HIGH_GAMING_GMV_HOLD'
  | 'CREATE_HIGH_IP_INFRINGEMENT_HOLD'
  | 'CREATE_INTERNAL_HOLD'
  | 'CREATE_INVALID_REGISTRATION_INFO_HOLD'
  | 'CREATE_LCL_FBW_FEE'
  | 'CREATE_LEGAL_SETTLEMENT_FINE'
  | 'CREATE_LISTING_REVIEW_JOB'
  | 'CREATE_ONEOFF_FINE'
  | 'CREATE_ONEOFF_REQUEST_EMAIL_REPORT'
  | 'CREATE_OTHER_HOLD'
  | 'CREATE_PENDING_SANCTION_SCREENING_HOLD'
  | 'CREATE_POLICY_VIOLATION_FINE'
  | 'CREATE_PRODUCT'
  | 'CREATE_PUBLIC_MERCHANT_APP'
  | 'CREATE_RESPOND_TO_ADMIN_HOLD'
  | 'CREATE_SHIP_FRAUD_HOLD'
  | 'CREATE_TAG_JOB'
  | 'CREATE_TAKEDOWN_REQUESTS'
  | 'CREATE_TEAM_MEMBER'
  | 'CREATE_TERM_OF_SERVICE_EPC_BILL_HOLD'
  | 'CREATE_TERM_OF_SERVICE_HOLD'
  | 'CREATE_TRO_HOLD'
  | 'CREATE_TRUE_TAG_ASSOCIATION'
  | 'CREATE_VARIATION'
  | 'CREATE_WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION'
  | 'CREATE_WISHPOST_NEGATIVE_BALANCE_HOLD'
  | 'CREATE_WITHHOLD_FUND'
  | 'CS_REP_LEAD_STATS'
  | 'CS_REP_STATS'
  | 'CUSTOM_CHARTS'
  | 'DEP_BRAND_REVIEW_RESOLUTION_TAG'
  | 'DEP_HANDLE_MERCHANT_BENEFITS'
  | 'DEP_IP_VIOLATION_TAG_RESOLUTION'
  | 'DEP_TRUE_BRAND_RESOLUTION_TAG'
  | 'DETAIL_TAG'
  | 'DETAIL_TAG_AUDIT'
  | 'DETAIL_TAG_MANUAL'
  | 'DISPUTE_CURRENCY'
  | 'DOWNLOAD_EXPORT'
  | 'EARLY_PAYMENT_RISK_CONTROL'
  | 'EDIT_ACCOUNT_NAME'
  | 'EDIT_ADMINS'
  | 'EDIT_ADMIN_PERMISSIONS'
  | 'EDIT_ALL_LOGICAL_QUEUES'
  | 'EDIT_BD_PERMISSIONS'
  | 'EDIT_BRAND_PROTECTION_PERMISSIONS'
  | 'EDIT_CONTENT_TEAM_PERMISSIONS'
  | 'EDIT_CS_REPS'
  | 'EDIT_FRAUD_TEAM_PERMISSIONS'
  | 'EDIT_LEGAL_TEAM_PERMISSIONS'
  | 'EDIT_LOGICAL_TICKET_QUEUE'
  | 'EDIT_LOGICAL_TICKET_QUEUE_ASSIGNMENT'
  | 'EDIT_LOGICAL_TICKET_QUEUE_LIMITED'
  | 'EDIT_MERCHANTS'
  | 'EDIT_MERCHANT_PERMISSIONS'
  | 'EDIT_MERCHANT_SUPPORT_PERMISSIONS'
  | 'EDIT_MERCHANT_WARNING_AUDIT_STATUS'
  | 'EDIT_ORDERS'
  | 'EDIT_PRODUCTS'
  | 'EDIT_PRODUCT_LOGISTIC_METADATA'
  | 'EDIT_PROMOTED_PRODUCTS'
  | 'EDIT_QA_PERMISSIONS'
  | 'EDIT_TAGGING_PERMISSIONS'
  | 'ENABLE_DISABLE_ALL_PRODUCTS'
  | 'ENABLE_DISABLE_API_PARTNERS'
  | 'ESCALATE_TO_MERCHANT'
  | 'EUB_LOGISTIC'
  | 'EXPORT_ORDERS'
  | 'EXPORT_PRODUCT_DATA'
  | 'EXPORT_PRODUCT_STAT'
  | 'EXT_CS_CAN_REFUND_ESCALATION'
  | 'FAST_QUEUE_TAGGING_JOBS'
  | 'FAST_QUEUE_TAGGING_JOBS_HIGHEST_PRIORITY'
  | 'FBW2'
  | 'FBW_TICKETS'
  | 'FULFILLED_BY_WISH'
  | 'FULFILL_ORDERS'
  | 'GENDER_AUDIT_TAG'
  | 'GENDER_TAG'
  | 'GENDER_TAG_MANUAL'
  | 'GET_CURRENCY_INFO'
  | 'GET_PAYMENTS'
  | 'HANDLE_ALL_TICKETS'
  | 'HANDLE_CS_TICKETS'
  | 'HOVERBOARD'
  | 'IMAGE_CHANGE_AUDIT_TAG'
  | 'IMAGE_CHANGE_RESOLUTION_TAG'
  | 'IMAGE_CHANGE_TAG'
  | 'INAPPROPRIATE_IN_HOUSE_TAG'
  | 'INITIATE_PAYMENT_PROVIDER_SIGN_UP'
  | 'IP_VIOLATION_AUDIT_IN_HOUSE_TAG'
  | 'IP_VIOLATION_AUDIT_TAG'
  | 'IP_VIOLATION_MANUAL_TAG'
  | 'IP_VIOLATION_TAG'
  | 'LISTING_REVIEW_AUDIT_IN_HOUSE_TAG'
  | 'LISTING_REVIEW_AUDIT_TAG'
  | 'LISTING_REVIEW_TAG'
  | 'LISTING_REVIEW_TAG_IN_HOUSE'
  | 'LISTING_REVIEW_TAG_RESOLUTION'
  | 'LOGIN_AS_CS'
  | 'LOGIN_AS_MERCHANTS'
  | 'LOGIN_TO_WISH_LOCAL'
  | 'LOGIN_WITH_OAUTH'
  | 'MANAGE_BLACKLIST_CRITERIA'
  | 'MANAGE_BRAND_PARTNERS'
  | 'MANAGE_BRAND_VIOLATION_REPORT'
  | 'MANAGE_DELIVERED_CARRIER'
  | 'MANAGE_ERP_PARTNERS'
  | 'MANAGE_FBW_ORDERS'
  | 'MANAGE_LEGAL_INJUNCTION'
  | 'MANAGE_PRODUCT_GEOBLOCK'
  | 'MANAGE_SHIPPING_SETTINGS'
  | 'MANAGE_SIZE_CHART'
  | 'MANAGE_STORE_FULFILLMENT'
  | 'MANAGE_TAX_ENROLLMENT'
  | 'MANAGE_WHITE_GLOVE'
  | 'MERCHANT_GAMING_REVIEW_ESCALATION'
  | 'MGC_CONTENT_MANUAL_TAG'
  | 'MGC_CONTENT_TAG'
  | 'MGC_IP_MANUAL_TAG'
  | 'MGC_IP_TAG'
  | 'MODIFY_MERCHANT_FINES'
  | 'MODIFY_MERCHANT_PAYMENT_HOLDS'
  | 'PRODUCT_CATEGORY_DISPUTE_EDIT'
  | 'PRODUCT_RATING_IMAGE_AUDIT_TAG'
  | 'PRODUCT_RATING_IMAGE_MANUAL_TAG'
  | 'PRODUCT_RATING_IMAGE_TAG'
  | 'PRODUCT_RATING_TAG'
  | 'PRODUCT_RATING_VIDEO_AUDIT_TAG'
  | 'PRODUCT_RATING_VIDEO_TAG'
  | 'PROFILE_PICTURE_TAG'
  | 'PROMO_MANUAL_TAG'
  | 'PROMO_TAG'
  | 'RAMP_DOWN_MERCHANT_IMPRESSIONS'
  | 'RECYCLE_TRACKING'
  | 'REMOVE_INFRACTION_FINES'
  | 'REMOVE_WISH_EXPRESS_PRODUCTS'
  | 'REPORTED_WISH_LOCAL_DETAIL_TAG'
  | 'REQUEST_EARLY_PAYMENT'
  | 'RESTRICTED_PRODUCT_REQUEST_EDITION'
  | 'RESTRICT_REVIEW_CN_MERCHANTS'
  | 'RESTRICT_REVIEW_US_MERCHANTS'
  | 'RESTRICT_VACATION_MODE_ACCESS'
  | 'RETURN_CENTER'
  | 'REVERSE_ONEOFF_FINES'
  | 'REVIEW_ALL_INFRACTION'
  | 'REVIEW_BRAND_AUTH'
  | 'REVIEW_BULK_TRANSACTION_REVERSAL'
  | 'REVIEW_COUNTERFEIT_INFRACTION'
  | 'REVIEW_ONEOFF_REQ_BAN_MERCHANTS'
  | 'REVIEW_ONEOFF_REQ_CREATE_NEW_MAX_TTD_EXTENSION'
  | 'REVIEW_ONEOFF_REQ_CREATE_PB_SHADOW_CAMPAIGNS'
  | 'REVIEW_ONEOFF_REQ_DISABLE_DYNAMIC_PRICING'
  | 'REVIEW_ONEOFF_REQ_ENABLE_COLLECTIONBOOST'
  | 'REVIEW_ONEOFF_REQ_ENABLE_DISABLE_CSP_FOR_ALL_ELIGIBLE_PRODUCTS'
  | 'REVIEW_ONEOFF_REQ_ENABLE_DYNAMIC_PRICING'
  | 'REVIEW_ONEOFF_REQ_ENROLL_MERCHANT_PLUS'
  | 'REVIEW_ONEOFF_REQ_ENROLL_PB_KICKSTART'
  | 'REVIEW_ONEOFF_REQ_ENROLL_PRICE_DROP'
  | 'REVIEW_ONEOFF_REQ_GIVE_BD_ACCESS'
  | 'REVIEW_ONEOFF_REQ_ISSUE_CB_CREDITS'
  | 'REVIEW_ONEOFF_REQ_ISSUE_PB_CREDITS'
  | 'REVIEW_ONEOFF_REQ_ISSUE_PB_CREDITS_TO_SELF_INVENTORY_MERCHANTS'
  | 'REVIEW_ONEOFF_REQ_MERCHANT_EU_ENTITY'
  | 'REVIEW_ONEOFF_REQ_MIGRATE_MERCHANT_CURRENCY'
  | 'REVIEW_ONEOFF_REQ_OVERRIDE_MERCHANT_COUNTRY'
  | 'REVIEW_ONEOFF_REQ_REFUND_PB_BALANCE'
  | 'REVIEW_ONEOFF_REQ_REJECT_COLLECTIONBOOST_COLLECTION'
  | 'REVIEW_ONEOFF_REQ_REMOVE_MAX_TTD_ENTENSION'
  | 'REVIEW_ONEOFF_REQ_REMOVE_PRODUCTS'
  | 'REVIEW_ONEOFF_REQ_SET_HEDGES'
  | 'REVIEW_ONEOFF_REQ_SET_REV_SHARE'
  | 'REVIEW_ONEOFF_REQ_TEMP_EXEMPT_PROMOTE_PRODUCT_POLICY'
  | 'REVIEW_ONEOFF_REQ_VERIFY_WAREHOUSE'
  | 'REVIEW_ONEOFF_REQ_WHITELIST_MERCHANTS'
  | 'REVIEW_PRODUCT_EDIT_REQUESTS'
  | 'SAFELIST_PRODUCTS'
  | 'SEND_BD_ANNOUNCEMENTS'
  | 'SEND_SYSTEM_UPDATE_TO_BD'
  | 'SEND_SYSTEM_UPDATE_TO_CS'
  | 'SEND_SYSTEM_UPDATE_TO_FRAUD'
  | 'SEND_SYSTEM_UPDATE_TO_MERCHANTS'
  | 'SEND_SYSTEM_UPDATE_TO_TAGGERS'
  | 'SHIPPING_ETA_TICKET_MERCHANT'
  | 'SHIP_ORDERS'
  | 'SHOW_ACCENTURE_TAGGERS'
  | 'SHOW_ALL_MERCHANT_PROFILES'
  | 'SHOW_ALL_REFUND_PERFORMANCES'
  | 'SHOW_ALL_TAGGERS'
  | 'SHOW_COUNTERFEIT_TAGGER_TEST_RESULT'
  | 'SHOW_COUNTERFEIT_TAGGER_TEST_SPEC'
  | 'SHOW_DETAIL_TAGGER_TEST_RESULT'
  | 'SHOW_DETAIL_TAGGER_TEST_SPEC'
  | 'SHOW_MERCHANT_ASSETS'
  | 'SHOW_MERCHANT_PROFILE'
  | 'SHOW_MERCHANT_STATS'
  | 'SHOW_MERCHANT_TODO_ITEMS'
  | 'SHOW_ORDERS'
  | 'SHOW_ORDER_PENALTIES'
  | 'SHOW_PRODUCTS'
  | 'SHOW_PRODUCT_BOOST'
  | 'SHOW_PRODUCT_BRAND_DETECTION'
  | 'SHOW_PRODUCT_LOGISTIC_METADATA'
  | 'SHOW_REFUND_PERFORMANCE'
  | 'SHOW_SEARCH_TOOL'
  | 'SHOW_SHIPPING_PROVIDERS'
  | 'SHOW_STORE_ASSETS'
  | 'SHOW_STORE_USERS'
  | 'SHOW_TAGGING_TEST_HISTORY'
  | 'SHOW_TAKEDOWN_REQUESTS'
  | 'SUPPLY_CHAIN_ADMIN'
  | 'SUPPLY_CHAIN_AP'
  | 'SUPPLY_CHAIN_DATA'
  | 'SUPPLY_CHAIN_FINANCE'
  | 'SUPPLY_CHAIN_MAINTAINER'
  | 'SUPPLY_CHAIN_MERCHANDISE'
  | 'SUPPLY_CHAIN_PAYMENT_INITIATED'
  | 'SUPPLY_CHAIN_PREVALID_TABLE_MAINTAINER'
  | 'SUPPLY_CHAIN_QC'
  | 'SUPPLY_CHAIN_READ_ONLY'
  | 'SUPPLY_CHAIN_SOURCING'
  | 'SUPPLY_CHAIN_WAREHOUSE'
  | 'SYNC_SHOPIFY_PRODUCTS'
  | 'TAG_AUTHORIZATION'
  | 'TAG_STATUS_CHECK'
  | 'TRIGGER_CN_VERIFICATION'
  | 'TRIGGER_EARLY_SELLER_VERIFICATION'
  | 'TRIGGER_KYC_REVERIFICATION'
  | 'TRIGGER_SELLER_PROFILE_REVERIFICATION'
  | 'TRUE_BRAND_ESCALATION_TAG'
  | 'TRUE_BRAND_TAG'
  | 'UNDO_INFRACTION_ACTION'
  | 'UPDATE_ACTION_RULE'
  | 'UPDATE_BLUE_STORE_ADVANCE'
  | 'UPDATE_LOCAL_TO_LOCAL'
  | 'UPDATE_PAYMENT_PERSONAL_SETTINGS'
  | 'UPDATE_PAYMENT_SETTINGS'
  | 'UPDATE_PRODUCTS'
  | 'UPDATE_SANCTION_SCREENING_HITS'
  | 'UPDATE_TRACKING'
  | 'UPLOAD_PRODUCTS_CSV'
  | 'USER_GENERATED_PRODUCT_IMAGE_TAG'
  | 'USE_CUSTOM_COLORS'
  | 'VALIDATE_COLLECTIONBOOST_COLLECTIONS'
  | 'VALIDATE_PROVIDER_DISBURSEMENT'
  | 'VERIFY_WAREHOUSE_ONEOFF_REQ_APPROVER'
  | 'VIEW_ACTION_RULES'
  | 'VIEW_ALL_MERCHANTS'
  | 'VIEW_ATO_HOLD'
  | 'VIEW_AUTHENTIC_BRAND_SELLER_BADGE_APPLICATIONS'
  | 'VIEW_B2B_SALE_FEE'
  | 'VIEW_BD_ANNOUNCEMENTS'
  | 'VIEW_CN_MERCHANTS'
  | 'VIEW_CUSTOMER_PROFILE_PAGE'
  | 'VIEW_DECEPTIVE_FULFILLMENT_FINE'
  | 'VIEW_DISBURSEMENT_INFO'
  | 'VIEW_DISBURSEMENT_PAGE'
  | 'VIEW_EU_MERCHANTS'
  | 'VIEW_FAILED_IDENTITY_REVERIFICATION_HOLD'
  | 'VIEW_FAKE_TRACKING_FINE'
  | 'VIEW_FRAUDULENT_ACTIVITES_HOLD'
  | 'VIEW_GLOBAL_LEADERBOARD'
  | 'VIEW_GS_MERCHANTS'
  | 'VIEW_HIGH_GAMING_GMV_HOLD'
  | 'VIEW_HIGH_IP_INFRINGEMENT_HOLD'
  | 'VIEW_HOLDS_FOR_LOCAL_MERCHANTS'
  | 'VIEW_INTERNAL_HOLD'
  | 'VIEW_INVALID_REGISTRATION_INFO_HOLD'
  | 'VIEW_JP_MERCHANTS'
  | 'VIEW_KR_MERCHANTS'
  | 'VIEW_LCL_FBW_FEE'
  | 'VIEW_LEGAL_INJUNCTION'
  | 'VIEW_LEGAL_SETTLEMENT_FINE'
  | 'VIEW_LOGICAL_TICKET_QUEUES'
  | 'VIEW_MERCHANTS'
  | 'VIEW_MERCHANT_GAMING_REVIEW_TICKETS'
  | 'VIEW_MERCHANT_RATING_PAGE'
  | 'VIEW_MISSING_CA_TAX_SETTING_HOLD'
  | 'VIEW_ONEOFF_FINE'
  | 'VIEW_ONEOFF_PAYMENT_DETAIL'
  | 'VIEW_OTHER_HOLD'
  | 'VIEW_PAYMENT_DETAIL'
  | 'VIEW_PAYMENT_HISTORY'
  | 'VIEW_PAYMENT_SETTINGS'
  | 'VIEW_PENDING_SANCTION_SCREENING_HOLD'
  | 'VIEW_POLICY_VIOLATION_FINE'
  | 'VIEW_PRODUCTS'
  | 'VIEW_PRODUCT_PROFILE_PAGE'
  | 'VIEW_RESPOND_TO_ADMIN_HOLD'
  | 'VIEW_RESTRICTED_PRODUCT_REQUEST'
  | 'VIEW_SHIP_FRAUD_HOLD'
  | 'VIEW_TAKEDOWN_REQUESTS'
  | 'VIEW_TERM_OF_SERVICE_EPC_BILL_HOLD'
  | 'VIEW_TERM_OF_SERVICE_HOLD'
  | 'VIEW_TRO_HOLD'
  | 'VIEW_TRO_TOOLS'
  | 'VIEW_TRUE_BRAND_DIRECTORY'
  | 'VIEW_WARNING_BAN_HOLD'
  | 'VIEW_WARNING_MANUAL_HOLD'
  | 'VIEW_WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION'
  | 'VIEW_WISHPOST_NEGATIVE_BALANCE_HOLD'
  | 'VIEW_WISH_USERS'
  | 'VIEW_WITHHOLD_FUND'
  | 'WISHPOST'
  | 'WISH_BLUE_ADMIN'
  | 'WISH_BLUE_AMBASSADOR_PROFILE'
  | 'WISH_BLUE_STORE_SUPPORT_PROFILE'
  | 'WISH_LOCAL_DETAIL_TAG'
  | 'WISH_LOCAL_TAG_STATUS_CHECK'
  | 'YANWEN_LOGISTIC';

export type PickupCarrier =
  | 'WISE'
  | 'YANWEN';

export type PictureType =
  | 'BACK'
  | 'FRONT'
  | 'SELFIE'
  | 'STANDARD';

export type PlatformConstants = {
  __typename?: 'PlatformConstants';
  availableLocales?: Maybe<Array<Locale>>;
  brandProtection?: Maybe<BrandProtectionConstants>;
  buyerFraudReasons: Array<OrderRefundBuyerFraudSubreasonSchema>;
  countriesAllowWeRegionalPrice: Array<Country>;
  countriesWeShipTo: Array<Country>;
  cs?: Maybe<CustomerSupportConstants>;
  deciderKey?: Maybe<DeciderKeySchema>;
  euCountriesWeShipTo: Array<Country>;
  euVatCountries: Array<Country>;
  expeditedProcessDaysToPayment: Timedelta;
  googleLogin?: Maybe<GoogleLoginDetails>;
  interselectablePhoneCountries: Array<Country>;
  issueRefundReasons: Array<CustomerSupportTicketIssueRefundReasonSchema>;
  merchantMobile: MerchantMobile;
  mfp?: Maybe<MfpConstantsSchema>;
  oktaOauthUri?: Maybe<Scalars['String']>;
  orders: OrderConstants;
  product: ProductConstantsSchema;
  productCsvImportColumns?: Maybe<ProductCsvImportSchema>;
  productListing: Array<ProductListingTierSchema>;
  regions?: Maybe<Array<Region>>;
  returnCancelReasons: Array<CustomerSupportTicketCancelReturnReasonSchema>;
  sellerProfileRegionConstants: SellerProfileRegionConstants;
  staticFines?: Maybe<StaticFines>;
  tax: TaxConstants;
  topLevelTags?: Maybe<Array<TrueTagSchema>>;
  unityCountries: Array<Country>;
  wishCompanyInfo: WishCompanyInfo;
  wishEuVatPayerInfo?: Maybe<WishEuvatPayerInfo>;
  wishExpressCountries: Array<Country>;
};


export type PlatformConstantsRegionsArgs = {
  countryCode: CountryCode;
};

export type PlatformSweepMutations = {
  __typename?: 'PlatformSweepMutations';
  emailResult?: Maybe<PlatformSweepResultEmail>;
  flagProducts?: Maybe<PlatformSweepProductFlagging>;
  searchProducts?: Maybe<PlatformSweepProductSearch>;
};


export type PlatformSweepMutationsEmailResultArgs = {
  input: PlatformSweepResultEmailInput;
};


export type PlatformSweepMutationsFlagProductsArgs = {
  input: PlatformSweepProductFlaggingInput;
};


export type PlatformSweepMutationsSearchProductsArgs = {
  input: PlatformSweepProductSearchInput;
};

export type PlatformSweepProductFlagging = {
  __typename?: 'PlatformSweepProductFlagging';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type PlatformSweepProductFlaggingInput = {
  productIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  query: Scalars['String'];
  sessionId: Scalars['ObjectIdType'];
};

export type PlatformSweepProductSearch = {
  __typename?: 'PlatformSweepProductSearch';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  products?: Maybe<Array<ProductSchema>>;
  sessionId?: Maybe<Scalars['ObjectIdType']>;
};

export type PlatformSweepProductSearchInput = {
  countryCode?: InputMaybe<CountryCode>;
  excludingL2lSubcategories?: InputMaybe<Array<TaggingViolationSubReasonCode>>;
  isBba?: InputMaybe<Scalars['Boolean']>;
  isCompanyOwned?: InputMaybe<Scalars['Boolean']>;
  isPbSearch: Scalars['Boolean'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
  sessionId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type PlatformSweepResultEmail = {
  __typename?: 'PlatformSweepResultEmail';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type PlatformSweepResultEmailInput = {
  recipient: Scalars['String'];
  sessionId: Scalars['ObjectIdType'];
};

export type PlusAdminServiceMutations = {
  __typename?: 'PlusAdminServiceMutations';
  convertToPlus?: Maybe<ConvertToPlus>;
  removeCountFromMplus?: Maybe<RemoveCountFromMplus>;
  removeFromPlus?: Maybe<RemoveFromPlus>;
};


export type PlusAdminServiceMutationsConvertToPlusArgs = {
  input: ConvertToPlusInput;
};


export type PlusAdminServiceMutationsRemoveCountFromMplusArgs = {
  input: RemoveCountFromMplusInput;
};


export type PlusAdminServiceMutationsRemoveFromPlusArgs = {
  input: RemoveFromPlusInput;
};

export type PolicyAdminSchema = {
  __typename?: 'PolicyAdminSchema';
  merchantGamingReviewTickets?: Maybe<Array<MerchantGamingReviewTicketSchema>>;
  merchantGamingReviewTicketsClosedStates?: Maybe<Array<MerchantGamingReviewState>>;
  merchantGamingReviewTicketsCount?: Maybe<Scalars['Int']>;
  merchantGamingReviewTicketsOpenStates?: Maybe<Array<MerchantGamingReviewState>>;
  merchantPolicyTiers?: Maybe<Array<MerchantPolicyTierSchema>>;
};


export type PolicyAdminSchemaMerchantGamingReviewTicketsArgs = {
  claimedAdminName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  isClaimed?: InputMaybe<Scalars['Boolean']>;
  lastSourceUpsertDateEnd?: InputMaybe<DatetimeInput>;
  lastSourceUpsertDateStart?: InputMaybe<DatetimeInput>;
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MerchantGamingReviewTicketSort>;
  states?: InputMaybe<Array<MerchantGamingReviewState>>;
};


export type PolicyAdminSchemaMerchantGamingReviewTicketsCountArgs = {
  claimedAdminName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  isClaimed?: InputMaybe<Scalars['Boolean']>;
  lastSourceUpsertDateEnd?: InputMaybe<DatetimeInput>;
  lastSourceUpsertDateStart?: InputMaybe<DatetimeInput>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  states?: InputMaybe<Array<MerchantGamingReviewState>>;
};

export type PolicyAnnouncementItemSchema = {
  __typename?: 'PolicyAnnouncementItemSchema';
  announcementId?: Maybe<Scalars['ObjectIdType']>;
  effectiveDate?: Maybe<Datetime>;
  requireLogIn: Scalars['Boolean'];
  section: Scalars['String'];
};

export type PolicyFactor =
  | 'AUTO_REFUND'
  | 'COUNTERFEIT_GOODS'
  | 'CS_LATE_RESPONSE_RATE'
  | 'CS_LOW_CSAT_SCORE'
  | 'FAKE_TRACKING'
  | 'FAKE_TRACKING_BY_WEIGHT'
  | 'GATE_KEEPER_ATO'
  | 'HIGH_AUTO_REFUND'
  | 'HIGH_AUTO_REFUND_RATE'
  | 'HIGH_CANCEL_RATE'
  | 'HIGH_GAMING_GMV'
  | 'HIGH_IP_INFRINGEMENT'
  | 'HIGH_REFUND_RATE'
  | 'INAPPROPRIATE_SALE'
  | 'LATE_CONFIRM_FULFILLMENT'
  | 'LOW_STORE_RATE'
  | 'MERCHANT_CANCELLATION'
  | 'MISLEADING_PRODUCT'
  | 'MISLEADING_VARIATION'
  | 'NEGATIVE_BALANCE'
  | 'ORDER_NOT_DELIVERED'
  | 'PRODUCT_HIGH_REFUND_RATE'
  | 'PRODUCT_SWAP'
  | 'RECALL_POLICY'
  | 'REPEAT_IP_INFRINGEMENT'
  | 'STRIKE_BASED_HIGH_RISK_PROHIBITED'
  | 'UNQUALIFIED_CARRIER'
  | 'VALID_TRACKING_RATE'
  | 'WISH_EXPRESS_BAN'
  | 'WISH_EXPRESS_LATE'
  | 'WISH_EXPRESS_LATE_WITHHOLD'
  | 'WSS_BAN_POLICY';

export type PolicyMutations = {
  __typename?: 'PolicyMutations';
  adaptivePolicyAdmin?: Maybe<AdaptivePolicyAdminMutations>;
  bulkUpsertMerchantWarning?: Maybe<BulkUpsertMerchantWarning>;
  merchantFinalSale?: Maybe<MerchantFinalSaleMutations>;
  merchantGamingReviewTicket?: Maybe<MerchantGamingReviewMutations>;
  merchantWarning?: Maybe<MerchantWarningMutations>;
  orderInfractionDispute?: Maybe<OrderInfractionDisputeMutations>;
  productCategoryDispute?: Maybe<ProductCategoryDisputeMutations>;
  productCompliance?: Maybe<ProductComplianceMutations>;
  refundDispute?: Maybe<RefundDisputeMutations>;
  restrictedProduct?: Maybe<RestrictedProductMutations>;
  wfp?: Maybe<WfpMutations>;
};


export type PolicyMutationsBulkUpsertMerchantWarningArgs = {
  input?: InputMaybe<BulkUpsertMerchantWarningInput>;
};

export type PolicyPublicMutations = {
  __typename?: 'PolicyPublicMutations';
  reportAbuse: ReportAbuseMutations;
};

export type PolicyPublicSchema = {
  __typename?: 'PolicyPublicSchema';
  announcements?: Maybe<Array<PolicyAnnouncementItemSchema>>;
  reportAbuse: ReportAbuseHub;
};

export type PolicySchema = {
  __typename?: 'PolicySchema';
  admin?: Maybe<PolicyAdminSchema>;
  cannedResponse?: Maybe<CannedResponseHub>;
  detailedWarningReasons?: Maybe<Array<DetailedMerchantWarningReasonSchema>>;
  dispute?: Maybe<DisputeSchema>;
  finalSaleCategories?: Maybe<Array<FinalSaleCategorySchema>>;
  merchantWarning?: Maybe<MerchantWarningSchema>;
  merchantWarningBulkProcessCount?: Maybe<Scalars['Int']>;
  merchantWarningBulkProcesses?: Maybe<Array<MerchantWarningBulkProcessSchema>>;
  merchantWarningCount?: Maybe<Scalars['Int']>;
  merchantWarningReasons?: Maybe<Array<MerchantWarningReasonSchema>>;
  merchantWarnings?: Maybe<Array<MerchantWarningSchema>>;
  productCategoryDispute?: Maybe<ProductCategoryDisputeHub>;
  productCompliance?: Maybe<ProductComplianceSchema>;
  restrictedProduct?: Maybe<RestrictedProductSchema>;
};


export type PolicySchemaDetailedWarningReasonsArgs = {
  id?: InputMaybe<Scalars['ObjectIdType']>;
  issueDateEnd?: InputMaybe<DatetimeInput>;
  issueDateStart?: InputMaybe<DatetimeInput>;
  reasons?: InputMaybe<Array<MerchantWarningReason>>;
  searchProofIdTypes?: InputMaybe<Array<MerchantWarningProofType>>;
  states?: InputMaybe<Array<MerchantWarningState>>;
};


export type PolicySchemaFinalSaleCategoriesArgs = {
  merchantId: Scalars['ObjectIdType'];
};


export type PolicySchemaMerchantWarningArgs = {
  id?: InputMaybe<Scalars['ObjectIdType']>;
};


export type PolicySchemaMerchantWarningBulkProcessCountArgs = {
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<BulkMerchantWarningAction>>;
};


export type PolicySchemaMerchantWarningBulkProcessesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<BulkMerchantWarningAction>>;
};


export type PolicySchemaMerchantWarningCountArgs = {
  auditStatuses?: InputMaybe<Array<MerchantWarningAuditStatus>>;
  banned?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<CounterfeitReasonCode>;
  claimStatus?: InputMaybe<MerchantWarningClaimStatus>;
  correspondenceStatus?: InputMaybe<MerchantWarningCorrespondenceStatus>;
  detailedReasons?: InputMaybe<Array<DetailedMerchantWarningReason>>;
  disputePendingBrandAuth?: InputMaybe<Scalars['Boolean']>;
  disputePendingEditReview?: InputMaybe<Scalars['Boolean']>;
  fined?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  ids?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  isMisleading?: InputMaybe<Scalars['Boolean']>;
  issueDateEnd?: InputMaybe<DatetimeInput>;
  issueDateStart?: InputMaybe<DatetimeInput>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  reasons?: InputMaybe<Array<MerchantWarningReason>>;
  searchProofIdTypes?: InputMaybe<Array<MerchantWarningProofType>>;
  states?: InputMaybe<Array<MerchantWarningState>>;
  subcategory?: InputMaybe<TaggingViolationSubReasonCode>;
  wssImpact?: InputMaybe<Array<WssImpactState>>;
};


export type PolicySchemaMerchantWarningsArgs = {
  auditStatuses?: InputMaybe<Array<MerchantWarningAuditStatus>>;
  banned?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<CounterfeitReasonCode>;
  claimStatus?: InputMaybe<MerchantWarningClaimStatus>;
  correspondenceStatus?: InputMaybe<MerchantWarningCorrespondenceStatus>;
  detailedReasons?: InputMaybe<Array<DetailedMerchantWarningReason>>;
  disputePendingBrandAuth?: InputMaybe<Scalars['Boolean']>;
  disputePendingEditReview?: InputMaybe<Scalars['Boolean']>;
  fined?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  ids?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  issueDateEnd?: InputMaybe<DatetimeInput>;
  issueDateStart?: InputMaybe<DatetimeInput>;
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  reasons?: InputMaybe<Array<MerchantWarningReason>>;
  searchProofIdTypes?: InputMaybe<Array<MerchantWarningProofType>>;
  sort?: InputMaybe<MerchantWarningSort>;
  states?: InputMaybe<Array<MerchantWarningState>>;
  subcategory?: InputMaybe<TaggingViolationSubReasonCode>;
  wssImpact?: InputMaybe<Array<WssImpactState>>;
};

export type PolicyType =
  | 'FREE_RETURN_ACCEPTED'
  | 'NO_RETURN_ACCEPTED'
  | 'PREPAID_RETURN_ACCEPTED'
  | 'WISH_AUTO_REVIEW';

export type ProductAnalyticsDimension =
  | 'COUNTRY'
  | 'GENDER';

export type ProductAnalyticsInterval =
  | 'INTERVAL_DAY'
  | 'INTERVAL_HOUR'
  | 'INTERVAL_MINUTE'
  | 'INTERVAL_MONTH'
  | 'INTERVAL_UNSPECIFIED'
  | 'INTERVAL_WEEK';

export type ProductAnalyticsSchema = {
  __typename?: 'ProductAnalyticsSchema';
  enabled: Scalars['Boolean'];
  productId: Scalars['String'];
  stats?: Maybe<ProductAnalyticsStats>;
};


export type ProductAnalyticsSchemaStatsArgs = {
  endTime: DatetimeInput;
  interval?: InputMaybe<ProductAnalyticsInterval>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  startTime: DatetimeInput;
};

export type ProductAnalyticsStats = {
  __typename?: 'ProductAnalyticsStats';
  endTime: Datetime;
  interactionStats: Array<ProductInteractionStats>;
  interval: ProductAnalyticsInterval;
  orderStats: Array<ProductOrderStats>;
  startTime: Datetime;
};


export type ProductAnalyticsStatsInteractionStatsArgs = {
  dimensions?: InputMaybe<Array<ProductAnalyticsDimension>>;
};


export type ProductAnalyticsStatsOrderStatsArgs = {
  dimensions?: InputMaybe<Array<ProductAnalyticsDimension>>;
};

export type ProductBoostAcceptTos = {
  __typename?: 'ProductBoostAcceptTOS';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ProductBoostAcceptTosInput = {
  tosVersion: Scalars['Int'];
};

export type ProductCsvColumnName =
  | 'AD'
  | 'AD_TTD'
  | 'AL'
  | 'AL_TTD'
  | 'AR'
  | 'AR_TTD'
  | 'AT'
  | 'AT_TTD'
  | 'AU'
  | 'AU_TTD'
  | 'BA'
  | 'BA_TTD'
  | 'BE'
  | 'BE_TTD'
  | 'BG'
  | 'BG_TTD'
  | 'BR'
  | 'BRAND'
  | 'BRAND_ID'
  | 'BRAND_STATUS'
  | 'BR_TTD'
  | 'CA'
  | 'CALCULATED_SHIPPING'
  | 'CALIFORNIA_PROPOSITION_65_CHEMICAL_NAMES'
  | 'CALIFORNIA_PROPOSITION_65_WARNING_TYPE'
  | 'CATEGORY_EXPERIENCE_ELIGIBILITY'
  | 'CA_TTD'
  | 'CH'
  | 'CH_TTD'
  | 'CL'
  | 'CLEAN_IMAGE'
  | 'CL_TTD'
  | 'CO'
  | 'COLOR'
  | 'CONDITION'
  | 'CONTAINS_BATTERY'
  | 'CONTAINS_LIQUID'
  | 'CONTAINS_METAL'
  | 'CONTAINS_POWDER'
  | 'COST'
  | 'COUNTRY_OF_ORIGIN'
  | 'CO_TTD'
  | 'CR'
  | 'CR_TTD'
  | 'CURRENCY_CODE'
  | 'CUSTOMS_DECLARED_VALUE'
  | 'CUSTOMS_HS_CODE'
  | 'CZ'
  | 'CZ_TTD'
  | 'DATE_UPLOADED'
  | 'DE'
  | 'DECLARED_LOCAL_NAME'
  | 'DECLARED_NAME'
  | 'DEFAULT_SHIPPING_PRICE'
  | 'DESCRIPTION'
  | 'DE_TTD'
  | 'DK'
  | 'DK_TTD'
  | 'EE'
  | 'EE_TTD'
  | 'EFFECTIVE_DATE'
  | 'ES'
  | 'ES_TTD'
  | 'EXTRA_IMAGES'
  | 'FI'
  | 'FIRST_MILE_SHIPPING_PRICE_D_DISABLED'
  | 'FI_TTD'
  | 'FR'
  | 'FR_TTD'
  | 'GB'
  | 'GB_TTD'
  | 'GI'
  | 'GI_TTD'
  | 'GR'
  | 'GR_TTD'
  | 'GTIN'
  | 'HR'
  | 'HR_TTD'
  | 'HU'
  | 'HU_TTD'
  | 'IE'
  | 'IE_TTD'
  | 'IL'
  | 'IL_TTD'
  | 'INVENTORY'
  | 'IS'
  | 'IS_LTL'
  | 'IS_PROMOTED'
  | 'IS_TTD'
  | 'IT'
  | 'IT_TTD'
  | 'JP'
  | 'JP_TTD'
  | 'KR'
  | 'KR_TTD'
  | 'LANDING_PAGE_URL'
  | 'LAST_UPDATED'
  | 'LI'
  | 'LI_TTD'
  | 'LT'
  | 'LT_TTD'
  | 'LU'
  | 'LU_TTD'
  | 'LV'
  | 'LV_TTD'
  | 'MAIN_IMAGE'
  | 'MAX_QUANTITY'
  | 'MC'
  | 'MC_TTD'
  | 'MD'
  | 'MD_TTD'
  | 'ME'
  | 'ME_TTD'
  | 'MK'
  | 'MK_TTD'
  | 'MT'
  | 'MT_TTD'
  | 'MX'
  | 'MX_TTD'
  | 'NAME'
  | 'NL'
  | 'NL_TTD'
  | 'NO'
  | 'NO_TTD'
  | 'NUM_OF_SALES'
  | 'NUM_OF_WISHES'
  | 'NZ'
  | 'NZ_TTD'
  | 'PACKAGE_HEIGHT'
  | 'PACKAGE_LENGTH'
  | 'PACKAGE_WEIGHT'
  | 'PACKAGE_WIDTH'
  | 'PARENT_SKU'
  | 'PE'
  | 'PE_TTD'
  | 'PIECES_INCLUDED'
  | 'PL'
  | 'PL_TTD'
  | 'PR'
  | 'PRICE'
  | 'PRODUCT_ID'
  | 'PR_TTD'
  | 'PT'
  | 'PT_TTD'
  | 'QUANTITY_VALUE'
  | 'REFERENCE_PRICE'
  | 'REFERENCE_VALUE'
  | 'REVIEW_STATE'
  | 'RO'
  | 'RO_TTD'
  | 'RS'
  | 'RS_TTD'
  | 'SE'
  | 'SE_TTD'
  | 'SG'
  | 'SG_TTD'
  | 'SHIPPING_TIME'
  | 'SI'
  | 'SIZE'
  | 'SI_TTD'
  | 'SK'
  | 'SKU'
  | 'SK_TTD'
  | 'SM'
  | 'SM_TTD'
  | 'STATUS'
  | 'SUBCATEGORY_ID'
  | 'TAGS'
  | 'UA'
  | 'UA_TTD'
  | 'UNIT'
  | 'US'
  | 'US_TTD'
  | 'VARIATION_ID'
  | 'VARIATION_IMAGE'
  | 'VARIATION_OPTIONS'
  | 'VI'
  | 'VI_TTD'
  | 'WAREHOUSE'
  | 'WARNING_ID'
  | 'WISH_EXPRESS_COUNTRIES'
  | 'WISH_EXPRESS_DISABLED_COUNTRIES'
  | 'WISH_EXPRESS_ENABLED_COUNTRIES'
  | 'ZA'
  | 'ZA_TTD';

export type ProductCsvImportColumnSchema = {
  __typename?: 'ProductCSVImportColumnSchema';
  category?: Maybe<ColumnCategorySchema>;
  columnId: Scalars['String'];
  isRequired: IsRequiredEnum;
  name: Scalars['String'];
};


export type ProductCsvImportColumnSchemaIsRequiredArgs = {
  feedType?: InputMaybe<ProductCsvJobType>;
};

export type ProductCsvImportSchema = {
  __typename?: 'ProductCSVImportSchema';
  columns: Array<ProductCsvImportColumnSchema>;
  optionalColumns: Array<ProductCsvImportColumnSchema>;
  requiredColumns: Array<ProductCsvImportColumnSchema>;
};


export type ProductCsvImportSchemaColumnsArgs = {
  columnIds?: InputMaybe<Array<Scalars['String']>>;
  restrictCountryShipping?: InputMaybe<Scalars['Boolean']>;
};


export type ProductCsvImportSchemaOptionalColumnsArgs = {
  columnIds?: InputMaybe<Array<Scalars['String']>>;
  restrictCountryShipping?: InputMaybe<Scalars['Boolean']>;
};


export type ProductCsvImportSchemaRequiredColumnsArgs = {
  columnIds?: InputMaybe<Array<Scalars['String']>>;
};

export type ProductCsvJobType =
  | 'ADD_PRODUCTS'
  | 'ADD_SIZE_COLOR'
  | 'CREATE_PRESALE_PRODUCT'
  | 'EDIT_FBW_SHIPPING'
  | 'EDIT_SHIPPING'
  | 'EDIT_WISH_EXPRESS_COUNTRIES'
  | 'NEW_ADD_PRODUCTS'
  | 'NEW_ADD_VARIATION'
  | 'NEW_UPDATE_PRODUCTS'
  | 'SHOPIFY_CREATE_PRODUCTS'
  | 'UPDATE_PRODUCTS'
  | 'UPSERT_PRODUCTS';

export type ProductCatalogMutations = {
  __typename?: 'ProductCatalogMutations';
  downloadAllProducts?: Maybe<DownloadAllProducts>;
  downloadAllProductsCsv?: Maybe<DownloadAllProductsCsv>;
  forceApproveProduct?: Maybe<ForceApproveProduct>;
  removeProduct?: Maybe<RemoveProduct>;
  removeVideo?: Maybe<RemoveVideo>;
  updateProductLogisticsMetadata?: Maybe<UpdateProductLogisticsMetadata>;
  uploadProductComplianceDocument?: Maybe<UploadProductComplianceDocuments>;
  upsertProduct?: Maybe<UpsertProduct>;
  upsertProductCsvFile?: Maybe<UpsertProductsFromCsvFile>;
  upsertProducts?: Maybe<UpsertProducts>;
  upsertVideo?: Maybe<UpsertVideo>;
};


export type ProductCatalogMutationsDownloadAllProductsArgs = {
  input: DownloadAllProductsInput;
};


export type ProductCatalogMutationsDownloadAllProductsCsvArgs = {
  input: DownloadAllProductsCsvInput;
};


export type ProductCatalogMutationsForceApproveProductArgs = {
  input: ForceApproveProductInput;
};


export type ProductCatalogMutationsRemoveProductArgs = {
  input: RemoveProductInput;
};


export type ProductCatalogMutationsRemoveVideoArgs = {
  input: RemoveVideoInput;
};


export type ProductCatalogMutationsUpdateProductLogisticsMetadataArgs = {
  input: UpdateProductLogisticsMetadataInput;
};


export type ProductCatalogMutationsUploadProductComplianceDocumentArgs = {
  input: Array<ProductComplianceDocumentInput>;
};


export type ProductCatalogMutationsUpsertProductArgs = {
  input?: InputMaybe<ProductUpsertInput>;
};


export type ProductCatalogMutationsUpsertProductCsvFileArgs = {
  input: UpsertProductsFromCsvFileInput;
};


export type ProductCatalogMutationsUpsertProductsArgs = {
  input: Array<ProductUpsertInput>;
};


export type ProductCatalogMutationsUpsertVideoArgs = {
  input?: InputMaybe<VideoUpsertInput>;
};

export type ProductCatalogSchema = {
  __typename?: 'ProductCatalogSchema';
  bulkCsvProductImportJobs: Array<CsvProductImportJobSchema>;
  csvAllHeaderNames: Array<Scalars['String']>;
  csvEditVariationsHeaderNames: Array<Scalars['String']>;
  csvEnableDisableHeaderNames: Array<Scalars['String']>;
  csvPriceInventoryHeaderNames: Array<Scalars['String']>;
  csvProductColumnEnums: Array<ProductCsvColumnName>;
  csvProductColumnNames: Array<Scalars['String']>;
  csvProductImportJobsCount: Scalars['Int'];
  csvProductTemplateWithTaxonomyColumnNames?: Maybe<Array<Scalars['String']>>;
  csvShippingHeaderNames: Array<Scalars['String']>;
  csvTitleImagesDescriptionHeaderNames: Array<Scalars['String']>;
  gtinProductService: GtinProductServiceSchema;
  product?: Maybe<ProductSchema>;
  productCategoryTaxonomyTreeJson: Scalars['JSONString'];
  productCount: Scalars['Int'];
  productCountV2: Scalars['Int'];
  products: Array<ProductSchema>;
  productsV2: Array<ProductSchema>;
  upcProductService: UpcProductServiceSchema;
  variation?: Maybe<VariationSchema>;
  variationCount?: Maybe<Scalars['Int']>;
  variations: Array<VariationSchema>;
  videoService: ProductVideoServiceSchema;
};


export type ProductCatalogSchemaBulkCsvProductImportJobsArgs = {
  feedType?: InputMaybe<ProductCsvJobType>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
};


export type ProductCatalogSchemaCsvAllHeaderNamesArgs = {
  subcategoryIds?: InputMaybe<Array<Scalars['Int']>>;
};


export type ProductCatalogSchemaCsvEditVariationsHeaderNamesArgs = {
  subcategoryIds?: InputMaybe<Array<Scalars['Int']>>;
};


export type ProductCatalogSchemaCsvProductImportJobsCountArgs = {
  feedType?: InputMaybe<ProductCsvJobType>;
};


export type ProductCatalogSchemaCsvProductTemplateWithTaxonomyColumnNamesArgs = {
  categoryId: Scalars['Int'];
  treeVersion: Scalars['String'];
};


export type ProductCatalogSchemaProductArgs = {
  id?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
};


export type ProductCatalogSchemaProductCountArgs = {
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  productStatuses?: InputMaybe<Array<CommerceProductStatus>>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ProductSearchType>;
  shippingProfileIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  shippingTypes?: InputMaybe<Array<WarehouseShippingType>>;
  videoLinkEnabled?: InputMaybe<Scalars['Boolean']>;
  videoStates?: InputMaybe<Array<ProductVideoState>>;
};


export type ProductCatalogSchemaProductCountV2Args = {
  fpReviewStatus?: InputMaybe<ProductFpReviewStatus>;
  hasBrand?: InputMaybe<Scalars['Boolean']>;
  isCleanImage?: InputMaybe<Scalars['Boolean']>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  isPromoted?: InputMaybe<Scalars['Boolean']>;
  isReturnEnrolled?: InputMaybe<Scalars['Boolean']>;
  isWishExpress?: InputMaybe<Scalars['Boolean']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ProductSearchType>;
  state?: InputMaybe<ProductListingState>;
};


export type ProductCatalogSchemaProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  productStatuses?: InputMaybe<Array<CommerceProductStatus>>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ProductSearchType>;
  shippingProfileIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  shippingTypes?: InputMaybe<Array<WarehouseShippingType>>;
  sort?: InputMaybe<ProductSort>;
  videoId?: InputMaybe<Scalars['ObjectIdType']>;
  videoLinkEnabled?: InputMaybe<Scalars['Boolean']>;
  videoStates?: InputMaybe<Array<ProductVideoState>>;
};


export type ProductCatalogSchemaProductsV2Args = {
  fpReviewStatus?: InputMaybe<ProductFpReviewStatus>;
  hasBrand?: InputMaybe<Scalars['Boolean']>;
  isCleanImage?: InputMaybe<Scalars['Boolean']>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  isPromoted?: InputMaybe<Scalars['Boolean']>;
  isReturnEnrolled?: InputMaybe<Scalars['Boolean']>;
  isWishExpress?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ProductSearchType>;
  sort?: InputMaybe<ProductSort>;
  state?: InputMaybe<ProductListingState>;
};


export type ProductCatalogSchemaVariationArgs = {
  id?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
};


export type ProductCatalogSchemaVariationCountArgs = {
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<VariationSearchType>;
};


export type ProductCatalogSchemaVariationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<VariationSearchType>;
  sort?: InputMaybe<VariationSort>;
};

export type ProductCategorization = {
  __typename?: 'ProductCategorization';
  categorizationSource: CategorizationSource;
  categorizationUser?: Maybe<UserSchema>;
  category: TaxonomyCategorySchema;
  categoryTreeId: Scalars['Int'];
  categoryTreeVersion: Scalars['String'];
  productId: Scalars['ObjectIdType'];
  timestamp: Datetime;
};

export type ProductCategoryDisputeAction =
  | 'CREATE'
  | 'MARK_UNCHANGE'
  | 'MARK_UPDATE';

export type ProductCategoryDisputeAdminUnchangedReason =
  | 'CORRECT_TAGGED'
  | 'IMAGE_MISMATCH'
  | 'OTHER'
  | 'PROPOSED_TAG_IS_INAPPROPRIATE';

export type ProductCategoryDisputeEligibility =
  | 'ELIGIBLE'
  | 'INELIGIBLE'
  | 'OUT_OF_QUOTA';

export type ProductCategoryDisputeHub = {
  __typename?: 'ProductCategoryDisputeHub';
  dispute?: Maybe<ProductCategoryDisputeSchema>;
  disputeCount?: Maybe<Scalars['Int']>;
  disputes?: Maybe<Array<ProductCategoryDisputeSchema>>;
  reasons?: Maybe<Array<ProductCategoryDisputeReasonSchema>>;
};


export type ProductCategoryDisputeHubDisputeArgs = {
  id: Scalars['ObjectIdType'];
};


export type ProductCategoryDisputeHubDisputeCountArgs = {
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ProductCategoryDisputeSearchType>;
  states: Array<ProductCategoryDisputeStatus>;
};


export type ProductCategoryDisputeHubDisputesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ProductCategoryDisputeSearchType>;
  states: Array<ProductCategoryDisputeStatus>;
};


export type ProductCategoryDisputeHubReasonsArgs = {
  source: ProductCategoryDisputeSource;
};

export type ProductCategoryDisputeMutations = {
  __typename?: 'ProductCategoryDisputeMutations';
  upsertProductCategoryDispute?: Maybe<UpsertProductCategoryDispute>;
};


export type ProductCategoryDisputeMutationsUpsertProductCategoryDisputeArgs = {
  input?: InputMaybe<UpsertProductCategoryDisputeInput>;
};

export type ProductCategoryDisputeReason =
  | 'INCORRECT_TAG'
  | 'OTHERS';

export type ProductCategoryDisputeReasonSchema = {
  __typename?: 'ProductCategoryDisputeReasonSchema';
  reason: ProductCategoryDisputeReason;
  text: Scalars['String'];
};

export type ProductCategoryDisputeSchema = {
  __typename?: 'ProductCategoryDisputeSchema';
  adminActionId?: Maybe<Scalars['ObjectIdType']>;
  adminUnchangedOtherReasonDetails?: Maybe<Scalars['String']>;
  adminUnchangedReason?: Maybe<ProductCategoryDisputeAdminUnchangedReason>;
  id: Scalars['ObjectIdType'];
  lastUpdate?: Maybe<Datetime>;
  merchant: MerchantSchema;
  merchantNote?: Maybe<Scalars['String']>;
  product: ProductSchema;
  reason?: Maybe<ProductCategoryDisputeReasonSchema>;
  source: ProductCategoryDisputeSource;
  status: ProductCategoryDisputeStatus;
  supportedFiles?: Maybe<Array<MerchantFileSchema>>;
  trueTags?: Maybe<Array<TrueTagSchema>>;
};


export type ProductCategoryDisputeSchemaTrueTagsArgs = {
  state?: InputMaybe<ProductCategoryDisputeTrueTagState>;
};

export type ProductCategoryDisputeSearchType =
  | 'DISPUTE_ID'
  | 'MERCHANT_ID'
  | 'PRODUCT_ID';

export type ProductCategoryDisputeSource =
  | 'EU_COMPLIANCE'
  | 'PRODUCT_CATELOG';

export type ProductCategoryDisputeStatus =
  | 'PENDING_REVIEW'
  | 'RESOLVED_UNCHANGED'
  | 'RESOLVED_UPDATE';

export type ProductCategoryDisputeTrueTagState =
  | 'APPROVED'
  | 'DISPUTED'
  | 'PROPOSED';

export type ProductComplianceDocumentInput = {
  delete: Scalars['Boolean'];
  documentLabel: Scalars['String'];
  fileExtension: Scalars['String'];
  fileName: Scalars['String'];
  productId: Scalars['ObjectIdType'];
  sourceUrl: Scalars['String'];
};

export type ProductComplianceDocumentSchema = {
  __typename?: 'ProductComplianceDocumentSchema';
  documentLabel: Scalars['String'];
  fileName: Scalars['String'];
  fileUrl: Scalars['String'];
};

export type ProductComplianceMutations = {
  __typename?: 'ProductComplianceMutations';
  deCompliance?: Maybe<GermanyComplianceMutations>;
  euCompliance?: Maybe<EuComplianceMutations>;
  extendedProducerResponsibility?: Maybe<EprMutations>;
  frCompliance?: Maybe<FranceComplianceMutations>;
};

export type ProductComplianceSchema = {
  __typename?: 'ProductComplianceSchema';
  allEuComplianceCategories?: Maybe<Array<EuProductComplianceCategory>>;
  allMsrCategories?: Maybe<Array<MsrCategory>>;
  euComplianceInScope: Scalars['Boolean'];
  extendedProducerResponsibility: ExtendedProducerResponsibilitySchema;
  franceProductUniqueIdentificationNumberCount?: Maybe<Scalars['Int']>;
  franceProductUniqueIdentificationNumbers?: Maybe<Array<FranceProductUniqueIdentificationNumberSchema>>;
  germanyProductUniqueIdentificationNumberCount?: Maybe<Scalars['Int']>;
  germanyProductUniqueIdentificationNumbers?: Maybe<Array<GermanyProductUniqueIdentificationNumberSchema>>;
  linkCount?: Maybe<Scalars['Int']>;
  links?: Maybe<Array<LinkProductComplianceSchema>>;
  productDestinationCountries: Array<Country>;
  responsiblePersonCount?: Maybe<Scalars['Int']>;
  responsiblePersonRejectReasons: Array<ResponsiblePersonRejectReasonSchema>;
  responsiblePersons?: Maybe<Array<ResponsiblePersonSchema>>;
  rpValidCountries: Array<EuComplianceResponsiblePersonCountriesAndRegions>;
};


export type ProductComplianceSchemaFranceProductUniqueIdentificationNumberCountArgs = {
  category?: InputMaybe<Array<FranceProductUniqueIdentificationNumberCategory>>;
  states?: InputMaybe<Array<FranceProductUniqueIdentificationNumberStatus>>;
};


export type ProductComplianceSchemaFranceProductUniqueIdentificationNumbersArgs = {
  category?: InputMaybe<Array<FranceProductUniqueIdentificationNumberCategory>>;
  states?: InputMaybe<Array<FranceProductUniqueIdentificationNumberStatus>>;
};


export type ProductComplianceSchemaGermanyProductUniqueIdentificationNumberCountArgs = {
  categories?: InputMaybe<Array<GermanyProductUniqueIdentificationNumberCategory>>;
  states?: InputMaybe<Array<GermanyProductUniqueIdentificationNumberStatus>>;
};


export type ProductComplianceSchemaGermanyProductUniqueIdentificationNumbersArgs = {
  categories?: InputMaybe<Array<GermanyProductUniqueIdentificationNumberCategory>>;
  states?: InputMaybe<Array<GermanyProductUniqueIdentificationNumberStatus>>;
};


export type ProductComplianceSchemaLinkCountArgs = {
  categories?: InputMaybe<Array<MsrCategory>>;
  complianceTypes?: InputMaybe<Array<LinkProductComplianceType>>;
  euComplianceCategories?: InputMaybe<Array<EuProductComplianceCategory>>;
  franceUinCategories?: InputMaybe<Array<FranceProductUniqueIdentificationNumberCategory>>;
  germanyUinCategories?: InputMaybe<Array<GermanyProductUniqueIdentificationNumberCategory>>;
  isLinkedWithFranceUin?: InputMaybe<Scalars['Boolean']>;
  isLinkedWithFranceUinCategories?: InputMaybe<Scalars['Boolean']>;
  isLinkedWithGermanyUin?: InputMaybe<Scalars['Boolean']>;
  isLinkedWithGermanyUinCategories?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['String']>;
  responsiblePersonIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  searchType?: InputMaybe<ProductComplianceSearchType>;
  states?: InputMaybe<Array<LinkProductComplianceState>>;
};


export type ProductComplianceSchemaLinksArgs = {
  categories?: InputMaybe<Array<MsrCategory>>;
  complianceTypes?: InputMaybe<Array<LinkProductComplianceType>>;
  euComplianceCategories?: InputMaybe<Array<EuProductComplianceCategory>>;
  franceUinCategories?: InputMaybe<Array<FranceProductUniqueIdentificationNumberCategory>>;
  germanyUinCategories?: InputMaybe<Array<GermanyProductUniqueIdentificationNumberCategory>>;
  isLinkedWithFranceUin?: InputMaybe<Scalars['Boolean']>;
  isLinkedWithFranceUinCategories?: InputMaybe<Scalars['Boolean']>;
  isLinkedWithGermanyUin?: InputMaybe<Scalars['Boolean']>;
  isLinkedWithGermanyUinCategories?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  responsiblePersonIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  searchType?: InputMaybe<ProductComplianceSearchType>;
  states?: InputMaybe<Array<LinkProductComplianceState>>;
};


export type ProductComplianceSchemaResponsiblePersonCountArgs = {
  complianceType: LinkProductComplianceType;
  states?: InputMaybe<Array<ResponsiblePersonStatus>>;
};


export type ProductComplianceSchemaResponsiblePersonsArgs = {
  complianceType: LinkProductComplianceType;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ResponsiblePersonSort>;
  states?: InputMaybe<Array<ResponsiblePersonStatus>>;
};

export type ProductComplianceSearchType =
  | 'PRODUCT_ID';

export type ProductConstantsSchema = {
  __typename?: 'ProductConstantsSchema';
  prop65Chemicals: Array<Scalars['String']>;
};

export type ProductCountryBlockSchema = {
  __typename?: 'ProductCountryBlockSchema';
  countriesBlocked?: Maybe<Array<Country>>;
  productId: Scalars['ObjectIdType'];
};

export type ProductDailyPerformanceSchema = {
  __typename?: 'ProductDailyPerformanceSchema';
  addToCart?: Maybe<Scalars['Int']>;
  averageCostOfSaleCalculated?: Maybe<Scalars['Float']>;
  conversionRate?: Maybe<Scalars['Float']>;
  date: Datetime;
  gmv?: Maybe<CurrencyValue>;
  orders?: Maybe<Scalars['Int']>;
  productDetailPageView?: Maybe<Scalars['Int']>;
};

export type ProductFpReviewStatus =
  | 'APPROVED'
  | 'BLOCKED'
  | 'UNDER_REVIEW';

export type ProductInteractionStats = {
  __typename?: 'ProductInteractionStats';
  clicks: Scalars['Int'];
  country?: Maybe<Country>;
  eventTime: Datetime;
  gender?: Maybe<Gender>;
  impressions: Scalars['Int'];
};

export type ProductListingFeeDetailsSchema = {
  __typename?: 'ProductListingFeeDetailsSchema';
  currentProductMax?: Maybe<Scalars['Int']>;
  priceBreakdownPerTier?: Maybe<Array<ProductTierPriceSchema>>;
  productMetrics?: Maybe<ProductListingPlanMonthlyProductMetrics>;
  productMetricsBenchmark?: Maybe<ProductListingPlanMonthlyProductMetricsBenchmark>;
  snapshotDate: Datetime;
};

export type ProductListingPlanHub = {
  __typename?: 'ProductListingPlanHub';
  bill: ProductListingFeeDetailsSchema;
  productTotal: Array<ProductListingPlanProductMetrics>;
};


export type ProductListingPlanHubBillArgs = {
  date: DatetimeInput;
};


export type ProductListingPlanHubProductTotalArgs = {
  endDate: DatetimeInput;
  startDate: DatetimeInput;
};

export type ProductListingPlanMonthlyProductMetrics = {
  __typename?: 'ProductListingPlanMonthlyProductMetrics';
  date: Datetime;
  merchantId: Scalars['ObjectIdType'];
  totalProduct: Scalars['Int'];
  totalProductWithImpression: Scalars['Int'];
  totalProductWithSale: Scalars['Int'];
};

export type ProductListingPlanMonthlyProductMetricsBenchmark = {
  __typename?: 'ProductListingPlanMonthlyProductMetricsBenchmark';
  avgImpressionRatio: Scalars['Float'];
  avgSaleRatio: Scalars['Float'];
  date: Datetime;
};

export type ProductListingPlanProductMetrics = {
  __typename?: 'ProductListingPlanProductMetrics';
  count?: Maybe<Scalars['Int']>;
  date: Datetime;
};

export type ProductListingPlanTier =
  | 'TIER_ONE'
  | 'TIER_THREE'
  | 'TIER_TWO';

export type ProductListingState =
  | 'ACTIVE'
  | 'MERCHANT_INACTIVE'
  | 'REMOVED_BY_MERCHANT'
  | 'REMOVED_BY_WISH'
  | 'WISH_INACTIVE';

export type ProductListingTierSchema = {
  __typename?: 'ProductListingTierSchema';
  higherBound: Scalars['Int'];
  lowerBound: Scalars['Int'];
  price: CurrencyValue;
  tier: ProductListingPlanTier;
};

export type ProductOrderStats = {
  __typename?: 'ProductOrderStats';
  country?: Maybe<Country>;
  eventTime: Datetime;
  gender?: Maybe<Gender>;
  gmv: CurrencyValue;
  merchantGmv?: Maybe<CurrencyValue>;
  orders: Scalars['Int'];
};

export type ProductPerformanceSchema = {
  __typename?: 'ProductPerformanceSchema';
  daily: Array<ProductDailyPerformanceSchema>;
  endDate: Datetime;
  startDate: Datetime;
  totalAddToCart: Scalars['Int'];
  totalAverageCostOfSaleCalculated?: Maybe<Scalars['Float']>;
  totalConversionRate: Scalars['Float'];
  totalGmv: CurrencyValue;
  totalOrders: Scalars['Int'];
  totalProductDetailPageView: Scalars['Int'];
};


export type ProductPerformanceSchemaDailyArgs = {
  endDate: DatetimeInput;
  startDate: DatetimeInput;
};

export type ProductPerformanceStats = {
  __typename?: 'ProductPerformanceStats';
  activeProducts?: Maybe<Scalars['Int']>;
  activeSkus?: Maybe<Scalars['Int']>;
  averageAdditonalImagesPerProduct?: Maybe<Scalars['Float']>;
  averagePrice?: Maybe<CurrencyValue>;
  averageShippingPrice?: Maybe<CurrencyValue>;
  endDate: Datetime;
  gmv: CurrencyValue;
  priceToShippingRatio?: Maybe<Scalars['Float']>;
  productImpressions?: Maybe<Scalars['BigInt']>;
  skusPerProduct?: Maybe<Scalars['Float']>;
  startDate: Datetime;
};

export type ProductPostErrorCode =
  | 'CONFLICTING_PARAMETERS'
  | 'IDENTIFIER_ALREADY_IN_USE'
  | 'ILLEGAL_CHARACTER'
  | 'INVALID_MERCHANT_ID'
  | 'INVALID_PARAMETER'
  | 'INVALID_PRODUCT_ID'
  | 'INVALID_PRODUCT_VIDEO_ID'
  | 'INVALID_RULES'
  | 'INVALID_VIDEO'
  | 'INVALID_VIDEO_ID'
  | 'LIMIT_IS_ZERO'
  | 'MISSING_PARAMETER'
  | 'NO_ERROR'
  | 'RECORD_NOT_FOUND'
  | 'REQUEST_TOO_LARGE'
  | 'VIDEO_NOT_FOUND';

export type ProductPostsMutations = {
  __typename?: 'ProductPostsMutations';
  add: AddProductPostMutation;
  delete: DeleteProductPostsMutation;
};


export type ProductPostsMutationsAddArgs = {
  input: AddProductPostInput;
};


export type ProductPostsMutationsDeleteArgs = {
  input: DeleteProductPostsInput;
};

export type ProductPredictedCategory = {
  __typename?: 'ProductPredictedCategory';
  categorizationSource: CategorizationSource;
  category: TaxonomyCategorySchema;
  categoryTreeId: Scalars['Int'];
  categoryTreeVersion: Scalars['String'];
  lastUpdated: Datetime;
  productId: Scalars['ObjectIdType'];
};

export type ProductPromotionDailyStats = {
  __typename?: 'ProductPromotionDailyStats';
  date: Datetime;
  gmv?: Maybe<CurrencyValue>;
  impressions?: Maybe<Scalars['Int']>;
  promotionBudget?: Maybe<CurrencyValue>;
  promotionSpending?: Maybe<CurrencyValue>;
  promotionStatus: ProductPromotionStatus;
  sales?: Maybe<Scalars['Int']>;
};

export type ProductPromotionLifetimeStats = {
  __typename?: 'ProductPromotionLifetimeStats';
  gmv: CurrencyValue;
  sales: Scalars['Int'];
  spend: CurrencyValue;
};

export type ProductPromotionPeriodStats = {
  __typename?: 'ProductPromotionPeriodStats';
  dailyStats: Array<ProductPromotionDailyStats>;
  endDate: Datetime;
  startDate: Datetime;
  totalGmv: CurrencyValue;
  totalImpressions: Scalars['Int'];
  totalPromotionSpending: CurrencyValue;
  totalSales: Scalars['Int'];
};

export type ProductPromotionRefundAssurance = {
  __typename?: 'ProductPromotionRefundAssurance';
  monthlyStats: Array<ProductPromotionRefundAssuranceStats>;
  topLevelStats: ProductPromotionRefundAssuranceStats;
};

export type ProductPromotionRefundAssuranceCreditReceivedStatus =
  | 'DONE'
  | 'PENDING';

export type ProductPromotionRefundAssuranceStats = {
  __typename?: 'ProductPromotionRefundAssuranceStats';
  advancedLogisticsGmv?: Maybe<CurrencyValue>;
  advancedLogisticsOrdersCount?: Maybe<Scalars['Int']>;
  creditIssued?: Maybe<CurrencyValue>;
  creditIssuedStatus?: Maybe<ProductPromotionRefundAssuranceCreditReceivedStatus>;
  month?: Maybe<Datetime>;
  refundAdvancedLogisticsGmv?: Maybe<CurrencyValue>;
  refundRate?: Maybe<Scalars['Float']>;
  refundedAdvancedLogisticsOrdersCount?: Maybe<Scalars['Int']>;
  spend?: Maybe<CurrencyValue>;
};

export type ProductPromotionRefundAssuranceType =
  | 'ELIGIBLE'
  | 'OTHER';

export type ProductPromotionSchema = {
  __typename?: 'ProductPromotionSchema';
  dailyPromotionBudget: CurrencyValue;
  intenseBoost?: Maybe<Scalars['Boolean']>;
  lastUpdateDate?: Maybe<Datetime>;
  lifetimeStats: ProductPromotionLifetimeStats;
  periodStats: ProductPromotionPeriodStats;
  product: ProductSchema;
  productId: Scalars['ObjectIdType'];
  promotionStatus: ProductPromotionStatus;
  refundAssurance: ProductPromotionRefundAssurance;
};


export type ProductPromotionSchemaPeriodStatsArgs = {
  endTime: DatetimeInput;
  startTime: DatetimeInput;
};

export type ProductPromotionSearchType =
  | 'ID'
  | 'NAME'
  | 'SKU';

export type ProductPromotionStatus =
  | 'ACTIVE'
  | 'INACTIVE'
  | 'OUT_OF_BALANCE';

export type ProductRating = {
  __typename?: 'ProductRating';
  average30dRating?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  ratings?: Maybe<Scalars['Int']>;
  sales?: Maybe<Scalars['Int']>;
};

export type ProductRatingListingTab =
  | 'BestRated'
  | 'MostReviewed'
  | 'WorstRated';

export type ProductSchema = {
  __typename?: 'ProductSchema';
  analyticsService: ProductAnalyticsSchema;
  attributes?: Maybe<Array<MerchantProvidedAttributeSchema>>;
  categories?: Maybe<Array<TrueTagSchema>>;
  categoryExperienceEligibility?: Maybe<Scalars['Boolean']>;
  chemicalNames?: Maybe<Array<Scalars['String']>>;
  condition?: Maybe<CommerceProductCondition>;
  consignmentOriginalPid?: Maybe<Scalars['ObjectIdType']>;
  countryBlocks?: Maybe<Array<ProductCountryBlockSchema>>;
  createTime: Datetime;
  demoVideo?: Maybe<ProductVideo>;
  description: Scalars['String'];
  eligibleForCategoryDispute?: Maybe<ProductCategoryDisputeEligibility>;
  enabled: Scalars['Boolean'];
  extraImages?: Maybe<Array<ImageSchema>>;
  flatRateShippingCountryCandidates?: Maybe<Array<FlatRateShippingCountryCandidate>>;
  fpReviewStatus: CommerceProductFpReviewStatus;
  fpWorkflow?: Maybe<FeedProcessingWorkflowSchema>;
  hasBrand?: Maybe<Scalars['Boolean']>;
  id: Scalars['ObjectIdType'];
  infractions: Array<InfractionSchema>;
  invalidCategoryNote?: Maybe<Scalars['String']>;
  isConsignmentEligible?: Maybe<Scalars['Boolean']>;
  isEuCompliant: Scalars['Boolean'];
  isLtl?: Maybe<Scalars['Boolean']>;
  isPromoted: Scalars['Boolean'];
  isRemoved: Scalars['Boolean'];
  isRemovedByMerchant: Scalars['Boolean'];
  isRemovedByWish: Scalars['Boolean'];
  isReturnsEnabled?: Maybe<Scalars['Boolean']>;
  isUnityBlacklisted: Scalars['Boolean'];
  isUnityPendingStandardWarehouse: Scalars['Boolean'];
  isWishExpress: Scalars['Boolean'];
  l1Category?: Maybe<TaxonomyCategorySchema>;
  lastUpdateTime: Datetime;
  listingState: ListingStateSchema;
  mainImage: ImageSchema;
  maxQuantity?: Maybe<Scalars['Int']>;
  merchantId: Scalars['ObjectIdType'];
  msrp?: Maybe<CurrencyValue>;
  name: Scalars['String'];
  performance?: Maybe<ProductPerformanceSchema>;
  productComplianceDocuments?: Maybe<Array<ProductComplianceDocumentSchema>>;
  productTrueTagInfo?: Maybe<ProductTrueTagInfoSchema>;
  referenceArea?: Maybe<Area>;
  referenceLength?: Maybe<Length>;
  referenceUnit?: Maybe<Count>;
  referenceVolume?: Maybe<Volume>;
  referenceWeight?: Maybe<Weight>;
  requestedBrand?: Maybe<BrandSchema>;
  requestedBrandId?: Maybe<Scalars['ObjectIdType']>;
  reviewStatus: CommerceProductReviewStatus;
  sales: Scalars['Int'];
  shipping: ShippingSchema;
  shippingProfile?: Maybe<ShippingProfileSchema>;
  sku?: Maybe<Scalars['String']>;
  smallPictureUrl: Scalars['String'];
  stats: ProductStats;
  subcategory?: Maybe<TaxonomyCategorySchema>;
  subcategoryId?: Maybe<Scalars['Int']>;
  tags: Array<Scalars['String']>;
  taxonomyCategory?: Maybe<TaxonomyCategorySchema>;
  totalGmv: CurrencyValue;
  totalInventory: Scalars['Int'];
  trueTags?: Maybe<Array<TrueTagSchema>>;
  unityEffectiveDateStandardWarehouse?: Maybe<Datetime>;
  upc?: Maybe<Scalars['String']>;
  variationCount: Scalars['Int'];
  variationOptions?: Maybe<Array<Scalars['String']>>;
  variations: Array<VariationSchema>;
  warningType?: Maybe<ContestWarningType>;
  wishes: Scalars['Int'];
};


export type ProductSchemaDemoVideoArgs = {
  useGroupings?: InputMaybe<Scalars['Boolean']>;
};


export type ProductSchemaPerformanceArgs = {
  endDate: DatetimeInput;
  startDate: DatetimeInput;
};


export type ProductSchemaShippingArgs = {
  warehouseId?: InputMaybe<Scalars['String']>;
};


export type ProductSchemaVariationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ProductSearchType =
  | 'ID'
  | 'NAME'
  | 'PARENTSKU'
  | 'SKU';

export type ProductSort = {
  field: ProductSortField;
  order: SortOrderType;
};

export type ProductSortField =
  | 'ID'
  | 'LAST_UPDATE'
  | 'SALES'
  | 'SKU';

export type ProductStats = {
  __typename?: 'ProductStats';
  daily: Array<ProductTotalStats>;
  totals: ProductTotalStats;
  weekly?: Maybe<ProductWeeklyStats>;
};


export type ProductStatsDailyArgs = {
  coreMetricsOnly?: InputMaybe<Scalars['Boolean']>;
  days: Scalars['Int'];
};


export type ProductStatsTotalsArgs = {
  coreMetricsOnly?: InputMaybe<Scalars['Boolean']>;
  days: Scalars['Int'];
};


export type ProductStatsWeeklyArgs = {
  weeksFromTheLatest?: InputMaybe<Scalars['Int']>;
};

export type ProductTaggingStatusSchema = {
  __typename?: 'ProductTaggingStatusSchema';
  imageChangeMlTaggerJobs?: Maybe<Array<ImageChangeMlTaggerJobSchema>>;
  productCategorizationHistory: Array<ProductCategorization>;
  productPredictedCategory?: Maybe<ProductPredictedCategory>;
};

export type ProductTaxonomyCategoryDisputeAdminUnchangedReason =
  | 'CORRECTLY_TAGGED'
  | 'IMAGE_MISMATCH'
  | 'OTHER';

export type ProductTaxonomyCategoryDisputeEligibilityEnum =
  | 'ELIGIBLE'
  | 'MERCHANT_MONTHLY_DISPUTE_QUOTA_EXCEEDED'
  | 'PRODUCT_LIFETIME_DISPUTE_QUOTA_EXCEEDED'
  | 'PRODUCT_NOT_ACTIVE'
  | 'PRODUCT_NOT_CATEGORIZED';

export type ProductTaxonomyCategoryDisputeHub = {
  __typename?: 'ProductTaxonomyCategoryDisputeHub';
  dispute?: Maybe<ProductTaxonomyCategoryDisputeSchema>;
  disputeCount: Scalars['Int'];
  disputes: Array<ProductTaxonomyCategoryDisputeSchema>;
  productDisputeEligibility?: Maybe<ProductTaxonomyCategoryDisputeEligibilityEnum>;
};


export type ProductTaxonomyCategoryDisputeHubDisputeArgs = {
  disputeId?: InputMaybe<Scalars['ObjectIdType']>;
  productId?: InputMaybe<Scalars['ObjectIdType']>;
};


export type ProductTaxonomyCategoryDisputeHubDisputeCountArgs = {
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  states?: InputMaybe<Array<ProductTaxonomyCategoryDisputeState>>;
};


export type ProductTaxonomyCategoryDisputeHubDisputesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  states?: InputMaybe<Array<ProductTaxonomyCategoryDisputeState>>;
};


export type ProductTaxonomyCategoryDisputeHubProductDisputeEligibilityArgs = {
  productId: Scalars['ObjectIdType'];
};

export type ProductTaxonomyCategoryDisputeSchema = {
  __typename?: 'ProductTaxonomyCategoryDisputeSchema';
  adminNote?: Maybe<Scalars['String']>;
  adminUnchangedReason?: Maybe<ProductTaxonomyCategoryDisputeAdminUnchangedReason>;
  categoryApproved?: Maybe<TaxonomyCategorySchema>;
  categoryDisputed: TaxonomyCategorySchema;
  categoryProposed: TaxonomyCategorySchema;
  datetimeCreated: Datetime;
  datetimeResolved?: Maybe<Datetime>;
  id: Scalars['ObjectIdType'];
  merchant: MerchantSchema;
  merchantNote?: Maybe<Scalars['String']>;
  product: ProductSchema;
  state: ProductTaxonomyCategoryDisputeState;
  supportFiles?: Maybe<Array<MerchantFileSchema>>;
};

export type ProductTaxonomyCategoryDisputeState =
  | 'PENDING_REVIEW'
  | 'RESOLVED_UNCHANGED'
  | 'RESOLVED_UPDATED';

export type ProductTierPriceSchema = {
  __typename?: 'ProductTierPriceSchema';
  price: CurrencyValue;
  productCount: Scalars['Int'];
  tier: ProductListingPlanTier;
};

export type ProductTotalStats = {
  __typename?: 'ProductTotalStats';
  endDate: Datetime;
  gmv: CurrencyValue;
  impressions: Scalars['BigInt'];
  orders: Scalars['Int'];
  startDate: Datetime;
};

export type ProductTrueTagInfoSchema = {
  __typename?: 'ProductTrueTagInfoSchema';
  counterfeitLastTagged?: Maybe<Datetime>;
  counterfeitViolation: CounterfeitViolationSchema;
  inappropriateLastTagged?: Maybe<Datetime>;
  inappropriateViolation: InappropriateViolationSchema;
  subreason?: Maybe<TaggingViolationSubcategory>;
};

export type ProductUpsertInput = {
  attributes?: InputMaybe<Array<AttributeInput>>;
  chemicalNames?: InputMaybe<Array<Scalars['String']>>;
  condition?: InputMaybe<CommerceProductCondition>;
  consignmentOriginalPid?: InputMaybe<Scalars['ObjectIdType']>;
  countryShipping?: InputMaybe<Array<WarehouseCountryShippingInput>>;
  defaultShipping?: InputMaybe<Array<DefaultShippingInput>>;
  demoVideoSourceUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  domesticShipping?: InputMaybe<Array<DomesticShippingInput>>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  images?: InputMaybe<Array<ImageInput>>;
  isConsignmentEligible?: InputMaybe<Scalars['Boolean']>;
  maxQuantity?: InputMaybe<Scalars['Int']>;
  msrp?: InputMaybe<CurrencyInput>;
  name?: InputMaybe<Scalars['String']>;
  referenceArea?: InputMaybe<AreaInput>;
  referenceLength?: InputMaybe<LengthInput>;
  referenceUnit?: InputMaybe<CountInput>;
  referenceVolume?: InputMaybe<VolumeInput>;
  referenceWeight?: InputMaybe<WeightInput>;
  requestedBrandId?: InputMaybe<Scalars['ObjectIdType']>;
  shippingProfile?: InputMaybe<ShippingProfileUpsertInput>;
  shippingProfileId?: InputMaybe<Scalars['ObjectIdType']>;
  sku?: InputMaybe<Scalars['String']>;
  subcategoryId?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  upc?: InputMaybe<Scalars['String']>;
  variations?: InputMaybe<Array<VariationInput>>;
  warehouseId?: InputMaybe<Scalars['ObjectIdType']>;
  warningType?: InputMaybe<ContestWarningType>;
};

export type ProductVideo = {
  __typename?: 'ProductVideo';
  audio?: Maybe<ProductVideoAudio>;
  audioStartTime?: Maybe<Scalars['Float']>;
  averageWatchTime?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  highQuality?: Maybe<RaccVideoAsset>;
  id: Scalars['ObjectIdType'];
  lastUpdated?: Maybe<Datetime>;
  likeCount?: Maybe<Scalars['Int']>;
  lowQuality?: Maybe<RaccVideoAsset>;
  mediumQuality?: Maybe<RaccVideoAsset>;
  merchantId: Scalars['ObjectIdType'];
  preview?: Maybe<RaccVideoAsset>;
  productId: Scalars['ObjectIdType'];
  rejectionReason?: Maybe<Scalars['String']>;
  source: RaccVideoAsset;
  state: ProductVideoState;
  title?: Maybe<Scalars['String']>;
  totalWatchTime?: Maybe<Scalars['Float']>;
  uploadTime: Datetime;
  videoSource?: Maybe<ProductVideoSource>;
  viewCount?: Maybe<Scalars['Int']>;
};

export type ProductVideoAudio = {
  __typename?: 'ProductVideoAudio';
  duration: Scalars['Float'];
  genres: Array<AudioGenre>;
  id: Scalars['ObjectIdType'];
  moodEmotion: Array<AudioMoodEmotion>;
  productCategory: Array<AudioProductCategory>;
  trackTitle: Scalars['String'];
  url: Scalars['String'];
};

export type ProductVideoContentReviewTraits = {
  containsMoreThanOneProduct?: InputMaybe<Scalars['Boolean']>;
  hasEngravedNonEnglishText?: InputMaybe<Scalars['Boolean']>;
  hasEngravedText?: InputMaybe<Scalars['Boolean']>;
  hasFemale?: InputMaybe<Scalars['Boolean']>;
  hasHatefulSymbol?: InputMaybe<Scalars['Boolean']>;
  hasMale?: InputMaybe<Scalars['Boolean']>;
  hasMerchantBranding?: InputMaybe<Scalars['Boolean']>;
  hasMinor?: InputMaybe<Scalars['Boolean']>;
  hasNudity?: InputMaybe<Scalars['Boolean']>;
  hasObsceneGraphicContent?: InputMaybe<Scalars['Boolean']>;
  hasPartialNudity?: InputMaybe<Scalars['Boolean']>;
  hasPersonTalking?: InputMaybe<Scalars['Boolean']>;
  hasSexualWellness?: InputMaybe<Scalars['Boolean']>;
  hasUnverifiedOrMisleadingClaim?: InputMaybe<Scalars['Boolean']>;
  hasWeapon?: InputMaybe<Scalars['Boolean']>;
  isBlank?: InputMaybe<Scalars['Boolean']>;
  isBlurry?: InputMaybe<Scalars['Boolean']>;
  isFactoryVideo?: InputMaybe<Scalars['Boolean']>;
  isImageSlideshow?: InputMaybe<Scalars['Boolean']>;
  isScreenRecording?: InputMaybe<Scalars['Boolean']>;
  isSensitiveVideo?: InputMaybe<Scalars['Boolean']>;
  refersConsumerOffPlatform?: InputMaybe<Scalars['Boolean']>;
  rotationIsIncorrect?: InputMaybe<Scalars['Boolean']>;
};

export type ProductVideoContentTagMutations = {
  __typename?: 'ProductVideoContentTagMutations';
  submitProductVideoContentManualReview?: Maybe<SubmitProductVideoContentManualReview>;
  submitProductVideoContentReview?: Maybe<SubmitProductVideoContentReview>;
};


export type ProductVideoContentTagMutationsSubmitProductVideoContentManualReviewArgs = {
  input: SubmitProductVideoContentManualReviewInput;
};


export type ProductVideoContentTagMutationsSubmitProductVideoContentReviewArgs = {
  input: SubmitProductVideoContentReviewInput;
};

export type ProductVideoDailyStats = {
  __typename?: 'ProductVideoDailyStats';
  addToCart: Scalars['Int'];
  avgWatchTime: Scalars['Float'];
  buyerIntent: Scalars['Float'];
  conversions: Scalars['Float'];
  date: Datetime;
  engagedViews: Scalars['Int'];
  gmv?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
  watchTime?: Maybe<Scalars['Float']>;
};

export type ProductVideoIpTagMutations = {
  __typename?: 'ProductVideoIPTagMutations';
  submitProductVideoIpManualReview?: Maybe<SubmitProductVideoIpManualReview>;
  submitProductVideoIpReview?: Maybe<SubmitProductVideoIpReview>;
};


export type ProductVideoIpTagMutationsSubmitProductVideoIpManualReviewArgs = {
  input: SubmitProductVideoIpManualReviewInput;
};


export type ProductVideoIpTagMutationsSubmitProductVideoIpReviewArgs = {
  input: SubmitProductVideoIpReviewInput;
};

export type ProductVideoIpViolationReason =
  | 'BLURRED_INFORMATION'
  | 'COMMERCIAL'
  | 'COPYRIGHT_IMAGES'
  | 'COUNTERFEIT_OR_IP_VIOLATION'
  | 'EMBEDDED_LOGO'
  | 'PICTURED_WITH_MAJOR_BRAND'
  | 'UNKNOWN'
  | 'UNLICENSED_MEDIA';

export type ProductVideoServiceSchema = {
  __typename?: 'ProductVideoServiceSchema';
  audioCount: Scalars['Int'];
  audios: Array<ProductVideoAudio>;
  leaderboard?: Maybe<VideoLeaderboard>;
  performance?: Maybe<VideoPerformance>;
  recommendedAudios: Array<ProductVideoAudio>;
  videoCount: Scalars['Int'];
  videos: Array<ProductVideo>;
};


export type ProductVideoServiceSchemaAudioCountArgs = {
  genre?: InputMaybe<AudioGenre>;
  moodEmotion?: InputMaybe<AudioMoodEmotion>;
  productCategory?: InputMaybe<AudioProductCategory>;
  trackTitle?: InputMaybe<Scalars['String']>;
};


export type ProductVideoServiceSchemaAudiosArgs = {
  genre?: InputMaybe<AudioGenre>;
  limit?: InputMaybe<Scalars['Int']>;
  moodEmotion?: InputMaybe<AudioMoodEmotion>;
  offset?: InputMaybe<Scalars['Int']>;
  productCategory?: InputMaybe<AudioProductCategory>;
  trackTitle?: InputMaybe<Scalars['String']>;
};


export type ProductVideoServiceSchemaLeaderboardArgs = {
  category?: InputMaybe<VideoCategory>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type ProductVideoServiceSchemaPerformanceArgs = {
  endDate?: InputMaybe<DatetimeInput>;
  startDate?: InputMaybe<DatetimeInput>;
  videoId?: InputMaybe<Scalars['ObjectIdType']>;
};


export type ProductVideoServiceSchemaRecommendedAudiosArgs = {
  productCategory?: InputMaybe<AudioProductCategory>;
};


export type ProductVideoServiceSchemaVideoCountArgs = {
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<VideoSearchType>;
  videoStates?: InputMaybe<Array<ProductVideoState>>;
};


export type ProductVideoServiceSchemaVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<VideoSearchType>;
  sort?: InputMaybe<VideoSort>;
  videoStates?: InputMaybe<Array<ProductVideoState>>;
};

export type ProductVideoSource =
  | 'INFLUENCER'
  | 'MERCHANT'
  | 'THIRD_PARTY';

export type ProductVideoState =
  | 'APPROVED'
  | 'FAILED_AUTO_REVIEW'
  | 'FAILED_OBJECT_DETECTION'
  | 'FAILED_REKOGNITION'
  | 'FAILED_TRANSCODE'
  | 'PENDING_AUTO_REVIEW'
  | 'PENDING_REKOGNITION'
  | 'PENDING_REVIEW'
  | 'PENDING_TRANSCODE'
  | 'REJECTED'
  | 'UNKNOWN_STATE';

export type ProductVideoTaggerJobSchema = {
  __typename?: 'ProductVideoTaggerJobSchema';
  id: Scalars['ObjectIdType'];
  product?: Maybe<ProductSchema>;
  source: ProductVideoTaggerJobSource;
};

export type ProductVideoTaggerJobSource =
  | 'MANUAL_REVIEW'
  | 'MERCHANT_UPLOAD'
  | 'NOT_CAPTURED'
  | 'USER_REPORT';

export type ProductWeeklyStats = {
  __typename?: 'ProductWeeklyStats';
  cs: CsPerformanceStats;
  endDate: Datetime;
  refund: RefundPerformanceStats;
  sales: SalesPerformanceStats;
  startDate: Datetime;
};

export type ProductsCsvTemplateType =
  | 'ALL_COLUMNS'
  | 'CATEGORY'
  | 'CONTENT'
  | 'DEFAULT'
  | 'ENABLED'
  | 'PRICE_AND_INVENTORY'
  | 'SHIPPING';

export type PromotableProduct = {
  __typename?: 'PromotableProduct';
  isInTrendingCategory: Scalars['Boolean'];
  product: ProductSchema;
};

export type PublicDsaMutations = {
  __typename?: 'PublicDSAMutations';
  createNotice?: Maybe<CreateNotice>;
  disputeNotice?: Maybe<DisputeNotice>;
};


export type PublicDsaMutationsCreateNoticeArgs = {
  input: CreateNoticeInput;
};


export type PublicDsaMutationsDisputeNoticeArgs = {
  input: DisputeNoticeInput;
};

export type PublicShippingProviderDocs = {
  __typename?: 'PublicShippingProviderDocs';
  shippingProviderPolicies?: Maybe<Array<ShippingProviderPolicySchema>>;
};


export type PublicShippingProviderDocsShippingProviderPoliciesArgs = {
  destCountryCode?: InputMaybe<CountryCode>;
};

export type PublishAnnouncement = {
  __typename?: 'PublishAnnouncement';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type PublishAnnouncementInput = {
  id: Scalars['ObjectIdType'];
  publishDate?: InputMaybe<DatetimeInput>;
};

export type RaccVideoAsset = {
  __typename?: 'RaccVideoAsset';
  contentType: Scalars['String'];
  url: Scalars['String'];
};

export type RatingBreakdown = {
  __typename?: 'RatingBreakdown';
  fiveStarRatings?: Maybe<Scalars['Int']>;
  fourStarRatings?: Maybe<Scalars['Int']>;
  oneStarRatings?: Maybe<Scalars['Int']>;
  threeStarRatings?: Maybe<Scalars['Int']>;
  twoStarRatings?: Maybe<Scalars['Int']>;
};

export type RatingPerformanceStats = {
  __typename?: 'RatingPerformanceStats';
  average30dStoreRating?: Maybe<Scalars['Float']>;
  averageProductRating?: Maybe<Scalars['Float']>;
  averageStoreRating?: Maybe<Scalars['Float']>;
  endDate: Datetime;
  lowProductRatingPercentage?: Maybe<Scalars['Float']>;
  lowStoreRatingPercentage?: Maybe<Scalars['Float']>;
  productRatings?: Maybe<Scalars['Int']>;
  productRatingsBreakdown?: Maybe<RatingBreakdown>;
  startDate: Datetime;
  storeRatings?: Maybe<Scalars['Int']>;
  storeRatingsBreakdown?: Maybe<RatingBreakdown>;
};

export type Reason =
  | 'INCONSISTENT_PET'
  | 'INCORRECT'
  | 'INCORRECT_TOTAL_AMOUNT'
  | 'INVALID_CURRENCY'
  | 'LEDGER_ITEMS_NOT_FOUND'
  | 'MISSING'
  | 'REDUNDANT'
  | 'UNEXPECTED'
  | 'UNMATCHED';

export type RedirectType =
  | 'NEW_PAGE'
  | 'POPUP_MODAL';

export type RefundAmountType =
  | 'GENERAL'
  | 'PRICE'
  | 'SHIPPING';

export type RefundAssuranceConstants = {
  __typename?: 'RefundAssuranceConstants';
  enabled: Scalars['Boolean'];
  guaranteedRefundRate: Scalars['Float'];
  spendDiscountFactor: Scalars['Float'];
};

export type RefundDisputeHub = {
  __typename?: 'RefundDisputeHub';
  dispute?: Maybe<RefundDisputeSchema>;
  disputeCount?: Maybe<Scalars['Int']>;
  disputes?: Maybe<Array<RefundDisputeSchema>>;
};


export type RefundDisputeHubDisputeArgs = {
  id: Scalars['ObjectIdType'];
};


export type RefundDisputeHubDisputeCountArgs = {
  query?: InputMaybe<Scalars['String']>;
  reasons?: InputMaybe<Array<DisputeReason>>;
  searchType?: InputMaybe<RefundDisputeSearchType>;
  states: Array<DisputeState>;
};


export type RefundDisputeHubDisputesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reasons?: InputMaybe<Array<DisputeReason>>;
  searchType?: InputMaybe<RefundDisputeSearchType>;
  sort?: InputMaybe<DisputeSort>;
  states: Array<DisputeState>;
};

export type RefundDisputeMutations = {
  __typename?: 'RefundDisputeMutations';
  reply?: Maybe<RefundDisputeReplyMutation>;
};


export type RefundDisputeMutationsReplyArgs = {
  input: RefundDisputeReplyMutationInput;
};

export type RefundDisputeReplyMutation = {
  __typename?: 'RefundDisputeReplyMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RefundDisputeReplyMutationInput = {
  disputeId: Scalars['ObjectIdType'];
  files?: InputMaybe<Array<FileInput>>;
  message: Scalars['String'];
};

export type RefundDisputeSchema = {
  __typename?: 'RefundDisputeSchema';
  consumerId: Scalars['ObjectIdType'];
  disputeAmount: CurrencyValue;
  id: Scalars['ObjectIdType'];
  isReturnDispute: Scalars['Boolean'];
  lastUpdate: Datetime;
  merchant?: Maybe<MerchantSchema>;
  messages: Array<DisputeMessageSchema>;
  order: OrderSchema;
  orderId: Scalars['ObjectIdType'];
  product: ProductSchema;
  productId: Scalars['ObjectIdType'];
  reason: DisputeReasonSchema;
  state: DisputeState;
};

export type RefundDisputeSearchType =
  | 'ORDER_ID';

export type RefundError = {
  __typename?: 'RefundError';
  message: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
};

export type RefundOrderInput = {
  brandName?: InputMaybe<Scalars['String']>;
  buyerFraudReasonCategory?: InputMaybe<BuyerFraudReasonCategory>;
  expectedRefunds?: InputMaybe<Scalars['Int']>;
  orderId: Scalars['ObjectIdType'];
  partialAmountNote?: InputMaybe<Scalars['String']>;
  partialAmountRefundType?: InputMaybe<RefundAmountType>;
  partialQuantity?: InputMaybe<Scalars['Int']>;
  partialRefundAmount?: InputMaybe<Scalars['Float']>;
  reasonCategory: RefundReasonCategory;
  reasonNote?: InputMaybe<Scalars['String']>;
  shouldRefundToCash?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<RefundSource>;
  ticketId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type RefundOrders = {
  __typename?: 'RefundOrders';
  errorMessages?: Maybe<Array<RefundError>>;
  refundedCount: Scalars['Int'];
};

export type RefundPerformanceStats = {
  __typename?: 'RefundPerformanceStats';
  deliverWrongAddressPercentage?: Maybe<Scalars['Float']>;
  endDate: Datetime;
  failToFulfillPercentage?: Maybe<Scalars['Float']>;
  incompleteOrderPercentage?: Maybe<Scalars['Float']>;
  itemDamagedPercentage?: Maybe<Scalars['Float']>;
  itemNotFitPercentage?: Maybe<Scalars['Float']>;
  itemNotMatchingListingPercentage?: Maybe<Scalars['Float']>;
  itemNotWorkPercentage?: Maybe<Scalars['Float']>;
  itemReturnedPercentage?: Maybe<Scalars['Float']>;
  receivedWrongItemPercentage?: Maybe<Scalars['Float']>;
  refundRate?: Maybe<Scalars['Float']>;
  refundRatePercentile?: Maybe<Scalars['Int']>;
  refunds?: Maybe<Scalars['Int']>;
  shippingTakeTooLongPercentage?: Maybe<Scalars['Float']>;
  startDate: Datetime;
};

export type RefundReasonCategory =
  | 'BLUE_ADMIN_REFUND'
  | 'BLUE_DELIVERY_NOT_DELIVERED'
  | 'BLUE_FUSION_IN_TRANSIT_LOST'
  | 'BLUE_FUSION_SENT_TO_WRONG_STORE'
  | 'BLUE_FUSION_STORE_LOST'
  | 'BLUE_FUSION_STORE_NOT_SCAN_IN'
  | 'BLUE_PROGRAM_DEPRECATION'
  | 'BLUE_STORE_OUT_OF_STOCK'
  | 'BLUE_STORE_QUIT'
  | 'CB_USER_CANCELLED_ORDER'
  | 'CIRCULAR_ROUTED_UNFULFILLED'
  | 'CLEARING_LIMBO'
  | 'COMMERCEHUB_BAD_ADDRESS'
  | 'COMMERCEHUB_BAD_SKU'
  | 'COMMERCEHUB_CANCELLED_AT_MERCHANTS_REQUEST'
  | 'COMMERCEHUB_OTHER'
  | 'COMMERCEHUB_OUT_OF_STOCK'
  | 'COMMERCEHUB_SUPPLIER_DETECTED_FRAUD'
  | 'CONFIRMED_FUSION_ITEM_NOT_PICKED_UP'
  | 'CONSUMER_FRAUD'
  | 'CONTENT_POLICY_VIOLATION_CANCELLATION'
  | 'CS_REFUND_FOR_USER_CANCEL'
  | 'CUSTOMER_MANUFACTURER_COMPLAINT'
  | 'CUSTOMER_REQUEST'
  | 'DECLINED_GIFT'
  | 'DOES_FIT_WRONG_SIZE'
  | 'DOES_NOT_FIT'
  | 'DOES_NOT_FIT_INCORRECT_SIZE'
  | 'DOES_NOT_FIT_USERS_FAULT'
  | 'DOES_NOT_FIT_WRONG_SIZE'
  | 'EMPTY_PACKAGE'
  | 'EPC_LAST_MILE_CARRIERS_UNABLE_TO_SHIP'
  | 'EPC_OVERSIZE'
  | 'EPC_OVERVALUE'
  | 'EPC_OVERWEIGHT'
  | 'EXPIRED_GIFT'
  | 'EXPIRED_GROUP_BUY'
  | 'FAKE_OR_COUNTERFEIT'
  | 'FBS_STORE_QUIT'
  | 'FBW_FAILED_TO_FULFILL_DUE_TO_CARRIER_RETURN'
  | 'FBW_WAREHOUSE_FAILED_TO_FULFILL'
  | 'FRAUDULENT_ACTIVITY'
  | 'INCOMPLETE_ORDER'
  | 'INCORRECT_QUANTITY_OF_ITEMS'
  | 'INSUFFICIENT_INVENTORY'
  | 'INVALID_ADDRESS'
  | 'IN_GRACE_PERIOD_DELAY_CANCEL'
  | 'ITEM_DAMAGED'
  | 'ITEM_DID_NOT_MEET_EXPECTATIONS'
  | 'ITEM_DOES_NOT_FIT'
  | 'ITEM_DOES_NOT_MATCH_LISTING'
  | 'ITEM_DOES_NOT_WORK_AS_DESCRIBED'
  | 'ITEM_HELD_AT_CUSTOMS'
  | 'ITEM_IS_COUNTERFEIT'
  | 'ITEM_IS_DAMAGED'
  | 'ITEM_IS_DANGEROUS'
  | 'ITEM_IS_POOR_QUALITY'
  | 'ITEM_MARKED_DELIVERED_BUT_DID_NOT_ARRIVE'
  | 'ITEM_MARKED_DELIVERED_NOT_ALL_ITEMS_ARRIVED'
  | 'ITEM_NEVER_ARRIVED'
  | 'ITEM_RETURNED_TO_SENDER'
  | 'LATE_OR_MISSING'
  | 'LIMBO_ORDER_UNFULFILLED'
  | 'MERCHANT_FAILED_TO_FULFILL'
  | 'MERCHANT_OUT_OF_STOCK'
  | 'MERCHANT_REPORTED_BUYER_FRAUD'
  | 'MERCHANT_REPORTED_ORDER'
  | 'MERCHANT_SENT_TO_WRONG_ADDRESS'
  | 'MISLEADING_LISTING'
  | 'MISSING_ITEM_OR_PARTS'
  | 'NOT_QUALIFIED_SHIPPING_PROVIDER'
  | 'ONEOFF_WISH_ERROR'
  | 'ORDER_PLACED_BY_TECHNICAL_ERROR'
  | 'ORDER_ROUTING'
  | 'OTHER'
  | 'PICKUP_NOW_ITEM_NOT_PICKED_UP'
  | 'POOR_QUALITY'
  | 'PREFER_NOT_TO_SAY'
  | 'PREORDER_NOT_FULFILLED'
  | 'PRESALE_TIMELINE_CLOSED'
  | 'PRICE_MATCH'
  | 'PRODUCT_LISTING_MISSING_INFO'
  | 'PRODUCT_MALFUNCTION'
  | 'RECEIVED_NOTE_FROM_MERCHANT'
  | 'RECEIVED_WRONG_ITEM'
  | 'REPLACEMENT_NEVER_RECEIVED'
  | 'RIGHT_OF_WITHDRAWAL'
  | 'SHIPPING_TAKING_TOO_LONG'
  | 'SHOPIFY_MERCHANT_CANCELLED'
  | 'STORE_SENT_THE_WRONG_SIZE'
  | 'STORE_UPLOADED_INVENTORY_RETURN'
  | 'SUSPECTED_FRAUD'
  | 'UNABLE_TO_SHIP'
  | 'USER_CANCELLED_ORDER'
  | 'USER_CANCEL_CHANGE_PAYMENT'
  | 'USER_ENTERED_INVALID_ADDRESS'
  | 'USER_ENTERED_WRONG_ADDRESS'
  | 'USER_NO_LONGER_WANTS_ITEM'
  | 'USER_PLACED_ORDER_BY_MISTAKE'
  | 'WISHBLUE_EPC_LATE_FULFILLMENT'
  | 'WRONG_COLOR'
  | 'WRONG_ITEM';

export type RefundSource =
  | 'MERCHANT'
  | 'PAYMENT_PROVIDER'
  | 'USER'
  | 'WISH';

export type RefundType =
  | 'FULL'
  | 'PARTIAL';

export type Region = {
  __typename?: 'Region';
  code: Scalars['String'];
  country: Country;
  name: Scalars['String'];
};

export type RegionShippingInput = {
  additionalPrice?: InputMaybe<CurrencyInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<CurrencyInput>;
  regionCode: Scalars['String'];
  timeToDoor?: InputMaybe<Scalars['Int']>;
};

export type RegionShippingSchema = {
  __typename?: 'RegionShippingSchema';
  additionalPrice?: Maybe<CurrencyValue>;
  enabled?: Maybe<Scalars['Boolean']>;
  price?: Maybe<CurrencyValue>;
  region: Region;
  timeToDoor?: Maybe<Scalars['Int']>;
};

export type RegulatorAction =
  | 'UPSERT';

export type RegulatorReportAction =
  | 'CREATE';

export type RegulatorReportReason =
  | 'DANGEROUS_OR_UNSAFE'
  | 'HAZARDOUS'
  | 'OTHER_NON_COMPLIANCE'
  | 'POLICY_VIOLATION';

export type RegulatorSchema = {
  __typename?: 'RegulatorSchema';
  country: Country;
  emailAddress: Scalars['String'];
  id: Scalars['ObjectIdType'];
  name: Scalars['String'];
  organization: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  website: Scalars['String'];
};

export type RejectReturn = {
  __typename?: 'RejectReturn';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RejectReturnInput = {
  message: Scalars['String'];
  orderId: Scalars['ObjectIdType'];
  otherReasonExplanation?: InputMaybe<Scalars['String']>;
  rejectReason: ReturnRequestRejectReason;
  supportingDocument?: InputMaybe<Scalars['String']>;
};

export type RejectTrademarkInput = {
  id: Scalars['ObjectIdType'];
  rejectionReason?: InputMaybe<Scalars['String']>;
};

export type RejectTrademarksAndBrandInfo = {
  __typename?: 'RejectTrademarksAndBrandInfo';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RejectTrademarksAndBrandInfoInput = {
  brandInfoId: Scalars['ObjectIdType'];
  brandInfoRejectionReason?: InputMaybe<Scalars['String']>;
  trademarks: Array<RejectTrademarkInput>;
};

export type ReleasePayoutRequest = {
  __typename?: 'ReleasePayoutRequest';
  canResetPayout?: Maybe<Scalars['Boolean']>;
  releasePaymentRequestId?: Maybe<Scalars['String']>;
};

export type RemoveCountFromMplus = {
  __typename?: 'RemoveCountFromMplus';
  ok?: Maybe<Scalars['Boolean']>;
  removedIds: Array<Scalars['ObjectIdType']>;
};

export type RemoveCountFromMplusInput = {
  count?: InputMaybe<Scalars['Int']>;
};

export type RemoveFromPlus = {
  __typename?: 'RemoveFromPlus';
  ok?: Maybe<Scalars['Boolean']>;
};

export type RemoveFromPlusInput = {
  merchantIds: Array<Scalars['ObjectIdType']>;
};

export type RemoveNotifier = {
  __typename?: 'RemoveNotifier';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RemoveNotifierInput = {
  notifierId: Scalars['ObjectIdType'];
};

export type RemoveProduct = {
  __typename?: 'RemoveProduct';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RemoveProductInput = {
  productId: Scalars['ObjectIdType'];
};

export type RemoveShippingProfile = {
  __typename?: 'RemoveShippingProfile';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RemoveVideo = {
  __typename?: 'RemoveVideo';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RemoveVideoInput = {
  productId: Scalars['ObjectIdType'];
  videoId: Scalars['ObjectIdType'];
};

export type ReplyInfractionInput = {
  message: Scalars['String'];
  uploadFiles?: InputMaybe<Array<FileInput>>;
};

export type ReportAbuseHub = {
  __typename?: 'ReportAbuseHub';
  regulator?: Maybe<RegulatorSchema>;
  regulatorReportReasons?: Maybe<Array<RegulatorReportReason>>;
};


export type ReportAbuseHubRegulatorArgs = {
  emailAddress: Scalars['String'];
};

export type ReportAbuseMutations = {
  __typename?: 'ReportAbuseMutations';
  upsertRegulator?: Maybe<UpsertRegulator>;
  upsertRegulatorReport?: Maybe<UpsertRegulatorReport>;
};


export type ReportAbuseMutationsUpsertRegulatorArgs = {
  input?: InputMaybe<UpsertRegulatorInput>;
};


export type ReportAbuseMutationsUpsertRegulatorReportArgs = {
  input?: InputMaybe<UpsertRegulatorReportInput>;
};

export type ReportOrderInput = {
  mTransactionId: Scalars['ObjectIdType'];
  reportExplanation: Scalars['String'];
  reportReasons: Array<ReportOrderReasons>;
};

export type ReportOrderMutation = {
  __typename?: 'ReportOrderMutation';
  errMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ReportOrderReasons =
  | 'OTHER'
  | 'POTENTIAL_SAFETY_THREAT'
  | 'SUSPECTED_ILLEGAL_ACTIVITY'
  | 'SUSPICIOUS_ORDER';

export type RequestPaymentInput = {
  agreementFiles?: InputMaybe<Array<FileInput>>;
  idFiles?: InputMaybe<Array<FileInput>>;
};

export type ResetPasswordMutation = {
  __typename?: 'ResetPasswordMutation';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ResetPasswordMutationInput = {
  comparePassword: Scalars['String'];
  rawPassword: Scalars['String'];
  token: Scalars['String'];
  username: Scalars['String'];
};

export type ResetReleasePaymentRequestInput = {
  requestId: Scalars['ObjectIdType'];
};

export type ResetReleasePaymentRequestMutation = {
  __typename?: 'ResetReleasePaymentRequestMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ResponsiblePersonAction =
  | 'APPROVE'
  | 'CREATE'
  | 'DELETE'
  | 'REJECT'
  | 'UPDATE';

export type ResponsiblePersonAddressSchema = {
  __typename?: 'ResponsiblePersonAddressSchema';
  city: Scalars['String'];
  country: EuComplianceResponsiblePersonCountriesAndRegions;
  countryCode: EuComplianceResponsiblePersonCountriesAndRegionsCode;
  county?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress1: Scalars['String'];
  streetAddress2?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type ResponsiblePersonFieldType =
  | 'RISK_SCORE';

export type ResponsiblePersonRejectReasonSchema = {
  __typename?: 'ResponsiblePersonRejectReasonSchema';
  reason: ResponsiblePersonRejectionReason;
  text: Scalars['String'];
};

export type ResponsiblePersonRejectionReason =
  | 'INVALID_ADDRESS'
  | 'INVALID_NAME'
  | 'INVALID_PHONE_AND_EMAIL';

export type ResponsiblePersonSchema = {
  __typename?: 'ResponsiblePersonSchema';
  address?: Maybe<ResponsiblePersonAddressSchema>;
  compliance?: Maybe<LinkProductComplianceType>;
  email: Scalars['String'];
  id: Scalars['ObjectIdType'];
  merchant: MerchantSchema;
  merchantId: Scalars['ObjectIdType'];
  rejectReason?: Maybe<ResponsiblePersonRejectionReason>;
  status?: Maybe<ResponsiblePersonStatus>;
};

export type ResponsiblePersonSort = {
  field: ResponsiblePersonFieldType;
  order: SortOrderType;
};

export type ResponsiblePersonStatus =
  | 'ADMIN_APPROVED'
  | 'COMPLETE'
  | 'DELETED'
  | 'INREVIEW'
  | 'REJECTED';

export type ResponsiblePersonUpsertInput = {
  action: ResponsiblePersonAction;
  address?: InputMaybe<EuComplianceAddressInput>;
  compliance: LinkProductComplianceType;
  email?: InputMaybe<Scalars['String']>;
  rejectReason?: InputMaybe<ResponsiblePersonRejectionReason>;
  responsiblePersonId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type RestrictedProductCategory =
  | 'BEVERAGES'
  | 'CHILD_CARSEAT'
  | 'CHILD_HARNESS'
  | 'FOOD'
  | 'OTC_MEDICATION'
  | 'PET_FOOD'
  | 'PLANT_AND_PLANT_SEEDS'
  | 'SEATBELTS'
  | 'UNVERIFIED_WARRANTIES'
  | 'VITAMINS_AND_SUPPLEMENTS';

export type RestrictedProductCountryCode =
  | 'AR'
  | 'AT'
  | 'AU'
  | 'BE'
  | 'BG'
  | 'BR'
  | 'CA'
  | 'CH'
  | 'CO'
  | 'CZ'
  | 'DE'
  | 'DK'
  | 'EE'
  | 'ES'
  | 'FI'
  | 'FR'
  | 'GB'
  | 'GR'
  | 'HR'
  | 'HU'
  | 'IE'
  | 'IT'
  | 'JP'
  | 'KR'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'MT'
  | 'MX'
  | 'NL'
  | 'PL'
  | 'PT'
  | 'RO'
  | 'SE'
  | 'SI'
  | 'SK'
  | 'TR'
  | 'UA'
  | 'US';

export type RestrictedProductMutations = {
  __typename?: 'RestrictedProductMutations';
  upsertRestrictedProductRequest?: Maybe<UpsertRestrictedProductRequest>;
};


export type RestrictedProductMutationsUpsertRestrictedProductRequestArgs = {
  input?: InputMaybe<RestrictedProductRequestUpsertInput>;
};

export type RestrictedProductRegion = {
  __typename?: 'RestrictedProductRegion';
  isACountry: Scalars['Boolean'];
  regionCode: RestrictedProductRegionCode;
  regionName: Scalars['String'];
};

export type RestrictedProductRegionCode =
  | 'AU'
  | 'EU'
  | 'JP'
  | 'KR'
  | 'LA'
  | 'NA'
  | 'TR';

export type RestrictedProductRegionToCategory = {
  __typename?: 'RestrictedProductRegionToCategory';
  categories: Array<RestrictedProductCategory>;
  regionCode: RestrictedProductRegionCode;
};

export type RestrictedProductRequestAction =
  | 'APPROVE'
  | 'BATCH_APPROVE'
  | 'BATCH_REJECT'
  | 'CREATE'
  | 'REJECT';

export type RestrictedProductRequestFieldType =
  | 'formattedCreateTime'
  | 'merchantId';

export type RestrictedProductRequestSchema = {
  __typename?: 'RestrictedProductRequestSchema';
  businessEntityName?: Maybe<Scalars['String']>;
  decisionAdminId?: Maybe<Scalars['ObjectIdType']>;
  decisionDate?: Maybe<Datetime>;
  evidenceIds?: Maybe<Array<Scalars['ObjectIdType']>>;
  id: Scalars['ObjectIdType'];
  ipAddress?: Maybe<Scalars['String']>;
  ipAddressCountry?: Maybe<Country>;
  legalRepName?: Maybe<Scalars['String']>;
  legalRepTitle?: Maybe<Scalars['String']>;
  licenseExpiryDate?: Maybe<Datetime>;
  merchant?: Maybe<MerchantSchema>;
  merchantId: Scalars['ObjectIdType'];
  merchantWarrantyDoc?: Maybe<MerchantFileSchema>;
  productCategory: RestrictedProductCategory;
  region: RestrictedProductRegion;
  rejectedReason?: Maybe<Scalars['String']>;
  requestDate?: Maybe<Datetime>;
  state: RestrictedProductRequestState;
};

export type RestrictedProductRequestSort = {
  field: RestrictedProductRequestFieldType;
  order: SortOrderType;
};

export type RestrictedProductRequestState =
  | 'APPROVED'
  | 'AWAITING_ADMIN'
  | 'AWAITING_MERCHANT'
  | 'REJECTED';

export type RestrictedProductRequestUpsertInput = {
  action: RestrictedProductRequestAction;
  businessEntityName?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<RestrictedProductCategory>>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  ids?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  legalRepName?: InputMaybe<Scalars['String']>;
  legalRepTitle?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<RestrictedProductRegionCode>;
  rejectedReason?: InputMaybe<Scalars['String']>;
  warrantyFile?: InputMaybe<FileInput>;
  warrantyFileUrl?: InputMaybe<Scalars['String']>;
  warrantyFilename?: InputMaybe<Scalars['String']>;
};

export type RestrictedProductSchema = {
  __typename?: 'RestrictedProductSchema';
  allRegionRestrictedProductCategories?: Maybe<Array<RestrictedProductRegionToCategory>>;
  allRestrictedProductCategories?: Maybe<Array<RestrictedProductCategory>>;
  restrictedProductCategories?: Maybe<Array<RestrictedProductCategory>>;
  restrictedProductCountryCodes?: Maybe<Array<RestrictedProductCountryCode>>;
  restrictedProductEuropeCountries?: Maybe<Array<Country>>;
  restrictedProductRegions?: Maybe<Array<RestrictedProductRegion>>;
  restrictedProductRequests?: Maybe<Array<RestrictedProductRequestSchema>>;
  restrictedProductRequestsCount?: Maybe<Scalars['Int']>;
};


export type RestrictedProductSchemaRestrictedProductCategoriesArgs = {
  region: RestrictedProductRegionCode;
};


export type RestrictedProductSchemaRestrictedProductRequestsArgs = {
  categories?: InputMaybe<Array<RestrictedProductCategory>>;
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  regions?: InputMaybe<Array<RestrictedProductRegionCode>>;
  sort?: InputMaybe<RestrictedProductRequestSort>;
  states?: InputMaybe<Array<RestrictedProductRequestState>>;
};


export type RestrictedProductSchemaRestrictedProductRequestsCountArgs = {
  categories?: InputMaybe<Array<RestrictedProductCategory>>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  regions?: InputMaybe<Array<RestrictedProductRegionCode>>;
  states?: InputMaybe<Array<RestrictedProductRequestState>>;
};

export type ReturnDetailsSchema = {
  __typename?: 'ReturnDetailsSchema';
  actualDeliverDays?: Maybe<Timedelta>;
  id?: Maybe<Scalars['ObjectIdType']>;
  returnSlipFilename?: Maybe<Scalars['String']>;
  returnSlipId?: Maybe<Scalars['Int']>;
  returnSlipUrl?: Maybe<Scalars['String']>;
  shippingLabelFilename?: Maybe<Scalars['String']>;
  shippingLabelUrl?: Maybe<Scalars['String']>;
  shippingProvider?: Maybe<ShippingProviderSchema>;
  trackingId?: Maybe<Scalars['ObjectIdType']>;
  trackingUrl?: Maybe<Scalars['String']>;
  warehouseConfirmedTime?: Maybe<Datetime>;
};

export type ReturnInformationSchema = {
  __typename?: 'ReturnInformationSchema';
  policyType?: Maybe<Scalars['String']>;
  returnDetails?: Maybe<ReturnDetailsSchema>;
  returnRequest?: Maybe<ReturnRequestSchema>;
};

export type ReturnRequestAction =
  | 'AUTHORIZE'
  | 'CANCEL'
  | 'CLAIM'
  | 'CLOSE'
  | 'CONTACT'
  | 'CREATE'
  | 'REFUND'
  | 'REJECT'
  | 'REQUIRE_DELIVERY_VERIFICATION'
  | 'VERIFY_RETURN';

export type ReturnRequestActionSchema = {
  __typename?: 'ReturnRequestActionSchema';
  action: ReturnRequestAction;
};

export type ReturnRequestCancelReason =
  | 'BUYER_ACCEPT_EXCHANGE'
  | 'BUYER_ACCEPT_RESHIP'
  | 'BUYER_INACTIVITY'
  | 'BUYER_NO_LONGER_HAS_AN_ISSUE'
  | 'OTHER';

export type ReturnRequestClaimReason =
  | 'BUYER_FRAUDULENT'
  | 'BUYER_UNFAIR'
  | 'OTHER';

export type ReturnRequestContactBuyerReason =
  | 'OFFER_EXCHANGE'
  | 'OFFER_RESHIP'
  | 'OTHER'
  | 'PROVIDE_PRODUCT_INSTRUCTION'
  | 'UNDERSTAND_FURTHER';

export type ReturnRequestRefundReason =
  | 'BLUE_ADMIN_REFUND'
  | 'BLUE_DELIVERY_NOT_DELIVERED'
  | 'BLUE_FUSION_IN_TRANSIT_LOST'
  | 'BLUE_FUSION_SENT_TO_WRONG_STORE'
  | 'BLUE_FUSION_STORE_LOST'
  | 'BLUE_FUSION_STORE_NOT_SCAN_IN'
  | 'BLUE_PROGRAM_DEPRECATION'
  | 'BLUE_STORE_OUT_OF_STOCK'
  | 'BLUE_STORE_QUIT'
  | 'CB_USER_CANCELLED_ORDER'
  | 'CIRCULAR_ROUTED_UNFULFILLED'
  | 'CLEARING_LIMBO'
  | 'COMMERCEHUB_BAD_ADDRESS'
  | 'COMMERCEHUB_BAD_SKU'
  | 'COMMERCEHUB_CANCELLED_AT_MERCHANTS_REQUEST'
  | 'COMMERCEHUB_OTHER'
  | 'COMMERCEHUB_OUT_OF_STOCK'
  | 'COMMERCEHUB_SUPPLIER_DETECTED_FRAUD'
  | 'CONFIRMED_FUSION_ITEM_NOT_PICKED_UP'
  | 'CONSUMER_FRAUD'
  | 'CONTENT_POLICY_VIOLATION_CANCELLATION'
  | 'CS_REFUND_FOR_USER_CANCEL'
  | 'CUSTOMER_MANUFACTURER_COMPLAINT'
  | 'CUSTOMER_REQUEST'
  | 'DECLINED_GIFT'
  | 'DOES_FIT_WRONG_SIZE'
  | 'DOES_NOT_FIT'
  | 'DOES_NOT_FIT_INCORRECT_SIZE'
  | 'DOES_NOT_FIT_USERS_FAULT'
  | 'DOES_NOT_FIT_WRONG_SIZE'
  | 'EMPTY_PACKAGE'
  | 'EPC_LAST_MILE_CARRIERS_UNABLE_TO_SHIP'
  | 'EPC_OVERSIZE'
  | 'EPC_OVERVALUE'
  | 'EPC_OVERWEIGHT'
  | 'EXPIRED_GIFT'
  | 'EXPIRED_GROUP_BUY'
  | 'FAKE_OR_COUNTERFEIT'
  | 'FBS_STORE_QUIT'
  | 'FBW_FAILED_TO_FULFILL_DUE_TO_CARRIER_RETURN'
  | 'FBW_WAREHOUSE_FAILED_TO_FULFILL'
  | 'FRAUDULENT_ACTIVITY'
  | 'INCOMPLETE_ORDER'
  | 'INCORRECT_QUANTITY_OF_ITEMS'
  | 'INSUFFICIENT_INVENTORY'
  | 'INVALID_ADDRESS'
  | 'IN_GRACE_PERIOD_DELAY_CANCEL'
  | 'ITEM_DAMAGED'
  | 'ITEM_DID_NOT_MEET_EXPECTATIONS'
  | 'ITEM_DOES_NOT_FIT'
  | 'ITEM_DOES_NOT_MATCH_LISTING'
  | 'ITEM_DOES_NOT_WORK_AS_DESCRIBED'
  | 'ITEM_HELD_AT_CUSTOMS'
  | 'ITEM_IS_COUNTERFEIT'
  | 'ITEM_IS_DAMAGED'
  | 'ITEM_IS_DANGEROUS'
  | 'ITEM_IS_POOR_QUALITY'
  | 'ITEM_MARKED_DELIVERED_BUT_DID_NOT_ARRIVE'
  | 'ITEM_MARKED_DELIVERED_NOT_ALL_ITEMS_ARRIVED'
  | 'ITEM_NEVER_ARRIVED'
  | 'ITEM_RETURNED_TO_SENDER'
  | 'LATE_OR_MISSING'
  | 'LIMBO_ORDER_UNFULFILLED'
  | 'MERCHANT_FAILED_TO_FULFILL'
  | 'MERCHANT_OUT_OF_STOCK'
  | 'MERCHANT_REPORTED_BUYER_FRAUD'
  | 'MERCHANT_REPORTED_ORDER'
  | 'MERCHANT_SENT_TO_WRONG_ADDRESS'
  | 'MISLEADING_LISTING'
  | 'MISSING_ITEM_OR_PARTS'
  | 'NOT_QUALIFIED_SHIPPING_PROVIDER'
  | 'ONEOFF_WISH_ERROR'
  | 'ORDER_PLACED_BY_TECHNICAL_ERROR'
  | 'ORDER_ROUTING'
  | 'OTHER'
  | 'PICKUP_NOW_ITEM_NOT_PICKED_UP'
  | 'POOR_QUALITY'
  | 'PREFER_NOT_TO_SAY'
  | 'PREORDER_NOT_FULFILLED'
  | 'PRESALE_TIMELINE_CLOSED'
  | 'PRICE_MATCH'
  | 'PRODUCT_LISTING_MISSING_INFO'
  | 'PRODUCT_MALFUNCTION'
  | 'RECEIVED_NOTE_FROM_MERCHANT'
  | 'RECEIVED_WRONG_ITEM'
  | 'REPLACEMENT_NEVER_RECEIVED'
  | 'RIGHT_OF_WITHDRAWAL'
  | 'SHIPPING_TAKING_TOO_LONG'
  | 'SHOPIFY_MERCHANT_CANCELLED'
  | 'STORE_SENT_THE_WRONG_SIZE'
  | 'STORE_UPLOADED_INVENTORY_RETURN'
  | 'SUSPECTED_FRAUD'
  | 'UNABLE_TO_SHIP'
  | 'USER_CANCELLED_ORDER'
  | 'USER_CANCEL_CHANGE_PAYMENT'
  | 'USER_ENTERED_INVALID_ADDRESS'
  | 'USER_ENTERED_WRONG_ADDRESS'
  | 'USER_NO_LONGER_WANTS_ITEM'
  | 'USER_PLACED_ORDER_BY_MISTAKE'
  | 'WISHBLUE_EPC_LATE_FULFILLMENT'
  | 'WRONG_COLOR'
  | 'WRONG_ITEM';

export type ReturnRequestRejectReason =
  | 'LATE_RETURN'
  | 'OTHER'
  | 'PRODUCT_DAMAGED'
  | 'WRONG_PRODUCT';

export type ReturnRequestSchema = {
  __typename?: 'ReturnRequestSchema';
  actions?: Maybe<Array<ReturnRequestActionSchema>>;
  authType: Scalars['String'];
  availableReturnCarriers: Array<ShippingProviderSchema>;
  cancellationReason?: Maybe<ReturnRequestCancelReason>;
  id?: Maybe<Scalars['ObjectIdType']>;
  isToMerchantWarehouse: Scalars['Boolean'];
  lastAction: ReturnRequestActionSchema;
  merchantAuthorizedTime?: Maybe<Datetime>;
  returnWarehouseAddress?: Maybe<AddressSchema>;
  shippingLabelSentDate?: Maybe<Datetime>;
  state: ReturnRequestState;
  statusToDisplay: Scalars['String'];
};

export type ReturnRequestState =
  | 'APPEAL_CS'
  | 'AWAITING_MERCHANT'
  | 'CANCELLED'
  | 'CONTACT_IN_PROGRESS'
  | 'LABEL_SENT'
  | 'REFUNDED'
  | 'REJECTED';

export type RevShareInfoSchema = {
  __typename?: 'RevShareInfoSchema';
  destRegion?: Maybe<RevShareRegion>;
  entityRegion?: Maybe<RevShareRegion>;
  isRevShareFromMerchant?: Maybe<Scalars['Boolean']>;
  productCategory?: Maybe<OrderRevShareProductCategory>;
  qualifiers: Array<RevShareQualifier>;
  sourceRegion?: Maybe<RevShareRegion>;
  wssTier?: Maybe<WssTier>;
};

export type RevShareQualifier =
  | 'CATEGORY_APPAREL_ACCESSORY'
  | 'CATEGORY_CLOTHING'
  | 'CATEGORY_ELECTRONICS'
  | 'CATEGORY_HOUSEHOLD'
  | 'CATEGORY_JEWELRY_AND_ACCESSORY'
  | 'CATEGORY_SEX_TOY'
  | 'CATEGORY_SHOES'
  | 'CATEGORY_WATCH'
  | 'DEST_EU'
  | 'DEST_NA'
  | 'ENTITY_EU'
  | 'ENTITY_NA'
  | 'IS_WISH_EXPRESS'
  | 'SOURCE_EU'
  | 'SOURCE_NA'
  | 'TIER_BAN'
  | 'TIER_BRONZE'
  | 'TIER_GOLD'
  | 'TIER_PLATINUM'
  | 'TIER_SILVER'
  | 'TIER_UNASSESSED';

export type RevShareRegion =
  | 'EU'
  | 'NA'
  | 'OTHER';

export type Reversal = {
  __typename?: 'Reversal';
  amount: CurrencyValue;
  id: Scalars['ObjectIdType'];
};

export type ReviewBankAccountDocument = {
  __typename?: 'ReviewBankAccountDocument';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ReviewBankAccountDocumentInput = {
  comment?: InputMaybe<Scalars['String']>;
  documentId: Scalars['ObjectIdType'];
  documentType: BankAccountDocumentType;
  merchantId: Scalars['ObjectIdType'];
  state: BankAccountVerificationStatus;
};

export type ReviewMerchantTaxIdentificationInput = {
  merchantTaxIdentificationId: Scalars['ObjectIdType'];
  rejectedReason?: InputMaybe<MerchantTaxIdentificationRejectReson>;
  reviewAction: MerchantTaxIdentificationReviewAction;
};

export type ReviewMerchantTaxIdentificationMutation = {
  __typename?: 'ReviewMerchantTaxIdentificationMutation';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type RoleSchema = {
  __typename?: 'RoleSchema';
  description?: Maybe<Scalars['String']>;
  id: RoleType;
  name: Scalars['String'];
};

export type RoleType =
  | 'ACCENTURE_DETAIL_LEAD'
  | 'ACCENTURE_DETAIL_WORKER'
  | 'ACCENTURE_FRAUD_LEAD'
  | 'ACCENTURE_FRAUD_WORKER'
  | 'ACCENTURE_INFRACTION_WORKER'
  | 'ACCENTURE_TAGGER_LEAD'
  | 'ACCENTURE_TAGGER_WORKER'
  | 'ACCENTURE_WORKER'
  | 'ACCESS_CONTROL_MANAGER'
  | 'ADMIN'
  | 'ALORICA_LEAD'
  | 'ALORICA_WORKER'
  | 'BD'
  | 'BD_LEAD'
  | 'BOOST_DASHBOARD'
  | 'BRAND_PARTNER'
  | 'BRAND_PROTECTION_CONTRACTOR'
  | 'BRAND_PROTECTION_LEAD'
  | 'BRAND_PROTECTION_WORKER'
  | 'CN_ORG_MLE_MPS'
  | 'CONTRACTOR'
  | 'COURIER'
  | 'CS_ADMIN'
  | 'CS_REP_EXTERNAL'
  | 'CS_REP_INTERNAL'
  | 'CS_REP_INTERNAL_LEAD'
  | 'DEP_IT_ADMIN'
  | 'DEP_PRODUCT_API_USER'
  | 'EPC_SUPPORT'
  | 'EVERC_IPV_DETECTION_EXTERNAL_API'
  | 'FACTORY'
  | 'FACTORY_ACCOUNT_MANAGER'
  | 'FINANCE'
  | 'FRAUD_TEAM'
  | 'FRAUD_TEAM_LEAD'
  | 'INSURANCE_PROVIDER'
  | 'IN_HOUSE_TAGGER'
  | 'LANGUAGE_SPECIALIST'
  | 'LEGAL_TEAM'
  | 'LEGAL_TEAM_LEAD'
  | 'LOAN_PROVIDER'
  | 'LOGISTICS_TRACKING_ADMIN'
  | 'MERCHANT_LEAD'
  | 'MERCHANT_REVIEW'
  | 'MERCHANT_SUPPORT'
  | 'MERCHANT_SUPPORT_LEAD'
  | 'META_USER'
  | 'OUTSOURCED_MERCHANT_SUPPORT'
  | 'PARTNER'
  | 'PAYMENT_PROVIDER'
  | 'PENDING_USER'
  | 'QA'
  | 'REQUEST_INFO_USER'
  | 'SALES_REP'
  | 'SHIP_PROVIDER'
  | 'SHIP_TO_STORE_PARTNER'
  | 'STAGE_ADMIN'
  | 'STORE_USER'
  | 'SUB_USER'
  | 'SUPPLY_CHAIN'
  | 'SYSTEM_ACCOUNT'
  | 'TAGGER'
  | 'TAGGER_LEAD'
  | 'TASKUS_CS_LEAD'
  | 'TASKUS_CS_WORKER'
  | 'TASKUS_DETAIL_LEAD'
  | 'TASKUS_DETAIL_WORKER'
  | 'TASKUS_MC_LEAD'
  | 'TASKUS_MC_WORKER'
  | 'TASKUS_TAGGER_LEAD'
  | 'TASKUS_TAGGER_WORKER'
  | 'TELEPERFORMANCE_BOGOTA_LEAD'
  | 'TELEPERFORMANCE_BOGOTA_WORKER'
  | 'TELEPERFORMANCE_EGYPT_LEAD'
  | 'TELEPERFORMANCE_EGYPT_WORKER'
  | 'TELEPERFORMANCE_INDIA_LEAD'
  | 'TELEPERFORMANCE_INDIA_WORKER'
  | 'TELEPERFORMANCE_LEAD'
  | 'TELEPERFORMANCE_WORKER'
  | 'TEST_USER'
  | 'TRANSCOSMOS_LEAD'
  | 'TRANSCOSMOS_WORKER'
  | 'TRUSTED_TAGGER'
  | 'TRUST_SAFETY'
  | 'USER'
  | 'WAREHOUSE'
  | 'WAREHOUSE_OPERATOR'
  | 'WISHCHAIN'
  | 'WISHPOST'
  | 'WISHPOST_EXTERNAL_API_MANAGER'
  | 'WISH_BLUE_AMBASSADOR'
  | 'WISH_BLUE_OPERATOR'
  | 'WISH_EXPRESS_SUPPORT'
  | 'WISH_HR'
  | 'ZENDESK_SUPPORT';

export type RootMutation = {
  __typename?: 'RootMutation';
  analytics?: Maybe<AnalyticsServiceMutations>;
  announcements?: Maybe<AnnouncementMutations>;
  authentication?: Maybe<AuthenticationMutations>;
  brand?: Maybe<BrandMutations>;
  brandPartner?: Maybe<BrandPartnerMutations>;
  currentMerchant?: Maybe<MerchantMutation>;
  currentUser?: Maybe<UserMutation>;
  customerSupportTickets?: Maybe<CustomerSupportTicketMutations>;
  dsa?: Maybe<DsaMutations>;
  fulfillment: FulfillmentMutation;
  gating?: Maybe<MerchantUserGateMutations>;
  identity?: Maybe<IdentityMutations>;
  locale?: Maybe<LocaleMutations>;
  logistics?: Maybe<LogisticsMutations>;
  marketing?: Maybe<MarketingServiceMutations>;
  merchantIdentity?: Maybe<MerchantIdentityMutations>;
  merchantSafety?: Maybe<MerchantSafetyMutations>;
  mfp?: Maybe<MfpServiceMutations>;
  oneoffPayments?: Maybe<MerchantOneoffPaymentMutations>;
  payments?: Maybe<MerchantPaymentsMutation>;
  plus?: Maybe<PlusAdminServiceMutations>;
  policy?: Maybe<PolicyMutations>;
  policyPublic: PolicyPublicMutations;
  productCatalog: ProductCatalogMutations;
  sanctionScreening?: Maybe<SanctionScreeningMutations>;
  shippingProfileCollection: ShippingProfileMutations;
  tagging?: Maybe<TaggingMutations>;
  taxDashboard?: Maybe<TaxDashboardReviewMutations>;
  uploads?: Maybe<UploadMutations>;
  video?: Maybe<VideoMutations>;
  webhook?: Maybe<WebhookMutations>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  announcements: AnnouncementsService;
  authentication: AuthenticationServiceSchema;
  brand?: Maybe<BrandServiceSchema>;
  chrome?: Maybe<ChromeSchema>;
  cs?: Maybe<CustomerSupportServiceSchema>;
  currentBrandPartner?: Maybe<BrandPartnerInfoSchema>;
  currentCountry?: Maybe<Country>;
  currentLocale: Locale;
  currentMerchant?: Maybe<MerchantSchema>;
  currentProperLocale: Scalars['String'];
  currentUser?: Maybe<UserSchema>;
  dsa?: Maybe<DsaHub>;
  fulfillment?: Maybe<FulfillmentSchema>;
  identity?: Maybe<IdentityServiceSchema>;
  listingQualityInsights?: Maybe<ListingQualityInsightsSchema>;
  logistics?: Maybe<LogisticsSchema>;
  marketing?: Maybe<MarketingServiceSchema>;
  merchantEntity?: Maybe<MerchantEntitySchema>;
  merchantIdentity?: Maybe<MerchantIdentityServiceSchema>;
  merchantSafetyInfo?: Maybe<MerchantSafetySchema>;
  merchantTermsOfService: MerchantTermsOfServiceSchema;
  merchants?: Maybe<MerchantServiceSchema>;
  mfp?: Maybe<MfpServiceSchema>;
  notifications?: Maybe<NotificationsServiceSchema>;
  payableInfo?: Maybe<PayableInfoSchema>;
  payments?: Maybe<MerchantPaymentsService>;
  platformConstants?: Maybe<PlatformConstants>;
  policy?: Maybe<PolicySchema>;
  policyPublic?: Maybe<PolicyPublicSchema>;
  productCatalog?: Maybe<ProductCatalogSchema>;
  publicShippingProviderDocs?: Maybe<PublicShippingProviderDocs>;
  recentUsers?: Maybe<Array<UserSchema>>;
  shippingProfileCollection?: Maybe<ShippingProfileCollectionSchema>;
  storefront?: Maybe<StorefrontServiceSchema>;
  su?: Maybe<UserSchema>;
  tagging?: Maybe<TaggingServiceSchema>;
  taxDashboardInfo?: Maybe<TaxDashboardSchema>;
  taxonomy?: Maybe<TaxonomySchema>;
  tos: TosServiceSchema;
  webhook?: Maybe<WebhookSchema>;
};


export type RootQueryMerchantEntityArgs = {
  entityId?: InputMaybe<Scalars['String']>;
  merchantId?: InputMaybe<Scalars['String']>;
};

export type SalesPerformanceStats = {
  __typename?: 'SalesPerformanceStats';
  addToCart?: Maybe<Scalars['Int']>;
  addToCartConversion?: Maybe<Scalars['Float']>;
  checkoutConversion?: Maybe<Scalars['Float']>;
  endDate: Datetime;
  gmv: CurrencyValue;
  orders?: Maybe<Scalars['Int']>;
  productImpressions?: Maybe<Scalars['BigInt']>;
  startDate: Datetime;
};

export type SalesforceLeadInfo = {
  __typename?: 'SalesforceLeadInfo';
  company?: Maybe<Scalars['String']>;
  country: Country;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  leadSource: SalesforceLeadSource;
  valid: Scalars['Boolean'];
};

export type SalesforceLeadSource =
  | 'Lead_Questionnaire'
  | 'MMS_Lead_Questionnaire'
  | 'NOT_IMPLEMENTED';

export type SanctionScreeningHitStateType =
  | 'ESCALATE'
  | 'FALSE_HIT'
  | 'NEWLY_IDENTITY_VERIFIED'
  | 'NEWLY_IDENTITY_VERIFIED_EEA'
  | 'TRUE_HIT'
  | 'UNSET';

export type SanctionScreeningMutations = {
  __typename?: 'SanctionScreeningMutations';
  bulkReview?: Maybe<BulkReviewMutation>;
};


export type SanctionScreeningMutationsBulkReviewArgs = {
  input: BulkReviewInput;
};

export type ScheduledAddBudgetSchema = {
  __typename?: 'ScheduledAddBudgetSchema';
  amount: CurrencyValue;
  days: Array<Scalars['Int']>;
  enabled: Scalars['Boolean'];
};

export type ScreenCoordinates = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type SelectWpsShippingOptionInput = {
  additionalServiceOptions?: InputMaybe<Array<WpsAvailableServices>>;
  orderId: Scalars['ObjectIdType'];
  shippingOptionId: Scalars['String'];
};

export type SelectWpsShippingOptionMutation = {
  __typename?: 'SelectWPSShippingOptionMutation';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  providerId?: Maybe<Scalars['Int']>;
  trackingId?: Maybe<Scalars['String']>;
  wpsShipmentId?: Maybe<Scalars['String']>;
};

export type SellerIdentityBusinessInfo = {
  regBusinessName: Scalars['String'];
  regBusinessNum: Scalars['String'];
};

export type SellerIdentityBusinessInfoIndividual = {
  birthDate: DatetimeInput;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: InputMaybe<Scalars['String']>;
};

export type SellerIdentityBusinessLocation = {
  baCity: Scalars['String'];
  baCountry: CountryCode;
  baState: Scalars['String'];
  baStreetAddress1: Scalars['String'];
  baStreetAddress2?: InputMaybe<Scalars['String']>;
  baZipcode: Scalars['String'];
  countryCodeDomicile: CountryCode;
};

export type SellerIdentityBusinessProof = {
  imageListStr: Scalars['JSONString'];
  layoutTag?: InputMaybe<Scalars['String']>;
  proofId?: InputMaybe<Scalars['String']>;
  proofOfBizDocType: BusinessDocTypes;
  proofOfBizExpirationDate?: InputMaybe<DatetimeInput>;
};

export type SellerIdentityBusinessTaxInfo = {
  businessTaxNumber?: InputMaybe<Scalars['String']>;
};

export type SellerIdentityBusinessTaxInfoIndividual = {
  businessTaxNumber?: InputMaybe<Scalars['String']>;
};

export type SellerIdentityCnBusinessInfo = {
  regBusinessName: Scalars['String'];
  regBusinessNum: Scalars['String'];
};

export type SellerIdentityCnBusinessLocation = {
  baCity: Scalars['String'];
  baCountry: CountryCode;
  baState: Scalars['String'];
  baStreetAddress1: Scalars['String'];
  baZipcode: Scalars['String'];
};

export type SellerIdentityCnBusinessProof = {
  imageListStr: Scalars['JSONString'];
  proofOfBizDocType: BusinessDocTypes;
  proofOfBizExpirationDate?: InputMaybe<DatetimeInput>;
};

export type SellerIdentityCnIdProof = {
  backOfImageListStr: Scalars['JSONString'];
  frontOfImageListStr: Scalars['JSONString'];
  idNumber: Scalars['String'];
  proofOfIdDocType: IdDocTypes;
  proofOfIdExpirationDate?: InputMaybe<DatetimeInput>;
  selfieImageListStr: Scalars['JSONString'];
  wishValidationCode: Scalars['String'];
};

export type SellerIdentityCnSetContactInfoInput = {
  businessLocation: SellerIdentityCnBusinessLocation;
  extraInfo?: InputMaybe<SellerIdentityCnExtraInfo>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type SellerIdentityCnSetContactInfoMutation = {
  __typename?: 'SellerIdentityCNSetContactInfoMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SellerIdentityCnSetProofOfBizIdentityInput = {
  businessInfo: SellerIdentityCnBusinessInfo;
  businessProof: SellerIdentityCnBusinessProof;
  entityType: EntityTypes;
  idProof: SellerIdentityCnIdProof;
  legalBizRepName: Scalars['String'];
};

export type SellerIdentityCnSetProofOfBizIdentityMutation = {
  __typename?: 'SellerIdentityCNSetProofOfBizIdentityMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SellerIdentityCnSetProofOfIndividualIdentityInput = {
  entityType: EntityTypes;
  idProof: SellerIdentityCnIdProof;
};

export type SellerIdentityCnSetProofOfIndividualIdentityMutation = {
  __typename?: 'SellerIdentityCNSetProofOfIndividualIdentityMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SellerIdentityCnVerificationMutations = {
  __typename?: 'SellerIdentityCNVerificationMutations';
  setContactInfo?: Maybe<SellerIdentityCnSetContactInfoMutation>;
  setProofOfIdentityBiz?: Maybe<SellerIdentityCnSetProofOfBizIdentityMutation>;
  setProofOfIdentityIndividual?: Maybe<SellerIdentityCnSetProofOfIndividualIdentityMutation>;
};


export type SellerIdentityCnVerificationMutationsSetContactInfoArgs = {
  input: SellerIdentityCnSetContactInfoInput;
};


export type SellerIdentityCnVerificationMutationsSetProofOfIdentityBizArgs = {
  input: SellerIdentityCnSetProofOfBizIdentityInput;
};


export type SellerIdentityCnVerificationMutationsSetProofOfIdentityIndividualArgs = {
  input: SellerIdentityCnSetProofOfIndividualIdentityInput;
};

export type SellerIdentityCnExtraInfo = {
  isReseller?: InputMaybe<Scalars['Boolean']>;
};

export type SellerIdentityExtraInfo = {
  isReseller?: InputMaybe<Scalars['Boolean']>;
};

export type SellerIdentityGetStartedMutation = {
  __typename?: 'SellerIdentityGetStartedMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SellerIdentityIdProof = {
  backOfImageListStr: Scalars['JSONString'];
  frontOfImageListStr: Scalars['JSONString'];
  idNumber: Scalars['String'];
  layoutTag?: InputMaybe<Scalars['String']>;
  proofOfIdDocType: IdDocTypes;
  proofOfIdExpirationDate?: InputMaybe<DatetimeInput>;
  selfieImageListStr: Scalars['JSONString'];
};

export type SellerIdentityLegalBizRep = {
  birthDate?: InputMaybe<DatetimeInput>;
  firstName: Scalars['String'];
  isLegalRepAndConsentToElectronicSig: Scalars['Boolean'];
  lastName: Scalars['String'];
  middleName?: InputMaybe<Scalars['String']>;
};

export type SellerIdentitySetContactInfoInput = {
  businessLocation: SellerIdentityBusinessLocation;
  extraInfo?: InputMaybe<SellerIdentityExtraInfo>;
};

export type SellerIdentitySetContactInfoMutation = {
  __typename?: 'SellerIdentitySetContactInfoMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SellerIdentitySetProofOfBizIdentityInput = {
  businessInfo: SellerIdentityBusinessInfo;
  businessProof: Array<SellerIdentityBusinessProof>;
  businessTax?: InputMaybe<SellerIdentityBusinessTaxInfo>;
  entityType: EntityTypes;
  idProof: Array<SellerIdentityIdProof>;
  legalBizRep: SellerIdentityLegalBizRep;
};

export type SellerIdentitySetProofOfBizIdentityMutation = {
  __typename?: 'SellerIdentitySetProofOfBizIdentityMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SellerIdentitySetProofOfIndividualIdentityInput = {
  businessInfo: SellerIdentityBusinessInfoIndividual;
  businessProof: Array<SellerIdentityBusinessProof>;
  businessTax?: InputMaybe<SellerIdentityBusinessTaxInfoIndividual>;
  entityType: EntityTypes;
  idProof: Array<SellerIdentityIdProof>;
};

export type SellerIdentitySetProofOfIndividualIdentityMutation = {
  __typename?: 'SellerIdentitySetProofOfIndividualIdentityMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SellerIdentitySetVerificationFlowInput = {
  verificationFlowType: VerificationFlowTypes;
};

export type SellerIdentitySetVerificationFlowMutation = {
  __typename?: 'SellerIdentitySetVerificationFlowMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SellerIdentityVerificationMutations = {
  __typename?: 'SellerIdentityVerificationMutations';
  setContactInfo?: Maybe<SellerIdentitySetContactInfoMutation>;
  setGettingStarted?: Maybe<SellerIdentityGetStartedMutation>;
  setProofOfIdentityBiz?: Maybe<SellerIdentitySetProofOfBizIdentityMutation>;
  setProofOfIdentityIndividual?: Maybe<SellerIdentitySetProofOfIndividualIdentityMutation>;
  setVerificationFlow?: Maybe<SellerIdentitySetVerificationFlowMutation>;
};


export type SellerIdentityVerificationMutationsSetContactInfoArgs = {
  input: SellerIdentitySetContactInfoInput;
};


export type SellerIdentityVerificationMutationsSetProofOfIdentityBizArgs = {
  input: SellerIdentitySetProofOfBizIdentityInput;
};


export type SellerIdentityVerificationMutationsSetProofOfIdentityIndividualArgs = {
  input: SellerIdentitySetProofOfIndividualIdentityInput;
};


export type SellerIdentityVerificationMutationsSetVerificationFlowArgs = {
  input: SellerIdentitySetVerificationFlowInput;
};

export type SellerProfileCountryOption = {
  __typename?: 'SellerProfileCountryOption';
  countryCode: Scalars['String'];
  countryName: Scalars['String'];
  regionList?: Maybe<Array<SellerProfileRegionInformation>>;
};

export type SellerProfileRegionConstants = {
  __typename?: 'SellerProfileRegionConstants';
  countryOptions: Array<SellerProfileCountryOption>;
  genericCountryOptions: Scalars['GenericScalar'];
};

export type SellerProfileRegionInformation = {
  __typename?: 'SellerProfileRegionInformation';
  cityNames?: Maybe<Array<Scalars['String']>>;
  regionName: Scalars['String'];
};

export type SellerProfileVerificationDocType =
  | 'articles_of_incorporation'
  | 'business_license'
  | 'certificate_of_incorporation'
  | 'citizenship_card'
  | 'driver_license'
  | 'national_id'
  | 'partnership_agreement'
  | 'passport'
  | 'permanent_resident_card'
  | 'recent_business_returns'
  | 'social_security_card'
  | 'state_id'
  | 'vat_registration_certificate';

export type SellerProfileVerificationStatus =
  | 'APPROVED'
  | 'COMPLETE'
  | 'INCOMPLETE'
  | 'REJECTED'
  | 'REQUEST_INFO'
  | 'REVIEWING';

export type SellerVerificationAdminFeedback = {
  __typename?: 'SellerVerificationAdminFeedback';
  businessAddressIssue?: Maybe<Scalars['String']>;
  countryOfDomicileIssue?: Maybe<Scalars['String']>;
  dateOfBirthIssue?: Maybe<Scalars['String']>;
  entityTypeIssue?: Maybe<Scalars['String']>;
  firstNameIssue?: Maybe<Scalars['String']>;
  isLegalRepAndConsentsToSigIssue?: Maybe<Scalars['String']>;
  lastNameIssue?: Maybe<Scalars['String']>;
  legalRepNameIssue?: Maybe<Scalars['String']>;
  middleNameIssue?: Maybe<Scalars['String']>;
  proofDocIssues?: Maybe<Scalars['JSONString']>;
  registeredBusinessNameIssue?: Maybe<Scalars['String']>;
  registeredBusinessNumIssue?: Maybe<Scalars['String']>;
  verificationFlowIssue?: Maybe<Scalars['String']>;
};

export type SellerVerificationFeedback = {
  __typename?: 'SellerVerificationFeedback';
  businessAddressIssue?: Maybe<Scalars['String']>;
  companyNameIssue?: Maybe<Scalars['String']>;
  countryOfDomicileIssue?: Maybe<Scalars['String']>;
  dateOfBirthIssue?: Maybe<Scalars['String']>;
  entityTypeIssue?: Maybe<Scalars['String']>;
  firstNameIssue?: Maybe<Scalars['String']>;
  lastNameIssue?: Maybe<Scalars['String']>;
  middleNameIssue?: Maybe<Scalars['String']>;
  phoneNumberIssue?: Maybe<Scalars['String']>;
  proofOfIdDocTypeIssue?: Maybe<Scalars['String']>;
  proofOfIdentificationIssue?: Maybe<Scalars['String']>;
};

export type SellerVerificationSchema = {
  __typename?: 'SellerVerificationSchema';
  actionRequired: Scalars['Boolean'];
  adminFeedback?: Maybe<SellerVerificationFeedback>;
  adminLatestFeedback?: Maybe<SellerVerificationAdminFeedback>;
  businessAddress?: Maybe<AddressSchema>;
  canStart: Scalars['Boolean'];
  companyName?: Maybe<Scalars['String']>;
  completedCnVerification?: Maybe<Scalars['Boolean']>;
  dateOfBirth?: Maybe<Datetime>;
  domicileCountry?: Maybe<Country>;
  entityType?: Maybe<UserEntityType>;
  firstName?: Maybe<Scalars['String']>;
  gmvCap?: Maybe<CurrencyValue>;
  gmvCapGracePeriodDays?: Maybe<Scalars['Int']>;
  gmvCapGracePeriodEndDate?: Maybe<Datetime>;
  gmvCapReached: Scalars['Boolean'];
  hasCompleted: Scalars['Boolean'];
  impressionsPaused: Scalars['Boolean'];
  isKycVerification: Scalars['Boolean'];
  isLegalRepAndConsentToElectronicSig?: Maybe<Scalars['Boolean']>;
  kycVerification: KycVerificationSchema;
  lastName?: Maybe<Scalars['String']>;
  lastUpdateTime?: Maybe<Datetime>;
  legalRepName?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  numSalesCap?: Maybe<Scalars['Int']>;
  paymentsBlocked: Scalars['Boolean'];
  phoneNumber?: Maybe<Scalars['String']>;
  proofOfDocs?: Maybe<Array<MerchantProofDocSchema>>;
  proofOfIdDocType?: Maybe<SellerProfileVerificationDocType>;
  proofOfIdFiles?: Maybe<Array<MerchantFileSchema>>;
  regBusinessName?: Maybe<Scalars['String']>;
  regBusinessNum?: Maybe<Scalars['String']>;
  status?: Maybe<SellerProfileVerificationStatus>;
  verificationFlowType?: Maybe<VerificationFlowTypes>;
  verificationFlowTypeString?: Maybe<Scalars['String']>;
};

export type SendTestMessage = {
  __typename?: 'SendTestMessage';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SendTestMessageInput = {
  subscription: WebhookSubscriptionInput;
};

export type SentimentType =
  | 'INFO'
  | 'NEGATIVE'
  | 'POSITIVE'
  | 'WARNING';

export type SetWpsPackageTypeInput = {
  orderId: Scalars['ObjectIdType'];
  packageType: WpsPackageType;
};

export type SetWpsPackageTypeMutation = {
  __typename?: 'SetWPSPackageTypeMutation';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ShippableCountryCode =
  | 'AD'
  | 'AL'
  | 'AR'
  | 'AT'
  | 'AU'
  | 'BA'
  | 'BE'
  | 'BG'
  | 'BR'
  | 'CA'
  | 'CH'
  | 'CL'
  | 'CO'
  | 'CR'
  | 'CZ'
  | 'DE'
  | 'DK'
  | 'EE'
  | 'ES'
  | 'FI'
  | 'FR'
  | 'GB'
  | 'GI'
  | 'GR'
  | 'HR'
  | 'HU'
  | 'IE'
  | 'IL'
  | 'IS'
  | 'IT'
  | 'JP'
  | 'KR'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MK'
  | 'MT'
  | 'MX'
  | 'NL'
  | 'NO'
  | 'NZ'
  | 'PE'
  | 'PL'
  | 'PR'
  | 'PT'
  | 'RO'
  | 'RS'
  | 'SE'
  | 'SG'
  | 'SI'
  | 'SK'
  | 'SM'
  | 'UA'
  | 'US'
  | 'VI'
  | 'ZA';

export type ShippingDetailsSchema = {
  __typename?: 'ShippingDetailsSchema';
  city: Scalars['String'];
  country?: Maybe<Country>;
  countryCode: CountryCode;
  name: Scalars['String'];
  neighborhood?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  provider?: Maybe<ShippingProviderSchema>;
  providerId?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
  shipNote?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress1: Scalars['String'];
  streetAddress2?: Maybe<Scalars['String']>;
  streetAddress3?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['String']>;
  verificationState: AddressVerificationState;
  zipcode?: Maybe<Scalars['String']>;
};

export type ShippingOriginSettings = {
  __typename?: 'ShippingOriginSettings';
  destinationRegion: Scalars['String'];
  originCountryCode: Scalars['String'];
  originCountryName?: Maybe<Scalars['String']>;
  shippingType: Scalars['String'];
};

export type ShippingPlanInput = {
  skus: Array<ShippingPlanSkuInput>;
  warehouseId: Scalars['ObjectIdType'];
};

export type ShippingPlanSkuInput = {
  dimensions: PackageDimensionsInput;
  quantity: Scalars['Int'];
  variationId: Scalars['ObjectIdType'];
};

export type ShippingPlanSkuSchema = {
  __typename?: 'ShippingPlanSKUSchema';
  dimensions: VariationDimensions;
  quantity: Scalars['Int'];
  sku: Scalars['String'];
  variationId: Scalars['ObjectIdType'];
  weight: Weight;
};

export type ShippingPlanSchema = {
  __typename?: 'ShippingPlanSchema';
  id: Scalars['ObjectIdType'];
  skus?: Maybe<Array<ShippingPlanSkuSchema>>;
  warehouseId: Scalars['ObjectIdType'];
};

export type ShippingProfileCollectionSchema = {
  __typename?: 'ShippingProfileCollectionSchema';
  shippingProfileCount: Scalars['Int'];
  shippingProfiles: Array<ShippingProfileSchema>;
};


export type ShippingProfileCollectionSchemaShippingProfileCountArgs = {
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ShippingProfileSearchType>;
};


export type ShippingProfileCollectionSchemaShippingProfilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<ShippingProfileSearchType>;
};

export type ShippingProfileLinkInput = {
  productIds: Array<Scalars['ObjectIdType']>;
  shippingProfileId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type ShippingProfileMutations = {
  __typename?: 'ShippingProfileMutations';
  linkShippingProfile?: Maybe<LinkShippingProfile>;
  removeShippingProfile?: Maybe<RemoveShippingProfile>;
  upsertShippingProfile?: Maybe<UpsertShippingProfile>;
};


export type ShippingProfileMutationsLinkShippingProfileArgs = {
  input?: InputMaybe<ShippingProfileLinkInput>;
};


export type ShippingProfileMutationsRemoveShippingProfileArgs = {
  input?: InputMaybe<ShippingProfileRemoveInput>;
};


export type ShippingProfileMutationsUpsertShippingProfileArgs = {
  input?: InputMaybe<ShippingProfileUpsertInput>;
};

export type ShippingProfileRemoveInput = {
  idsToRemove?: InputMaybe<Array<Scalars['ObjectIdType']>>;
};

export type ShippingProfileSchema = {
  __typename?: 'ShippingProfileSchema';
  description: Scalars['String'];
  id: Scalars['ObjectIdType'];
  linkedProductCount: Scalars['Int'];
  name: Scalars['String'];
  shippingDetailsPerDestination?: Maybe<Array<DestinationShippingProfileSchema>>;
};

export type ShippingProfileSearchType =
  | 'PRODUCT_ID'
  | 'PROFILE_ID'
  | 'PROFILE_NAME';

export type ShippingProfileUpsertInput = {
  id?: InputMaybe<Scalars['ObjectIdType']>;
  name?: InputMaybe<Scalars['String']>;
  shippingDetailsPerDestination?: InputMaybe<Array<DestinationShippingProfileInput>>;
};

export type ShippingProviderCountryInput = {
  countryCode: CountryCode;
  timelineOperations?: InputMaybe<Array<ShippingProviderOperationInput>>;
};

export type ShippingProviderCountrySchema = {
  __typename?: 'ShippingProviderCountrySchema';
  country: Country;
  timelineOperations?: Maybe<Array<ShippingProviderOperationSchema>>;
};

export type ShippingProviderInput = {
  countryRequired?: InputMaybe<Scalars['Boolean']>;
  inputReleaseTime?: InputMaybe<DatetimeInput>;
  inputReleaseType?: InputMaybe<ShippingProviderOperationTypeEnum>;
  inputRestrictCountries?: InputMaybe<Array<ShippingProviderCountryInput>>;
  inputTrackingSources?: InputMaybe<Array<ShippingProviderTrackerInput>>;
  inputWtsTrackingSources?: InputMaybe<Array<ShippingProviderTrackerInput>>;
  isCnProvider?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  needAddTimelineOperation?: InputMaybe<Scalars['Boolean']>;
  originCountry?: InputMaybe<CountryCode>;
  postalCodeRequired?: InputMaybe<Scalars['Boolean']>;
  providerId: Scalars['Int'];
  providerUrl: Scalars['String'];
  shippingProviderType?: InputMaybe<ShippingProviderState>;
  trackingShipDateRequired?: InputMaybe<Scalars['Boolean']>;
  trackingUrl: Scalars['String'];
};

export type ShippingProviderOperationInput = {
  dateTime?: InputMaybe<DatetimeInput>;
  type?: InputMaybe<ShippingProviderOperationTypeEnum>;
};

export type ShippingProviderOperationSchema = {
  __typename?: 'ShippingProviderOperationSchema';
  dateTime?: Maybe<Datetime>;
  type?: Maybe<ShippingProviderOperationTypeEnum>;
};

export type ShippingProviderOperationTypeEnum =
  | 'ADD_SHIPPING_PROVIDER'
  | 'REMOVE_SHIPPING_PROVIDER';

export type ShippingProviderPolicySchema = {
  __typename?: 'ShippingProviderPolicySchema';
  allowedProviderType: Scalars['String'];
  condition?: Maybe<Scalars['String']>;
  destinationCountry?: Maybe<Country>;
  note?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  shippingProviders: Array<ShippingProviderSchema>;
  wishpostChannels?: Maybe<Array<Scalars['String']>>;
};

export type ShippingProviderSchema = {
  __typename?: 'ShippingProviderSchema';
  countryRequired?: Maybe<Scalars['Boolean']>;
  ddpSupportedOriginCountries?: Maybe<Array<Scalars['String']>>;
  id: Scalars['Int'];
  isCnProvider?: Maybe<Scalars['Boolean']>;
  isQualified?: Maybe<Scalars['Boolean']>;
  lastUpdate?: Maybe<Datetime>;
  name: Scalars['String'];
  originCountry?: Maybe<Country>;
  postalCodeRequired?: Maybe<Scalars['Boolean']>;
  providerUrl: Scalars['String'];
  qualifiedNote?: Maybe<Scalars['String']>;
  restrictionCountries?: Maybe<Array<ShippingProviderCountrySchema>>;
  shippingProviderType?: Maybe<ShippingProviderState>;
  status: Scalars['Boolean'];
  timelineOperations?: Maybe<Array<ShippingProviderOperationSchema>>;
  trackers?: Maybe<Array<ShippingProviderTrackerSchema>>;
  trackingFormats?: Maybe<Array<TrackingIdFormatSchema>>;
  trackingShipDateRequired?: Maybe<Scalars['Boolean']>;
  trackingUrl: Scalars['String'];
  wtsTrackers?: Maybe<Array<ShippingProviderTrackerSchema>>;
};


export type ShippingProviderSchemaTrackingFormatsArgs = {
  destCountryCode?: InputMaybe<CountryCode>;
};

export type ShippingProviderSearchType =
  | 'NAME'
  | 'PROVIDER_ID';

export type ShippingProviderState =
  | 'ACTIVE'
  | 'DELETED'
  | 'NON_TEST_SERVICE'
  | 'TEST_SERVICE'
  | 'UNREGISTER_TEST_SERVICE';

export type ShippingProviderTrackerInput = {
  ratio: Scalars['Int'];
  trackingSlug: Scalars['String'];
  trackingSource: TrackingSourceEnum;
};

export type ShippingProviderTrackerSchema = {
  __typename?: 'ShippingProviderTrackerSchema';
  ratio: Scalars['Int'];
  trackingName: Scalars['String'];
  trackingSlug?: Maybe<Scalars['String']>;
  trackingSource: TrackingSourceEnum;
};

export type ShippingSchema = {
  __typename?: 'ShippingSchema';
  calculatedShippingEnabled?: Maybe<Scalars['Boolean']>;
  defaultShipping?: Maybe<Array<DefaultShippingSchema>>;
  domesticShipping?: Maybe<Array<DomesticShippingSchema>>;
  maxCalculatedShippingPrice?: Maybe<CurrencyValue>;
  maxMerchantSetShippingPrice?: Maybe<CurrencyValue>;
  warehouseCountryShipping?: Maybe<Array<WarehouseCountryShippingSchema>>;
  wishpostEstimatedShipping?: Maybe<Array<WishPostShippingSchema>>;
};


export type ShippingSchemaMaxCalculatedShippingPriceArgs = {
  countries?: InputMaybe<Array<CountryCode>>;
};


export type ShippingSchemaMaxMerchantSetShippingPriceArgs = {
  countries?: InputMaybe<Array<CountryCode>>;
};


export type ShippingSchemaWarehouseCountryShippingArgs = {
  shippingTypes?: InputMaybe<Array<WarehouseShippingType>>;
};

export type ShippingSettingMutations = {
  __typename?: 'ShippingSettingMutations';
  updateShippingSetting?: Maybe<UpdateShippingSetting>;
};


export type ShippingSettingMutationsUpdateShippingSettingArgs = {
  calculatedShippingAccountConfig?: InputMaybe<Scalars['Int']>;
  countryShipping?: InputMaybe<Array<CountryShippingSetting>>;
  flatRateShippingOptInStatus?: InputMaybe<Scalars['Boolean']>;
  isUpsert?: InputMaybe<Scalars['Boolean']>;
  otherCountriesShipping?: InputMaybe<OtherCountriesShippingSetting>;
  useShopifyShippingRate?: InputMaybe<Scalars['Boolean']>;
};

export type ShippingSettingsSchema = {
  __typename?: 'ShippingSettingsSchema';
  country: Country;
  enabled: Scalars['Boolean'];
  price?: Maybe<CurrencyValue>;
};

export type ShopifyOnboardingAuthInfo = {
  __typename?: 'ShopifyOnboardingAuthInfo';
  apiKey: Scalars['String'];
  authToken?: Maybe<Scalars['String']>;
  shopUrl?: Maybe<Scalars['String']>;
};

export type ShopifySchema = {
  __typename?: 'ShopifySchema';
  apiKey?: Maybe<Scalars['String']>;
  eligibleProductCount: Scalars['Int'];
  hasFlatRates: Scalars['Boolean'];
  onboardingAuthToken: Scalars['String'];
  preorderCount: Scalars['Int'];
  shippingProfileId: Scalars['String'];
  shopUrl: Scalars['String'];
};

export type SignupSource =
  | 'SIGNUP_EXPRESS'
  | 'SIGNUP_GREEN_CHANNEL'
  | 'SIGNUP_LEGACY'
  | 'SIGNUP_MERCHANT_PLUS'
  | 'SIGNUP_MOBILE'
  | 'SIGNUP_V3'
  | 'SIGNUP_V4'
  | 'SIGNUP_V5';

export type SortByOrder =
  | 'ASC'
  | 'DESC';

export type SortOrderFulfillmentSpeed =
  | 'FulfillmentSpeed'
  | 'TransactionDate';

export type SortOrderTransactionDateField =
  | 'TransactionDate';

export type SortOrderType =
  | 'ASC'
  | 'DESC';

export type SortProductQualityRefundField =
  | 'QualityRefundRate';

export type SortProductRatingField =
  | 'AverageRating';

export type SpecialOrderProgramSchema = {
  __typename?: 'SpecialOrderProgramSchema';
  name: Scalars['String'];
  taskLink?: Maybe<Scalars['String']>;
};

export type StaticFines = {
  __typename?: 'StaticFines';
  cancellationFine: CurrencyValue;
};

export type Status =
  | 'CANCELLED'
  | 'DEDUCTED'
  | 'DELAYING'
  | 'PENDING';

export type StoreRating = {
  __typename?: 'StoreRating';
  comment?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  orderIds: Array<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  refundReason?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
};

export type StoreReviewSummarySchema = {
  __typename?: 'StoreReviewSummarySchema';
  averageRating: Scalars['Float'];
  count: Scalars['Int'];
};

export type StorefrontCustomizationSchema = {
  __typename?: 'StorefrontCustomizationSchema';
  feeds: Array<StorefrontFeedSchema>;
  id: Scalars['ObjectIdType'];
  visualTheme: StorefrontVisualThemeSchema;
};

export type StorefrontFeedSchema = {
  __typename?: 'StorefrontFeedSchema';
  id: Scalars['ObjectIdType'];
  name: Scalars['String'];
};

export type StorefrontSchema = {
  __typename?: 'StorefrontSchema';
  creationDate: Datetime;
  customization?: Maybe<StorefrontCustomizationSchema>;
  location?: Maybe<Country>;
  name: Scalars['String'];
  reviewSummary: StoreReviewSummarySchema;
};

export type StorefrontServiceSchema = {
  __typename?: 'StorefrontServiceSchema';
  forMerchant?: Maybe<StorefrontSchema>;
  merchantEnabled: Scalars['Boolean'];
  serviceEnabled: Scalars['Boolean'];
};


export type StorefrontServiceSchemaForMerchantArgs = {
  id: Scalars['ObjectIdType'];
};


export type StorefrontServiceSchemaMerchantEnabledArgs = {
  id: Scalars['ObjectIdType'];
};

export type StorefrontVisualThemeSchema = {
  __typename?: 'StorefrontVisualThemeSchema';
  name: Scalars['String'];
  primaryColor: Scalars['String'];
  secondaryColor: Scalars['String'];
};

export type SubmitAttributeExtraction = {
  __typename?: 'SubmitAttributeExtraction';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SubmitAttributeExtractionInput = {
  attributeExtractionResult: Array<ExtractionResultInput>;
  jobId: Scalars['ObjectIdType'];
};

export type SubmitCategoryClassification = {
  __typename?: 'SubmitCategoryClassification';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SubmitCategoryClassificationInput = {
  categoryId?: InputMaybe<Scalars['String']>;
  categoryPath?: InputMaybe<Scalars['String']>;
  jobId: Scalars['ObjectIdType'];
  treeVersion?: InputMaybe<Scalars['String']>;
};

export type SubmitCategoryManualOverride = {
  __typename?: 'SubmitCategoryManualOverride';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SubmitCategoryManualOverrideInput = {
  categoryId: Scalars['Int'];
  categoryPath: Scalars['String'];
  categoryTreeId: Scalars['Int'];
  categoryTreeVersion: Scalars['String'];
  l1CategoryId: Scalars['Int'];
  productId: Scalars['String'];
};

export type SubmitProductVideoContentManualReview = {
  __typename?: 'SubmitProductVideoContentManualReview';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SubmitProductVideoContentManualReviewInput = {
  merchantId: Scalars['ObjectIdType'];
  productId: Scalars['ObjectIdType'];
  videoId: Scalars['ObjectIdType'];
  videoQuality: VideoQualityLevel;
  videoRelatesToProduct: Scalars['Boolean'];
  videoTraits: ProductVideoContentReviewTraits;
};

export type SubmitProductVideoContentReview = {
  __typename?: 'SubmitProductVideoContentReview';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SubmitProductVideoContentReviewInput = {
  jobId: Scalars['ObjectIdType'];
  videoQuality: VideoQualityLevel;
  videoRelatesToProduct: Scalars['Boolean'];
  videoTraits: ProductVideoContentReviewTraits;
};

export type SubmitProductVideoIpManualReview = {
  __typename?: 'SubmitProductVideoIPManualReview';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SubmitProductVideoIpManualReviewInput = {
  blurredInformationCategory?: InputMaybe<BlurredInformationCategory>;
  ipInfringedBrandId?: InputMaybe<Scalars['ObjectIdType']>;
  ipViolationReason?: InputMaybe<ProductVideoIpViolationReason>;
  merchantId: Scalars['ObjectIdType'];
  productId: Scalars['ObjectIdType'];
  videoId: Scalars['ObjectIdType'];
};

export type SubmitProductVideoIpReview = {
  __typename?: 'SubmitProductVideoIPReview';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SubmitProductVideoIpReviewInput = {
  blurredInformationCategory?: InputMaybe<BlurredInformationCategory>;
  ipInfringedBrandId?: InputMaybe<Scalars['ObjectIdType']>;
  ipViolationReason?: InputMaybe<ProductVideoIpViolationReason>;
  jobId: Scalars['ObjectIdType'];
};

export type SubmitWarehouseVerificationRequestInput = {
  documentUrls: Array<Scalars['String']>;
  warehouseId: Scalars['ObjectIdType'];
};

export type SubmitWarehouseVerificationRequestMutation = {
  __typename?: 'SubmitWarehouseVerificationRequestMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SubscriptionEndpointType =
  | 'ARN'
  | 'URL';

export type SwedenConfirmedDeliveredCarrierTypes = {
  __typename?: 'SwedenConfirmedDeliveredCarrierTypes';
  carrierId: Scalars['Int'];
  swedenDeliveredCarrierTypes: Array<SwedenDeliveredCarrierType>;
};

export type SwedenDeliveredCarrierType =
  | 'IntlEUCarrier'
  | 'IntraEUCarrier';

export type TaggingJobState =
  | 'AWAITING_IN_HOUSE_TAGGER'
  | 'AWAITING_MERCHANT_RELEASE'
  | 'AWAITING_ML'
  | 'AWAITING_RESOLVER'
  | 'AWAITING_TAGGER'
  | 'COMPLETE'
  | 'DISABLED_OR_ALREADY_INAPPROPRIATE'
  | 'IMAGE_MISSING'
  | 'OVERRIDDEN'
  | 'OVERRIDDEN_COMPLETE';

export type TaggingMlResult =
  | 'APPROVED'
  | 'REJECTED'
  | 'UNSURE';

export type TaggingMutations = {
  __typename?: 'TaggingMutations';
  createProductTaxonomyCategoryDispute?: Maybe<CreateProductTaxonomyCategoryDispute>;
  deleteDedupImage?: Maybe<DeleteDedupImage>;
  getAndClaimProductTaxonomyCategoryDispute?: Maybe<GetAndClaimProductTaxonomyCategoryDisputeForReview>;
  markProductTaxonomyCategoryDisputeUnchanged?: Maybe<MarkProductTaxonomyCategoryDisputeUnchanged>;
  markProductTaxonomyCategoryDisputeUpdated?: Maybe<MarkProductTaxonomyCategoryDisputeUpdated>;
  platformSweeps?: Maybe<PlatformSweepMutations>;
  productVideoContentTag?: Maybe<ProductVideoContentTagMutations>;
  productVideoIpTag?: Maybe<ProductVideoIpTagMutations>;
  submitAttributeExtraction?: Maybe<SubmitAttributeExtraction>;
  submitCategoryClassification?: Maybe<SubmitCategoryClassification>;
  submitCategoryManualOverride?: Maybe<SubmitCategoryManualOverride>;
  updateDedupImage?: Maybe<UpdateDedupImage>;
};


export type TaggingMutationsCreateProductTaxonomyCategoryDisputeArgs = {
  input: CreateProductTaxonomyCategoryDisputeInput;
};


export type TaggingMutationsDeleteDedupImageArgs = {
  input: DeleteDedupImageInput;
};


export type TaggingMutationsGetAndClaimProductTaxonomyCategoryDisputeArgs = {
  input?: InputMaybe<GetAndClaimProductTaxonomyCategoryDisputeForReviewInput>;
};


export type TaggingMutationsMarkProductTaxonomyCategoryDisputeUnchangedArgs = {
  input: MarkProductTaxonomyCategoryDisputeUnchangedInput;
};


export type TaggingMutationsMarkProductTaxonomyCategoryDisputeUpdatedArgs = {
  input: MarkProductTaxonomyCategoryDisputeUpdatedInput;
};


export type TaggingMutationsSubmitAttributeExtractionArgs = {
  input: SubmitAttributeExtractionInput;
};


export type TaggingMutationsSubmitCategoryClassificationArgs = {
  input: SubmitCategoryClassificationInput;
};


export type TaggingMutationsSubmitCategoryManualOverrideArgs = {
  input: SubmitCategoryManualOverrideInput;
};


export type TaggingMutationsUpdateDedupImageArgs = {
  input: UpdateDedupImageInput;
};

export type TaggingServiceSchema = {
  __typename?: 'TaggingServiceSchema';
  attributeExtractionTaggerJob?: Maybe<AttributeExtractionTaggerJobSchema>;
  categoryClassificationTaggerJob?: Maybe<CategoryClassificationTaggerJobSchema>;
  dedupImageLibHub?: Maybe<DedupImageLibraryHub>;
  generalTaggingManagement?: Maybe<GeneralTaggingManagement>;
  inappropriateViolationTaggingManagement?: Maybe<InappropriateViolationTaggingManagement>;
  ipViolationTaggingManagement?: Maybe<IpViolationTaggingManagement>;
  misleadingViolationTaggingManagement?: Maybe<MisleadingViolationTaggingManagement>;
  productTaggingStatus?: Maybe<ProductTaggingStatusSchema>;
  productTaxonomyCategoryDisputeHub?: Maybe<ProductTaxonomyCategoryDisputeHub>;
  productVideoContentTaggerJob?: Maybe<ProductVideoTaggerJobSchema>;
  productVideoIpTaggerJob?: Maybe<ProductVideoTaggerJobSchema>;
};


export type TaggingServiceSchemaAttributeExtractionTaggerJobArgs = {
  taskId?: InputMaybe<Scalars['String']>;
};


export type TaggingServiceSchemaProductTaggingStatusArgs = {
  productId: Scalars['ObjectIdType'];
};

export type TaggingViolationReason = {
  __typename?: 'TaggingViolationReason';
  displayName?: Maybe<Scalars['String']>;
  internalDisplayName: Scalars['String'];
  isBrandTaggingReason: Scalars['Boolean'];
  reason: CounterfeitReasonCode;
  subcategories?: Maybe<Array<TaggingViolationSubcategory>>;
};

export type TaggingViolationSubReasonCode =
  | 'ALCOHOL'
  | 'AMMUNITION'
  | 'ANIME_PRODUCTS'
  | 'ANTI_GAY'
  | 'ASSAULT_WEAPON_CONVERSION_PIECES'
  | 'BENZENE'
  | 'BEVERAGES'
  | 'BLOOD_COLLECTION_TUBES'
  | 'BLUE_RAY'
  | 'BLURRED_LOGOS'
  | 'BLURRED_TAGS'
  | 'BLURRED_WATERMARKS'
  | 'BRANDING_CHANGE'
  | 'BRAND_DISCREPANCY'
  | 'BRASS_OR_METAL_KNUCKLES'
  | 'BULLION'
  | 'BULLYING'
  | 'BUTANE'
  | 'CASSETTE_TAPE'
  | 'CATHETERS'
  | 'CD'
  | 'CHILD_CARSEAT'
  | 'CHILD_HARNESS'
  | 'CHLOROFORM'
  | 'CIGARETTE'
  | 'CLAIM_FREE_PRODUCT_OFFERS'
  | 'CN_PROHIBITED_PRODUCT_AIRSOFT'
  | 'CN_PROHIBITED_PRODUCT_BB_GUNS'
  | 'CN_PROHIBITED_PRODUCT_IMITATION_FIREARMS'
  | 'CN_PROHIBITED_PRODUCT_STUN_GUNS'
  | 'CN_PROHIBITED_PRODUCT_TASERS'
  | 'COCKROACH_CHALK'
  | 'COMPETITOR_WATERMARK'
  | 'CONFEDERATE_FLAG'
  | 'CONTACTS'
  | 'CONTACT_LENS_SOLUTION'
  | 'CONTAINS_HARMFUL_CONTENT'
  | 'COUNTERFEIT_CURRENCY'
  | 'CPSC_VIOLATION'
  | 'CUSTOMER_FEEDBACK_ABOUT_FALSE_SPEC'
  | 'DANGEROUS_CPA_VIOLATION'
  | 'DANGEROUS_NON_CPA_VIOLATION'
  | 'DOMESTIC_TERRORISTS_MEMORABILIA'
  | 'DVD'
  | 'ECIGARETTE_VAPE'
  | 'ENDANGERED_SPECIES'
  | 'EPA_EMMISIONS_DEFEAT_US'
  | 'EPA_PESTICIDES_US'
  | 'EROTIC_SETUPS'
  | 'EURO_CURRENCY'
  | 'EXPLOSIVE_WEAPONS'
  | 'EYELASH_GROWTH_SERUM'
  | 'FEEDBACK_ABOUT_NO_PRODUCT'
  | 'FIREARMS_AND_GUNS'
  | 'FOOD'
  | 'FULLY_EXPOSED_ANUS'
  | 'FULLY_EXPOSED_GENITAL'
  | 'FULLY_EXPOSED_NIPPLE'
  | 'FULLY_LOADED_TV_BOXES'
  | 'GIFT_CARDS_OR_ACCESS_CODES'
  | 'GLYPHOSATE'
  | 'GRADUAL_CHANGE'
  | 'GUN_BUILDING_KITS'
  | 'GUN_SILENCERS'
  | 'GUN_SILENCER_COMPONENTS'
  | 'GUN_SILENCER_MISUSE'
  | 'HATEFUL_CORONAVIRUS_PRODUCTS'
  | 'HATEFUL_IMAGERY'
  | 'HATE_GROUPS'
  | 'HATE_SPEECH'
  | 'HIDDEN_SEX_TOYS'
  | 'HITLER_IMAGERY'
  | 'HOOKAH_PEN'
  | 'HOUSEKEEPING_TOUR_PACKAGES'
  | 'HOVERBOARDS'
  | 'HUMAN_BY_PRODUCTS'
  | 'HUMAN_GROWTH_HORMONE'
  | 'HYPERREALISTIC_CONTENT'
  | 'IMAGE_NOT_PRODUCT'
  | 'IMAGE_OF_MASTURBATION'
  | 'IMAGE_OF_PENETRATION'
  | 'IMAGE_OR_TITLE_CHANGE'
  | 'IMITATION_CURRENCY'
  | 'INJECTABLE_ITEMS'
  | 'JAMMERS'
  | 'KKK_PARAPHERNALIA'
  | 'LASER_DISC'
  | 'LASER_POINTERS'
  | 'LISTING_PROMOTES_HIDING_PROHIBITED_SUBSTANCE'
  | 'LIVE_ANIMAL'
  | 'MAGNETS_AS_TOYS'
  | 'MARIJUANA'
  | 'MERCAHNT_CONTACT_OR_REFERAL'
  | 'METAL_NINJA_STARS'
  | 'MISLEADING_CLAIMS'
  | 'MISLEADING_KEY_FEATURE'
  | 'MISLEADING_WIG'
  | 'MISSING_KEY_REQUIREMENTS'
  | 'MOD_BOXES'
  | 'NAZI_MEMORABILIA'
  | 'NON_CLINICAL_CONTENT'
  | 'NOT_DESCRIBE_AVAILABLE_QUANTITY'
  | 'NOT_FOCUS_MAIN_IMAGE'
  | 'NOT_FOCUS_OF_MAIN_IMAGE'
  | 'NUDE_MINOR_IN_NON_SEXUAL_CONTEXT'
  | 'ODOMETER_CORRECTION_TOOLS'
  | 'OTC_MEDICATION'
  | 'OTHER_WHITE_SUPREMACY_MEMORABILIA'
  | 'OXIMETERS'
  | 'PENICILLIN'
  | 'PESTICIDES'
  | 'PET_FOOD'
  | 'PILL_PRESSES'
  | 'PLANTS'
  | 'PLANT_SEEDS'
  | 'PLANT_SEED_WITH_IMPOSSIBLE_CLAIM'
  | 'PLANT_SEED_WITH_IMPOSSIBLE_CLAIM_V2'
  | 'POPPERS_AND_MUSCLE_RELAXANTS'
  | 'PRESCRIPTION_STRENGTH_ITEMS'
  | 'PRICE_POINT_UNREASONABLE'
  | 'PRODUCT_VARIANCE'
  | 'PROHIBITED_CUSTOMS_CN'
  | 'PROHIBITED_SUBSTANCE_PIPE'
  | 'PROUD_BOY_MEMORABILIA'
  | 'PURCHANSED_FOLLOWERS'
  | 'QANON_MEMORABILIA'
  | 'RACIAL_CLEANSING'
  | 'RANDOM_PRODUCT'
  | 'RATING_SHOW_WRONG_PRODUCT'
  | 'RECORDS'
  | 'RECREATIONAL_DRUGS_AND_CHEMICALS'
  | 'REVIEW_SHOW_WRONG_PRODUCT'
  | 'SEATBELTS'
  | 'SELF_FEEDING_BABY_BOTTLE_CLIPS'
  | 'SELF_FEEDING_BABY_PILLOWS'
  | 'SEXUALLY_EXPLICIT_CONTENT'
  | 'SEXUALLY_EXPLICIT_MATERIAL'
  | 'SEXUALLY_SUGGESTIVE_CONTENT'
  | 'SEXUAL_CONTENT_INCLUDING_MINOR'
  | 'SIZE_COLOR_OPTION_GAMING'
  | 'SIZE_MISPRESENTATION'
  | 'SIZE_MISREPRESENTATION_MAIN_IMAGE'
  | 'SIZE_NOT_AS_ADVERTISED'
  | 'SOFTWARE'
  | 'SPY_CAMERAS'
  | 'STANDALONE_LITHIUM_BATTERY'
  | 'SUBSCRIPTIONS_OR_MEMBERSHIPS'
  | 'SURPRISE_BOX'
  | 'SYRINGES'
  | 'TERRORIST_PROMOTION_GROUPS'
  | 'TIRE_SPIKES'
  | 'TITLE_IMAGE_MISMATCH'
  | 'TOBACCO'
  | 'TOBACCO_SEEDS'
  | 'UNAUTHROIZED_USE_WISH'
  | 'UNCENSORED_EROTIC_ANIME'
  | 'UNREALISTIC_HEALTH_CLAIM_PRODUCTS'
  | 'UNREASONABLE_SPEC'
  | 'UNSUPPORTED_MEDICAL_CLAIMS'
  | 'UNVERFIED_PRICE_INFORMATION'
  | 'UNVERIFIED_FREE_SHIPPING'
  | 'UNVERIFIED_LOGO'
  | 'UNVERIFIED_SHIPPING_TIME_FRAME'
  | 'UNVERIFIED_WARRANTIES'
  | 'US_PROP_MONEY'
  | 'VALUE_VARIANCE'
  | 'VAPE_LIQUID'
  | 'VHS_TAPE'
  | 'VIDEO_GAME'
  | 'VIRTUAL_MONEY'
  | 'VITAMINS_AND_SUPPLEMENTS';

export type TaggingViolationSubcategory = {
  __typename?: 'TaggingViolationSubcategory';
  displayName?: Maybe<Scalars['String']>;
  internalDisplayName: Scalars['String'];
  subcategory?: Maybe<TaggingViolationSubReasonCode>;
};

export type TakedownRequestContestSchema = {
  __typename?: 'TakedownRequestContestSchema';
  contestId: Scalars['ObjectIdType'];
  merchant?: Maybe<MerchantSchema>;
  product: ProductSchema;
  source: TakedownRequestContestSource;
  state: TakedownRequestContestState;
};

export type TakedownRequestContestSource =
  | 'IMAGE_MATCH'
  | 'NONE'
  | 'REPORTED';

export type TakedownRequestContestState =
  | 'APPROVED'
  | 'PENDING_REVIEW'
  | 'REJECTED';

export type TakedownRequestMutations = {
  __typename?: 'TakedownRequestMutations';
  createTakedownRequest?: Maybe<CreateTakedownRequest>;
};


export type TakedownRequestMutationsCreateTakedownRequestArgs = {
  input?: InputMaybe<CreateTakedownRequestInput>;
};

export type TakedownRequestSchema = {
  __typename?: 'TakedownRequestSchema';
  brand: BrandSchema;
  contact?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ObjectIdType'];
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  numProducts: Scalars['Int'];
  phoneNumber?: Maybe<Scalars['String']>;
  products: Array<TakedownRequestContestSchema>;
  reportedDate: Datetime;
  state: TakedownRequestState;
  typeOfInfringement: TypeOfInfringement;
};


export type TakedownRequestSchemaNumProductsArgs = {
  states?: InputMaybe<Array<TakedownRequestContestState>>;
};


export type TakedownRequestSchemaProductsArgs = {
  count?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  states?: InputMaybe<Array<TakedownRequestContestState>>;
};

export type TakedownRequestState =
  | 'ACTIVE'
  | 'COMPLETE'
  | 'PENDING';

export type TaxAuthoritySchema = {
  __typename?: 'TaxAuthoritySchema';
  id: Scalars['String'];
  name: Scalars['String'];
  officialName?: Maybe<Scalars['String']>;
  type: TaxAuthorityType;
};

export type TaxAuthorityType =
  | 'ADDITIONAL_FEE'
  | 'ADDITIONAL_SALES_AND_USE_TAX'
  | 'BMP'
  | 'CBT'
  | 'CGST'
  | 'CITY_AMUSEMENT'
  | 'CITY_FEES'
  | 'CITY_FOOD_BEVERAGE'
  | 'CITY_RENTAL'
  | 'CITY_SALES_USE'
  | 'CLT'
  | 'COF'
  | 'COM'
  | 'COMPENSATION_CESS'
  | 'CONSUMPTION_TAX'
  | 'COUNTY_AMUSEMENT'
  | 'COUNTY_FEES'
  | 'COUNTY_FOOD_BEVERAGE'
  | 'COUNTY_RENTAL'
  | 'COUNTY_SALES_USE'
  | 'CST'
  | 'CSU'
  | 'DISTRICT_AMUSEMENT'
  | 'DISTRICT_FEES'
  | 'DISTRICT_FOOD_BEVERAGE'
  | 'DISTRICT_RENTAL'
  | 'DISTRICT_SALES_USE'
  | 'DPH'
  | 'EEE'
  | 'EXC'
  | 'FCP'
  | 'FCP_ST'
  | 'FEE'
  | 'GCT'
  | 'GENERAL_SALES_AND_USE_TAX'
  | 'GIT'
  | 'GST'
  | 'HST'
  | 'ICMS'
  | 'ICMS_CR'
  | 'ICMS_PF'
  | 'ICMS_PMC'
  | 'ICMS_RD'
  | 'ICMS_ST'
  | 'ICMS_ST_CNAE'
  | 'ICMS_ST_CNAE_IVA'
  | 'IGI'
  | 'IGIC'
  | 'IGST'
  | 'IGV'
  | 'II'
  | 'IMI'
  | 'IPI'
  | 'IPSI'
  | 'ISS'
  | 'IST'
  | 'ISV'
  | 'ITBIS'
  | 'ITBMS'
  | 'IVA'
  | 'KDV'
  | 'MOT'
  | 'MRDT'
  | 'MVA'
  | 'MWST'
  | 'NHIL'
  | 'OMB'
  | 'PCL'
  | 'PDV'
  | 'PIS'
  | 'PST'
  | 'PVM'
  | 'QST'
  | 'SCT'
  | 'SGST'
  | 'ST'
  | 'STATE_AMUSEMENT'
  | 'STATE_FEES'
  | 'STATE_FOOD_BEVERAGE'
  | 'STATE_RENTAL'
  | 'STATE_SALES_USE'
  | 'SUFRAMA'
  | 'SUT'
  | 'TELECOM'
  | 'THSBT'
  | 'TOURISM_TAX'
  | 'TOURISM_TAX_ADDITIONAL'
  | 'TT'
  | 'TVA'
  | 'UTGST'
  | 'VAT';

export type TaxConstants = {
  __typename?: 'TaxConstants';
  ca: CaTaxConstants;
  marketplaceCountries: Array<TaxMarketplaceCountry>;
  marketplaceUnions: Array<TaxMarketplaceUnion>;
  ukVatInfo: UkVatInfoSchema;
  us: UsTaxConstants;
};


export type TaxConstantsMarketplaceCountriesArgs = {
  includeUpcoming?: InputMaybe<Scalars['Boolean']>;
};


export type TaxConstantsMarketplaceUnionsArgs = {
  includeUpcoming?: InputMaybe<Scalars['Boolean']>;
};

export type TaxDashboardReviewMutations = {
  __typename?: 'TaxDashboardReviewMutations';
  reviewMerchantTaxIdentification: ReviewMerchantTaxIdentificationMutation;
};


export type TaxDashboardReviewMutationsReviewMerchantTaxIdentificationArgs = {
  input: ReviewMerchantTaxIdentificationInput;
};

export type TaxDashboardSchema = {
  __typename?: 'TaxDashboardSchema';
  usTaxIdentificationMerchants?: Maybe<Array<MerchantSchema>>;
};


export type TaxDashboardSchemaUsTaxIdentificationMerchantsArgs = {
  formType?: InputMaybe<MerchantTaxIdentificationFormType>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<MerchantTaxIdentificationSearchType>;
  sort?: InputMaybe<MerchantTaxIdentificationSortFieldType>;
  status?: InputMaybe<MerchantTaxIdentificationStatus>;
};

export type TaxLiabilitySchema = {
  __typename?: 'TaxLiabilitySchema';
  remitPercentage?: Maybe<Scalars['Float']>;
  remitType?: Maybe<CommerceTransactionTaxRemitType>;
  userEntityTypeForRemit?: Maybe<KycMerchantType>;
};

export type TaxMarketplaceCountry = {
  __typename?: 'TaxMarketplaceCountry';
  country: Country;
  launchDate?: Maybe<Datetime>;
};

export type TaxMarketplaceUnion = {
  __typename?: 'TaxMarketplaceUnion';
  launchDate?: Maybe<Datetime>;
  union: Union;
};

export type TaxSetting = {
  __typename?: 'TaxSetting';
  authority: TaxSettingAuthority;
  certificateFileUrl?: Maybe<Scalars['String']>;
  euDetails?: Maybe<TaxSettingEuDetails>;
  germanyDetails?: Maybe<TaxSettingGermanyDetails>;
  id: Scalars['ObjectIdType'];
  lastUpdated: Datetime;
  merchantId: Scalars['ObjectIdType'];
  mexicoDetails?: Maybe<TaxSettingMexicoDetails>;
  ossRegistrationCountry?: Maybe<Country>;
  reviewStatus?: Maybe<CommerceMerchantReviewStatus>;
  status: CommerceMerchantTaxInfoStatus;
  taxCertificateFile?: Maybe<MerchantFileSchema>;
  taxLiability?: Maybe<Array<TaxLiabilitySchema>>;
  taxNumber?: Maybe<Scalars['String']>;
  taxNumberType?: Maybe<TaxSettingTaxNumberType>;
  ukDetails?: Maybe<TaxSettingUkDetails>;
};


export type TaxSettingTaxLiabilityArgs = {
  whenShippingFromDomicileCountry?: InputMaybe<Scalars['Boolean']>;
};

export type TaxSettingAuthority = {
  __typename?: 'TaxSettingAuthority';
  country: Country;
  displayName?: Maybe<Scalars['String']>;
  level: TaxSettingAuthorityLevel;
  stateCode?: Maybe<Scalars['String']>;
};

export type TaxSettingAuthorityLevel =
  | 'CITY'
  | 'COUNTRY'
  | 'COUNTY'
  | 'DISTRICT'
  | 'STATE';

export type TaxSettingEuDetails = {
  __typename?: 'TaxSettingEUDetails';
  ustSt1T1Number?: Maybe<Scalars['String']>;
};

export type TaxSettingGermanyDetails = {
  __typename?: 'TaxSettingGermanyDetails';
  noNumberReason?: Maybe<CommerceMerchantTaxInfoGermanyNoNumberReason>;
};

export type TaxSettingMexicoDetails = {
  __typename?: 'TaxSettingMexicoDetails';
  defaultShipFromIsMx?: Maybe<Scalars['Boolean']>;
};

export type TaxSettingTaxNumberType =
  | 'COMPANY_REGISTRITION_NUMBER'
  | 'NATIONAL_INSURANCE_NUMBER'
  | 'OSS'
  | 'OTHER'
  | 'TAX_IDENTIFICATION_NUMBER'
  | 'VALUE_ADDED_TAX';

export type TaxSettingUkDetails = {
  __typename?: 'TaxSettingUKDetails';
  gbVatEntity?: Maybe<GbVatEntityType>;
};

export type TaxSettingsInput = {
  authorityLevel: TaxSettingAuthorityLevel;
  certificateFileUrl?: InputMaybe<Scalars['String']>;
  countryCode: CountryCode;
  displayName?: InputMaybe<Scalars['String']>;
  gbVatEntity?: InputMaybe<GbVatEntityType>;
  mxDefaultShipFromIsMx?: InputMaybe<Scalars['Boolean']>;
  ossRegistrationCountryCode?: InputMaybe<CountryCode>;
  stateCode?: InputMaybe<Scalars['String']>;
  taxNumber?: InputMaybe<Scalars['String']>;
  taxNumberType?: InputMaybe<TaxSettingTaxNumberType>;
  ustSt1T1Number?: InputMaybe<Scalars['String']>;
};

export type TaxSettingsMutations = {
  __typename?: 'TaxSettingsMutations';
  upsertTaxSettings: UpsertTaxSettingsMutation;
};


export type TaxSettingsMutationsUpsertTaxSettingsArgs = {
  input: UpsertTaxSettingsInput;
};

export type TaxTargetCurrency =
  | 'AUTHORITY'
  | 'CUSTOMER'
  | 'MERCHANT';

export type TaxType =
  | 'INTERNATIONAL_AC'
  | 'INTERNATIONAL_CA'
  | 'INTERNATIONAL_CA1'
  | 'INTERNATIONAL_DS'
  | 'INTERNATIONAL_EC'
  | 'INTERNATIONAL_ER'
  | 'INTERNATIONAL_ES'
  | 'INTERNATIONAL_EXC'
  | 'INTERNATIONAL_IC'
  | 'INTERNATIONAL_IM'
  | 'INTERNATIONAL_IR'
  | 'INTERNATIONAL_IS'
  | 'INTERNATIONAL_MA'
  | 'INTERNATIONAL_MP'
  | 'INTERNATIONAL_MVT'
  | 'INTERNATIONAL_NL'
  | 'INTERNATIONAL_NR'
  | 'INTERNATIONAL_RC'
  | 'INTERNATIONAL_S'
  | 'INTERNATIONAL_SA'
  | 'INTERNATIONAL_SI'
  | 'INTERNATIONAL_SN'
  | 'INTERNATIONAL_STK'
  | 'INTERNATIONAL_TE'
  | 'INTERNATIONAL_TR'
  | 'INTERNATIONAL_UN'
  | 'INTERNATIONAL_US'
  | 'INTERNATIONAL_VG'
  | 'INTERNATIONAL_ZC'
  | 'INTERNATIONAL_ZE'
  | 'INTERNATIONAL_ZI'
  | 'INTERNATIONAL_ZR'
  | 'US_BO'
  | 'US_CA'
  | 'US_CA1'
  | 'US_CU'
  | 'US_EXC'
  | 'US_GR'
  | 'US_IC'
  | 'US_IM'
  | 'US_LT'
  | 'US_MVT'
  | 'US_NL'
  | 'US_RC'
  | 'US_RS'
  | 'US_RU'
  | 'US_S'
  | 'US_SA'
  | 'US_SC'
  | 'US_STK'
  | 'US_SV'
  | 'US_UN'
  | 'US_US'
  | 'US_UU'
  | 'US_VG'
  | 'US_ZE'
  | 'US_ZR';

export type TaxonomyAttributeSchema = {
  __typename?: 'TaxonomyAttributeSchema';
  dataType: AttributeDataType;
  dataTypeFormat: AttributeDataTypeFormat;
  description: Scalars['String'];
  enabledForVariations: Scalars['Boolean'];
  id: Scalars['Int'];
  isVariationAttribute: Scalars['Boolean'];
  level: AttributeLevel;
  maxMultiSelect: Scalars['Int'];
  mode: AttributeMode;
  name: Scalars['String'];
  usage: AttributeUsage;
  values?: Maybe<Array<TaxonomyAttributeValueSchema>>;
};

export type TaxonomyAttributeValueSchema = {
  __typename?: 'TaxonomyAttributeValueSchema';
  id: Scalars['Int'];
  value: Scalars['String'];
};

export type TaxonomyCategorySchema = {
  __typename?: 'TaxonomyCategorySchema';
  categoriesAlongPath: Array<TaxonomyCategorySchema>;
  categoryChildren?: Maybe<Array<TaxonomyCategorySchema>>;
  categoryTreeId: Scalars['Int'];
  categoryTreeVersion: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type TaxonomySchema = {
  __typename?: 'TaxonomySchema';
  attributes?: Maybe<Array<TaxonomyAttributeSchema>>;
  category?: Maybe<TaxonomyCategorySchema>;
  categoryAttributesCsv?: Maybe<Array<Array<Scalars['String']>>>;
  l1Categories?: Maybe<Array<TaxonomyCategorySchema>>;
  leafCategories?: Maybe<Array<TaxonomyCategorySchema>>;
  taxonomyTreeCsv?: Maybe<Array<Array<Scalars['String']>>>;
  variationOptions?: Maybe<Array<TaxonomyAttributeSchema>>;
};


export type TaxonomySchemaAttributesArgs = {
  categoryId: Scalars['Int'];
  treeVersion?: InputMaybe<Scalars['String']>;
};


export type TaxonomySchemaCategoryArgs = {
  categoryId?: InputMaybe<Scalars['Int']>;
  treeVersion?: InputMaybe<Scalars['String']>;
};


export type TaxonomySchemaCategoryAttributesCsvArgs = {
  categoryId: Scalars['Int'];
};


export type TaxonomySchemaL1CategoriesArgs = {
  leafCategoryIds?: InputMaybe<Array<Scalars['Int']>>;
  treeVersion?: InputMaybe<Scalars['String']>;
};


export type TaxonomySchemaLeafCategoriesArgs = {
  l1CategoryId: Scalars['Int'];
  treeVersion?: InputMaybe<Scalars['String']>;
};


export type TaxonomySchemaTaxonomyTreeCsvArgs = {
  treeVersion?: InputMaybe<Scalars['String']>;
};


export type TaxonomySchemaVariationOptionsArgs = {
  categoryId: Scalars['Int'];
  treeVersion?: InputMaybe<Scalars['String']>;
};

export type TermsOfServiceRegionType =
  | 'CN'
  | 'EU'
  | 'US';

export type TermsOfServiceSchema = {
  __typename?: 'TermsOfServiceSchema';
  canAccept: Scalars['Boolean'];
  id: Scalars['ObjectIdType'];
  merchantTermsOfServiceAgreement?: Maybe<MerchantTermsOfServiceAgreementSchema>;
  region?: Maybe<TermsOfServiceRegionType>;
  releaseDate: Datetime;
  tosType: TermsOfServiceType;
  version: Scalars['Int'];
};

export type TermsOfServiceType =
  | 'EPC'
  | 'MERCHANT'
  | 'MERCHANT_PARTNER'
  | 'MERCHANT_VALIDATION'
  | 'PAYMENT_REAL_NAME_AUTH'
  | 'PRODUCT_BOOST'
  | 'UPS'
  | 'WISH_EXPRESS'
  | 'WISH_EXPRESS_RETURN'
  | 'WPS';

export type TicketSearchType =
  | 'ID'
  | 'ORDER_ID'
  | 'PRODUCT_ID'
  | 'RETURN_ID'
  | 'SKU'
  | 'TRANSACTION_ID'
  | 'USER_NAME';

export type TicketSortFieldType =
  | 'CREATED_TIME'
  | 'LAST_UPDATE';

export type Timedelta = {
  __typename?: 'Timedelta';
  days: Scalars['Float'];
  hours: Scalars['Float'];
  minutes: Scalars['Float'];
  seconds: Scalars['Int'];
};

export type TodoItem = {
  __typename?: 'TodoItem';
  canSnooze: Scalars['Boolean'];
  completed: Scalars['Boolean'];
  id: Scalars['ObjectIdType'];
  pinned: Scalars['Boolean'];
  sentiment: MerchantTodoItemSentiment;
  snoozeCount: Scalars['Int'];
  snoozeHours?: Maybe<Scalars['Int']>;
  snoozeOptionText?: Maybe<Scalars['String']>;
  type: MerchantTodoItemType;
};

export type TodoSchema = {
  __typename?: 'TodoSchema';
  items: Array<TodoItem>;
};

export type TosServiceSchema = {
  __typename?: 'TosServiceSchema';
  termsOfService?: Maybe<TermsOfServiceSchema>;
};


export type TosServiceSchemaTermsOfServiceArgs = {
  country?: InputMaybe<CountryCode>;
  tosType: TermsOfServiceType;
  version?: InputMaybe<Scalars['Int']>;
};

export type TrackingCheckpointLocationSchema = {
  __typename?: 'TrackingCheckpointLocationSchema';
  city?: Maybe<Scalars['String']>;
  coordinates?: Maybe<GeoCoordinates>;
  country?: Maybe<Country>;
  state?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type TrackingCheckpointResultingStateSchema = {
  __typename?: 'TrackingCheckpointResultingStateSchema';
  state: CheckpointAfterActionState;
  text?: Maybe<Scalars['String']>;
};

export type TrackingCheckpointSchema = {
  __typename?: 'TrackingCheckpointSchema';
  date: Datetime;
  location: TrackingCheckpointLocationSchema;
  message?: Maybe<Scalars['String']>;
  resultingTracking: TrackingCheckpointResultingStateSchema;
  type?: Maybe<TrackingInfoCheckpointType>;
  wishpostAction?: Maybe<Scalars['String']>;
};

export type TrackingDisputeHub = {
  __typename?: 'TrackingDisputeHub';
  disputeCount?: Maybe<Scalars['Int']>;
  disputes?: Maybe<Array<TrackingDisputeSchema>>;
};


export type TrackingDisputeHubDisputeCountArgs = {
  creationDateEnd?: InputMaybe<DatetimeInput>;
  creationDateStart?: InputMaybe<DatetimeInput>;
  filterWarningDisputes?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<TrackingDisputeSearchType>;
  states: Array<TrackingDisputeState>;
};


export type TrackingDisputeHubDisputesArgs = {
  creationDateEnd?: InputMaybe<DatetimeInput>;
  creationDateStart?: InputMaybe<DatetimeInput>;
  filterWarningDisputes?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  searchType?: InputMaybe<TrackingDisputeSearchType>;
  sort?: InputMaybe<DisputeSort>;
  states: Array<TrackingDisputeState>;
};

export type TrackingDisputeMessageSchema = {
  __typename?: 'TrackingDisputeMessageSchema';
  date: Datetime;
  files: Array<MerchantFileSchema>;
  message?: Maybe<Scalars['String']>;
  reportedCountry?: Maybe<CountryCode>;
  reportedDeliveredDate?: Maybe<Datetime>;
  reportedFulfillmentDate?: Maybe<Datetime>;
  reportedState?: Maybe<UsStateCode>;
  senderName: Scalars['String'];
  senderType: TrackingDisputeMessageSenderType;
  type: TrackingDisputeMessageType;
};

export type TrackingDisputeMessageSenderType =
  | 'ADMIN'
  | 'MERCHANT';

export type TrackingDisputeMessageType =
  | 'ADMIN_COMMENT'
  | 'APPROVED'
  | 'CANCELLED'
  | 'CLOSE'
  | 'DECLINED'
  | 'INITIATED'
  | 'REOPEN'
  | 'REPLY';

export type TrackingDisputeSchema = {
  __typename?: 'TrackingDisputeSchema';
  carrierSiteLink?: Maybe<Scalars['String']>;
  createDate: Datetime;
  id: Scalars['ObjectIdType'];
  isClosed?: Maybe<Scalars['Boolean']>;
  isWishExpressLate: Scalars['Boolean'];
  lastUpdate?: Maybe<Datetime>;
  merchant: MerchantSchema;
  merchantNote?: Maybe<Scalars['String']>;
  messages: Array<TrackingDisputeMessageSchema>;
  orderId: Scalars['ObjectIdType'];
  orderInfractionDisputeSubreason?: Maybe<OrderInfractionDisputeSubreason>;
  productId: Scalars['ObjectIdType'];
  reportedCountry?: Maybe<CountryCode>;
  reportedDeliveredDate?: Maybe<Datetime>;
  reportedFulfillmentDate?: Maybe<Datetime>;
  reportedState?: Maybe<UsStateCode>;
  requestReason: Scalars['String'];
  state: TrackingDisputeState;
  trackingId?: Maybe<Scalars['String']>;
  warehouseCountry?: Maybe<Scalars['String']>;
  warningId?: Maybe<Scalars['ObjectIdType']>;
};

export type TrackingDisputeSearchType =
  | 'INFRACTION_ID'
  | 'ORDER_ID';

export type TrackingDisputeState =
  | 'APPROVED'
  | 'AWAITING_ADMIN'
  | 'AWAITING_MERCHANT'
  | 'CANCELLED'
  | 'DECLINED';

export type TrackingIdFormatSchema = {
  __typename?: 'TrackingIDFormatSchema';
  country?: Maybe<Country>;
  example?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
};

export type TrackingInfoCheckpointType =
  | 'DESTINATION'
  | 'SOURCE'
  | 'UNKNOWN'
  | 'WISHPOST_DELEGATE';

export type TrackingPerformanceStats = {
  __typename?: 'TrackingPerformanceStats';
  averageClaimedFulfillmentTime?: Maybe<Timedelta>;
  averageFulfillmentTime?: Maybe<Timedelta>;
  endDate: Datetime;
  lateConfirmedFulfillment?: Maybe<Scalars['Int']>;
  lateConfirmedFulfillmentRate?: Maybe<Scalars['Float']>;
  ordersFulfilled?: Maybe<Scalars['Int']>;
  ordersWithValidTracking?: Maybe<Scalars['Int']>;
  preFulfillmentCancellationRate?: Maybe<Scalars['Float']>;
  preFulfillmentCancellations?: Maybe<Scalars['Int']>;
  startDate: Datetime;
  validTrackingRate?: Maybe<Scalars['Float']>;
};

export type TrackingSourceEnum =
  | 'AFTERSHIP'
  | 'CANADAPOST'
  | 'CHINAPOST'
  | 'DHL'
  | 'EASYPOST'
  | 'EMS'
  | 'GENERIC'
  | 'LAPOSTE'
  | 'NO_OP'
  | 'ROUTE'
  | 'TRACK17'
  | 'TRACKINGMORE'
  | 'USER'
  | 'USPS'
  | 'WISHPOST'
  | 'WOSP'
  | 'WTS';

export type TrademarkCountryCode =
  | 'AE'
  | 'AU'
  | 'BR'
  | 'CA'
  | 'CH'
  | 'CN'
  | 'DE'
  | 'ES'
  | 'EU'
  | 'FR'
  | 'GB'
  | 'IN'
  | 'IT'
  | 'JP'
  | 'MX'
  | 'NL'
  | 'SG'
  | 'TR'
  | 'US';

export type TransactionPaymentType =
  | 'ADYEN'
  | 'ADYEN_BANKING'
  | 'AFFIRM'
  | 'AFTERPAY'
  | 'AFTERPAY_CASHAPP'
  | 'BOKU'
  | 'BOLETO'
  | 'BRAINTREE'
  | 'BRAINTREE_ACH'
  | 'BRAINTREE_FB'
  | 'BRAINTREE_GOOGLE'
  | 'BRAINTREE_PAYPAL'
  | 'BRAINTREE_VENMO'
  | 'COMMERCE_LOAN'
  | 'EBANX'
  | 'FB_CHECKOUT'
  | 'KLARNA'
  | 'KLARNA_PAYLATER'
  | 'NONE'
  | 'OFFLINE_CASH'
  | 'OXXO'
  | 'PAYNEARME'
  | 'PAYPAL'
  | 'PAYTM'
  | 'PIX'
  | 'SHOPIFY_CHECKOUT'
  | 'STRIPE'
  | 'STRIPE_APPLE_PAY'
  | 'STRIPE_GOOGLE'
  | 'STRIPE_IDEAL'
  | 'STRIPE_SAMSUNG_PAY'
  | 'TWITTERDIRECTBUY'
  | 'UNKNOWN'
  | 'XENDIT_INVOICE';

export type TrueTagSchema = {
  __typename?: 'TrueTagSchema';
  id: Scalars['ObjectIdType'];
  name: Scalars['String'];
  topLevel?: Maybe<TrueTagSchema>;
};

export type TwoFactorCodeState =
  | 'EXPIRED'
  | 'INVALID'
  | 'OK';

export type TwoFactorGenTokenInput = {
  isEnablingTfa?: InputMaybe<Scalars['Boolean']>;
  sendPhoneCall?: InputMaybe<Scalars['Boolean']>;
  username: Scalars['String'];
};

export type TwoFactorGenTokenMutation = {
  __typename?: 'TwoFactorGenTokenMutation';
  allowTfaPhone?: Maybe<Scalars['Boolean']>;
  bdEmail?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  isInternalEmployee?: Maybe<Scalars['Boolean']>;
  isMerchant?: Maybe<Scalars['Boolean']>;
  obfuscatedPhoneNumber?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type TwoFactorMutations = {
  __typename?: 'TwoFactorMutations';
  sendCode: TwoFactorSendCodeMutation;
  turnOff: TwoFactorTurnOffMutation;
  turnOn: TwoFactorTurnOnMutation;
  verifyCode: TwoFactorVerifyCodeMutation;
};


export type TwoFactorMutationsTurnOffArgs = {
  input: TwoFactorTurnOffInput;
};


export type TwoFactorMutationsTurnOnArgs = {
  input: TwoFactorTurnOnInput;
};


export type TwoFactorMutationsVerifyCodeArgs = {
  input: TwoFactorVerifyCodeInput;
};

export type TwoFactorSendCodeMutation = {
  __typename?: 'TwoFactorSendCodeMutation';
  error?: Maybe<Scalars['String']>;
  sent?: Maybe<Scalars['Boolean']>;
  sentTime?: Maybe<Datetime>;
};

export type TwoFactorTurnOffInput = {
  code: Scalars['String'];
};

export type TwoFactorTurnOffMutation = {
  __typename?: 'TwoFactorTurnOffMutation';
  codeState?: Maybe<TwoFactorCodeState>;
  error?: Maybe<Scalars['String']>;
  isOn?: Maybe<Scalars['Boolean']>;
};

export type TwoFactorTurnOnInput = {
  code: Scalars['String'];
};

export type TwoFactorTurnOnMutation = {
  __typename?: 'TwoFactorTurnOnMutation';
  backupCodes?: Maybe<Array<Scalars['String']>>;
  codeState?: Maybe<TwoFactorCodeState>;
  error?: Maybe<Scalars['String']>;
  isOn?: Maybe<Scalars['Boolean']>;
};

export type TwoFactorVerifyCodeInput = {
  code: Scalars['String'];
};

export type TwoFactorVerifyCodeMutation = {
  __typename?: 'TwoFactorVerifyCodeMutation';
  codeState?: Maybe<TwoFactorCodeState>;
  error?: Maybe<Scalars['String']>;
};

export type TypeOfInfringement =
  | 'BRAND_PROTECTION'
  | 'COPYRIGHT'
  | 'COUNTERFEIT'
  | 'EU_COMMUNITY_DESIGN_VIOLATION'
  | 'PATENT_INFRINGEMENT'
  | 'RIGHT_OF_PUBLICITY'
  | 'TRADEMARK_INFRINGEMENT';

export type UiStateMutations = {
  __typename?: 'UIStateMutations';
  clear: ClearUiState;
  clearAll: ClearAllUiState;
  update: UpdateUiState;
};


export type UiStateMutationsClearArgs = {
  input: UpdateUiStateInput;
};


export type UiStateMutationsUpdateArgs = {
  input: UpdateUiStateInput;
};

export type UiStateSchema = {
  __typename?: 'UIStateSchema';
  bool?: Maybe<Scalars['Boolean']>;
  int?: Maybe<Scalars['Int']>;
  intArray?: Maybe<Array<Scalars['Int']>>;
  string?: Maybe<Scalars['String']>;
  stringArray?: Maybe<Array<Scalars['String']>>;
};


export type UiStateSchemaBoolArgs = {
  state: UserUiState;
};


export type UiStateSchemaIntArgs = {
  state: UserUiState;
};


export type UiStateSchemaIntArrayArgs = {
  state: UserUiState;
};


export type UiStateSchemaStringArgs = {
  state: UserUiState;
};


export type UiStateSchemaStringArrayArgs = {
  state: UserUiState;
};

export type UkVatInfoSchema = {
  __typename?: 'UKVatInfoSchema';
  eoriNumber: Scalars['String'];
  name: Scalars['String'];
  number: Scalars['String'];
};

export type UpcProductSchema = {
  __typename?: 'UPCProductSchema';
  brandName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  upc: Scalars['String'];
  variations?: Maybe<Array<UpcVariationSchema>>;
};

export type UpcProductServiceSchema = {
  __typename?: 'UPCProductServiceSchema';
  product?: Maybe<UpcProductSchema>;
};


export type UpcProductServiceSchemaProductArgs = {
  upc?: Scalars['String'];
};

export type UpcVariationSchema = {
  __typename?: 'UPCVariationSchema';
  color?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  price?: Maybe<CurrencyValue>;
  productName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  upc: Scalars['String'];
};

export type UsStateCode =
  | 'AA'
  | 'AE'
  | 'AK'
  | 'AL'
  | 'AP'
  | 'AR'
  | 'AS'
  | 'AZ'
  | 'CA'
  | 'CO'
  | 'CT'
  | 'DC'
  | 'DE'
  | 'FL'
  | 'GA'
  | 'GU'
  | 'HI'
  | 'IA'
  | 'ID'
  | 'IL'
  | 'IN'
  | 'KS'
  | 'KY'
  | 'LA'
  | 'MA'
  | 'MD'
  | 'ME'
  | 'MI'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MS'
  | 'MT'
  | 'NC'
  | 'ND'
  | 'NE'
  | 'NH'
  | 'NJ'
  | 'NM'
  | 'NV'
  | 'NY'
  | 'OH'
  | 'OK'
  | 'OR'
  | 'PA'
  | 'RI'
  | 'SC'
  | 'SD'
  | 'TN'
  | 'TX'
  | 'UT'
  | 'VA'
  | 'VT'
  | 'WA'
  | 'WI'
  | 'WV'
  | 'WY';

export type UsTaxConstants = {
  __typename?: 'USTaxConstants';
  homeRuleStates: Array<Scalars['String']>;
  marketplaceMunicipalities: Array<UsTaxMarketplaceMunicipalities>;
  marketplaceStates: Array<Scalars['String']>;
  nomadStates: Array<Scalars['String']>;
};

export type UsTaxMarketplaceMunicipalities = {
  __typename?: 'USTaxMarketplaceMunicipalities';
  cities: Array<Scalars['String']>;
  counties: Array<Scalars['String']>;
  districts: Array<Scalars['String']>;
  stateCode: Scalars['String'];
};

export type UnclaimNotices = {
  __typename?: 'UnclaimNotices';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UnclaimNoticesInput = {
  noticeIds: Array<Scalars['ObjectIdType']>;
};

export type Union = {
  __typename?: 'Union';
  code: Scalars['String'];
  countries?: Maybe<Array<Country>>;
  name: Scalars['String'];
};


export type UnionNameArgs = {
  localized?: InputMaybe<Scalars['Boolean']>;
};

export type UnitCombined =
  | 'CENTILITER'
  | 'CENTIMETER'
  | 'COUNT'
  | 'CUBICMETER'
  | 'FLUID_OUNCE'
  | 'FOOT'
  | 'GALLON'
  | 'GRAM'
  | 'INCH'
  | 'KILOGRAM'
  | 'LITER'
  | 'LOAD'
  | 'METER'
  | 'MILLIGRAM'
  | 'MILLILITER'
  | 'OUNCE'
  | 'PINT'
  | 'POD'
  | 'POUND'
  | 'QUART'
  | 'ROLL'
  | 'SQUARE_FOOT'
  | 'SQUARE_METER'
  | 'WASH'
  | 'YARD';

export type UpdateAuditQueueWarning = {
  __typename?: 'UpdateAuditQueueWarning';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateAuditQueueWarningInput = {
  action: MerchantWarningAuditAction;
  auditRevertReason?: InputMaybe<MerchantWarningAuditRevertReason>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  ids?: InputMaybe<Array<Scalars['ObjectIdType']>>;
};

export type UpdateDedupImage = {
  __typename?: 'UpdateDedupImage';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateDedupImageInput = {
  brandId: Scalars['ObjectIdType'];
  imageIds: Array<Scalars['ObjectIdType']>;
};

export type UpdateMerchantFinalSale = {
  __typename?: 'UpdateMerchantFinalSale';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateMerchantGamingReviewTicket = {
  __typename?: 'UpdateMerchantGamingReviewTicket';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateNotifier = {
  __typename?: 'UpdateNotifier';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateNotifierInput = {
  newCountryCodes?: InputMaybe<Array<CountryCode>>;
  newIsTrustedFlagger?: InputMaybe<Scalars['Boolean']>;
  newName?: InputMaybe<Scalars['String']>;
  newOrganization?: InputMaybe<Scalars['String']>;
  notifierId: Scalars['ObjectIdType'];
};

export type UpdateOffsiteBoost = {
  __typename?: 'UpdateOffsiteBoost';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateOrderDeliveryConfirmation = {
  __typename?: 'UpdateOrderDeliveryConfirmation';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateOrderDeliveryConfirmationInput = {
  dateDelivered: DatetimeInput;
  deliveryReceiptFileUrl?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ObjectIdType'];
  trackingUrl?: InputMaybe<Scalars['String']>;
};

export type UpdatePayPalSettingInput = {
  businessId?: InputMaybe<Scalars['String']>;
  businessName?: InputMaybe<Scalars['String']>;
  collectorType: MerchantPaymentCollectorType;
  email: Scalars['String'];
  personalId?: InputMaybe<Scalars['String']>;
  personalName: Scalars['String'];
  personalPhoneNumber: Scalars['String'];
};

export type UpdatePayPalSettingMutation = {
  __typename?: 'UpdatePayPalSettingMutation';
  message?: Maybe<Scalars['String']>;
  newNextPayoutTime?: Maybe<Datetime>;
  ok: Scalars['Boolean'];
};

export type UpdatePayoneerSettingInput = {
  businessId?: InputMaybe<Scalars['String']>;
  businessName?: InputMaybe<Scalars['String']>;
  collectorType: MerchantPaymentCollectorType;
  personalId?: InputMaybe<Scalars['String']>;
  personalName: Scalars['String'];
  personalPhoneNumber: Scalars['String'];
};

export type UpdatePayoneerSettingMutation = {
  __typename?: 'UpdatePayoneerSettingMutation';
  message?: Maybe<Scalars['String']>;
  newNextPayoutTime?: Maybe<Datetime>;
  ok: Scalars['Boolean'];
};

export type UpdatePermissionInput = {
  id: Scalars['String'];
  permission: PermissionType;
  status: PermissionStatusType;
};

export type UpdatePermissionMutation = {
  __typename?: 'UpdatePermissionMutation';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateProductLogisticsMetadata = {
  __typename?: 'UpdateProductLogisticsMetadata';
  errorMessage?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type UpdateProductLogisticsMetadataInput = {
  packageDimensions: PackageDimensionsInput;
  productId: Scalars['ObjectIdType'];
  variationId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type UpdateRoleInput = {
  assigned: Scalars['Boolean'];
  id: Scalars['String'];
  role: RoleType;
};

export type UpdateRoleMutation = {
  __typename?: 'UpdateRoleMutation';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateShippingProvider = {
  __typename?: 'UpdateShippingProvider';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  shippingProvider?: Maybe<ShippingProviderSchema>;
};

export type UpdateShippingProviderName = {
  __typename?: 'UpdateShippingProviderName';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  shippingProvider?: Maybe<ShippingProviderSchema>;
};

export type UpdateShippingProviderNameInput = {
  name: Scalars['String'];
  providerId: Scalars['Int'];
};

export type UpdateShippingSetting = {
  __typename?: 'UpdateShippingSetting';
  message?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
  useShopifyShippingRate?: Maybe<Scalars['Boolean']>;
};

export type UpdateSystemUpdateBaseAnnouncement = {
  __typename?: 'UpdateSystemUpdateBaseAnnouncement';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateSystemUpdateBaseAnnouncementInput = {
  audienceGroups?: InputMaybe<Array<AudienceGroup>>;
  categories?: InputMaybe<Array<AnnouncementCategory>>;
  content?: InputMaybe<Array<CreateAnnouncementContentSchemaInput>>;
  expiryDate?: InputMaybe<DatetimeInput>;
  id: Scalars['ObjectIdType'];
  locales?: InputMaybe<Array<AnnouncementLocale>>;
  merchantIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  program?: InputMaybe<AnnouncementProgram>;
  publishDate?: InputMaybe<DatetimeInput>;
};

export type UpdateUiState = {
  __typename?: 'UpdateUIState';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateUiStateInput = {
  boolValue?: InputMaybe<Scalars['Boolean']>;
  intArrayValue?: InputMaybe<Array<Scalars['Int']>>;
  intValue?: InputMaybe<Scalars['Int']>;
  state: UserUiState;
  stringArrayValue?: InputMaybe<Array<Scalars['String']>>;
  stringValue?: InputMaybe<Scalars['String']>;
};

export type UpdateUin = {
  __typename?: 'UpdateUin';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateUinInput = {
  id: Scalars['ObjectIdType'];
  responsibleEntityName: Scalars['String'];
  uin: Scalars['String'];
};

export type UpdateUserInfoInput = {
  bdMerchantCountry?: InputMaybe<BdMerchantCountryCodeType>;
  email?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ObjectIdType'];
  lastName?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['ObjectIdType']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInfoMutation = {
  __typename?: 'UpdateUserInfoMutation';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdateUserQueuesInput = {
  assigned: Scalars['Boolean'];
  id: Scalars['ObjectIdType'];
  queueId: Scalars['ObjectIdType'];
};

export type UpdateUserQueuesMutation = {
  __typename?: 'UpdateUserQueuesMutation';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UploadBankAccountDocument = {
  __typename?: 'UploadBankAccountDocument';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UploadBankAccountDocumentInput = {
  bankDocFile: FileInput;
};

export type UploadEuvatTaxQuestionnaire = {
  __typename?: 'UploadEUVATTaxQuestionnaire';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UploadMutations = {
  __typename?: 'UploadMutations';
  initiateUpload?: Maybe<InitiateUploadMutation>;
};


export type UploadMutationsInitiateUploadArgs = {
  input: InitiateUploadInput;
};

export type UploadProductComplianceDocuments = {
  __typename?: 'UploadProductComplianceDocuments';
  failure?: Maybe<Scalars['String']>;
  fileUrls?: Maybe<Array<Scalars['String']>>;
  ok: Scalars['Boolean'];
};

export type UpsertConfirmedDeliveryCarrier = {
  __typename?: 'UpsertConfirmedDeliveryCarrier';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertDiscountCampaignInput = {
  countries?: InputMaybe<Array<CountryCode>>;
  discountData?: InputMaybe<Array<VariationDiscountDataInput>>;
  endTime?: InputMaybe<DatetimeInput>;
  eventId?: InputMaybe<Scalars['ObjectIdType']>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  name?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<DatetimeInput>;
};

export type UpsertDiscountCampaignMutation = {
  __typename?: 'UpsertDiscountCampaignMutation';
  campaignId?: Maybe<Scalars['ObjectIdType']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertFlashSaleCampaignInput = {
  countries?: InputMaybe<Array<CountryCode>>;
  discountData?: InputMaybe<Array<VariationDiscountDataInput>>;
  endTime?: InputMaybe<DatetimeInput>;
  eventId?: InputMaybe<Scalars['ObjectIdType']>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  name?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<DatetimeInput>;
};

export type UpsertFlashSaleCampaignMutation = {
  __typename?: 'UpsertFlashSaleCampaignMutation';
  campaignId?: Maybe<Scalars['ObjectIdType']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertFranceLinkProductCompliance = {
  __typename?: 'UpsertFranceLinkProductCompliance';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  rateLimit?: Maybe<Scalars['Boolean']>;
};

export type UpsertFranceLinkProductComplianceInput = {
  action: LinkProductComplianceAction;
  category?: InputMaybe<FranceProductUniqueIdentificationNumberCategory>;
  compliance: LinkProductComplianceType;
  productIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  responsiblePersonId?: InputMaybe<Scalars['ObjectIdType']>;
  uinIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
};

export type UpsertFranceProductUniqueIdentificationNumber = {
  __typename?: 'UpsertFranceProductUniqueIdentificationNumber';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertGermanyLinkProductCompliance = {
  __typename?: 'UpsertGermanyLinkProductCompliance';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  rateLimit?: Maybe<Scalars['Boolean']>;
};

export type UpsertGermanyLinkProductComplianceInput = {
  action: LinkProductComplianceAction;
  category?: InputMaybe<GermanyProductUniqueIdentificationNumberCategory>;
  compliance: LinkProductComplianceType;
  productIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  responsiblePersonId?: InputMaybe<Scalars['ObjectIdType']>;
  uinIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
};

export type UpsertGermanyProductUniqueIdentificationNumber = {
  __typename?: 'UpsertGermanyProductUniqueIdentificationNumber';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertLinkProductCompliance = {
  __typename?: 'UpsertLinkProductCompliance';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertMerchantReturnSettingsMutation = {
  __typename?: 'UpsertMerchantReturnSettingsMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertMerchantReturnSettingsMutationInput = {
  authType?: InputMaybe<AuthType>;
  countryCode: CountryCode;
  policyType: PolicyType;
  productId?: InputMaybe<Scalars['String']>;
  returnDays: Scalars['Int'];
  useWishReturnWarehouse: Scalars['Boolean'];
  variationId?: InputMaybe<Scalars['String']>;
  warehouseId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type UpsertMerchantReturnWarehouseMutation = {
  __typename?: 'UpsertMerchantReturnWarehouseMutation';
  id?: Maybe<Scalars['ObjectIdType']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertMerchantSenderAddressInput = {
  address: AddressInput;
  isDefault: Scalars['Boolean'];
  merchantSenderAddressId?: InputMaybe<Scalars['ObjectIdType']>;
  warehouseName: Scalars['String'];
};

export type UpsertMerchantSenderAddressMutation = {
  __typename?: 'UpsertMerchantSenderAddressMutation';
  id?: Maybe<Scalars['ObjectIdType']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertMerchantTaxIdentificationInput = {
  address: AddressInput;
  businessName?: InputMaybe<Scalars['String']>;
  businessType?: InputMaybe<MerchantTaxIdentificationBusinessType>;
  domicileExplanation?: InputMaybe<Scalars['String']>;
  employeeIdNumber?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  foreignTaxId?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  paymentReceiverIdentity: MerchantTaxIdentificationPaymentReceiverEntity;
  selfIdentityClassification: MerchantTaxIdentificationSelfIdentityClassification;
  signDate: DatetimeInput;
};

export type UpsertMerchantTaxIdentificationMutation = {
  __typename?: 'UpsertMerchantTaxIdentificationMutation';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertMerchantWarehouseMutation = {
  __typename?: 'UpsertMerchantWarehouseMutation';
  id?: Maybe<Scalars['ObjectIdType']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertMerchantWarning = {
  __typename?: 'UpsertMerchantWarning';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertMerchantWarningInput = {
  action: MerchantWarningAction;
  cancelInput?: InputMaybe<CancelInfractionInput>;
  claimInput?: InputMaybe<ClaimInfractionInput>;
  closeInput?: InputMaybe<CloseInfractionInput>;
  disputeInput?: InputMaybe<DisputeInfractionInput>;
  messageInput?: InputMaybe<ReplyInfractionInput>;
  requestPaymentInput?: InputMaybe<RequestPaymentInput>;
  warningId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type UpsertOrderInfractionDispute = {
  __typename?: 'UpsertOrderInfractionDispute';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertOrderInfractionDisputeInput = {
  action: OrderInfractionDisputeAction;
  adminMessage?: InputMaybe<Scalars['String']>;
  cannedResponseId?: InputMaybe<Scalars['ObjectIdType']>;
  carrierSiteLink?: InputMaybe<Scalars['String']>;
  customerAddressProof?: InputMaybe<Array<FileInput>>;
  disputeSubreason?: InputMaybe<OrderInfractionDisputeSubreason>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  invalidAddressProof?: InputMaybe<Array<FileInput>>;
  message?: InputMaybe<Scalars['String']>;
  newTrackingNumber?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['ObjectIdType']>;
  reportedDeliveredDate?: InputMaybe<DatetimeInput>;
  reportedDestinationCountryCode?: InputMaybe<CountryCode>;
  reportedDestinationStateCode?: InputMaybe<UsStateCode>;
  reportedFulfillmentDate?: InputMaybe<DatetimeInput>;
  reportedShippingProviderId?: InputMaybe<Scalars['ObjectIdType']>;
  shippedFromCountryCode?: InputMaybe<CountryCode>;
  uploadFiles?: InputMaybe<Array<FileInput>>;
  warehouseCountryCode?: InputMaybe<CountryCode>;
  warningId?: InputMaybe<Scalars['ObjectIdType']>;
  warningReason?: InputMaybe<MerchantWarningReason>;
};

export type UpsertProduct = {
  __typename?: 'UpsertProduct';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  productId?: Maybe<Scalars['ObjectIdType']>;
};

export type UpsertProductCategoryDispute = {
  __typename?: 'UpsertProductCategoryDispute';
  message?: Maybe<Scalars['String']>;
  nextId?: Maybe<Scalars['ObjectIdType']>;
  ok: Scalars['Boolean'];
};

export type UpsertProductCategoryDisputeInput = {
  action: ProductCategoryDisputeAction;
  adminUnchangedOtherReasonDetails?: InputMaybe<Scalars['String']>;
  adminUnchangedReason?: InputMaybe<ProductCategoryDisputeAdminUnchangedReason>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  merchantNote?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['ObjectIdType']>;
  proposedTopCategoryTagId?: InputMaybe<Scalars['ObjectIdType']>;
  reason?: InputMaybe<ProductCategoryDisputeReason>;
  source?: InputMaybe<ProductCategoryDisputeSource>;
  uploadFiles?: InputMaybe<Array<FileInput>>;
};

export type UpsertProducts = {
  __typename?: 'UpsertProducts';
  failures?: Maybe<Array<UpsertProductsErrorItem>>;
  ok: Scalars['Boolean'];
  productIds?: Maybe<Array<Scalars['ObjectIdType']>>;
};

export type UpsertProductsErrorItem = {
  __typename?: 'UpsertProductsErrorItem';
  message: Scalars['String'];
  productId?: Maybe<Scalars['ObjectIdType']>;
};

export type UpsertProductsFromCsvFile = {
  __typename?: 'UpsertProductsFromCSVFile';
  jobId?: Maybe<Scalars['ObjectIdType']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertProductsFromCsvFileInput = {
  columnIdList?: InputMaybe<Array<Scalars['String']>>;
  feedType: ProductCsvJobType;
  fileUrl: Scalars['String'];
};

export type UpsertRegulator = {
  __typename?: 'UpsertRegulator';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertRegulatorInput = {
  action: RegulatorAction;
  countryRegionCode: CountryCode;
  emailAddress: Scalars['String'];
  name: Scalars['String'];
  organization: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  website: Scalars['String'];
};

export type UpsertRegulatorReport = {
  __typename?: 'UpsertRegulatorReport';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertRegulatorReportInput = {
  action: RegulatorReportAction;
  caseNumber?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  emailAddress: Scalars['String'];
  reason: RegulatorReportReason;
  supportingFiles: Array<FileInput>;
  urls: Array<Scalars['String']>;
};

export type UpsertResponsiblePerson = {
  __typename?: 'UpsertResponsiblePerson';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertRestrictedProductRequest = {
  __typename?: 'UpsertRestrictedProductRequest';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertReturnWarehouseInput = {
  address: AddressInput;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type UpsertShippingProfile = {
  __typename?: 'UpsertShippingProfile';
  id?: Maybe<Scalars['ObjectIdType']>;
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertTaxSettingsInput = {
  countryOfDomicile: CountryCode;
  euStandardShipFromCc?: InputMaybe<CountryCode>;
  euWishExpressShipFromCc?: InputMaybe<CountryCode>;
  settings: Array<TaxSettingsInput>;
};

export type UpsertTaxSettingsMutation = {
  __typename?: 'UpsertTaxSettingsMutation';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertVideo = {
  __typename?: 'UpsertVideo';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  videoId?: Maybe<Scalars['ObjectIdType']>;
};

export type UpsertWarehouseInput = {
  address?: InputMaybe<AddressInput>;
  enabledCountries?: InputMaybe<Array<CountryCode>>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  merchantFulfillmentTimeInfo?: InputMaybe<MerchantFulfillmentTimeInfoInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpsertWebhookSubscription = {
  __typename?: 'UpsertWebhookSubscription';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpsertWebhookSubscriptionInput = {
  endpoint: Scalars['String'];
  subscriptionId?: InputMaybe<Scalars['ObjectIdType']>;
  topicId?: InputMaybe<Scalars['ObjectIdType']>;
};

export type UserBackToOnboardingReason =
  | 'DORMANT'
  | 'FAKE_NON_CN_NO_REAL_NAME'
  | 'REVERT_REVIEW_RESULT'
  | 'TRIGGERED_CN_VERIFICATION';

export type UserEntityType =
  | 'COMPANY'
  | 'INDIVIDUAL';

export type UserGateSchema = {
  __typename?: 'UserGateSchema';
  isAllowed: Scalars['Boolean'];
};


export type UserGateSchemaIsAllowedArgs = {
  name: Scalars['String'];
};

export type UserMutation = {
  __typename?: 'UserMutation';
  changeEmail?: Maybe<ChangeEmailMutation>;
  changePhoneNumber: ChangePhoneNumberMutation;
  deleteAllDevices: DeleteAllDevicesMutation;
  deleteDevice: DeleteDeviceMutation;
  manualLinkEntity: MerchantEntityManualLinkMutations;
  merchant?: Maybe<MerchantMutation>;
  onboarding: UserOnboardingMutations;
  password: PasswordMutations;
  twoFactorAuthentication: TwoFactorMutations;
  uiState?: Maybe<UiStateMutations>;
};


export type UserMutationChangeEmailArgs = {
  input: ChangeEmailInput;
};


export type UserMutationDeleteDeviceArgs = {
  input: DeleteDeviceInput;
};

export type UserOnboardingAboutBusinessInfo = {
  existingStoreUrl?: InputMaybe<Scalars['String']>;
  onboardingAnnualRevenueRange: Scalars['String'];
  onboardingExistingSellingLocations: ExistingSellingLocations;
  onboardingHasErpPartners?: InputMaybe<Scalars['Boolean']>;
  onboardingMerchantSellerAge: Scalars['String'];
  onboardingProductCategory: Scalars['String'];
  onboardingSkuQuantity: Scalars['Int'];
  onboardingTopPerformingWebsite?: InputMaybe<Scalars['String']>;
  onboardingWishLocalInterested?: InputMaybe<Scalars['Boolean']>;
};

export type UserOnboardingAccountSetup = {
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  storeName?: InputMaybe<Scalars['String']>;
};

export type UserOnboardingAccountSetupMutation = {
  __typename?: 'UserOnboardingAccountSetupMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UserOnboardingBusinessInfo = {
  city: Scalars['String'];
  country: CountryCode;
  countryOfDomicile?: InputMaybe<CountryCode>;
  onboardingBusinessRegistrationName?: InputMaybe<Scalars['String']>;
  onboardingBusinessRegistrationNumber?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress1: Scalars['String'];
  streetAddress2?: InputMaybe<Scalars['String']>;
  zipcode: Scalars['String'];
};

export type UserOnboardingContactInfo = {
  city: Scalars['String'];
  country: CountryCode;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
  streetAddress1: Scalars['String'];
  streetAddress2?: InputMaybe<Scalars['String']>;
  zipcode: Scalars['String'];
};

export type UserOnboardingMutations = {
  __typename?: 'UserOnboardingMutations';
  setAboutBusinessInfo?: Maybe<UserOnboardingSetAboutBusinessInfoMutation>;
  setAccountInfo?: Maybe<UserOnboardingAccountSetupMutation>;
  setBusinessInfo?: Maybe<UserOnboardingSetBusinessInfoMutation>;
  setContactInfo?: Maybe<UserOnboardingSetContactInfoMutation>;
  verifyPhoneNumber?: Maybe<UserOnboardingVerifyPhoneNumberMutation>;
};


export type UserOnboardingMutationsSetAboutBusinessInfoArgs = {
  input: UserOnboardingAboutBusinessInfo;
};


export type UserOnboardingMutationsSetAccountInfoArgs = {
  input: UserOnboardingAccountSetup;
};


export type UserOnboardingMutationsSetBusinessInfoArgs = {
  input: UserOnboardingBusinessInfo;
};


export type UserOnboardingMutationsSetContactInfoArgs = {
  input: UserOnboardingContactInfo;
};


export type UserOnboardingMutationsVerifyPhoneNumberArgs = {
  input: UserOnboardingVerifyPhoneNumber;
};

export type UserOnboardingSetAboutBusinessInfoMutation = {
  __typename?: 'UserOnboardingSetAboutBusinessInfoMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UserOnboardingSetBusinessInfoMutation = {
  __typename?: 'UserOnboardingSetBusinessInfoMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UserOnboardingSetContactInfoMutation = {
  __typename?: 'UserOnboardingSetContactInfoMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UserOnboardingVerifyPhoneNumber = {
  byPhoneCall?: InputMaybe<Scalars['Boolean']>;
  phoneNumber: Scalars['String'];
  verificationCode?: InputMaybe<Scalars['String']>;
};

export type UserOnboardingVerifyPhoneNumberMutation = {
  __typename?: 'UserOnboardingVerifyPhoneNumberMutation';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UserSchema = {
  __typename?: 'UserSchema';
  accountManager?: Maybe<UserSchema>;
  alerts?: Maybe<Array<AlertSchema>>;
  backToOnboardingReason?: Maybe<UserBackToOnboardingReason>;
  bdMerchantCountry?: Maybe<BdMerchantCountryCodeType>;
  businessAddress?: Maybe<AddressSchema>;
  canAcceptMerchantTos: Scalars['Boolean'];
  canAccessHome: Scalars['Boolean'];
  canEditPhoneNumber: Scalars['Boolean'];
  canHandleEscalatedMerchantGamingReview: Scalars['Boolean'];
  companyName?: Maybe<Scalars['String']>;
  confirmEmailPath?: Maybe<Scalars['String']>;
  currentDevices: Array<DeviceSchema>;
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  entityType?: Maybe<UserEntityType>;
  factoryManager?: Maybe<UserSchema>;
  firstName?: Maybe<Scalars['String']>;
  gating: UserGateSchema;
  hasPermission: Scalars['Boolean'];
  hasSeenFbwTos: Scalars['Boolean'];
  hasTfaBackupCodes: Scalars['Boolean'];
  id: Scalars['ObjectIdType'];
  isAdmin: Scalars['Boolean'];
  isApiUser: Scalars['Boolean'];
  isBd?: Maybe<Scalars['Boolean']>;
  isEnabled: Scalars['Boolean'];
  isNewNav?: Maybe<Scalars['Boolean']>;
  isOnCsTeam: Scalars['Boolean'];
  isSalesRep: Scalars['Boolean'];
  isStoreOrMerchantUser: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  manager?: Maybe<UserSchema>;
  manualMerchantConnections?: Maybe<Array<MerchantConnectionSchema>>;
  merchantId?: Maybe<Scalars['ObjectIdType']>;
  name?: Maybe<Scalars['String']>;
  numCurrentDevices?: Maybe<Scalars['Int']>;
  oidcCredentials?: Maybe<Array<OidcCredentialSchema>>;
  onboarding?: Maybe<OnboardingSchema>;
  onboardingUrl?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<PermissionSchema>>;
  phoneNumber?: Maybe<Scalars['String']>;
  possibleManagers?: Maybe<Array<UserSchema>>;
  qqGroupNumber?: Maybe<Scalars['String']>;
  queues?: Maybe<Array<LogicalQueueSchema>>;
  roles?: Maybe<Array<RoleSchema>>;
  serviceTypes?: Maybe<Array<UserServiceType>>;
  supportConfig?: Maybe<MerchantSupportConfigSchema>;
  tfaTokenSentTime?: Maybe<Datetime>;
  todo: TodoSchema;
  twoFactorEnabled: Scalars['Boolean'];
  uiState?: Maybe<UiStateSchema>;
  username: Scalars['String'];
  utmSource?: Maybe<Scalars['String']>;
};


export type UserSchemaCurrentDevicesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type UserSchemaHasPermissionArgs = {
  permissions: Array<PermissionType>;
};


export type UserSchemaOnboardingUrlArgs = {
  currentUrlPath: Scalars['String'];
};


export type UserSchemaPermissionsArgs = {
  status: PermissionStatusType;
};


export type UserSchemaQueuesArgs = {
  assigned?: InputMaybe<Scalars['Boolean']>;
};

export type UserServiceType =
  | 'EMAIL'
  | 'TAGGING'
  | 'TICKET';

export type UserUiState =
  | 'DISMISSED_FULFILLMENT_PENALTY_INSIGHT'
  | 'DISMISSED_FULFILLMENT_SLA_INSIGHT'
  | 'DISMISSED_HOW_TO_FULFILL_INSIGHT'
  | 'DISMISSED_KYC_VERIFICATION_INTRO_BANNER'
  | 'DISMISSED_SELLER_VERIFICATION_INTRO_BANNER'
  | 'DISMISSED_SWITCH_NAV_BACK_TUTORIAL'
  | 'DISMISSED_VIDEO_OPTIMIZE_TIPS'
  | 'DISMISSED_WISH_EXPRESS_INTRO_BANNER'
  | 'FULFILLMENT_MOST_RECENT_ORIGIN_COUNTRIES'
  | 'FULFILLMENT_MOST_RECENT_SHIPPING_PROVIDERS'
  | 'HAS_COMPLETED_CS_SURVEY'
  | 'HAS_SEEN_KYC_VERIFICATION_SUCCESS_MESSAGE'
  | 'HAS_SEEN_MFP_PRICE_ONLY_CAROUSEL'
  | 'HAS_SEEN_PB_PRODUCTS_TABLE_V2'
  | 'HAS_SEEN_SELLER_VERIFICATION_SUCCESS_MESSAGE'
  | 'PREFERS_NEW_NAV'
  | 'PREFERS_OLD_NAV'
  | 'STORE_TIME_SEEN_SELL_ON_WISH_BANNER';

export type UsersSortFieldType =
  | 'EMAIL'
  | 'ID'
  | 'USERNAME';

export type VacationSettings = {
  __typename?: 'VacationSettings';
  changeVacationSettings: ChangeVacationSettingsMutation;
  clearVacationSettings: ClearVacationSettingsMutation;
};


export type VacationSettingsChangeVacationSettingsArgs = {
  input: ChangeVacationSettingsInput;
};

export type VacationSettingsSchema = {
  __typename?: 'VacationSettingsSchema';
  endDate: Datetime;
  extensionDays: Scalars['Int'];
  primaryWarehouseOnly: Scalars['Boolean'];
  startDate: Datetime;
};

export type ValidationResultSchema = {
  __typename?: 'ValidationResultSchema';
  isEvent: Scalars['Boolean'];
  payableId: Scalars['String'];
  reason: Array<Reason>;
};

export type VariationDimensions = {
  __typename?: 'VariationDimensions';
  height: Length;
  length: Length;
  width: Length;
};

export type VariationDiscountDataInput = {
  discountPercentage: Scalars['Float'];
  maxQuantity?: InputMaybe<Scalars['Int']>;
  productId: Scalars['ObjectIdType'];
  variationId: Scalars['ObjectIdType'];
};

export type VariationInput = {
  attributes?: InputMaybe<Array<AttributeInput>>;
  color?: InputMaybe<Scalars['String']>;
  consignmentSupplyCost?: InputMaybe<Scalars['Float']>;
  cost?: InputMaybe<CurrencyInput>;
  customsHsCode?: InputMaybe<Scalars['String']>;
  declaredLocalName?: InputMaybe<Scalars['String']>;
  declaredName?: InputMaybe<Scalars['String']>;
  declaredValue?: InputMaybe<CurrencyInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  gtin?: InputMaybe<Scalars['String']>;
  hasBattery?: InputMaybe<Scalars['Boolean']>;
  hasLiquid?: InputMaybe<Scalars['Boolean']>;
  hasMetal?: InputMaybe<Scalars['Boolean']>;
  hasPowder?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<LengthInput>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  image?: InputMaybe<ImageInput>;
  inventory?: InputMaybe<Array<InventoryInput>>;
  length?: InputMaybe<LengthInput>;
  options?: InputMaybe<Array<AttributeInput>>;
  originCountry?: InputMaybe<CountryCode>;
  pieces?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<CurrencyInput>;
  quantityArea?: InputMaybe<AreaInput>;
  quantityLength?: InputMaybe<LengthInput>;
  quantityUnit?: InputMaybe<CountInput>;
  quantityVolume?: InputMaybe<VolumeInput>;
  quantityWeight?: InputMaybe<WeightInput>;
  size?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<WeightInput>;
  width?: InputMaybe<LengthInput>;
};

export type VariationSchema = {
  __typename?: 'VariationSchema';
  attributes?: Maybe<Array<MerchantProvidedAttributeSchema>>;
  color?: Maybe<Scalars['String']>;
  consignmentSupplyCost?: Maybe<CurrencyValue>;
  customsHsCode?: Maybe<Scalars['String']>;
  declaredLocalName?: Maybe<Scalars['String']>;
  declaredName?: Maybe<Scalars['String']>;
  declaredValue?: Maybe<CurrencyValue>;
  effectiveWeight?: Maybe<Weight>;
  enabled?: Maybe<Scalars['Boolean']>;
  fbwInventory: Array<FbwInventorySchema>;
  gtin?: Maybe<Scalars['String']>;
  hasBattery?: Maybe<Scalars['Boolean']>;
  hasLiquid?: Maybe<Scalars['Boolean']>;
  hasMetal?: Maybe<Scalars['Boolean']>;
  hasPowder?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Length>;
  id: Scalars['ObjectIdType'];
  image?: Maybe<ImageSchema>;
  inventory: Array<InventorySchema>;
  length?: Maybe<Length>;
  logisticsMetadata: LogisticsMetadataSchema;
  msrp?: Maybe<CurrencyValue>;
  options?: Maybe<Array<MerchantProvidedAttributeSchema>>;
  originCountry?: Maybe<Country>;
  pieces?: Maybe<Scalars['Int']>;
  price: CurrencyValue;
  productId: Scalars['String'];
  productName: Scalars['String'];
  quantityArea?: Maybe<Area>;
  quantityLength?: Maybe<Length>;
  quantityUnit?: Maybe<Count>;
  quantityVolume?: Maybe<Volume>;
  quantityWeight?: Maybe<Weight>;
  size?: Maybe<Scalars['String']>;
  sku: Scalars['String'];
  totalInventory?: Maybe<Scalars['Int']>;
  weight?: Maybe<Weight>;
  width?: Maybe<Length>;
};


export type VariationSchemaTotalInventoryArgs = {
  shippingType?: InputMaybe<WarehouseShippingType>;
};

export type VariationSearchType =
  | 'PRODUCT_ID'
  | 'PRODUCT_NAME'
  | 'SKU';

export type VariationSort = {
  field: VariationSortField;
  order: SortOrderType;
};

export type VariationSortField =
  | 'ID'
  | 'INVENTORY'
  | 'SKU';

export type VerificationFlowTypes =
  | 'CN_FLOW'
  | 'DEFAULT_FLOW'
  | 'EEA_KYC'
  | 'SIGNUP_V3';

export type VideoCaptionSpec = {
  location: ScreenCoordinates;
  text: Scalars['String'];
};

export type VideoCategory =
  | 'ALL'
  | 'FASHION'
  | 'GADGETS'
  | 'HOBBIES'
  | 'HOME_DECOR'
  | 'KITCHEN'
  | 'MAKEUP_AND_BEAUTY'
  | 'OUTDOOR'
  | 'TOYS';

export type VideoLeaderboard = {
  __typename?: 'VideoLeaderboard';
  lastUpdated: Datetime;
  videos: Array<ProductVideo>;
};

export type VideoMotion =
  | 'PAN_LEFT'
  | 'PAN_RIGHT'
  | 'SLOW_EXPAND'
  | 'UNKNOWN_ANIMATION';

export type VideoMutations = {
  __typename?: 'VideoMutations';
  generateVideo?: Maybe<GenerateVideoMutation>;
  posts?: Maybe<ProductPostsMutations>;
};


export type VideoMutationsGenerateVideoArgs = {
  input: GenerateVideoInput;
};

export type VideoPerformance = {
  __typename?: 'VideoPerformance';
  addToCartPercentChange: Scalars['Float'];
  avgWatchTimePercentChange: Scalars['Float'];
  buyerIntentPercentChange: Scalars['Float'];
  conversionsPercentChange: Scalars['Float'];
  dailyStats: Array<ProductVideoDailyStats>;
  engagedViewsPercentChange: Scalars['Float'];
  totalGmvPercentChange: Scalars['Float'];
  totalLikesPercentChange: Scalars['Float'];
  totalViewsPercentChange: Scalars['Float'];
  totalWatchTimePercentChange: Scalars['Float'];
};

export type VideoQualityLevel =
  | 'AVERAGE'
  | 'BAD'
  | 'GOOD'
  | 'UNKNOWN_LEVEL';

export type VideoSearchType =
  | 'ID'
  | 'NAME'
  | 'PRODUCT_ID';

export type VideoSlideSpec = {
  caption: VideoCaptionSpec;
  duration: Scalars['Int'];
  imageMotion?: InputMaybe<VideoMotion>;
  inputUrl: Scalars['String'];
  isVideo: Scalars['Boolean'];
};

export type VideoSort = {
  field: VideoSortField;
  order: SortOrderType;
};

export type VideoSortField =
  | 'ID';

export type VideoUpsertInput = {
  audioEndTime?: InputMaybe<Scalars['Float']>;
  audioStartTime?: InputMaybe<Scalars['Float']>;
  audioUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ObjectIdType']>;
  productIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  title?: InputMaybe<Scalars['String']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<VideoVisibility>;
};

export type VideoVisibility =
  | 'LIVE'
  | 'UNLISTED';

export type ViewTermsOfService = {
  __typename?: 'ViewTermsOfService';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ViewTermsOfServiceById = {
  __typename?: 'ViewTermsOfServiceById';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type ViewTermsOfServiceByIdInput = {
  tosId: Scalars['ObjectIdType'];
};

export type Volume = {
  __typename?: 'Volume';
  unit: VolumeUnit;
  value: Scalars['Float'];
};


export type VolumeValueArgs = {
  targetUnit?: InputMaybe<VolumeUnit>;
};

export type VolumeInput = {
  unit: VolumeUnit;
  value: Scalars['Float'];
};

export type VolumeUnit =
  | 'CENTILITER'
  | 'CUBICMETER'
  | 'FLUID_OUNCE'
  | 'GALLON'
  | 'LITER'
  | 'MILLILITER'
  | 'PINT'
  | 'QUART';

export type WfpMutations = {
  __typename?: 'WFPMutations';
  cancelWfpWithhold?: Maybe<CancelWfpWithholdMutation>;
};


export type WfpMutationsCancelWfpWithholdArgs = {
  input: CancelWfpWithholdMutationInput;
};

export type WfpOrderDeliveryState =
  | 'LATE'
  | 'NOT_DELIVERED'
  | 'ON_TIME'
  | 'SIGNIFICANTLY_LATE'
  | 'UNKNOWN';

export type WfpWithholdReasonSchema = {
  __typename?: 'WFPWithholdReasonSchema';
  lateDeliveryDetail?: Maybe<LateDeliverySchema>;
  reason: Scalars['String'];
};

export type WpsAdditionalTrackingService = {
  __typename?: 'WPSAdditionalTrackingService';
  fee?: Maybe<CurrencyValue>;
  name: Scalars['String'];
  type: WpsAvailableServices;
};

export type WpsAvailableServices =
  | 'ADDITIONAL_HANDLING'
  | 'BASE_SERVICE'
  | 'SATURDAY_DELIVERY'
  | 'SIGNATURE_REQUIRED';

export type WpsFee = {
  __typename?: 'WPSFee';
  itemizedCharges: Array<WpsItemizedCharge>;
  totalFee: CurrencyValue;
};

export type WpsFeeAdjustment = {
  __typename?: 'WPSFeeAdjustment';
  amount: CurrencyValue;
  creationDate: Datetime;
  paymentId?: Maybe<Scalars['ObjectIdType']>;
  paymentProcessedDate?: Maybe<Datetime>;
  reason?: Maybe<Scalars['String']>;
};

export type WpsFulfillmentInfoSchema = {
  __typename?: 'WPSFulfillmentInfoSchema';
  feeAdjustments?: Maybe<Array<WpsFeeAdjustment>>;
  paymentId?: Maybe<Scalars['ObjectIdType']>;
  paymentProcessedDate?: Maybe<Datetime>;
  purchaseDate?: Maybe<Datetime>;
  shipmentFee: WpsFee;
  shipmentState: WpsShipmentState;
  shippingLabelDownloadLink?: Maybe<Scalars['String']>;
  shippingOptionId?: Maybe<Scalars['ObjectIdType']>;
};

export type WpsGetShippingOptionsSchema = {
  __typename?: 'WPSGetShippingOptionsSchema';
  errorMessage?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  shippingOptions?: Maybe<Array<WpsShippingOptionSchema>>;
};

export type WpsItemizedCharge = {
  __typename?: 'WPSItemizedCharge';
  fee: CurrencyValue;
  name: Scalars['String'];
  type: WpsAvailableServices;
};

export type WpsPackageType =
  | 'BOX'
  | 'ENVELOPE';

export type WpsShipmentState =
  | 'ADJUSTED'
  | 'ADJUSTMENT_PENDING'
  | 'CANCELLATION_PENDING'
  | 'CANCELLED'
  | 'COMPLETE'
  | 'CREATED'
  | 'EXPIRED'
  | 'FAILED'
  | 'ORDER_STATE_UPLOADED'
  | 'PAID'
  | 'PAYMENT_PENDING'
  | 'REFUNDED'
  | 'REFUND_PENDING';

export type WpsShippingOptionSchema = {
  __typename?: 'WPSShippingOptionSchema';
  availableAdditionalServiceOptions: Array<WpsAdditionalTrackingService>;
  daysToDeliver: Scalars['Int'];
  id: Scalars['ObjectIdType'];
  includesTracking: Scalars['Boolean'];
  isRegistered: Scalars['Boolean'];
  maxDaysToDeliver: Scalars['Int'];
  minDaysToDeliver: Scalars['Int'];
  name: Scalars['String'];
  price: CurrencyValue;
  provider: WpsShippingProviderSchema;
};

export type WpsShippingProviderSchema = {
  __typename?: 'WPSShippingProviderSchema';
  id: Scalars['String'];
  name: Scalars['String'];
  wpsId: Scalars['ObjectIdType'];
};

export type WpsTermsTypeEnum =
  | 'UPS'
  | 'WPS';

export type WssDeepDivePageType =
  | 'FULFILLMENT_RATE'
  | 'FULFILLMENT_SPEED'
  | 'LOGISTICS_REFUND'
  | 'VALID_TRACKING_RATE';

export type WssImpactState =
  | 'EVALUATING'
  | 'NO'
  | 'YES';

export type WssLogisticsRefundReason =
  | 'EPC_LAST_MILE_CARRIERS_UNABLE_TO_SHIP'
  | 'EPC_OVERSIZE'
  | 'EPC_OVERVALUE'
  | 'EPC_OVERWEIGHT'
  | 'FBW_FAILED_TO_FULFILL_DUE_TO_CARRIER_RETURN'
  | 'ITEM_HELD_AT_CUSTOMS'
  | 'ITEM_MARKED_DELIVERED_BUT_DID_NOT_ARRIVE'
  | 'ITEM_MARKED_DELIVERED_NOT_ALL_ITEMS_ARRIVED'
  | 'ITEM_NEVER_ARRIVED'
  | 'ITEM_RETURNED_TO_SENDER'
  | 'MERCHANT_SENT_TO_WRONG_ADDRESS'
  | 'NOT_QUALIFIED_SHIPPING_PROVIDER'
  | 'REPLACEMENT_NEVER_RECEIVED'
  | 'SHIPPING_TAKING_TOO_LONG'
  | 'USER_ENTERED_INVALID_ADDRESS';

export type WssMerchantLevelType =
  | 'BAN'
  | 'BRONZE'
  | 'GOLD'
  | 'PLATINUM'
  | 'SILVER'
  | 'UNASSESSED';

export type WssMetricTrend =
  | 'DECREASING'
  | 'INCREASING'
  | 'SAME'
  | 'UNSPECIFIED';

export type WssMetricType =
  | 'AVERAGE_USER_RATING'
  | 'LATE_CONFIRMED_FULFILLMENT'
  | 'LOGISTICS_REFUND'
  | 'MISLEADING_LISTING'
  | 'MISLEADING_TRACKING'
  | 'ORDER_CANCELLATION'
  | 'ORDER_FULFILLMENT_RATE'
  | 'ORDER_FULFILLMENT_SPEED'
  | 'PRODUCT_QUALITY_REFUND'
  | 'PROHIBITED_PRODUCT'
  | 'UNFULFILLED_ORDER'
  | 'VALID_TRACKING_RATE';

export type WssOrderFulfillment = {
  __typename?: 'WSSOrderFulfillment';
  carrier?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  fulfillmentSpeed?: Maybe<Timedelta>;
  orderId?: Maybe<Scalars['ObjectIdType']>;
  productId?: Maybe<Scalars['ObjectIdType']>;
  productImageUrl?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['ObjectIdType']>;
  transactionDate?: Maybe<Datetime>;
  unfulfilledReason?: Maybe<WsssUnfulfilledReasons>;
};

export type WssOrderFulfillmentPage = {
  __typename?: 'WSSOrderFulfillmentPage';
  dataSlice: Array<WssOrderFulfillment>;
  totalCount: Scalars['Int'];
};

export type WssOrderRefund = {
  __typename?: 'WSSOrderRefund';
  carrier?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['ObjectIdType']>;
  refundReason?: Maybe<ReturnRequestRefundReason>;
  transactionDate?: Maybe<Datetime>;
};

export type WssOrderRefundPage = {
  __typename?: 'WSSOrderRefundPage';
  dataSlice: Array<WssOrderRefund>;
  totalCount: Scalars['Int'];
};

export type WssPerformanceDeepDiveHub = {
  __typename?: 'WSSPerformanceDeepDiveHub';
  carriers?: Maybe<Array<Scalars['String']>>;
  carriersInFulfillment?: Maybe<Array<Scalars['String']>>;
  carriersInRefund?: Maybe<Array<Scalars['String']>>;
  destinations?: Maybe<Array<Scalars['String']>>;
  destinationsInFulfillment?: Maybe<Array<Scalars['String']>>;
  fulfillmentRateDenominator?: Maybe<Scalars['Int']>;
  hasFulfillmentSpeedOrderCount?: Maybe<Scalars['Int']>;
  logisticsRefundReasons?: Maybe<Array<WssLogisticsRefundReason>>;
  orderFulfillmentSpeed: WssOrderFulfillmentPage;
  orderInvalidTracking: WssOrderFulfillmentPage;
  orderLogisticsRefund: WssOrderRefundPage;
  orderQualityRefund: WssOrderRefundPage;
  orderUnfulfilled: WssOrderFulfillmentPage;
  productQualityRefund: WssProductRefundPage;
  productRating: WssProductRatingPage;
  qualityRefundBreakdown: Array<WssRefundBreakdown>;
  qualityRefundCount?: Maybe<Scalars['Int']>;
  qualityRefundReasons?: Maybe<Array<WssQualityRefundReason>>;
  refundRateDenominator?: Maybe<Scalars['Int']>;
  totalRatingsReceived?: Maybe<Scalars['Int']>;
  unfulfilledReasons?: Maybe<Array<WsssUnfulfilledReasons>>;
  validTrackingRateDenominator?: Maybe<Scalars['Int']>;
};


export type WssPerformanceDeepDiveHubCarriersArgs = {
  pageType: WssDeepDivePageType;
};


export type WssPerformanceDeepDiveHubDestinationsArgs = {
  pageType: WssDeepDivePageType;
};


export type WssPerformanceDeepDiveHubOrderFulfillmentSpeedArgs = {
  carriers?: InputMaybe<Array<Scalars['String']>>;
  destinations?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  sortField?: InputMaybe<SortOrderFulfillmentSpeed>;
  sortOrder?: InputMaybe<SortByOrder>;
};


export type WssPerformanceDeepDiveHubOrderInvalidTrackingArgs = {
  carriers?: InputMaybe<Array<Scalars['String']>>;
  destinations?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  sortField?: InputMaybe<SortOrderTransactionDateField>;
  sortOrder?: InputMaybe<SortByOrder>;
};


export type WssPerformanceDeepDiveHubOrderLogisticsRefundArgs = {
  carriers?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  refundReasons?: InputMaybe<Array<WssLogisticsRefundReason>>;
  sortField?: InputMaybe<SortOrderTransactionDateField>;
  sortOrder?: InputMaybe<SortByOrder>;
};


export type WssPerformanceDeepDiveHubOrderQualityRefundArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['ObjectIdType']>;
  refundReasons?: InputMaybe<Array<WssQualityRefundReason>>;
  sortField?: InputMaybe<SortOrderTransactionDateField>;
  sortOrder?: InputMaybe<SortByOrder>;
};


export type WssPerformanceDeepDiveHubOrderUnfulfilledArgs = {
  destinations?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  sortField?: InputMaybe<SortOrderTransactionDateField>;
  sortOrder?: InputMaybe<SortByOrder>;
  unfulfilledReasons?: InputMaybe<Array<WsssUnfulfilledReasons>>;
};


export type WssPerformanceDeepDiveHubProductQualityRefundArgs = {
  isBadByRefund?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  productIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  sortField?: InputMaybe<SortProductQualityRefundField>;
  sortOrder?: InputMaybe<SortByOrder>;
};


export type WssPerformanceDeepDiveHubProductRatingArgs = {
  isBadByRating?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  productIds?: InputMaybe<Array<Scalars['ObjectIdType']>>;
  sortField?: InputMaybe<SortProductRatingField>;
  sortOrder?: InputMaybe<SortByOrder>;
};


export type WssPerformanceDeepDiveHubQualityRefundBreakdownArgs = {
  productId?: InputMaybe<Scalars['ObjectIdType']>;
};


export type WssPerformanceDeepDiveHubQualityRefundReasonsArgs = {
  productId: Scalars['ObjectIdType'];
};

export type WssProductRating = {
  __typename?: 'WSSProductRating';
  averageRating: Scalars['Float'];
  productId: Scalars['ObjectIdType'];
  productImageUrl?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  receivedRatings: Scalars['Int'];
};

export type WssProductRatingPage = {
  __typename?: 'WSSProductRatingPage';
  dataSlice: Array<WssProductRating>;
  totalCount: Scalars['Int'];
};

export type WssProductRefund = {
  __typename?: 'WSSProductRefund';
  productId: Scalars['ObjectIdType'];
  productImageUrl?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  qualityRefundIssued: Scalars['Int'];
  qualityRefundRate?: Maybe<Scalars['Float']>;
  receivedOrders: Scalars['Int'];
};

export type WssProductRefundPage = {
  __typename?: 'WSSProductRefundPage';
  dataSlice: Array<WssProductRefund>;
  totalCount: Scalars['Int'];
};

export type WssQualityRefundReason =
  | 'EMPTY_PACKAGE'
  | 'INCORRECT_QUANTITY_OF_ITEMS'
  | 'ITEM_DID_NOT_MEET_EXPECTATIONS'
  | 'ITEM_DOES_NOT_FIT'
  | 'ITEM_DOES_NOT_MATCH_LISTING'
  | 'ITEM_DOES_NOT_WORK_AS_DESCRIBED'
  | 'ITEM_IS_COUNTERFEIT'
  | 'ITEM_IS_DAMAGED'
  | 'ITEM_IS_DANGEROUS'
  | 'ITEM_IS_POOR_QUALITY'
  | 'MISLEADING_LISTING'
  | 'MISSING_ITEM_OR_PARTS'
  | 'OTHER'
  | 'PRODUCT_LISTING_MISSING_INFO'
  | 'PRODUCT_MALFUNCTION'
  | 'RECEIVED_NOTE_FROM_MERCHANT'
  | 'RECEIVED_WRONG_ITEM'
  | 'STORE_SENT_THE_WRONG_SIZE'
  | 'WRONG_COLOR';

export type WssRefundBreakdown = {
  __typename?: 'WSSRefundBreakdown';
  count?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['ObjectIdType']>;
  reason?: Maybe<ReturnRequestRefundReason>;
};

export type WsssUnfulfilledReasons =
  | 'ORDER_CANCELLED'
  | 'ORDER_EXPIRED'
  | 'ORDER_REFUNDED'
  | 'ORDER_TRACKING_CANCELLED';

export type WssThingsToWatch = {
  __typename?: 'WSSThingsToWatch';
  metricTrend?: Maybe<WssMetricTrend>;
  metricType?: Maybe<WssMetricType>;
  metricValue?: Maybe<Scalars['Float']>;
  recordTime?: Maybe<Datetime>;
};

export type WssThingsToWatchBoard = {
  __typename?: 'WSSThingsToWatchBoard';
  dataSlice: Array<WssThingsToWatch>;
};

export type WarehouseCountryShippingInput = {
  countryShipping?: InputMaybe<Array<CountryShippingInput>>;
  shippingType: WarehouseShippingType;
};

export type WarehouseCountryShippingSchema = {
  __typename?: 'WarehouseCountryShippingSchema';
  countryShipping?: Maybe<Array<CountryShippingSchema>>;
  shippingType: WarehouseShippingType;
};

export type WarehouseShippingType =
  | 'FBW_V1'
  | 'FBW_V1_WLC'
  | 'FBW_V2'
  | 'FBW_V2_CALCULATED'
  | 'FBW_V2_EXPRESS'
  | 'FBW_V2_REGULAR'
  | 'MERCHANT_TTD_1_DAY'
  | 'MERCHANT_TTD_2_DAY'
  | 'MERCHANT_TTD_3_DAY'
  | 'MERCHANT_TTD_4_DAY'
  | 'MERCHANT_TTD_5_DAY'
  | 'MERCHANT_TTD_6_DAY'
  | 'MERCHANT_TTD_7_DAY'
  | 'MERCHANT_TTD_8_DAY'
  | 'MERCHANT_TTD_9_DAY'
  | 'MERCHANT_TTD_10_DAY'
  | 'MERCHANT_TTD_11_DAY'
  | 'MERCHANT_TTD_12_DAY'
  | 'MERCHANT_TTD_13_DAY'
  | 'MERCHANT_TTD_14_DAY'
  | 'MERCHANT_TTD_15_DAY'
  | 'MERCHANT_TTD_16_DAY'
  | 'MERCHANT_TTD_17_DAY'
  | 'MERCHANT_TTD_18_DAY'
  | 'MERCHANT_TTD_19_DAY'
  | 'MERCHANT_TTD_20_DAY'
  | 'MERCHANT_TTD_21_DAY'
  | 'MERCHANT_TTD_22_DAY'
  | 'MERCHANT_TTD_23_DAY'
  | 'MERCHANT_TTD_24_DAY'
  | 'MERCHANT_TTD_25_DAY'
  | 'MERCHANT_TTD_26_DAY'
  | 'MERCHANT_TTD_27_DAY'
  | 'MERCHANT_TTD_28_DAY'
  | 'MERCHANT_TTD_29_DAY'
  | 'MERCHANT_TTD_30_DAY'
  | 'MERCHANT_TTD_31_DAY'
  | 'MERCHANT_TTD_32_DAY'
  | 'MERCHANT_TTD_33_DAY'
  | 'MERCHANT_TTD_34_DAY'
  | 'MERCHANT_TTD_35_DAY'
  | 'MERCHANT_TTD_36_DAY'
  | 'MERCHANT_TTD_37_DAY'
  | 'MERCHANT_TTD_38_DAY'
  | 'MERCHANT_TTD_39_DAY'
  | 'MERCHANT_TTD_40_DAY'
  | 'MERCHANT_TTD_41_DAY'
  | 'MERCHANT_TTD_42_DAY'
  | 'MERCHANT_TTD_43_DAY'
  | 'MERCHANT_TTD_44_DAY'
  | 'MERCHANT_TTD_45_DAY'
  | 'REGULAR'
  | 'WAIT_AND_SAVE'
  | 'WISH_BLUE'
  | 'WISH_EXPRESS'
  | 'WISH_EXPRESS_2_DAY'
  | 'WISH_EXPRESS_7_DAY';

export type WarehouseVerificationRequestSchema = {
  __typename?: 'WarehouseVerificationRequestSchema';
  documentUrls: Array<Scalars['String']>;
  id: Scalars['ObjectIdType'];
  reviewTime?: Maybe<Datetime>;
  reviewerComment?: Maybe<Scalars['String']>;
  submitTime: Datetime;
};

export type WarehouseVerificationState =
  | 'INELIGIBLE'
  | 'PENDING_VERIFICATION'
  | 'REJECTED'
  | 'UNSET'
  | 'UNVERIFIED'
  | 'VERIFIED';

export type WebhookApiVersion =
  | 'V3';

export type WebhookMutations = {
  __typename?: 'WebhookMutations';
  deleteSubscription?: Maybe<DeleteWebhookSubscription>;
  sendTestMessage?: Maybe<SendTestMessage>;
  upsertSubscription?: Maybe<UpsertWebhookSubscription>;
};


export type WebhookMutationsDeleteSubscriptionArgs = {
  input: DeleteWebhookSubscriptionInput;
};


export type WebhookMutationsSendTestMessageArgs = {
  input: SendTestMessageInput;
};


export type WebhookMutationsUpsertSubscriptionArgs = {
  input: UpsertWebhookSubscriptionInput;
};

export type WebhookSchema = {
  __typename?: 'WebhookSchema';
  allowWebhookUi: Scalars['Boolean'];
  subscriptions?: Maybe<Array<WebhookSubscriptionSchema>>;
  topics: Array<WebhookTopicSchema>;
};


export type WebhookSchemaTopicsArgs = {
  apiVersion?: InputMaybe<WebhookApiVersion>;
};

export type WebhookSubscriptionInput = {
  endpoint: Scalars['String'];
  endpointType: SubscriptionEndpointType;
  id: Scalars['ObjectIdType'];
  topic: WebhookTopicInput;
};

export type WebhookSubscriptionSchema = {
  __typename?: 'WebhookSubscriptionSchema';
  deactivateReasonBrief?: Maybe<Scalars['String']>;
  deactivateReasonDetail?: Maybe<Scalars['String']>;
  deactivated: Scalars['Boolean'];
  endpoint: Scalars['String'];
  id: Scalars['ObjectIdType'];
  topic: WebhookTopicSchema;
};

export type WebhookTopicInput = {
  apiVersion: WebhookApiVersion;
  id: Scalars['ObjectIdType'];
  name: WebhookTopicName;
};

export type WebhookTopicName =
  | 'ORDER_ADDRESS_CHANGE'
  | 'ORDER_ALL'
  | 'ORDER_FULFILLMENT_DEADLINE'
  | 'ORDER_PENALTY'
  | 'ORDER_REFUND'
  | 'ORDER_RELEASE'
  | 'ORDER_TAX'
  | 'ORDER_TRACKING_UPDATE'
  | 'POLICY_PENALTY_CANCEL'
  | 'POLICY_PENALTY_ISSUE'
  | 'POLICY_PENALTY_REVERSE'
  | 'PRODUCT_BOOST_ACCOUNT_BALANCE_UPDATE'
  | 'PRODUCT_BOOST_CAMPAIGN_ATTRIBUTE_UPDATE'
  | 'PRODUCT_BOOST_CAMPAIGN_CREATION'
  | 'PRODUCT_BOOST_CAMPAIGN_PRODUCT_LOW_PERFORMANCE'
  | 'PRODUCT_BOOST_CAMPAIGN_PRODUCT_STATS_UPDATE'
  | 'PRODUCT_BOOST_CAMPAIGN_STATS_UPDATE'
  | 'PRODUCT_BOOST_TRENDING_CATEGORIES'
  | 'PRODUCT_IMAGE_JOB_STATUS_UPDATE'
  | 'PRODUCT_INVENTORY_CHANGE_MERCHANT'
  | 'PRODUCT_INVENTORY_CHANGE_WISH_USER'
  | 'PRODUCT_TAGGING_UPDATE'
  | 'PRODUCT_UPDATE_MERCHANT'
  | 'TICKET_AWAITING_MERCHANT';

export type WebhookTopicSchema = {
  __typename?: 'WebhookTopicSchema';
  apiVersion: WebhookApiVersion;
  id: Scalars['ObjectIdType'];
  name: WebhookTopicName;
};

export type WechatCheckScanInput = {
  qrTicket: Scalars['String'];
};

export type WechatCheckScanMutation = {
  __typename?: 'WechatCheckScanMutation';
  error?: Maybe<Scalars['String']>;
  expireIn?: Maybe<Scalars['Int']>;
  ok: Scalars['Boolean'];
  scanned?: Maybe<Scalars['Boolean']>;
};

export type Weight = {
  __typename?: 'Weight';
  unit: WeightUnit;
  value: Scalars['Float'];
};


export type WeightValueArgs = {
  targetUnit?: InputMaybe<WeightUnit>;
};

export type WeightInput = {
  unit: WeightUnit;
  value: Scalars['Float'];
};

export type WeightUnit =
  | 'GRAM'
  | 'KILOGRAM'
  | 'MILLIGRAM'
  | 'OUNCE'
  | 'POUND';

export type WhitelistProductInfo = {
  __typename?: 'WhitelistProductInfo';
  endTime: Datetime;
  product: ProductSchema;
  startTime: Datetime;
  variations: Array<VariationSchema>;
};

export type WhitelistProductSort = {
  field: MfpWhitelistProductSortBy;
  order: SortOrderType;
};

export type WishCompanyInfo = {
  __typename?: 'WishCompanyInfo';
  companyOperatorName: Scalars['String'];
  hqAddress: AddressSchema;
};

export type WishEuvatPayerInfo = {
  __typename?: 'WishEUVATPayerInfo';
  address: AddressSchema;
  iossNumber: Scalars['String'];
};

export type WishExpressCountryDetails = {
  __typename?: 'WishExpressCountryDetails';
  expectedTimeToDoor?: Maybe<Scalars['Int']>;
  supportsWishExpress: Scalars['Boolean'];
};

export type WishExpressInfoSchema = {
  __typename?: 'WishExpressInfoSchema';
  fulfillmentDeadline: Timedelta;
};

export type WishPostShippingSchema = {
  __typename?: 'WishPostShippingSchema';
  country: Country;
  maxPrice?: Maybe<CurrencyValue>;
  minPrice?: Maybe<CurrencyValue>;
};

export type WishPostShippingUpdatesSchema = {
  __typename?: 'WishPostShippingUpdatesSchema';
  amount: CurrencyValue;
  date: Datetime;
  orderId: Scalars['ObjectIdType'];
  paymentDate?: Maybe<Datetime>;
  reason: Scalars['String'];
};

export type WishSellerStandardStats = {
  __typename?: 'WishSellerStandardStats';
  badProductCount?: Maybe<Scalars['Int']>;
  badProductRate?: Maybe<Scalars['Float']>;
  date: Datetime;
  fulfillmentSpeed?: Maybe<Timedelta>;
  ipViolationProductCount: Scalars['Int'];
  lateConfirmedFulfillmentCount: Scalars['Int'];
  levelPreview?: Maybe<WssMerchantLevelType>;
  materialListingChangeCount: Scalars['Int'];
  maturedOrderCount: Scalars['Int'];
  misleadingListingCount: Scalars['Int'];
  misleadingTrackingCount: Scalars['Int'];
  ninetyDayOrderCount: Scalars['Int'];
  orderCancellationCount: Scalars['Int'];
  orderFultillmentRate?: Maybe<Scalars['Float']>;
  productLogisticsRefundRate?: Maybe<Scalars['Float']>;
  productQualityRefundRate?: Maybe<Scalars['Float']>;
  productWithOrdersCount?: Maybe<Scalars['Int']>;
  prohibitedProductCount: Scalars['Int'];
  repeatIpInfractionCount: Scalars['Int'];
  unfulfilledOrderCount: Scalars['Int'];
  userRating?: Maybe<Scalars['Float']>;
  validTrackingRate?: Maybe<Scalars['Float']>;
};

export type WishUserSchema = {
  __typename?: 'WishUserSchema';
  email?: Maybe<Scalars['String']>;
  emailBouncedReason?: Maybe<Scalars['String']>;
  id: Scalars['ObjectIdType'];
  isVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  signupMethod?: Maybe<WishUserSignupMethod>;
};

export type WishUserSignupMethod =
  | 'APPLE'
  | 'EMAIL'
  | 'FACEBOOK'
  | 'GOOGLE_PLUS'
  | 'PHONE_NUMBER';

export type WorkDayOverride = {
  __typename?: 'WorkDayOverride';
  date: Scalars['String'];
  value: Scalars['Boolean'];
};

export type WorkDayOverrideInput = {
  date: Scalars['String'];
  value: Scalars['Boolean'];
};

export type WorkdayCalender = {
  __typename?: 'WorkdayCalender';
  friday: Scalars['Boolean'];
  monday: Scalars['Boolean'];
  saturday: Scalars['Boolean'];
  sunday: Scalars['Boolean'];
  thursday: Scalars['Boolean'];
  tuesday: Scalars['Boolean'];
  wednesday: Scalars['Boolean'];
};

export type WorkdayCalenderInput = {
  friday: Scalars['Boolean'];
  monday: Scalars['Boolean'];
  saturday: Scalars['Boolean'];
  sunday: Scalars['Boolean'];
  thursday: Scalars['Boolean'];
  tuesday: Scalars['Boolean'];
  wednesday: Scalars['Boolean'];
};

export type WssTier =
  | 'BAN'
  | 'BRONZE'
  | 'GOLD'
  | 'PLATINUM'
  | 'SILVER'
  | 'UNASSESSED';

export type AuthQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQueryQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'UserSchema', id: string, roles?: Array<{ __typename?: 'RoleSchema', id: RoleType }> | null } | null };

export type Toolkit_InitialUploadMutationVariables = Exact<{
  input: InitiateUploadInput;
}>;


export type Toolkit_InitialUploadMutation = { __typename?: 'RootMutation', uploads?: { __typename?: 'UploadMutations', initiateUpload?: { __typename?: 'InitiateUploadMutation', ok: boolean, message?: string | null, uploadUrl?: string | null, uploadHeaders?: string | null, downloadUrl?: string | null } | null } | null };

export type Disputes_BulkActionMutationVariables = Exact<{
  input?: InputMaybe<BulkUpsertMerchantWarningInput>;
}>;


export type Disputes_BulkActionMutation = { __typename?: 'RootMutation', policy?: { __typename?: 'PolicyMutations', bulkUpsertMerchantWarning?: { __typename?: 'BulkUpsertMerchantWarning', ok: boolean, message?: string | null } | null } | null };

export type Dispute_ActionMutationVariables = Exact<{
  input?: InputMaybe<UpsertMerchantWarningInput>;
}>;


export type Dispute_ActionMutation = { __typename?: 'RootMutation', policy?: { __typename?: 'PolicyMutations', merchantWarning?: { __typename?: 'MerchantWarningMutations', upsertMerchantWarning?: { __typename?: 'UpsertMerchantWarning', ok: boolean, message?: string | null } | null } | null } | null };

export type Disputes_BulkStatusQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  types?: InputMaybe<Array<BulkMerchantWarningAction> | BulkMerchantWarningAction>;
}>;


export type Disputes_BulkStatusQuery = { __typename?: 'RootQuery', policy?: { __typename?: 'PolicySchema', merchantWarningBulkProcessCount?: number | null, merchantWarningBulkProcesses?: Array<{ __typename?: 'MerchantWarningBulkProcessSchema', id: string, type: BulkMerchantWarningAction, requestedBy: string, requestedWarningIds?: Array<string> | null, submitted: { __typename?: 'Datetime', unix: number }, results?: Array<{ __typename?: 'MerchantWarningProcessResultSchema', warningId: string, success: boolean, error?: string | null }> | null }> | null } | null };

export type Disputes_MessagesQueryVariables = Exact<{
  warningId?: InputMaybe<Scalars['ObjectIdType']>;
}>;


export type Disputes_MessagesQuery = { __typename?: 'RootQuery', policy?: { __typename?: 'PolicySchema', merchantWarning?: { __typename?: 'MerchantWarningSchema', replies?: Array<{ __typename?: 'MerchantWarningReplySchema', senderType?: MerchantWarningReplySenderType | null, senderName?: string | null, message?: string | null, date?: { __typename?: 'Datetime', unix: number } | null }> | null, trackingDispute?: { __typename?: 'TrackingDisputeSchema', messages: Array<{ __typename?: 'TrackingDisputeMessageSchema', senderType: TrackingDisputeMessageSenderType, senderName: string, message?: string | null, date: { __typename?: 'Datetime', unix: number } }> } | null } | null } | null };

export type Disputes_GetInfractionsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ObjectIdType']>;
  ids?: InputMaybe<Array<Scalars['ObjectIdType']> | Scalars['ObjectIdType']>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  states?: InputMaybe<Array<MerchantWarningState> | MerchantWarningState>;
  claimStatus?: InputMaybe<MerchantWarningClaimStatus>;
  reasons?: InputMaybe<Array<MerchantWarningReason> | MerchantWarningReason>;
  sort?: InputMaybe<MerchantWarningSort>;
  issueDateStart?: InputMaybe<DatetimeInput>;
  issueDateEnd?: InputMaybe<DatetimeInput>;
  searchProofIdTypes?: InputMaybe<Array<MerchantWarningProofType> | MerchantWarningProofType>;
  category?: InputMaybe<CounterfeitReasonCode>;
  subcategory?: InputMaybe<TaggingViolationSubReasonCode>;
  correspondenceStatus?: InputMaybe<MerchantWarningCorrespondenceStatus>;
  disputePendingEditReview?: InputMaybe<Scalars['Boolean']>;
  disputePendingBrandAuth?: InputMaybe<Scalars['Boolean']>;
}>;


export type Disputes_GetInfractionsQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'UserSchema', id: string } | null, policy?: { __typename?: 'PolicySchema', merchantWarningCount?: number | null, merchantWarnings?: Array<{ __typename?: 'MerchantWarningSchema', id: string, creatorName?: string | null, adminReasonText?: string | null, counterfeitReasonText?: string | null, banned?: boolean | null, correspondenceStatus?: MerchantWarningCorrespondenceStatus | null, wssImpact: WssImpactState, urgencyScore?: number | null, bulkProcessing?: boolean | null, productTrueTagInfo?: { __typename?: 'ProductTrueTagInfoSchema', subreason?: { __typename?: 'TaggingViolationSubcategory', subcategory?: TaggingViolationSubReasonCode | null } | null } | null, claimedBy?: { __typename?: 'UserSchema', id: string } | null, createdTime: { __typename?: 'Datetime', unix: number }, lastUpdate: { __typename?: 'Datetime', unix: number }, merchant?: { __typename?: 'MerchantSchema', id: string, displayName: string, accountManager?: { __typename?: 'UserSchema', name?: string | null, bdMerchantCountry?: BdMerchantCountryCodeType | null } | null, wishSellerStandard: { __typename?: 'MerchantWishSellerStandardDetails', level?: WssMerchantLevelType | null }, storeStats: { __typename?: 'MerchantStats', thirtyDayTotals: { __typename?: 'MerchantTotalStats', orders: number }, sevenDayTotals: { __typename?: 'MerchantTotalStats', gmv: { __typename?: 'CurrencyValue', display: string } }, totalGmv: { __typename?: 'CurrencyValue', display: string } } } | null }> | null } | null };

export type SellerIdentity_ReviewBankDocumentMutationVariables = Exact<{
  input: ReviewBankAccountDocumentInput;
}>;


export type SellerIdentity_ReviewBankDocumentMutation = { __typename?: 'RootMutation', merchantIdentity?: { __typename?: 'MerchantIdentityMutations', bankAccountVerification: { __typename?: 'BankAccountVerificationReviewerMutations', reviewDocument?: { __typename?: 'ReviewBankAccountDocument', ok: boolean, message?: string | null } | null } } | null };

export type SellerIdentity_BankAccountDocumentsQueryVariables = Exact<{
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
}>;


export type SellerIdentity_BankAccountDocumentsQuery = { __typename?: 'RootQuery', merchants?: { __typename?: 'MerchantServiceSchema', merchant?: { __typename?: 'MerchantSchema', state: CommerceMerchantState, bankAccountVerification?: { __typename?: 'BankAccountVerificationSchema', id: string, state: BankAccountVerificationStatus, bankAccountDocuments?: Array<{ __typename?: 'BankAccountDocumentSchema', id: string, state: BankAccountVerificationStatus, comment?: string | null, documentType?: BankAccountDocumentType | null, documentFile?: { __typename?: 'MerchantFileSchema', id: string, fileUrl: string } | null, uploadedAt: { __typename?: 'Datetime', unix: number }, reviewedAt?: { __typename?: 'Datetime', unix: number } | null, reviewer?: { __typename?: 'UserSchema', name?: string | null } | null }> | null } | null } | null } | null };

export type SellerIdentity_BankAccountVerificationsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  merchantId?: InputMaybe<Scalars['ObjectIdType']>;
  state?: InputMaybe<BankAccountVerificationStatus>;
}>;


export type SellerIdentity_BankAccountVerificationsQuery = { __typename?: 'RootQuery', merchantIdentity?: { __typename?: 'MerchantIdentityServiceSchema', bankAccountVerificationsCount?: number | null, bankAccountVerifications?: Array<{ __typename?: 'BankAccountVerificationSchema', id: string, state: BankAccountVerificationStatus, lastReviewedAt?: { __typename?: 'Datetime', unix: number } | null, lastUploadedAt?: { __typename?: 'Datetime', unix: number } | null, bankAccountDocuments?: Array<{ __typename?: 'BankAccountDocumentSchema', id: string }> | null }> | null } | null };

export type Authentication_LoginMutationMutationVariables = Exact<{
  input: LoginMutationInput;
}>;


export type Authentication_LoginMutationMutation = { __typename?: 'RootMutation', authentication?: { __typename?: 'AuthenticationMutations', login?: { __typename?: 'LoginMutation', loginOk: boolean, error?: string | null, errorState?: LoginErrorState | null } | null } | null };

export type DevOnly_GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type DevOnly_GetUserQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'UserSchema', id: string } | null };


export const AuthQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AuthQueryQuery, AuthQueryQueryVariables>;
export const Toolkit_InitialUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Toolkit_InitialUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InitiateUploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"initiateUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"uploadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"uploadHeaders"}},{"kind":"Field","name":{"kind":"Name","value":"downloadUrl"}}]}}]}}]}}]} as unknown as DocumentNode<Toolkit_InitialUploadMutation, Toolkit_InitialUploadMutationVariables>;
export const Disputes_BulkActionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Disputes_BulkAction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BulkUpsertMerchantWarningInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"policy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bulkUpsertMerchantWarning"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<Disputes_BulkActionMutation, Disputes_BulkActionMutationVariables>;
export const Dispute_ActionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Dispute_Action"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertMerchantWarningInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"policy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantWarning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertMerchantWarning"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Dispute_ActionMutation, Dispute_ActionMutationVariables>;
export const Disputes_BulkStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Disputes_BulkStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BulkMerchantWarningAction"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"policy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantWarningBulkProcessCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}}]},{"kind":"Field","name":{"kind":"Name","value":"merchantWarningBulkProcesses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"types"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"submitted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unix"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"requestedBy"}},{"kind":"Field","name":{"kind":"Name","value":"requestedWarningIds"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"warningId"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Disputes_BulkStatusQuery, Disputes_BulkStatusQueryVariables>;
export const Disputes_MessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Disputes_Messages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"warningId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectIdType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"policy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantWarning"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"warningId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"senderType"}},{"kind":"Field","name":{"kind":"Name","value":"senderName"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"date"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unix"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"trackingDispute"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"senderType"}},{"kind":"Field","name":{"kind":"Name","value":"senderName"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"date"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unix"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Disputes_MessagesQuery, Disputes_MessagesQueryVariables>;
export const Disputes_GetInfractionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Disputes_GetInfractions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectIdType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectIdType"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"states"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantWarningState"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"claimStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantWarningClaimStatus"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reasons"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantWarningReason"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantWarningSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueDateStart"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DatetimeInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueDateEnd"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DatetimeInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchProofIdTypes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantWarningProofType"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CounterfeitReasonCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subcategory"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TaggingViolationSubReasonCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"correspondenceStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantWarningCorrespondenceStatus"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disputePendingEditReview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disputePendingBrandAuth"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"policy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantWarningCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"states"},"value":{"kind":"Variable","name":{"kind":"Name","value":"states"}}},{"kind":"Argument","name":{"kind":"Name","value":"claimStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"claimStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"reasons"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reasons"}}},{"kind":"Argument","name":{"kind":"Name","value":"issueDateStart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueDateStart"}}},{"kind":"Argument","name":{"kind":"Name","value":"issueDateEnd"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueDateEnd"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchProofIdTypes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchProofIdTypes"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"Argument","name":{"kind":"Name","value":"subcategory"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subcategory"}}},{"kind":"Argument","name":{"kind":"Name","value":"correspondenceStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"correspondenceStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"disputePendingEditReview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disputePendingEditReview"}}},{"kind":"Argument","name":{"kind":"Name","value":"disputePendingBrandAuth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disputePendingBrandAuth"}}}]},{"kind":"Field","name":{"kind":"Name","value":"merchantWarnings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"states"},"value":{"kind":"Variable","name":{"kind":"Name","value":"states"}}},{"kind":"Argument","name":{"kind":"Name","value":"claimStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"claimStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"reasons"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reasons"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"issueDateStart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueDateStart"}}},{"kind":"Argument","name":{"kind":"Name","value":"issueDateEnd"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueDateEnd"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchProofIdTypes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchProofIdTypes"}}},{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"Argument","name":{"kind":"Name","value":"subcategory"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subcategory"}}},{"kind":"Argument","name":{"kind":"Name","value":"correspondenceStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"correspondenceStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"disputePendingEditReview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disputePendingEditReview"}}},{"kind":"Argument","name":{"kind":"Name","value":"disputePendingBrandAuth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disputePendingBrandAuth"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"creatorName"}},{"kind":"Field","name":{"kind":"Name","value":"adminReasonText"}},{"kind":"Field","name":{"kind":"Name","value":"counterfeitReasonText"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}},{"kind":"Field","name":{"kind":"Name","value":"correspondenceStatus"}},{"kind":"Field","name":{"kind":"Name","value":"wssImpact"}},{"kind":"Field","name":{"kind":"Name","value":"urgencyScore"}},{"kind":"Field","name":{"kind":"Name","value":"bulkProcessing"}},{"kind":"Field","name":{"kind":"Name","value":"productTrueTagInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subreason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subcategory"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"claimedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdTime"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unix"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastUpdate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unix"}}]}},{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"accountManager"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bdMerchantCountry"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wishSellerStandard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"storeStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"thirtyDayTotals"},"name":{"kind":"Name","value":"totals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"days"},"value":{"kind":"IntValue","value":"30"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"sevenDayTotals"},"name":{"kind":"Name","value":"totals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"days"},"value":{"kind":"IntValue","value":"7"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gmv"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalGmv"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<Disputes_GetInfractionsQuery, Disputes_GetInfractionsQueryVariables>;
export const SellerIdentity_ReviewBankDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SellerIdentity_ReviewBankDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReviewBankAccountDocumentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantIdentity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bankAccountVerification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reviewDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SellerIdentity_ReviewBankDocumentMutation, SellerIdentity_ReviewBankDocumentMutationVariables>;
export const SellerIdentity_BankAccountDocumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SellerIdentity_BankAccountDocuments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectIdType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountVerification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountDocuments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"documentFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"console"},"value":{"kind":"BooleanValue","value":true}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"uploadedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unix"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"reviewedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unix"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SellerIdentity_BankAccountDocumentsQuery, SellerIdentity_BankAccountDocumentsQueryVariables>;
export const SellerIdentity_BankAccountVerificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SellerIdentity_BankAccountVerifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectIdType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BankAccountVerificationStatus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantIdentity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bankAccountVerificationsCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}}},{"kind":"Argument","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}}]},{"kind":"Field","name":{"kind":"Name","value":"bankAccountVerifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantId"}}},{"kind":"Argument","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"lastReviewedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unix"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastUploadedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unix"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountDocuments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SellerIdentity_BankAccountVerificationsQuery, SellerIdentity_BankAccountVerificationsQueryVariables>;
export const Authentication_LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authentication_LoginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authentication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginOk"}},{"kind":"Field","name":{"kind":"Name","value":"error"}},{"kind":"Field","name":{"kind":"Name","value":"errorState"}}]}}]}}]}}]} as unknown as DocumentNode<Authentication_LoginMutationMutation, Authentication_LoginMutationMutationVariables>;
export const DevOnly_GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DevOnly_GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DevOnly_GetUserQuery, DevOnly_GetUserQueryVariables>;