import { object, string } from "yup";

export const BulkActionModalSchema = object({
  message: string(),
  internalMessage: string(),
});
