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

const EventCalendarDay: React.FC<EventCalendarDayProps> = ({
  day,
  startDayOfMonth,
  eventType,
}) => {
  return (
    <div
      className={clsx(
        'border h-12 rounded-lg p-2 text-center text-xs sm:text-sm md:text-base hover:bg-slate-300 hover:text-sky-800 transition-all ease-linear duration-800 cursor-pointer flex flex-col items-center justify-center',
        {
          'text-gray-300': day < startDayOfMonth,
          'bg-slate-300 border-1 border-sky-600': isToday(day),
        },
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
