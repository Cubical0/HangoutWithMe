import Image from 'next/image';
import Link from 'next/link';
import { BlogPost, formatDate } from '@/lib/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="border-t border-gray-800 pt-12">
      <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors group"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                  {post.category}
                </span>
                <span className="text-gray-400 text-xs">{post.readingTime} min read</span>
              </div>
              
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
              </Link>
              
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
              
              <div className="flex items-center gap-2 text-gray-500 text-xs">
                <span>{post.author.name}</span>
                <span>•</span>
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}