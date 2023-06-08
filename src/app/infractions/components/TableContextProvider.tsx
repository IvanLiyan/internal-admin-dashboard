import { TableContext } from "@app/infractions/toolkit/context";
import { ContextType, PropsWithChildren } from "react";

type Props = ContextType<typeof TableContext> & PropsWithChildren;

const TableContextProvider: React.FC<Props> = ({
  queryState,
  dispatch,
  tableData,
  children,
  reexecuteQuery,
}) => {
  return (
    <TableContext.Provider
      value={{
        dispatch,
        queryState,
        tableData,
        reexecuteQuery,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
