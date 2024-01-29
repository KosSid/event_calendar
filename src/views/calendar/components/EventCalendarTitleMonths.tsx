import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mergeClasses } from '../../../utils/mergeClasses';
import { getMonth, isValid, endOfMonth } from 'date-fns';
import { formatDateToYearMonthDayObj } from '../../../utils/formatDateToYearMonthDayObj';
import { parseDateFromString } from '../../../utils/parseDateFromString';
import { EventCalendarProps } from '../../interfaces';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const EventCalendarTitleMonths: FC<EventCalendarProps> = ({ setCurrentDate, currentDate }) => {
  const [, setSearchParams] = useSearchParams();
  const monthOfYear = getMonth(currentDate);

  const handleClick = (monthIndex: number): void => {
    const { year, day } = formatDateToYearMonthDayObj(currentDate);
    const month = (monthIndex + 1).toString().padStart(2, '0');
    let newDate = parseDateFromString(year, month, day);
    if (!isValid(newDate)) newDate = endOfMonth(new Date(+year, monthIndex));
    const { day: updatedDay } = formatDateToYearMonthDayObj(newDate);
    setSearchParams({ year, month, day: updatedDay });
    setCurrentDate(newDate);
  };

  return (
    <div className="mb-4 grid grid-cols-12 py-2 gap-1 lg:mb-0">
      {MONTHS.map((month, i) => (
        <div
          onClick={() => handleClick(i)}
          key={month}
          className={mergeClasses(
            'text-customColorTitleLight rounded-full uppercase text-center text-xs sm:p-2 sm:hover:bg-gray-100 sm:text-sm md:text-base cursor-pointer hover:text-customColorTitle',
            {
              'text-customColorTitle': monthOfYear === i,
            }
          )}
        >
          {month}
        </div>
      ))}
    </div>
  );
};

export default EventCalendarTitleMonths;
