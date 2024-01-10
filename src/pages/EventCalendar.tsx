import { FC, useState, useEffect } from 'react';
import { useGetDateFromUrl } from '../hooks/useGetDateFromUrl';
import { useSearchParams } from 'react-router-dom';
import { formatDateToYearMonthDayObj } from '../utils/formatDateToYearMonthDayObj';
import Calendar from '../views/calendar/Calendar';
import Events from '../views/events/Events';

const EventCalendar: FC = () => {
  const date = useGetDateFromUrl() ?? new Date();
  const [currentDate, setCurrentDate] = useState<Date>(date);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const { year, month, day } = formatDateToYearMonthDayObj(currentDate);
    setSearchParams({ year, month, day });
  }, []);

  return (
    <div className="h-screen mx-auto min-w-96 lg:flex">
      <div id="modal-root"></div>
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <Events currentDate={currentDate} />
    </div>
  );
};

export default EventCalendar;
