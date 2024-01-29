import { FC, cloneElement, ReactElement, useRef } from 'react';
import Button from '../../Button';
import { createPortal } from 'react-dom';
import { useModalContext } from '../hook/useModalContextHook';
import { LiaTimesSolid } from 'react-icons/lia';
import { ButtonVariant } from '../../../../views/interfaces';

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
          className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm z-50 transition-all ease-in duration-500"
        >
          <div className="w-max fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-modal transition-all ease-in duration-500 flex flex-col">
            <div className="flex items-center justify-end bg-gray-100 rounded-t-lg py-1 px-2">
              <Button
                className="hover:bg-gray-200"
                type="button"
                handleClick={closeModal}
                variant={ButtonVariant.CalendarYearSwitcher}
              >
                <LiaTimesSolid className="text-2xl text-gray-700" />
              </Button>
            </div>

            <div className="flex-1 p-4">{cloneElement(children, { modalClose: () => closeModal() })}</div>
          </div>
        </div>,
        modalRoot
      )
    : null;
};
