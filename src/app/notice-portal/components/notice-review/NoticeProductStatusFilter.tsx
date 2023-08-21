import { FilterAlt, FilterAltOutlined } from "@mui/icons-material";
import {
  Box,
  Chip,
  IconButton,
  MenuItem,
  Popover,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { NoticeProductStatus } from "@schema";
import { useState } from "react";

export type NoticeProductStatusFilterProps = {
  readonly productStatuses: NoticeProductStatus[];
  readonly onSelect: (s: NoticeProductStatus[]) => unknown;
};

type NoticeProductMenuItem = {
  readonly value: NoticeProductStatus;
  readonly text: string;
};

const NoticeProductStatusFilter: React.FC<NoticeProductStatusFilterProps> = (
  props: NoticeProductStatusFilterProps
) => {
  const { productStatuses, onSelect } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
    }
    setOpen(!open);
  };

  const productStatusMenuItems: NoticeProductMenuItem[] = [
    {
      value: "REPORTED",
      text: "Reported",
    },
    {
      value: "GEO_BLOCKED",
      text: "Geo-Blocked",
    },
    {
      value: "INAPPROPRIATE_REMOVED",
      text: "Inappropriate Removed",
    },
    {
      value: "IP_REMOVED",
      text: "IP Removed",
    },
    {
      value: "DISPUTED",
      text: "Disputed",
    },
    {
      value: "ALREADY_REMOVED",
      text: "Already Removed",
    },
  ];

  const handleChange = (event: SelectChangeEvent<NoticeProductStatus[]>) => {
    const {
      target: { value },
    } = event;
    onSelect(
      typeof value === "string"
        ? (value.split(",") as NoticeProductStatus[])
        : value
    );
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        {productStatuses.length ? (
          <FilterAlt fontSize="small" />
        ) : (
          <FilterAltOutlined fontSize="small" />
        )}
      </IconButton>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2 }} width={300}>
          <Typography sx={{ mb: 1.5, fontWeight: "fontWeightBold" }}>
            Select product statuses
          </Typography>
          <Box>
            <Select
              fullWidth
              multiple
              placeholder="Status"
              value={productStatuses}
              onChange={handleChange}
              renderValue={(selected) => (
                <Stack gap={0.5} flexDirection="row" flexWrap={"wrap"}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Stack>
              )}
            >
              {productStatusMenuItems.map(({ value, text }) => (
                <MenuItem value={value}>{text}</MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default NoticeProductStatusFilter;
