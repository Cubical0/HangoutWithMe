import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogListing from '@/components/blog/BlogListing';
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import { getBlogPostsByCategory, categories } from '@/lib/blog';
import { generateCategoryMetadata } from '@/lib/seo';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find(cat => cat.slug === slug);
  
  if (!category) {
    return {
      title: 'Category Not Found | Hangout Finance',
      description: 'The requested category could not be found.',
    };
  }

  return generateCategoryMetadata(category);
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find(cat => cat.slug === slug);
  const posts = await getBlogPostsByCategory(slug);

  if (!category) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: category.name, url: `/blog/category/${category.slug}` },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BlogBreadcrumb items={breadcrumbItems} />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {category.description}
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