import { FC } from 'react';
import EventsList from './containers/EventsList';
import { CurrentDateProps } from '../interfaces';
import EventsListTitle from './components/EventsListTitle';
import AddEvent from './components/AddEvent';

const Events: FC<CurrentDateProps> = ({ currentDate }) => {
  return (
    <div className="text-customColorTitle grow bg-customColorBgEvents px-3 py-4 lg:w-2/5 lg:order-1 lg:min-h-screen lg:shadow">
      <EventsListTitle currentDate={currentDate} />
      <AddEvent />
      <EventsList currentDate={currentDate} />
    </div>
  );
};

export default Events;
