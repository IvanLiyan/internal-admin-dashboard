import LoadingIndicator from "@app/core/components/LoadingIndicator";
import MessageBubble from "@app/infractions/components/MessageBubble";
import { DisputeMessagesQuery } from "@app/infractions/toolkit/message";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useQuery } from "urql";

type Props = Pick<DialogProps, "open"> & {
  readonly infractionId?: string | null;
  readonly handleClose: () => void;
};

const MessagePreviewDialog: React.FC<Props> = ({
  handleClose,
  infractionId,
  ...props
}) => {
  const [{ fetching, data }] = useQuery({
    query: DisputeMessagesQuery,
    variables: { warningId: infractionId },
  });

  const msgData = (
    (data?.policy?.merchantWarning?.replies ??
      data?.policy?.merchantWarning?.trackingDispute?.messages) ||
    []
  ).sort((msgA, msgB) => {
    if (!msgA.date?.unix || !msgB.date?.unix) {
      return 0;
    }
    return msgA.date.unix - msgB.date.unix;
  });

  return (
    <Dialog maxWidth={"md"} onClose={handleClose} {...props}>
      <DialogTitle>Message Preview</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={1}>
          {fetching ? (
            <LoadingIndicator />
          ) : (
            msgData.map((msg, i) => (
              <MessageBubble
                key={i}
                alignSelf={
                  msg.senderType === "MERCHANT" ? "flex-start" : "flex-end"
                }
                content={msg.message || "n/a"}
                senderName={msg.senderName || msg.senderType || "n/a"}
                unix={msg.date?.unix || 0}
              />
            ))
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessagePreviewDialog;
