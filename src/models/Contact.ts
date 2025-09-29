import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  source: string; // Which page the contact came from
  category: string; // Category based on the page
  phone?: string; // Optional phone number
  company?: string; // Optional company name
  serviceInterest?: string; // Specific service they're interested in
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: [50, 'First name cannot be more than 50 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: [50, 'Last name cannot be more than 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email address',
      ],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      maxlength: [200, 'Subject cannot be more than 200 characters'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [2000, 'Message cannot be more than 2000 characters'],
    },
    source: {
      type: String,
      required: [true, 'Source is required'],
      trim: true,
      enum: ['home', 'services', 'courses', 'trading', 'blog', 'other'],
      default: 'home',
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      enum: ['general', 'services', 'education', 'trading', 'blog', 'support'],
      default: 'general',
    },
    phone: {
      type: String,
      trim: true,
      maxlength: [20, 'Phone number cannot be more than 20 characters'],
    },
    company: {
      type: String,
      trim: true,
      maxlength: [100, 'Company name cannot be more than 100 characters'],
    },
    serviceInterest: {
      type: String,
      trim: true,
      maxlength: [100, 'Service interest cannot be more than 100 characters'],
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
ContactSchema.index({ email: 1 });
ContactSchema.index({ createdAt: -1 });
ContactSchema.index({ source: 1 });
ContactSchema.index({ category: 1 });

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);