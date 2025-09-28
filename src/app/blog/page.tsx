import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { generateBlogListingMetadata } from '@/lib/seo';
import BlogListing from '@/components/blog/BlogListing';
import BlogHero from '@/components/blog/BlogHero';

export const metadata: Metadata = generateBlogListingMetadata();

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-black">
      <BlogHero />
      <BlogListing posts={posts} />
    </div>
  );
}