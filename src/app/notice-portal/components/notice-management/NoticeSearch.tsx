import TextFieldWithSelect, {
  TextFieldWithSelectProps,
} from "@app/core/components/TextFieldWithSelect";
import { Box } from "@mui/material";

export type SearchOption = "PRODUCT_ID" | "NOTICE_ID";

export type NoticeSearchProps = TextFieldWithSelectProps;

const NoticeSearch: React.FC<NoticeSearchProps> = (
  props: NoticeSearchProps
) => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <TextFieldWithSelect {...props} />
    </Box>
  );
};

export default NoticeSearch;
