import { useSearchParams } from 'react-router-dom';
import { parseDateFromString } from '../utils/parseDateFromString';

// hook return date from url or today's date
export const useGetDateFromUrl = (): Date => {
  const [searchParams] = useSearchParams();
  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const day = searchParams.get('day');
  if (year && month && day) return parseDateFromString(year, month, day);
  return new Date();
};
