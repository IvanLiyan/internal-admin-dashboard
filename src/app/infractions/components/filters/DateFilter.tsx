import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

interface DateFilterProps {
  readonly onChangeStartDate: (date: Date | null) => void;
  readonly onChangeEndDate: (date: Date | null) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({
  onChangeStartDate,
  onChangeEndDate,
}) => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  return (
    <>
      <DatePicker
        label={"Creation Date From"}
        format="YYYY-MM-DD"
        slotProps={{ textField: { size: "small", fullWidth: true } }}
        value={startDate}
        shouldDisableDate={(day) => {
          if (endDate == null) {
            return false;
          }
          return day.isAfter(endDate, "day");
        }}
        onChange={(newValue) => {
          setStartDate(newValue);
          onChangeStartDate(newValue == null ? null : dayjs(newValue).toDate());
        }}
      />
      <DatePicker
        label={"Creation Date To"}
        format="YYYY-MM-DD"
        slotProps={{ textField: { size: "small", fullWidth: true } }}
        value={endDate}
        shouldDisableDate={(day) => {
          if (startDate == null) {
            return false;
          }
          return day.isBefore(startDate, "day");
        }}
        onChange={(newValue) => {
          setEndDate(newValue);
          onChangeEndDate(newValue == null ? null : dayjs(newValue).toDate());
        }}
      />
    </>
  );
};

export default DateFilter;
