import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_PROJECT_SUPABASE_URL;
const anonApiKey = import.meta.env.VITE_PROJECT_ANON_API_KEY;

if (!supabaseUrl || !anonApiKey) {
  console.error('Supabase URL or Key is missing!');
}

const supabase = createClient(supabaseUrl, anonApiKey);

export default supabase;
