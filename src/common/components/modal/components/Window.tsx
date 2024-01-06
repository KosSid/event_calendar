import { FC, cloneElement, ReactElement, useRef } from 'react';
import Button from '../../Button';
import { createPortal } from 'react-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { useModalContext } from '../hook/useModalContextHook';

export interface WindowProps {
  modalWindowNameToOpen: string;
  children: ReactElement;
}

export const Window: FC<WindowProps> = ({ children, modalWindowNameToOpen }) => {
  const { closeModal, modalName } = useModalContext();
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot || modalName !== modalWindowNameToOpen) return null;

  const handleClickOnOverlay = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      closeModal();
    }
  };

  return modalRoot
    ? createPortal(
        <div
          ref={overlayRef}
          onClick={handleClickOnOverlay}
          className="fixed top-0 left-0 w-full h-screen bg-blue-50/10 backdrop-blur-sm z-50 transition-all ease-in duration-500"
        >
          <div className=" w-max p-4 md:p-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-lg shadow-lg transition-all ease-in duration-500">
            <div className="flex items-center justify-end mb-2 md:mb-4">
              <Button
                type="button"
                handleClick={closeModal}
                className="p-0 rounded w-fit text-stone-50 active:scale-95 font-bold text-3xl transition-all ease-in"
              >
                <MdOutlineCancel />
              </Button>
            </div>

            <div>{cloneElement(children, { modalClose: () => closeModal() })}</div>
          </div>
        </div>,
        modalRoot
      )
    : null;
};
