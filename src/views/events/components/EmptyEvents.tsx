import React from 'react';
import { format } from 'date-fns';

interface EmptyEventsProps {
  currentDate: Date;
}

const EmptyEvents: React.FC<EmptyEventsProps> = ({ currentDate }) => {
  return (
    <div className="text-sm sm:text-base md:text-xl mt-2 p-2 flex flex-col items-center justify-center">
      <h4 className="font-semibold">
        <span className="p-1 m-auto">
          {`No Events Found in ${format(currentDate, 'MMMM yyyy')}`}
        </span>
      </h4>
      <p className="text-gray-600">There are currently no events to display.</p>
    </div>
  );
};

export default EmptyEvents;
