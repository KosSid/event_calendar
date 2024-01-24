import { FC } from 'react';
import { mergeClasses } from '../../../utils/mergeClasses';
import { useGetDateFromUrl } from '../../../hooks/useGetDateFromUrl';
import { getDay } from 'date-fns';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const EventCalendarTitleWeekDays: FC = () => {
  const date = useGetDateFromUrl() || new Date();
  const weekDay = getDay(date);

  return (
    <div className="mb-4 grid grid-cols-7 gap-2 lg:mb-0">
      {WEEKDAYS.map((day, i) => (
        <div
          key={day}
          className={mergeClasses(
            'text-customColorTitleLight uppercase p-2 text-center text-xs sm:text-sm md:text-base',
            {
              'text-customColorTitle': weekDay === i,
            }
          )}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default EventCalendarTitleWeekDays;
