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

// Mock blog data - In production, this would come from a CMS or database
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'bitcoin-bull-run-2024-predictions',
    title: "Bitcoin's Next Bull Run: What to Expect in 2024",
    description: "Analyzing market trends, institutional adoption, and key indicators that could drive Bitcoin's next major price movement.",
    content: `
      <h2>Market Analysis Overview</h2>
      <p>The cryptocurrency market is showing strong signs of recovery as we move through 2024. Bitcoin, the world's largest cryptocurrency by market capitalization, has been displaying bullish patterns that suggest a potential major price movement.</p>
      
      <h2>Key Indicators to Watch</h2>
      <p>Several technical and fundamental indicators are pointing towards a potential bull run:</p>
      <ul>
        <li>Institutional adoption continues to grow</li>
        <li>Bitcoin ETF approvals are increasing market accessibility</li>
        <li>Halving event effects are becoming apparent</li>
        <li>Regulatory clarity is improving globally</li>
      </ul>
      
      <h2>Price Predictions and Targets</h2>
      <p>Based on current market analysis and historical patterns, many experts are predicting significant price movements. However, it's important to remember that cryptocurrency markets are highly volatile and unpredictable.</p>
      
      <h3>Short-term Outlook (3-6 months)</h3>
      <p>Technical analysis suggests potential resistance levels and support zones that traders should monitor closely.</p>
      
      <h3>Long-term Perspective (12-24 months)</h3>
      <p>The long-term outlook remains optimistic, with several macroeconomic factors supporting higher valuations.</p>
    `,
    excerpt: "Analyzing market trends, institutional adoption, and key indicators that could drive Bitcoin's next major price movement.",
    author: {
      name: "Alex Thompson",
      avatar: "/images/authors/alex-thompson.jpg",
      bio: "Senior Crypto Analyst with 8+ years of experience in traditional and digital asset markets."
    },
    publishedAt: "2024-03-15T10:00:00Z",
    updatedAt: "2024-03-16T14:30:00Z",
    readingTime: 5,
    category: "Market Analysis",
    tags: ["Bitcoin", "Bull Run", "Market Analysis", "2024", "Predictions"],
    thumbnail: "/images/blog/bitcoin-bull-run-2024.jpg",
    featured: true,
    seo: {
      title: "Bitcoin Bull Run 2024: Expert Predictions & Market Analysis | Hangout Finance",
      description: "Discover expert predictions for Bitcoin's 2024 bull run. Analyze market trends, institutional adoption, and key indicators driving crypto prices.",
      keywords: ["Bitcoin bull run 2024", "Bitcoin price prediction", "crypto market analysis", "Bitcoin investment", "cryptocurrency trends"],
      ogImage: "/og-images/bitcoin-bull-run-2024.png"
    },
    relatedPosts: ['2', '3'],
    faq: [
      {
        question: "When will Bitcoin's next bull run start?",
        answer: "While no one can predict exact timing, current market indicators suggest we may already be in the early stages of a bull run, with key catalysts including institutional adoption and regulatory clarity."
      },
      {
        question: "What price targets are realistic for Bitcoin in 2024?",
        answer: "Price predictions vary widely among analysts, but many experts suggest Bitcoin could reach new all-time highs based on historical patterns and current market conditions."
      }
    ]
  },
  {
    id: '2',
    slug: 'defi-yield-farming-guide-2024',
    title: "DeFi Yield Farming: Maximizing Returns While Managing Risk",
    description: "A comprehensive guide to yield farming strategies, risk assessment, and the best protocols to consider in 2024.",
    content: `
      <h2>Understanding Yield Farming</h2>
      <p>Yield farming, also known as liquidity mining, is a way to generate rewards with cryptocurrency holdings. It involves lending your crypto assets to others through smart contracts.</p>
      
      <h2>Popular Yield Farming Strategies</h2>
      <p>There are several strategies that DeFi users employ to maximize their returns:</p>
      
      <h3>Liquidity Provision</h3>
      <p>Providing liquidity to decentralized exchanges (DEXs) is one of the most common yield farming strategies.</p>
      
      <h3>Lending and Borrowing</h3>
      <p>Platforms like Aave and Compound allow users to lend their assets and earn interest.</p>
      
      <h2>Risk Management</h2>
      <p>While yield farming can be profitable, it comes with significant risks that must be carefully managed.</p>
    `,
    excerpt: "A comprehensive guide to yield farming strategies, risk assessment, and the best protocols to consider in 2024.",
    author: {
      name: "Sarah Chen",
      avatar: "/images/authors/sarah-chen.jpg",
      bio: "DeFi researcher and yield farming expert with extensive experience in protocol analysis."
    },
    publishedAt: "2024-03-12T08:00:00Z",
    readingTime: 8,
    category: "DeFi",
    tags: ["DeFi", "Yield Farming", "Liquidity Mining", "Risk Management", "Protocols"],
    thumbnail: "/images/blog/defi-yield-farming-guide.jpg",
    featured: false,
    seo: {
      title: "DeFi Yield Farming Guide 2024: Strategies & Risk Management | Hangout Finance",
      description: "Master DeFi yield farming with our comprehensive 2024 guide. Learn strategies, risk management, and top protocols for maximizing returns.",
      keywords: ["DeFi yield farming", "liquidity mining", "DeFi strategies", "yield farming risks", "DeFi protocols 2024"],
    },
    relatedPosts: ['1', '4']
  },
  {
    id: '3',
    slug: 'crypto-technical-analysis-guide',
    title: "Technical Analysis: Reading Crypto Charts Like a Pro",
    description: "Master the art of technical analysis with these essential chart patterns and indicators every trader should know.",
    content: `
      <h2>Introduction to Technical Analysis</h2>
      <p>Technical analysis is the study of price movements and trading volume to predict future price directions. It's an essential skill for any serious crypto trader.</p>
      
      <h2>Essential Chart Patterns</h2>
      <p>Understanding chart patterns is crucial for identifying potential trading opportunities.</p>
      
      <h3>Support and Resistance</h3>
      <p>These are fundamental concepts that form the basis of technical analysis.</p>
      
      <h3>Trend Lines</h3>
      <p>Learning to draw and interpret trend lines can significantly improve your trading decisions.</p>
      
      <h2>Key Technical Indicators</h2>
      <p>Various indicators can help confirm your analysis and improve trading accuracy.</p>
    `,
    excerpt: "Master the art of technical analysis with these essential chart patterns and indicators every trader should know.",
    author: {
      name: "Mike Rodriguez",
      avatar: "/images/authors/mike-rodriguez.jpg",
      bio: "Professional trader and technical analysis expert with 10+ years of market experience."
    },
    publishedAt: "2024-03-10T12:00:00Z",
    readingTime: 6,
    category: "Education",
    tags: ["Technical Analysis", "Chart Patterns", "Trading", "Indicators", "Education"],
    thumbnail: "/images/blog/crypto-technical-analysis.jpg",
    featured: false,
    seo: {
      title: "Crypto Technical Analysis Guide: Chart Patterns & Indicators | Hangout Finance",
      description: "Learn crypto technical analysis like a pro. Master chart patterns, indicators, and trading strategies for better investment decisions.",
      keywords: ["crypto technical analysis", "chart patterns", "trading indicators", "crypto trading", "technical analysis guide"],
    },
    relatedPosts: ['1', '2']
  },
  {
    id: '4',
    slug: 'ethereum-layer-2-solutions-guide',
    title: "The Rise of Layer 2 Solutions: Ethereum's Scaling Revolution",
    description: "Exploring how Layer 2 solutions are transforming Ethereum's ecosystem and creating new trading opportunities.",
    content: `
      <h2>Understanding Layer 2 Solutions</h2>
      <p>Layer 2 solutions are protocols built on top of Ethereum to improve scalability and reduce transaction costs while maintaining security.</p>
      
      <h2>Popular Layer 2 Networks</h2>
      <p>Several Layer 2 solutions have gained significant traction in the Ethereum ecosystem.</p>
      
      <h3>Polygon (MATIC)</h3>
      <p>One of the most popular Layer 2 solutions offering fast and cheap transactions.</p>
      
      <h3>Arbitrum</h3>
      <p>An optimistic rollup solution that has attracted many DeFi protocols.</p>
      
      <h2>Investment Opportunities</h2>
      <p>Layer 2 solutions present various investment opportunities for crypto enthusiasts.</p>
    `,
    excerpt: "Exploring how Layer 2 solutions are transforming Ethereum's ecosystem and creating new trading opportunities.",
    author: {
      name: "Emma Wilson",
      avatar: "/images/authors/emma-wilson.jpg",
      bio: "Blockchain developer and Ethereum ecosystem researcher specializing in Layer 2 technologies."
    },
    publishedAt: "2024-03-08T09:00:00Z",
    readingTime: 7,
    category: "Technology",
    tags: ["Ethereum", "Layer 2", "Scaling", "Polygon", "Arbitrum"],
    thumbnail: "/images/blog/ethereum-layer-2-solutions.jpg",
    featured: false,
    seo: {
      title: "Ethereum Layer 2 Solutions Guide: Scaling & Investment Opportunities | Hangout Finance",
      description: "Discover Ethereum Layer 2 solutions transforming blockchain scalability. Learn about Polygon, Arbitrum, and investment opportunities.",
      keywords: ["Ethereum Layer 2", "blockchain scaling", "Polygon MATIC", "Arbitrum", "Layer 2 investment"],
    },
    relatedPosts: ['2', '3']
  }
];

export const categories: BlogCategory[] = [
  {
    id: '1',
    name: 'Market Analysis',
    slug: 'market-analysis',
    description: 'In-depth analysis of cryptocurrency markets, trends, and price movements.',
    count: 1
  },
  {
    id: '2',
    name: 'DeFi',
    slug: 'defi',
    description: 'Decentralized Finance protocols, yield farming, and DeFi strategies.',
    count: 1
  },
  {
    id: '3',
    name: 'Education',
    slug: 'education',
    description: 'Educational content to help you understand cryptocurrency and blockchain technology.',
    count: 1
  },
  {
    id: '4',
    name: 'Technology',
    slug: 'technology',
    description: 'Latest developments in blockchain technology and cryptocurrency innovations.',
    count: 1
  }
];

export const tags: BlogTag[] = [
  { id: '1', name: 'Bitcoin', slug: 'bitcoin', count: 2 },
  { id: '2', name: 'Ethereum', slug: 'ethereum', count: 1 },
  { id: '3', name: 'DeFi', slug: 'defi', count: 2 },
  { id: '4', name: 'Trading', slug: 'trading', count: 2 },
  { id: '5', name: 'Technical Analysis', slug: 'technical-analysis', count: 1 },
  { id: '6', name: 'Market Analysis', slug: 'market-analysis', count: 1 },
  { id: '7', name: 'Layer 2', slug: 'layer-2', count: 1 },
  { id: '8', name: 'Yield Farming', slug: 'yield-farming', count: 1 }
];

// Utility functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  
  return blogPosts.filter(post => 
    post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
}

export function getBlogPostsByTag(tagSlug: string): BlogPost[] {
  return blogPosts.filter(post => 
    post.tags.some(tag => tag.toLowerCase().replace(/\s+/g, '-') === tagSlug)
  );
}

export function getRelatedPosts(postId: string, limit: number = 3): BlogPost[] {
  const currentPost = blogPosts.find(post => post.id === postId);
  if (!currentPost) return [];

  const relatedByCategory = blogPosts.filter(post => 
    post.id !== postId && post.category === currentPost.category
  );

  const relatedByTags = blogPosts.filter(post => 
    post.id !== postId && 
    post.tags.some(tag => currentPost.tags.includes(tag))
  );

  const combined = [...relatedByCategory, ...relatedByTags];
  const unique = combined.filter((post, index, self) => 
    index === self.findIndex(p => p.id === post.id)
  );

  return unique.slice(0, limit);
}

export function getAllPosts(): Promise<BlogPost[]> {
  return Promise.resolve(blogPosts);
}

export function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find(post => post.slug === slug);
  return Promise.resolve(post || null);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getRecentPosts(limit: number = 5): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

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

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}