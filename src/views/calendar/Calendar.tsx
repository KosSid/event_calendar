import React from 'react';
import { EventCalendarProps } from '../interfaces';
import EventCalendarTitle from './components/EventCalendarTitle';
import EventCalendarTitleMonths from './components/EventCalendarTitleMonths';
import EventCalendarTitleWeekDays from './components/EventCalendarTitleWeekDays';
import EventCalendarMonthDates from './containers/EventCalendarMonthDates';

const Calendar: React.FC<EventCalendarProps> = ({ currentDate, setCurrentDate }) => {
  return (
    <div className="px-3 pt-4 pb-2 min-h-3/5 lg:w-3/5 lg:order-2 lg:h-screen lg:px-6 flex justify-center items-start">
      <div className="container max-w-4xl">
        <EventCalendarTitle currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <EventCalendarTitleMonths currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <EventCalendarTitleWeekDays />
        <EventCalendarMonthDates currentDate={currentDate} />
      </div>
    </div>
  );
};

export default Calendar;
