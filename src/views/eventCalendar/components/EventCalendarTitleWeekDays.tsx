import React from 'react';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const EventCalendarTitleWeekDays: React.FC = () => {
  return (
    <div className="grid grid-cols-7 gap-2 mb-2">
      {WEEKDAYS.map((day) => (
        <div
          key={day}
          className="uppercase border p-2 rounded-lg bg-slate-300 text-center text-xs sm:text-sm md:text-base"
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default EventCalendarTitleWeekDays;
