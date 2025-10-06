// Test PayPal Credentials
// Run with: node test-paypal-credentials.js

require('dotenv').config({ path: '.env.local' });

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

console.log('Testing PayPal Credentials...\n');

if (!clientId) {
  console.error('❌ NEXT_PUBLIC_PAYPAL_CLIENT_ID is not set');
} else {
  console.log('✅ Client ID found:', clientId.substring(0, 20) + '...');
}

if (!clientSecret) {
  console.error('❌ PAYPAL_CLIENT_SECRET is not set');
} else {
  console.log('✅ Client Secret found:', clientSecret.substring(0, 20) + '...');
}

if (clientId && clientSecret) {
  console.log('\n🔄 Testing PayPal API connection...\n');

  const PAYPAL_API_BASE = 'https://api-m.sandbox.paypal.com';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          console.error('❌ PayPal API Error:', error);
          console.error('\nPossible issues:');
          console.error('1. Credentials are incorrect');
          console.error('2. App is not configured for sandbox');
          console.error('3. App permissions are not set correctly');
          process.exit(1);
        });
      }
      return response.json();
    })
    .then(data => {
      if (data && data.access_token) {
        console.log('✅ Successfully authenticated with PayPal!');
        console.log('✅ Access token received:', data.access_token.substring(0, 30) + '...');
        console.log('\n🎉 PayPal integration is ready to use!');
      }
    })
    .catch(error => {
      console.error('❌ Network error:', error.message);
      console.error('\nPlease check your internet connection.');
    });
}