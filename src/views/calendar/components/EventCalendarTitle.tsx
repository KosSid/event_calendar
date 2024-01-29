import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { formatDateToYearMonthDayObj } from '../../../utils/formatDateToYearMonthDayObj';
import { format, sub, add } from 'date-fns';
import { GoChevronRight } from 'react-icons/go';
import { GoChevronLeft } from 'react-icons/go';
import Button from '../../../common/components/Button';
import { ButtonVariant } from '../../interfaces';

interface EventCalendarTitleProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const EventCalendarTitle: FC<EventCalendarTitleProps> = ({ currentDate, setCurrentDate }) => {
  const [, setSearchParams] = useSearchParams();

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
    <div className="mb-6 pt-4 text-customColorTitle flex justify-end lg:pt-0 lg:mb-0">
      <div className="flex justify-center">
        <Button variant={ButtonVariant.Today} handleClick={() => handleClick('today')}>
          <span>Today</span>
        </Button>
      </div>
      <div className="inline-flex justify-center items-center text-lg">
        <Button variant={ButtonVariant.CalendarYearSwitcher} handleClick={() => handleClick('backward')}>
          <GoChevronLeft />
        </Button>
        <h2 className="text-center mx-2 text-4xl md:text-5xl lg:text-6xl">{format(currentDate, 'yyyy')}</h2>
        <Button variant={ButtonVariant.CalendarYearSwitcher} handleClick={() => handleClick('forward')}>
          <GoChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default EventCalendarTitle;
