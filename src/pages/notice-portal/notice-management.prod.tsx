import { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import NoticeManagementPage from "@app/notice-portal/components/notice-management/NoticeManagement";

const NoticeManagement: NextPage<Record<string, never>> = () => {
  return (
    <Container maxWidth={false} sx={{ p: 7 }} disableGutters>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: "fontWeightBold" }}>
          Notice Management Tool
        </Typography>
      </Box>
      <NoticeManagementPage />
    </Container>
  );
};

export default NoticeManagement;
