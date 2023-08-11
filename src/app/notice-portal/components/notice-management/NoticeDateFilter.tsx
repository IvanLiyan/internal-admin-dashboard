import { Box, IconButton, Popover, Typography } from "@mui/material";
import { FilterAltOutlined, FilterAlt } from "@mui/icons-material";
import { useState } from "react";
import DateRangePicker, {
  DateRangePickerProps,
} from "@app/core/components/DateRangePicker";

export type NoticeDateFilterProps = DateRangePickerProps;

const NoticeDateFilter: React.FC<NoticeDateFilterProps> = (
  props: NoticeDateFilterProps
) => {
  const { startDate, endDate, onChange, format } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
    }
    setOpen(!open);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        {startDate || endDate ? (
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
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography sx={{ mb: 1.5, fontWeight: "fontWeightBold" }}>
            Select Date Range
          </Typography>
          <DateRangePicker
            format={format}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            orientation="VERTICAL"
          />
        </Box>
      </Popover>
    </>
  );
};

export default NoticeDateFilter;
