import {
  Action,
  QueryState,
} from "@app/seller-identity/toolkit/bank-verifications/reducer";
import { Dispatch, createContext, useContext } from "react";

type tableContext = {
  readonly queryState: QueryState;
  readonly dispatch: Dispatch<Action>;
};
export const TableContext = createContext<tableContext | null>(null);
export const useTableContext = () => {
  const ctx = useContext(TableContext);
  if (!ctx) {
    throw new Error("TableContext.Provider not found");
  }
  return ctx;
};
