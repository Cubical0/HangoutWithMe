import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Payment from '@/models/Payment';

// GET - Fetch all payments (for admin panel)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const status = searchParams.get('status');
    const purchaseType = searchParams.get('purchaseType');
    const email = searchParams.get('email');

    // Build query
    const query: Record<string, unknown> = {};
    if (status) query.status = status;
    if (purchaseType) query.purchaseType = purchaseType;
    if (email) query.userEmail = { $regex: email, $options: 'i' };

    // Get total count
    const total = await Payment.countDocuments(query);

    // Get paginated payments
    const payments = await Payment.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json({
      success: true,
      data: payments,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching payments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payments' },
      { status: 500 }
    );
  }
}

// POST - Create a new payment record
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      userName,
      userEmail,
      orderId,
      paypalOrderId,
      amount,
      currency,
      status,
      purchaseType,
      itemName,
      itemId,
      subscriptionStatus,
      subscriptionStartDate,
      subscriptionEndDate,
      paypalPayerEmail,
      paypalPayerId,
      paypalPayerName,
    } = body;

    // Validate required fields
    if (!userName || !userEmail || !orderId || !paypalOrderId || !amount || !purchaseType || !itemName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get IP address and user agent
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Create payment record
    const payment = await Payment.create({
      userName,
      userEmail,
      orderId,
      paypalOrderId,
      amount: parseFloat(amount),
      currency: currency || 'USD',
      status: status || 'completed',
      purchaseType,
      itemName,
      itemId,
      subscriptionStatus,
      subscriptionStartDate,
      subscriptionEndDate,
      paypalPayerEmail,
      paypalPayerId,
      paypalPayerName,
      ipAddress,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      data: payment,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating payment:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to create payment record', details: errorMessage },
      { status: 500 }
    );
  }
}