import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import connectDB from '@/lib/mongodb';
import FundingApplication from '@/models/FundingApplication';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const applicationData = {
      // Personal Information
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      linkedIn: formData.get('linkedIn') as string,
      
      // Company Information
      companyName: formData.get('companyName') as string,
      companyWebsite: formData.get('companyWebsite') as string,
      companyStage: formData.get('companyStage') as string,
      industry: formData.get('industry') as string,
      location: formData.get('location') as string,
      foundedYear: formData.get('foundedYear') as string,
      teamSize: formData.get('teamSize') as string,
      
      // Business Details
      businessModel: formData.get('businessModel') as string,
      targetMarket: formData.get('targetMarket') as string,
      competitiveAdvantage: formData.get('competitiveAdvantage') as string,
      currentRevenue: formData.get('currentRevenue') as string,
      monthlyGrowthRate: formData.get('monthlyGrowthRate') as string,
      
      // Funding Information
      fundingType: formData.get('fundingType') as string,
      fundingAmount: formData.get('fundingAmount') as string,
      previousFunding: formData.get('previousFunding') as string,
      useOfFunds: formData.get('useOfFunds') as string,
      timeline: formData.get('timeline') as string,
      
      // Additional Information
      additionalInfo: formData.get('additionalInfo') as string,
      
      // Metadata
      source: formData.get('source') as string,
      category: formData.get('category') as string,
      subject: formData.get('subject') as string,
      submittedAt: new Date().toISOString(),
    };

    // Handle file uploads
    const pitchDeck = formData.get('pitchDeck') as File | null;
    const businessPlan = formData.get('businessPlan') as File | null;
    
    const uploadDir = path.join(process.cwd(), 'uploads', 'funding-applications');
    
    // Create upload directory if it doesn't exist
    try {
      await mkdir(uploadDir, { recursive: true });
  } catch {
      // Directory might already exist
    }

    let pitchDeckPath = null;
    let businessPlanPath = null;

    // Save pitch deck if provided
    if (pitchDeck && pitchDeck.size > 0) {
      const pitchDeckBuffer = Buffer.from(await pitchDeck.arrayBuffer());
      const pitchDeckFilename = `${Date.now()}-${applicationData.companyName.replace(/[^a-zA-Z0-9]/g, '_')}-pitch-deck.${pitchDeck.name.split('.').pop()}`;
      pitchDeckPath = path.join(uploadDir, pitchDeckFilename);
      await writeFile(pitchDeckPath, pitchDeckBuffer);
    }

    // Save business plan if provided
    if (businessPlan && businessPlan.size > 0) {
      const businessPlanBuffer = Buffer.from(await businessPlan.arrayBuffer());
      const businessPlanFilename = `${Date.now()}-${applicationData.companyName.replace(/[^a-zA-Z0-9]/g, '_')}-business-plan.${businessPlan.name.split('.').pop()}`;
      businessPlanPath = path.join(uploadDir, businessPlanFilename);
      await writeFile(businessPlanPath, businessPlanBuffer);
    }

    // Add file paths to application data
    const completeApplicationData = {
      ...applicationData,
      pitchDeckPath,
      businessPlanPath,
    };

    // Save to MongoDB
    try {
      await connectDB();
      const savedApp = await FundingApplication.create(completeApplicationData);
      return NextResponse.json({
        success: true,
        message: 'Funding application submitted successfully',
        applicationId: savedApp._id,
      });
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to submit funding application',
        },
        { status: 500 }
      );
    }

  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit funding application',
      },
      { status: 500 }
    );
  }
}