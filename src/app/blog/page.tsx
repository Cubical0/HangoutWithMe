import { Metadata } from 'next';
import { getAllPosts, getFeaturedPosts } from '@/lib/blog';
import { generateBlogListingMetadata } from '@/lib/seo';
import BlogListing from '@/components/blog/BlogListing';
import BlogHero from '@/components/blog/BlogHero';
import ContactUs from '@/components/sections/home/ContactUs';

export const metadata: Metadata = generateBlogListingMetadata();

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function BlogPage() {
  try {
    // Fetch both all posts and featured posts from database
    const [posts, featuredPosts] = await Promise.all([
      getAllPosts(),
      getFeaturedPosts()
    ]);
    
    // Ensure we have arrays even if API fails
    const safePosts = Array.isArray(posts) ? posts : [];
    const safeFeaturedPosts = Array.isArray(featuredPosts) ? featuredPosts : [];

    return (
      <div className="min-h-screen bg-black">
        <BlogHero featuredPost={safeFeaturedPosts[0]} />
        <BlogListing posts={safePosts} />
        <ContactUs />
      </div>
    );
  } catch (error) {
    // Return empty state if there's an error
    return (
      <div className="min-h-screen bg-black">
        <BlogHero />
        <BlogListing posts={[]} />
        <ContactUs />
      </div>
    );
  }
}