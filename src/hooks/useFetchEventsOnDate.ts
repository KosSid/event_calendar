import { useQuery } from '@tanstack/react-query';
import { getEventsOnDateAPI } from '../services/apiEvents';

const useFetchEventsOnDate = (currentDate: Date) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['fetchEventsOnDate', currentDate],
    queryFn: () => getEventsOnDateAPI(currentDate),
  });

  return { data, isLoading, error };
};

export default useFetchEventsOnDate;
