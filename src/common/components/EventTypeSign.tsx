import { FC } from 'react';
import { mergeClasses } from '../../utils/mergeClasses';
import { EventTypeType } from '../../views/interfaces';

interface EventTypeSignProps {
  variant: 'legend' | 'day';
  eventType: EventTypeType;
  className?: string;
}

const EventTypeSign: FC<EventTypeSignProps> = ({ eventType, variant, className }) => {
  return (
    <span
      className={mergeClasses(
        'rounded-full',
        { 'bg-indigo-400': eventType === 'public' },
        { 'bg-fuchsia-400': eventType === 'custom' },
        { 'h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6': variant === 'legend' },
        { 'h-2 w-2 md:h-4 md:w-4': variant === 'day' },
        className
      )}
    />
  );
};

export default EventTypeSign;
