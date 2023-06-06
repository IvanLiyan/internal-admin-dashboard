import {
  ColumnLabel,
  SearchTypes,
  TableData,
} from "@app/infractions/toolkit/table";
import {
  CounterfeitReasonCode,
  MerchantWarningClaimStatus,
  MerchantWarningReason,
  MerchantWarningState,
  SortOrderType,
  TaggingViolationSubReasonCode,
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
    category: null,
    subcategory: null,
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
  category: CounterfeitReasonCode | null;
  subcategory: TaggingViolationSubReasonCode | null;
};

export type Action =
  | Partial<State>
  | {
      actionType: "VALIDATE_SELECTION";
      validRows: ReadonlyArray<TableData>;
    };

export const tableStateReducer = (state: State, action: Action): State => {
  if ("actionType" in action) {
    const newSelection = state.selected.filter((id) =>
      action.validRows.some((row) => row.infractionId == id && !row.bulkStatus)
    );
    if (
      newSelection.every((id) => state.selected.includes(id)) &&
      state.selected.every((id) => newSelection.includes(id))
    ) {
      return state;
    }
    return {
      ...state,
      selected: newSelection,
    };
  }

  const newState = {
    ...state,
    ...action,
  };
  return {
    ...newState,
    offset: newState.page * newState.limit,
  };
};
