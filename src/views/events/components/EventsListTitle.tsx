import { FC } from 'react';
import { format } from 'date-fns';
import { CurrentDateProps } from '../../interfaces';

const EventsListTitle: FC<CurrentDateProps> = ({ currentDate }) => {
  const day = format(currentDate, 'd');
  const ordinal = format(currentDate, 'do').replace(day, '');
  const restOfDate = format(currentDate, "MMMM''yy");

  return (
    <h2 className="title-separator text-customColorTitle sm:my-1 md:my-6 text-2xl sm:text-3xl md:text-4xl flex flex-wrap gap-2">
      <p>{format(currentDate, 'EEEE')}</p>
      <p>
        <span>{day}</span>
        <sup className="">{ordinal}</sup>
        <span className="ml-2">{`of ${restOfDate}`}</span>
      </p>
    </h2>
  );
};

export default EventsListTitle;
