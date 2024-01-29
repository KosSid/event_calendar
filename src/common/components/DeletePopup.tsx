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
    <div className="bg-white text-customColorTitle">
      <h2 className="text-base md:text-lg font-bold mb-2 md:mb-3 capitalize">{`Delete ${title}`}</h2>
      <p className="text-sm md:text-base">{`Are you sure you want to delete this ${title}?`}</p>
      <div className="flex flex-wrap justify-around items-center pt-3 ">
        <Button className="mx-0" variant={ButtonVariant.Secondary} handleClick={modalClose}>
          Cancel
        </Button>
        <Button className="mx-0 shadow-sm" disabled={isDeleting} variant={ButtonVariant.Delete} handleClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeletePopup;
