"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/server";

export async function login(formData: FormData) {
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    // Silently return to avoid throwing inside a server action; UI can validate required
    return;
  }

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${
        process.env.NEXT_PUBLIC_SITE_URL ?? ""
      }/auth/callback`,
    },
  });

  if (error) {
    // You might render an error state or log; keep behavior simple for now
    console.error("Error sending magic link:", error.message);
  }

  redirect("/login/check-email");
}
