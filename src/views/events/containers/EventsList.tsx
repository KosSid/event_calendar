import { FC } from 'react';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
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
  return (
    <ul
      className={mergeClasses(
        'pb-1 px-3 flex flex-col items-center justify-start gap-y-2 lg:overflow-y-auto lg:max-h-70vh custom-scrollbar'
      )}
    >
      {events && events?.length > 0 && events?.map((event) => <EventListItem key={event.id} event={event} />)}
    </ul>
  );
};

export default EventsList;
