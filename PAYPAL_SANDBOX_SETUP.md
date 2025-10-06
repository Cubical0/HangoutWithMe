# 🔧 PayPal Sandbox Setup Guide

## ❌ Current Issue
Your sandbox credentials are returning: `"invalid_client"` - `"Client Authentication failed"`

This means the app needs proper configuration in PayPal Developer Dashboard.

---

## ✅ Step-by-Step Fix

### Step 1: Access PayPal Developer Dashboard
1. Go to: **https://developer.paypal.com/dashboard/**
2. Log in with your PayPal account
3. Click **"Apps & Credentials"** in the top menu

### Step 2: Verify You're in Sandbox Mode
- Make sure you're on the **"Sandbox"** tab (NOT "Live")
- You should see your sandbox app listed

### Step 3: Check Your Sandbox App
1. Click on your app name to open settings
2. Verify these settings:

#### Required Settings:
- **App Status:** Should be **"Active"** (not disabled)
- **App Type:** Should be **"Merchant"** or **"Platform"**

#### Features (Must be enabled):
- ✅ **Accept payments**
- ✅ **Checkout**
- ✅ **Vault** (optional but recommended)

#### Return URLs:
Add these URLs:
```
http://localhost:3000/trading
http://localhost:3000/trading?payment=success
http://localhost:3000/trading?payment=cancelled
```

### Step 4: Regenerate Credentials (If Needed)
If the app looks correct but still fails:

1. In your app settings, find **"Secret"**
2. Click **"Show"** to reveal it
3. Copy both:
   - **Client ID** (the long string starting with `A...`)
   - **Secret** (click "Show" first)
4. If there's a **"Generate New Secret"** button, click it to get fresh credentials

### Step 5: Update .env.local
Replace with the NEW credentials:

```bash
# PayPal Configuration (Sandbox for testing)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=YOUR_NEW_CLIENT_ID
PAYPAL_CLIENT_SECRET=YOUR_NEW_SECRET
```

### Step 6: Test Again
```bash
node test-paypal-credentials.js
```

You should see:
```
✅ Successfully authenticated with PayPal!
🎉 PayPal integration is ready to use!
```

---

## 🔍 Common Issues & Solutions

### Issue 1: "App is disabled"
**Solution:** In app settings, toggle the app status to "Active"

### Issue 2: "Wrong environment"
**Solution:** Make sure you're using credentials from the **Sandbox** tab, not Live

### Issue 3: "Permissions not set"
**Solution:** Enable "Accept payments" and "Checkout" features in app settings

### Issue 4: "Old/expired credentials"
**Solution:** Generate new secret key in app settings

### Issue 5: "App not found"
**Solution:** Create a new sandbox app:
1. Go to Sandbox tab
2. Click "Create App"
3. Name it "Hangout Finance Test"
4. Select "Merchant" type
5. Click "Create App"

---

## 🆕 Creating a Fresh Sandbox App (Recommended)

If nothing works, create a completely new app:

### 1. Create New App
1. Go to: https://developer.paypal.com/dashboard/applications/sandbox
2. Click **"Create App"** button
3. Fill in:
   - **App Name:** `Hangout Finance Sandbox`
   - **App Type:** Select **"Merchant"**
4. Click **"Create App"**

### 2. Configure the New App
After creation, you'll see the app settings page:

1. **Copy credentials:**
   - Client ID (visible immediately)
   - Secret (click "Show" to reveal)

2. **Enable features:**
   - ✅ Accept payments
   - ✅ Checkout

3. **Add Return URLs:**
   ```
   http://localhost:3000/trading
   ```

4. **Save changes**

### 3. Update Your .env.local
```bash
NEXT_PUBLIC_PAYPAL_CLIENT_ID=<new_client_id>
PAYPAL_CLIENT_SECRET=<new_secret>
```

### 4. Test
```bash
node test-paypal-credentials.js
```

---

## 📞 Still Not Working?

If you've tried everything above and it still fails:

### Option A: Check PayPal Account Status
- Make sure your PayPal account is verified
- Check if there are any restrictions on your account

### Option B: Try Different Browser
- Clear cache and cookies
- Try in incognito/private mode
- Use a different browser

### Option C: Contact PayPal Support
- Go to: https://developer.paypal.com/support/
- Describe the issue: "Cannot authenticate sandbox app credentials"
- Provide your app name and client ID

---

## 🎯 What Should Work

Once properly configured, you should be able to:

1. ✅ Test credentials with `node test-paypal-credentials.js`
2. ✅ Click "Upgrade to Pro" button
3. ✅ See PayPal checkout window
4. ✅ Complete payment with test card
5. ✅ See success message

---

## 🧪 Test Cards (Once Working)

Use these in PayPal sandbox:
- **Visa:** 4032039878215896
- **Mastercard:** 5425233430109903
- **Expiry:** Any future date (e.g., 12/2025)
- **CVV:** Any 3 digits (e.g., 123)

---

## 🚀 Moving to Production

Once sandbox testing works:

1. **Get Live Credentials:**
   - Switch to "Live" tab in PayPal Dashboard
   - Create a live app (same process)
   - Copy live Client ID and Secret

2. **Update .env.local:**
   ```bash
   # Uncomment these and comment out sandbox credentials
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=<live_client_id>
   PAYPAL_CLIENT_SECRET=<live_secret>
   ```

3. **Update API Base URL:**
   The code automatically switches to production URL when `NODE_ENV=production`

4. **Test with real money:**
   Use small amounts first ($0.01) to verify everything works

---

## 📋 Checklist

Before testing, verify:
- [ ] Logged into PayPal Developer Dashboard
- [ ] On "Sandbox" tab (not Live)
- [ ] App exists and is "Active"
- [ ] "Accept payments" feature is enabled
- [ ] "Checkout" feature is enabled
- [ ] Return URLs are configured
- [ ] Copied BOTH Client ID and Secret
- [ ] Updated .env.local with new credentials
- [ ] Ran test script: `node test-paypal-credentials.js`
- [ ] Restarted dev server: `npm run dev`

---

Need help? Check the credentials one more time in the dashboard and make sure you're copying them exactly (no extra spaces or characters).