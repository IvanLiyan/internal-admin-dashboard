import { Action, State } from "@app/infractions/toolkit/reducer";
import { Dispatch, createContext } from "react";
import { UseQueryExecute } from "urql";

export const TableStateContext = createContext<State | null>(null);

type tableDispatchContext = {
  readonly dispatch: Dispatch<Action>;
  readonly reexecuteQuery: UseQueryExecute;
};
export const TableDispatchContext = createContext<tableDispatchContext | null>(
  null
);
