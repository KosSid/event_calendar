import { FC } from 'react';
import Button from '../../../common/components/Button';
import EventForm from './EventForm';
import Modal from '../../../common/components/modal/Modal';

const AddEvent: FC = () => {
  return (
    <Modal>
      <div className="text-center mt-4 mb-0 mx-auto">
        <Modal.Open modalWindowNameToOpen="eventFormModal">
          <Button className="bg-blue-400 rounded mx-auto px-4 w-32 text-blue-50 hover:bg-blue-500 active:scale-95 transition-all ease-in">
            Add Event
          </Button>
        </Modal.Open>
      </div>
      <Modal.Window modalWindowNameToOpen="eventFormModal">
        <EventForm />
      </Modal.Window>
    </Modal>
  );
};

export default AddEvent;
