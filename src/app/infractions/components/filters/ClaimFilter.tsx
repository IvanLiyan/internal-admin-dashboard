import { useTableContext } from "@app/infractions/toolkit/context";
import { Autocomplete, TextField } from "@mui/material";
import { MerchantWarningClaimStatus } from "@schema";
import { useState } from "react";

const Label: { [T in MerchantWarningClaimStatus]: string } = {
  ALL: "All",
  CLAIMED: "Claimed",
  CLAIMED_BY_ME: "Claimed by Me",
  NOT_CLAIMED: "Not Claimed",
};

const ClaimFilter: React.FC = () => {
  const [selectedOptions, setSelectedOptions] =
    useState<MerchantWarningClaimStatus | null>(null);
  const { dispatch } = useTableContext();

  return (
    <Autocomplete
      size="small"
      fullWidth
      options={["ALL", "CLAIMED", "CLAIMED_BY_ME", "NOT_CLAIMED"] as const}
      getOptionLabel={(option) => Label[option]}
      value={selectedOptions}
      onChange={(_, newValue) => {
        setSelectedOptions(newValue);
        dispatch({ claimStatus: newValue });
      }}
      renderInput={(params) => <TextField {...params} label={"Claim"} />}
    />
  );
};

export default ClaimFilter;
