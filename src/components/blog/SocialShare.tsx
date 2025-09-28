'use client';

import { useState } from 'react';
import { Share2, Twitter, Linkedin, MessageCircle, Copy, Check } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Handle error silently
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        // Handle error silently
      }
    }
  };

  return (
    <div className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-3xl p-6 hover:bg-white/[0.12] transition-all duration-300 relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Share2 className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">Share this article</h3>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {/* Twitter */}
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-blue-500/20 backdrop-blur-sm hover:bg-blue-500/30 text-blue-300 rounded-xl transition-all duration-300 border border-blue-400/30 hover:border-blue-400/50"
          >
            <Twitter className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">Twitter</span>
          </a>

          {/* LinkedIn */}
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-blue-600/20 backdrop-blur-sm hover:bg-blue-600/30 text-blue-300 rounded-xl transition-all duration-300 border border-blue-400/30 hover:border-blue-400/50"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>

          {/* WhatsApp */}
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-green-500/20 backdrop-blur-sm hover:bg-green-500/30 text-green-300 rounded-xl transition-all duration-300 border border-green-400/30 hover:border-green-400/50"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">WhatsApp</span>
          </a>

          {/* Copy Link */}
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-4 py-3 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 font-medium"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>

          {/* Native Share (mobile) */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-3 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 font-medium sm:hidden"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          )}
        </div>
      </div>
    </div>
  );
}