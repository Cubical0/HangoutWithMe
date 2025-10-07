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
    designation: string;
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
    designation: string;
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

// Type for Mongoose lean documents (from database)
interface LeanBlogDocument {
  _id: { toString(): string };
  slug: string;
  title: string;
  description: string;
  content: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
    designation: string;
  };
  publishedAt: Date;
  updatedAt?: Date;
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
  status: string;
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

// Helper function to get the base URL (for client-side or external API calls)
function getBaseUrl() {
  // For server-side rendering in production (Vercel, etc.)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  // Use NEXT_PUBLIC_BASE_URL if set
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  
  // Fallback to localhost for development
  return 'http://localhost:3000';
}

// Helper function to check if we're on the server
function isServer() {
  return typeof window === 'undefined';
}

// Database API functions
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    // If on server and MongoDB is available, fetch directly from database
    if (isServer() && process.env.MONGODB_URI) {
      try {
        const connectDB = (await import('@/lib/mongodb')).default;
        const Blog = (await import('@/models/Blog')).default;
        
        await connectDB();
        
        const blogs = await Blog.find({ status: 'published' })
          .sort({ publishedAt: -1 })
          .lean() as unknown as LeanBlogDocument[];
        
        const mappedPosts = blogs.map((blog) => ({
          ...blog,
          id: blog._id.toString(),
          _id: undefined,
          publishedAt: blog.publishedAt.toISOString(),
          updatedAt: blog.updatedAt?.toISOString(),
        }));
        
        return mappedPosts;
      } catch (dbError) {
        // Fallback to API
      }
    }
    
    // Fallback to API call (for client-side or if direct DB access fails)
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
    } else if (response.status === 503) {
      // Database connection failed, return mock data for development
      return getMockBlogPosts();
    }
  } catch (error) {
    return getMockBlogPosts();
  }
  
  return [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // If on server and MongoDB is available, fetch directly from database
    if (isServer() && process.env.MONGODB_URI) {
      try {
        const connectDB = (await import('@/lib/mongodb')).default;
        const Blog = (await import('@/models/Blog')).default;
        
        await connectDB();
        
        const blog = await Blog.findOne({ slug, status: 'published' }).lean() as unknown as LeanBlogDocument | null;
        
        if (blog) {
          return {
            ...blog,
            id: blog._id.toString(),
            _id: undefined,
            publishedAt: blog.publishedAt.toISOString(),
            updatedAt: blog.updatedAt?.toISOString(),
          } as BlogPost;
        }
      } catch (dbError) {
        // Silently fall back to API
      }
    }
    
    // Fallback to API call
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
    // Error fetching blog post
  }
  
  return null;
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  try {
    // If on server and MongoDB is available, fetch directly from database
    if (isServer() && process.env.MONGODB_URI) {
      try {
        const connectDB = (await import('@/lib/mongodb')).default;
        const Blog = (await import('@/models/Blog')).default;
        
        await connectDB();
        
        const blogs = await Blog.find({ status: 'published', featured: true })
          .sort({ publishedAt: -1 })
          .lean() as unknown as LeanBlogDocument[];
        
        const mappedPosts = blogs.map((blog) => ({
          ...blog,
          id: blog._id.toString(),
          _id: undefined,
          publishedAt: blog.publishedAt.toISOString(),
          updatedAt: blog.updatedAt?.toISOString(),
        }));
        
        return mappedPosts;
      } catch (dbError) {
        // Fallback to API
      }
    }
    
    // Fallback to API call
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
    } else if (response.status === 503) {
      // Database connection failed, return mock featured posts
      return getMockBlogPosts().filter(post => post.featured);
    }
  } catch (error) {
    // Return mock featured posts on error
    return getMockBlogPosts().filter(post => post.featured);
  }
  return [];
}

export async function getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  try {
    // If on server and MongoDB is available, fetch directly from database
    if (isServer() && process.env.MONGODB_URI) {
      try {
        const connectDB = (await import('@/lib/mongodb')).default;
        const Blog = (await import('@/models/Blog')).default;
        
        await connectDB();
        
        const blogs = await Blog.find({ status: 'published' })
          .sort({ publishedAt: -1 })
          .limit(limit)
          .lean() as unknown as LeanBlogDocument[];
        
        const mappedPosts = blogs.map((blog) => ({
          ...blog,
          id: blog._id.toString(),
          _id: undefined,
          publishedAt: blog.publishedAt.toISOString(),
          updatedAt: blog.updatedAt?.toISOString(),
        }));
        
        return mappedPosts;
      } catch (dbError) {
        // Fallback to API
      }
    }
    
    // Fallback to API call
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
    } else if (response.status === 503) {
      // Database connection failed, return mock recent posts
      return getMockBlogPosts().slice(0, limit);
    }
  } catch (error) {
    // Return mock recent posts on error
    return getMockBlogPosts().slice(0, limit);
  }
  
  return [];
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  try {
    // If on server and MongoDB is available, fetch directly from database
    if (isServer() && process.env.MONGODB_URI) {
      try {
        const connectDB = (await import('@/lib/mongodb')).default;
        const Blog = (await import('@/models/Blog')).default;
        
        await connectDB();
        
        const blogs = await Blog.find({ 
          status: 'published',
          category: { $regex: categorySlug, $options: 'i' }
        })
          .sort({ publishedAt: -1 })
          .lean() as unknown as LeanBlogDocument[];
        
        const mappedPosts = blogs.map((blog) => ({
          ...blog,
          id: blog._id.toString(),
          _id: undefined,
          publishedAt: blog.publishedAt.toISOString(),
          updatedAt: blog.updatedAt?.toISOString(),
        }));
        
        return mappedPosts;
      } catch (dbError) {
        // Fallback to API
      }
    }
    
    // Fallback to API call
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
    // Error fetching posts by category
  }
  
  return [];
}

export async function getBlogPostsByTag(tagSlug: string): Promise<BlogPost[]> {
  try {
    // If on server and MongoDB is available, fetch directly from database
    if (isServer() && process.env.MONGODB_URI) {
      try {
        const connectDB = (await import('@/lib/mongodb')).default;
        const Blog = (await import('@/models/Blog')).default;
        
        await connectDB();
        
        const blogs = await Blog.find({ 
          status: 'published',
          tags: { $in: [new RegExp(tagSlug, 'i')] }
        })
          .sort({ publishedAt: -1 })
          .lean() as unknown as LeanBlogDocument[];
        
        const mappedPosts = blogs.map((blog) => ({
          ...blog,
          id: blog._id.toString(),
          _id: undefined,
          publishedAt: blog.publishedAt.toISOString(),
          updatedAt: blog.updatedAt?.toISOString(),
        }));
        
        return mappedPosts;
      } catch (dbError) {
        // Fallback to API
      }
    }
    
    // Fallback to API call
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
    // Error fetching posts by tag
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

// Mock data for development when database is unavailable
function getMockBlogPosts(): BlogPost[] {
  return [
    {
      id: 'mock-1',
      slug: 'getting-started-with-crypto-trading',
      title: 'Getting Started with Crypto Trading: A Beginner\'s Guide',
      description: 'Learn the fundamentals of cryptocurrency trading and start your journey in the digital asset market.',
      content: `
        <h2>Introduction to Crypto Trading</h2>
        <p>Cryptocurrency trading has become one of the most exciting and potentially profitable investment opportunities in recent years. This comprehensive guide will walk you through everything you need to know to get started.</p>
        
        <h3>What is Cryptocurrency Trading?</h3>
        <p>Cryptocurrency trading involves buying and selling digital assets like Bitcoin, Ethereum, and other altcoins to profit from price movements. Unlike traditional stock markets, crypto markets operate 24/7, providing constant opportunities for traders.</p>
        
        <h3>Getting Started</h3>
        <ol>
          <li><strong>Choose a reliable exchange</strong> - Research and select a reputable cryptocurrency exchange</li>
          <li><strong>Secure your account</strong> - Enable two-factor authentication and use strong passwords</li>
          <li><strong>Start small</strong> - Begin with a small amount you can afford to lose</li>
          <li><strong>Learn the basics</strong> - Understand market orders, limit orders, and basic chart reading</li>
        </ol>
        
        <h3>Risk Management</h3>
        <p>Never invest more than you can afford to lose. Cryptocurrency markets are highly volatile, and prices can change rapidly. Always do your own research and consider consulting with financial advisors.</p>
      `,
      excerpt: 'Learn the fundamentals of cryptocurrency trading and start your journey in the digital asset market with this comprehensive beginner\'s guide.',
      author: {
        name: 'Alex Johnson',
        avatar: '/images/authors/alex.jpg',
        bio: 'Crypto trading expert with 5+ years of experience in digital asset markets.',
        designation: 'Senior Crypto Trading Analyst'
      },
      publishedAt: new Date('2024-01-15').toISOString(),
      updatedAt: new Date('2024-01-15').toISOString(),
      readingTime: 8,
      category: 'Trading',
      tags: ['cryptocurrency', 'trading', 'beginner', 'bitcoin'],
      thumbnail: '/images/blog/crypto-trading-guide.jpg',
      featured: true,
      seo: {
        title: 'Getting Started with Crypto Trading: A Beginner\'s Guide | Hangout Finance',
        description: 'Learn cryptocurrency trading fundamentals, risk management, and get started in digital asset markets with our comprehensive beginner\'s guide.',
        keywords: ['crypto trading', 'cryptocurrency', 'bitcoin', 'trading guide', 'beginner'],
        ogImage: '/images/blog/crypto-trading-guide-og.jpg'
      },
      relatedPosts: ['mock-2', 'mock-3'],
      faq: [
        {
          question: 'How much money do I need to start crypto trading?',
          answer: 'You can start with as little as $10-50, but we recommend starting with an amount you can afford to lose completely, typically $100-500 for beginners.'
        },
        {
          question: 'Is crypto trading risky?',
          answer: 'Yes, crypto trading is highly risky due to market volatility. Prices can fluctuate dramatically, and you could lose your entire investment.'
        }
      ]
    },
    {
      id: 'mock-2',
      slug: 'understanding-defi-protocols',
      title: 'Understanding DeFi Protocols: The Future of Finance',
      description: 'Explore decentralized finance protocols and how they\'re revolutionizing traditional financial services.',
      content: `
        <h2>What is DeFi?</h2>
        <p>Decentralized Finance (DeFi) represents a paradigm shift in how we think about financial services. Built on blockchain technology, DeFi protocols aim to recreate traditional financial instruments in a decentralized architecture.</p>
        
        <h3>Key DeFi Protocols</h3>
        <ul>
          <li><strong>Uniswap</strong> - Decentralized exchange for token swapping</li>
          <li><strong>Aave</strong> - Lending and borrowing protocol</li>
          <li><strong>Compound</strong> - Algorithmic money market protocol</li>
          <li><strong>MakerDAO</strong> - Decentralized stablecoin system</li>
        </ul>
        
        <h3>Benefits of DeFi</h3>
        <p>DeFi offers several advantages over traditional finance including 24/7 accessibility, global reach, transparency, and reduced intermediaries.</p>
      `,
      excerpt: 'Explore decentralized finance protocols and discover how they\'re revolutionizing traditional financial services through blockchain technology.',
      author: {
        name: 'Sarah Chen',
        avatar: '/images/authors/sarah.jpg',
        bio: 'DeFi researcher and blockchain technology enthusiast with expertise in protocol analysis.',
        designation: 'DeFi Research Lead'
      },
      publishedAt: new Date('2024-01-10').toISOString(),
      updatedAt: new Date('2024-01-10').toISOString(),
      readingTime: 12,
      category: 'DeFi',
      tags: ['defi', 'blockchain', 'protocols', 'finance'],
      thumbnail: '/images/blog/defi-protocols.jpg',
      featured: false,
      seo: {
        title: 'Understanding DeFi Protocols: The Future of Finance | Hangout Finance',
        description: 'Learn about decentralized finance protocols, their benefits, and how they\'re transforming traditional financial services.',
        keywords: ['defi', 'decentralized finance', 'blockchain', 'protocols', 'cryptocurrency'],
        ogImage: '/images/blog/defi-protocols-og.jpg'
      }
    },
    {
      id: 'mock-3',
      slug: 'nft-marketplace-trends-2024',
      title: 'NFT Marketplace Trends to Watch in 2024',
      description: 'Discover the latest trends shaping the NFT marketplace landscape and what to expect in 2024.',
      content: `
        <h2>The Evolution of NFT Marketplaces</h2>
        <p>The NFT space has evolved significantly since its explosive growth in 2021. As we move through 2024, several key trends are shaping the future of digital collectibles and NFT marketplaces.</p>
        
        <h3>Key Trends</h3>
        <ol>
          <li><strong>Utility-focused NFTs</strong> - Moving beyond art to functional use cases</li>
          <li><strong>Cross-chain compatibility</strong> - NFTs that work across multiple blockchains</li>
          <li><strong>Gaming integration</strong> - NFTs as in-game assets and rewards</li>
          <li><strong>Fractional ownership</strong> - Making expensive NFTs accessible to more people</li>
        </ol>
        
        <h3>Market Outlook</h3>
        <p>The NFT market is maturing, with focus shifting from speculation to real utility and long-term value creation.</p>
      `,
      excerpt: 'Discover the latest trends shaping the NFT marketplace landscape and what to expect in the evolving digital collectibles space.',
      author: {
        name: 'Mike Rodriguez',
        avatar: '/images/authors/mike.jpg',
        bio: 'NFT market analyst and digital art collector with deep insights into marketplace trends.',
        designation: 'NFT Market Analyst'
      },
      publishedAt: new Date('2024-01-05').toISOString(),
      updatedAt: new Date('2024-01-05').toISOString(),
      readingTime: 6,
      category: 'NFTs',
      tags: ['nft', 'marketplace', 'trends', '2024'],
      thumbnail: '/images/blog/nft-trends.jpg',
      featured: false,
      seo: {
        title: 'NFT Marketplace Trends to Watch in 2024 | Hangout Finance',
        description: 'Stay ahead of the curve with the latest NFT marketplace trends and predictions for 2024.',
        keywords: ['nft', 'marketplace', 'trends', '2024', 'digital collectibles'],
        ogImage: '/images/blog/nft-trends-og.jpg'
      }
    }
  ];
}