import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import mongoose from 'mongoose';

export const dynamic = 'force-dynamic';

// GET /api/blogs/[id] - Get a single blog by ID or slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { success: false, error: 'Database not configured' },
        { status: 503 }
      );
    }

    await connectDB();

    const { id } = await params;
    let blog;

    // Check if id is a valid ObjectId, otherwise search by slug
    if (mongoose.Types.ObjectId.isValid(id)) {
      blog = await Blog.findById(id);
    } else {
      blog = await Blog.findOne({ slug: id });
    }

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[id] - Update a blog
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { success: false, error: 'Database not configured' },
        { status: 503 }
      );
    }

    await connectDB();

    const { id } = await params;
    const body = await request.json();

    // Calculate reading time if content is updated
    if (body.content) {
      const wordCount = body.content.split(/\s+/).length;
      body.readingTime = Math.ceil(wordCount / 200);
    }

    let blog;

    // Check if id is a valid ObjectId, otherwise search by slug
    if (mongoose.Types.ObjectId.isValid(id)) {
      blog = await Blog.findByIdAndUpdate(id, body, { 
        new: true, 
        runValidators: true 
      });
    } else {
      blog = await Blog.findOneAndUpdate({ slug: id }, body, { 
        new: true, 
        runValidators: true 
      });
    }

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: blog,
      message: 'Blog updated successfully',
    });
  } catch (error: unknown) {
    console.error('Error updating blog:', error);
    
    if (error && typeof error === 'object' && 'code' in error && error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'Blog with this slug already exists' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[id] - Delete a blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { success: false, error: 'Database not configured' },
        { status: 503 }
      );
    }

    await connectDB();

    const { id } = await params;
    let blog;

    // Check if id is a valid ObjectId, otherwise search by slug
    if (mongoose.Types.ObjectId.isValid(id)) {
      blog = await Blog.findByIdAndDelete(id);
    } else {
      blog = await Blog.findOneAndDelete({ slug: id });
    }

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}