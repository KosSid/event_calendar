import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createEventAPI } from '../services/apiEvents';

export function useCreateEvent() {
  const queryClient = useQueryClient();
  const { mutate: createEvent, isSuccess } = useMutation({
    mutationFn: createEventAPI,
    onSuccess: () => {
      toast.success('New event successfully created');
      queryClient.invalidateQueries({ queryKey: ['fetchEventsOnDate'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isSuccess, createEvent };
}
