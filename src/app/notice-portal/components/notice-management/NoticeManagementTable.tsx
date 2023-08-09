import { useEffect, useState } from "react";
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
  Box,
} from "@mui/material";
import NoticeDateFilter from "./NoticeDateFilter";
import NoticeOrganizationFilter from "./NoticeOrganizationFilter";
import {
  NoticeSchema,
  DsaHubNoticesArgs,
  NoticeQuerySortInput,
  NoticeSortField,
  NoticeStatus,
} from "@schema";
import { Dayjs } from "dayjs";

type GetNoticesResponse = {
  readonly dsa: {
    readonly notifierOrganizations: ReadonlyArray<string>;
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
      notifierOrganizations
      noticeCount(queryInput: $queryInput)
      notices(queryInput: $queryInput, offset: $offset, limit: $limit) {
        id
        status
        datetimeCreated {
          datetime
        }
        notifierName
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
  readonly renderFilter?: () => React.ReactNode;
};

export type NoticeManagementTableProps = {
  readonly states: ReadonlyArray<NoticeStatus>;
};

const NoticeManagementTable: React.FC<NoticeManagementTableProps> = (
  props: NoticeManagementTableProps
) => {
  const { states } = props;
  const toast = useToast();
  const FORMAT = "YYYY-MM-DD";
  const PYTHONFORMAT = "%Y-%m-%d";

  const [notices, setNotices] = useState<ReadonlyArray<NoticeSchema>>([]);
  const [notifierOrganizations, setNotifierOrganizations] = useState<
    ReadonlyArray<string>
  >([]);
  const [noticeCount, setNoticeCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(25);
  const [organization, setOrganization] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
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
      renderFilter: () => (
        <NoticeDateFilter
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateRangeChange}
          format={FORMAT}
        />
      ),
    },
    {
      label: "Status",
    },
    {
      label: "Claimed By",
    },
    {
      label: "Name",
    },
    {
      label: "Email",
    },
    {
      label: "Organization",
      renderFilter: () => (
        <NoticeOrganizationFilter
          organizations={notifierOrganizations}
          organization={organization}
          onSelect={setOrganization}
        />
      ),
    },
    {
      label: "Priority",
      sortField: "PRIORITY",
    },
    {
      label: "Action",
    },
  ];

  const handleDateRangeChange = (from: Dayjs | null, to: Dayjs | null) => {
    if (from != startDate) {
      setStartDate(from);
    }
    if (to != endDate) {
      setEndDate(to);
    }
  };

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
      statuses: [...states],
      sort: [...sorts],
      notifierOrganization: organization,
      startDate: startDate
        ? {
            fmt: PYTHONFORMAT,
            formatted: startDate?.format(FORMAT),
          }
        : undefined,
      endDate: endDate
        ? {
            fmt: PYTHONFORMAT,
            formatted: endDate?.format(FORMAT),
          }
        : undefined,
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
      dsa: { notices, noticeCount, notifierOrganizations },
    } = data;

    setNotices(notices);
    setNoticeCount(noticeCount);
    setNotifierOrganizations(notifierOrganizations);
  }, [data, error, setNotices, setNoticeCount]);

  const renderNoticeRow = (notice: NoticeSchema) => {
    return (
      <TableRow key={notice.id}>
        <TableCell>{notice.id}</TableCell>
        <TableCell>{notice.datetimeCreated.datetime}</TableCell>
        <TableCell>{notice.status}</TableCell>
        <TableCell>{notice?.lastClaimedUser?.email || "-"}</TableCell>
        <TableCell>{notice.notifierName}</TableCell>
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
              return (
                <TableCell>
                  <Box
                    sx={{
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {row.label}
                    {row.renderFilter && row.renderFilter()}
                  </Box>
                </TableCell>
              );
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
                {row.renderFilter && row.renderFilter()}
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
