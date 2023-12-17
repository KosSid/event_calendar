import React from 'react';
import Loading from '../../../common/components/Loading';
import ErrorPage from '../../../common/components/ErrorComponent';
import EmptyEvents from '../components/EmptyEvents';
import EventListItem from '../components/EventListItem';
import useEvents from '../hooks/useEvents';

interface EventsListProps {
  currentDate: Date;
}

const EventsList: React.FC<EventsListProps> = ({ currentDate }) => {
  const { events, isLoading, error } = useEvents(currentDate);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage errorMessage={error} />;
  }

  if (events.length === 0) {
    return <EmptyEvents currentDate={currentDate} />;
  }

  return (
    <ul className="mt-2">
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventsList;
