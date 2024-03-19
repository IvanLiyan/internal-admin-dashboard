import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@mui/material";
// Set the URL of PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PdfPreviewerProps {
  pdfFile: string | File;
}

const PdfPreviewer: React.FC<PdfPreviewerProps> = ({ pdfFile }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = (document: any) => {
    setNumPages(document.numPages);
  };

  const goToNextPage = () => setPageNumber(pageNumber + 1);
  const goToPreviousPage = () => setPageNumber(pageNumber - 1);
  return (
    <div>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        options={{
          cMapUrl: "cmaps/",
          cMapPacked: true,
        }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {/* <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <Button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
          Previous
        </Button>
        <Button onClick={goToNextPage} disabled={pageNumber >= numPages}>
          Next
        </Button>
      </div> */}
    </div>
  );
};

export default PdfPreviewer;
