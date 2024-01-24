import { FC } from 'react';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
import EventListItem from '../components/EventListItem/EventListItem';
import useFetchEventsOnDate from '../../../hooks/useFetchEventsOnDate';
import { mergeClasses } from '../../../utils/mergeClasses';
import EmptyEventListItem from '../components/EventListItem/EmptyEventListItem';

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
        'px-3 mt-4 flex flex-col items-center justify-start gap-y-2 lg:overflow-y-scroll lg:scrollbar-thin lg:scrollbar-thumb-blue-400 lg:scrollbar-track-blue-50 lg:max-h-70vh'
      )}
    >
      {events?.length === 0 && <EmptyEventListItem />}
      {events && events?.length > 0 && events?.map((event) => <EventListItem key={event.id} event={event} />)}
    </ul>
  );
};

export default EventsList;
