import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(
  "https://wkmlmebfnqaamyuanqvb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrbWxtZWJmbnFhYW15dWFucXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NjgxNDMsImV4cCI6MjA2NTA0NDE0M30.jmW8cWT4Lukl5Fr0boNq0PG8Ct0CPjByxIdEqTpU2gE"
);

console.log("🔧 Supabase URL:", supabaseUrl);
console.log("🔧 Supabase Key:", supabaseAnonKey ? "[TERSEDIA]" : "[TIDAK ADA]");
