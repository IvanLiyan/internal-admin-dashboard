import { Close, Search } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";

interface SearchboxProps<T extends string> {
  readonly onConfirm: (token: string) => void;
  readonly searchBy?: {
    readonly keys: ReadonlyArray<T>;
    readonly onSearchByChange: (searchBy: T) => void;
    readonly defaultKey: T;
  };
}

const Searchbox = <T extends string>(
  props: TextFieldProps & Omit<SearchboxProps<T>, "onChange" | "onInput">
) => {
  const { onConfirm, searchBy, ...remainingProps } = props;
  const [searchText, setSearchText] = useState("");
  const [selectedSearchType, setSelectedSearchType] = useState<
    T | null | undefined
  >(searchBy?.defaultKey);

  return (
    <TextField
      value={searchText}
      {...remainingProps}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onConfirm(searchText);
        }
      }}
      onChange={(event) => {
        setSearchText(event.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {!!searchBy && (
              <Select
                size="small"
                variant="standard"
                value={selectedSearchType}
                onChange={(event) => {
                  setSelectedSearchType(event.target.value as T);
                  searchBy.onSearchByChange(event.target.value as T);
                }}
              >
                {searchBy.keys.map((o) => (
                  <MenuItem key={o} value={o}>
                    {o}
                  </MenuItem>
                ))}
              </Select>
            )}
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                setSearchText("");
                onConfirm("");
              }}
            >
              <Close />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searchbox;
