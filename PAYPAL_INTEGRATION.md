# PayPal Integration Guide

## Overview
This document explains the PayPal payment integration for the "Upgrade to Pro" feature in the Hangout Finance trading platform.

## Features Implemented

### 1. **PayPal Button Component** (`src/components/ui/PayPalButton.tsx`)
- Reusable PayPal button component
- Handles order creation and capture
- Shows loading states and error messages
- Customizable amount and currency

### 2. **Payment Modal** (`src/components/ui/PaymentModal.tsx`)
- Beautiful modal UI for payment flow
- Shows plan details and pricing
- Lists all Pro plan features
- Integrates PayPal button
- Handles success/error states

### 3. **API Routes**
- **Create Order**: `/api/paypal/create-order`
  - Creates a PayPal order
  - Configures payment details
  - Returns order ID for client

- **Capture Order**: `/api/paypal/capture-order`
  - Captures the payment after user approval
  - Validates the transaction
  - Returns payment details

### 4. **Updated Components**
- **TrustedBy Component**: Added PayPal modal trigger
- **Trading Page**: Added payment success/cancelled notifications

## Configuration

### Environment Variables
Add these to your `.env.local` file:

```env
# PayPal Configuration
NEXT_PUBLIC_PAYPAL_CLIENT_ID=AbZ9ES3Ew_tH6m6vgxCGkml02wGaIbuMLAD-y43yjqA0nusccaQLnikZaJTmR77MLqiGMsTzxum2QM7f
PAYPAL_CLIENT_SECRET=EFG8KEatHf25xqSfHSmziUzFIt77zNFLtj3jdl5JwSY5Xw0dpBxuRKn0d82_7TW37Qs2aPq1eSLWgcBm
```

### PayPal Account Details
- **App Name**: Hangout codex
- **Client ID**: AbZ9ES3Ew_tH6m6vgxCGkml02wGaIbuMLAD-y43yjqA0nusccaQLnikZaJTmR77MLqiGMsTzxum2QM7f
- **Environment**: Sandbox (for testing)

## How It Works

### Payment Flow

1. **User clicks "Upgrade to Pro"**
   - Opens payment modal with plan details

2. **User clicks PayPal button**
   - Creates order via `/api/paypal/create-order`
   - Opens PayPal checkout window

3. **User completes payment on PayPal**
   - PayPal redirects back to your app
   - Captures payment via `/api/paypal/capture-order`

4. **Success/Failure handling**
   - Success: Shows success notification and redirects
   - Failure: Shows error message

### API Endpoints

#### POST `/api/paypal/create-order`
**Request Body:**
```json
{
  "amount": "29.99",
  "currency": "USD"
}
```

**Response:**
```json
{
  "id": "ORDER_ID_FROM_PAYPAL"
}
```

#### POST `/api/paypal/capture-order`
**Request Body:**
```json
{
  "orderID": "ORDER_ID_FROM_PAYPAL"
}
```

**Response:**
```json
{
  "success": true,
  "orderID": "ORDER_ID",
  "status": "COMPLETED",
  "payer": { ... }
}
```

## Testing

### Sandbox Testing
The integration is currently configured for PayPal Sandbox (testing environment).

**Test Credit Cards:**
- Visa: 4032039878215896
- Mastercard: 5425233430109903
- Amex: 374245455400126

**Test PayPal Account:**
You can create test accounts in your PayPal Developer Dashboard.

### Testing Steps
1. Start the development server: `npm run dev`
2. Navigate to `/trading` page
3. Click "Upgrade to Pro" button
4. Complete payment with test credentials
5. Verify success notification appears

## Production Deployment

### Before Going Live:

1. **Switch to Production API**
   - Update `PAYPAL_API_BASE` in API routes
   - Change from `api-m.sandbox.paypal.com` to `api-m.paypal.com`

2. **Get Production Credentials**
   - Create a production app in PayPal Developer Dashboard
   - Update environment variables with production credentials

3. **Update Return URLs**
   - Ensure `NEXT_PUBLIC_BASE_URL` points to your production domain

4. **Add Database Integration**
   - Store transaction details in your database
   - Update user subscription status
   - Send confirmation emails

5. **Security Considerations**
   - Never expose `PAYPAL_CLIENT_SECRET` to client
   - Validate all webhook signatures
   - Implement rate limiting on API routes

## Customization

### Change Payment Amount
Edit the amount in `TrustedBy.tsx`:
```tsx
<PaymentModal
  amount="49.99"  // Change this
  currency="USD"
/>
```

### Add Subscription Support
To implement recurring subscriptions:
1. Create a subscription plan in PayPal Dashboard
2. Update API routes to use subscription endpoints
3. Modify PayPal button to use subscription flow

### Customize Success Behavior
Edit `PaymentModal.tsx` `handleSuccess` function:
```tsx
const handleSuccess = (details: any) => {
  // Add your custom logic here
  // e.g., update user profile, send email, etc.
};
```

## Troubleshooting

### Common Issues

**Issue**: PayPal button doesn't appear
- Check if `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is set correctly
- Verify the environment variable is prefixed with `NEXT_PUBLIC_`
- Restart the development server after adding env variables

**Issue**: Payment fails to capture
- Check server logs for error messages
- Verify `PAYPAL_CLIENT_SECRET` is correct
- Ensure order ID is being passed correctly

**Issue**: Redirect URLs not working
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- Check that URLs are accessible

## Next Steps

### Recommended Enhancements

1. **Database Integration**
   - Create a `Subscription` model
   - Store payment transactions
   - Track user subscription status

2. **Email Notifications**
   - Send payment confirmation emails
   - Send receipt with transaction details

3. **Webhook Integration**
   - Set up PayPal webhooks for real-time updates
   - Handle subscription renewals/cancellations

4. **User Dashboard**
   - Show subscription status
   - Display payment history
   - Allow subscription management

5. **Analytics**
   - Track conversion rates
   - Monitor payment success/failure rates
   - Integrate with Mixpanel (already in project)

## Support

For PayPal API documentation:
- [PayPal Developer Docs](https://developer.paypal.com/docs/api/overview/)
- [PayPal React SDK](https://paypal.github.io/react-paypal-js/)

For issues with this integration:
- Check the console for error messages
- Review API route logs
- Contact PayPal support for payment-specific issues