import {
  Action,
  State,
} from "@app/seller-identity/toolkit/bank-verifications/reducer";
import { Dispatch, createContext } from "react";

export const TableStateContext = createContext<State | null>(null);

type tableDispatchContext = {
  readonly dispatch: Dispatch<Action>;
};
export const TableDispatchContext = createContext<tableDispatchContext | null>(
  null
);
