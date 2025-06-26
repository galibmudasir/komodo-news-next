import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log("🔧 Supabase URL:", supabaseUrl);
console.log("🔧 Supabase Key:", supabaseAnonKey ? "[TERSEDIA]" : "[TIDAK ADA]");
