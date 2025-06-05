import { createClient } from "@supabase/supabase-js";
import { parse } from "cookie";

export function getSupabaseServerClient(request: Request) {
  const cookies = parse(request.headers.get("cookie") || "");

  const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${cookies["sb-access-token"] || ""}`,
        },
      },
    },
  );

  return supabase;
}
