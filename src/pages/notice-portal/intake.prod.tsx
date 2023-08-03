import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import PublicPageLayout from "@app/notice-portal/components/PublicPageLayout";
import NoticeIntakeForm from "@app/notice-portal/components/intake/NoticeIntakeForm";

const NoticeIntakePage: NextPage<Record<string, never>> = () => {
  return (
    <PublicPageLayout>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: "fontWeightBold" }}>
          Report Illegal Content
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          maiores laborum odit porro delectus sequi voluptas nam, ipsam nulla
          dicta maxime quis qui, neque molestiae dolorem quidem quas dolorum
          commodi.
        </Typography>
      </Box>
      <NoticeIntakeForm />
    </PublicPageLayout>
  );
};

export default NoticeIntakePage;
