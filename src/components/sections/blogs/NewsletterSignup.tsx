'use client';

export default function NewsletterSignup() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900/20 to-gray-800/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent mb-6">Stay Updated</h2>
        <p className="text-xl text-gray-300 mb-8">
          Get the latest crypto insights and trading tips delivered to your inbox weekly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
          />
          <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              Subscribe
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}