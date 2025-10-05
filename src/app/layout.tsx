import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateWebsiteSchema } from "@/lib/seo";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Clarity from "@/components/analytics/Clarity";
import Mixpanel from "@/components/analytics/Mixpanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hangoutcodex.com"),
  title: {
    default: "HangoutCodex - Build, Trade, Innovate | Trading, E-commerce & Development",
    template: "%s | HangoutCodex",
  },
  description: "Join 100K+ hustlers, traders & founders at HangoutCodex. Master crypto trading, e-commerce, dropshipping, SaaS development, and connect with 100+ investors. Your all-in-one platform for building, trading, and innovating.",
  keywords: [
    "crypto trading",
    "trading signals",
    "e-commerce courses",
    "dropshipping",
    "SaaS development",
    "startup fundraising",
    "ERP solutions",
    "DevOps services",
    "AI development",
    "blockchain education",
    "affiliate marketing",
    "digital business",
    "investor network",
    "trading community",
  ],
  authors: [{ name: "HangoutCodex Team" }],
  creator: "HangoutCodex",
  publisher: "HangoutCodex",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://hangoutcodex.com",
    siteName: "HangoutCodex",
    title: "HangoutCodex - Build, Trade, Innovate | Trading, E-commerce & Development",
    description: "Join 100K+ hustlers, traders & founders at HangoutCodex. Master crypto trading, e-commerce, dropshipping, SaaS development, and connect with 100+ investors.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "HangoutCodex - Where Hustlers, Traders & Founders Collide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HangoutCodex - Build, Trade, Innovate",
    description: "Join 100K+ hustlers, traders & founders. Master crypto trading, e-commerce, and connect with 100+ investors.",
    creator: "@HangoutCodex",
    site: "@HangoutCodex",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "HangoutCodex RSS Feed" }],
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
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://clarity.ms" />
        <link rel="dns-prefetch" href="https://api.mixpanel.com" />
        <link rel="dns-prefetch" href="https://discord.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Analytics */}
        <GoogleAnalytics />
        <Clarity />
        <Mixpanel />
        
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
