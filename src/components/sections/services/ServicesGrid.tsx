"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { services, type Service } from "@/lib/data/services";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, X } from 'lucide-react';
import Image from 'next/image';

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-white"
  >
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
);

export function ServicesGrid() {
  const [active, setActive] = useState<Service | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
        setShowContactForm(false);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => {
    if (!showContactForm) {
      setActive(null);
    }
  });

  useOutsideClick(formRef, () => {
    if (showContactForm) {
      setShowContactForm(false);
    }
  });

  // Handle service button clicks
  const handleServiceAction = (actionType: 'consultation' | 'quote', service?: typeof services[0]) => {
    const targetService = service || active;
    if (targetService) {
      setFormData(prev => ({
        ...prev,
        serviceInterest: targetService.category,
        message: actionType === 'consultation' 
          ? `I'm interested in scheduling a consultation for ${targetService.category} services.`
          : `I would like to request a quote for ${targetService.category} services.`
      }));
      
      // If service is provided (from card), set it as active and show contact form
      if (service) {
        setActive(service);
        setShowContactForm(true);
      } else {
        // If no service provided (from modal), just show contact form
        setShowContactForm(true);
      }
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
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
          subject: `Service Inquiry: ${formData.serviceInterest}`,
          message: `Service Interest: ${formData.serviceInterest}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage: ${formData.message}`,
          source: 'services',
          category: 'services',
          serviceInterest: formData.serviceInterest,
          phone: formData.phone,
          company: formData.company,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          serviceInterest: ''
        });
        setTimeout(() => {
          setShowContactForm(false);
          setActive(null);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        console.error('Service inquiry error:', result.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Service inquiry submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r  from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Expandable Cards Modal */}
        {active && (
          <div className="fixed inset-0 bg-black/80 h-full w-full z-50" />
        )}
        
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <button
              key={`button-${active.category}-${id}`}
              className="flex absolute top-4 right-4 lg:top-6 lg:right-6 items-center justify-center bg-white/20 backdrop-blur-sm rounded-full h-10 w-10 hover:bg-white/30 transition-colors z-[110]"
              onClick={() => {
                setActive(null);
                setShowContactForm(false);
              }}
            >
              <CloseIcon />
            </button>
            
            <div className="w-full max-w-7xl max-h-[90vh] flex gap-4">
              {/* Service Details Modal - Hidden on mobile when form is shown */}
              <div
                ref={ref}
                style={{ width: showContactForm ? "60%" : "100%" }}
                className={`flex flex-col backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all duration-400 ${
                  showContactForm ? 'hidden md:flex' : 'flex'
                }`}
              >
              {/* Header with icon and title - Fixed at top */}
              <div className="flex-shrink-0 p-6 pb-4 border-b border-white/10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                      {React.createElement(active.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {active.category}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => handleServiceAction('consultation')}
                    className="px-6 py-3 text-sm rounded-xl font-bold bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all shadow-lg border border-white/30 flex-shrink-0"
                  >
                    Get Started →
                  </button>
                </div>
              </div>

              {/* Scrollable content area - Enhanced scrolling */}
              <div 
                className="flex-1 overflow-y-auto scrollbar-thin modal-scroll min-h-0"
                data-lenis-prevent
              >
                <div className="p-6 space-y-8">
                  {/* Overview */}
                  <div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {active.detailedContent.overview}
                    </p>
                  </div>
                  
                  {/* Detailed Content Sections */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Benefits */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        Key Benefits
                      </h4>
                      <ul className="space-y-3">
                        {active.detailedContent.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3 text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {active.detailedContent.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      Use Cases
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {active.detailedContent.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-white/80">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Implementation */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      Implementation Process
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">{active.detailedContent.implementation}</p>
                  </div>

                  {/* All Features List */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      All Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {active.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                          <span className="text-sm text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Information */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      Pricing & Packages
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h5 className="font-semibold text-white mb-2">Starter</h5>
                        <p className="text-2xl font-bold text-white mb-2">$2,999</p>
                        <p className="text-xs text-white/70">Perfect for small businesses getting started</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/10 border border-white/20 relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400 to-cyan-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
                          Popular
                        </div>
                        <h5 className="font-semibold text-white mb-2">Professional</h5>
                        <p className="text-2xl font-bold text-white mb-2">$7,999</p>
                        <p className="text-xs text-white/70">Ideal for growing companies</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h5 className="font-semibold text-white mb-2">Enterprise</h5>
                        <p className="text-2xl font-bold text-white mb-2">Custom</p>
                        <p className="text-xs text-white/70">Tailored solutions for large organizations</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      Frequently Asked Questions
                    </h4>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h5 className="font-semibold text-white mb-2">How long does implementation take?</h5>
                        <p className="text-sm text-white/80">Implementation typically takes 3-6 months depending on the complexity and scope of your project. We work closely with your team to ensure minimal disruption to your operations.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h5 className="font-semibold text-white mb-2">Do you provide ongoing support?</h5>
                        <p className="text-sm text-white/80">Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, and dedicated support team access to ensure your system runs smoothly.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h5 className="font-semibold text-white mb-2">Can the solution be customized?</h5>
                        <p className="text-sm text-white/80">Absolutely! All our solutions are tailored to your specific business needs. We conduct thorough analysis and design custom workflows that match your processes.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h5 className="font-semibold text-white mb-2">What about data security?</h5>
                        <p className="text-sm text-white/80">Security is our top priority. We implement enterprise-grade security measures, regular audits, and comply with industry standards like SOC 2, GDPR, and HIPAA where applicable.</p>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-white mb-2">Ready to Get Started?</h4>
                      <p className="text-white/80 mb-4">Contact our team today for a free consultation and custom quote.</p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button 
                          onClick={() => handleServiceAction('consultation')}
                          className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all border border-white/30"
                        >
                          Schedule Consultation
                        </button>
                        <button 
                          onClick={() => handleServiceAction('quote')}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all"
                        >
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Modal - Full width on mobile, 40% on desktop */}
            {showContactForm && (
              <div
                ref={formRef}
                className="w-full md:w-[40%] flex flex-col backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh]"
              >
                {/* Form Header */}
                <div className="flex-shrink-0 p-4 md:p-6 pb-3 md:pb-4 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-xl">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">Get Started</h3>
                        <p className="text-xs md:text-sm text-white/70">{active?.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowContactForm(false)}
                      className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Form Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-thin modal-scroll" data-lenis-prevent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="firstName" className="text-white/90 text-sm">First Name</Label>
                        <Input 
                          id="firstName" 
                          name="firstName"
                          placeholder="John" 
                          type="text" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 text-sm"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white/90 text-sm">Last Name</Label>
                        <Input 
                          id="lastName" 
                          name="lastName"
                          placeholder="Doe" 
                          type="text" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 text-sm"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-white/90 text-sm">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email"
                        placeholder="john@company.com" 
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 text-sm"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="text-white/90 text-sm">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        placeholder="+1 (555) 123-4567" 
                        type="tel" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 text-sm"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <Label htmlFor="company" className="text-white/90 text-sm">Company (Optional)</Label>
                      <Input 
                        id="company" 
                        name="company"
                        placeholder="Your Company" 
                        type="text" 
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:ring-purple-400/20 text-sm"
                      />
                    </div>

                    {/* Service Interest (Read-only) */}
                    <div>
                      <Label htmlFor="serviceInterest" className="text-white/90 text-sm">Service Interest</Label>
                      <Input 
                        id="serviceInterest" 
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        className="bg-white/5 border-white/20 text-white/80 text-sm cursor-not-allowed"
                        readOnly
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-white/90 text-sm">Additional Details</Label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your project requirements..."
                        className="flex h-20 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40 disabled:cursor-not-allowed disabled:opacity-50 transition duration-200 resize-none backdrop-blur-sm"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      className="group/btn relative block h-12 w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 font-medium text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Inquiry'} &rarr;
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-3 bg-green-500/20 border border-green-500/30 text-green-300 rounded-xl backdrop-blur-sm text-sm">
                        ✨ Inquiry sent successfully! We&apos;ll contact you soon.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-3 bg-red-500/20 border border-red-500/30 text-red-300 rounded-xl backdrop-blur-sm text-sm">
                        ⚠️ Failed to send inquiry. Please try again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            )}
            </div>
          </div>
        ) : null}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={`card-${service.category}-${id}`}
              onClick={() => setActive(service)}
              className="group cursor-pointer"
            >
              <article className="h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-500 hover:border-white/30 shadow-xl hover:shadow-2xl relative">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-3xl">
                    <Image
                      src={service.image}
                      alt={service.category}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4">
                      <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                        {React.createElement(service.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Category Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.category}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/80 mb-4 text-sm leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    
                    {/* Features Preview */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                          <span className="text-xs text-white/70">{feature}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                        <span className="text-xs text-white/70">+{service.features.length - 2} more features</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActive(service);
                        }}
                        className="w-full bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white text-sm px-4 py-3 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 font-medium hover:shadow-lg"
                      >
                        Learn More →
                      </button>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceAction('quote', service);
                          }}
                          className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm hover:from-blue-500/30 hover:to-cyan-500/30 text-white text-xs px-3 py-2 rounded-lg transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50 font-medium"
                        >
                          Get Quote
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceAction('consultation', service);
                          }}
                          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm hover:from-purple-500/30 hover:to-pink-500/30 text-white text-xs px-3 py-2 rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50 font-medium"
                        >
                          Consult
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}