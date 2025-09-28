import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { getBlogPostBySlug } from '@/lib/blog';

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
      return new Response('Post not found', { status: 404 });
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage: 'linear-gradient(45deg, #000 25%, #111 25%, #111 50%, #000 50%, #000 75%, #111 75%, #111)',
            backgroundSize: '20px 20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#111',
              border: '2px solid #333',
              borderRadius: '16px',
              padding: '60px',
              margin: '40px',
              maxWidth: '1000px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '24px',
                color: '#666',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              {post.category}
            </div>
            
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#fff',
                lineHeight: '1.2',
                marginBottom: '30px',
                maxWidth: '900px',
              }}
            >
              {post.title}
            </div>
            
            <div
              style={{
                fontSize: '28px',
                color: '#999',
                lineHeight: '1.4',
                marginBottom: '40px',
                maxWidth: '800px',
              }}
            >
              {post.description}
            </div>
            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                fontSize: '20px',
                color: '#666',
              }}
            >
              <span>{post.author.name}</span>
              <span>•</span>
              <span>{post.readingTime} min read</span>
              <span>•</span>
              <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>
                Hangout Finance
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}