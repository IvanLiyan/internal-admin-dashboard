import { useDisputeAction } from "@app/infractions/toolkit/action";
import { useTableContext } from "@app/infractions/toolkit/context";
import { Button, ButtonProps } from "@mui/material";

const ClaimSelectedButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {
  const { onClaim } = useDisputeAction();
  const { queryState, reexecuteQuery } = useTableContext();

  return (
    <Button
      {...buttonProps}
      size="small"
      disabled={!queryState.selected.length}
      onClick={() => {
        onClaim({ claimInput: { warningIds: queryState.selected } }).then(
          (result) => {
            if (
              result.data?.policy?.merchantWarning?.upsertMerchantWarning?.ok
            ) {
              reexecuteQuery({
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
