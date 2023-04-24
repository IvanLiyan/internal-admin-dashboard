import {
  InfractionOptions,
  InfractionsDictionary,
} from "@app/infractions/toolkit/infractions";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

interface ReasonFilterProps {
  readonly onConfirm: (claim: OptionType) => void;
}

type OptionType = (typeof InfractionOptions)[number];

const ReasonFilter: React.FC<ReasonFilterProps> = ({ onConfirm }) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <Autocomplete
      size="small"
      fullWidth
      options={InfractionOptions.slice().sort((a, b) => {
        const categoryA = InfractionsDictionary[a].category;
        const categoryB = InfractionsDictionary[b].category;
        if (categoryA == "Deprecated Infractions") {
          return 1;
        }
        if (categoryB == "Deprecated Infractions") {
          return -1;
        }
        return categoryA.localeCompare(categoryB);
      })}
      getOptionLabel={(option) => InfractionsDictionary[option].text}
      value={selectedOption}
      groupBy={(option) => InfractionsDictionary[option].category}
      onChange={(_, newValue) => {
        setSelectedOption(newValue);
        if (newValue != null) {
          onConfirm(newValue);
        }
      }}
      renderInput={(params) => (
        <TextField {...params} label={"Filter by Reason"} />
      )}
    />
  );
};

export default ReasonFilter;
