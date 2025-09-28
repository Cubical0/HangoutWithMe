'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost, formatDate, categories } from '@/lib/blog';
import BlogSearch from './BlogSearch';

interface BlogListingProps {
  posts: BlogPost[];
}

export default function BlogListing({ posts }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<BlogPost[]>(posts);
  const postsPerPage = 6;

  const filteredPosts = selectedCategory === 'all' 
    ? searchResults 
    : searchResults.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchResults = useCallback((results: BlogPost[]) => {
    setSearchResults(results);
    setCurrentPage(1);
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Search */}
        <BlogSearch posts={posts} onResults={handleSearchResults} />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-6 py-3 rounded-xl border font-medium transition-all duration-300 backdrop-blur-sm ${
              selectedCategory === 'all'
                ? 'border-purple-400 bg-purple-500/20 text-purple-300 shadow-lg'
                : 'border-white/30 bg-white/10 text-white/90 hover:border-white/50 hover:bg-white/15'
            }`}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.slug)}
              className={`px-6 py-3 rounded-xl border font-medium transition-all duration-300 backdrop-blur-sm ${
                selectedCategory === category.slug
                  ? 'border-purple-400 bg-purple-500/20 text-purple-300 shadow-lg'
                  : 'border-white/30 bg-white/10 text-white/90 hover:border-white/50 hover:bg-white/15'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-3xl overflow-hidden hover:bg-white/[0.12] transition-all duration-500 hover:scale-[1.02] hover:border-white/30 shadow-xl hover:shadow-2xl relative group"
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden rounded-t-3xl">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Link href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="px-3 py-1.5 bg-white/15 backdrop-blur-sm text-white/90 rounded-full text-xs font-medium border border-white/30 hover:bg-white/25 transition-all duration-300">
                        {post.category}
                      </span>
                    </Link>
                    <span className="text-white/70 text-xs font-medium">{post.readingTime} min read</span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-purple-300 transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-white/80 mb-6 line-clamp-3 text-sm leading-relaxed">{post.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full border border-white/20"
                      />
                      <div className="text-white/70 text-xs">
                        <div className="text-white font-medium">{post.author.name}</div>
                        <div>{formatDate(post.publishedAt)}</div>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <button className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white text-xs px-4 py-2.5 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 font-medium hover:shadow-lg">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/15 hover:border-white/50 transition-all duration-300 font-medium"
            >
              Previous
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                    currentPage === page
                      ? 'bg-purple-500/20 text-purple-300 border-purple-400 shadow-lg'
                      : 'bg-white/10 text-white/90 border-white/30 hover:bg-white/15 hover:border-white/50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/15 hover:border-white/50 transition-all duration-300 font-medium"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}