import React from 'react';
import { mergeClasses } from '../../utils/mergeClasses';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  handleClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  className,
  type = 'button',
  handleClick,
  children,
  isLoading = false,
  ...restProps
}) => {
  const defaultStyles = 'p-2 mx-2 cursor-pointerflex items-center justify-center';
  return (
    <button
      type={type}
      className={mergeClasses(
        defaultStyles, //defaault styles
        { 'cursor-not-allowed': isLoading }, // conditional styles
        className // passed via propes styles
      )}
      {...restProps}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
