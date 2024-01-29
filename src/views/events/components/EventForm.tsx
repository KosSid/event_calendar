import { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { format } from 'date-fns';
import { ButtonVariant, EventInterface } from '../../interfaces';
import Button from '../../../common/components/Button';
import ErrorFormMessage from './ErrorFormMessage';
import { useCreateEvent } from '../../../hooks/useCreateEvent';
import { useEpdateEvent } from '../../../hooks/useUpdateEvent';
import { useGetDateFromUrl } from '../../../hooks/useGetDateFromUrl';
import { mergeClasses } from '../../../utils/mergeClasses';

interface EventFormProps {
  editFormInitialState?: EventInterface;
  modalClose?: () => void;
}

const createEventDefaultFormValues: EventInterface = {
  title: '',
  eventType: 'custom',
  content: '',
  eventDate: '',
};

const EventForm: FC<EventFormProps> = ({ editFormInitialState, modalClose }) => {
  const date = useGetDateFromUrl() || new Date();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventInterface>({
    defaultValues: editFormInitialState ? editFormInitialState : createEventDefaultFormValues,
  });

  console.log(errors);

  const { createEvent, isCreated, isCreating } = useCreateEvent();
  const { updateEvent, isUpdated, isUpdating } = useEpdateEvent();

  useEffect(() => {
    if (isCreated || isUpdated) {
      reset(createEventDefaultFormValues);
      if (modalClose) modalClose();
    }
  }, [isCreated, reset, isUpdated, modalClose]);

  const handleFormSubmit: SubmitHandler<EventInterface> = (formData) => {
    if (editFormInitialState) {
      updateEvent(formData);
    } else {
      const formDataToSubmit = { ...formData, eventDate: format(date, 'yyyy-MM-dd') };
      createEvent(formDataToSubmit);
    }
  };

  const handleFormClose: () => void = () => {
    reset(createEventDefaultFormValues);
    if (modalClose) modalClose();
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-64 sm:w-400px md:w-600px bg-blue-100 rounded mx-auto relative"
    >
      <div className="mb-6 relative">
        <label className="block text-gray-500 font-semibold mb-2 text-base" htmlFor="title">
          Event Name
        </label>
        <input
          type="text"
          id="title"
          {...register('title', {
            required: 'This is required field',
            maxLength: { value: 50, message: 'Title should be no more than 50 characters.' },
          })}
          className={mergeClasses(
            'border border-gray-200 rounded w-full py-2 px-3 text-gray-500 leading-normal focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200',
            {
              'border-red-400 focus:border-red-400': errors.title,
            }
          )}
        />
        {errors && errors?.title && <ErrorFormMessage message={errors?.title.message} />}
      </div>
      <div className="mb-6">
        <label className="block text-gray-500 text-base font-semibold mb-2" htmlFor="eventType">
          Event Type
        </label>
        <select
          id="eventType"
          {...register('eventType')}
          className="border border-gray-200 rounded w-full py-2 px-3 text-gray-500 leading-normal focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200"
        >
          <option value="custom">Custom</option>
          <option value="public">Public</option>
        </select>
      </div>
      <div className="mb-6 relative">
        <label className="block text-gray-500 text-base font-semibold mb-2" htmlFor="content">
          Event Description
        </label>
        <textarea
          id="content"
          {...register('content', {
            required: 'This is required field',
            minLength: { value: 10, message: 'Sescription must have at least 10 characters' },
            maxLength: { value: 200, message: 'Description should be no more than 200 characters.' },
          })}
          className={mergeClasses(
            'border border-gray-200 rounded w-full py-2 px-3 text-gray-500 leading-normal focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200',
            {
              'border-red-400 focus:border-red-400': errors.title,
            }
          )}
        />
        {errors && errors?.content && <ErrorFormMessage className="-bottom-3" message={errors?.content.message} />}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <Button type="reset" handleClick={handleFormClose} variant={ButtonVariant.Secondary}>
          Cancel
        </Button>
        <Button disabled={isUpdating || isCreating} type="submit" variant={ButtonVariant.Primary}>
          {editFormInitialState ? 'Edit' : 'Create'}
        </Button>
      </div>
    </form>
  );
};

export default EventForm;
