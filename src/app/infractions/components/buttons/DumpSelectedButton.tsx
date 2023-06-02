import { useDisputeAction } from "@app/infractions/toolkit/action";
import {
  TableDispatchContext,
  TableStateContext,
} from "@app/infractions/toolkit/context";
import { Button, ButtonProps } from "@mui/material";
import { useContext } from "react";

const DumpSelectedButton: React.FC<ButtonProps> = ({ ...buttonProps }) => {
  const { onDump } = useDisputeAction();
  const state = useContext(TableStateContext);
  const dispatchContext = useContext(TableDispatchContext);

  return (
    <Button
      {...buttonProps}
      size="small"
      variant="text"
      disabled={!state?.selected.length}
      onClick={() => {
        onDump({ claimInput: { warningIds: state?.selected } }).then(
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
      Dump selected claim
    </Button>
  );
};

export default DumpSelectedButton;
