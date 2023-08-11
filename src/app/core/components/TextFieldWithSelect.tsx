import {
  Divider,
  InputAdornment,
  InputBase,
  NativeSelect,
  Stack,
} from "@mui/material";
import { Search } from "@mui/icons-material";

export type Option = {
  readonly value: string | number;
  readonly text: string;
};

export type TextFieldWithSelectProps = {
  readonly options: ReadonlyArray<Option>;
  readonly option: string | number;
  readonly onOptionChange: (s: string | number) => unknown;
  readonly text: string | null;
  readonly onTextChange: (s: string | null) => unknown;
  readonly placeholder?: string;
  readonly width?: number;
};

const TextFieldWithSelect: React.FC<TextFieldWithSelectProps> = (
  props: TextFieldWithSelectProps
) => {
  const {
    options,
    option,
    onOptionChange,
    text,
    onTextChange,
    placeholder,
    width,
  } = props;

  return (
    <Stack
      flexDirection={"row"}
      sx={{
        pr: 3,
        pl: 3,
        pt: 1,
        pb: 1,
        border: "1px solid",
        borderRadius: "25px",
        borderColor: "grey.400",
        maxWidth: width,
      }}
    >
      <NativeSelect
        sx={{ width: "40%" }}
        value={option}
        onChange={(e) => onOptionChange(e.target.value)}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </NativeSelect>
      <Divider orientation="vertical" flexItem sx={{ mr: 1, ml: 1 }} />
      <InputBase
        value={text}
        fullWidth
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
        startAdornment={
          <InputAdornment position="start">
            <Search fontSize="small" />
          </InputAdornment>
        }
      />
    </Stack>
  );
};

export default TextFieldWithSelect;
