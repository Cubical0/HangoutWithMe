# 🎯 PayPal Dynamic Pricing Guide

## ✅ What's Been Implemented

Your PayPal integration now supports **fully dynamic pricing** for both:
1. **Trading Pro Plan** (in TrustedBy component)
2. **Course Enrollments** (in CoursesGrid component)

---

## 💰 How to Change Prices

### For Trading Pro Plan

**File:** `src/components/sections/trading/TrustedBy.tsx`

```tsx
// Find this line (around line 50):
<PaymentModal
  isOpen={isPaymentModalOpen}
  onClose={() => setIsPaymentModalOpen(false)}
  planName="Pro Plan"
  amount="29.99"  // ← Change this to any amount (e.g., "49.99")
  currency="USD"
/>
```

**Example: Change to $49.99**
```tsx
amount="49.99"
```

---

### For Course Prices

**File:** `src/components/sections/courses/CoursesGrid.tsx`

Each course has two price fields:
- `price`: Display price (shown on card)
- `priceValue`: Actual PayPal charge amount

```tsx
const courses = [
  {
    id: 1,
    title: "SaaS Mastery: Beginner to Advanced",
    price: "$149",        // ← Display price (what users see)
    priceValue: "149.00", // ← PayPal charge (must be numeric)
    // ... other fields
  },
  {
    id: 2,
    title: "Dropshipping Mastery",
    price: "$199",        // ← Change both to update price
    priceValue: "199.00",
    // ... other fields
  },
  // ... more courses
];
```

**Example: Change Dropshipping course to $249**
```tsx
{
  id: 2,
  title: "Dropshipping Mastery",
  price: "$249",        // Display price
  priceValue: "249.00", // PayPal charge
  // ...
}
```

---

## 🎨 Current Prices

### Trading Pro Plan
- **Current:** $29.99/month
- **Location:** TrustedBy component
- **Type:** Monthly subscription

### Courses
1. **SaaS Mastery:** $149.00 (one-time)
2. **Dropshipping Mastery:** $199.00 (one-time)
3. **Dropservicing Empire:** $179.00 (one-time)
4. **Affiliate Marketing Pro:** $129.00 (one-time)

---

## 🔧 How It Works

### 1. PaymentModal Component
The `PaymentModal` component accepts these props:

```tsx
interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;        // Product/plan name
  amount?: string;          // Price (e.g., "49.99")
  currency?: string;        // Currency code (e.g., "USD")
  features?: string[];      // List of features
  redirectUrl?: string;     // Where to redirect after payment
  billingType?: string;     // "Monthly", "One-time Payment", etc.
}
```

### 2. Dynamic Amount Flow

```
User clicks "Enroll Now"
    ↓
handleEnrollClick() captures course data
    ↓
Opens PaymentModal with course.priceValue
    ↓
PayPalButton receives amount prop
    ↓
API creates order with exact amount
    ↓
PayPal charges the specified amount
```

### 3. API Integration

**File:** `src/app/api/paypal/create-order/route.ts`

The API automatically uses the amount passed from the frontend:

```tsx
const orderData = {
  intent: 'CAPTURE',
  purchase_units: [
    {
      amount: {
        currency_code: currency,  // From request
        value: amount,            // From request (dynamic!)
      },
      description: 'Product description',
    },
  ],
};
```

---

## 📝 Examples: Common Price Changes

### Example 1: Change Pro Plan to $49.99

**File:** `src/components/sections/trading/TrustedBy.tsx`

```tsx
<PaymentModal
  isOpen={isPaymentModalOpen}
  onClose={() => setIsPaymentModalOpen(false)}
  planName="Pro Plan"
  amount="49.99"  // Changed from 29.99
  currency="USD"
/>
```

### Example 2: Add a New Course at $299

**File:** `src/components/sections/courses/CoursesGrid.tsx`

```tsx
const courses = [
  // ... existing courses
  {
    id: 5,
    title: "E-commerce Empire",
    description: "Build a complete e-commerce business from scratch.",
    price: "$299",
    priceValue: "299.00",
    level: "Advanced",
    icon: TrendingUp,
    features: [
      'Complete store setup',
      'Product sourcing strategies',
      'Marketing automation',
      'Scaling techniques',
      'Lifetime access to course materials',
    ]
  }
];
```

### Example 3: Offer a Discount

**Original Price:** $199
**Discounted Price:** $149

```tsx
{
  id: 2,
  title: "Dropshipping Mastery",
  price: "$149",        // Show discounted price
  priceValue: "149.00", // Charge discounted amount
  level: "Intermediate",
  // You can add a badge or note about the discount
}
```

---

## 🌍 Multi-Currency Support

To add support for different currencies:

### Option 1: Per-Product Currency

```tsx
<PaymentModal
  amount="99.99"
  currency="EUR"  // Change to EUR, GBP, CAD, etc.
/>
```

### Option 2: Currency Selector

Add a currency selector in your component:

```tsx
const [currency, setCurrency] = useState('USD');

// In your modal:
<PaymentModal
  amount={convertPrice(course.priceValue, currency)}
  currency={currency}
/>
```

---

## 💡 Pro Tips

### 1. Price Formatting
- **Display price:** Can include symbols (`$149`, `€99`)
- **PayPal price:** Must be numeric only (`"149.00"`, `"99.00"`)

### 2. Decimal Places
Always use 2 decimal places for PayPal:
- ✅ `"49.99"`
- ✅ `"100.00"`
- ❌ `"49.9"`
- ❌ `"100"`

### 3. Testing Different Prices
You can test any amount in sandbox mode:
- Minimum: $0.01
- Maximum: $10,000.00 (sandbox limit)

### 4. Price Validation
The PayPal API will reject:
- Negative amounts
- Amounts with more than 2 decimal places
- Non-numeric values
- Amounts over the limit

---

## 🧪 Testing Checklist

After changing prices:

- [ ] Update both `price` and `priceValue` (for courses)
- [ ] Check the modal displays correct amount
- [ ] Test PayPal checkout shows correct amount
- [ ] Verify payment confirmation email shows correct amount
- [ ] Test with sandbox test cards
- [ ] Check success notification appears
- [ ] Verify redirect works correctly

---

## 🚀 Quick Reference

| Component | File | Current Price | Change Location |
|-----------|------|---------------|-----------------|
| Pro Plan | `TrustedBy.tsx` | $29.99 | Line ~50 in `<PaymentModal>` |
| SaaS Course | `CoursesGrid.tsx` | $149.00 | Line ~14-15 in `courses` array |
| Dropshipping | `CoursesGrid.tsx` | $199.00 | Line ~30-31 in `courses` array |
| Dropservicing | `CoursesGrid.tsx` | $179.00 | Line ~46-47 in `courses` array |
| Affiliate | `CoursesGrid.tsx` | $129.00 | Line ~62-63 in `courses` array |

---

## 📞 Need Help?

If you need to:
- Add subscription billing (recurring payments)
- Implement discount codes
- Add tax calculations
- Support multiple currencies dynamically
- Create payment plans (installments)

Let me know and I can help implement these features!

---

## ✨ Summary

✅ **Prices are fully dynamic** - change them anytime in the code
✅ **No API changes needed** - everything flows through automatically
✅ **Works for any amount** - from $0.01 to $10,000+
✅ **Multi-currency ready** - just change the currency prop
✅ **Sandbox tested** - safe to test with any amount

**To change a price:** Just update the `amount` or `priceValue` in the component! 🎉