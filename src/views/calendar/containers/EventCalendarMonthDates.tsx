import React, { useMemo } from 'react';
import { startOfMonth, endOfMonth, getDay, eachDayOfInterval, subDays, formatISO } from 'date-fns';
import EventCalendarDay from '../components/EventCalendarDay';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
import { getHolidayTypesBetweenDates } from '../../../services/apiEvents';
import { EventCalendarProps } from '../../interfaces';
import { useSearchParams } from 'react-router-dom';
import { formatDateToYearMonthDayObj } from '../../../utils/formatDateToYearMonthDayObj';
import { useQuery } from '@tanstack/react-query';

const EventCalendarMonthDates: React.FC<EventCalendarProps> = ({ currentDate, setCurrentDate }) => {
  const [, setSearchParams] = useSearchParams();

  const {
    data: eventTypeObj,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['fetchHolidayTypesBetweenDates', currentDate],
    queryFn: () => {
      const startDayInRange = startOfMonth(currentDate);
      const lastDayInRange = endOfMonth(currentDate);
      return getHolidayTypesBetweenDates(startDayInRange, lastDayInRange);
    },
  });

  const daysInMonth = useMemo(() => {
    const lastDayOfMonth = endOfMonth(currentDate);
    const startDayOfMonth = startOfMonth(currentDate);
    return eachDayOfInterval({
      start: subDays(startDayOfMonth, getDay(startDayOfMonth)),
      end: lastDayOfMonth,
    });
  }, [currentDate]);

  const handleClickOnCalendarDay = (inputDate: Date) => {
    const { year, month, day } = formatDateToYearMonthDayObj(inputDate);
    setSearchParams({ year, month, day });
    setCurrentDate(inputDate);
  };

  if (isLoading) {
    return <Loading className="h-80" />;
  }

  if (isError) {
    return <ErrorComponent errorMessage={error.message} />;
  }

  return (
    <div className="grid grid-cols-7 gap-2">
      {daysInMonth.map((day) => {
        const dateKey = formatISO(day, { representation: 'date' });
        const eventDayType = eventTypeObj ? eventTypeObj[dateKey] : undefined;
        const dayProps = {
          key: dateKey,
          day,
          startDayOfMonth: startOfMonth(currentDate),
          ...(eventDayType && { eventType: eventDayType }),
        };
        return <EventCalendarDay {...dayProps} handleClick={handleClickOnCalendarDay} />;
      })}
    </div>
  );
};

export default EventCalendarMonthDates;
