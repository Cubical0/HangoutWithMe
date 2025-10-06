import mongoose, { Schema, Document } from 'mongoose';

export interface IFundingApplication extends Document {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  role: string;
  
  // Company Information
  companyName: string;
  website?: string;
  industry: string;
  foundedYear: string;
  teamSize: string;
  
  // Fundraising Details
  fundingStage: string;
  fundingAmount: string;
  currentRevenue?: string;
  businessModel: string;
  
  // Business Details
  targetMarket: string;
  competitiveAdvantage: string;
  useOfFunds: string;
  pitchDeck?: string;
  additionalNotes?: string;
  
  // Metadata
  serviceType?: string;
  submittedAt: Date;
  status?: string;
  
  // Legacy fields for backward compatibility
  firstName?: string;
  lastName?: string;
  linkedIn?: string;
  companyWebsite?: string;
  companyStage?: string;
  location?: string;
  monthlyGrowthRate?: string;
  fundingType?: string;
  previousFunding?: string;
  timeline?: string;
  additionalInfo?: string;
  source?: string;
  category?: string;
  subject?: string;
  pitchDeckPath?: string;
  businessPlanPath?: string;
}

const FundingApplicationSchema: Schema = new Schema({
  // Personal Information
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  
  // Company Information
  companyName: { type: String, required: true },
  website: { type: String },
  industry: { type: String, required: true },
  foundedYear: { type: String, required: true },
  teamSize: { type: String, required: true },
  
  // Fundraising Details
  fundingStage: { type: String, required: true },
  fundingAmount: { type: String, required: true },
  currentRevenue: { type: String },
  businessModel: { type: String, required: true },
  
  // Business Details
  targetMarket: { type: String, required: true },
  competitiveAdvantage: { type: String, required: true },
  useOfFunds: { type: String, required: true },
  pitchDeck: { type: String },
  additionalNotes: { type: String },
  
  // Metadata
  serviceType: { type: String },
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' },
  
  // Legacy fields for backward compatibility
  firstName: { type: String },
  lastName: { type: String },
  linkedIn: { type: String },
  companyWebsite: { type: String },
  companyStage: { type: String },
  location: { type: String },
  monthlyGrowthRate: { type: String },
  fundingType: { type: String },
  previousFunding: { type: String },
  timeline: { type: String },
  additionalInfo: { type: String },
  source: { type: String },
  category: { type: String },
  subject: { type: String },
  pitchDeckPath: { type: String },
  businessPlanPath: { type: String },
}, {
  timestamps: true
});

export default mongoose.models.FundingApplication || mongoose.model<IFundingApplication>('FundingApplication', FundingApplicationSchema);
