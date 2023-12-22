import React from 'react';
import { format, isSameMonth, add } from 'date-fns';
import { GoChevronRight } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';
import { CgToday } from 'react-icons/cg';
import Button from '../../../common/components/Button';

interface EventCalendarTitleProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const EventCalendarTitle: React.FC<EventCalendarTitleProps> = ({ currentDate, setCurrentDate }) => {
  const isCurrentMonth = isSameMonth(new Date(), currentDate);

  function handleClick(direction: 'forward' | 'backward' | 'today') {
    if (direction === 'forward') {
      setCurrentDate((date: Date) => add(date, { months: 1 }));
    } else if (direction === 'backward') {
      setCurrentDate((date: Date) => add(date, { months: -1 }));
    } else if (direction === 'today') {
      setCurrentDate(new Date());
    }
  }

  return (
    <div className="relative pt-2 flex flex-row items-center justify-end mb-6 lg:mb-20 lg:pt-6">
      {!isCurrentMonth && (
        <Button className="flex rounded-lg mr-2" handleClick={() => handleClick('today')}>
          <span className="mr-1 uppercase text-xs text-gray-400">Today</span>
          <CgToday className="text-gray-400" />
        </Button>
      )}
      <Button className="mx-0 rounded-l-lg" handleClick={() => handleClick('backward')}>
        <GoChevronLeft className="text-gray-400" />
      </Button>
      <Button className="mx-0 rounded-r-lg" handleClick={() => handleClick('forward')}>
        <GoChevronRight className="text-gray-400" />
      </Button>
      <h2 className="text-gray-300 text-center ml-2 capitalize text-4xl md:text-5xl lg:text-6xl">
        {format(currentDate, 'yyyy')}
      </h2>
    </div>
  );
};

export default EventCalendarTitle;
