import React, { useState, useEffect } from 'react';
import { useGetDateFromUrl } from '../../hooks/useGetDateFromUrl';
import { useSearchParams } from 'react-router-dom';
import { formatDateToYearMonthDayObj } from '../../utils/formatDateToYearMonthDayObj';
import EventCalendarTitle from './components/EventCalendarTitle';
import EventCalendarTitleWeekDays from './components/EventCalendarTitleWeekDays';
import EventCalendarMonthDates from './containers/EventCalendarMonthDates';
import EventsList from './containers/EventsList';
import EventCalendarTitleMonths from './components/EventCalendarTitleMonths';

const EventCalendar: React.FC = () => {
  const date = useGetDateFromUrl() || new Date();
  const [currentDate, setCurrentDate] = useState<Date>(date);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const { year, month, day } = formatDateToYearMonthDayObj(currentDate);
    setSearchParams({ year, month, day });
  }, []);

  return (
    <div className="mx-auto min-w-96 lg:flex h-screen">
      <div className="px-3 pt-4 pb-2 min-h-3/5 lg:w-3/5 lg:order-2 lg:h-screen lg:px-6 flex justify-center items-start">
        <div className="container max-w-4xl">
          <EventCalendarTitle currentDate={currentDate} setCurrentDate={setCurrentDate} />
          <EventCalendarTitleMonths currentDate={currentDate} setCurrentDate={setCurrentDate} />
          <EventCalendarTitleWeekDays />
          <EventCalendarMonthDates currentDate={currentDate} />
        </div>
      </div>
      <div className="bg-red-300 p-2 min-h-2/5 lg:w-2/5 lg:order-1 lg:h-screen">
        <EventsList currentDate={currentDate} />
      </div>
    </div>
  );
};

export default EventCalendar;
