import { Metadata } from 'next';
import { BlogPost, BlogCategory, BlogTag } from './blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hangoutfinance.com';
const SITE_NAME = 'Hangout Finance';
const SITE_DESCRIPTION = 'Your trusted source for cryptocurrency insights, trading strategies, and market analysis.';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage,
    canonical,
    noindex = false,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = []
  } = config;

  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical || SITE_URL;
  const imageUrl = ogImage ? `${SITE_URL}${ogImage}` : `${SITE_URL}/og-default.png`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : undefined,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    canonical: canonicalUrl,
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: type === 'article' ? 'article' : 'website',
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@HangoutFinance',
      site: '@HangoutFinance',
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };

  return metadata;
}

export function generateBlogPostMetadata(post: BlogPost): Metadata {
  return generateMetadata({
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    ogImage: post.seo.ogImage,
    canonical: `${SITE_URL}/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    author: post.author.name,
    section: post.category,
    tags: post.tags,
  });
}

export function generateBlogListingMetadata(): Metadata {
  return generateMetadata({
    title: 'Crypto Blog - Latest Insights & Market Analysis',
    description: 'Stay updated with the latest cryptocurrency news, market analysis, trading strategies, and blockchain technology insights from industry experts.',
    keywords: ['crypto blog', 'cryptocurrency news', 'bitcoin analysis', 'trading strategies', 'blockchain insights', 'DeFi updates'],
    canonical: `${SITE_URL}/blog`,
  });
}

export function generateCategoryMetadata(category: BlogCategory): Metadata {
  return generateMetadata({
    title: `${category.name} - Crypto Blog`,
    description: category.description,
    keywords: [category.name.toLowerCase(), 'cryptocurrency', 'blog', 'analysis'],
    canonical: `${SITE_URL}/blog/category/${category.slug}`,
  });
}

export function generateTagMetadata(tag: BlogTag): Metadata {
  return generateMetadata({
    title: `${tag.name} - Crypto Blog Posts`,
    description: `Explore all blog posts tagged with ${tag.name}. Get insights and analysis on ${tag.name.toLowerCase()} in cryptocurrency and blockchain.`,
    keywords: [tag.name.toLowerCase(), 'cryptocurrency', 'blog', 'posts'],
    canonical: `${SITE_URL}/blog/tag/${tag.slug}`,
  });
}

// JSON-LD Schema generators
export function generateArticleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.thumbnail}`,
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.bio,
      image: `${SITE_URL}${post.author.avatar}`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}