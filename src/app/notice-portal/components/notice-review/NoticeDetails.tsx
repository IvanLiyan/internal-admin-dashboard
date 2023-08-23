import { Divider, Link, Stack, Typography } from "@mui/material";
import { MerchantFileSchema, NoticeSchema } from "@schema";

export type NoticeDetailsProps = {
  readonly notice: NoticeSchema;
};

const NoticeDetails: React.FC<NoticeDetailsProps> = (
  props: NoticeDetailsProps
) => {
  const { notice } = props;

  const renderNoticeDetailRow = (label: string, content: string) => {
    return (
      <Stack direction={"row"} sx={{ mb: 1 }}>
        <Typography sx={{ fontWeight: "fontWeightBold", mr: 1 }}>
          {`${label}:`}
        </Typography>
        <Typography>{content}</Typography>
      </Stack>
    );
  };

  const renderSupportFiles = (label: string, files: MerchantFileSchema[]) => {
    if (!files.length) {
      return;
    }
    return (
      <Stack sx={{ mb: 1 }}>
        <Typography sx={{ fontWeight: "fontWeightBold", mr: 1 }}>
          {`${label}:`}
        </Typography>
        {files.map((file) => (
          <Link
            href={file.fileUrl}
            key={file.id}
            sx={{ ml: 1, width: "min-content" }}
          >
            <Typography>{file.displayFilename}</Typography>
          </Link>
        ))}
      </Stack>
    );
  };

  return (
    <Stack sx={{ mb: 3 }}>
      {renderNoticeDetailRow("Name", notice.notifierName)}
      {renderNoticeDetailRow("Email", notice.notifierEmail)}
      {renderNoticeDetailRow(
        "Organization",
        notice.notifierOrganization || "N/A"
      )}
      {renderNoticeDetailRow(
        "Submission Date",
        notice.datetimeCreated.datetime
      )}
      {renderNoticeDetailRow("Reason", notice.description)}
      {renderSupportFiles("Supporting Attachments", notice.supportFiles)}
      <Divider orientation="horizontal" sx={{ mt: 2, mb: 2 }} />
      {notice.disputeDescription &&
        renderNoticeDetailRow("Dispute Reason", notice.disputeDescription)}
      {notice.datetimeDisputed?.datetime &&
        renderNoticeDetailRow("Dispute Date", notice.datetimeDisputed.datetime)}
      {renderSupportFiles(
        "Dispute Attachments",
        notice.disputeSupportFiles || []
      )}
    </Stack>
  );
};

export default NoticeDetails;
