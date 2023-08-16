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
  TableSortLabel,
  Stack,
  Chip,
  ChipTypeMap,
  Button,
  Typography,
  Checkbox,
  Paper,
} from "@mui/material";
import { NoticeProductSchema } from "@schema";
import { useState } from "react";

export type NoticeProductsTableProps = {
  readonly noticeProducts: ReadonlyArray<NoticeProductSchema>;
};

type CustomTableHeadCell = {
  readonly label: string;
  readonly renderFilter?: () => React.ReactNode;
};

const NoticeProductsTable: React.FC<NoticeProductsTableProps> = (
  props: NoticeProductsTableProps
) => {
  const { noticeProducts } = props;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(25);
  const [selectedProducts, setSelectedProducts] = useState<
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

  const onSelectAllClick = () => {
    if (selectedProducts.length == noticeProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(noticeProducts);
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
        <TableCell>{noticeProduct.product.description}</TableCell>
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
              color="primary"
              indeterminate={
                selectedProducts.length > 0 &&
                selectedProducts.length < noticeProducts.length
              }
              checked={selectedProducts.length === noticeProducts.length}
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
              count={noticeProducts.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25, 50]}
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
