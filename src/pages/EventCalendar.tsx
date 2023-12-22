import React, { useState, useEffect } from 'react';
import { useGetDateFromUrl } from '../hooks/useGetDateFromUrl';
import { useSearchParams } from 'react-router-dom';
import { formatDateToYearMonthDayObj } from '../utils/formatDateToYearMonthDayObj';
import EventsList from '../views/events/containers/EventsList';
import Calendar from '../views/calendar/Calendar';

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
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <div className="bg-red-300 p-2 min-h-2/5 lg:w-2/5 lg:order-1 lg:h-screen">
        <EventsList currentDate={currentDate} />
      </div>
    </div>
  );
};

export default EventCalendar;
