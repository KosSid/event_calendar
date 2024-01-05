import { PropsWithChildren, FC } from 'react';
import Button from './Button';
import { createPortal } from 'react-dom';
import { MdOutlineCancel } from 'react-icons/md';

interface ModalWindowProps extends PropsWithChildren {
  modalClose: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ children, modalClose }) => {
  const modalRoot = document.getElementById('modal-root');
  return modalRoot
    ? createPortal(
        <div className="fixed top-0 left-0 w-full h-screen bg-blue-50/10 backdrop-blur-sm z-50 transition-all ease-in duration-500">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-lg shadow-lg p-12 transition-all ease-in duration-500">
            <Button
              type="button"
              handleClick={modalClose}
              className="p-0 absolute rounded w-fit text-blue-50 hover:text-blue-200 active:scale-95 top-3 right-3 font-bold text-3xl transition-all ease-in"
            >
              <MdOutlineCancel />
            </Button>
            <div>{children}</div>
          </div>
        </div>,
        modalRoot
      )
    : null;
};

export default ModalWindow;
