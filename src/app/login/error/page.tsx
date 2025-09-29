export default function LoginErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Sign-in error
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          We couldn&apos;t complete your sign-in. Please try sending a new magic
          link.
        </p>
        <a
          href="/login"
          className="inline-flex justify-center rounded-md bg-black px-4 py-2 text-white font-medium hover:bg-gray-900"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
}
