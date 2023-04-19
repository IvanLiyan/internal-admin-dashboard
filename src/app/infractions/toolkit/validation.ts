import { object, string } from "yup";

export const BulkActionModalSchema = object({
  message: string().required("This field is required"),
  internalMessage: string().required("This field is required"),
});
