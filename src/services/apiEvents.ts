import { formatISO } from 'date-fns';
import supabase from './supabase';
import {
  EventInterface,
  EventTypeAggregateInterface,
} from '../views/eventCalendar/interfaces';

export async function getAllEvents(): Promise<EventInterface[]> {
  const { data: events, error } = await supabase.from('events').select('*');
  if (error) {
    throw new Error(
      `Error fetching, check getAllEvents supabase request: ${error.message}`,
    );
  }

  return events;
}

export async function getEventsInRange(
  startDate: Date,
  endDate: Date,
): Promise<EventInterface[]> {
  // Format dates to ISO strings
  const formattedStartDate = formatISO(startDate, { representation: 'date' });
  const formattedEndDate = formatISO(endDate, { representation: 'date' });

  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .gte('eventDate', formattedStartDate)
    .lte('eventDate', formattedEndDate);

  if (error) {
    throw new Error(
      `Error fetching, check getEventsInRange supabase request: ${error.message}`,
    );
  }

  return events;
}

export async function getHolidayTypesBetweenDates(
  startDate: Date,
  endDate: Date,
): Promise<EventTypeAggregateInterface> {
  const formattedStartDate = formatISO(startDate, { representation: 'date' });
  const formattedEndDate = formatISO(endDate, { representation: 'date' });

  const { data: events, error } = await supabase
    .from('events')
    .select('eventDate, eventType')
    .gte('eventDate', formattedStartDate)
    .lte('eventDate', formattedEndDate);

  if (error) {
    throw new Error(
      `Error fetching, check getHolidayTypesBetweenDates supabase request: ${error.message}`,
    );
  }

  const eventsByDate = events.reduce<EventTypeAggregateInterface>(
    (accumulator, event) => {
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
    },
    {},
  );

  return eventsByDate;
}
