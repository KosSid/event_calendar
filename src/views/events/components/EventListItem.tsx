import React from 'react';
import { EventInterface } from '../../interfaces';

interface EventLiProps {
  event: EventInterface;
}

const EventListItem: React.FC<EventLiProps> = ({ event }) => {
  const { title, content, eventType } = event;
  return (
    <li className="p-3 mb-2 border-b-2 border-gray-200 text-stone-50">
      <h2 className="capitalize p-1 mb-1 text-sm sm:text-base md:text-xl">{title}</h2>
      <p className="text-sm sm:text-base p-1 ">
        <span className="capitalize font-semibold ">{`${eventType} holiday`}</span>
        <span>{`: ${content}`}</span>
      </p>
    </li>
  );
};

export default EventListItem;
