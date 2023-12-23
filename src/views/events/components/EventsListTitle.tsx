import React from 'react';
import { format } from 'date-fns';
import { CurrentDateProps } from '../../interfaces';

const EventsListTitle: React.FC<CurrentDateProps> = ({ currentDate }) => {
  return (
    <h2 className="text-stone-50 text-3xl sm:text-4xl md:text-5xl flex-col px-3 pt-4 pb-2 tracking-wide uppercase mb-8">
      <p>{format(currentDate, 'EEEE')}</p>
      <p>{format(currentDate, "do 'of' MMMM''yy")}</p>
    </h2>
  );
};

export default EventsListTitle;
