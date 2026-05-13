import { Metadata } from 'next';
import { BlogPost, BlogCategory, BlogTag } from './blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hangoutcodex.com';
const SITE_NAME = 'HangoutCodex';
const SITE_DESCRIPTION = 'Join 100K+ hustlers, traders & founders at HangoutCodex. Master crypto trading, e-commerce, dropshipping, SaaS development, and connect with 100+ investors. Your all-in-one platform for building, trading, and innovating.';

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
    alternates: {
      canonical: canonicalUrl,
    },
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
      creator: '@HangoutCodex',
      site: '@HangoutCodex',
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
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
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
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og-default.png`,
    sameAs: [
      'https://discord.com/invite/hangoutcodex',
      'https://twitter.com/HangoutCodex',
      'https://www.linkedin.com/company/hangoutcodex',
    ],
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: `${SITE_URL}/contact`,
      email: 'support@hangoutcodex.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og-default.png`,
    telephone: '',
    email: 'support@hangoutcodex.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://discord.com/invite/hangoutcodex',
      'https://twitter.com/HangoutCodex',
      'https://www.linkedin.com/company/hangoutcodex',
    ],
    foundingDate: '2024',
    areaServed: 'Worldwide',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: `${SITE_URL}/contact`,
        email: 'support@hangoutcodex.com',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: `${SITE_URL}/contact`,
        email: 'support@hangoutcodex.com',
        availableLanguage: ['English'],
      },
    ],
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    name: 'Frequently Asked Questions - HangoutCodex',
    description: 'Common questions about our trading, e-commerce, and development platform.',
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

export function generateArticleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}${post.thumbnail}`,
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.bio,
      image: post.author.avatar ? `${SITE_URL}${post.author.avatar}` : undefined,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.content ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0,
    timeRequired: `PT${post.readingTime}M`,
  };
}

export function generateServiceSchema(services: { name: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/services#services`,
    name: 'HangoutCodex Services',
    description: 'Comprehensive enterprise solutions with advanced AI technologies, trading tools, and development services.',
    url: `${SITE_URL}/services`,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
    })),
  };
}

export function generateCourseSchema(courses: { name: string; description: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/courses#courses`,
    name: 'HangoutCodex Courses',
    description: 'Expert-led e-commerce and trading courses for entrepreneurs and traders.',
    url: `${SITE_URL}/courses`,
    itemListElement: courses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.name,
        description: course.description,
        url: course.url || `${SITE_URL}/courses`,
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
        offers: {
          '@type': 'Offer',
          category: 'Paid',
          priceCurrency: 'USD',
        },
        educationalCredentialAwarded: 'Certificate of Completion',
      },
    })),
  };
}

export function generateWebPageSchema(pageName: string, pageDescription: string, canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    name: pageName,
    description: pageDescription,
    url: canonicalUrl,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    breadcrumb: {
      '@id': `${SITE_URL}/#breadcrumb`,
    },
    inLanguage: 'en-US',
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}