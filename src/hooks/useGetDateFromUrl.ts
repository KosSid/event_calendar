import { useSearchParams } from 'react-router-dom';
import { parseDateFromString } from '../utils/parseDateFromString';

// hook return date from url or null
export const useGetDateFromUrl = (): Date | null => {
  const [searchParams] = useSearchParams();
  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const day = searchParams.get('day');
  if (year && month && day) {
    const parsedDate = parseDateFromString(year, month, day);
    // Check if the date is valid
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
  }
  return null;
};
