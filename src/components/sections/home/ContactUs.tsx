'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { X, Mail, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Determine source and category based on current path
  const getSourceAndCategory = () => {
    if (pathname.includes('/services')) {
      return { source: 'services', category: 'services' };
    } else if (pathname.includes('/courses')) {
      return { source: 'courses', category: 'education' };
    } else if (pathname.includes('/trading')) {
      return { source: 'trading', category: 'trading' };
    } else if (pathname.includes('/blog')) {
      return { source: 'blog', category: 'blog' };
    } else {
      return { source: 'home', category: 'general' };
    }
  };

  // Ensure component is mounted before rendering portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, [isModalOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

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
    
    const { source, category } = getSourceAndCategory();
    
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
          source,
          category,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        console.error('Contact form error:', result.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus('idle');
  };

  return (
    <>
      {/* Beautiful Contact Button */}
      <section className="flex flex-col justify-center items-center py-8">
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d946ef_0%,#f59e0b_50%,#d946ef_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white backdrop-blur-3xl group-hover:bg-gray-900 transition-colors">
            <MessageCircle className="mr-3 w-5 h-5" />
            Get In Touch
            <motion.div
              className="ml-3 w-2 h-2 bg-pink-300 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.button>
      </section>

      {/* Glassmorphism Modal - Rendered via Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 overflow-hidden"
              onClick={closeModal}
              style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0,
                zIndex: 99999
              }}
            >
            {/* Backdrop with blur - prevents scrolling */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glassmorphism Container */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-xl">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Form */}
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
                    <motion.button
                      className="group/btn relative block h-12 w-full rounded-xl bg-white/20 hover:bg-white/30 font-medium text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'} &rarr;
                    </motion.button>

                    {/* Status Messages */}
                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-3 bg-green-500/20 border border-green-500/30 text-green-300 rounded-xl backdrop-blur-sm"
                        >
                          ✨ Message sent successfully! We&apos;ll get back to you soon.
                        </motion.div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-3 bg-red-500/20 border border-red-500/30 text-red-300 rounded-xl backdrop-blur-sm"
                        >
                          ⚠️ Failed to send message. Please try again.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>
            </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
