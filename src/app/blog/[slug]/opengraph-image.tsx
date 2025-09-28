import { ImageResponse } from 'next/og';
import { getBlogPostBySlug } from '@/lib/blog';

export const runtime = 'edge';
export const alt = 'Blog Post';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            fontFamily: 'Inter',
          }}
        >
          <div style={{ fontSize: 60, color: 'white', textAlign: 'center' }}>
            Post Not Found
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'Inter',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '1000px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '40px',
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#a1a1aa',
              lineHeight: 1.4,
              marginBottom: '40px',
            }}
          >
            {post.description}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontSize: 24,
              color: '#71717a',
            }}
          >
            <span>{post.author.name}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}