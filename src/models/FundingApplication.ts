import mongoose, { Schema, Document } from 'mongoose';

export interface IFundingApplication extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  companyName: string;
  companyWebsite: string;
  companyStage: string;
  industry: string;
  location: string;
  foundedYear: string;
  teamSize: string;
  businessModel: string;
  targetMarket: string;
  competitiveAdvantage: string;
  currentRevenue: string;
  monthlyGrowthRate: string;
  fundingType: string;
  fundingAmount: string;
  previousFunding: string;
  useOfFunds: string;
  timeline: string;
  additionalInfo: string;
  source: string;
  category: string;
  subject: string;
  submittedAt: string;
  pitchDeckPath?: string;
  businessPlanPath?: string;
}

const FundingApplicationSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedIn: { type: String },
  companyName: { type: String, required: true },
  companyWebsite: { type: String },
  companyStage: { type: String },
  industry: { type: String },
  location: { type: String },
  foundedYear: { type: String },
  teamSize: { type: String },
  businessModel: { type: String },
  targetMarket: { type: String },
  competitiveAdvantage: { type: String },
  currentRevenue: { type: String },
  monthlyGrowthRate: { type: String },
  fundingType: { type: String },
  fundingAmount: { type: String },
  previousFunding: { type: String },
  useOfFunds: { type: String },
  timeline: { type: String },
  additionalInfo: { type: String },
  source: { type: String },
  category: { type: String },
  subject: { type: String },
  submittedAt: { type: String, required: true },
  pitchDeckPath: { type: String },
  businessPlanPath: { type: String },
});

export default mongoose.models.FundingApplication || mongoose.model<IFundingApplication>('FundingApplication', FundingApplicationSchema);
