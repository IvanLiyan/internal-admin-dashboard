import { useDisputeAction } from "@app/infractions/toolkit/action";
import { useTableContext } from "@app/infractions/toolkit/context";
import { TableData } from "@app/infractions/toolkit/table";
import { Button, ButtonProps } from "@mui/material";

type Props = ButtonProps & {
  infraction: Pick<
    TableData,
    "infractionId" | "merchantName" | "claimed" | "bulkStatus"
  >;
};

const ClaimButton: React.FC<Props> = ({ infraction, ...buttonProps }) => {
  const { onClaim } = useDisputeAction();
  const { reexecuteQuery } = useTableContext();

  return (
    <Button
      {...buttonProps}
      size="small"
      disabled={infraction.claimed || infraction.bulkStatus}
      onClick={() => {
        onClaim({
          claimInput: { warningIds: [infraction.infractionId] },
        }).then((result) => {
          if (result.data?.policy?.merchantWarning?.upsertMerchantWarning?.ok) {
            reexecuteQuery({
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
