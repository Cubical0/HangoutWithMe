'use client';

const categories = ["All", "Market Analysis", "DeFi", "Education", "Technology", "NFTs", "Legal"];

export default function CategoryFilter() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}