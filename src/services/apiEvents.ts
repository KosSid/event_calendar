import { PostgrestResponse, PostgrestError } from '@supabase/supabase-js';
import { formatISO } from 'date-fns';
import supabase from './supabase';
import { EventInterface, EventTypeAggregateInterface, EventDataFormInterface } from '../views/interfaces';

export async function getEventsOnDateAPI(date: Date): Promise<EventInterface[]> {
  const formattedDate = formatISO(date, { representation: 'date' });
  const { data: events, error }: PostgrestResponse<EventInterface> = await supabase
    .from('events')
    .select('*')
    .eq('eventDate', formattedDate);

  if (error) {
    throw new Error(`Error fetching, check getEventsOnDateAPI supabase request: ${error.message}`);
  }
  return events;
}

export async function getHolidayTypesBetweenDatesAPI(
  startDate: Date,
  endDate: Date
): Promise<EventTypeAggregateInterface> {
  const formattedStartDate = formatISO(startDate, { representation: 'date' });
  const formattedEndDate = formatISO(endDate, { representation: 'date' });

  const { data: events, error }: PostgrestResponse<{ eventDate: string; eventType: 'public' | 'custom' }> =
    await supabase
      .from('events')
      .select('eventDate, eventType')
      .gte('eventDate', formattedStartDate)
      .lte('eventDate', formattedEndDate);

  if (error) {
    throw new Error(`Error fetching, check getHolidayTypesBetweenDatesAPI supabase request: ${error.message}`);
  }

  const eventsByDate = events.reduce<EventTypeAggregateInterface>((accumulator, event) => {
    const date = formatISO(new Date(event.eventDate), {
      representation: 'date',
    });

    if (!accumulator[date]) {
      accumulator[date] = { custom: false, public: false };
    }

    if (event.eventType === 'public') {
      accumulator[date].public = true;
    } else if (event.eventType === 'custom') {
      accumulator[date].custom = true;
    }

    return accumulator;
  }, {});

  return eventsByDate;
}

export async function createEventAPI(newEvent: EventDataFormInterface): Promise<void> {
  const { error }: { error: PostgrestError | null } = await supabase.from('events').insert([newEvent]);
  if (error) {
    throw new Error(`Error inserting event, check insertEvent supabase request: ${error.message}`);
  }
}

interface PostgrestSingleResponse<T> {
  data: T | null;
  error: PostgrestError | null;
}

export async function updateEventAPI(updateEvent: EventInterface): Promise<EventInterface> {
  const { title, content, eventType, id } = updateEvent;
  const { data, error }: PostgrestSingleResponse<EventInterface> = await supabase
    .from('events')
    .update({ title, content, eventType })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(`Error updating event: ${error.message}`);
  }

  if (!data) {
    throw new Error('Event not found or no data returned');
  }

  return data;
}

export async function deleteEventAPI(eventId: number): Promise<void> {
  const { error }: { error: PostgrestError | null } = await supabase.from('events').delete().match({ id: eventId });
  if (error) {
    throw new Error(`Error deleting event, check deleteEventAPI supabase request: ${error.message}`);
  }
}
