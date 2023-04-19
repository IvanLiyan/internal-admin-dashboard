import PageContent from "@app/infractions/components/action-required/PageContent";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";

/**
 * Scaffolding for Awaiting Admin page
 */
const ActionRequiredPage: NextPage<Record<string, never>> = () => {
  return (
    <Box>
      <Typography variant="h4">Infractions Action Required</Typography>
      <PageContent />
    </Box>
  );
};

export default ActionRequiredPage;
