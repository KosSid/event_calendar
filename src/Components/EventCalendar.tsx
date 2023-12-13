import EventCalendarTitle from './EventCalendarTitle';
import EventCalendarTitleWeekDays from './EventCalendarTitleWeekDays';
import EventCalendarMonthDates from './EventCalendarMonthDates';

interface EventCalendarProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

function EventCalendar({ currentDate, setCurrentDate }: EventCalendarProps) {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <EventCalendarTitle
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <EventCalendarTitleWeekDays />
      <EventCalendarMonthDates currentDate={currentDate} />
    </div>
  );
}

export default EventCalendar;
