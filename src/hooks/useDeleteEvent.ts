import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteEventAPI } from '../services/apiEvents';

export function useDeleteEvent() {
  const queryClient = useQueryClient();
  const { mutate: deleteEvent, isPending: isDeleting } = useMutation({
    mutationFn: deleteEventAPI,
    onSuccess: () => {
      toast.success('Event successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['fetchEventsOnDate'] });
      queryClient.invalidateQueries({ queryKey: ['fetchHolidayTypesBetweenDates'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteEvent, isDeleting };
}
