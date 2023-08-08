import { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import NoticeIntakeForm from "@app/notice-portal/components/intake/NoticeIntakeForm";

const NoticeIntakePage: NextPage<Record<string, never>> = () => {
  return (
    <Container sx={{ mt: 5, pb: 5 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: "fontWeightBold" }}>
          Report Illegal Content
        </Typography>
        <Typography>
          Fill out the report below to notify Wish of any type of illegal
          product listings on the platform. Our admins will review your notice
          and take appriopriate action against each notified product. You will
          recieve email commuincation to keep you updated with the progress of
          your notice.
        </Typography>
      </Box>
      <NoticeIntakeForm />
    </Container>
  );
};

export default NoticeIntakePage;
