import { useState, useEffect } from 'react';
import { startOfMonth, endOfMonth } from 'date-fns';
import { getEventsInRange } from '../../../services/apiEvents';
import { EventInterface } from '../interfaces';

const useEvents = (currentDate: Date) => {
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startDayInRange = startOfMonth(currentDate);
    const lastDayInRange = endOfMonth(currentDate);

    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const eventsFromApi = await getEventsInRange(
          startDayInRange,
          lastDayInRange,
        );
        setEvents(eventsFromApi);
      } catch (err) {
        const error = err as Error;
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [currentDate]);

  return { events, isLoading, error };
};

export default useEvents;
