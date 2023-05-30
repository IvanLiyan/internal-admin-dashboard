import { ColumnLabel, SearchTypes } from "@app/infractions/toolkit/table";
import {
  MerchantWarningClaimStatus,
  MerchantWarningReason,
  MerchantWarningState,
  SortOrderType,
} from "@schema";

export const initTableState = (states: Action): State => {
  return {
    search: "",
    searchBy: "ID",
    order: "DESC",
    orderBy: "created",
    selected: [],
    page: 0,
    limit: 10,
    offset: 0,
    states: [],
    issueDateStart: null,
    issueDateEnd: null,
    reasons: null,
    claimStatus: null,
    ...states,
  };
};

export type State = {
  search: string;
  searchBy: SearchTypes;
  order: SortOrderType;
  orderBy: keyof typeof ColumnLabel;
  selected: string[];
  page: number;
  limit: number;
  offset: number;
  states: MerchantWarningState[];
  issueDateStart: number | null;
  issueDateEnd: number | null;
  reasons: MerchantWarningReason[] | null;
  claimStatus: MerchantWarningClaimStatus | null;
};

export type Action = Partial<State>;

export const tableStateReducer = (state: State, action: Action): State => {
  const newState = {
    ...state,
    ...action,
  };
  return {
    ...newState,
    offset: newState.page * newState.limit,
  };
};
