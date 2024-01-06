import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateEventAPI } from '../services/apiEvents';

export function useEpdateEvent() {
  const queryClient = useQueryClient();
  const {
    mutate: updateEvent,
    isSuccess: isUpdated,
    isPending: isUpdating,
  } = useMutation({
    mutationFn: updateEventAPI,
    onSuccess: () => {
      toast.success('Event successfully updated');
      queryClient.invalidateQueries({ queryKey: ['fetchEventsOnDate'] });
      queryClient.invalidateQueries({ queryKey: ['fetchHolidayTypesBetweenDates'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdated, updateEvent, isUpdating };
}
