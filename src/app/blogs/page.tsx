'use client';

import BlogsHero from '@/components/sections/blogs/BlogsHero';
import CategoryFilter from '@/components/sections/blogs/CategoryFilter';
import NewsletterSignup from '@/components/sections/blogs/NewsletterSignup';

export default function Blogs() {
  return (
    <div className=" min-h-screen bg-black">
      <BlogsHero />
      <CategoryFilter />
      <NewsletterSignup />
    </div>
  );
}