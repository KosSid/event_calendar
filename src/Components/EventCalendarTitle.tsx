import { addMonths, format, startOfMonth } from 'date-fns';
import Button from './Button';
import { GoChevronRight } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';

interface EventCalendarTitleProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

function EventCalendarTitle({
  currentDate,
  setCurrentDate,
}: EventCalendarTitleProps) {
  function handleClick(direction: 'forward' | 'backward') {
    if (direction === 'forward') {
      setCurrentDate((date: Date) => addMonths(startOfMonth(date), 1));
    } else if (direction === 'backward') {
      setCurrentDate((date: Date) => addMonths(startOfMonth(date), -1));
    }
  }

  return (
    <div className="flex flex-row items-center justify-center mb-2 bg-slate-300 rounded-lg p-2">
      <Button handleClick={() => handleClick('forward')}>
        <GoChevronLeft />
      </Button>
      <h2 className="w-28 text-center capitalize text-sm sm:text-base sm:w-36 md:text-2xl md:w-52 h-full flex items-center">
        <span className="p-1 m-auto">{format(currentDate, 'MMMM yyyy')}</span>
      </h2>
      <Button handleClick={() => handleClick('backward')}>
        <GoChevronRight />
      </Button>
    </div>
  );
}

export default EventCalendarTitle;
