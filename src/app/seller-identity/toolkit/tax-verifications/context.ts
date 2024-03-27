import {
  Action,
  QueryState,
} from "@app/seller-identity/toolkit/tax-verifications/reducer";
import { Dispatch, createContext, useContext } from "react";

type taxVerificationTableContext = {
  readonly queryState: QueryState;
  readonly dispatch: Dispatch<Action>;
};
export const TaxVerificationsTableContext =
  createContext<taxVerificationTableContext | null>(null);
export const useTaxVerificationsTableContext = () => {
  const ctx = useContext(TaxVerificationsTableContext);
  if (!ctx) {
    throw new Error("TaxVerificationsTableContext.Provider not found");
  }
  return ctx;
};
