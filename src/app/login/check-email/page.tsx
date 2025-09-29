export default function CheckEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Check your email
        </h1>
        <p className="text-sm text-gray-600">
          We sent a magic link to your email. Click the link to sign in.
        </p>
      </div>
    </div>
  );
}
