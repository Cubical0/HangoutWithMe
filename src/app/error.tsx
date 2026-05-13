'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
          500
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
          An unexpected error occurred. Our team has been notified. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all hover:-translate-y-0.5 inline-block"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}