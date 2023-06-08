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

export const initQueryState = (states: Action): QueryState => {
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

export type QueryState = {
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
  | Partial<QueryState>
  | {
      actionType: "VALIDATE_SELECTION";
      validRows: ReadonlyArray<TableData>;
    };

export const queryStateReducer = (
  state: QueryState,
  action: Action
): QueryState => {
  if ("actionType" in action) {
    if (action.actionType == "VALIDATE_SELECTION") {
      const newSelection = state.selected.filter((id) =>
        action.validRows.some(
          (row) => row.infractionId == id && !row.bulkStatus
        )
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
