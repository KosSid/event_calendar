import React from 'react';
import { EventInterface } from '../../interfaces';
import Button from '../../../common/components/Button';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { useDeleteEvent } from '../../../hooks/useDeleteEvent';

interface EventLiProps {
  event: EventInterface;
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setFormState: React.Dispatch<React.SetStateAction<EventInterface>>;
}

const EventListItem: React.FC<EventLiProps> = ({ event, setIsFormVisible, setFormState }) => {
  const { title, content, eventType, id } = event;
  const { deleteEvent, isDeleting } = useDeleteEvent();

  const handleDeleteEvent = () => {
    if (id) deleteEvent(id);
  };

  const handleEditEvent = () => {
    console.log(event);
    setIsFormVisible((isFormVisible) => !isFormVisible);
    setFormState({ ...event, title, content, eventType });
  };

  return (
    <li className="p-3 mb-2 border-b-2 border-blue-100 text-blue-50 relative">
      <h2 className="capitalize p-1 mb-1 text-sm sm:text-base md:text-xl">{title}</h2>
      <p className="text-sm sm:text-base p-1 ">
        <span className="capitalize font-semibold ">{`${eventType} holiday`}</span>
        <span>{`: ${content}`}</span>
      </p>
      <div className=" flex divide-x divide-blue-100 absolute top-7 right-4">
        <Button
          handleClick={handleEditEvent}
          className="text-blue-100 mx-0 rounded-l-lg bg-blue-400 w-8 flex items-center justify-center"
        >
          <MdEdit />
        </Button>
        <Button
          disabled={isDeleting}
          handleClick={handleDeleteEvent}
          className="text-blue-100 mx-0 rounded-r-lg bg-blue-400 w-8 flex items-center justify-center"
        >
          <MdDeleteOutline />
        </Button>
      </div>
    </li>
  );
};

export default EventListItem;
