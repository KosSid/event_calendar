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
        'border h-12 rounded-lg p-2 text-center text-xs sm:h-14 sm:text-sm md:text-base md:h-16 lg:h-20 lg:text-2xl hover:text-blue-200 transition-all ease-linear duration-800 cursor-pointer flex flex-col items-center justify-center',
        {
          'pointer-events-none text-gray-200': day < startDayOfMonth,
          'text-gray-400': day >= startDayOfMonth && format(day, 'yyyy-MM-dd') !== format(currentDate, 'yyyy-MM-dd'),
          'text-blue-50 bg-blue-300': format(day, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd'),
          'border-blue-300': isToday(day),
        }
      )}
    >
      <span>{format(day, 'd')}</span>
      <span className="flex">
        {eventType?.public && <MdOutlineHolidayVillage className="text-xs sm:text-sm md:text-base lg:text-xl" />}
        {eventType?.custom && <MdEventAvailable className="text-xs sm:text-sm md:text-base lg:text-xl" />}
      </span>
    </div>
  );
};

export default EventCalendarDay;
