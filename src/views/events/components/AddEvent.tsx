import { FC } from 'react';
import Button from '../../../common/components/Button';
import EventForm from './EventForm';
import Modal from '../../../common/components/modal/Modal';

const AddEvent: FC = () => {
  return (
    <Modal>
      <div className="text-center mt-4 mb-0 mx-auto">
        <Modal.Open modalWindowNameToOpen="eventFormModal">
          <Button variant="primary">Add Event</Button>
        </Modal.Open>
      </div>
      <Modal.Window modalWindowNameToOpen="eventFormModal">
        <EventForm />
      </Modal.Window>
    </Modal>
  );
};

export default AddEvent;
