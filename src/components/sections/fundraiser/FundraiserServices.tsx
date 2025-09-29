'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, 
  Users, 
  BookOpen, 
  Target,
  Presentation,
  FileText,
  Handshake,
  TrendingUp,
  X,
  Upload,
  Building,
  User,
  Briefcase,
  // removed unused FundingIcon
} from 'lucide-react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FundraiserServices = () => {
  const [active, setActive] = useState<{
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    gradient: string;
    amount: string;
    metric: string;
  } | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    
    // Company Information
    companyName: '',
    companyWebsite: '',
    companyStage: '',
    industry: '',
    location: '',
    foundedYear: '',
    teamSize: '',
    
    // Business Details
    businessModel: '',
    targetMarket: '',
    competitiveAdvantage: '',
    currentRevenue: '',
    monthlyGrowthRate: '',
    
    // Funding Information
    fundingType: '',
    fundingAmount: '',
    previousFunding: '',
    useOfFunds: '',
    timeline: '',
    
    // Additional Information
    pitchDeck: null as File | null,
    businessPlan: null as File | null,
    additionalInfo: ''
  });

  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const id = React.useId();

  // removed unused containerVariants

  // Services data
  const services = [
    {
      id: 'fundraising',
      title: 'Raise Funds for Startups & Businesses',
      description: 'Comprehensive fundraising support from pre-seed to Series A and beyond.',
      icon: DollarSign,
      gradient: 'from-emerald-500 to-teal-500',
      amount: '$50M+',
      metric: 'Funds Raised'
    },
    {
      id: 'investors',
      title: 'Connect with Investors',
      description: 'Access our extensive network of angel investors, VCs, and institutional investors.',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      amount: '500+',
      metric: 'Active Investors'
    },
    {
      id: 'mentorship',
      title: 'Mentor Support & Guidance',
      description: 'Learn from experienced entrepreneurs and industry experts who\'ve been there before.',
      icon: BookOpen,
      gradient: 'from-purple-500 to-pink-500',
      amount: '100+',
      metric: 'Expert Mentors'
    }
  ];

  useOutsideClick(ref, () => {
    if (!showApplicationForm) {
      setActive(null);
    }
  });

  useOutsideClick(formRef, () => {
    if (showApplicationForm) {
      setShowApplicationForm(false);
    }
  });

  // Handle service button clicks
  const handleServiceAction = (serviceType: string, service?: { id: string; title: string; description: string; icon: React.ElementType; gradient: string; amount: string; metric: string }) => {
    const targetService = service || active;
    if (targetService) {
      setFormData(prev => ({
        ...prev,
        fundingType: serviceType === 'fundraising' ? 'Equity Funding' : 
                    serviceType === 'investors' ? 'Investor Connection' : 'Mentorship Program'
      }));
      
      if (service) {
        setActive(service);
        setShowApplicationForm(true);
      } else {
        setShowApplicationForm(true);
      }
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file uploads
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [fieldName]: file
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      
      // Add all text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && typeof value !== 'object') {
          formDataToSend.append(key, value.toString());
        }
      });
      
      // Add files
      if (formData.pitchDeck) {
        formDataToSend.append('pitchDeck', formData.pitchDeck);
      }
      if (formData.businessPlan) {
        formDataToSend.append('businessPlan', formData.businessPlan);
      }
      
      formDataToSend.append('source', 'fundraiser');
      formDataToSend.append('category', 'funding-application');
      formDataToSend.append('subject', `Funding Application: ${formData.companyName}`);

      const response = await fetch('/api/funding-application', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setCurrentStep(1);
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', linkedIn: '',
          companyName: '', companyWebsite: '', companyStage: '', industry: '', location: '', foundedYear: '', teamSize: '',
          businessModel: '', targetMarket: '', competitiveAdvantage: '', currentRevenue: '', monthlyGrowthRate: '',
          fundingType: '', fundingAmount: '', previousFunding: '', useOfFunds: '', timeline: '',
          pitchDeck: null, businessPlan: null, additionalInfo: ''
        });
        setTimeout(() => {
          setShowApplicationForm(false);
          setActive(null);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        console.error('Funding application error:', result.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Funding application submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="fundraising-services" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Fundraising Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end fundraising support to help you secure the capital you need to grow your business.
          </p>
        </motion.div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 bg-black/80 h-full w-full z-50"
            />
          )}
        </AnimatePresence>
        
        {/* Service Modal */}
        <AnimatePresence>
          {active ? (
            <div className="fixed inset-0 grid place-items-center z-[100] p-4">
              <motion.button
                key={`button-${active.id}-${id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0 } }}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                className="flex absolute top-4 right-4 lg:top-6 lg:right-6 items-center justify-center bg-white/20 backdrop-blur-sm rounded-full h-10 w-10 hover:bg-white/30 transition-colors z-[110]"
                onClick={() => {
                  setActive(null);
                  setShowApplicationForm(false);
                }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
              
                <div className="flex w-full max-w-7xl h-full max-h-[90vh] overflow-x-hidden">
                {/* Service Details Modal */}
                <motion.div
                  layoutId={`card-${active.id}-${id}`}
                  ref={ref}
                  className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ${
                    showApplicationForm ? 'w-[60%]' : 'w-full'
                  }`}
                >
                  <div className="h-full overflow-y-auto">
                    {/* Service Header */}
                    <div className="p-8 border-b border-white/10">
                      <div className="flex items-center gap-6 mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${active.gradient} bg-opacity-20`}>
                          {active.icon && React.createElement(active.icon, { className: "w-12 h-12 text-white" })}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{active.title}</h3>
                          <div className="flex items-center gap-2">
                            <span className={`text-3xl font-bold bg-gradient-to-r ${active.gradient} bg-clip-text text-transparent`}>
                              {active.amount}
                            </span>
                            <span className="text-gray-400">{active.metric}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <motion.button
                          onClick={() => handleServiceAction(active.id)}
                          className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Apply Now
                        </motion.button>
                        <motion.button
                          className="px-6 py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                    
                    {/* Service Content */}
                    <div className="p-8">
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        {active.description}
                      </p>
                      
                      {/* Service Features */}
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-white mb-4">What&apos;s Included:</h4>
                        {active.id === 'fundraising' && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Funding Strategy Development</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Investor Pitch Preparation</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Due Diligence Support</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Term Sheet Negotiation</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Legal Documentation Assistance</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Post-Funding Growth Planning</span>
                            </div>
                          </div>
                        )}
                        
                        {active.id === 'investors' && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Investor Matching & Introduction</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Network Access to 500+ Investors</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Warm Introductions</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Investor Relations Management</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Follow-up & Communication Support</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Long-term Relationship Building</span>
                            </div>
                          </div>
                        )}
                        
                        {active.id === 'mentorship' && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">1-on-1 Mentorship Sessions</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Industry Expert Guidance</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Strategic Business Planning</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Market Entry Strategies</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Scaling & Growth Advice</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.gradient}`}></div>
                              <span className="text-gray-300">Leadership Development</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Funding Application Form */}
                <AnimatePresence>
                  {showApplicationForm && (
                    <motion.div
                      ref={formRef}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-[40%] flex flex-col backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden ml-4"
                    >
                      <div className="flex-1 overflow-y-auto p-0">
                        {/* Form Header */}
                        <div className="p-6 border-b border-white/10">
                          <h3 className="text-2xl font-bold text-white mb-2">Funding Application</h3>
                          <p className="text-gray-400 text-sm">Complete your application to get started</p>
                          
                          {/* Progress Steps */}
                          <div className="flex items-center gap-2 mt-4">
                            {[1, 2, 3, 4].map((step) => (
                              <div key={step} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                                  currentStep >= step 
                                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' 
                                    : 'bg-white/10 text-gray-400'
                                }`}>
                                  {step}
                                </div>
                                {step < 4 && (
                                  <div className={`w-8 h-0.5 ${
                                    currentStep > step ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-white/20'
                                  }`} />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Form Content */}
                        <form onSubmit={handleSubmit} className="flex flex-col min-h-0 p-6 space-y-6">
                          {/* Step 1: Personal Information */}
                          {currentStep === 1 && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="space-y-4"
                            >
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <User className="w-5 h-5" />
                                Personal Information
                              </h4>
                              
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <Label htmlFor="firstName" className="text-white/90 text-sm">First Name</Label>
                                  <Input 
                                    id="firstName" 
                                    name="firstName"
                                    placeholder="John" 
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                    required
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="lastName" className="text-white/90 text-sm">Last Name</Label>
                                  <Input 
                                    id="lastName" 
                                    name="lastName"
                                    placeholder="Doe" 
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                    required
                                  />
                                </div>
                              </div>

                              <div>
                                <Label htmlFor="email" className="text-white/90 text-sm">Email Address</Label>
                                <Input 
                                  id="email" 
                                  name="email"
                                  placeholder="john@company.com" 
                                  type="email" 
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                  required
                                />
                              </div>

                              <div>
                                <Label htmlFor="phone" className="text-white/90 text-sm">Phone Number</Label>
                                <Input 
                                  id="phone" 
                                  name="phone"
                                  placeholder="+1 (555) 123-4567" 
                                  type="tel" 
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                  required
                                />
                              </div>

                              <div>
                                <Label htmlFor="linkedIn" className="text-white/90 text-sm">LinkedIn Profile (Optional)</Label>
                                <Input 
                                  id="linkedIn" 
                                  name="linkedIn"
                                  placeholder="https://linkedin.com/in/johndoe" 
                                  value={formData.linkedIn}
                                  onChange={handleInputChange}
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                />
                              </div>
                            </motion.div>
                          )}

                          {/* Step 2: Company Information */}
                          {currentStep === 2 && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="space-y-4"
                            >
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Building className="w-5 h-5" />
                                Company Information
                              </h4>
                              
                              <div>
                                <Label htmlFor="companyName" className="text-white/90 text-sm">Company Name</Label>
                                <Input 
                                  id="companyName" 
                                  name="companyName"
                                  placeholder="Your Company Inc." 
                                  value={formData.companyName}
                                  onChange={handleInputChange}
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                  required
                                />
                              </div>

                              <div>
                                <Label htmlFor="companyWebsite" className="text-white/90 text-sm">Company Website</Label>
                                <Input 
                                  id="companyWebsite" 
                                  name="companyWebsite"
                                  placeholder="https://yourcompany.com" 
                                  value={formData.companyWebsite}
                                  onChange={handleInputChange}
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <Label htmlFor="companyStage" className="text-white/90 text-sm">Company Stage</Label>
                                  <select
                                    id="companyStage"
                                    name="companyStage"
                                    value={formData.companyStage}
                                    onChange={handleInputChange}
                                    className="flex h-10 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40"
                                    required
                                  >
                                    <option value="" className="bg-black">Select Stage</option>
                                    <option value="idea" className="bg-black">Idea Stage</option>
                                    <option value="pre-seed" className="bg-black">Pre-Seed</option>
                                    <option value="seed" className="bg-black">Seed</option>
                                    <option value="series-a" className="bg-black">Series A</option>
                                    <option value="series-b" className="bg-black">Series B</option>
                                    <option value="growth" className="bg-black">Growth Stage</option>
                                  </select>
                                </div>
                                <div>
                                  <Label htmlFor="foundedYear" className="text-white/90 text-sm">Founded Year</Label>
                                  <Input 
                                    id="foundedYear" 
                                    name="foundedYear"
                                    placeholder="2023" 
                                    type="number"
                                    min="1900"
                                    max="2024"
                                    value={formData.foundedYear}
                                    onChange={handleInputChange}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                    required
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <Label htmlFor="industry" className="text-white/90 text-sm">Industry</Label>
                                  <select
                                    id="industry"
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleInputChange}
                                    className="flex h-10 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40"
                                    required
                                  >
                                    <option value="" className="bg-black">Select Industry</option>
                                    <option value="technology" className="bg-black">Technology</option>
                                    <option value="healthcare" className="bg-black">Healthcare</option>
                                    <option value="fintech" className="bg-black">FinTech</option>
                                    <option value="ecommerce" className="bg-black">E-commerce</option>
                                    <option value="saas" className="bg-black">SaaS</option>
                                    <option value="ai-ml" className="bg-black">AI/ML</option>
                                    <option value="biotech" className="bg-black">Biotech</option>
                                    <option value="cleantech" className="bg-black">CleanTech</option>
                                    <option value="other" className="bg-black">Other</option>
                                  </select>
                                </div>
                                <div>
                                  <Label htmlFor="teamSize" className="text-white/90 text-sm">Team Size</Label>
                                  <select
                                    id="teamSize"
                                    name="teamSize"
                                    value={formData.teamSize}
                                    onChange={handleInputChange}
                                    className="flex h-10 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40"
                                    required
                                  >
                                    <option value="" className="bg-black">Select Size</option>
                                    <option value="1-5" className="bg-black">1-5 employees</option>
                                    <option value="6-10" className="bg-black">6-10 employees</option>
                                    <option value="11-25" className="bg-black">11-25 employees</option>
                                    <option value="26-50" className="bg-black">26-50 employees</option>
                                    <option value="51-100" className="bg-black">51-100 employees</option>
                                    <option value="100+" className="bg-black">100+ employees</option>
                                  </select>
                                </div>
                              </div>

                              <div>
                                <Label htmlFor="location" className="text-white/90 text-sm">Company Location</Label>
                                <Input 
                                  id="location" 
                                  name="location"
                                  placeholder="San Francisco, CA" 
                                  value={formData.location}
                                  onChange={handleInputChange}
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                  required
                                />
                              </div>
                            </motion.div>
                          )}

                          {/* Step 3: Business & Funding Details */}
                          {currentStep === 3 && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="space-y-4"
                            >
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Briefcase className="w-5 h-5" />
                                Business & Funding Details
                              </h4>
                              
                              <div>
                                <Label htmlFor="businessModel" className="text-white/90 text-sm">Business Model</Label>
                                <textarea
                                  id="businessModel"
                                  name="businessModel"
                                  placeholder="Describe your business model and how you generate revenue..."
                                  className="flex h-20 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40 resize-none backdrop-blur-sm"
                                  value={formData.businessModel}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div>
                                <Label htmlFor="targetMarket" className="text-white/90 text-sm">Target Market</Label>
                                <textarea
                                  id="targetMarket"
                                  name="targetMarket"
                                  placeholder="Describe your target market and customer base..."
                                  className="flex h-20 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40 resize-none backdrop-blur-sm"
                                  value={formData.targetMarket}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <Label htmlFor="fundingAmount" className="text-white/90 text-sm">Funding Amount Needed</Label>
                                  <select
                                    id="fundingAmount"
                                    name="fundingAmount"
                                    value={formData.fundingAmount}
                                    onChange={handleInputChange}
                                    className="flex h-10 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40"
                                    required
                                  >
                                    <option value="" className="bg-black">Select Amount</option>
                                    <option value="under-100k" className="bg-black">Under $100K</option>
                                    <option value="100k-500k" className="bg-black">$100K - $500K</option>
                                    <option value="500k-1m" className="bg-black">$500K - $1M</option>
                                    <option value="1m-5m" className="bg-black">$1M - $5M</option>
                                    <option value="5m-10m" className="bg-black">$5M - $10M</option>
                                    <option value="over-10m" className="bg-black">Over $10M</option>
                                  </select>
                                </div>
                                <div>
                                  <Label htmlFor="timeline" className="text-white/90 text-sm">Funding Timeline</Label>
                                  <select
                                    id="timeline"
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleInputChange}
                                    className="flex h-10 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40"
                                    required
                                  >
                                    <option value="" className="bg-black">Select Timeline</option>
                                    <option value="immediate" className="bg-black">Immediate (0-3 months)</option>
                                    <option value="short-term" className="bg-black">Short-term (3-6 months)</option>
                                    <option value="medium-term" className="bg-black">Medium-term (6-12 months)</option>
                                    <option value="long-term" className="bg-black">Long-term (12+ months)</option>
                                  </select>
                                </div>
                              </div>

                              <div>
                                <Label htmlFor="previousFunding" className="text-white/90 text-sm">Previous Funding (Optional)</Label>
                                <Input 
                                  id="previousFunding" 
                                  name="previousFunding"
                                  placeholder="e.g., $250K seed round from XYZ Ventures" 
                                  value={formData.previousFunding}
                                  onChange={handleInputChange}
                                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                />
                              </div>

                              <div>
                                <Label htmlFor="useOfFunds" className="text-white/90 text-sm">Use of Funds</Label>
                                <textarea
                                  id="useOfFunds"
                                  name="useOfFunds"
                                  placeholder="How will you use the funding? (e.g., product development, marketing, hiring...)"
                                  className="flex h-20 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40 resize-none backdrop-blur-sm"
                                  value={formData.useOfFunds}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                            </motion.div>
                          )}

                          {/* Step 4: Documents & Additional Info */}
                          {currentStep === 4 && (
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="space-y-4"
                            >
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Upload className="w-5 h-5" />
                                Documents & Additional Information
                              </h4>
                              
                              <div>
                                <Label htmlFor="pitchDeck" className="text-white/90 text-sm">Pitch Deck (Optional)</Label>
                                <div className="mt-1">
                                  <input
                                    id="pitchDeck"
                                    name="pitchDeck"
                                    type="file"
                                    accept=".pdf,.ppt,.pptx"
                                    onChange={(e) => handleFileChange(e, 'pitchDeck')}
                                    className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 file:cursor-pointer cursor-pointer bg-white/10 border border-white/20 rounded-md"
                                  />
                                  <p className="text-xs text-gray-400 mt-1">PDF, PPT, or PPTX files only</p>
                                </div>
                              </div>

                              <div>
                                <Label htmlFor="businessPlan" className="text-white/90 text-sm">Business Plan (Optional)</Label>
                                <div className="mt-1">
                                  <input
                                    id="businessPlan"
                                    name="businessPlan"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => handleFileChange(e, 'businessPlan')}
                                    className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 file:cursor-pointer cursor-pointer bg-white/10 border border-white/20 rounded-md"
                                  />
                                  <p className="text-xs text-gray-400 mt-1">PDF, DOC, or DOCX files only</p>
                                </div>
                              </div>

                              <div>
                                <Label htmlFor="competitiveAdvantage" className="text-white/90 text-sm">Competitive Advantage</Label>
                                <textarea
                                  id="competitiveAdvantage"
                                  name="competitiveAdvantage"
                                  placeholder="What makes your company unique? What's your competitive advantage?"
                                  className="flex h-20 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40 resize-none backdrop-blur-sm"
                                  value={formData.competitiveAdvantage}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <Label htmlFor="currentRevenue" className="text-white/90 text-sm">Current Monthly Revenue</Label>
                                  <select
                                    id="currentRevenue"
                                    name="currentRevenue"
                                    value={formData.currentRevenue}
                                    onChange={handleInputChange}
                                    className="flex h-10 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40"
                                  >
                                    <option value="" className="bg-black">Select Revenue</option>
                                    <option value="pre-revenue" className="bg-black">Pre-Revenue</option>
                                    <option value="under-1k" className="bg-black">Under $1K</option>
                                    <option value="1k-10k" className="bg-black">$1K - $10K</option>
                                    <option value="10k-50k" className="bg-black">$10K - $50K</option>
                                    <option value="50k-100k" className="bg-black">$50K - $100K</option>
                                    <option value="over-100k" className="bg-black">Over $100K</option>
                                  </select>
                                </div>
                                <div>
                                  <Label htmlFor="monthlyGrowthRate" className="text-white/90 text-sm">Monthly Growth Rate</Label>
                                  <Input 
                                    id="monthlyGrowthRate" 
                                    name="monthlyGrowthRate"
                                    placeholder="e.g., 15%" 
                                    value={formData.monthlyGrowthRate}
                                    onChange={handleInputChange}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-emerald-400 focus:ring-emerald-400/20 text-sm"
                                  />
                                </div>
                              </div>

                              <div>
                                <Label htmlFor="additionalInfo" className="text-white/90 text-sm">Additional Information</Label>
                                <textarea
                                  id="additionalInfo"
                                  name="additionalInfo"
                                  placeholder="Any additional information you'd like to share about your company or funding needs..."
                                  className="flex h-24 w-full border border-white/20 bg-white/10 text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/40 resize-none backdrop-blur-sm"
                                  value={formData.additionalInfo}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </motion.div>
                          )}

                          {/* Navigation Buttons */}
                          <div className="flex justify-between pt-4 sticky bottom-0 bg-white/5 backdrop-blur-sm z-10 pb-2">
                            {currentStep > 1 && (
                              <motion.button
                                type="button"
                                onClick={() => setCurrentStep(currentStep - 1)}
                                className="px-4 py-2 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Previous
                              </motion.button>
                            )}
                            
                            {currentStep < 4 ? (
                              <motion.button
                                type="button"
                                onClick={() => setCurrentStep(currentStep + 1)}
                                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 ml-auto"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Next
                              </motion.button>
                            ) : (
                              <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                              </motion.button>
                            )}
                          </div>

                          {/* Status Messages */}
                          <AnimatePresence>
                            {submitStatus === 'success' && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-3 bg-green-500/20 border border-green-500/30 text-green-300 rounded-xl backdrop-blur-sm text-sm"
                              >
                                ✨ Application submitted successfully! We&apos;ll review and contact you soon.
                              </motion.div>
                            )}
                            
                            {submitStatus === 'error' && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-3 bg-red-500/20 border border-red-500/30 text-red-300 rounded-xl backdrop-blur-sm text-sm"
                              >
                                ⚠️ Failed to submit application. Please try again.
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </form>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : null}
        </AnimatePresence>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              layoutId={`card-${service.id}-${id}`}
              key={`card-${service.id}-${id}`}
              onClick={() => setActive(service)}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.98 }}
            >
              <article className="h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-500 hover:border-white/30 shadow-xl hover:shadow-2xl relative">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Service Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-20`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <motion.h3
                        layoutId={`title-${service.id}-${id}`}
                        transition={{ duration: 0 }}
                        className="text-xl font-bold text-white mb-2"
                      >
                        {service.title}
                      </motion.h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {service.amount}
                        </span>
                        <span className="text-sm text-gray-400">{service.metric}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <motion.p
                    layoutId={`description-${service.id}-${id}`}
                    transition={{ duration: 0 }}
                    className="text-white/80 mb-6 text-sm leading-relaxed flex-grow"
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3 mt-auto">
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(service);
                      }}
                      className="w-full bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white text-sm px-4 py-3 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 font-medium hover:shadow-lg"
                    >
                      Learn More →
                    </motion.button>
                    
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceAction(service.id, service);
                      }}
                      className={`w-full bg-gradient-to-r ${service.gradient} bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white text-sm px-4 py-3 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 font-medium`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
              Additional Support Services
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-center">
              <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 w-fit mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Business Plan Development</h4>
              <p className="text-sm text-gray-300">Create compelling business plans that attract investors.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-center">
              <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 w-fit mx-auto mb-4">
                <Presentation className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Pitch Deck Creation</h4>
              <p className="text-sm text-gray-300">Design professional pitch decks that tell your story effectively.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-center">
              <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 w-fit mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Financial Modeling</h4>
              <p className="text-sm text-gray-300">Build robust financial models and projections for investors.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-center">
              <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 w-fit mx-auto mb-4">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Partnership Facilitation</h4>
              <p className="text-sm text-gray-300">Connect with strategic partners and potential collaborators.</p>
            </div>

            <div className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg text-center">
              <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 w-fit mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Growth Strategy</h4>
              <p className="text-sm text-gray-300">Develop scalable growth strategies for sustainable success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundraiserServices;