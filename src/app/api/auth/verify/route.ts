import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

export async function GET(request: NextRequest) {
  try {
    const adminPayload = requireAuth(request);
    
    if (!adminPayload) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    
    const admin = await Admin.findById(adminPayload.id).select('-password');
    
    if (!admin || !admin.isActive) {
      return NextResponse.json(
        { success: false, error: 'Admin not found or inactive' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}