import { useDisputeAction } from "@app/infractions/toolkit/action";
import { TableDispatchContext } from "@app/infractions/toolkit/context";
import { TableData } from "@app/infractions/toolkit/table";
import { Button, ButtonProps } from "@mui/material";
import { useContext } from "react";

type Props = ButtonProps & {
  infraction: Pick<
    TableData,
    "infractionId" | "merchantName" | "claimed" | "bulkStatus"
  >;
};

const ClaimButton: React.FC<Props> = ({ infraction, ...buttonProps }) => {
  const { onClaim } = useDisputeAction();
  const dispatchContext = useContext(TableDispatchContext);

  return (
    <Button
      {...buttonProps}
      size="small"
      disabled={infraction.claimed || infraction.bulkStatus}
      onClick={() => {
        onClaim({
          claimWarningInput: { warningIds: [infraction.infractionId] },
        }).then((result) => {
          if (result.data?.policy?.merchantWarning?.upsertMerchantWarning?.ok) {
            dispatchContext?.reexecuteQuery({
              requestPolicy: "cache-and-network",
            });
          }
        });
      }}
    >
      Claim
    </Button>
  );
};

export default ClaimButton;
