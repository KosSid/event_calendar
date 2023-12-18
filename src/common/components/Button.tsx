import React from 'react';
import { mergeClasses } from '../../utils/utils';

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
      className={mergeClasses(
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
