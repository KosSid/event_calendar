import React from 'react';
import { format, isToday } from 'date-fns';
import clsx from 'clsx';

interface EventCalendarDayProps {
  day: Date;
  startDayOfMonth: Date;
}

const EventCalendarDay: React.FC<EventCalendarDayProps> = ({
  day,
  startDayOfMonth,
}) => {
  return (
    <div
      className={clsx(
        'border rounded-lg p-2 text-center text-xs sm:text-sm md:text-base hover:bg-slate-300 hover:text-sky-800 transition-all ease-linear duration-800 cursor-pointer',
        {
          'text-gray-300': day < startDayOfMonth,
          'bg-slate-300 border-1 border-sky-600': isToday(day),
        },
      )}
    >
      {format(day, 'd')}
    </div>
  );
};

export default EventCalendarDay;
