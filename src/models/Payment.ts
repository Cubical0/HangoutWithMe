import mongoose, { Document, Schema } from 'mongoose';

export interface IPayment extends Document {
  // User Information
  userName: string;
  userEmail: string;
  
  // Payment Details
  orderId: string;
  paypalOrderId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  
  // Purchase Details
  purchaseType: 'course' | 'subscription' | 'pro_plan';
  itemName: string; // Course name or plan name
  itemId?: string; // Course ID if applicable
  
  // Subscription Details (if applicable)
  subscriptionStatus?: 'active' | 'inactive' | 'cancelled';
  subscriptionStartDate?: Date;
  subscriptionEndDate?: Date;
  
  // PayPal Response Data
  paypalPayerEmail?: string;
  paypalPayerId?: string;
  paypalPayerName?: string;
  
  // Metadata
  ipAddress?: string;
  userAgent?: string;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new Schema<IPayment>({
  // User Information
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  userEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  
  // Payment Details
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  paypalOrderId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    default: 'USD',
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending',
  },
  
  // Purchase Details
  purchaseType: {
    type: String,
    enum: ['course', 'subscription', 'pro_plan'],
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
  },
  
  // Subscription Details
  subscriptionStatus: {
    type: String,
    enum: ['active', 'inactive', 'cancelled'],
  },
  subscriptionStartDate: {
    type: Date,
  },
  subscriptionEndDate: {
    type: Date,
  },
  
  // PayPal Response Data
  paypalPayerEmail: {
    type: String,
  },
  paypalPayerId: {
    type: String,
  },
  paypalPayerName: {
    type: String,
  },
  
  // Metadata
  ipAddress: {
    type: String,
  },
  userAgent: {
    type: String,
  },
}, {
  timestamps: true,
});

// Indexes for better query performance
PaymentSchema.index({ userEmail: 1 });
PaymentSchema.index({ status: 1 });
PaymentSchema.index({ purchaseType: 1 });
PaymentSchema.index({ createdAt: -1 });
PaymentSchema.index({ orderId: 1 });

export default mongoose.models.Payment || mongoose.model<IPayment>('Payment', PaymentSchema);