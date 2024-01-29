import { FC } from 'react';
import { EventDayTypeInterface } from '../../interfaces';
import { format, isToday, startOfMonth } from 'date-fns';
import clsx from 'clsx';

interface EventCalendarDayProps {
  day: Date;
  currentDate: Date;
  eventType?: EventDayTypeInterface;
  handleClick: (day: Date) => void;
}

const EventCalendarDay: FC<EventCalendarDayProps> = ({ day, currentDate, eventType, handleClick }) => {
  const startDayOfMonth = startOfMonth(currentDate);
  return (
    <div
      onClick={() => handleClick(day)}
      className={clsx(
        'self-center h-12 sm:h-14 md:h-16 lg:h-20 border rounded-lg p-2 text-center text-xs sm:text-sm md:text-base lg:text-2xl transition-all ease-linear duration-800 cursor-pointer flex flex-col items-end justify-start',
        {
          'pointer-events-none text-gray-200': day < startDayOfMonth,
          'text-customColorTitle hover:bg-gray-100':
            day >= startDayOfMonth && format(day, 'yyyy-MM-dd') !== format(currentDate, 'yyyy-MM-dd') && !isToday(day),
          'bg-blue-100 text-blue-900 ':
            format(day, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd') && !isToday(day),
          'text-stone-50 bg-blue-500 hover:bg-blue-600': isToday(day),
        }
      )}
    >
      <span className="grow">{format(day, 'd')}</span>
      <span className="flex flex-wrap gap-1">
        {eventType?.public && <span className="bg-indigo-400 rounded-full h-2 w-2 md:h-4 md:w-4 " />}
        {eventType?.custom && <span className="bg-fuchsia-400 rounded-full h-2 w-2 md:h-4 md:w-4" />}
      </span>
    </div>
  );
};

export default EventCalendarDay;
