import {
  format,
  startOfMonth,
  endOfMonth,
  getDay,
  eachDayOfInterval,
} from 'date-fns';

interface EventCalendarMonthDatesProps {
  currentDate: Date;
}

function EventCalendarMonthDates({
  currentDate,
}: EventCalendarMonthDatesProps) {
  const startDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({
    start: startDayOfMonth,
    end: lastDayOfMonth,
  });
  const startDayOfMonthIndex = getDay(startDayOfMonth);
  return (
    <div className="grid grid-cols-7 gap-2">
      {Array.from({ length: startDayOfMonthIndex }).map(() => (
        <div className="border rounded-lg p-2 text-center text-xs sm:text-sm md:text-base">
          -
        </div>
      ))}
      {daysInMonth.map((day: Date) => (
        <div
          key={format(day, 'd')}
          className="border rounded-lg p-2 text-center text-xs sm:text-sm md:text-base"
        >
          {format(day, 'd')}
        </div>
      ))}
    </div>
  );
}

export default EventCalendarMonthDates;
