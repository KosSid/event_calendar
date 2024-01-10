import { FC } from 'react';
import EventForm from '../EventForm';
import Modal from '../../../../common/components/modal/Modal';
import DeletePopup from '../../../../common/components/DeletePopup';
import Button from '../../../../common/components/Button';
import { EventInterface } from '../../../interfaces';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { MdOutlineHolidayVillage } from 'react-icons/md';
import { MdEventAvailable } from 'react-icons/md';
import { useDeleteEvent } from '../../../../hooks/useDeleteEvent';

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
    <li className="p-6 md:p-8 border border-gray-200 rounded-md w-full text-gray-400 relative bg-white">
      <h2 className="inline-flex items-center justify-center gap-x-2 capitalize p-1 mb-1 text-xl sm:text-2xl">
        <span className="inline-flex items-center justify-center">
          {eventType === 'public' && <MdOutlineHolidayVillage />}
          {eventType === 'custom' && <MdEventAvailable />}
        </span>
        <span className="inline-flex items-center justify-center break-words">{title}</span>
      </h2>
      <p className="text-base sm:text-xl p-1 break-words">{content}</p>
      <div className="flex absolute top-0 right-1">
        <Modal>
          <Modal.Open modalWindowNameToOpen="editForm">
            <Button className="mx-0 flex items-center justify-center text-gray-200 hover:text-gray-400">
              <MdEdit className="text-xl" />
            </Button>
          </Modal.Open>
          <Modal.Window modalWindowNameToOpen="editForm">
            <EventForm editFormInitialState={event} />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open modalWindowNameToOpen="deleteForm">
            <Button className="mx-0 flex items-center justify-center  text-gray-200 hover:text-gray-400">
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
