import EventCalendarTitle from './EventCalendarTitle';
import EventCalendarTitleWeekDays from './EventCalendarTitleWeekDays';
import EventCalendarMonthDates from './EventCalendarMonthDates';

function EventCalendar() {
  const currentDate = new Date();

  return (
    <div className="container mx-auto p-4">
      <EventCalendarTitle currentDate={currentDate} />
      <EventCalendarTitleWeekDays />
      <EventCalendarMonthDates currentDate={currentDate} />
    </div>
  );
}

export default EventCalendar;
