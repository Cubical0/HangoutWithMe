'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  DollarSign, 
  FileText, 
  Users, 
  Calendar,
  Briefcase,
  Target,
  TrendingUp,
  Send,
  ChevronRight,
  ChevronLeft,
  Check
} from 'lucide-react';

interface FundraiserApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: string;
}

const FundraiserApplicationModal: React.FC<FundraiserApplicationModalProps> = ({
  isOpen,
  onClose,
  serviceType = 'Fundraising',
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    fullName: '',
    email: '',
    phone: '',
    role: '',
    
    // Step 2: Company Information
    companyName: '',
    website: '',
    industry: '',
    foundedYear: '',
    teamSize: '',
    
    // Step 3: Fundraising Details
    fundingStage: '',
    fundingAmount: '',
    currentRevenue: '',
    businessModel: '',
    
    // Step 4: Business Details & Additional Info
    targetMarket: '',
    competitiveAdvantage: '',
    useOfFunds: '',
    pitchDeck: '',
    additionalNotes: '',
  });

  const totalSteps = 4;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/fundraiser-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Application submitted successfully! We will review your application and get back to you soon.');
        onClose();
        setCurrentStep(1); // Reset to first step
        // Reset form data
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          role: '',
          companyName: '',
          website: '',
          industry: '',
          foundedYear: '',
          teamSize: '',
          fundingStage: '',
          fundingAmount: '',
          currentRevenue: '',
          businessModel: '',
          targetMarket: '',
          competitiveAdvantage: '',
          useOfFunds: '',
          pitchDeck: '',
          additionalNotes: '',
        });
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.email && formData.phone && formData.role;
      case 2:
        return formData.companyName && formData.industry && formData.foundedYear && formData.teamSize;
      case 3:
        return formData.fundingStage && formData.fundingAmount && formData.businessModel;
      case 4:
        return formData.targetMarket && formData.competitiveAdvantage && formData.useOfFunds;
      default:
        return false;
    }
  };

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Company Info', icon: Building2 },
    { number: 3, title: 'Fundraising', icon: DollarSign },
    { number: 4, title: 'Business Details', icon: Briefcase },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden relative group"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none"></div>

              {/* Header */}
              <div className="relative z-10 backdrop-blur-sm bg-white/5 border-b border-white/10 p-6">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Fundraiser Application
                    </h2>
                    <p className="text-white/60 text-sm">
                      Step {currentStep} of {totalSteps}
                    </p>
                  </div>
                </div>

                {/* Step Indicator */}
                <div className="flex items-center justify-between gap-2">
                  {steps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isActive = currentStep === step.number;
                    const isCompleted = currentStep > step.number;
                    
                    return (
                      <React.Fragment key={step.number}>
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                              isActive
                                ? 'bg-white/20 border-white text-white'
                                : isCompleted
                                ? 'bg-white/10 border-white/50 text-white'
                                : 'bg-white/5 border-white/20 text-white/40'
                            }`}
                          >
                            {isCompleted ? (
                              <Check className="h-5 w-5" />
                            ) : (
                              <StepIcon className="h-5 w-5" />
                            )}
                          </div>
                          <span
                            className={`text-xs font-medium transition-colors hidden sm:block ${
                              isActive || isCompleted ? 'text-white' : 'text-white/40'
                            }`}
                          >
                            {step.title}
                          </span>
                        </div>
                        {index < steps.length - 1 && (
                          <div
                            className={`h-0.5 flex-1 transition-all duration-300 ${
                              isCompleted ? 'bg-white/50' : 'bg-white/10'
                            }`}
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Scrollable Form Content */}
              <div className="relative z-10 flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                          <User className="h-5 w-5 text-white" />
                          Personal Information
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="fullName" className="text-sm text-white/80 font-medium">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required
                              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
                              placeholder="John Doe"
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm text-white/80 font-medium">
                              Email Address *
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all w-full"
                                placeholder="john@example.com"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm text-white/80 font-medium">
                              Phone Number *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all w-full"
                                placeholder="+1 (555) 000-0000"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="role" className="text-sm text-white/80 font-medium">
                              Your Role *
                            </label>
                            <input
                              type="text"
                              id="role"
                              name="role"
                              value={formData.role}
                              onChange={handleInputChange}
                              required
                              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
                              placeholder="CEO, Founder, etc."
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Company Information */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                          <Building2 className="h-5 w-5 text-white" />
                          Company Information
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="companyName" className="text-sm text-white/80 font-medium">
                              Company Name *
                            </label>
                            <input
                              type="text"
                              id="companyName"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              required
                              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
                              placeholder="Your Company Inc."
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="website" className="text-sm text-white/80 font-medium">
                              Website
                            </label>
                            <div className="relative">
                              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                              <input
                                type="url"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all w-full"
                                placeholder="https://yourcompany.com"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="industry" className="text-sm text-white/80 font-medium">
                              Industry *
                            </label>
                            <select
                              id="industry"
                              name="industry"
                              value={formData.industry}
                              onChange={handleInputChange}
                              required
                              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all appearance-none cursor-pointer [&>option]:bg-black [&>option]:text-white"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 0.75rem center',
                                backgroundSize: '1.25rem',
                                paddingRight: '2.5rem'
                              }}
                            >
                              <option value="">Select Industry</option>
                              <option value="fintech">FinTech</option>
                              <option value="saas">SaaS</option>
                              <option value="ecommerce">E-commerce</option>
                              <option value="healthcare">Healthcare</option>
                              <option value="edtech">EdTech</option>
                              <option value="ai">AI/ML</option>
                              <option value="blockchain">Blockchain</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="foundedYear" className="text-sm text-white/80 font-medium">
                              Founded Year *
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                              <input
                                type="number"
                                id="foundedYear"
                                name="foundedYear"
                                value={formData.foundedYear}
                                onChange={handleInputChange}
                                required
                                min="1900"
                                max={new Date().getFullYear()}
                                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all w-full"
                                placeholder="2024"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="teamSize" className="text-sm text-white/80 font-medium">
                              Team Size *
                            </label>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                              <select
                                id="teamSize"
                                name="teamSize"
                                value={formData.teamSize}
                                onChange={handleInputChange}
                                required
                                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-11 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all w-full appearance-none cursor-pointer [&>option]:bg-black [&>option]:text-white"
                                style={{
                                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                                  backgroundRepeat: 'no-repeat',
                                  backgroundPosition: 'right 0.75rem center',
                                  backgroundSize: '1.25rem',
                                  paddingRight: '2.5rem'
                                }}
                              >
                                <option value="">Select Team Size</option>
                                <option value="1-5">1-5 employees</option>
                                <option value="6-10">6-10 employees</option>
                                <option value="11-25">11-25 employees</option>
                                <option value="26-50">26-50 employees</option>
                                <option value="51-100">51-100 employees</option>
                                <option value="100+">100+ employees</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Fundraising Details */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                          <DollarSign className="h-5 w-5 text-white" />
                          Fundraising Details
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="fundingStage" className="text-sm text-white/80 font-medium">
                              Funding Stage *
                            </label>
                            <div className="relative">
                              <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                              <select
                                id="fundingStage"
                                name="fundingStage"
                                value={formData.fundingStage}
                                onChange={handleInputChange}
                                required
                                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-11 py-3 text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all w-full appearance-none cursor-pointer [&>option]:bg-black [&>option]:text-white"
                                style={{
                                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                                  backgroundRepeat: 'no-repeat',
                                  backgroundPosition: 'right 0.75rem center',
                                  backgroundSize: '1.25rem',
                                  paddingRight: '2.5rem'
                                }}
                              >
                                <option value="">Select Stage</option>
                                <option value="pre-seed">Pre-Seed</option>
                                <option value="seed">Seed</option>
                                <option value="series-a">Series A</option>
                                <option value="series-b">Series B</option>
                                <option value="series-c">Series C+</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="fundingAmount" className="text-sm text-white/80 font-medium">
                              Target Funding Amount *
                            </label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                              <input
                                type="text"
                                id="fundingAmount"
                                name="fundingAmount"
                                value={formData.fundingAmount}
                                onChange={handleInputChange}
                                required
                                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all w-full"
                                placeholder="e.g., $500,000"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="currentRevenue" className="text-sm text-white/80 font-medium">
                              Current Monthly Revenue
                            </label>
                            <input
                              type="text"
                              id="currentRevenue"
                              name="currentRevenue"
                              value={formData.currentRevenue}
                              onChange={handleInputChange}
                              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
                              placeholder="e.g., $10,000/month"
                            />
                          </div>

                          <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="businessModel" className="text-sm text-white/80 font-medium">
                              Business Model *
                            </label>
                            <textarea
                              id="businessModel"
                              name="businessModel"
                              value={formData.businessModel}
                              onChange={handleInputChange}
                              required
                              rows={4}
                              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all resize-none"
                              placeholder="Describe your business model and how you generate revenue..."
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Business Details & Additional Info */}
                    {currentStep === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
                          <Briefcase className="h-5 w-5 text-white" />
                          Business Details
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="targetMarket" className="text-sm text-white/80 font-medium">
                              Target Market *
                            </label>
                            <div className="relative">
                              <Target className="absolute left-3 top-3 h-5 w-5 text-white/40" />
                              <textarea
                                id="targetMarket"
                                name="targetMarket"
                                value={formData.targetMarket}
                                onChange={handleInputChange}
                                required
                                rows={3}
                                className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all resize-none w-full"
                                placeholder="Who are your target customers? What problem are you solving for them?"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="competitiveAdvantage" className="text-sm text-white/80 font-medium">
                              Competitive Advantage *
                            </label>
                            <textarea
                              id="competitiveAdvantage"
                              name="competitiveAdvantage"
                              value={formData.competitiveAdvantage}
                              onChange={handleInputChange}
                              required
                              rows={3}
                              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all resize-none"
                              placeholder="What makes your company unique? What's your competitive edge?"
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="useOfFunds" className="text-sm text-white/80 font-medium">
                              Use of Funds *
                            </label>
                            <textarea
                              id="useOfFunds"
                              name="useOfFunds"
                              value={formData.useOfFunds}
                              onChange={handleInputChange}
                              required
                              rows={3}
                              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all resize-none"
                              placeholder="How will you use the funds you're raising?"
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="pitchDeck" className="text-sm text-white/80 font-medium">
                              Pitch Deck URL
                            </label>
                            <input
                              type="url"
                              id="pitchDeck"
                              name="pitchDeck"
                              value={formData.pitchDeck}
                              onChange={handleInputChange}
                              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
                              placeholder="Link to your pitch deck (Google Drive, Dropbox, etc.)"
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <label htmlFor="additionalNotes" className="text-sm text-white/80 font-medium">
                              Additional Notes
                            </label>
                            <textarea
                              id="additionalNotes"
                              name="additionalNotes"
                              value={formData.additionalNotes}
                              onChange={handleInputChange}
                              rows={4}
                              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all resize-none"
                              placeholder="Any additional information you'd like to share..."
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              {/* Footer with Navigation Buttons */}
              <div className="relative z-10 backdrop-blur-sm bg-white/5 border-t border-white/10 p-6">
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/5"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalSteps }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index + 1 === currentStep
                            ? 'w-8 bg-white'
                            : index + 1 < currentStep
                            ? 'w-2 bg-white/50'
                            : 'w-2 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/25 hover:border-white/50 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/15"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={!isStepValid() || isSubmitting}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/25 hover:border-white/50 shadow-lg hover:shadow-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/15"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Submit Application
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FundraiserApplicationModal;