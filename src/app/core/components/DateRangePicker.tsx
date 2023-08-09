import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

type DateRangeOrientation = "VERTICAL" | "HORIZONTAL";

export type DateRangePickerProps = {
  readonly startDate: Dayjs | null;
  readonly endDate: Dayjs | null;
  readonly format: string;
  readonly onChange: (from: Dayjs | null, to: Dayjs | null) => unknown;
  readonly orientation?: DateRangeOrientation;
};

const DateRangePicker: React.FC<DateRangePickerProps> = (
  props: DateRangePickerProps
) => {
  const {
    startDate,
    endDate,
    format,
    onChange,
    orientation = "HORIZONTAL",
  } = props;
  return (
    <Box
      sx={
        orientation == "VERTICAL"
          ? { display: "flex", flexDirection: "column" }
          : {}
      }
    >
      <DatePicker
        sx={orientation == "HORIZONTAL" ? { mr: 1.5 } : { mb: 1.5 }}
        label="From"
        format={format}
        slotProps={{ textField: { size: "small" } }}
        value={startDate}
        shouldDisableDate={(day) => {
          if (endDate == null) {
            return false;
          }
          return day.isAfter(endDate, "day");
        }}
        onChange={(from) => onChange(from, endDate)}
      />
      <DatePicker
        label="To"
        format={format}
        slotProps={{ textField: { size: "small" } }}
        value={endDate}
        shouldDisableDate={(day) => {
          if (startDate == null) {
            return false;
          }
          return day.isBefore(startDate, "day");
        }}
        onChange={(to) => onChange(startDate, to)}
      />
    </Box>
  );
};

export default DateRangePicker;
