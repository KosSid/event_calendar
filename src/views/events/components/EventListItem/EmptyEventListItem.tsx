import { FC } from 'react';
import { FaRegCalendarXmark } from 'react-icons/fa6';

const EmptyEventListItem: FC = () => {
  return (
    <li className="p-6 md:p-8 border border-gray-200 rounded-md w-full text-gray-400 relative bg-white">
      <h2 className="flex items-center justify-center gap-x-2 capitalize p-1 mb-1 text-xl sm:text-2xl">
        <span className="inline-flex items-center justify-center">
          <FaRegCalendarXmark />
        </span>
        <span className="break-words">no events to display</span>
      </h2>
    </li>
  );
};

export default EmptyEventListItem;
