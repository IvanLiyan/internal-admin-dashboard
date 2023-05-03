import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

interface ClaimFilterProps {
  readonly onConfirm: (claim: OptionType) => void;
}

type OptionType = {
  id: number;
  label: string;
};

const options: ReadonlyArray<OptionType> = [
  {
    id: 1,
    label: "Claimed",
  },
  {
    id: 2,
    label: "Not Claimed",
  },
  {
    id: 3,
    label: "Claimed by Me",
  },
  {
    id: 4,
    label: "All",
  },
];

const ClaimFilter: React.FC<ClaimFilterProps> = ({ onConfirm }) => {
  const [selectedOptions, setSelectedOptions] = useState<OptionType | null>(
    null
  );

  return (
    <Autocomplete
      size="small"
      fullWidth
      options={options}
      value={selectedOptions}
      onChange={(_, newValue) => {
        setSelectedOptions(newValue);
        if (newValue != null) {
          onConfirm(newValue);
        }
      }}
      renderInput={(params) => (
        <TextField {...params} label={"Filter by Claim"} />
      )}
      isOptionEqualToValue={(option, value) => option.id == value.id}
    />
  );
};

export default ClaimFilter;
