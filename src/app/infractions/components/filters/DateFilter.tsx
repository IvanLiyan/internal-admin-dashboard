import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

interface DateFilterProps {
  readonly onChangeStartDate: (date: Date) => void;
  readonly onChangeEndDate: (date: Date) => void;
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
          onChangeStartDate(dayjs(newValue).toDate());
        }}
      />
      <DatePicker
        label={"Creation Date To"}
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
          onChangeEndDate(dayjs(endDate).toDate());
        }}
      />
    </>
  );
};

export default DateFilter;
