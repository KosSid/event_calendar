import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { formatDateToYearMonthDayObj } from '../../../utils/formatDateToYearMonthDayObj';
import { format, sub, add, isToday } from 'date-fns';
import { GoChevronRight } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';
import { CgToday } from 'react-icons/cg';
import Button from '../../../common/components/Button';

interface EventCalendarTitleProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const EventCalendarTitle: React.FC<EventCalendarTitleProps> = ({ currentDate, setCurrentDate }) => {
  const [, setSearchParams] = useSearchParams();
  const today = isToday(currentDate);

  function handleClick(direction: 'forward' | 'backward' | 'today') {
    let newDate: Date = new Date();
    if (direction === 'forward') newDate = add(currentDate, { years: 1 });
    if (direction === 'backward') newDate = sub(currentDate, { years: 1 });
    if (direction === 'today') newDate = new Date();
    const { year, month, day } = formatDateToYearMonthDayObj(newDate);
    setSearchParams({ year, month, day });
    setCurrentDate(newDate);
  }

  return (
    <div className="relative pt-2 flex flex-row items-center justify-end mb-6 lg:mb-20 lg:pt-6">
      {!today && (
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
      <h2 className="text-gray-300 text-center ml-2 text-4xl md:text-5xl lg:text-6xl">{format(currentDate, 'yyyy')}</h2>
    </div>
  );
};

export default EventCalendarTitle;
