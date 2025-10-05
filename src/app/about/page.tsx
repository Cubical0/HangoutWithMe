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
  Github,
  Linkedin,
} from 'lucide-react';

const teamMembers = [
  {
    name: "Trading Excellence",
    role: "Trading Signals",
    description: "Advanced algorithms providing real-time market analysis and trading signals to help you make informed decisions.",
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    className: "md:col-span-2",
  },
  {
    name: "Expert Mentorship",
    role: "Learn from the Best",
    description: "Connect with experienced traders and industry experts who guide you through your journey.",
    icon: <Users className="h-6 w-6 text-white" />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    className: "md:col-span-1",
  },
  {
    name: "E-commerce Ecosystem",
    role: "Launch & Scale",
    description: "Complete platform for dropshipping, affiliate marketing, and SaaS development with comprehensive courses.",
    icon: <Rocket className="h-6 w-6 text-white" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    className: "md:col-span-1",
  },
  {
    name: "Enterprise Solutions",
    role: "Cutting-Edge Technology",
    description: "ERP, DevOps, Healthcare, and Manufacturing solutions powered by AI and microservices architecture.",
    icon: <Code className="h-6 w-6 text-white" />,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    className: "md:col-span-2",
  },
  {
    name: "AI Innovation",
    role: "Voice AI & NLP",
    description: "Leveraging generative AI, natural language processing, and voice AI to revolutionize user experiences.",
    icon: <Brain className="h-6 w-6 text-white" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    className: "md:col-span-2",
  },
  {
    name: "Fundraising Platform",
    role: "Connect with Investors",
    description: "Bridge the gap between innovative startups and investors, providing mentorship and funding opportunities.",
    icon: <Target className="h-6 w-6 text-white" />,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
    className: "md:col-span-1",
  },
];

const values = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries with solutions and cutting-edge technology.",
    icon: <Sparkles className="h-8 w-8 text-white" />,
  },
  {
    title: "Community Driven",
    description: "Building a supportive ecosystem where traders, entrepreneurs, and developers thrive together.",
    icon: <Heart className="h-8 w-8 text-white" />,
  },
  {
    title: "Excellence & Quality",
    description: "Delivering premium services with zero downtime infrastructure and expert guidance.",
    icon: <Award className="h-8 w-8 text-white" />,
  },
  {
    title: "Security & Trust",
    description: "Enterprise-grade security with secured network infrastructure protecting your data.",
    icon: <Shield className="h-8 w-8 text-white" />,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
        <div className="flex flex-col items-center justify-center max-w-7xl w-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold  bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              About HangoutCodex
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed">
              Empowering traders, entrepreneurs, and businesses with{' '}
              <span className="text-white font-semibold">solutions</span>,{' '}
              <span className="text-gray-200 font-semibold">expert mentorship</span>, and{' '}
              <span className="text-gray-300 font-semibold">cutting-edge technology</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col items-center py-20 px-4">
        <div className="flex flex-col items-center max-w-7xl w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              At HangoutCodex, we&apos;re building a comprehensive ecosystem that combines{' '}
              <span className="text-white font-semibold">trading excellence</span>,{' '}
              <span className="text-white font-semibold">e-commerce innovation</span>,{' '}
              <span className="text-white font-semibold">enterprise solutions</span>, and{' '}
              <span className="text-white font-semibold">fundraising opportunities</span>{' '}
              all in one platform. Our goal is to democratize access to professional tools,
              expert knowledge, and investment opportunities.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-20 w-full">
            {[
              { label: 'Active Users', value: '100K+', icon: <Users className="h-7 w-7" /> },
              { label: 'Clients Secured', value: '100+', icon: <TrendingUp className="h-7 w-7" /> },
              { label: 'Success Rate', value: '87%', icon: <Target className="h-7 w-7" /> },
              { label: 'Uptime', value: '99.9%', icon: <Zap className="h-7 w-7" /> },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex-1 min-w-[200px]"
              >
                {/* Icon with glass background */}
                <div className="flex items-center justify-center mb-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-md">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                
                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer - Bento Grid */}
      {/* <section className="flex flex-col items-center py-20 px-4">
        <div className="flex flex-col items-center max-w-7xl w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
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
                  <div className="flex h-64 w-full overflow-hidden group">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    </div>
                  </div>
                }
                icon={
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    {member.role}
                  </div>
                }
                className={member.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section> */}

      {/* Our Values */}
      <section className="flex flex-col items-center py-20 px-4">
        <div className="flex flex-col items-center max-w-7xl w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              The principles that guide everything we do at HangoutCodex.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 w-full">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col p-8 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex-1 min-w-[250px]"
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="flex flex-col items-center py-20 px-4">
        <div className="flex flex-col items-center max-w-7xl w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              The visionaries and innovators driving HangoutCodex forward.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 w-full">
            {/* Sparsh Gupta - Founder */}
            <div className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex-1 min-w-[250px] max-w-[300px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/sparsh3.jpeg" 
                    alt="Sparsh Gupta"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Sparsh</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Founder & Visionary</p>
              <p className="text-sm text-gray-400 text-center   leading-relaxed mb-4">
                Founder turning ideas into thriving digital ecosystems.</p>
              <a 
                  href="https://www.linkedin.com/in/sparsh-gupta-72306b22b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
            </div>

            {/* Yuvraj Singh Rathore - Co-Founder */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex-1 min-w-[250px] max-w-[300px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/yuvraj.jpeg" 
                    alt="Yuvraj Singh Rathore"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Yuvraj Singh Rathore</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Co-Founder</p>
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-4">
                The knight building revolutionary products that change the game.
              </p>
              <a 
                  href="www.linkedin.com/in/yuvraj-singh-rathore-1998381ab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
            </div>

            {/* Vikram - CTO */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex-1 min-w-[250px] max-w-[300px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/vikram.png" 
                    alt="Vikram"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Vikram</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Chief Technology Officer</p>
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-4">
                10+ years architecting scalable AI-driven platforms across industries.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/glowhard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </div>

            {/* Puneet Tiwari - Tech Lead */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex-1 min-w-[250px] max-w-[300px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/puneet.png" 
                    alt="Puneet Tiwari"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Puneet Tiwari</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Tech Lead</p>
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-4">
                Blockchain wizard serving 70,000+ users with Web3 innovation.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/heyitspuneet/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
                <a 
                  href="https://github.com/puneettiwari61" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Github className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Investors */}
      <section className="flex flex-col items-center py-20 px-4">
        <div className="flex flex-col items-center max-w-7xl w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Backed By Visionaries
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl">
              Strategic investors who believe in our mission to revolutionize the ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
            {/* Yogesh Nogia */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex-1 min-w-[280px] max-w-[320px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/yogesh.png" 
                    alt="Yogesh Nogia"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Yogesh Nogia</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Strategic Investo, 3X founder</p>
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-4">
                Empowering innovation with strategic vision and capital.

              </p>
            
              <a 
                  href="https://www.linkedin.com/in/yogesh-nogia-8816561a5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
            </div>

            {/* Mukul Choudary */}
            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex-1 min-w-[280px] max-w-[320px]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1">
                  <img 
                    src="/assets/mukul.jpeg" 
                    alt="Mukul Choudary"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Mukul Choudary</h3>
              <p className="text-sm font-semibold text-gray-300 mb-3">Strategic Investor</p>
              <p className="text-sm text-gray-400 text-center leading-relaxed mb-4">
                Fueling growth with expertise and investment acumen.
              </p>
               <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/viralmukul/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}