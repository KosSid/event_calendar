import { useQuery } from '@tanstack/react-query';
import { startOfMonth, endOfMonth } from 'date-fns';
import { getHolidayTypesBetweenDatesAPI } from '../services/apiEvents';

const useFetchHolidayTypes = (currentDate: Date) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['fetchHolidayTypesBetweenDates', currentDate],
    queryFn: () => {
      const startDayInRange = startOfMonth(currentDate);
      const lastDayInRange = endOfMonth(currentDate);
      return getHolidayTypesBetweenDatesAPI(startDayInRange, lastDayInRange);
    },
  });

  return { data, isLoading, error };
};

export default useFetchHolidayTypes;
