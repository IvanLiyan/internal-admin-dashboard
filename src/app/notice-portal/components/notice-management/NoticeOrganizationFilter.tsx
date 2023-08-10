import { FilterAlt, FilterAltOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  IconButton,
  Popover,
  TextField,
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
          <Typography sx={{ mb: 1.5, fontWeight: "fontWeightBold" }}>
            Select an Organization
          </Typography>
          <Box>
            <Autocomplete
              value={organization}
              onChange={(_, newValue: string | null) => {
                onSelect(newValue);
              }}
              options={organizations}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Organizations" />
              )}
            />
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default NoticeOrganizationFilter;
