import {
  TableDispatchContext,
  TableStateContext,
} from "@app/seller-identity/toolkit/bank-verifications/context";
import { VerificationStatusLabel } from "@app/seller-identity/toolkit/bank-verifications/table";
import { FilterAlt } from "@mui/icons-material";
import {
  Autocomplete,
  Badge,
  IconButton,
  Popover,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";

const StatusFilter: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const state = useContext(TableStateContext);
  const dispatchContext = useContext(TableDispatchContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={state?.status && 1}>
          <FilterAlt />
        </Badge>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Autocomplete
          size="small"
          sx={{ minWidth: 200, m: 1 }}
          options={["APPROVED", "PENDING", "REJECTED", "SUBMITTED"] as const}
          getOptionLabel={(option) => VerificationStatusLabel[option]}
          value={state?.status}
          onChange={(_, newValue) => {
            dispatchContext?.dispatch({ status: newValue });
          }}
          renderInput={(params) => (
            <TextField {...params} label={"Filter by Status"} />
          )}
        />
      </Popover>
    </>
  );
};

export default StatusFilter;
