import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import FundingApplication from '@/models/FundingApplication';

export async function GET() {
  try {
    await connectDB();
    const total = await FundingApplication.countDocuments();
    return NextResponse.json({ stats: { total } });
  } catch {
    return NextResponse.json({ stats: { total: 0 } }, { status: 500 });
  }
}
