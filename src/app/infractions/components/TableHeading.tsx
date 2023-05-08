import { InfractionsTableColumns } from "@app/infractions/toolkit/table";
import {
  Checkbox,
  SortDirection,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import React from "react";

interface Props<T> {
  readonly columns: ReadonlyArray<T>;
  readonly order: SortDirection;
  readonly orderBy: T extends Props<T>["columns"][number] ? T : never;
  readonly numSelected: number;
  readonly rowCount: number;
  readonly onSelectAllClick: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const TableHeading = <T extends keyof typeof InfractionsTableColumns>(
  props: Props<T>
) => {
  const { columns, onSelectAllClick, order, orderBy, numSelected, rowCount } =
    props;
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {columns.map((headCell) => {
          const key = headCell;
          const label = InfractionsTableColumns[headCell];
          return (
            <TableCell
              key={key}
              align={"right"}
              sortDirection={orderBy === key ? order : false}
            >
              <TableSortLabel
                active={orderBy === key}
                direction={orderBy === key && order ? order : undefined}
              >
                {label}
              </TableSortLabel>
            </TableCell>
          );
        })}
        <TableCell align="center">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeading;
