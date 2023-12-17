import React from 'react';

interface ErrorComponentProps {
  errorMessage: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errorMessage }) => {
  return (
    <div className="mt-2 flex rounded-xl items-center p-2 justify-center bg-red-100">
      <div className="rounded-full h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 border-t-2 border-b-2 border-red-300"></div>
      <p className="text-red-500 text-xs sm:text-sm md:text-base ml-4">
        Error: {errorMessage}
      </p>
    </div>
  );
};

export default ErrorComponent;
