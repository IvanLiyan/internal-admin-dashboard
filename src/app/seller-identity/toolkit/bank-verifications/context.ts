import {
  Action,
  QueryState,
} from "@app/seller-identity/toolkit/bank-verifications/reducer";
import { Dispatch, createContext, useContext } from "react";

type bankVerificationTableContext = {
  readonly queryState: QueryState;
  readonly dispatch: Dispatch<Action>;
};
export const BankVerificationsTableContext =
  createContext<bankVerificationTableContext | null>(null);
export const useBankVerificationsTableContext = () => {
  const ctx = useContext(BankVerificationsTableContext);
  if (!ctx) {
    throw new Error("BankVerificationsTableContext.Provider not found");
  }
  return ctx;
};
