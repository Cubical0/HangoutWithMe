'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Send,
  MessageCircle,
  Globe,
  Linkedin,
  Twitter,
  ChevronDown
} from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
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
                    href="#" 
                    className="p-3 rounded-xl bg-white/10 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/20 transition-all duration-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-xl bg-white/10 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/20 transition-all duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-xl bg-white/10 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/20 transition-all duration-200"
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 rounded-xl bg-white/10 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/20 transition-all duration-200"
                  >
                    <MessageCircle className="h-5 w-5" />
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
                    className="group/btn relative block h-12 w-full rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 font-medium text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
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

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-white/70 text-lg">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What are your response times?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
              },
              {
                question: "Do you offer technical support?",
                answer: "Yes! Our technical support team is available Monday-Friday, 9am-6pm PST. Premium members get 24/7 priority support."
              },
              {
                question: "Can I schedule a consultation?",
                answer: "Absolutely! Use the contact form above to request a consultation, and we'll reach out to schedule a time that works for you."
              },
              {
                question: "Where are you located?",
                answer: "Our headquarters is in San Francisco, CA, but we serve clients globally through our online platform."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we also offer invoice-based billing."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee on all our services. If you're not satisfied, contact us for a full refund."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-200"
                >
                  <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}