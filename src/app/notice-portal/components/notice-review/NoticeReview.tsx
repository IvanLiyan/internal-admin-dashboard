import { ReactNode, useState } from "react";
import { Box, Button, ButtonProps, Stack } from "@mui/material";
import { useAuth } from "@app/core/auth/AuthProvider";
import { NoticeProductSchema, NoticeSchema } from "@schema";
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
  const [selectedProducts, setSelectedProducts] = useState<
    ReadonlyArray<NoticeProductSchema>
  >([]);

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
            {...baseButtonProps}
            disabled={!canReviewNotice || selectedProducts.length == 0}
            disableRipple
          >
            Geoblock Selected
          </Button>
          <Button
            href={`/tagging/counterfeit-tag/manual?${generateQueryParams()}`}
            {...baseButtonProps}
            disabled={!canReviewNotice || selectedProducts.length == 0}
            disableRipple
          >
            Inappropriate Manual Review Selected
          </Button>
          <Button
            href={`/tagging/ip-violation-tag/manual?${generateQueryParams()}`}
            {...baseButtonProps}
            disabled={!canReviewNotice || selectedProducts.length == 0}
            disableRipple
          >
            IP Manual Review Selected
          </Button>
        </Box>
        <Box>{...renderActionButtons()}</Box>
      </Stack>
      <NoticeProductsTable
        noticeProducts={notice.products}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </Stack>
  );
};

export default NoticeReview;
