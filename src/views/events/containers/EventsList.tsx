import React from 'react';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
import EmptyEvents from '../components/EmptyEvents';
import EventListItem from '../components/EventListItem';
import { useQuery } from '@tanstack/react-query';
import { getEventsOnDate } from '../../../services/apiEvents';

interface EventsListProps {
  currentDate: Date;
}

const EventsList: React.FC<EventsListProps> = ({ currentDate }) => {
  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['fetchEventsOnDate', currentDate],
    queryFn: () => getEventsOnDate(currentDate),
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
