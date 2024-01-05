import { FC } from 'react';
import { mergeClasses } from '../../../utils/mergeClasses';

interface ErrorFormMessageProps {
  message: string | undefined;
  className?: string;
}

const ErrorFormMessage: FC<ErrorFormMessageProps> = ({ message, className }) => {
  return <p className={mergeClasses('text-red-300 absolute -bottom-5 left-0 text-xs', className)}>{message}</p>;
};

export default ErrorFormMessage;
