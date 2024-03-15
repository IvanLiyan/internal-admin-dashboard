import {
  BankAccountVerificationStatus,
  MerchantIdentityVerificationType,
} from "@schema";

export type QueryState = {
  merchantId: string | null;
  page: number;
  limit: number;
  offset: number;
  status: BankAccountVerificationStatus | null;
  verificationType: MerchantIdentityVerificationType;
};
export type Action = Partial<Omit<QueryState, "offset">>;

export const initQueryState = (action: Action): QueryState => {
  return {
    page: 0,
    limit: 10,
    offset: 0,
    merchantId: null,
    status: null,
    verificationType: "TAX_FORM",
    ...action,
  };
};
export const queryStateReducer = (
  state: QueryState,
  action: Action
): QueryState => {
  const newState = {
    ...state,
    ...action,
  };
  return {
    ...newState,
    offset: newState.page * newState.limit,
    merchantId: !newState.merchantId ? null : newState.merchantId,
  };
};
