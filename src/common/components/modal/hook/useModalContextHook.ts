import { useContext } from 'react';
import { ModalContext, ModalContextType } from '../Modal';

export const useModalContext = () => {
  const context = useContext<ModalContextType | null>(ModalContext);
  if (!context) {
    throw Error('useModalContext should be used within a scope of Modal conponent');
  }
  return context;
};
