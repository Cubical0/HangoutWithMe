'use client';

import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { formatDate } from '@/lib/blog';

interface CategoryFilterProps {
  posts: BlogPost[];
  featuredPosts?: BlogPost[];
}

export default function CategoryFilter({ posts, featuredPosts = [] }: CategoryFilterProps) {
  const displayPosts = posts.length > 0 ? posts : [];
  const displayFeaturedPosts = featuredPosts.length > 0 ? featuredPosts.slice(0, 6) : displayPosts.slice(0, 6);
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog List - Left Side */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">All Blog Posts</h2>
            <div className="space-y-4">
              {displayPosts.map((post) => (
                <div key={post.id} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="text-gray-400 text-sm mb-2">
                    <span>{post.author.name}</span> • <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readingTime} min read</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
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
              {displayFeaturedPosts.map((post) => (
                <article key={post.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                  <div className="h-48 bg-gray-800 flex items-center justify-center">
                    {post.thumbnail ? (
                      <img 
                        src={post.thumbnail} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-gray-400 text-center">
                        <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xl">📄</span>
                        </div>
                        <p className="text-sm">Article Image</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readingTime} min read</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-sm">
                        <div>{post.author.name}</div>
                        <div>{formatDate(post.publishedAt)}</div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
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