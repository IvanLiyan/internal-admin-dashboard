export type Order = "asc" | "desc";

export interface HeadCell {
  id: keyof Data;
  label: string;
}

export interface Data {
  created: number;
  lastUpdate: number;
  mid: string;
  infractionID: string;
  reasons: string;
  parentCategory: string;
  subCategory: string;
  bdReps: string;
  geo: string;
  wssTier: string;
}
function createData(): Data {
  return {
    created: 1681830156000000,
    lastUpdate: 1681830156000000,
    mid: "dddddd",
    infractionID: `${Math.random() * 1000 % 1000}`,
    reasons: "reason",
    parentCategory: "pcat",
    subCategory: "scat",
    bdReps: "CN General",
    geo: "China",
    wssTier: "silver",
  };
}

export const MockActionRequiredData = Array.from({ length: 100 }, () => createData());

export const MockActionRequiredDataColumn: readonly HeadCell[] = [
  {
    id: "created",
    label: "Created",
  },
  {
    id: "lastUpdate",
    label: "Last Update",
  },
  {
    id: "mid",
    label: "Affected Merchants MID",
  },
  {
    id: "infractionID",
    label: "Infraction ID",
  },
  {
    id: "reasons",
    label: "Reason",
  },
  {
    id: "parentCategory",
    label: "Parent Category",
  },
  {
    id: "subCategory",
    label: "Sub Category",
  },
  {
    id: "bdReps",
    label: "BD Reps",
  },
  {
    id: "geo",
    label: "Geo",
  },
  {
    id: "wssTier",
    label: "WSS tier",
  },
];
