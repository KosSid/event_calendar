import React from 'react';
import { format, parseISO } from 'date-fns';

interface Event {
  id: number;
  year: number;
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  day: number;
  eventDate: string;
  eventType: 'public' | 'custom';
  title: string;
  content: string;
  createdAt: string;
}

interface EventLiProps {
  event: Event;
}

const EventLi: React.FC<EventLiProps> = ({ event }) => {
  const { title, eventDate, content, eventType } = event;
  return (
    <li className="p-3 mb-2 rounded-md shadow">
      <h2 className="bg-slate-300 p-1 rounded-md mb-1 text-sm sm:text-base md:text-xl">
        {`${title} at ${format(parseISO(eventDate), "do 'of' MMMM yyyy")}`}
      </h2>
      <p className="text-sm sm:text-base p-1 ">
        <span className="capitalize font-semibold">{`${eventType} holiday`}</span>
        {`: ${content}`}
      </p>
    </li>
  );
};

export default EventLi;
