import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import FundingApplication from '@/models/FundingApplication';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const applications = await FundingApplication.find()
      .sort({ submittedAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      applications,
    });
  } catch (error) {
    console.error('Error fetching fundraiser applications:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch fundraiser applications',
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
        },
        { status: 400 }
      );
    }

    await connectDB();
    
    const updatedApplication = await FundingApplication.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedApplication) {
      return NextResponse.json(
        {
          success: false,
          error: 'Application not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      application: updatedApplication,
    });
  } catch (error) {
    console.error('Error updating fundraiser application:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update fundraiser application',
      },
      { status: 500 }
    );
  }
}