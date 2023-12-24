import React, { useState } from 'react';
import EventsList from './containers/EventsList';
import { CurrentDateProps } from '../interfaces';
import EventsListTitle from './components/EventsListTitle';
import EventForm from './components/EventForm';

const Events: React.FC<CurrentDateProps> = ({ currentDate }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleShowEventForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="bg-blue-300 p-2 min-h-2/5 lg:w-2/5 lg:order-1 lg:min-h-screen">
      <EventsListTitle currentDate={currentDate} />
      <EventsList
        currentDate={currentDate}
        setIsFormVisible={setIsFormVisible}
        handleShowEventForm={handleShowEventForm}
        isFormVisible={isFormVisible}
      />
      <div
        style={{
          overflow: 'hidden',
          transition: 'max-height 0.5s ease',
          maxHeight: isFormVisible ? '500px' : '0',
        }}
      >
        <EventForm currentDate={currentDate} />
      </div>
    </div>
  );
};

export default Events;
