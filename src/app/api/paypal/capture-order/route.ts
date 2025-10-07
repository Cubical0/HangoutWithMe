import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Payment from '@/models/Payment';

const PAYPAL_API_BASE = process.env.NODE_ENV === 'production' 
  ? 'https://api-m.paypal.com' 
  : 'https://api-m.sandbox.paypal.com';

async function getAccessToken() {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials are not configured');
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('PayPal Auth Error:', errorData);
    throw new Error(`Failed to get PayPal access token: ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderID, userData, purchaseData } = body;

    if (!orderID) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    const accessToken = await getAccessToken();

    const response = await fetch(
      `${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('PayPal Capture Error:', errorData);
      throw new Error('Failed to capture PayPal order');
    }

    const captureData = await response.json();

    // Save the transaction to database
    try {
      await connectDB();

      const paymentAmount = captureData.purchase_units?.[0]?.amount?.value || purchaseData?.amount || '0';
      const paymentCurrency = captureData.purchase_units?.[0]?.amount?.currency_code || purchaseData?.currency || 'USD';

      // Get IP address and user agent
      const ipAddress = request.headers.get('x-forwarded-for') || 
                       request.headers.get('x-real-ip') || 
                       'unknown';
      const userAgent = request.headers.get('user-agent') || 'unknown';

      // Determine subscription dates if it's a subscription
      let subscriptionStartDate;
      let subscriptionEndDate;
      let subscriptionStatus;

      if (purchaseData?.purchaseType === 'subscription' || purchaseData?.purchaseType === 'pro_plan') {
        subscriptionStartDate = new Date();
        subscriptionEndDate = new Date();
        subscriptionEndDate.setMonth(subscriptionEndDate.getMonth() + 1); // 1 month subscription
        subscriptionStatus = 'active';
      }

      const paymentRecord = await Payment.create({
        userName: userData?.name || captureData.payer?.name?.given_name + ' ' + captureData.payer?.name?.surname || 'Unknown',
        userEmail: userData?.email || captureData.payer?.email_address || 'unknown@email.com',
        orderId: captureData.id,
        paypalOrderId: orderID,
        amount: parseFloat(paymentAmount),
        currency: paymentCurrency,
        status: captureData.status === 'COMPLETED' ? 'completed' : 'pending',
        purchaseType: purchaseData?.purchaseType || 'course',
        itemName: purchaseData?.itemName || 'Unknown Item',
        itemId: purchaseData?.itemId,
        subscriptionStatus,
        subscriptionStartDate,
        subscriptionEndDate,
        paypalPayerEmail: captureData.payer?.email_address,
        paypalPayerId: captureData.payer?.payer_id,
        paypalPayerName: captureData.payer?.name?.given_name + ' ' + captureData.payer?.name?.surname,
        ipAddress,
        userAgent,
      });

      console.log('✅ Payment record saved:', paymentRecord._id);
    } catch (dbError) {
      console.error('❌ Error saving payment to database:', dbError);
      // Don't fail the payment if database save fails
    }

    return NextResponse.json({
      success: true,
      orderID: captureData.id,
      status: captureData.status,
      payer: captureData.payer,
    });
  } catch (error) {
    console.error('Error capturing PayPal order:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to capture order', details: errorMessage },
      { status: 500 }
    );
  }
}