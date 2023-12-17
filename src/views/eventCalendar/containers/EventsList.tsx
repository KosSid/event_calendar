import React from 'react';
import events from '../../../assets/events.ts';
import EventLi from '../components/EventLi.tsx';

interface EventsListProps {
  currentDate: Date;
}

const EventsList: React.FC<EventsListProps> = ({ currentDate }) => {
  console.log(currentDate);
  return (
    <ul className="mt-2">
      {events.map((event) => (
        <EventLi key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventsList;
