import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/login/error", request.url));
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(new URL("/login/error", request.url));
  }

  return NextResponse.redirect(new URL("/", request.url));
}
