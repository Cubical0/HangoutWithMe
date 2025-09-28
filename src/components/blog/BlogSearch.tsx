'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

interface BlogSearchProps {
  posts: BlogPost[];
  onResults: (results: BlogPost[]) => void;
}

export default function BlogSearch({ posts, onResults }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      onResults(posts);
      return;
    }

    const searchResults = posts.filter(post => {
      const searchTerm = query.toLowerCase();
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        post.category.toLowerCase().includes(searchTerm) ||
        post.author.name.toLowerCase().includes(searchTerm)
      );
    });

    onResults(searchResults);
  }, [query, posts, onResults]);

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {query && (
        <div className="absolute top-full left-0 right-0 mt-3 text-sm text-white/70 text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg py-2 px-4">
          {posts.length === 0 ? 'No articles found' : `${posts.length} article${posts.length === 1 ? '' : 's'} found`}
        </div>
      )}
    </div>
  );
}