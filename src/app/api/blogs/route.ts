import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export const dynamic = 'force-dynamic';

// Define the query type for MongoDB
interface BlogQuery {
  status?: string;
  category?: { $regex: string; $options: string };
  tags?: { $in: RegExp[] };
  featured?: boolean;
  $or?: Array<{
    title?: { $regex: string; $options: string };
    description?: { $regex: string; $options: string };
    content?: { $regex: string; $options: string };
  }>;
}

// GET /api/blogs - Get all blogs with pagination and filtering
export async function GET(request: NextRequest) {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      console.warn('MONGODB_URI not available, returning empty blog list');
      return NextResponse.json({
        success: true,
        data: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 0,
          pages: 0,
        },
      });
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const status = searchParams.get('status') || 'published';
    const featured = searchParams.get('featured');
    const search = searchParams.get('search');

    // Build query
    const query: BlogQuery = {};
    
    if (status) {
      query.status = status;
    }
    
    if (category) {
      query.category = { $regex: category, $options: 'i' };
    }
    
    if (tag) {
      query.tags = { $in: [new RegExp(tag, 'i')] };
    }
    
    if (featured !== null && featured !== undefined) {
      query.featured = featured === 'true';
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
      ];
    }

    // Calculate skip value for pagination
    const skip = (page - 1) * limit;

    // Get blogs with pagination
    const blogs = await Blog.find(query)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Blog.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: blogs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    
    // Check if it's a MongoDB connection error
    if (error && typeof error === 'object' && 'name' in error) {
      if (error.name === 'MongooseServerSelectionError') {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Database connection failed. Please check your MongoDB Atlas configuration.',
            details: 'Ensure your IP is whitelisted and credentials are correct.'
          },
          { status: 503 }
        );
      }
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST /api/blogs - Create a new blog
export async function POST(request: NextRequest) {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { success: false, error: 'Database not configured' },
        { status: 503 }
      );
    }

    await connectDB();

    const body = await request.json();
    
    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = body.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    const blogData = {
      ...body,
      readingTime,
    };

    const blog = new Blog(blogData);
    await blog.save();

    return NextResponse.json({
      success: true,
      data: blog,
      message: 'Blog created successfully',
    }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating blog:', error);
    
    // Check for duplicate key error
    if (error && typeof error === 'object' && 'code' in error && error.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'Blog with this slug already exists' },
        { status: 400 }
      );
    }
    
    // Check if it's a MongoDB connection error
    if (error && typeof error === 'object' && 'name' in error) {
      if (error.name === 'MongooseServerSelectionError') {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Database connection failed. Please check your MongoDB Atlas configuration.',
            details: 'Ensure your IP is whitelisted and credentials are correct.'
          },
          { status: 503 }
        );
      }
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}