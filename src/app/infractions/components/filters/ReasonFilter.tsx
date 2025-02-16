import { useTableContext } from "@app/infractions/toolkit/context";
import {
  InfractionOptions,
  InfractionsDictionary,
} from "@app/infractions/toolkit/infractions";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type InfractionType = (typeof InfractionOptions)[number];
type OptionType = {
  type: InfractionType[];
  label: string;
};

const ReasonFilter: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const { dispatch } = useTableContext();

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
        dispatch({ reasons: newValue?.type });
      }}
      renderInput={(params) => <TextField {...params} label={"Reason"} />}
    />
  );
};

export default ReasonFilter;
