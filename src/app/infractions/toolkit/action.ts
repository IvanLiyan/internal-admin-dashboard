import { useToast } from "@app/core/toast/ToastProvider";
import {
  BulkMerchantWarningAction,
  BulkUpsertMerchantWarningInput,
  CancelReason,
  MerchantWarningAction,
  UpsertMerchantWarningInput,
} from "@schema";
import { graphql } from "src/schema";
import { useMutation } from "urql";

export const BulkActionMutation = graphql(`
  mutation Disputes_BulkAction($input: BulkUpsertMerchantWarningInput) {
    policy {
      bulkUpsertMerchantWarning(input: $input) {
        ok
        message
      }
    }
  }
`);

export const useBulkDisputeAction = () => {
  const toast = useToast();
  const mutation = useMutation(BulkActionMutation);
  const [, bulkAction] = mutation;

  return async (
    action: BulkMerchantWarningAction,
    input: Omit<BulkUpsertMerchantWarningInput, "action">
  ) =>
    bulkAction({
      input: {
        ...input,
        action: action,
      },
    }).then((result) => {
      if (!result.data?.policy?.bulkUpsertMerchantWarning?.ok) {
        toast.alert(
          "error",
          result.data?.policy?.bulkUpsertMerchantWarning?.message ||
            result.error?.message
        );
      } else {
        toast.alert("success", `${action} bulk action submitted successfully`);
      }
      return result;
    });
};

export const CancelReasonLabel: Record<CancelReason, string> = {
  AGENT_ERROR: "Infraction was issued because of an agent error",
  ALREADY_DELETED: "Merchant has already deleted the product",
  EXPIRED: "Infraction has expired",
  INCORRECT_DATA: "Incorrect data",
  OFFENDING_CONTENT_REMOVED: "Offending content has been removed",
  PASSED_AUTHORIZATION_TAGGING: "Passed authorization tagging",
  POLICY_UPDATE:
    "Policy has been updated and this item is no longer breaking policy",
  WHITE_GLOVE_WISH_X_STRAT_MERCH: "White glove / wish x / strategic merchant",
};

export const CancelReasons = [
  "ALREADY_DELETED",
  "POLICY_UPDATE",
  "WHITE_GLOVE_WISH_X_STRAT_MERCH",
  "AGENT_ERROR",
  "INCORRECT_DATA",
  "OFFENDING_CONTENT_REMOVED",
  "EXPIRED",
  "PASSED_AUTHORIZATION_TAGGING",
] as const;

export const DisputeActionMutation = graphql(`
  mutation Dispute_Action($input: UpsertMerchantWarningInput) {
    policy {
      merchantWarning {
        upsertMerchantWarning(input: $input) {
          ok
          message
        }
      }
    }
  }
`);

export const useDisputeAction = () => {
  const toast = useToast();
  const [, upsert] = useMutation(DisputeActionMutation);
  const onUpsert = (
    action: MerchantWarningAction,
    input: Omit<UpsertMerchantWarningInput, "action">
  ) =>
    upsert({
      input: {
        ...input,
        action,
      },
    }).then((result) => {
      if (!result.data?.policy?.merchantWarning?.upsertMerchantWarning?.ok) {
        toast.alert(
          "error",
          result.data?.policy?.merchantWarning?.upsertMerchantWarning
            ?.message || result.error?.message
        );
      } else {
        toast.alert("success", `${action} action successfully completed`);
      }
      return result;
    });

  return {
    onDelete: (input: Omit<UpsertMerchantWarningInput, "action">) =>
      onUpsert("CANCEL", input),
    onConfirm: (input: Omit<UpsertMerchantWarningInput, "action">) =>
      onUpsert("CONFIRM", input),
    onClaim: (input: Omit<UpsertMerchantWarningInput, "action">) =>
      onUpsert("CLAIM", input),
    onDump: (input: Omit<UpsertMerchantWarningInput, "action">) =>
      onUpsert("UNCLAIM", input),
  };
};
