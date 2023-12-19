import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

// utility function to merge tailwind classes defualt | conditional | passed via props
export const mergeClasses = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(...inputs)) || '';
};
