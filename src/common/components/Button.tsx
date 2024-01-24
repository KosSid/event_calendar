import { FC, HTMLAttributes } from 'react';
import { mergeClasses } from '../../utils/mergeClasses';
import { ButtonVariant } from '../../views/interfaces';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({
  className,
  type = 'button',
  handleClick,
  children,
  isLoading = false,
  variant = 'no-styles',
  ...restProps
}) => {
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles =
        'h-10 w-32 bg-blue-400 rounded px-4 text-stone-50 active:scale-95 transition-all ease-in focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-300';
      break;
    case 'secondary':
      variantStyles =
        'h-10 w-32 border-2 border-blue-400 rounded px-4 text-blue-400 active:scale-95 transition-all ease-in focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-300';
      break;
    case 'delete':
      variantStyles =
        'h-10 w-32 bg-red-500 rounded px-4 text-stone-50 active:scale-95 transition-all ease-in focus:outline-none focus-visible:ring-1 focus-visible:ring-red-800';
      break;
    case 'calendarYearSwitcher':
      variantStyles =
        'mx-0 rounded-full w-9 h-9 flex justify-center items-center transition duration-200 ease-in-out hover:bg-gray-100 active:bg-gray-300 active:scale-95 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-300';
      break;
    case 'today':
      variantStyles =
        'flex items-center justify-center text-xs md:text-base lg:text-xl lg:mx-4 bg-white font-medium px-4 lg:px-6 border border-gray-300 rounded-md shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-300 active:bg-gray-50 active:scale-95 transition duration-150 ease-in-out uppercase';
      break;
    default:
      variantStyles = '';
  }
  return (
    <button
      type={type}
      className={mergeClasses(
        'p-2 mx-2 cursor-pointerflex items-center justify-center',
        variantStyles,
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
