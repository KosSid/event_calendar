import { FC, PropsWithChildren, createContext, useState, Dispatch, SetStateAction } from 'react';
import { Open, OpenProps } from './components/Open';
import { Window, WindowProps } from './components/Window';

export interface ModalContextType {
  openModal: Dispatch<SetStateAction<string>>;
  closeModal: () => void;
  modalName: string;
}

export const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProps extends FC<PropsWithChildren> {
  Open: FC<OpenProps>;
  Window: FC<WindowProps>;
}

const Modal: ModalProps = ({ children }) => {
  const [modalName, setModalName] = useState<string>('');
  const closeModal = () => setModalName('');
  const openModal = setModalName;

  return <ModalContext.Provider value={{ modalName, closeModal, openModal }}>{children}</ModalContext.Provider>;
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
