import { ThemeOptions } from "@mui/material";

export const InfractionTableThemeOptions: ThemeOptions = {
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "2px 4px",
        },
      },
    },
  },
};
