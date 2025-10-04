'use client';

export default function BlogsHero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Holder - Left Side */}
          <div className="h-96 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <p>Blog Image Placeholder</p>
            </div>
          </div>
          
          {/* Blog Description - Right Side */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Crypto Insights
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Stay ahead of the crypto market with expert analysis, trading strategies, 
              and the latest insights from industry professionals.
            </p>
            <div className="text-gray-400 mb-4">
              <p><strong>Created by:</strong> Hangout Finance Team</p>
              <p><strong>Updated:</strong> Daily</p>
              <p><strong>Categories:</strong> Market Analysis, DeFi, Education, Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}