import { format } from 'date-fns';
import Button from './Button';
import { GoChevronRight } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';

interface EventCalendarTitleProps {
  currentDate: Date;
}

function EventCalendarTitle({ currentDate }: EventCalendarTitleProps) {
  function goForward() {
    console.log('+');
  }

  function backrWard() {
    console.log('-');
  }

  return (
    <div className="flex flex-row items-center justify-center mb-2 bg-slate-300 rounded-lg p-2">
      <Button handleClick={backrWard}>
        <GoChevronLeft />
      </Button>
      <h2 className="text-center capitalize text-sm sm:text-base md:text-2xl">
        {format(currentDate, 'MMMM yyyy')}
      </h2>
      <Button handleClick={goForward}>
        <GoChevronRight />
      </Button>
    </div>
  );
}

export default EventCalendarTitle;
