import React from 'react';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
import EmptyEvents from '../components/EmptyEvents';
import EventListItem from '../components/EventListItem';
import { EventInterface } from '../interfaces';
import { useFetchEventsData } from '../../../hooks/useFetchEventsData';
import { getEventsInRange } from '../../../services/apiEvents';

interface EventsListProps {
  currentDate: Date;
}

const EventsList: React.FC<EventsListProps> = ({ currentDate }) => {
  const { data: events, isLoading, error } = useFetchEventsData(currentDate, getEventsInRange, [] as EventInterface[]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent errorMessage={error} />;
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
