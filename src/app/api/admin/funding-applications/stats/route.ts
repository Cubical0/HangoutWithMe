import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import FundingApplication from '@/models/FundingApplication';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      console.warn('MONGODB_URI not available, returning default stats');
      return NextResponse.json({ stats: { total: 0 } });
    }

    await connectDB();
    const total = await FundingApplication.countDocuments();
    return NextResponse.json({ stats: { total } });
  } catch (error) {
    console.error('Failed to fetch funding application stats:', error);
    return NextResponse.json({ stats: { total: 0 } }, { status: 500 });
  }
}
