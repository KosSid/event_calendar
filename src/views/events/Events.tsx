import React from 'react';
import EventsList from './containers/EventsList';
import { CurrentDateProps } from '../interfaces';
import EventsListTitle from './components/EventsListTitle';
import EventForm from './components/EventForm';

const Events: React.FC<CurrentDateProps> = ({ currentDate }) => {
  return (
    <div className="bg-red-300 p-2 min-h-2/5 lg:w-2/5 lg:order-1 lg:min-h-screen">
      <EventsListTitle currentDate={currentDate} />
      <EventsList currentDate={currentDate} />
      <EventForm currentDate={currentDate} />
    </div>
  );
};

export default Events;
