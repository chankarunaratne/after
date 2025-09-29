"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/server";

export async function logout() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/login");
}
