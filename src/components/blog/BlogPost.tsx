import Image from 'next/image';
import Link from 'next/link';
import { BlogPost as BlogPostType, formatDate } from '@/lib/blog';
import FAQSection from './FAQSection';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 text-white/70 text-sm mb-4">
          <Link href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
            <span className="px-3 py-1.5 bg-white/15 backdrop-blur-sm text-white/90 rounded-full hover:bg-white/25 transition-all duration-300 border border-white/30 font-medium">
              {post.category}
            </span>
          </Link>
          <span>•</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {post.updatedAt && post.updatedAt !== post.publishedAt && (
            <>
              <span>•</span>
              <span>Updated {formatDate(post.updatedAt)}</span>
            </>
          )}
          <span>•</span>
          <span>{post.readingTime} min read</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>
        
        <p className="text-xl text-white/80 mb-8 leading-relaxed">
          {post.description}
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4 p-6 backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-3xl hover:bg-white/[0.12] transition-all duration-300 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          <div className="relative z-10 flex items-center gap-4 w-full">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={64}
              height={64}
              className="rounded-full border border-white/20"
            />
            <div>
              <h3 className="text-white font-semibold text-lg">{post.author.name}</h3>
              <p className="text-white/70">{post.author.bio}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 mb-8 rounded-3xl overflow-hidden border border-white/20 shadow-xl">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div 
        className="prose prose-lg prose-invert max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-8">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 rounded-xl text-sm hover:bg-white/15 transition-all duration-300 border border-white/30 hover:border-white/50 font-medium"
          >
            #{tag}
          </Link>
        ))}
      </div>

      {/* FAQ Section */}
      {post.faq && post.faq.length > 0 && (
        <FAQSection faqs={post.faq} />
      )}
    </article>
  );
}