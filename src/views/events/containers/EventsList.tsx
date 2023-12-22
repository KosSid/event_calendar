import React from 'react';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
import EmptyEvents from '../components/EmptyEvents';
import EventListItem from '../components/EventListItem';
import { useQuery } from '@tanstack/react-query';
import { EventInterface } from '../../interfaces';
import { getEventsInRange } from '../../../services/apiEvents';
import { endOfMonth, startOfMonth } from 'date-fns';

interface EventsListProps {
  currentDate: Date;
}

const EventsList: React.FC<EventsListProps> = ({ currentDate }) => {
  const handleFetchEventsInRange = (date: Date): (() => Promise<EventInterface[]>) => {
    const startDayInRange = startOfMonth(date);
    const lastDayInRange = endOfMonth(date);
    return () => getEventsInRange(startDayInRange, lastDayInRange);
  };

  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['events', currentDate],
    queryFn: handleFetchEventsInRange(currentDate),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorComponent errorMessage={error.message} />;
  }

  if (events?.length === 0) {
    return <EmptyEvents currentDate={currentDate} />;
  }

  return <ul className="">{events?.map((event) => <EventListItem key={event.id} event={event} />)}</ul>;
};

export default EventsList;
