import { FC } from 'react';
import Button from './Button';
import { ButtonVariant } from '../../views/interfaces';

interface DeleteEventPopupProps {
  modalClose?: () => void;
  onDelete: () => void;
  isDeleting: boolean;
  title: string;
}

const DeletePopup: FC<DeleteEventPopupProps> = ({ modalClose, onDelete, isDeleting, title }) => {
  return (
    <div className="bg-white w-64 sm:w-fit p-4 rounded-lg shadow-xl text-gray-500">
      <h2 className="text-lg font-bold mb-4 capitalize">{`Delete ${title}`}</h2>
      <p>{`Are you sure you want to delete this ${title} ?`}</p>
      <div className="flex justify-end mt-4">
        <Button variant={ButtonVariant.Secondary} handleClick={modalClose}>
          Cancel
        </Button>
        <Button disabled={isDeleting} variant={ButtonVariant.Delete} handleClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeletePopup;
