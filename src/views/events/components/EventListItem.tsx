import { FC } from 'react';
import EventForm from './EventForm';
import Modal from '../../../common/components/modal/Modal';
import DeletePopup from '../../../common/components/DeletePopup';
import Button from '../../../common/components/Button';
import { ButtonVariant, EventInterface } from '../../interfaces';
import { MdDeleteOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { useDeleteEvent } from '../../../hooks/useDeleteEvent';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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
    <li className="py-6 px-3 w-full text-customColorTitle relative bg-white font-medium border border-gray-300 rounded-md shadow-sm hover:shadow transition duration-150 ease-in-out">
      <h2 className="break-words inline-flex items-center justify-center gap-x-2 capitalize p-1 mb-1 text-xl sm:text-2xl">
        <span className="inline-flex items-center justify-center">
          {eventType === 'public' && (
            <span className="bg-indigo-400 rounded-full h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 " />
          )}
          {eventType === 'custom' && (
            <span className="bg-fuchsia-400 rounded-full h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 " />
          )}
        </span>
        <span className="text-base md:text-lg lg:text-xl inline-flex items-center justify-center break-words">
          {title}
        </span>
      </h2>
      <p className="text-sm md:text-base lg:text-lg p-1 break-words">{content}</p>
      <div className="flex absolute top-1 right-1">
        <Modal>
          <Modal.Open modalWindowNameToOpen="editForm">
            <Button
              variant={ButtonVariant.CalendarYearSwitcher}
              className="flex items-center justify-center text-customColorTitleLight hover:bg-transparent hover:text-customColorTitle"
            >
              <Tippy content="Edit Event" placement="bottom" className="text-xs">
                <span>
                  <MdEdit className="text-xl" />
                </span>
              </Tippy>
            </Button>
          </Modal.Open>
          <Modal.Window modalWindowNameToOpen="editForm">
            <EventForm editFormInitialState={event} />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open modalWindowNameToOpen="deleteForm">
            <Button
              variant={ButtonVariant.CalendarYearSwitcher}
              className="flex items-center justify-center text-customColorTitleLight hover:bg-transparent hover:text-customColorTitle"
            >
              <Tippy placement="bottom" content="Delete Event" className="text-xs">
                <span>
                  <MdDeleteOutline className="text-xl" />
                </span>
              </Tippy>
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
