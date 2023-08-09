import { FilterAlt, FilterAltOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Popover,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export type NoticeEmailFilterProps = {
  readonly email: string | null;
  readonly onChange: (s: string | null) => unknown;
};

const NoticeEmailFilter: React.FC<NoticeEmailFilterProps> = (
  props: NoticeEmailFilterProps
) => {
  const { email, onChange } = props;
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
        {email ? (
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
          <Typography sx={{ mr: 1, fontWeight: "fontWeightBold" }}>
            Select an Organization
          </Typography>
          <Box></Box>
        </Box>
      </Popover>
    </>
  );
};

export default NoticeEmailFilter;
