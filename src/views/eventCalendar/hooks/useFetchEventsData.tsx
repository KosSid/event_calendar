import { useState, useEffect } from 'react';
import { startOfMonth, endOfMonth } from 'date-fns';

function useFetchEventsData<T>(
  currentDate: Date,
  fetchFunction: (start: Date, end: Date) => Promise<T>,
  initialData: T,
) {
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startDayInRange = startOfMonth(currentDate);
    const lastDayInRange = endOfMonth(currentDate);

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetchFunction(startDayInRange, lastDayInRange);
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentDate, fetchFunction]);

  return { data, isLoading, error };
}

export default useFetchEventsData;
