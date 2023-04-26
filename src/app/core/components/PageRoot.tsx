import { Box, Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
  readonly title: string;
}

const PageRoot: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <Stack spacing={2} py={2}>
      <Typography variant="h5">{title}</Typography>
      <Box>{children}</Box>
    </Stack>
  );
};

export default PageRoot;
