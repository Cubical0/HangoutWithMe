'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Send,
  MessageCircle,
  Instagram,
  Twitter,
  ChevronDown
} from 'lucide-react';
import { IconBrandDiscord } from '@tabler/icons-react';

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          source: 'contact_page',
          category: 'general',
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-black-400 via-white to-black-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-2 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Side - Map & Social */}
            <div className="flex-1 flex flex-col gap-6">
              
              {/* Map */}
              <div className="flex-1 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.7891234567!2d73.7726717!3d18.572751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91c28504407%3A0xc5b047b49eb2b027!2sMajestique%20Signature%20Towers!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <h3 className="text-lg font-bold text-white mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://x.com/hangoutcodex?s=21" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/10 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/20 transition-all duration-200"
                    aria-label="Follow us on X (Twitter)"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/hangoutcodex?igsh=MXBta2JuZHRuYjdnNQ%3D%3D&utm_source=qr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/10 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/20 transition-all duration-200"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://discord.gg/hangoutcodex" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/10 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/20 transition-all duration-200"
                    aria-label="Join our Discord server"
                  >
                    <IconBrandDiscord className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex-1">
              <div className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-xl">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Contact Us</h2>
                  </div>
                  <p className="text-white/70">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <LabelInputContainer>
                      <Label htmlFor="firstname" className="text-white/90">First name</Label>
                      <Input 
                        id="firstname" 
                        name="firstName"
                        placeholder="Tyler" 
                        type="text" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20"
                        required
                      />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Label htmlFor="lastname" className="text-white/90">Last name</Label>
                      <Input 
                        id="lastname" 
                        name="lastName"
                        placeholder="Durden" 
                        type="text" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20"
                        required
                      />
                    </LabelInputContainer>
                  </div>

                  {/* Email */}
                  <LabelInputContainer>
                    <Label htmlFor="email" className="text-white/90">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email"
                      placeholder="projectmayhem@fc.com" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                      required
                    />
                  </LabelInputContainer>

                  {/* Subject */}
                  <LabelInputContainer>
                    <Label htmlFor="subject" className="text-white/90">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      placeholder="What's this about?" 
                      type="text" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20"
                      required
                    />
                  </LabelInputContainer>

                  {/* Message */}
                  <LabelInputContainer>
                    <Label htmlFor="message" className="text-white/90">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      className="flex h-24 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40 disabled:cursor-not-allowed disabled:opacity-50 transition duration-200 resize-none backdrop-blur-sm"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </LabelInputContainer>

                  {/* Submit Button */}
                 <button
  type="submit"
  disabled={isSubmitting}
  className="relative group w-full h-12 rounded-2xl overflow-hidden select-none
  bg-gradient-to-b from-white/10 via-white/5 to-transparent
  backdrop-blur-2xl border border-white/10
  text-white font-semibold tracking-wider uppercase
  shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.45)]
  transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
  hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.15)]
  hover:border-white/20 hover:scale-[1.015]
  active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
>
  {/* Dynamic reflective sweep */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
  translate-x-[-120%] group-hover:translate-x-[120%]
  transition-transform duration-[1800ms] ease-[cubic-bezier(0.77,0,0.175,1)]" />

  {/* Glass top reflection */}
  <span className="absolute top-0 left-0 right-0 h-1/2 
  bg-gradient-to-b from-white/20 to-transparent opacity-40" />

  {/* Soft radial glow center */}
  <span className="absolute inset-0 bg-radial-gradient 
  from-white/10 via-transparent to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-700" />

  {/* Subtle outline glow */}
  <span className="absolute inset-0 rounded-2xl border border-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]" />

  {/* Floating reflection shimmer */}
  <span className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700 blur-sm" />

  {/* Button text */}
  <span className="relative z-10">{isSubmitting ? 'Sending…' : 'Send Message →'}</span>
</button>


                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-3 bg-green-500/20 border border-green-500/30 text-green-300 rounded-xl backdrop-blur-sm">
                      ✨ Message sent successfully! We&apos;ll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-3 bg-red-500/20 border border-red-500/30 text-red-300 rounded-xl backdrop-blur-sm">
                      ⚠️ Failed to send message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}