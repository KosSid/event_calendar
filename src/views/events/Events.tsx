import React from 'react';
import EventsList from './containers/EventsList';
import { CurrentDateProps } from '../interfaces';
import EventsListTitle from './components/EventsListTitle';
import AddEvent from './components/AddEvent';

const Events: React.FC<CurrentDateProps> = ({ currentDate }) => {
  return (
    <div className="bg-blue-300 p-2 min-h-2/5 lg:w-2/5 lg:order-1 lg:min-h-screen">
      <EventsListTitle currentDate={currentDate} />
      <AddEvent />
      <EventsList currentDate={currentDate} />
    </div>
  );
};

export default Events;
