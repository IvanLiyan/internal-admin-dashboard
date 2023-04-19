import { Heading } from "@ContextLogic/atlas-ui";
import PageContent from "@app/infractions/components/awaiting-admin/PageContent";
import { Box } from "@mui/material";
import React from "react";

/**
 * Scaffolding for Awaiting Admin page
 */
const AwaitingAdminPage: React.FC = () => {
  return (
    <Box>
      <Heading variant="h4">Infractions Action Required</Heading>
      <PageContent />
    </Box>
  );
};

export default AwaitingAdminPage;
