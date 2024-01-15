import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getEventsOnDateAPI } from '../services/apiEvents';
import { addDays, subDays } from 'date-fns';

const useFetchEventsOnDate = (currentDate: Date) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['fetchEventsOnDate', currentDate],
    queryFn: () => getEventsOnDateAPI(currentDate),
  });

  queryClient.prefetchQuery({
    queryKey: ['fetchEventsOnDate', addDays(currentDate, 1)],
    queryFn: () => getEventsOnDateAPI(addDays(currentDate, 1)),
  });

  queryClient.prefetchQuery({
    queryKey: ['fetchEventsOnDate', subDays(currentDate, 1)],
    queryFn: () => getEventsOnDateAPI(subDays(currentDate, 1)),
  });

  return { data, isLoading, error };
};

export default useFetchEventsOnDate;
