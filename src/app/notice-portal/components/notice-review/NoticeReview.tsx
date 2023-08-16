import { ReactNode } from "react";
import { Box, Button, ButtonProps, Stack } from "@mui/material";
import { useAuth } from "@app/core/auth/AuthProvider";
import { NoticeSchema } from "@schema";
import ClaimNoticeButton from "./ClaimNoticeButton";
import UnclaimNoticeButton from "./UnclaimNoticeButton";
import SubmitReviewButton from "./SubmitReviewButton";
import NoticeProductsTable from "./NoticeProductsTable";

export type NoticeReviewProps = {
  readonly notice: NoticeSchema;
  readonly refetchNotice: () => void;
};

const NoticeReview: React.FC<NoticeReviewProps> = (
  props: NoticeReviewProps
) => {
  const { notice, refetchNotice } = props;
  const auth = useAuth();

  const canReviewNotice =
    notice.lastClaimedUser?.id === auth?.id &&
    notice.status !== "RESOLVED" &&
    notice.status !== "REJECTED" &&
    notice.status !== "PARTIALLY_REJECTED";
  const baseButtonProps: ButtonProps = {
    variant: "outlined",
    disableElevation: true,
    sx: {
      textTransform: "capitalize",
      borderRadius: 10,
      mr: 1,
    },
  };

  const renderActionButtons = () => {
    const buttonsToRender: ReactNode[] = [];

    if (
      notice.status === "RESOLVED" ||
      notice.status === "REJECTED" ||
      notice.status === "PARTIALLY_REJECTED"
    ) {
      return buttonsToRender;
    }

    if (!notice.lastClaimedUser) {
      buttonsToRender.push(
        <ClaimNoticeButton noticeId={notice.id} refetchNotice={refetchNotice} />
      );
      return buttonsToRender;
    }

    if (notice.lastClaimedUser.id == auth?.id) {
      buttonsToRender.push(
        <SubmitReviewButton
          noticeId={notice.id}
          refetchNotice={refetchNotice}
        />
      );
      if (
        notice.status === "PENDING_REVIEW" ||
        notice.status === "DISPUTE_PENDING_REVIEW"
      ) {
        buttonsToRender.push(
          <UnclaimNoticeButton
            noticeId={notice.id}
            refetchNotice={refetchNotice}
          />
        );
      }
    }
    return buttonsToRender;
  };

  return (
    <Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box>
          <Button {...baseButtonProps} disabled={!canReviewNotice}>
            Geoblock Selected
          </Button>
          <Button {...baseButtonProps} disabled={!canReviewNotice}>
            Inappropriate Manual Review Selected
          </Button>
          <Button {...baseButtonProps} disabled={!canReviewNotice}>
            IP Manual Review Selected
          </Button>
        </Box>
        <Box>{...renderActionButtons()}</Box>
      </Stack>
      <NoticeProductsTable noticeProducts={notice.products} />
    </Stack>
  );
};

export default NoticeReview;
