# Payment System Testing Guide

## 🧪 Quick Testing Checklist

### Prerequisites
- [ ] MongoDB is running and connected
- [ ] PayPal sandbox credentials are configured in `.env.local`
- [ ] Application is running (`npm run dev`)

---

## 1️⃣ Test User Info Collection

### Steps:
1. Navigate to a page with a payment button (e.g., courses page)
2. Click "Buy Now" or payment button
3. **Expected**: UserInfoModal should appear

### Verify:
- [ ] Modal displays with name and email fields
- [ ] Purchase summary shows correct item name and amount
- [ ] Name validation: Try entering less than 2 characters
- [ ] Email validation: Try entering invalid email format
- [ ] Submit button is disabled until valid data is entered
- [ ] Can close modal with X button or Escape key

### Test Cases:
```
✅ Valid Input:
Name: "John Doe"
Email: "john@example.com"

❌ Invalid Inputs:
Name: "J" (too short)
Email: "invalid-email" (invalid format)
Email: "test@" (incomplete)
```

---

## 2️⃣ Test Payment Modal Flow

### Steps:
1. After entering valid user info, click "Continue to Payment"
2. **Expected**: PaymentModal should appear with PayPal button

### Verify:
- [ ] User info is displayed in the modal
- [ ] Purchase summary shows correct details
- [ ] PayPal button loads successfully
- [ ] Amount and currency are correct
- [ ] Can close modal and return to user info

---

## 3️⃣ Test PayPal Integration (Sandbox)

### Setup PayPal Sandbox:
1. Go to https://developer.paypal.com/
2. Login to your developer account
3. Create a sandbox buyer account if you don't have one
4. Note the buyer credentials

### Steps:
1. Click the PayPal button in PaymentModal
2. **Expected**: PayPal popup/redirect opens
3. Login with sandbox buyer account
4. Complete the payment
5. **Expected**: Success message and redirect

### Verify:
- [ ] PayPal window opens correctly
- [ ] Can login with sandbox account
- [ ] Payment amount is correct
- [ ] Payment completes successfully
- [ ] Success callback is triggered
- [ ] User is redirected to success page

### Sandbox Test Accounts:
```
Use your PayPal sandbox buyer account:
Email: [your-sandbox-buyer@email.com]
Password: [your-sandbox-password]
```

---

## 4️⃣ Test Database Storage

### Steps:
1. Complete a test payment
2. Check MongoDB for the payment record

### Using MongoDB Compass:
```
1. Connect to your MongoDB instance
2. Navigate to your database
3. Open the "payments" collection
4. Find the latest record
```

### Using MongoDB Shell:
```bash
mongosh
use your_database_name
db.payments.find().sort({createdAt: -1}).limit(1).pretty()
```

### Verify Payment Record Contains:
- [ ] userName (from user info modal)
- [ ] userEmail (from user info modal)
- [ ] orderId (from PayPal)
- [ ] amount (correct amount)
- [ ] currency (correct currency)
- [ ] status ("completed")
- [ ] purchaseType (course/subscription/pro_plan)
- [ ] itemName (correct item name)
- [ ] itemId (if applicable)
- [ ] subscriptionStatus (if subscription/pro_plan)
- [ ] subscriptionStartDate (if subscription/pro_plan)
- [ ] subscriptionEndDate (if subscription/pro_plan, should be 1 month from start)
- [ ] paypalPayerEmail
- [ ] paypalPayerId
- [ ] ipAddress
- [ ] userAgent
- [ ] createdAt timestamp

---

## 5️⃣ Test Admin Panel

### Access Admin Panel:
```
URL: http://localhost:3000/SuperAdmin/payments
```

### Verify Navigation:
- [ ] "Payments" link appears in SuperAdmin sidebar
- [ ] Clicking link navigates to payments page
- [ ] DollarSign icon displays correctly

### Test Statistics Dashboard:
- [ ] Total Revenue displays correctly
- [ ] Total Transactions count is accurate
- [ ] Total Customers count is accurate
- [ ] Average Order Value is calculated correctly

### Test Payment Table:
- [ ] All payments are displayed
- [ ] Columns show correct data:
  - User Name
  - Email
  - Order ID
  - Amount
  - Status (with color badge)
  - Purchase Type
  - Item Name
  - Subscription Status
  - Date
- [ ] Status badges have correct colors:
  - Completed: Green
  - Pending: Yellow
  - Failed: Red
  - Refunded: Gray

### Test Filters:
- [ ] **Status Filter**: Select "Completed" - only completed payments show
- [ ] **Status Filter**: Select "Pending" - only pending payments show
- [ ] **Purchase Type Filter**: Select "Course" - only course purchases show
- [ ] **Purchase Type Filter**: Select "Subscription" - only subscriptions show
- [ ] **Purchase Type Filter**: Select "Pro Plan" - only pro plans show
- [ ] **Email Search**: Enter email - matching payments show
- [ ] **Clear Filters**: All payments return

### Test Pagination:
- [ ] If more than 50 payments, pagination appears
- [ ] Can navigate to next page
- [ ] Can navigate to previous page
- [ ] Current page is highlighted
- [ ] Total pages displayed correctly

### Test Export:
- [ ] Click "Export to CSV" button
- [ ] CSV file downloads
- [ ] Open CSV in Excel/Google Sheets
- [ ] Verify all data is present and formatted correctly

---

## 6️⃣ Test Different Purchase Types

### Test Course Purchase:
```typescript
// In CoursesGrid.tsx or similar
<PaymentModal
  amount="29.99"
  planName="React Masterclass"
  purchaseType="course"
  itemId="course_react_001"
/>
```

**Verify:**
- [ ] Payment record has purchaseType: "course"
- [ ] itemId is saved
- [ ] No subscription dates are set
- [ ] Admin panel shows as "Course" type

### Test Subscription Purchase:
```typescript
<PaymentModal
  amount="19.99"
  planName="Monthly Subscription"
  purchaseType="subscription"
/>
```

**Verify:**
- [ ] Payment record has purchaseType: "subscription"
- [ ] subscriptionStatus is "active"
- [ ] subscriptionStartDate is set to current date
- [ ] subscriptionEndDate is set to 1 month from start
- [ ] Admin panel shows subscription status and expiry

### Test Pro Plan Purchase:
```typescript
<PaymentModal
  amount="49.99"
  planName="Pro Plan"
  purchaseType="pro_plan"
/>
```

**Verify:**
- [ ] Payment record has purchaseType: "pro_plan"
- [ ] subscriptionStatus is "active"
- [ ] Subscription dates are set (1 month)
- [ ] Admin panel shows as "Pro Plan" type

---

## 7️⃣ Test Error Handling

### Test Network Errors:
1. Disconnect internet
2. Try to complete payment
3. **Expected**: Error message displays
4. **Verify**: Payment doesn't fail silently

### Test Invalid PayPal Credentials:
1. Temporarily set invalid PayPal client ID
2. Try to load payment modal
3. **Expected**: Error message about PayPal configuration

### Test Database Connection Failure:
1. Stop MongoDB
2. Complete a PayPal payment
3. **Expected**: 
   - Payment still completes successfully
   - Error logged in server console
   - User doesn't see error (payment success is priority)

### Test Form Validation:
- [ ] Try submitting empty name
- [ ] Try submitting name with 1 character
- [ ] Try submitting invalid email
- [ ] Try submitting empty email
- [ ] Verify error messages display

---

## 8️⃣ Test API Endpoints

### Test GET /api/payments
```bash
# Get all payments
curl http://localhost:3000/api/payments

# Get with filters
curl "http://localhost:3000/api/payments?status=completed&purchaseType=course"

# Get with pagination
curl "http://localhost:3000/api/payments?page=2&limit=10"

# Search by email
curl "http://localhost:3000/api/payments?email=john@example.com"
```

**Verify:**
- [ ] Returns payments array
- [ ] Returns pagination object
- [ ] Filters work correctly
- [ ] Search works correctly

### Test GET /api/payments/stats
```bash
curl http://localhost:3000/api/payments/stats
```

**Verify:**
- [ ] Returns statistics object
- [ ] Revenue calculations are correct
- [ ] Transaction counts are accurate
- [ ] Recent transactions are included
- [ ] Monthly revenue data is present

### Test POST /api/payments
```bash
curl -X POST http://localhost:3000/api/payments \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "Test User",
    "userEmail": "test@example.com",
    "amount": 29.99,
    "currency": "USD",
    "purchaseType": "course",
    "itemName": "Test Course",
    "status": "completed"
  }'
```

**Verify:**
- [ ] Payment is created
- [ ] Returns created payment object
- [ ] Payment appears in admin panel

---

## 9️⃣ Test Mobile Responsiveness

### Test on Mobile Devices:
- [ ] UserInfoModal displays correctly on mobile
- [ ] PaymentModal displays correctly on mobile
- [ ] PayPal button is clickable on mobile
- [ ] Admin panel table scrolls horizontally on mobile
- [ ] Filters work on mobile
- [ ] Statistics cards stack properly on mobile

### Test Different Screen Sizes:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

---

## 🔟 Test Security & Privacy

### Verify Data Protection:
- [ ] PayPal client secret is not exposed in client-side code
- [ ] User data is transmitted securely (HTTPS in production)
- [ ] Sensitive data is not logged in browser console
- [ ] Admin panel requires authentication (if implemented)

### Verify Data Accuracy:
- [ ] IP address is captured correctly
- [ ] User agent is captured correctly
- [ ] Timestamps are in correct timezone
- [ ] Currency symbols display correctly

---

## 🎯 Performance Testing

### Test Load Times:
- [ ] UserInfoModal opens quickly (<500ms)
- [ ] PaymentModal opens quickly (<500ms)
- [ ] PayPal button loads in reasonable time (<2s)
- [ ] Admin panel loads with 100+ payments (<3s)
- [ ] Filters apply quickly (<1s)
- [ ] CSV export completes quickly (<5s for 1000 records)

### Test with Large Dataset:
1. Create 100+ test payments
2. Load admin panel
3. **Verify**: Pagination works smoothly
4. **Verify**: Filters don't slow down significantly

---

## 📊 Test Data Examples

### Sample Test Payments:

```javascript
// Course Purchase
{
  userName: "Alice Johnson",
  userEmail: "alice@example.com",
  amount: 29.99,
  currency: "USD",
  purchaseType: "course",
  itemName: "React Masterclass",
  itemId: "course_001"
}

// Subscription
{
  userName: "Bob Smith",
  userEmail: "bob@example.com",
  amount: 19.99,
  currency: "USD",
  purchaseType: "subscription",
  itemName: "Monthly Subscription"
}

// Pro Plan
{
  userName: "Carol White",
  userEmail: "carol@example.com",
  amount: 49.99,
  currency: "USD",
  purchaseType: "pro_plan",
  itemName: "Pro Plan"
}
```

---

## 🐛 Common Issues & Solutions

### Issue: PayPal button not loading
**Solution**: 
- Check NEXT_PUBLIC_PAYPAL_CLIENT_ID is set
- Verify PayPal SDK is loaded
- Check browser console for errors

### Issue: Payment not saving to database
**Solution**:
- Check MongoDB connection
- Verify Payment model is imported
- Check server logs for errors

### Issue: Admin panel not showing payments
**Solution**:
- Check API endpoint is accessible
- Verify MongoDB has data
- Check browser network tab

### Issue: User info modal not appearing
**Solution**:
- Check if UserInfoModal is imported
- Verify localStorage is available
- Check for JavaScript errors

---

## ✅ Final Checklist

Before deploying to production:

- [ ] All tests pass
- [ ] PayPal sandbox testing successful
- [ ] Database records are accurate
- [ ] Admin panel displays correctly
- [ ] All filters and search work
- [ ] CSV export works
- [ ] Mobile responsive
- [ ] Error handling works
- [ ] Security measures in place
- [ ] Performance is acceptable
- [ ] Switch to PayPal production credentials
- [ ] Set up MongoDB production database
- [ ] Configure production environment variables
- [ ] Test with real PayPal account (small amount)
- [ ] Set up monitoring and logging
- [ ] Configure email notifications (if implemented)

---

## 📝 Test Results Template

```
Date: _______________
Tester: _______________

✅ User Info Collection: PASS / FAIL
✅ Payment Modal Flow: PASS / FAIL
✅ PayPal Integration: PASS / FAIL
✅ Database Storage: PASS / FAIL
✅ Admin Panel: PASS / FAIL
✅ Purchase Types: PASS / FAIL
✅ Error Handling: PASS / FAIL
✅ API Endpoints: PASS / FAIL
✅ Mobile Responsive: PASS / FAIL
✅ Security: PASS / FAIL

Notes:
_________________________________
_________________________________
_________________________________

Issues Found:
_________________________________
_________________________________
_________________________________
```

---

## 🚀 Ready for Production?

Once all tests pass:
1. Update environment variables for production
2. Switch PayPal to production mode
3. Test with small real payment
4. Monitor first few transactions closely
5. Set up alerts for failed payments
6. Document any issues for future reference

---

**Happy Testing! 🎉**