import { Action, QueryState } from "@app/infractions/toolkit/reducer";
import { TableData } from "@app/infractions/toolkit/table";
import { Dispatch, createContext, useContext } from "react";
import { UseQueryExecute } from "urql";

type tableContext = {
  readonly tableData: ReadonlyArray<TableData>;
  readonly queryState: QueryState;
  readonly dispatch: Dispatch<Action>;
  readonly reexecuteQuery: UseQueryExecute;
};

export const TableContext = createContext<tableContext | null>(null);
export const useTableContext = () => {
  const ctx = useContext(TableContext);
  if (!ctx) {
    throw new Error("No TableContext.Provider found");
  }
  return ctx;
};
