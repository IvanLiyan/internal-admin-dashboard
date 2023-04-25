import { Close, Search } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";

interface SearchboxProps {
  readonly onConfirm: (token: string) => void;
}

const Searchbox: React.FC<
  TextFieldProps & Omit<SearchboxProps, "onChange" | "onInput">
> = ({ onConfirm, ...props }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <TextField
      value={searchText}
      {...props}
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
