import PageContent from "@app/infractions/components/awaiting-admin/PageContent";
import { Box, Typography } from "@mui/material";
import React from "react";

/**
 * Scaffolding for Awaiting Admin page
 */
const AwaitingAdminPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">Infractions Action Required</Typography>
      <PageContent />
    </Box>
  );
};

export default AwaitingAdminPage;
