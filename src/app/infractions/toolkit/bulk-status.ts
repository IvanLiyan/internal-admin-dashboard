export const ColumnLabels = {
  requestId: "Request ID",
  status: "Status",
  submitted: "Submitted",
  type: "Type",
  requestor: "Requested by",
  errors: "Errors",
  infractions: "Infractions",
};

export const TableColumns = [
  "requestId",
  "status",
  "submitted",
  "type",
  "requestor",
  "errors",
] as const;

export const ExpandRowLabels = {
  infractionId: "Infraction ID",
  status: "Status",
  reason: "Reason",
};

export const ExpandRowColumns = ["infractionId", "status", "reason"] as const;

export const useTableData = () => {
  return [
    {
      requestId: "2342343434",
      status: "completed",
      submitted: "2022-09-01",
      type: "Type",
      requestor: "Testytester",
      errors: "Wrong",
      infractions: [
        { infractionId: "id1", status: "pass", reason: "n/a" },
        {
          infractionId: "id2",
          status: "failed",
          reason: "infraction type cannot be reversed",
        },
      ],
    },
  ];
};
