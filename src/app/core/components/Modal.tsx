import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal as Modal_,
  ModalProps as ModalProps_,
  Stack,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { PropsWithChildren } from "react";

export type ModalProps = PropsWithChildren &
  ModalProps_ & {
    readonly title: string;
    readonly buttonText?: string;
    readonly onClick?: () => void;
    readonly disabled?: boolean;
    readonly onClose: () => void;
    readonly width?: number | string;
    readonly maxHeight?: number | string;
  };

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const {
    children,
    title,
    onClose,
    open,
    width = 600,
    maxHeight,
    buttonText,
    disabled = false,
    onClick,
  } = props;

  return (
    <Modal_ open={open}>
      <Box
        sx={{
          position: "absolute",
          width: width,
          height: "auto",
          top: "50%",
          left: "50%",
          maxHeight: maxHeight,
          transform: "translate(-50%, -50%)",
          borderRadius: 3,
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ pr: 2, pl: 2, pt: 1, pb: 1, backgroundColor: "grey.100" }}
        >
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={onClose}>
            <Close fontSize="small" sx={{ p: 0 }} />
          </IconButton>
        </Stack>
        <Divider />
        {children}
        <Divider />
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ p: 2 }}
        >
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{ borderRadius: 10, textTransform: "capitalize" }}
          >
            Cancel
          </Button>
          {buttonText && (
            <Button
              variant="contained"
              disableElevation
              onClick={onClick}
              sx={{ borderRadius: 10, ml: 2, textTransform: "capitalize" }}
              disabled={disabled}
            >
              {buttonText}
            </Button>
          )}
        </Stack>
      </Box>
    </Modal_>
  );
};

export default Modal;
