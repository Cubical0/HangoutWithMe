import Link from 'next/link';
import { FileText, Scale, AlertTriangle, CreditCard, UserX, Shield, RefreshCw, Gavel } from 'lucide-react';

const sections = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "1. Acceptance of Terms",
    content: [
      {
        subtitle: "Agreement to Terms",
        text: "By accessing or using HangoutCodex services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services."
      },
      {
        subtitle: "Eligibility",
        text: "You must be at least 18 years old to use our services. By using HangoutCodex, you represent and warrant that you are of legal age to form a binding contract."
      },
      {
        subtitle: "Modifications",
        text: "We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our platform. Your continued use of our services after such modifications constitutes acceptance of the updated terms."
      }
    ]
  },
  {
    icon: <UserX className="h-6 w-6" />,
    title: "2. User Accounts",
    content: [
      {
        subtitle: "Account Creation",
        text: "To access certain features, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate."
      },
      {
        subtitle: "Account Security",
        text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use."
      },
      {
        subtitle: "Account Termination",
        text: "We reserve the right to suspend or terminate your account if you violate these terms, engage in fraudulent activity, or for any other reason at our sole discretion."
      }
    ]
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "3. Services & Payments",
    content: [
      {
        subtitle: "Trading Hub",
        text: "Our Trading Hub provides trading signals and mentorship. The first 3 signals are free, after which paid subscription is required. Trading involves risk, and past performance does not guarantee future results."
      },
      {
        subtitle: "Ecom Launchpad",
        text: "Access to e-commerce courses, dropshipping resources, and development support. Course fees are non-refundable unless otherwise stated in our refund policy."
      },
      {
        subtitle: "Enterprise Services",
        text: "Custom pricing applies for ERP solutions, DevOps services, and other enterprise offerings. Service agreements will be provided separately."
      },
      {
        subtitle: "Fundraiser Platform",
        text: "Connection services between startups and investors. We do not guarantee funding outcomes. Platform fees apply as outlined in your service agreement."
      },
      {
        subtitle: "Payment Terms",
        text: "All fees are in USD unless otherwise stated. Payments are processed through secure third-party processors. You authorize us to charge your payment method for all fees incurred."
      }
    ]
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "4. Trading Disclaimer",
    content: [
      {
        subtitle: "Investment Risk",
        text: "Trading cryptocurrencies and other financial instruments involves substantial risk of loss. You should only trade with money you can afford to lose. Our signals and analysis are for informational purposes only and do not constitute financial advice."
      },
      {
        subtitle: "No Guarantees",
        text: "We do not guarantee profits or protection against losses. All trading decisions are your sole responsibility. Past performance of signals does not guarantee future results."
      },
      {
        subtitle: "Not Financial Advice",
        text: "Our services, including analysis and mentorship, are educational in nature and should not be considered as financial, investment, or legal advice. Consult with qualified professionals before making investment decisions."
      }
    ]
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "5. Intellectual Property",
    content: [
      {
        subtitle: "Platform Content",
        text: "All content on HangoutCodex, including text, graphics, logos, software, and course materials, is our property or our licensors' property and is protected by copyright and intellectual property laws."
      },
      {
        subtitle: "User License",
        text: "We grant you a limited, non-exclusive, non-transferable license to access and use our services for personal or business purposes in accordance with these terms."
      },
      {
        subtitle: "Restrictions",
        text: "You may not copy, modify, distribute, sell, or lease any part of our services or content. You may not reverse engineer or attempt to extract source code from our software."
      },
      {
        subtitle: "User Content",
        text: "You retain ownership of content you submit to our platform. By submitting content, you grant us a worldwide, royalty-free license to use, reproduce, and display such content in connection with our services."
      }
    ]
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "6. Prohibited Activities",
    content: [
      {
        subtitle: "Illegal Use",
        text: "You may not use our services for any illegal purpose or in violation of any local, state, national, or international law."
      },
      {
        subtitle: "Fraudulent Activity",
        text: "Any fraudulent, abusive, or otherwise illegal activity may be grounds for termination of your account and may be referred to appropriate law enforcement authorities."
      },
      {
        subtitle: "System Abuse",
        text: "You may not attempt to interfere with, compromise, or disrupt our services, servers, or networks. This includes introducing viruses, malware, or conducting denial-of-service attacks."
      },
      {
        subtitle: "Unauthorized Access",
        text: "You may not attempt to gain unauthorized access to any portion of our platform, other user accounts, or computer systems connected to our services."
      }
    ]
  },
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "7. Refund Policy",
    content: [
      {
        subtitle: "Trading Signals",
        text: "Subscription fees for trading signals are non-refundable. You may cancel your subscription at any time, and you will retain access until the end of your billing period."
      },
      {
        subtitle: "Courses",
        text: "Course fees are non-refundable under any circumstances after purchase."
      },
      {
        subtitle: "Enterprise Services",
        text: "Refund terms for enterprise services are outlined in individual service agreements."
      },
      {
        subtitle: "Exceptional Circumstances",
        text: "Refunds may be considered on a case-by-case basis for exceptional circumstances. Contact our support team to request a refund review."
      }
    ]
  },
  {
    icon: <Gavel className="h-6 w-6" />,
    title: "8. Limitation of Liability",
    content: [
      {
        subtitle: "Service Availability",
        text: "While we strive for 99.9% uptime, we do not guarantee uninterrupted access to our services. We are not liable for any losses resulting from service interruptions."
      },
      {
        subtitle: "Trading Losses",
        text: "We are not liable for any trading losses, missed opportunities, or financial damages resulting from use of our signals, analysis, or educational content."
      },
      {
        subtitle: "Third-Party Services",
        text: "We are not responsible for the actions, content, or services of third-party providers, including payment processors, exchanges, or linked websites."
      },
      {
        subtitle: "Maximum Liability",
        text: "Our total liability to you for any claims arising from your use of our services shall not exceed the amount you paid to us in the 12 months preceding the claim."
      },
      {
        subtitle: "Indemnification",
        text: "You agree to indemnify and hold harmless HangoutCodex and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these terms."
      }
    ]
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "9. Governing Law",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions."
      },
      {
        subtitle: "Dispute Resolution",
        text: "Any disputes arising from these terms or your use of our services shall first be attempted to be resolved through good faith negotiations. If unsuccessful, disputes may be submitted to binding arbitration."
      },
      {
        subtitle: "Class Action Waiver",
        text: "You agree to resolve disputes with us on an individual basis and waive your right to participate in class action lawsuits or class-wide arbitration."
      }
    ]
  }
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-xl border border-gray-200">
                <Scale className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using HangoutCodex services. By using our platform, you agree to these terms and conditions.
            </p>
            
            <div className="mt-6 text-sm text-gray-400">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12 p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to HangoutCodex</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of HangoutCodex&apos;s platform, including our 
              Trading Hub, Ecom Launchpad, Enterprise Services, and Fundraiser platform. Please read these Terms carefully. 
              By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by 
              these Terms and our Privacy Policy.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.title}
                className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl border border-gray-200"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 flex-1">{section.title}</h2>
                </div>
                
                <div className="space-y-6 ml-16">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Email: <span className="text-blue-600 font-semibold">support@hangoutcodex.com</span></li>
              <li>• Legal: <span className="text-blue-600 font-semibold">legal@hangoutcodex.com</span></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Ready to get started with HangoutCodex?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-xl bg-white backdrop-blur-xl border border-gray-300 text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-50 hover:scale-105 active:scale-95"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}