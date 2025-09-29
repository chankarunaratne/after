import { login } from "./actions";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
          Sign in
        </h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          We will email you a magic link to sign in
        </p>

        <form action={login} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-0"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md bg-black px-4 py-2 text-white font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Send Magic Link
          </button>
        </form>
      </div>
    </div>
  );
}
