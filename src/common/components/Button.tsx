import { FC, HTMLAttributes } from 'react';
import { mergeClasses } from '../../utils/mergeClasses';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  className,
  type = 'button',
  handleClick,
  children,
  isLoading = false,
  ...restProps
}) => {
  return (
    <button
      type={type}
      className={mergeClasses(
        'p-2 mx-2 cursor-pointerflex items-center justify-center', //defaault styles
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
