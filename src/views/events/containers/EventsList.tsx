import React from 'react';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
import EmptyEvents from '../components/EmptyEvents';
import EventListItem from '../components/EventListItem';
import useFetchEventsOnDate from '../../../hooks/useFetchEventsOnDate';
import { EventInterface } from '../../interfaces';
import { mergeClasses } from '../../../utils/mergeClasses';

interface EventsListProps {
  currentDate: Date;
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setFormState: React.Dispatch<React.SetStateAction<EventInterface>>;
}

const EventsList: React.FC<EventsListProps> = ({ currentDate, setIsFormVisible, setFormState }) => {
  const { data: events, isLoading, error } = useFetchEventsOnDate(currentDate);

  if (isLoading) return <Loading />;
  if (error) return <ErrorComponent errorMessage={error.message} />;
  if (events?.length === 0) return <EmptyEvents currentDate={currentDate} />;
  return (
    <ul
      className={mergeClasses('mt-6', { 'lg:overflow-y-scroll': events && events?.length > 6 })}
      style={events && events?.length > 6 ? { maxHeight: '70vh' } : {}}
    >
      {events?.map((event) => (
        <EventListItem setIsFormVisible={setIsFormVisible} key={event.id} event={event} setFormState={setFormState} />
      ))}
    </ul>
  );
};

export default EventsList;
