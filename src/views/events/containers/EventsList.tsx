import React from 'react';
import Loading from '../../../common/components/Loading';
import ErrorComponent from '../../../common/components/ErrorComponent';
import EmptyEvents from '../components/EmptyEvents';
import EventListItem from '../components/EventListItem';
import useFetchEventsOnDate from '../../../hooks/useFetchEventsOnDate';
import Button from '../../../common/components/Button';

interface EventsListProps {
  currentDate: Date;
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isFormVisible: boolean;
  handleShowEventForm: () => void;
}

const EventsList: React.FC<EventsListProps> = ({
  currentDate,
  setIsFormVisible,
  isFormVisible,
  handleShowEventForm,
}) => {
  const { data: events, isLoading, error } = useFetchEventsOnDate(currentDate);

  if (isLoading) return <Loading />;
  if (error) return <ErrorComponent errorMessage={error.message} />;
  if (events?.length === 0) return <EmptyEvents currentDate={currentDate} />;
  return (
    <>
      <ul className="">
        {events?.map((event) => (
          <EventListItem
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
            key={event.id}
            event={event}
          />
        ))}
      </ul>
      <div className="text-center mt-4 mb-0 mx-auto">
        <Button handleClick={handleShowEventForm} className="bg-blue-400 rounded px-4 w-28 text-blue-50">
          {isFormVisible ? 'Hide Form' : 'Add Event'}
        </Button>
      </div>
    </>
  );
};

export default EventsList;
