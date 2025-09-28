import { Metadata } from 'next';
import { Suspense } from 'react';
import BlogListing from '@/components/blog/BlogListing';
import BlogHero from '@/components/blog/BlogHero';
import { generateBlogListingMetadata } from '@/lib/seo';
import { blogPosts, getFeaturedPosts, getRecentPosts } from '@/lib/blog';

export const metadata: Metadata = generateBlogListingMetadata();

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(12);

  return (
    <div className="min-h-screen bg-black">
      <BlogHero featuredPost={featuredPosts[0]} />
      
      <Suspense fallback={<div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div></div>}>
        <BlogListing posts={recentPosts} />
      </Suspense>
    </div>
  );
}