import { useQuery, useQueryClient } from '@tanstack/react-query';
import { startOfMonth, endOfMonth, addMonths, subMonths } from 'date-fns';
import { getHolidayTypesBetweenDatesAPI } from '../services/apiEvents';

const useFetchHolidayTypes = (currentDate: Date) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['fetchHolidayTypesBetweenDates', startOfMonth(currentDate)],
    queryFn: () => {
      const startDayInRange = startOfMonth(currentDate);
      const lastDayInRange = endOfMonth(currentDate);
      return getHolidayTypesBetweenDatesAPI(startDayInRange, lastDayInRange);
    },
  });

  queryClient.prefetchQuery({
    queryKey: ['fetchHolidayTypesBetweenDates', startOfMonth(addMonths(currentDate, 1))],
    queryFn: () => {
      const startDayInRange = startOfMonth(addMonths(currentDate, 1));
      const lastDayInRange = endOfMonth(addMonths(currentDate, 1));
      return getHolidayTypesBetweenDatesAPI(startDayInRange, lastDayInRange);
    },
  });

  queryClient.prefetchQuery({
    queryKey: ['fetchHolidayTypesBetweenDates', startOfMonth(subMonths(currentDate, 1))],
    queryFn: () => {
      const startDayInRange = startOfMonth(subMonths(currentDate, 1));
      const lastDayInRange = endOfMonth(subMonths(currentDate, 1));
      return getHolidayTypesBetweenDatesAPI(startDayInRange, lastDayInRange);
    },
  });

  return { data, isLoading, error };
};

export default useFetchHolidayTypes;
