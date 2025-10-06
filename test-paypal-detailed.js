// Detailed PayPal Credentials Test
// Run with: node test-paypal-detailed.js

require('dotenv').config({ path: '.env.local' });

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

console.log('='.repeat(60));
console.log('PayPal Credentials Detailed Test');
console.log('='.repeat(60));
console.log();

// Check if credentials exist
console.log('1. Checking if credentials are set...');
if (!clientId) {
  console.error('   ❌ NEXT_PUBLIC_PAYPAL_CLIENT_ID is missing');
  process.exit(1);
} else {
  console.log('   ✅ Client ID found');
}

if (!clientSecret) {
  console.error('   ❌ PAYPAL_CLIENT_SECRET is missing');
  process.exit(1);
} else {
  console.log('   ✅ Client Secret found');
}
console.log();

// Check credential format
console.log('2. Checking credential format...');
console.log(`   Client ID length: ${clientId.length} characters`);
console.log(`   Client ID starts with: ${clientId.substring(0, 3)}`);
console.log(`   Client ID ends with: ${clientId.substring(clientId.length - 3)}`);
console.log(`   Secret length: ${clientSecret.length} characters`);
console.log(`   Secret starts with: ${clientSecret.substring(0, 3)}`);
console.log();

// Check for common issues
console.log('3. Checking for common issues...');
const hasSpaces = clientId.includes(' ') || clientSecret.includes(' ');
const hasNewlines = clientId.includes('\n') || clientSecret.includes('\n');
const hasQuotes = clientId.includes('"') || clientSecret.includes('"') || 
                  clientId.includes("'") || clientSecret.includes("'");

if (hasSpaces) {
  console.log('   ⚠️  WARNING: Credentials contain spaces');
}
if (hasNewlines) {
  console.log('   ⚠️  WARNING: Credentials contain newlines');
}
if (hasQuotes) {
  console.log('   ⚠️  WARNING: Credentials contain quotes');
}
if (!hasSpaces && !hasNewlines && !hasQuotes) {
  console.log('   ✅ No formatting issues detected');
}
console.log();

// Test both sandbox and production endpoints
console.log('4. Testing PayPal API endpoints...');
console.log();

async function testEndpoint(apiBase, envName) {
  console.log(`   Testing ${envName} endpoint: ${apiBase}`);
  
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  
  try {
    const response = await fetch(`${apiBase}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(`   ❌ ${envName} authentication failed`);
      console.log(`   Status: ${response.status}`);
      console.log(`   Error: ${data.error}`);
      console.log(`   Description: ${data.error_description}`);
      return false;
    } else {
      console.log(`   ✅ ${envName} authentication successful!`);
      console.log(`   Access token received: ${data.access_token.substring(0, 30)}...`);
      console.log(`   Token type: ${data.token_type}`);
      console.log(`   Expires in: ${data.expires_in} seconds`);
      return true;
    }
  } catch (error) {
    console.log(`   ❌ Network error: ${error.message}`);
    return false;
  }
}

(async () => {
  const sandboxSuccess = await testEndpoint('https://api-m.sandbox.paypal.com', 'SANDBOX');
  console.log();
  const productionSuccess = await testEndpoint('https://api-m.paypal.com', 'PRODUCTION');
  
  console.log();
  console.log('='.repeat(60));
  console.log('Test Results Summary');
  console.log('='.repeat(60));
  
  if (sandboxSuccess) {
    console.log('✅ SANDBOX credentials are VALID');
    console.log('   You can use these for testing');
  } else {
    console.log('❌ SANDBOX credentials are INVALID');
    console.log('   These credentials do not work with sandbox environment');
  }
  
  if (productionSuccess) {
    console.log('✅ PRODUCTION credentials are VALID');
    console.log('   These are LIVE credentials (use carefully!)');
  } else {
    console.log('❌ PRODUCTION credentials are INVALID');
    console.log('   These credentials do not work with production environment');
  }
  
  console.log();
  console.log('='.repeat(60));
  console.log('Recommendations');
  console.log('='.repeat(60));
  
  if (!sandboxSuccess && !productionSuccess) {
    console.log('❌ Neither sandbox nor production credentials work');
    console.log();
    console.log('Possible reasons:');
    console.log('1. Credentials are incorrect or expired');
    console.log('2. App is disabled in PayPal Dashboard');
    console.log('3. Credentials were copied incorrectly (extra spaces/quotes)');
    console.log('4. PayPal account has restrictions');
    console.log();
    console.log('Next steps:');
    console.log('1. Go to https://developer.paypal.com/dashboard/');
    console.log('2. Check if your app is "Active"');
    console.log('3. Regenerate credentials (click "Show" then copy)');
    console.log('4. Update .env.local with new credentials');
    console.log('5. Run this test again');
  } else if (productionSuccess && !sandboxSuccess) {
    console.log('⚠️  You have LIVE credentials, but need SANDBOX credentials for testing');
    console.log();
    console.log('Next steps:');
    console.log('1. Go to https://developer.paypal.com/dashboard/');
    console.log('2. Switch to "Sandbox" tab (not "Live")');
    console.log('3. Create a new sandbox app or use existing one');
    console.log('4. Copy sandbox Client ID and Secret');
    console.log('5. Update .env.local with sandbox credentials');
    console.log('6. Run this test again');
  } else if (sandboxSuccess) {
    console.log('🎉 Everything looks good!');
    console.log();
    console.log('Next steps:');
    console.log('1. Restart your dev server: npm run dev');
    console.log('2. Click "Upgrade to Pro" button');
    console.log('3. Complete payment with test card:');
    console.log('   Card: 4032039878215896');
    console.log('   Expiry: 12/2025');
    console.log('   CVV: 123');
  }
  
  console.log();
})();