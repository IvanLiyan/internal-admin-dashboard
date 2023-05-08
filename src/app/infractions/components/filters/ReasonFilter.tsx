import {
  InfractionOptions,
  InfractionsDictionary,
} from "@app/infractions/toolkit/infractions";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

interface ReasonFilterProps {
  readonly onConfirm: (claim: InfractionType[] | null | undefined) => void;
}

type InfractionType = (typeof InfractionOptions)[number];
type OptionType = {
  type: InfractionType[];
  label: string;
};

const ReasonFilter: React.FC<ReasonFilterProps> = ({ onConfirm }) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  return (
    <Autocomplete
      size="small"
      fullWidth
      options={InfractionOptions.reduce<OptionType[]>((acc, infraction) => {
        const label = InfractionsDictionary[infraction].text;
        const dup = acc.find((e) => e.label === label);
        if (dup != null) {
          return [
            ...acc.filter((r) => r.label !== label),
            {
              type: [...dup.type, infraction],
              label: label,
            },
          ];
        }
        return [...acc, { type: [infraction], label: label }];
      }, []).sort((a, b) => {
        const categoryA = InfractionsDictionary[a.type[0]].category;
        const categoryB = InfractionsDictionary[b.type[0]].category;
        if (categoryA == "Deprecated Infractions") {
          return 1;
        }
        if (categoryB == "Deprecated Infractions") {
          return -1;
        }
        return categoryA.localeCompare(categoryB);
      })}
      getOptionLabel={(option) => option.label}
      value={selectedOption}
      isOptionEqualToValue={(option, value) => option.label == value.label}
      groupBy={(option) => InfractionsDictionary[option.type[0]].category}
      onChange={(_, newValue) => {
        setSelectedOption(newValue);
        onConfirm(newValue?.type);
      }}
      renderInput={(params) => (
        <TextField {...params} label={"Filter by Reason"} />
      )}
    />
  );
};

export default ReasonFilter;
