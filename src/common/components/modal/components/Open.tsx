import { FC, cloneElement, ReactElement } from 'react';
import { useModalContext } from '../hook/useModalContextHook';

export interface OpenProps {
  modalWindowNameToOpen: string;
  children: ReactElement;
}

export const Open: FC<OpenProps> = ({ children, modalWindowNameToOpen }) => {
  const { openModal } = useModalContext();
  return cloneElement(children, { handleClick: () => openModal(modalWindowNameToOpen) });
};
