import { forwardRef, useState, Ref } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from './utils/dateUtil';

interface DateChangeCallback {
  (date: Date): void;
}
interface IDatePickerProps {
  onDateChange: DateChangeCallback;
}
type CustomButtonProps = {
  value: Date;
  onClick: () => void;
};

const CustomInputButton = forwardRef(function DisplayBtn(
  { value, onClick }: CustomButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      type="button"
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      onClick={onClick}
      ref={ref}
    >
      {new Date(value).toLocaleDateString('en-GB')}
    </button>
  );
});

function EdgeDatePicker({ onDateChange }: IDatePickerProps) {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date: Date) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <DatePicker
      showIcon
      selected={startDate}
      includeDates={[...addDays(new Date(), 5)]}
      onChange={handleChange}
      customInput={<CustomInputButton value={startDate} onClick={() => {}} />}
    />
  );
}

export default EdgeDatePicker;
