import { CounterfeitReasonsDictionary } from "@app/infractions/toolkit/counterfeit";
import {
  CounterfeitSubreasonOptions,
  CounterfeitSubreasonsDictionary,
} from "@app/infractions/toolkit/counterfeit-sub-reason";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

interface CounterfeitSubreasonFilterProps {
  readonly onConfirm: (claim: OptionType) => void;
}

type OptionType = (typeof CounterfeitSubreasonOptions)[number];

const CounterfeitSubreasonFilter: React.FC<CounterfeitSubreasonFilterProps> = ({
  onConfirm,
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <Autocomplete
      size="small"
      fullWidth
      options={CounterfeitSubreasonOptions.slice().sort((a, b) => {
        const categoryA = CounterfeitSubreasonsDictionary[a].categoryCode;
        const categoryB = CounterfeitSubreasonsDictionary[b].categoryCode;
        return CounterfeitReasonsDictionary[categoryA].text.localeCompare(
          CounterfeitReasonsDictionary[categoryB].text
        );
      })}
      getOptionLabel={(option) => CounterfeitSubreasonsDictionary[option].text}
      value={selectedOption}
      groupBy={(option) =>
        CounterfeitReasonsDictionary[
          CounterfeitSubreasonsDictionary[option].categoryCode
        ].text
      }
      onChange={(_, newValue) => {
        setSelectedOption(newValue);
        if (newValue != null) {
          onConfirm(newValue);
        }
      }}
      renderInput={(params) => (
        <TextField {...params} label={"Filter by Sub Category"} />
      )}
    />
  );
};

export default CounterfeitSubreasonFilter;
