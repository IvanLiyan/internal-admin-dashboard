import { Box, BoxProps, Typography } from "@mui/material";

type Props = BoxProps & {
  readonly content: string;
  readonly unix: number;
  readonly senderName: string;
};

const MessageBubble: React.FC<Props> = ({
  content,
  unix,
  senderName,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{ borderRadius: 2, backgroundColor: "lightcyan", py: 1, px: 2 }}
      maxWidth={"66%"}
    >
      <Typography variant="body1">{content}</Typography>
      <Typography color={"gray"} variant="caption">
        From {senderName}
      </Typography>
      <Typography color={"gray"} variant="caption" display={"block"}>
        {new Intl.DateTimeFormat(undefined, {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(new Date(unix))}
      </Typography>
    </Box>
  );
};

export default MessageBubble;
