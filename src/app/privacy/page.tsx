import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | HangoutCodeX',
  description: 'Privacy Policy for HangoutCodeX. Learn how we collect, use, and protect your personal information when you use our platform and services.',
  alternates: { canonical: 'https://hangoutcodex.com/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black pt-28 text-gray-300 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Your privacy is important to us. This policy outlines how we collect, use, and protect your information.</p>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly, such as when you create an account, contact us, or use our services.</p>
          <h2>How We Use Your Information</h2>
          <p>We use your information to provide, maintain, and improve our services, and to communicate with you.</p>
          <h2>Contact</h2>
          <p>If you have questions, contact us through our website.</p>
        </div>
      </div>
    </main>
  );
}