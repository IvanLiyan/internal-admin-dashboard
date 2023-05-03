import {
  MockActionRequiredDataColumn,
  Order,
} from "@app/infractions/toolkit/mocks";
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import React from "react";

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

const ActionRequiredTableHead: React.FC<EnhancedTableProps> = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
}) => {
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
        {MockActionRequiredDataColumn.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"right"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="center">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ActionRequiredTableHead;
