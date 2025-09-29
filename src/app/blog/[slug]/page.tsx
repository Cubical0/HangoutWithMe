import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import BlogPost from '@/components/blog/BlogPost';
import RelatedPosts from '@/components/blog/RelatedPosts';
import SocialShare from '@/components/blog/SocialShare';
import BlogBreadcrumb from '@/components/blog/BlogBreadcrumb';
import ContactUs from '@/components/sections/home/ContactUs';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { generateBlogPostMetadata, generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Hangout Finance',
      description: 'The requested blog post could not be found.',
    };
  }

  return generateBlogPostMetadata(post);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // For now, get related posts by fetching all posts and filtering by category/tags
  // TODO: Create a dedicated API endpoint for related posts
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);
  
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const faqSchema = post.faq ? generateFAQSchema(post.faq) : null;

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="min-h-screen bg-black">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <BlogBreadcrumb items={breadcrumbItems} />
          
          <Suspense fallback={<div className="animate-pulse bg-gray-800 h-96 rounded-lg"></div>}>
            <BlogPost post={post} />
          </Suspense>

          <div className="mt-8">
            <SocialShare 
              url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`}
              title={post.title}
              description={post.description}
            />
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <RelatedPosts posts={relatedPosts} />
            </div>
          )}
          
          <div className="mt-12">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
}