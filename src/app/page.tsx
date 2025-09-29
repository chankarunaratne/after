import { createSupabaseServerClient } from "@/lib/server";
import { logout } from "./actions";

export default async function Page() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user ?? null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white shadow rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">After</h1>

        {user ? (
          <div className="space-y-6">
            <div>
              <p className="text-gray-700">Welcome back,</p>
              <p className="text-lg font-medium text-gray-900">{user.email}</p>
            </div>
            <form action={logout}>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-black px-4 py-2 text-white font-medium hover:bg-gray-900"
              >
                Log out
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-700">You are not logged in.</p>
            <a
              href="/login"
              className="inline-flex justify-center rounded-md bg-black px-4 py-2 text-white font-medium hover:bg-gray-900"
            >
              Log in
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
