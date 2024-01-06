import { FC } from 'react';
import { EventInterface } from '../../interfaces';
import Button from '../../../common/components/Button';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import EventForm from './EventForm';
import Modal from '../../../common/components/modal/Modal';
import DeletePopup from '../../../common/components/DeletePopup';
import { useDeleteEvent } from '../../../hooks/useDeleteEvent';

interface EventLiProps {
  event: EventInterface;
}

const EventListItem: FC<EventLiProps> = ({ event }) => {
  const { title, content, eventType, id } = event;
  const { deleteEvent, isDeleting } = useDeleteEvent();

  const handleDeleteEvent = () => {
    if (id) deleteEvent(id);
  };

  return (
    <li className="p-3 mb-2 border-b-2 border-blue-100 text-blue-50 relative">
      <h2 className="capitalize p-1 mb-1 text-sm sm:text-base md:text-xl">{title}</h2>
      <p className="text-sm sm:text-base p-1 break-words">
        <span className="capitalize font-semibold ">{`${eventType} holiday`}</span>
        <span>{`: ${content}`}</span>
      </p>
      <div className="flex absolute top-0 right-4">
        <Modal>
          <Modal.Open modalWindowNameToOpen="editForm">
            <Button className="text-stone-50 mx-0 flex items-center justify-center">
              <MdEdit className="text-xl" />
            </Button>
          </Modal.Open>
          <Modal.Window modalWindowNameToOpen="editForm">
            <EventForm editFormInitialState={event} />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open modalWindowNameToOpen="deleteForm">
            <Button className="text-sone-50 mx-0 flex items-center justify-center">
              <MdDeleteOutline className="text-xl" />
            </Button>
          </Modal.Open>
          <Modal.Window modalWindowNameToOpen="deleteForm">
            <DeletePopup onDelete={handleDeleteEvent} isDeleting={isDeleting} title="event" />
          </Modal.Window>
        </Modal>
      </div>
    </li>
  );
};

export default EventListItem;
