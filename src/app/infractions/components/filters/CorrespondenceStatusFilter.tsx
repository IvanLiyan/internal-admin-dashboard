import { useTableContext } from "@app/infractions/toolkit/context";
import { Autocomplete, TextField } from "@mui/material";
import { MerchantWarningCorrespondenceStatus } from "@schema";
import { useState } from "react";

const Label: { [T in MerchantWarningCorrespondenceStatus]: string } = {
  HOLD: "Hold",
  NEW: "New",
  OPEN: "Open",
};

const CorrespondenceStatusFilter: React.FC = () => {
  const [selectedOptions, setSelectedOptions] =
    useState<MerchantWarningCorrespondenceStatus | null>(null);
  const { dispatch } = useTableContext();

  return (
    <Autocomplete
      size="small"
      fullWidth
      options={["HOLD", "NEW", "OPEN"] as const}
      getOptionLabel={(option) => Label[option]}
      value={selectedOptions}
      onChange={(_, newValue) => {
        setSelectedOptions(newValue);
        dispatch({ correspondenceStatus: newValue });
      }}
      renderInput={(params) => (
        <TextField {...params} label={"Correspondence Status"} />
      )}
    />
  );
};

export default CorrespondenceStatusFilter;
