import React from 'react';
import { mergeClasses } from '../../../utils/mergeClasses';
import { useGetDateFromUrl } from '../../../hooks/useGetDateFromUrl';
import { getDay } from 'date-fns';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const EventCalendarTitleWeekDays: React.FC = () => {
  const date = useGetDateFromUrl() || new Date();
  const weekDay = getDay(date);

  return (
    <div className="grid grid-cols-7 gap-2 mb-2">
      {WEEKDAYS.map((day, i) => (
        <div
          key={day}
          className={mergeClasses('text-gray-400 uppercase p-2 text-center text-xs sm:text-sm md:text-base', {
            'text-red-200': weekDay === i,
          })}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default EventCalendarTitleWeekDays;
