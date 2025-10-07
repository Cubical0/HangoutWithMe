import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogListing from '@/components/blog/BlogListing';
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import { getBlogPostsByTag, tags } from '@/lib/blog';
import { generateTagMetadata } from '@/lib/seo';

interface TagPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export async function generateStaticParams() {
  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = tags.find(t => t.slug === slug);
  
  if (!tag) {
    return {
      title: 'Tag Not Found | Hangout Finance',
      description: 'The requested tag could not be found.',
    };
  }

  return generateTagMetadata(tag);
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = tags.find(t => t.slug === slug);
  const posts = await getBlogPostsByTag(slug);

  if (!tag) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: `#${tag.name}`, url: `/blog/tag/${tag.slug}` },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BlogBreadcrumb items={breadcrumbItems} />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            #{tag.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore all articles tagged with {tag.name.toLowerCase()}
          </p>
          <p className="text-gray-400 mt-2">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'}
          </p>
        </div>

        <BlogListing posts={posts} />
      </div>
    </div>
  );
}