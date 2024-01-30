import { FC, useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { format } from 'date-fns';
import { ButtonVariant, EventInterface, EventTypeType } from '../../interfaces';
import Button from '../../../common/components/Button';
import ErrorFormMessage from './ErrorFormMessage';
import { useCreateEvent } from '../../../hooks/useCreateEvent';
import { useEpdateEvent } from '../../../hooks/useUpdateEvent';
import { useGetDateFromUrl } from '../../../hooks/useGetDateFromUrl';
import { mergeClasses } from '../../../utils/mergeClasses';
import EventTypeSign from '../../../common/components/EventTypeSign';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

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
  const [eventType, setEventType] = useState<EventTypeType>(editFormInitialState?.eventType || 'custom');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventInterface>({
    defaultValues: editFormInitialState ? editFormInitialState : createEventDefaultFormValues,
  });

  const { createEvent, isCreated, isCreating } = useCreateEvent();
  const { updateEvent, isUpdated, isUpdating } = useEpdateEvent();

  useOutsideClick(dropdownRef, () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  });

  useEffect(() => {
    if (isCreated || isUpdated) {
      reset(createEventDefaultFormValues);
      if (modalClose) modalClose();
    }
  }, [isCreated, reset, isUpdated, modalClose]);

  const selectEventType = (type: EventTypeType) => {
    setEventType(type);
    setShowDropdown(false);
  };

  const handleFormSubmit: SubmitHandler<EventInterface> = (formData) => {
    if (editFormInitialState) {
      updateEvent({ ...formData, eventType });
    } else {
      const formDataToSubmit = { ...formData, eventType, eventDate: format(date, 'yyyy-MM-dd') };
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
      className="text-sm sm:text-base p-2 w-64 sm:p-6 sm:w-600px md:w-700px bg-customColorBgEvents border border-gray-200 rounded mx-auto relative text-customColorTtile"
    >
      <div className="mb-4">
        <label className="p-1 block font-semibold mb-2" htmlFor="title">
          Event Name
        </label>
        <input
          placeholder="Add Event Title"
          type="text"
          id="title"
          {...register('title', {
            required: 'Required field',
            maxLength: { value: 50, message: 'Title should be no more than 50 characters.' },
          })}
          className={mergeClasses(
            'border border-gray-200 rounded w-full py-2 px-3 leading-normal focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200',
            {
              'border-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-200': errors.title,
            }
          )}
        />
        {errors && errors?.title && <ErrorFormMessage className="mt-2" message={errors?.title.message} />}
      </div>

      <div className="mb-4 relative">
        <label className="p-1 block text-base font-semibold mb-2" htmlFor="eventType">
          Event Type
        </label>
        <button
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-white text-sm sm:text-base border border-gray-200 rounded w-full py-2 px-4 leading-normal flex justify-start items-center focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200"
        >
          {eventType === 'custom' ? (
            <EventTypeSign variant="legend" eventType="custom" />
          ) : (
            <EventTypeSign variant="legend" eventType="public" />
          )}
          <span className="ml-2">{eventType === 'custom' ? 'Custom Event' : 'Public Event'}</span>
        </button>
        {showDropdown && (
          <div ref={dropdownRef} className="absolute z-10 w-full bg-white shadow mt-1 rounded">
            <div
              className="flex items-center justify-start text-sm py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => selectEventType('custom')}
            >
              <EventTypeSign variant="legend" eventType={'custom'} />
              <span className="ml-2">Custom Event</span>
            </div>
            <div
              className="flex items-center justify-start text-sm py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => selectEventType('public')}
            >
              <EventTypeSign variant="legend" eventType={'public'} />
              <span className="ml-2">Public Event</span>
            </div>
          </div>
        )}
        <input type="hidden" value={eventType} {...register('eventType')} />
      </div>

      <div className="mb-4">
        <label className="p-1 block text-base font-semibold mb-2" htmlFor="content">
          Event Description
        </label>
        <textarea
          placeholder="Add Event Description"
          id="content"
          {...register('content', {
            required: 'Required field',
            minLength: { value: 5, message: 'Description needs at least 5 characters.' },
            maxLength: { value: 200, message: 'Keep the description under 200 characters.' },
          })}
          className={mergeClasses(
            'border border-gray-200 rounded w-full py-2 px-3 leading-normal focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200',
            {
              'border-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-200': errors.content,
            }
          )}
        />
        {errors && errors?.content && <ErrorFormMessage message={errors?.content.message} />}
      </div>
      <div className="flex flex-wrap gap-1 justify-center items-center">
        <Button type="reset" handleClick={handleFormClose} variant={ButtonVariant.Secondary}>
          Cancel
        </Button>
        <Button
          disabled={isUpdating || isCreating}
          type="submit"
          variant={ButtonVariant.AddEvent}
          className="h-10 w-24"
        >
          {editFormInitialState ? 'Edit' : 'Create'}
        </Button>
      </div>
    </form>
  );
};

export default EventForm;
