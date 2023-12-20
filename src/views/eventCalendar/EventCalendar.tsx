import React, { useState, useEffect } from 'react';
import { useGetDateFromUrl } from '../../hooks/useGetDateFromUrl';
import { useSearchParams } from 'react-router-dom';
import { formatDateToYearMonthDayObj } from '../../utils/formatDateToYearMonthDayObj';
import EventCalendarTitle from './components/EventCalendarTitle';
import EventCalendarTitleWeekDays from './components/EventCalendarTitleWeekDays';
import EventCalendarMonthDates from './containers/EventCalendarMonthDates';
import EventsList from './containers/EventsList';

const EventCalendar: React.FC = () => {
  const date = useGetDateFromUrl() || new Date();
  const [currentDate, setCurrentDate] = useState<Date>(date);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const { year, month, day } = formatDateToYearMonthDayObj(currentDate);
    setSearchParams({ year, month, day });
  }, [currentDate, setSearchParams]);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <EventCalendarTitle currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <EventCalendarTitleWeekDays />
      <EventCalendarMonthDates currentDate={currentDate} />
      <EventsList currentDate={currentDate} />
    </div>
  );
};

export default EventCalendar;
