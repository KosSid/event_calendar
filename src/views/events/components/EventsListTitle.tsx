import React from 'react';

interface EventsListTitleProps {
  currentDate: Date;
}

const EventsListTitle: React.FC<EventsListTitleProps> = ({ currentDate }) => {
  console.log(currentDate);

  return <div></div>;
};

export default EventsListTitle;
