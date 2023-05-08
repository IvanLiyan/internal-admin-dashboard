import { Autocomplete, TextField } from "@mui/material";
import { MerchantWarningClaimStatus } from "@schema";
import { useState } from "react";

interface ClaimFilterProps {
  readonly onConfirm: (claim: MerchantWarningClaimStatus | null) => void;
}

const Label: { [T in MerchantWarningClaimStatus]: string } = {
  ALL: "All",
  CLAIMED: "Claimed",
  CLAIMED_BY_ME: "Claimed by Me",
  NOT_CLAIMED: "Not Claimed",
};

const ClaimFilter: React.FC<ClaimFilterProps> = ({ onConfirm }) => {
  const [selectedOptions, setSelectedOptions] =
    useState<MerchantWarningClaimStatus | null>(null);

  return (
    <Autocomplete
      size="small"
      fullWidth
      options={["ALL", "CLAIMED", "CLAIMED_BY_ME", "NOT_CLAIMED"] as const}
      getOptionLabel={(option) => Label[option]}
      value={selectedOptions}
      onChange={(_, newValue) => {
        setSelectedOptions(newValue);
        onConfirm(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label={"Filter by Claim"} />
      )}
    />
  );
};

export default ClaimFilter;
