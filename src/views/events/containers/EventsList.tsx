import { FC } from 'react';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
import EmptyEvents from '../components/EmptyEvents';
import EventListItem from '../components/EventListItem';
import useFetchEventsOnDate from '../../../hooks/useFetchEventsOnDate';
import { mergeClasses } from '../../../utils/mergeClasses';

interface EventsListProps {
  currentDate: Date;
}

const EventsList: FC<EventsListProps> = ({ currentDate }) => {
  const { data: events, isLoading, error } = useFetchEventsOnDate(currentDate);

  if (isLoading) return <Loading />;
  if (error) return <ErrorComponent errorMessage={error.message} />;
  if (events?.length === 0) return <EmptyEvents currentDate={currentDate} />;
  return (
    <ul
      className={mergeClasses('mt-6', { 'lg:overflow-y-auto': events && events?.length > 4 })}
      style={events && events?.length > 4 ? { maxHeight: '70vh' } : {}}
    >
      {events?.map((event) => <EventListItem key={event.id} event={event} />)}
    </ul>
  );
};

export default EventsList;
