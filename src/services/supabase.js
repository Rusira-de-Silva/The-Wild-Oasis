import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lyioubaqnntpinyrgnne.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5aW91YmFxbm50cGlueXJnbm5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MzE4MTUsImV4cCI6MjAyMTUwNzgxNX0.GHnDphHT1jQ49YJ9ZAIrnNGyr_Pm562vIszS6nA0LWY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
