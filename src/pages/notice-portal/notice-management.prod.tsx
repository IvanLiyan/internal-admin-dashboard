import { NextPage } from "next";
import { Container, Typography } from "@mui/material";
import NoticeManagementPage from "@app/notice-portal/components/notice-management/NoticeManagement";

const NoticeManagement: NextPage<Record<string, never>> = () => {
  return (
    <Container maxWidth={false} sx={{ p: 7 }} disableGutters>
      <Typography variant="h3" sx={{ fontWeight: "fontWeightBold" }}>
        Notice Management
      </Typography>
      <NoticeManagementPage />
    </Container>
  );
};

export default NoticeManagement;
