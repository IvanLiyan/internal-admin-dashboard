import PageRoot from "@app/core/components/PageRoot";
import { Paper } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import ReviewPdf from "@app/seller-identity/components/review-pdf/ReviewPDF";

const ReviewPdfPage: NextPage<Record<string, never>> = () => {
  const { query } = useRouter();
  const fileId = query.documentUrlId as string;

  return (
    <PageRoot title="Preview pdf file">
      <Paper>
        {fileId && <ReviewPdf fileUrl={`/merchant-file/${fileId}`} />}
      </Paper>
    </PageRoot>
  );
};

export default ReviewPdfPage;
