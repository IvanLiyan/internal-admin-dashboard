import Image from "next/image";
import { Link, Stack, Typography } from "@mui/material";
import { NoticeProductSchema } from "@schema";

export type NoticeProductTableColumnProps = {
  readonly noticeProduct: NoticeProductSchema;
};

const NoticeProductTableColumn: React.FC<NoticeProductTableColumnProps> = (
  props: NoticeProductTableColumnProps
) => {
  const { noticeProduct } = props;

  return (
    <Stack direction="row" alignItems={"center"}>
      <Image
        src={noticeProduct.product.mainImage.wishUrl}
        alt={noticeProduct.product.name}
        draggable={false}
        width={60}
        height={60}
      />
      <Stack sx={{ ml: 1 }}>
        <Link
          href={`https://www.wish.com/c/${noticeProduct.product.id}`}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <Typography width={250} noWrap>
            {noticeProduct.product.name}
          </Typography>
        </Link>
        <Typography variant="caption">
          Product ID: {noticeProduct.product.id}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default NoticeProductTableColumn;
