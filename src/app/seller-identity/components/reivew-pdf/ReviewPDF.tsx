import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// 导入样式
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// 定义组件的属性类型
interface PreviewPDFProps {
  fileUrl: string | Uint8Array; // PDF 文件的 URL 或者是一个包含 PDF 文件二进制数据的对象
}

const ReviewPdf: React.FC<PreviewPDFProps> = ({ fileUrl }) => {
  // 创建默认布局插件实例
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer
          fileUrl={fileUrl}
          plugins={[
            // 使用默认的布局插件
            defaultLayoutPluginInstance,
          ]}
        />
      </Worker>
    </div>
  );
};

export default ReviewPdf;
