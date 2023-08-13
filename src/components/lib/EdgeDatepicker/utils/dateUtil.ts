import moment from 'moment';

/**
 *
 * @param date
 * @param numberOfDays
 * @returns array of dates each index having dates from passed date to next days
 */
const addDays = (date: Date, numberOfDays: number) => {
  const datesList = [];
  datesList.push(date);
  let tDate = date;
  while (datesList.length < numberOfDays) {
    const newDt = moment(tDate).clone().add(1, 'days');
    /* IGNORE SUNDAY */
    if (newDt.day() !== 0) {
      datesList.push(newDt.toDate());
    }
    tDate = newDt.toDate();
  }
  return datesList;
};

const formatDate = (date: Date | string, format: string) => {
  moment(date, format);
};
export { addDays, formatDate };
