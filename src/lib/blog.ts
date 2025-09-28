export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  category: string;
  tags: string[];
  thumbnail: string;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  relatedPosts?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

// Raw blog data from API (before transformation)
interface RawBlogPost {
  _id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  category: string;
  tags: string[];
  thumbnail: string;
  featured: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  relatedPosts?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

// Helper function to get the base URL
function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Client-side
    return '';
  }
  // Server-side
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}

// Database API functions
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/api/blogs?status=published`;
    const response = await fetch(url, {
      cache: 'no-store',
    });
    
    if (response.ok) {
      const data = await response.json();
      const mappedPosts = data.data.map((blog: RawBlogPost) => ({
        ...blog,
        id: blog._id,
        publishedAt: blog.publishedAt,
        updatedAt: blog.updatedAt,
      }));
      
      return mappedPosts;
    }
  } catch (error) {
    // Silent error handling
  }
  
  return [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/api/blogs/${slug}`;
    const response = await fetch(url, {
      cache: 'no-store',
    });
    
    if (response.ok) {
      const data = await response.json();
      return {
        ...data.data,
        id: data.data._id,
        publishedAt: data.data.publishedAt,
        updatedAt: data.data.updatedAt,
      };
    }
  } catch (error) {
    // Silent error handling
  }
  
  return null;
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  try {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/api/blogs?status=published&featured=true`;
    const response = await fetch(url, {
      cache: 'no-store',
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.data.map((blog: RawBlogPost) => ({
        ...blog,
        id: blog._id,
        publishedAt: blog.publishedAt,
        updatedAt: blog.updatedAt,
      }));
    }
  } catch (error) {
    // Silent error handling
  }
  
  return [];
}

export async function getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  try {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/api/blogs?status=published&limit=${limit}`;
    const response = await fetch(url, {
      cache: 'no-store',
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.data.map((blog: RawBlogPost) => ({
        ...blog,
        id: blog._id,
        publishedAt: blog.publishedAt,
        updatedAt: blog.updatedAt,
      }));
    }
  } catch (error) {
    // Silent error handling
  }
  
  return [];
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  try {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/api/blogs?status=published&category=${categorySlug}`;
    const response = await fetch(url, {
      cache: 'no-store',
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.data.map((blog: RawBlogPost) => ({
        ...blog,
        id: blog._id,
        publishedAt: blog.publishedAt,
        updatedAt: blog.updatedAt,
      }));
    }
  } catch (error) {
    // Silent error handling
  }
  
  return [];
}

export async function getBlogPostsByTag(tagSlug: string): Promise<BlogPost[]> {
  try {
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/api/blogs?status=published&tag=${tagSlug}`;
    const response = await fetch(url, {
      cache: 'no-store',
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.data.map((blog: RawBlogPost) => ({
        ...blog,
        id: blog._id,
        publishedAt: blog.publishedAt,
        updatedAt: blog.updatedAt,
      }));
    }
  } catch (error) {
    // Silent error handling
  }
  
  return [];
}

// Utility functions
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Extract categories from blog posts
export function extractCategoriesFromPosts(posts: BlogPost[]): BlogCategory[] {
  const categoryMap = new Map<string, { name: string; count: number }>();
  
  posts.forEach(post => {
    if (post.category) {
      const slug = post.category.toLowerCase().replace(/\s+/g, '-');
      if (categoryMap.has(slug)) {
        categoryMap.get(slug)!.count++;
      } else {
        categoryMap.set(slug, {
          name: post.category,
          count: 1
        });
      }
    }
  });
  
  return Array.from(categoryMap.entries()).map(([slug, data]) => ({
    id: slug,
    name: data.name,
    slug: slug,
    description: `Posts in ${data.name} category`,
    count: data.count
  }));
}

// Extract tags from blog posts
export function extractTagsFromPosts(posts: BlogPost[]): BlogTag[] {
  const tagMap = new Map<string, { name: string; count: number }>();
  
  posts.forEach(post => {
    if (post.tags && post.tags.length > 0) {
      post.tags.forEach(tag => {
        const slug = tag.toLowerCase().replace(/\s+/g, '-');
        if (tagMap.has(slug)) {
          tagMap.get(slug)!.count++;
        } else {
          tagMap.set(slug, {
            name: tag,
            count: 1
          });
        }
      });
    }
  });
  
  return Array.from(tagMap.entries()).map(([slug, data]) => ({
    id: slug,
    name: data.name,
    slug: slug,
    count: data.count
  }));
}

// For backward compatibility with existing components
export const categories: BlogCategory[] = [];
export const tags: BlogTag[] = [];
export const blogPosts: BlogPost[] = [];

// Alias for backward compatibility
export const getBlogPostBySlug = getPostBySlug;