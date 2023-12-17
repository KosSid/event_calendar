import supabase from './supabase';

export async function getAllEvents() {
  const { data: events, error } = await supabase.from('events').select('*');

  if (error) {
    console.log(error);
    throw new Error(`Events can't be loaded, check getEvents supabase request`);
  }

  return events;
}
