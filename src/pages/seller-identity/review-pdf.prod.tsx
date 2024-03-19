import LoadingIndicator from "@app/core/components/LoadingIndicator";
import PageRoot from "@app/core/components/PageRoot";
import { Button, Paper } from "@mui/material";
import { NextPage } from "next";
import { useQuery } from "urql";
import ReviewPdf from "@app/seller-identity/components/reivew-pdf/ReviewPDF";
// import PreviewPDF from "@app/core/toolkit/pdfReivew";

const ReviewPdfPage: NextPage<Record<string, never>> = () => {
  const pdfFile = "/files/fw8ben.pdf"; // 这里替换成你的 PDF 文件路径

  return (
    <PageRoot title="Bank Account Verification">
      <Paper>
        {/* <PdfPreviewer pdfFile={`/merchant-file/65f7b4774f82cde28d614e22`} /> */}
        <ReviewPdf fileUrl="/merchant-file/65f7b4774f82cde28d614e22" />
      </Paper>
    </PageRoot>
  );
};

export default ReviewPdfPage;
