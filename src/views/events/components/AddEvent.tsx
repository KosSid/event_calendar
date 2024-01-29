import { FC } from 'react';
import Button from '../../../common/components/Button';
import EventForm from './EventForm';
import Modal from '../../../common/components/modal/Modal';
import { ButtonVariant } from '../../interfaces';
import { FaPlus } from 'react-icons/fa6';

const AddEvent: FC = () => {
  return (
    <div className="my-6 mx-0 px-3">
      <Modal>
        <Modal.Open modalWindowNameToOpen="eventFormModal">
          <Button
            className="py-4 mx-0 lg:mx-0 w-full flex gap-3 uppercase text-base lg:text-xl"
            variant={ButtonVariant.AddEvent}
          >
            <FaPlus />
            <span>Event</span>
          </Button>
        </Modal.Open>
        <Modal.Window modalWindowNameToOpen="eventFormModal">
          <EventForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddEvent;
