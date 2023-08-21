import { useEffect, useState } from "react";
import { gql, useQuery } from "urql";
import { useToast } from "@app/core/toast/ToastProvider";
import NoticeProductTableColumn from "./NoticeProductTableColumn";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TableFooter,
  TablePagination,
  Chip,
  Typography,
  Checkbox,
  Paper,
} from "@mui/material";
import {
  DsaHubNoticeArgs,
  NoticeProductSchema,
  NoticeSchema,
  NoticeSchemaProductsArgs,
} from "@schema";

type GetNoticeProductsResponse = {
  readonly dsa: {
    readonly notice: Pick<NoticeSchema, "products"> & {
      readonly allProducts: ReadonlyArray<NoticeProductSchema>;
    };
  };
};

type GetNoticeProductsArgs = DsaHubNoticeArgs & NoticeSchemaProductsArgs;

const GetNoticeProducts = gql<GetNoticeProductsResponse, GetNoticeProductsArgs>`
  query GetNoticeProducts(
    $noticeId: ObjectIdType!
    $offset: Int!
    $limit: Int
    $queryInput: NoticeProductQueryInput!
  ) {
    dsa {
      notice(noticeId: $noticeId) {
        allProducts: products(queryInput: {}, offset: 0) {
          status
        }
        products(queryInput: $queryInput, offset: $offset, limit: $limit) {
          status
          product {
            id
            name
            description
            mainImage {
              wishUrl
            }
          }
        }
      }
    }
  }
`;

export type NoticeProductsTableProps = {
  readonly noticeId: string;
  readonly selectedProducts: ReadonlyArray<NoticeProductSchema>;
  readonly setSelectedProducts: (
    products: ReadonlyArray<NoticeProductSchema>
  ) => unknown;
};

type CustomTableHeadCell = {
  readonly label: string;
  readonly renderFilter?: () => React.ReactNode;
};

const NoticeProductsTable: React.FC<NoticeProductsTableProps> = (
  props: NoticeProductsTableProps
) => {
  const { noticeId, selectedProducts, setSelectedProducts } = props;
  const toast = useToast();
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [noticeProductsCount, setNoticeProductsCount] = useState<number>(0);
  const [noticeProducts, setNoticeProducts] = useState<
    ReadonlyArray<NoticeProductSchema>
  >([]);

  const tableHeaders: CustomTableHeadCell[] = [
    {
      label: "Product",
    },
    {
      label: "Description",
    },
    {
      label: "Status",
    },
  ];

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeLimit = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value));
    setPage(0);
  };

  const variables: GetNoticeProductsArgs = {
    noticeId: noticeId,
    offset: limit !== -1 ? page * limit : page,
    limit: limit === -1 ? undefined : limit,
    queryInput: {},
  };

  const [{ data, error }] = useQuery({
    query: GetNoticeProducts,
    variables,
  });

  useEffect(() => {
    if (error) {
      toast.alert("error", `Encountered error: ${error.message}`);
      return;
    }

    if (data == undefined) {
      return;
    }

    const {
      dsa: {
        notice: { products, allProducts },
      },
    } = data;

    setNoticeProducts(products);
    setNoticeProductsCount(allProducts.length);
  }, [data, error, toast, setNoticeProducts, setNoticeProductsCount]);

  const getSelectableProducts = () => {
    const selectableNoticeProducts = noticeProducts.filter(
      (noticeProducts) =>
        noticeProducts.status === "REPORTED" ||
        noticeProducts.status === "DISPUTED"
    );
    return selectableNoticeProducts;
  };

  const onSelectAllClick = () => {
    const selectableNoticeProducts = getSelectableProducts();
    if (selectedProducts.length == selectableNoticeProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(selectableNoticeProducts);
    }
  };

  const renderNoticeProductRow = (noticeProduct: NoticeProductSchema) => {
    const { product } = noticeProduct;
    const noticeProductIsSelected = selectedProducts.some(
      (selectedProduct) => selectedProduct.product.id == product.id
    );

    return (
      <TableRow key={noticeProduct.product.id}>
        <TableCell padding="checkbox">
          <Checkbox
            disabled={
              noticeProduct.status !== "REPORTED" &&
              noticeProduct.status !== "DISPUTED"
            }
            sx={{ m: 1 }}
            color="primary"
            checked={noticeProductIsSelected}
            onClick={() => {
              if (noticeProductIsSelected) {
                setSelectedProducts([
                  ...selectedProducts.filter(
                    (selectedProduct) =>
                      selectedProduct.product.id !== noticeProduct.product.id
                  ),
                ]);
              } else {
                setSelectedProducts([...selectedProducts, noticeProduct]);
              }
            }}
          />
        </TableCell>
        <TableCell>
          <NoticeProductTableColumn noticeProduct={noticeProduct} />
        </TableCell>
        <TableCell>
          <Typography width={600} noWrap>
            {noticeProduct.product.description}
          </Typography>
        </TableCell>
        <TableCell>
          <Chip label={noticeProduct.status} />
        </TableCell>
      </TableRow>
    );
  };

  const renderTableHeader = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              sx={{ m: 1 }}
              color="primary"
              disabled={getSelectableProducts().length == 0}
              indeterminate={
                selectedProducts.length > 0 &&
                selectedProducts.length < getSelectableProducts().length
              }
              checked={
                selectedProducts.length === getSelectableProducts().length &&
                selectedProducts.length !== 0
              }
              onChange={onSelectAllClick}
            />
          </TableCell>
          {tableHeaders.map((row) => {
            return (
              <TableCell key={row.label}>
                {row.label}
                {row.renderFilter && row.renderFilter()}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
    );
  };

  return (
    <Paper sx={{ mt: 3, pt: 1 }} variant="outlined" elevation={0}>
      <TableContainer>
        <Table>
          {renderTableHeader()}
          <TableBody>
            {noticeProducts.map((noticeProduct) =>
              renderNoticeProductRow(noticeProduct)
            )}
          </TableBody>
          <TableFooter>
            <TablePagination
              count={noticeProductsCount}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25, 50, { label: "All", value: -1 }]}
              rowsPerPage={limit}
              onRowsPerPageChange={handleChangeLimit}
              showFirstButton
              showLastButton
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default NoticeProductsTable;
