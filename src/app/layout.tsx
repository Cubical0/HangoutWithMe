import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateWebsiteSchema } from "@/lib/seo";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hangout Finance - Master Cryptocurrency Trading",
  description: "Learn cryptocurrency trading with our comprehensive courses and expert insights. Join thousands of successful traders worldwide.",
  keywords: "cryptocurrency, trading, bitcoin, blockchain, DeFi, crypto education",
  authors: [{ name: "Hangout Finance Team" }],
  creator: "Hangout Finance",
  publisher: "Hangout Finance",
  robots: "index,follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://hangoutfinance.com",
    siteName: "Hangout Finance",
    title: "Hangout Finance - Master Cryptocurrency Trading",
    description: "Learn cryptocurrency trading with our comprehensive courses and expert insights. Join thousands of successful traders worldwide.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Hangout Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hangout Finance - Master Cryptocurrency Trading",
    description: "Learn cryptocurrency trading with our comprehensive courses and expert insights. Join thousands of successful traders worldwide.",
    creator: "@HangoutFinance",
    images: ["/og-default.png"],
  },
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Hangout Finance RSS Feed" }],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
