import {
  TableDispatchContext,
  TableStateContext,
} from "@app/infractions/toolkit/context";
import { State } from "@app/infractions/toolkit/reducer";
import { ContextType, PropsWithChildren } from "react";

type Props = {
  readonly state: State;
  readonly dispatch: ContextType<typeof TableDispatchContext>;
} & PropsWithChildren;

const TableContextProvider: React.FC<Props> = ({
  state,
  dispatch,
  children,
}) => {
  return (
    <TableStateContext.Provider value={state}>
      <TableDispatchContext.Provider value={dispatch}>
        {children}
      </TableDispatchContext.Provider>
    </TableStateContext.Provider>
  );
};

export default TableContextProvider;
