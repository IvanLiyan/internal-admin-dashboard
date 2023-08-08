import { gql, useQuery } from "urql";
import { useToast } from "@app/core/toast/ToastProvider";
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
} from "@mui/material";
import {
  NoticeSchema,
  DsaHubNoticesArgs,
  DsaHub,
  NoticeQuerySortInput,
  NoticeSortField,
  SortOrderType,
} from "@schema";
import { useEffect, useState } from "react";

type GetNoticesResponse = {
  readonly dsa: {
    readonly notices: ReadonlyArray<NoticeSchema>;
    readonly noticeCount: number;
  };
};

const GetNotices = gql<GetNoticesResponse, DsaHubNoticesArgs>`
  query GetNotices(
    $queryInput: NoticeQueryInput!
    $offset: Int!
    $limit: Int!
  ) {
    dsa {
      noticeCount(queryInput: $queryInput)
      notices(queryInput: $queryInput, offset: $offset, limit: $limit) {
        id
        datetimeCreated {
          datetime
        }
        notifierEmail
        notifier {
          organization
        }
        priority
        lastClaimedUser {
          email
        }
      }
    }
  }
`;

type CustomTableHeadCell = {
  readonly label: string;
  readonly sortField?: NoticeSortField;
};

export type NoticeManagementTableProps = {};

const NoticeManagementTable: React.FC<NoticeManagementTableProps> = (
  props: NoticeManagementTableProps
) => {
  const toast = useToast();
  const [notices, setNotices] = useState<ReadonlyArray<NoticeSchema>>([]);
  const [noticeCount, setNoticeCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(25);
  const [sorts, setSorts] = useState<ReadonlyArray<NoticeQuerySortInput>>([
    { field: "PRIORITY", order: "DESC" },
    { field: "DATETIME_CREATED", order: "DESC" },
  ]);

  const tableHeaders: CustomTableHeadCell[] = [
    {
      label: "Submission ID",
    },
    {
      label: "Date Submitted",
      sortField: "DATETIME_CREATED",
    },
    {
      label: "Claimed By",
    },
    {
      label: "Email",
    },
    {
      label: "Organization",
    },
    {
      label: "Priority",
      sortField: "PRIORITY",
    },
    {
      label: "Action",
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

  const handleSortClick = (field: NoticeSortField) => {
    const sort = sorts.find((s: NoticeQuerySortInput) => s.field == field);
    if (!sort) {
      setSorts([...sorts, { field: field, order: "ASC" }]);
    } else {
      const filteredSorts = sorts.filter((s) => s.field != field);
      if (sort.order === "DESC") {
        setSorts(filteredSorts);
      } else {
        setSorts([...filteredSorts, { field, order: "DESC" }]);
      }
    }
  };

  const variables: DsaHubNoticesArgs = {
    queryInput: {
      sort: [...sorts],
    },
    offset: page * limit,
    limit: limit,
  };

  const [{ data, error }] = useQuery({
    query: GetNotices,
    variables,
  });

  useEffect(() => {
    if (data == undefined || error) {
      toast.alert("error", "Failed to fetch notices!");
      return;
    }

    const {
      dsa: { notices, noticeCount },
    } = data;

    setNotices(notices);
    setNoticeCount(noticeCount);
  }, [data, error, setNotices, setNoticeCount]);

  const renderNoticeRow = (notice: NoticeSchema) => {
    return (
      <TableRow key={notice.id}>
        <TableCell>{notice.id}</TableCell>
        <TableCell>{notice.datetimeCreated.datetime}</TableCell>
        <TableCell>{notice?.lastClaimedUser?.email || "-"}</TableCell>
        <TableCell>{notice.notifierEmail}</TableCell>
        <TableCell>{notice.notifier?.organization}</TableCell>
        <TableCell>{notice.priority}</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    );
  };

  const renderTableHeader = () => {
    return (
      <TableHead>
        <TableRow>
          {tableHeaders.map((row) => {
            const field = row.sortField;
            if (!field) {
              return <TableCell>{row.label}</TableCell>;
            }

            return (
              <TableCell>
                <TableSortLabel
                  active={sorts.some((s) => s.field == field)}
                  direction={
                    sorts.find((s) => s.field == field)?.order === "ASC"
                      ? "asc"
                      : sorts.find((s) => s.field == field)?.order === "DESC"
                      ? "desc"
                      : undefined
                  }
                  onClick={() => handleSortClick(field)}
                >
                  {row.label}
                </TableSortLabel>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
    );
  };

  return (
    <TableContainer>
      <Table>
        {renderTableHeader()}
        <TableBody>
          {notices.map((notice) => renderNoticeRow(notice))}
        </TableBody>
        <TableFooter>
          <TablePagination
            count={noticeCount}
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
  );
};

export default NoticeManagementTable;
