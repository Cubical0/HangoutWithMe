import { Metadata } from 'next';
import HomeHeroStatic from '@/components/sections/home/HomeHeroStatic';
import HomePageClient from '@/components/pages/HomePageClient';
import { generateFAQSchema } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';

// FAQ data for structured data (must match FAQ component exactly)
const faqData = [
  {
    question: "What is Hangout Codex?",
    answer: "Hangout Codex is a global ecosystem where traders, founders, and innovators connect to learn, build, and grow. It combines community learning, trading education, startup fundraising, and enterprise-grade IT solutions under one platform."
  },
  {
    question: "Who can join Hangout Codex?",
    answer: "Hangout Codex is open to traders, entrepreneurs, startups, and established businesses. Whether you want to master trading, scale your business, raise capital, or explore AI and IT solutions, you'll find opportunities tailored to your goals."
  },
  {
    question: "What services does Hangout Codex provide?",
    answer: "Hangout Codex bridges education, technology, and business growth. Members access trading signals, e-commerce and SaaS programs, startup funding support, and advisory guidance. Our IT division builds enterprise solutions like ERP systems, DevOps pipelines, AI automation, and cybersecurity frameworks."
  },
  {
    question: "Do you offer trading and educational programs?",
    answer: "Yes. Members can access structured trading courses, daily signals, webinars, and mentorship sessions led by experienced professionals. Our goal is to make trading and business education simple, practical, and results-driven."
  },
  {
    question: "Can startups and Web3 projects collaborate with you?",
    answer: "Absolutely. Hangout Codex partners with Web3, AI, and fintech startups for cross-promotions, sponsorships, advisory onboarding, and fundraising. We help projects reach audiences, build trust, and scale through genuine community engagement."
  },
  {
    question: "What IT and AI solutions do you offer?",
    answer: "We deliver a wide range of enterprise and AI-driven solutions, including ERP integration, DevOps, healthcare software, microservices, and business intelligence. Our AI team also develops generative AI, chatbots, voice assistants, and predictive analytics tools."
  },
  {
    question: "Can I raise funds for my startup through Hangout Codex?",
    answer: "Yes. We connect founders with investors and advisors. Our team reviews your pitch deck, arranges investor meetings, and supports negotiations. We charge only a small success-based commission once funding is secured."
  },
  {
    question: "Do you onboard advisors and experts?",
    answer: "Yes. Experienced professionals can join our advisory network to mentor startups and contribute to projects within the Hangout Codex ecosystem. There's no cost to join, and it's a great way to share expertise with emerging founders."
  },
  {
    question: "How can I become a premium member?",
    answer: "Premium members gain access to advanced trading signals, investor introductions, private groups, and personalized support. You can upgrade directly through our website or via Discord."
  }
];

// Homepage metadata - layout.tsx provides the default title
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://hangoutcodex.com',
  },
};

export default function Home() {
  const faqSchema = generateFAQSchema(faqData);

  return (
    <>
      {/* JSON-LD FAQ Schema - server-rendered and visible to crawlers */}
      <JsonLd schema={faqSchema} id="schema-faq" />
      
      {/* Server-rendered static hero content - VISIBLE to Google crawlers in HTML source */}
      <HomeHeroStatic />
      
      <main id="main-content" className="min-h-screen bg-black">
        {/* Client-side hydrated animated components (lazy-loaded for performance) */}
        <HomePageClient />
      </main>
    </>
  );
}
