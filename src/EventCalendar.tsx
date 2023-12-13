import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const EventCalendar = () => {
  const currentDate = new Date();
  const startDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: startDayOfMonth,
    end: lastDayOfMonth,
  });

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-center text-sm font-bold sm:text-base md:text-2xl">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="uppercase border p-2 rounded-lg text-center text-xs sm:text-sm md:text-base"
          >
            {day}
          </div>
        ))}
        {daysInMonth.map((day: Date) => (
          <div
            key={format(day, 'd')}
            className="border bg-lime-300 rounded-lg p-2 text-center text-xs sm:text-sm md:text-base"
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
