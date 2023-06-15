import { createContext, useContext } from "react";
import { UseQueryExecute } from "urql";

type bankDocumentsTableContext = {
  readonly reexecuteQuery: UseQueryExecute;
};
export const BankDocumentsTableContext =
  createContext<bankDocumentsTableContext | null>(null);
export const useBankDocumentsTableContext = () => {
  const ctx = useContext(BankDocumentsTableContext);
  if (!ctx) {
    throw new Error("BankDocumentsTableContext.Provider not found");
  }
  return ctx;
};
