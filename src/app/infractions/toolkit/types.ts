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