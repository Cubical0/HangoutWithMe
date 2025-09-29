import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { sendContactNotification, sendContactConfirmation } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();
    const { 
      firstName, 
      lastName, 
      email, 
      subject, 
      message, 
      source, 
      category,
      phone,
      company,
      serviceInterest
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'All fields are required',
          details: {
            firstName: !firstName ? 'First name is required' : null,
            lastName: !lastName ? 'Last name is required' : null,
            email: !email ? 'Email is required' : null,
            subject: !subject ? 'Subject is required' : null,
            message: !message ? 'Message is required' : null,
          }
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please provide a valid email address' 
        },
        { status: 400 }
      );
    }

    // Map source to category if category not provided
    const getCategory = (src: string) => {
      switch (src) {
        case 'services': return 'services';
        case 'courses': return 'education';
        case 'trading': return 'trading';
        case 'blog': return 'blog';
        default: return 'general';
      }
    };

    // Create contact record
    const contactData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      source: source || 'home',
      category: category || getCategory(source || 'home'),
      ...(phone && { phone: phone.trim() }),
      ...(company && { company: company.trim() }),
      ...(serviceInterest && { serviceInterest: serviceInterest.trim() }),
    };

    const contact = new Contact(contactData);
    await contact.save();

    // Send emails (don't let email failures break the API)
    try {
      // Send notification to admin
      await sendContactNotification(contactData);
      
      // Send confirmation to user
      await sendContactConfirmation(contactData);
      
      console.log('✅ Both emails sent successfully');
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError);
      // Continue execution - contact is still saved
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully! We\'ll get back to you soon.',
        data: {
          id: contact._id,
          name: `${contactData.firstName} ${contactData.lastName}`,
          email: contactData.email,
          subject: contactData.subject,
          source: contactData.source,
          category: contactData.category,
          createdAt: contact.createdAt,
        },
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('❌ Contact API Error:', error);

    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors: { [key: string]: string } = {};
      Object.keys(error.errors).forEach((key) => {
        validationErrors[key] = error.errors[key].message;
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validationErrors,
        },
        { status: 400 }
      );
    }

    // Handle duplicate email (if you add unique constraint later)
    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          error: 'A contact with this email already exists',
        },
        { status: 409 }
      );
    }

    // Generic server error
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve contacts (for admin use)
export async function GET(request: NextRequest) {
  try {
    // You might want to add authentication here
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const source = searchParams.get('source');
    const category = searchParams.get('category');
    const skip = (page - 1) * limit;

    // Build filter query
    const filter: any = {};
    if (source) filter.source = source;
    if (category) filter.category = category;

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select('-__v');

    const total = await Contact.countDocuments(filter);
    
    // Get stats for dashboard
    const stats = await Contact.aggregate([
      {
        $group: {
          _id: null,
          totalContacts: { $sum: 1 },
          bySource: {
            $push: {
              source: '$source',
              category: '$category'
            }
          }
        }
      }
    ]);

    const sourceStats = await Contact.aggregate([
      {
        $group: {
          _id: '$source',
          count: { $sum: 1 }
        }
      }
    ]);

    const categoryStats = await Contact.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      }
    ]);

    return NextResponse.json({
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
      stats: {
        total: stats[0]?.totalContacts || 0,
        bySource: sourceStats.reduce((acc: any, item: any) => {
          acc[item._id] = item.count;
          return acc;
        }, {}),
        byCategory: categoryStats.reduce((acc: any, item: any) => {
          acc[item._id] = item.count;
          return acc;
        }, {}),
      },
    });

  } catch (error) {
    console.error('❌ Get Contacts Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to retrieve contacts',
      },
      { status: 500 }
    );
  }
}