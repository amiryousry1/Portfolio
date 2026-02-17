import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

// Singleton Supabase client instance
const supabaseUrl = `https://${projectId}.supabase.co`;

// Create a single instance to be shared across the app
export const supabase = createClient(supabaseUrl, publicAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
