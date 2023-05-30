import CompactTableCell from "@app/infractions/components/CompactTableCell";
import { ColumnLabel } from "@app/infractions/toolkit/table";
import {
  Checkbox,
  SortDirection,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import React from "react";

interface Props {
  readonly columns: ReadonlyArray<keyof typeof ColumnLabel>;
  readonly order: SortDirection;
  readonly orderBy: keyof typeof ColumnLabel;
  readonly numSelected: number;
  readonly rowCount: number;
  readonly onSelectAllClick: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const TableHeading = (props: Props) => {
  const { columns, onSelectAllClick, order, orderBy, numSelected, rowCount } =
    props;
  return (
    <TableHead>
      <TableRow>
        <CompactTableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </CompactTableCell>
        {columns.map((headCell) => {
          const key = headCell;
          const label = ColumnLabel[headCell];
          return (
            <CompactTableCell
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
            </CompactTableCell>
          );
        })}
        <CompactTableCell align="center">Actions</CompactTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeading;
