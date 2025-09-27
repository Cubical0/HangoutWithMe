'use client';

import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Bitcoin's Next Bull Run: What to Expect in 2024",
    excerpt: "Analyzing market trends, institutional adoption, and key indicators that could drive Bitcoin's next major price movement.",
    author: "Alex Thompson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Market Analysis",
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    title: "DeFi Yield Farming: Maximizing Returns While Managing Risk",
    excerpt: "A comprehensive guide to yield farming strategies, risk assessment, and the best protocols to consider in 2024.",
    author: "Sarah Chen",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "DeFi",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Technical Analysis: Reading Crypto Charts Like a Pro",
    excerpt: "Master the art of technical analysis with these essential chart patterns and indicators every trader should know.",
    author: "Mike Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Education",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "The Rise of Layer 2 Solutions: Ethereum's Scaling Revolution",
    excerpt: "Exploring how Layer 2 solutions are transforming Ethereum's ecosystem and creating new trading opportunities.",
    author: "Emma Wilson",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "/api/placeholder/600/300"
  },
  {
    id: 5,
    title: "NFT Market Trends: What's Hot and What's Not",
    excerpt: "Current trends in the NFT space, emerging collections, and strategies for successful NFT trading.",
    author: "David Kim",
    date: "March 5, 2024",
    readTime: "4 min read",
    category: "NFTs",
    image: "/api/placeholder/600/300"
  },
  {
    id: 6,
    title: "Crypto Tax Guide 2024: What Every Trader Needs to Know",
    excerpt: "Navigate the complex world of cryptocurrency taxation with this comprehensive guide for traders and investors.",
    author: "Lisa Johnson",
    date: "March 3, 2024",
    readTime: "10 min read",
    category: "Legal",
    image: "/api/placeholder/600/300"
  }
];

export default function CategoryFilter() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog List - Left Side */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">All Blog Posts</h2>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="text-gray-400 text-sm mb-2">
                    <span>{post.author}</span> • <span>{post.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <Link href={`/blogs/${post.id}`}>
                    <button className="mt-3 text-blue-400 hover:text-blue-300 text-sm font-medium">
                      Read More →
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Cards - Right Side (2 per row) */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.slice(0, 6).map((post) => (
                <article key={post.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <div className="h-48 bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xl">📄</span>
                      </div>
                      <p className="text-sm">Article Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-sm">
                        <div>{post.author}</div>
                        <div>{post.date}</div>
                      </div>
                      <Link href={`/blogs/${post.id}`}>
                        <button className="text-blue-400 hover:text-blue-300 font-semibold">
                          Read More →
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}