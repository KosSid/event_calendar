import { FC, useCallback, useState } from 'react';
import Button from '../../../common/components/Button';
import EventForm from './EventForm';
import ModalWindow from '../../../common/components/ModalWindow';

const AddEvent: FC = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleShowEventForm = useCallback(() => {
    setisModalOpen((isModalOpen) => !isModalOpen);
  }, []);

  return (
    <>
      <div className="text-center mt-4 mb-0 mx-auto">
        <Button
          handleClick={handleShowEventForm}
          className="bg-blue-400 rounded mx-auto px-4 w-32 text-blue-50 hover:bg-blue-500 active:scale-95 transition-all ease-in"
        >
          Add Event
        </Button>
      </div>
      {isModalOpen && (
        <ModalWindow modalClose={() => setisModalOpen(false)}>
          <EventForm modalClose={() => setisModalOpen(false)} />
        </ModalWindow>
      )}
    </>
  );
};

export default AddEvent;
