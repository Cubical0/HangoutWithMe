import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | HangoutCodeX',
  description: 'Terms of Service for HangoutCodeX. Read our terms and conditions governing the use of our platform, services, and community.',
  alternates: { canonical: 'https://hangoutcodex.com/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black pt-28 text-gray-300 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>By using HangoutCodeX, you agree to these terms. Please read them carefully.</p>
          <h2>Use of Service</h2>
          <p>You agree to use our services in compliance with applicable laws and regulations.</p>
          <h2>User Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account and for all activities under your account.</p>
          <h2>Limitation of Liability</h2>
          <p>We are not liable for any damages arising from your use of our services.</p>
          <h2>Contact</h2>
          <p>If you have questions, contact us through our website.</p>
        </div>
      </div>
    </main>
  );
}