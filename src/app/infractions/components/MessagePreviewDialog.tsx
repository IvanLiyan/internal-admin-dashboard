import MessageBubble from "@app/infractions/components/MessageBubble";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Stack,
} from "@mui/material";

type Props = Pick<DialogProps, "open"> & {
  readonly infractionId?: string | null;
  readonly handleClose: () => void;
};

const MOCK_DATE = 1683052681000;
const MOCK_SENDER_NAME = "Wish Merchant Service";
const MOCK_MSG_CONTENT =
  "temp copy explaining infractions temp copy explaining infractions temp copy explaining infractions";

const MessagePreviewDialog: React.FC<Props> = ({ handleClose, ...props }) => {
  // TODO fetch messages for `infractionId`
  return (
    <Dialog maxWidth={"md"} onClose={handleClose} {...props}>
      <DialogTitle>Message Preview</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={1}>
          {/* TODO fetch messages for `infractionId`, sorted by date newest on top */}
          {[...Array(10)].map((_, i) => (
            <MessageBubble
              key={i}
              alignSelf={i % 2 == 0 ? "flex-end" : "flex-start"}
              content={MOCK_MSG_CONTENT}
              senderName={MOCK_SENDER_NAME}
              unix={MOCK_DATE}
            />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessagePreviewDialog;
