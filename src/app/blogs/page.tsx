'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogsHero from '@/components/sections/blogs/BlogsHero';
import CategoryFilter from '@/components/sections/blogs/CategoryFilter';
import NewsletterSignup from '@/components/sections/blogs/NewsletterSignup';
import { Building2, BookOpen, Zap, Palette, Scale, TrendingUp, BarChart3 } from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'DeFi': return Building2;
    case 'Education': return BookOpen;
    case 'Technology': return Zap;
    case 'NFTs': return Palette;
    case 'Legal': return Scale;
    case 'Market Analysis': return TrendingUp;
    default: return BarChart3;
  }
};

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

const categories = ["All", "Market Analysis", "DeFi", "Education", "Technology", "NFTs", "Legal"];

export default function Blogs() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <BlogsHero />
      <CategoryFilter />

      {/* Featured Post */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gray-900/20 to-gray-800/20 rounded-lg p-8 mb-16 border border-gray-800"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-gray-400 font-semibold">Featured Post</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-gray-400 text-sm mb-6">
                  <span>{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link href={`/blogs/${blogPosts[0].id}`}>
                  <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                      Read More
                    </span>
                  </button>
                </Link>
              </div>
              <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                {(() => {
                  const IconComponent = getCategoryIcon(blogPosts[0].category);
                  return <IconComponent className="w-20 h-20 text-gray-300" />;
                })()}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  {(() => {
                    const IconComponent = getCategoryIcon(post.category);
                    return <IconComponent className="w-16 h-16 text-gray-300" />;
                  })()}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium">
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
                      <button className="text-gray-400 hover:text-white font-semibold">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}