import { FC, HTMLAttributes } from 'react';
import { mergeClasses } from '../../utils/mergeClasses';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'delete';
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
  const defaultButtonStyle = 'p-2 mx-2 cursor-pointerflex items-center justify-center';
  let variantStyles = '';
  if (variant === 'primary')
    variantStyles = 'h-10 w-32 bg-blue-400 rounded px-4 text-stone-50  active:scale-95 transition-all ease-in';

  if (variant === 'secondary')
    variantStyles =
      'h-10 w-32 border-2 border-blue-400 rounded px-4  text-blue-400 active:scale-95 transition-all ease-in';

  if (variant === 'delete')
    variantStyles = 'h-10 w-32 bg-red-500 rounded px-4 text-stone-50 active:scale-95 transition-all ease-in';

  return (
    <button
      type={type}
      className={mergeClasses(
        defaultButtonStyle,
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
