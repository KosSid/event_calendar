import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

// utility function to merge tailwind classes defualt | conditional | passed via props
const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(...inputs)) || '';
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  handleClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  handleClick,
  children,
  isLoading = false,
  ...restProps
}) => {
  const defaultStyles =
    'bg-slate-300 p-2 mx-2 cursor-pointerflex items-center justify-center';
  return (
    <button
      {...restProps}
      className={cn(
        defaultStyles, //defaault styles
        { 'cursor-not-allowed': isLoading }, // conditional styles
        className, // passed via propes styles
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
