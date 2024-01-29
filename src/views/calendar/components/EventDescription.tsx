import { FC } from 'react';
import EventTypeSign from '../../../common/components/EventTypeSign';

const EventDescription: FC = () => {
  return (
    <div className="mt-3 flex flex-wrap gap-3 text-customColorTitle text-xs sm:text-sm lg:text-base">
      <div className="flex gap-1 items-center">
        <EventTypeSign variant="legend" eventType="public" />
        <span>Public event (e.g., community event, holiday)</span>
      </div>
      <div className="flex gap-1 items-center">
        <EventTypeSign variant="legend" eventType="custom" />
        <span> Custom event (e.g., personal meeting, anniversary)</span>
      </div>
    </div>
  );
};

export default EventDescription;
