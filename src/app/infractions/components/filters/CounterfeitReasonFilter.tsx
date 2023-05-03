import {
  CounterfeitReasonOptions,
  CounterfeitReasonsDictionary,
} from "@app/infractions/toolkit/counterfeit";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

interface CounterfeitReasonFilterProps {
  readonly onConfirm: (claim: OptionType) => void;
}

type OptionType = (typeof CounterfeitReasonOptions)[number];

const CounterfeitReasonFilter: React.FC<CounterfeitReasonFilterProps> = ({
  onConfirm,
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <Autocomplete
      size="small"
      fullWidth
      options={CounterfeitReasonOptions.slice().sort((a, b) => {
        const categoryA = CounterfeitReasonsDictionary[a].category;
        const categoryB = CounterfeitReasonsDictionary[b].category;
        return categoryA.localeCompare(categoryB);
      })}
      getOptionLabel={(option) => CounterfeitReasonsDictionary[option].text}
      value={selectedOption}
      groupBy={(option) => CounterfeitReasonsDictionary[option].category}
      onChange={(_, newValue) => {
        setSelectedOption(newValue);
        if (newValue != null) {
          onConfirm(newValue);
        }
      }}
      renderInput={(params) => (
        <TextField {...params} label={"Filter by Parent Category"} />
      )}
    />
  );
};

export default CounterfeitReasonFilter;
