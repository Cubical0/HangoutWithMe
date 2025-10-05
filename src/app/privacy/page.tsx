import Link from 'next/link';
import { Shield, Lock, Eye, Database, UserCheck, FileText, AlertCircle, Mail } from 'lucide-react';

const sections = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "We collect information you provide directly to us, including name, email address, phone number, payment information, and any other information you choose to provide when using our services."
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect information about your interaction with our platform, including trading activities, course progress, IP address, browser type, device information, and pages visited."
      },
      {
        subtitle: "Trading Data",
        text: "For our Trading Hub services, we collect trading preferences, signal interactions, and performance metrics to improve our recommendations."
      }
    ]
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "2. How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your information to provide, maintain, and improve our services including trading signals, e-commerce courses, enterprise solutions, and fundraising platform."
      },
      {
        subtitle: "Personalization",
        text: "Your data helps us personalize your experience, provide relevant trading signals, recommend suitable courses, and connect you with appropriate mentors or investors."
      },
      {
        subtitle: "Communication",
        text: "We use your contact information to send you service updates, trading alerts, educational content, and respond to your inquiries."
      },
      {
        subtitle: "Analytics & Improvement",
        text: "We analyze usage patterns to improve our AI algorithms, enhance user experience, and develop new features."
      }
    ]
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "3. Data Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement enterprise-grade security measures including encryption, secure network infrastructure, regular security audits, and access controls to protect your data."
      },
      {
        subtitle: "Payment Security",
        text: "All payment information is processed through secure, PCI-compliant payment processors. We do not store complete credit card information on our servers."
      },
      {
        subtitle: "Zero Downtime Infrastructure",
        text: "Our platform is built on a robust infrastructure with 99.9% uptime guarantee, ensuring your data is always accessible and secure."
      }
    ]
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "4. Information Sharing",
    content: [
      {
        subtitle: "Service Providers",
        text: "We may share your information with trusted third-party service providers who assist us in operating our platform, processing payments, and delivering services."
      },
      {
        subtitle: "Mentors & Investors",
        text: "If you use our mentorship or fundraising services, we may share relevant information with mentors or investors with your explicit consent."
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required by law, court order, or to protect our rights, property, or safety."
      },
      {
        subtitle: "Business Transfers",
        text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
      }
    ]
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "5. Your Rights & Choices",
    content: [
      {
        subtitle: "Access & Update",
        text: "You can access and update your personal information through your account settings at any time."
      },
      {
        subtitle: "Data Deletion",
        text: "You have the right to request deletion of your personal data, subject to legal and contractual obligations."
      },
      {
        subtitle: "Marketing Communications",
        text: "You can opt-out of marketing emails by clicking the unsubscribe link in any email or adjusting your notification preferences."
      },
      {
        subtitle: "Cookie Preferences",
        text: "You can control cookie settings through your browser preferences, though some features may not function properly without cookies."
      }
    ]
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "6. Data Retention",
    content: [
      {
        subtitle: "Retention Period",
        text: "We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements."
      },
      {
        subtitle: "Trading Records",
        text: "Trading signals and performance data may be retained for analytical purposes and regulatory compliance."
      },
      {
        subtitle: "Account Deletion",
        text: "Upon account deletion, we will remove or anonymize your personal information within 90 days, except where retention is required by law."
      }
    ]
  },
  {
    icon: <AlertCircle className="h-6 w-6" />,
    title: "7. Third-Party Services",
    content: [
      {
        subtitle: "External Links",
        text: "Our platform may contain links to third-party websites or services. We are not responsible for their privacy practices."
      },
      {
        subtitle: "AI & Analytics",
        text: "We use tools and analytics services to improve our platform. These services may collect and process data according to their own privacy policies."
      },
      {
        subtitle: "Payment Processors",
        text: "Payment processing is handled by third-party providers who maintain their own privacy policies and security measures."
      }
    ]
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "8. Contact Us",
    content: [
      {
        subtitle: "Privacy Inquiries",
        text: "If you have questions about this Privacy Policy or our data practices, please contact us at privacy@hangoutcodex.com"
      },
      {
        subtitle: "Data Protection Officer",
        text: "For data protection concerns, you can reach our Data Protection Officer at dpo@hangoutcodex.com"
      },
      {
        subtitle: "Mailing Address",
        text: "HangoutCodex, [Your Business Address]"
      }
    ]
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <Shield className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how HangoutCodex collects, uses, and protects your personal information.
            </p>
            
            <div className="mt-6 text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Introduction</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Welcome to HangoutCodex. We are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy applies to all information collected through our platform, including our Trading Hub, 
              Ecom Launchpad, Enterprise Services, and Fundraiser platform. By using our services, you agree to the 
              collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Policy Sections - Side by Side Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-white flex-1 group-hover:text-blue-400 transition-colors duration-300">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-5">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="pl-4 border-l-2 border-blue-500/30">
                      <h3 className="text-base font-semibold text-blue-400 mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Changes to Policy */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy 
              Policy are effective when they are posted on this page.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6 text-lg">
              Have questions about our privacy practices?
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 backdrop-blur-xl border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}