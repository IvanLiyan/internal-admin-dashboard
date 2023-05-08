import { Box, Stack, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PropsWithChildren } from "react";

interface Props {
  readonly title: string;
}

const PageRoot: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} py={2}>
        <Typography variant="h5">{title}</Typography>
        <Box>{children}</Box>
      </Stack>
    </LocalizationProvider>
  );
};

export default PageRoot;
