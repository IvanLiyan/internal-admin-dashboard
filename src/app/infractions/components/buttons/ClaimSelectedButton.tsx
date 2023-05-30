import { useDisputeAction } from "@app/infractions/toolkit/action";
import {
  TableDispatchContext,
  TableStateContext,
} from "@app/infractions/toolkit/context";
import { Button, ButtonProps } from "@mui/material";
import { useContext } from "react";

const ClaimSelectedButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {
  const { onClaim } = useDisputeAction();
  const state = useContext(TableStateContext);
  const dispatchContext = useContext(TableDispatchContext);

  return (
    <Button
      {...buttonProps}
      size="small"
      disabled={!state?.selected.length}
      onClick={() => {
        onClaim({ claimWarningInput: { warningIds: state?.selected } }).then(
          (result) => {
            if (
              result.data?.policy?.merchantWarning?.upsertMerchantWarning?.ok
            ) {
              dispatchContext?.reexecuteQuery({
                requestPolicy: "cache-and-network",
              });
            }
          }
        );
      }}
    >
      Claim selected
    </Button>
  );
};

export default ClaimSelectedButton;
