import { MetadataRoute } from 'next';
import { blogPosts, categories, tags } from '@/lib/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hangoutcodex.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/trading`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/fundraiser`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Add blog posts with image extensions
  if (Array.isArray(blogPosts)) {
    try {
      const blogRoutes = blogPosts.map((post) => {
        const entry: MetadataRoute.Sitemap[0] = {
          url: `${SITE_URL}/blog/${post.slug}`,
          lastModified: new Date(post.updatedAt || post.publishedAt),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        };
        // Add image extension if post has thumbnail
        if (post.thumbnail) {
          (entry as Record<string, unknown>).images = [`${SITE_URL}${post.thumbnail}`];
        }
        return entry;
      });
      routes.push(...blogRoutes);
    } catch {
      // Silently skip blog posts if data is not available
    }
  }

  // Add category pages
  if (Array.isArray(categories)) {
    try {
      const categoryRoutes = categories.map((category) => ({
        url: `${SITE_URL}/blog/category/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.5,
      }));
      routes.push(...categoryRoutes);
    } catch {
      // Silently skip if categories not available
    }
  }

  // Add tag pages
  if (Array.isArray(tags)) {
    try {
      const tagRoutes = tags.map((tag) => ({
        url: `${SITE_URL}/blog/tag/${tag.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.4,
      }));
      routes.push(...tagRoutes);
    } catch {
      // Silently skip if tags not available
    }
  }

  return routes;
}