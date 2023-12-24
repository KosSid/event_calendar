import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useCreateEvent } from '../../../hooks/useCreateEvent';
import Button from '../../../common/components/Button';

export interface EventDataInterface {
  title: string;
  content: string;
  eventDate: string;
  eventType: 'public' | 'custom';
}

export interface CurrentDateProps {
  currentDate: Date;
}

const initialFormState: EventDataInterface = {
  title: '',
  content: '',
  eventDate: '',
  eventType: 'custom',
};

const EventForm: React.FC<CurrentDateProps> = ({ currentDate }) => {
  const [formData, setFormData] = useState<EventDataInterface>(initialFormState);
  const { createEvent, isSuccess, isPending } = useCreateEvent();

  useEffect(() => {
    if (isSuccess) {
      setFormData(initialFormState);
      console.log('Event created successfully');
    }
  }, [isSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFormData = { ...formData, eventDate: format(currentDate, 'yyyy-MM-dd') };
    createEvent(newFormData);
    console.log(isSuccess);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl m-4 p-10 bg-red-100 rounded mx-auto">
      <div className="mb-4">
        <label className="block text-gray-500 font-bold mb-2 text-base" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-200 rounded w-full py-2 px-3 text-gray-500 leading-normal focus:outline-none focus:border-red-200 focus:ring-1 focus:ring-red-200"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-500 text-base font-bold mb-2" htmlFor="eventType">
          Event Type
        </label>
        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className="border border-gray-200 rounded w-full py-2 px-3 text-gray-500 leading-normal focus:outline-none focus:border-red-200 focus:ring-1 focus:ring-red-200"
        >
          <option value="public">Public</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-gray-500 text-base font-bold mb-2" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="border border-gray-200 rounded w-full py-2 px-3 text-gray-500 leading-normal focus:outline-none focus:border-red-200 focus:ring-1 focus:ring-red-200"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <Button disabled={isPending} type="submit" className="bg-red-300 rounded mx-auto px-4 text-red-50">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default EventForm;
