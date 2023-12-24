import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateEventAPI } from '../services/apiEvents';

export function useEpdateEvent() {
  const queryClient = useQueryClient();
  const {
    mutate: editEvent,
    isSuccess,
    isPending: isUpdating,
  } = useMutation({
    mutationFn: updateEventAPI,
    onSuccess: () => {
      toast.success('New event successfully created');
      queryClient.invalidateQueries({ queryKey: ['fetchEventsOnDate'] });
      queryClient.invalidateQueries({ queryKey: ['fetchHolidayTypesBetweenDates'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isSuccess, editEvent, isUpdating };
}
