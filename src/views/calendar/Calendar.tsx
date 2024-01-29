import { FC } from 'react';
import { EventCalendarProps } from '../interfaces';
import EventCalendarTitle from './components/EventCalendarTitle';
import EventCalendarTitleMonths from './components/EventCalendarTitleMonths';
import EventCalendarTitleWeekDays from './components/EventCalendarTitleWeekDays';
import EventCalendarMonthDates from './containers/EventCalendarMonthDates';
import EventDescription from './components/EventDescription';

const Calendar: FC<EventCalendarProps> = ({ currentDate, setCurrentDate }) => {
  return (
    <div className="flex flex-col justify-around px-3 py-4 lg:w-3/5 lg:order-2 lg:min-h-screen lg:px-6">
      <EventCalendarTitle currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <EventCalendarTitleMonths currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <EventCalendarTitleWeekDays />
      <EventCalendarMonthDates currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <EventDescription />
    </div>
  );
};

export default Calendar;
