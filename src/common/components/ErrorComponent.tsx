import {FC} from 'react';
import { mergeClasses } from '../../utils/mergeClasses';

interface ErrorComponentProps {
  errorMessage?: string;
  className?: string;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ errorMessage, className }) => {
  return (
    <div className={mergeClasses('mt-2 flex rounded-xl items-center p-2 justify-center bg-blue-100', className)}>
      <div className="rounded-full h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 border-t-2 border-b-2 border-blue-300"></div>
      <p className="text-blue-500 text-xs sm:text-sm md:text-base ml-4 lg:text-2xl">Error {errorMessage}</p>
    </div>
  );
};

export default ErrorComponent;
