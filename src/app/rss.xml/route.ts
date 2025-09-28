import { NextResponse } from 'next/server';
import { blogPosts } from '@/lib/blog';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hangoutfinance.com';
const SITE_NAME = 'Hangout Finance';
const SITE_DESCRIPTION = 'Your trusted source for cryptocurrency insights, trading strategies, and market analysis.';

export async function GET() {
  const sortedPosts = blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const rssItems = sortedPosts
    .map((post) => {
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <description><![CDATA[${post.description}]]></description>
          <link>${SITE_URL}/blog/${post.slug}</link>
          <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          <author>${post.author.name}</author>
          <category>${post.category}</category>
          ${post.tags.map(tag => `<category>${tag}</category>`).join('')}
        </item>
      `;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${SITE_NAME}</title>
        <description>${SITE_DESCRIPTION}</description>
        <link>${SITE_URL}</link>
        <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
        <language>en-US</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <managingEditor>contact@hangoutfinance.com (${SITE_NAME})</managingEditor>
        <webMaster>contact@hangoutfinance.com (${SITE_NAME})</webMaster>
        <ttl>60</ttl>
        <image>
          <url>${SITE_URL}/logo.png</url>
          <title>${SITE_NAME}</title>
          <link>${SITE_URL}</link>
        </image>
        ${rssItems}
      </channel>
    </rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}