import { formatISO } from 'date-fns';
import supabase from './supabase';
import { EventInterface, EventTypeAggregateInterface } from '../views/interfaces';

export async function getAllEventsAPI(): Promise<EventInterface[]> {
  const { data: events, error } = await supabase.from('events').select('*');
  if (error) {
    throw new Error(`Error fetching, check getAllEventsAPI supabase request: ${error.message}`);
  }

  return events;
}

export async function getEventsOnDateAPI(date: Date): Promise<EventInterface[]> {
  const formattedDate = formatISO(date, { representation: 'date' });
  const { data: events, error } = await supabase.from('events').select('*').eq('eventDate', formattedDate);

  if (error) {
    throw new Error(`Error fetching, check getEventsOnDateAPI supabase request: ${error.message}`);
  }
  return events;
}

export async function getEventsInRangeAPI(startDate: Date, endDate: Date): Promise<EventInterface[]> {
  const formattedStartDate = formatISO(startDate, { representation: 'date' });
  const formattedEndDate = formatISO(endDate, { representation: 'date' });

  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .gte('eventDate', formattedStartDate)
    .lte('eventDate', formattedEndDate);

  if (error) {
    throw new Error(`Error fetching, check getEventsInRangeAPI supabase request: ${error.message}`);
  }

  return events;
}

export async function getHolidayTypesBetweenDatesAPI(
  startDate: Date,
  endDate: Date
): Promise<EventTypeAggregateInterface> {
  const formattedStartDate = formatISO(startDate, { representation: 'date' });
  const formattedEndDate = formatISO(endDate, { representation: 'date' });

  const { data: events, error } = await supabase
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

export interface EventDataInterface {
  title: string;
  content: string;
  eventDate: string;
  eventType: 'public' | 'custom';
}

export async function createEventAPI(newEvent: EventDataInterface) {
  const response = await supabase.from('events').insert([newEvent]);
  const { data, error } = response;
  if (error) {
    throw new Error(`Error inserting event, check insertEvent supabase request: ${error.message}`);
  }
  return data;
}

export async function deleteEventAPI(eventId: number) {
  const response = await supabase.from('events').delete().match({ id: eventId });
  const { data, error } = response;
  if (error) {
    throw new Error(`Error deleting event, check deleteEventAPI supabase request: ${error.message}`);
  }
  return data;
}
