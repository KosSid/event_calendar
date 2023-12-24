import React, { useState } from 'react';
import EventsList from './containers/EventsList';
import { CurrentDateProps } from '../interfaces';
import EventsListTitle from './components/EventsListTitle';
import EventForm from './components/EventForm';
import Button from '../../common/components/Button';

const Events: React.FC<CurrentDateProps> = ({ currentDate }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddEvent = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="bg-red-300 p-2 min-h-2/5 lg:w-2/5 lg:order-1 lg:min-h-screen">
      <EventsListTitle currentDate={currentDate} />
      <EventsList currentDate={currentDate} setIsFormVisible={setIsFormVisible} isFormVisible={isFormVisible} />
      <div className="text-center mt-4 mb-0 mx-auto">
        <Button handleClick={handleAddEvent} className="bg-red-400 rounded px-4 w-28 text-red-50">
          {isFormVisible ? 'Hide Form' : 'Add Event'}
        </Button>
      </div>
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
