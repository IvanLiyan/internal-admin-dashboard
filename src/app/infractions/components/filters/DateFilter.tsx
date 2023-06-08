import { useTableContext } from "@app/infractions/toolkit/context";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const DateFilter: React.FC = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const { dispatch } = useTableContext();

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
          dispatch({
            issueDateStart: newValue == null ? null : dayjs(newValue).unix(),
          });
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
          dispatch({
            issueDateEnd: newValue == null ? null : dayjs(newValue).unix(),
          });
        }}
      />
    </>
  );
};

export default DateFilter;
