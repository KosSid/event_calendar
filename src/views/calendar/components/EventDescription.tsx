import { FC } from 'react';

const EventDescription: FC = () => {
  return (
    <div className="mt-3 flex flex-wrap gap-3 text-customColorTitle text-xs sm:text-sm lg:text-base">
      <div className="flex gap-1 items-center">
        <span className="bg-indigo-700 rounded-full h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 " />
        <span>Public event (e.g., community event, holiday)</span>
      </div>
      <div className="flex gap-1 items-center">
        <span className="bg-fuchsia-700 rounded-full h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 " />
        <span> Custom event (e.g., personal meeting, anniversary)</span>
      </div>
    </div>
  );
};

export default EventDescription;
