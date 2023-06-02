import { BankAccountVerificationStatus } from "@schema";

export type State = {
  merchantId: string | null;
  page: number;
  limit: number;
  offset: number;
  status: BankAccountVerificationStatus | null;
};
export type Action = Partial<Omit<State, "offset">>;

export const initTableState = (action: Action): State => {
  return {
    page: 0,
    limit: 10,
    offset: 0,
    merchantId: null,
    status: null,
    ...action,
  };
};
export const tableStateReducer = (state: State, action: Action): State => {
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
