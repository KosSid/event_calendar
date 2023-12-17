import { formatISO } from 'date-fns';
import supabase from './supabase';

export async function getAllEvents() {
  const { data: events, error } = await supabase.from('events').select('*');
  if (error) {
    throw new Error(
      `Error fetching, check getAllEvents supabase request: ${error.message}`,
    );
  }

  return events;
}

export async function getEventsInRange(startDate: Date, endDate: Date) {
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
