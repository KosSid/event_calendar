import { FC } from 'react';
import Button from './Button';

interface DeleteEventPopupProps {
  modalClose?: () => void;
  onDelete: () => void;
  isDeleting: boolean;
  title: string;
}

const DeletePopup: FC<DeleteEventPopupProps> = ({ modalClose, onDelete, isDeleting, title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-xl">
      <h2 className="text-lg font-bold mb-4 capitalize">{`Delete ${title}`}</h2>
      <p>{`Are you sure you want to delete this ${title} ?`}</p>
      <div className="flex justify-end mt-4">
        <Button variant="secondary" handleClick={modalClose}>
          Cancel
        </Button>
        <Button disabled={isDeleting} variant="delete" handleClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeletePopup;
