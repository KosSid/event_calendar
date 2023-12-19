import { parse } from 'date-fns';

// create new date based on year | month | day string
export const parseDateFromString = (year: string, month: string, day: string): Date => {
  const dateString = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  return parse(dateString, 'yyyy-MM-dd', new Date());
};
