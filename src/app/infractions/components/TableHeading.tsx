import CompactTableCell from "@app/infractions/components/CompactTableCell";
import { useTableContext } from "@app/infractions/toolkit/context";
import { ColumnLabel, useSelectHandlers } from "@app/infractions/toolkit/table";
import {
  Checkbox,
  SortDirection,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

interface Props {
  readonly columns: ReadonlyArray<keyof typeof ColumnLabel>;
  readonly sortableColumns: ReadonlyArray<keyof typeof ColumnLabel>;
}

const TableHeading = (props: Props) => {
  const { columns, sortableColumns } = props;
  const { tableData, queryState, dispatch } = useTableContext();
  const { onSelectAll } = useSelectHandlers(queryState, dispatch, tableData);

  const sortKey = queryState.orderBy;
  const sortDirection: SortDirection =
    queryState.order == "ASC" ? "asc" : "desc";

  const numSelected = queryState.selected.length;
  const rowCount = tableData.filter((row) => !row.bulkStatus).length;

  return (
    <TableHead>
      <TableRow>
        <CompactTableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAll}
          />
        </CompactTableCell>
        {columns.map((headCell) => {
          const key = headCell;
          const label = ColumnLabel[headCell];
          return (
            <CompactTableCell key={key} align={"left"}>
              {sortableColumns.includes(key) ? (
                <TableSortLabel
                  active={queryState.orderBy === key}
                  direction={key === sortKey ? sortDirection : undefined}
                  onClick={() => {
                    const isAsc =
                      queryState.orderBy === key && queryState.order === "ASC";
                    dispatch({ order: isAsc ? "DESC" : "ASC", orderBy: key });
                  }}
                >
                  {label}
                </TableSortLabel>
              ) : (
                label
              )}
            </CompactTableCell>
          );
        })}
        <CompactTableCell align="center">Messages</CompactTableCell>
        <CompactTableCell align="center">Actions</CompactTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeading;
