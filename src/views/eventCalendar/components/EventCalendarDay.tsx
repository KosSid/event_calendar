import React from 'react';
import { EventDayTypeInterface } from '../interfaces';
import { format, isToday } from 'date-fns';
import { MdOutlineHolidayVillage } from 'react-icons/md';
import { MdEventAvailable } from 'react-icons/md';
import clsx from 'clsx';

interface EventCalendarDayProps {
  day: Date;
  startDayOfMonth: Date;
  eventType?: EventDayTypeInterface;
}

const EventCalendarDay: React.FC<EventCalendarDayProps> = ({ day, startDayOfMonth, eventType }) => {
  return (
    <div
      className={clsx(
        'text-gray-400 border h-12 rounded-lg p-2 text-center text-xs sm:h-14 sm:text-sm md:text-base md:h-16 lg:h-20 lg:text-2xl hover:text-red-200 transition-all ease-linear duration-800 cursor-pointer flex flex-col items-center justify-center',
        {
          'text-gray-200 pointer-events-none': day < startDayOfMonth,
          'bg-red-300 text-stone-50 font-semibold': isToday(day),
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
