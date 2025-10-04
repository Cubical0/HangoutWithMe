import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import {
  TrendingUp,
  Users,
  Target,
  Sparkles,
  Heart,
  Zap,
  Shield,
  Rocket,
  Award,
  Code,
  Brain,
} from 'lucide-react';

const teamMembers = [
  {
    name: "Trading Excellence",
    role: "AI-Powered Trading Signals",
    description: "Advanced algorithms providing real-time market analysis and trading signals to help you make informed decisions.",
    icon: <TrendingUp className="h-6 w-6 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    className: "md:col-span-2",
  },
  {
    name: "Expert Mentorship",
    role: "Learn from the Best",
    description: "Connect with experienced traders and industry experts who guide you through your journey.",
    icon: <Users className="h-6 w-6 text-purple-400" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    className: "md:col-span-1",
  },
  {
    name: "E-commerce Ecosystem",
    role: "Launch & Scale",
    description: "Complete platform for dropshipping, affiliate marketing, and SaaS development with comprehensive courses.",
    icon: <Rocket className="h-6 w-6 text-green-400" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    className: "md:col-span-1",
  },
  {
    name: "Enterprise Solutions",
    role: "Cutting-Edge Technology",
    description: "ERP, DevOps, Healthcare, and Manufacturing solutions powered by AI and microservices architecture.",
    icon: <Code className="h-6 w-6 text-orange-400" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    className: "md:col-span-2",
  },
  {
    name: "AI Innovation",
    role: "Voice AI & NLP",
    description: "Leveraging generative AI, natural language processing, and voice AI to revolutionize user experiences.",
    icon: <Brain className="h-6 w-6 text-pink-400" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    className: "md:col-span-2",
  },
  {
    name: "Fundraising Platform",
    role: "Connect with Investors",
    description: "Bridge the gap between innovative startups and investors, providing mentorship and funding opportunities.",
    icon: <Target className="h-6 w-6 text-yellow-400" />,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
    className: "md:col-span-1",
  },
];

const values = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries with AI-powered solutions and cutting-edge technology.",
    icon: <Sparkles className="h-8 w-8 text-blue-400" />,
  },
  {
    title: "Community Driven",
    description: "Building a supportive ecosystem where traders, entrepreneurs, and developers thrive together.",
    icon: <Heart className="h-8 w-8 text-red-400" />,
  },
  {
    title: "Excellence & Quality",
    description: "Delivering premium services with zero downtime infrastructure and expert guidance.",
    icon: <Award className="h-8 w-8 text-yellow-400" />,
  },
  {
    title: "Security & Trust",
    description: "Enterprise-grade security with secured network infrastructure protecting your data.",
    icon: <Shield className="h-8 w-8 text-green-400" />,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">

            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About HangoutCodex
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Empowering traders, entrepreneurs, and businesses with{' '}
              <span className="text-blue-600 font-semibold">AI-powered solutions</span>,{' '}
              <span className="text-purple-600 font-semibold">expert mentorship</span>, and{' '}
              <span className="text-pink-600 font-semibold">cutting-edge technology</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At HangoutCodex, we&apos;re building a comprehensive ecosystem that combines{' '}
              <span className="text-gray-900 font-semibold">trading excellence</span>,{' '}
              <span className="text-gray-900 font-semibold">e-commerce innovation</span>,{' '}
              <span className="text-gray-900 font-semibold">enterprise solutions</span>, and{' '}
              <span className="text-gray-900 font-semibold">fundraising opportunities</span>{' '}
              all in one platform. Our goal is to democratize access to professional tools,
              expert knowledge, and investment opportunities.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: 'Active Users', value: '10K+', icon: <Users className="h-7 w-7" />, gradient: 'from-blue-500 to-cyan-500' },
              { label: 'Trading Signals', value: '1M+', icon: <TrendingUp className="h-7 w-7" />, gradient: 'from-purple-500 to-pink-500' },
              { label: 'Success Rate', value: '95%', icon: <Target className="h-7 w-7" />, gradient: 'from-green-500 to-emerald-500' },
              { label: 'Uptime', value: '99.9%', icon: <Zap className="h-7 w-7" />, gradient: 'from-orange-500 to-yellow-500' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon with gradient background */}
                <div className={`relative flex items-center justify-center mb-4 p-4 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-md`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                
                {/* Value */}
                <div className="relative text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="relative text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer - Bento Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive suite of services designed to help you succeed in trading,
              e-commerce, and business development.
            </p>
          </div>

          <BentoGrid className="max-w-7xl mx-auto">
            {teamMembers.map((member, i) => (
              <BentoGridItem
                key={i}
                title={member.name}
                description={member.description}
                header={
                  <div className="relative h-64 w-full overflow-hidden group">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                        {member.icon}
                      </div>
                    </div>
                  </div>
                }
                icon={
                  <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                    {member.role}
                  </div>
                }
                className={member.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at HangoutCodex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl border border-gray-200"
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-purple-50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The visionaries and innovators driving HangoutCodex forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Sparsh Gupta - Founder */}
            <div className="group relative flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                  <img 
                    src="/assets/sparsh2.png" 
                    alt="Sparsh Gupta"
                    className="w-full h-full   rounded-full object-cover overflow-hidden"
                  />
                </div>
              </div>
              
              <h3 className="relative text-xl font-bold text-gray-900 mb-2">Sparsh Gupta</h3>
              <p className="relative text-sm font-semibold text-blue-600 mb-3">Founder & Visionary</p>
              <p className="relative text-sm text-gray-600 text-center leading-relaxed">
                The king who built an empire of 100,000+ innovators on Discord.
              </p>
            </div>

            {/* Yuvraj Singh Rathore - Co-Founder */}
            <div className="group relative flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                  <img 
                    src="/assets/yuvraj.jpeg" 
                    alt="Yuvraj Singh Rathore"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="relative text-xl font-bold text-gray-900 mb-2">Yuvraj Singh Rathore</h3>
              <p className="relative text-sm font-semibold text-purple-600 mb-3">Co-Founder</p>
              <p className="relative text-sm text-gray-600 text-center leading-relaxed">
                The knight building revolutionary products that change the game.
              </p>
            </div>

            {/* Vikram - CTO */}
            <div className="group relative flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-blue-500 p-1">
                  <img 
                    src="/assets/vikram.png" 
                    alt="Vikram"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="relative text-xl font-bold text-gray-900 mb-2">Vikram</h3>
              <p className="relative text-sm font-semibold text-green-600 mb-3">Chief Technology Officer</p>
              <p className="relative text-sm text-gray-600 text-center leading-relaxed">
                10+ years architecting scalable AI-driven platforms across industries.
              </p>
            </div>

            {/* Puneet Tiwari - Tech Lead */}
            <div className="group relative flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 p-1">
                  <img 
                    src="/assets/puneet.png" 
                    alt="Puneet Tiwari"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="relative text-xl font-bold text-gray-900 mb-2">Puneet Tiwari</h3>
              <p className="relative text-sm font-semibold text-orange-600 mb-3">Tech Lead</p>
              <p className="relative text-sm text-gray-600 text-center leading-relaxed">
                Blockchain wizard serving 70,000+ users with Web3 innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Investors */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Backed By Visionaries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic investors who believe in our mission to revolutionize the ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {/* Yogesh Nogia */}
            <div className="group relative flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full sm:w-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 p-1">
                  <img 
                    src="/assets/yogesh.png" 
                    alt="Yogesh Nogia"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="relative text-xl font-bold text-gray-900 mb-2">Yogesh Nogia</h3>
              <p className="relative text-sm font-semibold text-blue-600 mb-3">Strategic Investor</p>
              <p className="relative text-sm text-gray-600 text-center leading-relaxed">
                Empowering innovation with strategic vision and capital.
              </p>
            </div>

            {/* Mukul Choudary */}
            <div className="group relative flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full sm:w-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1">
                  <img 
                    src="/assets/mukul.jpeg" 
                    alt="Mukul Choudary"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="relative text-xl font-bold text-gray-900 mb-2">Mukul Choudary</h3>
              <p className="relative text-sm font-semibold text-purple-600 mb-3">Strategic Investor</p>
              <p className="relative text-sm text-gray-600 text-center leading-relaxed">
                Fueling growth with expertise and investment acumen.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}