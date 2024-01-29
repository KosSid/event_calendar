import { FC } from 'react';
import { mergeClasses } from '../../../utils/mergeClasses';

interface ErrorFormMessageProps {
  message: string | undefined;
  className?: string;
}

const ErrorFormMessage: FC<ErrorFormMessageProps> = ({ message, className }) => {
  return <p className={mergeClasses('text-red-300 text-xs px-3 mt-1', className)}>{message}</p>;
};

export default ErrorFormMessage;
