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

export type NoticeOrganizationFilterProps = {
  readonly organization: string | null;
  readonly organizations: ReadonlyArray<string>;
  readonly onSelect: (s: string | null) => unknown;
};

const NoticeOrganizationFilter: React.FC<NoticeOrganizationFilterProps> = (
  props: NoticeOrganizationFilterProps
) => {
  const { organization, organizations, onSelect } = props;
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
        {organization ? (
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
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1.5,
            }}
          >
            <Typography sx={{ mr: 1, fontWeight: "fontWeightBold" }}>
              Select an Organization
            </Typography>
            <Button onClick={() => onSelect(null)}>Clear</Button>
          </Box>
          <Box sx={{ maxHeight: 200, overflowY: "scroll" }}>
            <RadioGroup
              value={organization}
              onChange={(e) => onSelect(e.target.value)}
            >
              {organizations.map((org) => (
                <FormControlLabel
                  value={org}
                  control={<Radio disableRipple />}
                  label={org}
                />
              ))}
            </RadioGroup>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default NoticeOrganizationFilter;
