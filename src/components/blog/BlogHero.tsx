import Image from 'next/image';
import Link from 'next/link';
import { BlogPost, formatDate } from '@/lib/blog';

interface BlogHeroProps {
  featuredPost?: BlogPost;
}

export default function BlogHero({ featuredPost }: BlogHeroProps) {
  if (!featuredPost) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Crypto Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the crypto market with expert analysis, trading strategies, 
            and the latest insights from industry professionals.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-30 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Crypto Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the crypto market with expert analysis, trading strategies, 
            and the latest insights from industry professionals.
          </p>
        </div>

        {/* Featured Post */}
        <div className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-3xl overflow-hidden max-w-4xl mx-auto hover:bg-white/[0.12] transition-all duration-500 hover:scale-[1.01] hover:border-white/30 shadow-xl hover:shadow-2xl relative group">
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.thumbnail}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:to-black/20"></div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm text-purple-300 rounded-full text-sm font-medium border border-purple-400/50 shadow-lg">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 text-white/70 text-sm mb-4">
                  <span className="px-3 py-1.5 bg-white/15 backdrop-blur-sm text-white/90 rounded-full text-xs font-medium border border-white/30">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span>{formatDate(featuredPost.publishedAt)}</span>
                  <span>•</span>
                  <span>{featuredPost.readingTime} min read</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="text-white/80 mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      width={40}
                      height={40}
                      className="rounded-full border border-white/20"
                    />
                    <div>
                      <p className="text-white font-medium">{featuredPost.author.name}</p>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <button className="px-6 py-3 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white rounded-xl font-medium transition-all duration-300 border border-white/30 hover:border-white/50 hover:shadow-lg">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}