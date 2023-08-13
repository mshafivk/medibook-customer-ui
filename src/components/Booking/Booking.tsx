import { useCallback } from 'react';
import EdgeDatePicker from '../lib/EdgeDatepicker/EdgeDatepicker';

const countPerSlot = [30, 30];
const slots = ['Morning: 10AM - 2PM', 'Afternoon: 3PM - 7PM'];

function Booking() {
  const onDateChange = useCallback((date: Date) => {
    console.log('Date Changed', date);
  }, []);
  return (
    <div className="flex flex-1 w-9/12 justify-center bg-white shadow sm:rounded-lg py-4">
      <div className="flex flex-col w-1/3">
        <div className="text-lg font-bold text-center">Book Your Slots</div>
        <EdgeDatePicker onDateChange={onDateChange} />
        <label
          htmlFor="slots"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a slot
        </label>
        <select
          id="slots"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {slots.map((slot) => (
            <option value={slot} key={slot}>
              {slot}
            </option>
          ))}
        </select>
        <div className="w-100 mt-4 flex flex-wrap items-center justify-center">
          {[...Array(30)].map((e) => {
            return (
              <div
                key={e}
                className="w-8 h-8 border-pink-800 border border-solid outline-1 outline-dotted outline-pink-800 -outline-offset-4 m-1 cursor-pointer"
              >
                {e}
              </div>
            );
          })}
        </div>
        <button className="btn-primary mt-4" type="button">
          Save
        </button>
      </div>
    </div>
  );
}

export default Booking;
