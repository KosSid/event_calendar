import React, { useCallback, useState } from 'react';
import EventsList from './containers/EventsList';
import { CurrentDateProps } from '../interfaces';
import EventsListTitle from './components/EventsListTitle';
import Button from '../../common/components/Button';
import { mergeClasses } from '../../utils/mergeClasses';
import EventForm from './components/EventForm';

const Events: React.FC<CurrentDateProps> = ({ currentDate }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleShowEventForm = useCallback(() => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  }, []);

  return (
    <div className="bg-blue-300 p-2 min-h-2/5 lg:w-2/5 lg:order-1 lg:min-h-screen">
      <EventsListTitle currentDate={currentDate} />
      <div className="text-center mt-4 mb-0 mx-auto">
        <Button handleClick={handleShowEventForm} className="bg-blue-400 rounded px-4 w-28 text-blue-50">
          Add Event
        </Button>
      </div>
      <div
        className={mergeClasses('overflow-hidden transition-all duration-500 ease-in-out', {
          'max-h-500px': isFormVisible,
          'max-h-0': !isFormVisible,
        })}
      >
        <EventForm />
      </div>
      <EventsList currentDate={currentDate} />
    </div>
  );
};

export default Events;
