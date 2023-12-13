import { useMemo } from 'react';
import EventCalendarDay from './EventCalendarDay';

import {
  startOfMonth,
  endOfMonth,
  getDay,
  eachDayOfInterval,
  subDays,
} from 'date-fns';

interface EventCalendarMonthDatesProps {
  currentDate: Date;
}

function EventCalendarMonthDates({
  currentDate,
}: EventCalendarMonthDatesProps) {
  const startDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = useMemo(() => {
    return eachDayOfInterval({
      start: subDays(startDayOfMonth, getDay(startDayOfMonth)),
      end: lastDayOfMonth,
    });
  }, [startDayOfMonth, lastDayOfMonth]);

  return (
    <div className="grid grid-cols-7 gap-2">
      {daysInMonth.map((day: Date, index: number) => (
        <EventCalendarDay
          key={index}
          day={day}
          startDayOfMonth={startDayOfMonth}
        />
      ))}
    </div>
  );
}

export default EventCalendarMonthDates;
