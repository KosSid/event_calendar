import React from 'react';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
import EmptyEvents from '../components/EmptyEvents';
import EventListItem from '../components/EventListItem';
import useFetchEventsOnDate from '../../../hooks/useFetchEventsOnDate';

interface EventsListProps {
  currentDate: Date;
}

const EventsList: React.FC<EventsListProps> = ({ currentDate }) => {
  const { data: events, isLoading, error } = useFetchEventsOnDate(currentDate);

  if (isLoading) return <Loading />;
  if (error) return <ErrorComponent errorMessage={error.message} />;
  if (events?.length === 0) return <EmptyEvents currentDate={currentDate} />;
  return <ul className="">{events?.map((event) => <EventListItem key={event.id} event={event} />)}</ul>;
};

export default EventsList;
