import React from 'react';
import { EventDayTypeInterface } from '../../interfaces';
import { format, isToday, startOfMonth } from 'date-fns';
import { MdOutlineHolidayVillage } from 'react-icons/md';
import { MdEventAvailable } from 'react-icons/md';
import clsx from 'clsx';

interface EventCalendarDayProps {
  day: Date;
  currentDate: Date;
  eventType?: EventDayTypeInterface;
  handleClick: (day: Date) => void;
}

const EventCalendarDay: React.FC<EventCalendarDayProps> = ({ day, currentDate, eventType, handleClick }) => {
  const startDayOfMonth = startOfMonth(currentDate);
  return (
    <div
      onClick={() => handleClick(day)}
      className={clsx(
        'border h-12 rounded-lg p-2 text-center text-xs sm:h-14 sm:text-sm md:text-base md:h-16 lg:h-20 lg:text-2xl hover:text-red-200 transition-all ease-linear duration-800 cursor-pointer flex flex-col items-center justify-center',
        {
          'pointer-events-none text-gray-200': day < startDayOfMonth,
          'text-red-200': format(day, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd'),
          'text-gray-400': day >= startDayOfMonth,
          'bg-red-400 text-red-100 font-semibold': isToday(day),
        }
      )}
    >
      <span>{format(day, 'd')}</span>
      <span className="flex">
        {eventType?.public && <MdOutlineHolidayVillage />}
        {eventType?.custom && <MdEventAvailable />}
      </span>
    </div>
  );
};

export default EventCalendarDay;
