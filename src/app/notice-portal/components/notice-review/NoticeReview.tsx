import { ReactNode, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useAuth } from "@app/core/auth/AuthProvider";
import { NoticeProductSchema, NoticeSchema } from "@schema";
import ClaimNoticeButton from "./ClaimNoticeButton";
import UnclaimNoticeButton from "./UnclaimNoticeButton";
import SubmitReviewButton from "./SubmitReviewButton";
import NoticeProductsTable from "./NoticeProductsTable";
import Modal from "@app/core/components/Modal";

export type NoticeReviewProps = {
  readonly notice: NoticeSchema;
  readonly refetchNotice: () => void;
};

const NoticeReview: React.FC<NoticeReviewProps> = (
  props: NoticeReviewProps
) => {
  const { notice, refetchNotice } = props;
  const auth = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState<
    ReadonlyArray<NoticeProductSchema>
  >([]);

  const canReviewNotice =
    notice.lastClaimedUser?.id === auth?.id &&
    notice.status !== "RESOLVED" &&
    notice.status !== "REJECTED" &&
    notice.status !== "PARTIALLY_REJECTED";

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

  const generateQueryParams = () => {
    const productIds = selectedProducts.map(
      (noticeProduct) => noticeProduct.product.id
    );
    return `notice_id=${notice.id}&product_ids=${productIds.join(",")}`;
  };

  return (
    <Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box>
          <Button
            href={`/product-geoblock/create?${generateQueryParams()}`}
            variant="outlined"
            disableElevation={true}
            sx={{
              textTransform: "capitalize",
              borderRadius: 10,
              mr: 1,
            }}
            disabled={!canReviewNotice || selectedProducts.length == 0}
            disableRipple
            target="_blank"
            onClick={() => setOpen(true)}
          >
            Geoblock Selected
          </Button>
          <Button
            href={`/tagging/counterfeit-tag/manual?${generateQueryParams()}`}
            variant="outlined"
            disableElevation={true}
            sx={{
              textTransform: "capitalize",
              borderRadius: 10,
              mr: 1,
            }}
            target="_blank"
            onClick={() => setOpen(true)}
            disabled={!canReviewNotice || selectedProducts.length == 0}
            disableRipple
          >
            Inappropriate Manual Review Selected
          </Button>
          <Button
            href={`/tagging/ip-violation-tag/manual?${generateQueryParams()}`}
            variant="outlined"
            disableElevation={true}
            sx={{
              textTransform: "capitalize",
              borderRadius: 10,
              mr: 1,
            }}
            target="_blank"
            onClick={() => setOpen(true)}
            disabled={!canReviewNotice || selectedProducts.length == 0}
            disableRipple
          >
            IP Manual Review Selected
          </Button>
        </Box>
        <Box>{...renderActionButtons()}</Box>
      </Stack>
      <NoticeProductsTable
        noticeId={notice.id}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <Modal
        open={open}
        title="Action Taken"
        onClose={() => setOpen(false)}
        buttonText="Refresh"
        onClick={() => {
          setOpen(false);
          setSelectedProducts([]);
          refetchNotice();
        }}
      >
        <Container sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "fontWeightBold" }}>
            Action Taken
          </Typography>
          <Typography>
            Your chosen action has opened in a new tab. Complete the action
            before you refresh this page.
          </Typography>
        </Container>
      </Modal>
    </Stack>
  );
};

export default NoticeReview;
