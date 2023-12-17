import React from 'react';
import EventCalendarTitle from './components/EventCalendarTitle';
import EventCalendarTitleWeekDays from './components/EventCalendarTitleWeekDays';
import EventCalendarMonthDates from './containers/EventCalendarMonthDates';
import EventsList from './containers/EventsList';

interface EventCalendarProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const EventCalendar: React.FC<EventCalendarProps> = ({
  currentDate,
  setCurrentDate,
}) => {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <EventCalendarTitle
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <EventCalendarTitleWeekDays />
      <EventCalendarMonthDates currentDate={currentDate} />
      <EventsList currentDate={currentDate} />
    </div>
  );
};

export default EventCalendar;
