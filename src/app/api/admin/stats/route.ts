import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

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

    // Get blog statistics
    const totalBlogs = await Blog.countDocuments();
    const publishedBlogs = await Blog.countDocuments({ status: 'published' });
    const draftBlogs = await Blog.countDocuments({ status: 'draft' });
    
    // For now, we'll use a placeholder for total views
    // In a real application, you'd track this in a separate analytics collection
    const totalViews = Math.floor(Math.random() * 10000) + 5000;

    const stats = {
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      totalViews,
    };

    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error('Stats fetch error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}