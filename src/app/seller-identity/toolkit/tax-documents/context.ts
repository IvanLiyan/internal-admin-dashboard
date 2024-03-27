import { createContext, useContext } from "react";
import { UseQueryExecute } from "urql";

type taxDocumentsTableContext = {
  readonly reexecuteQuery: UseQueryExecute;
};
export const TaxDocumentsTableContext =
  createContext<taxDocumentsTableContext | null>(null);
export const useTaxDocumentsTableContext = () => {
  const ctx = useContext(TaxDocumentsTableContext);
  if (!ctx) {
    throw new Error("TaxDocumentsTableContext.Provider not found");
  }
  return ctx;
};
