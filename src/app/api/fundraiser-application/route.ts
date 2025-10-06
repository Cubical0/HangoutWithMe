import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import FundingApplication from '@/models/FundingApplication';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract form data
    const applicationData = {
      // Personal Information
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      role: body.role,
      
      // Company Information
      companyName: body.companyName,
      website: body.website,
      industry: body.industry,
      foundedYear: body.foundedYear,
      teamSize: body.teamSize,
      
      // Fundraising Details
      fundingStage: body.fundingStage,
      fundingAmount: body.fundingAmount,
      currentRevenue: body.currentRevenue,
      businessModel: body.businessModel,
      
      // Business Details
      targetMarket: body.targetMarket,
      competitiveAdvantage: body.competitiveAdvantage,
      useOfFunds: body.useOfFunds,
      pitchDeck: body.pitchDeck,
      additionalNotes: body.additionalNotes,
      
      // Metadata
      serviceType: body.serviceType || 'Fundraising',
      submittedAt: new Date(),
      status: 'pending',
    };

    // Save to MongoDB
    await connectDB();
    const savedApp = await FundingApplication.create(applicationData);
    
    return NextResponse.json({
      success: true,
      message: 'Fundraiser application submitted successfully',
      applicationId: savedApp._id,
    });
  } catch (error) {
    console.error('Error submitting fundraiser application:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit fundraiser application',
      },
      { status: 500 }
    );
  }
}