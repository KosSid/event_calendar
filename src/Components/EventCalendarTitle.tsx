import { format } from 'date-fns';

interface EventCalendarTitleProps {
  currentDate: Date;
}

function EventCalendarTitle({ currentDate }: EventCalendarTitleProps) {
  return (
    <div className="mb-2  bg-slate-300 rounded-lg p-2">
      <h2 className="text-center capitalize text-sm font-bold sm:text-base md:text-2xl">
        {format(currentDate, 'MMMM yyyy')}
      </h2>
    </div>
  );
}

export default EventCalendarTitle;
