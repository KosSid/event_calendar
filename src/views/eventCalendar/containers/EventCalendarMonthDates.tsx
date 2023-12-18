import React, { useMemo } from 'react';
import { startOfMonth, endOfMonth, getDay, eachDayOfInterval, subDays, formatISO } from 'date-fns';
import EventCalendarDay from '../components/EventCalendarDay';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
import useFetchEventsData from '../hooks/useFetchEventsData';
import { getHolidayTypesBetweenDates } from '../../../services/apiEvents';
import { EventTypeAggregateInterface } from '../interfaces';

interface EventCalendarMonthDatesProps {
  currentDate: Date;
}

const EventCalendarMonthDates: React.FC<EventCalendarMonthDatesProps> = ({ currentDate }) => {
  const {
    data: eventTypeObj,
    isLoading,
    error,
  } = useFetchEventsData(currentDate, getHolidayTypesBetweenDates, {} as EventTypeAggregateInterface);

  const daysInMonth = useMemo(() => {
    const lastDayOfMonth = endOfMonth(currentDate);
    const startDayOfMonth = startOfMonth(currentDate);
    return eachDayOfInterval({
      start: subDays(startDayOfMonth, getDay(startDayOfMonth)),
      end: lastDayOfMonth,
    });
  }, [currentDate]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent errorMessage={error} />;
  }

  return (
    <div className="grid grid-cols-7 gap-2">
      {daysInMonth.map((day) => {
        const dateKey = formatISO(day, { representation: 'date' });
        const eventDayType = eventTypeObj[dateKey];
        const dayProps = {
          key: dateKey,
          day,
          startDayOfMonth: startOfMonth(currentDate),
          ...(eventDayType && { eventType: eventDayType }),
        };
        return <EventCalendarDay {...dayProps} />;
      })}
    </div>
  );
};

export default EventCalendarMonthDates;
