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
    <div className="rounded-md shadow relative flex flex-row items-center justify-center mb-2 bg-slate-300 p-2">
      <Button handleClick={() => handleClick('backward')}>
        <GoChevronLeft className="hover:text-sky-800" />
      </Button>
      <h2 className="w-28 text-center capitalize text-sm sm:text-base md:text-xl sm:w-36 md:w-52 h-full flex items-center">
        <span className="p-1 m-auto">{format(currentDate, 'MMMM yyyy')}</span>
      </h2>
      <Button handleClick={() => handleClick('forward')}>
        <GoChevronRight className="hover:text-sky-800" />
      </Button>
      {!isCurrentMonth && (
        <Button
          className="hover:text-sky-800 capitalize text-xs sm:text-base absolute left-0 flex"
          handleClick={() => handleClick('today')}
        >
          <span className="mr-1">Today</span>
          <CgToday />
        </Button>
      )}
    </div>
  );
};

export default EventCalendarTitle;
