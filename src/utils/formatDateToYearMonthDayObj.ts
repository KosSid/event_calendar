import { format } from 'date-fns';

// Function to extract year, month, and day as strings from a Date object using date-fns
export const formatDateToYearMonthDayObj = (date: Date): { year: string; month: string; day: string } => {
  const year = format(date, 'yyyy');
  const month = format(date, 'MM');
  const day = format(date, 'dd');

  return { year, month, day };
};
