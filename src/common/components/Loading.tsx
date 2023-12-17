import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="mt-2 flex rounded-xl items-center p-2 justify-center bg-gray-100">
      <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 md:h10 md:w10 border-t-2 border-b-2 border-slate-300"></div>
      <p className="text-slate-500 text-xs sm:text-sm md:text-base ml-4">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
