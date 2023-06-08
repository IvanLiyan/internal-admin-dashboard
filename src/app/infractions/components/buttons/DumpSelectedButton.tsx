import { useDisputeAction } from "@app/infractions/toolkit/action";
import { useTableContext } from "@app/infractions/toolkit/context";
import { Button, ButtonProps } from "@mui/material";

const DumpSelectedButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {
  const { onDump } = useDisputeAction();
  const { queryState, reexecuteQuery } = useTableContext();

  return (
    <Button
      {...buttonProps}
      size="small"
      variant="text"
      disabled={!queryState.selected.length}
      onClick={() => {
        onDump({ claimInput: { warningIds: queryState.selected } }).then(
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
      Dump selected claim
    </Button>
  );
};

export default DumpSelectedButton;
