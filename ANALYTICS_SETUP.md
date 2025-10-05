# Analytics Setup Guide

This document explains how to use the analytics integrations in HangoutCodex.

## 🎯 Integrated Analytics

### 1. **Google Analytics 4 (GA4)**
- **Purpose**: Track page views, user behavior, conversions
- **Status**: ✅ Integrated
- **Component**: `/src/components/analytics/GoogleAnalytics.tsx`

### 2. **Microsoft Clarity**
- **Purpose**: Session recordings, heatmaps, user insights
- **Status**: ✅ Integrated
- **Component**: `/src/components/analytics/Clarity.tsx`
- **Project ID**: `tlm4mjjmcx`

### 3. **Mixpanel**
- **Purpose**: Advanced event tracking, user analytics, funnels
- **Status**: ✅ Integrated
- **Component**: `/src/components/analytics/Mixpanel.tsx`
- **Token**: `d657824c10f1c60e1383f3d11cc746a3`

---

## 📋 Environment Variables

Add these to your `.env.local` file:

```bash
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=tlm4mjjmcx
NEXT_PUBLIC_MIXPANEL_TOKEN=d657824c10f1c60e1383f3d11cc746a3
```

---

## 🔧 Using Mixpanel for Custom Events

### Import the helper functions:

```typescript
import { trackEvent, identifyUser, trackPageView } from '@/lib/mixpanel';
```

### Track custom events:

```typescript
// Track a button click
trackEvent('Button Clicked', {
  button_name: 'Join Discord',
  page: '/trading',
});

// Track a form submission
trackEvent('Form Submitted', {
  form_name: 'Contact Form',
  success: true,
});

// Track a purchase
trackEvent('Course Purchased', {
  course_name: 'Dropshipping Mastery',
  price: 99,
  currency: 'USD',
});
```

### Identify users:

```typescript
// When user logs in
identifyUser('user-123', {
  email: 'user@example.com',
  name: 'John Doe',
  plan: 'premium',
});
```

### Track page views manually:

```typescript
trackPageView('/courses', {
  category: 'E-commerce',
  referrer: document.referrer,
});
```

---

## 📊 What's Being Tracked Automatically

### Google Analytics:
- ✅ Page views
- ✅ User sessions
- ✅ Traffic sources
- ✅ Device types
- ✅ Geographic location

### Microsoft Clarity:
- ✅ Session recordings (1% of sessions)
- ✅ Heatmaps
- ✅ Click tracking
- ✅ Scroll depth
- ✅ Rage clicks

### Mixpanel:
- ✅ Page views (automatic)
- ✅ User sessions
- ✅ Custom events (when you add them)
- ✅ User properties
- ✅ Funnel analysis

---

## 🎨 Example: Track Trading Signal Clicks

```typescript
// In your trading component
import { trackEvent } from '@/lib/mixpanel';

function handleSignalClick(signal: string) {
  trackEvent('Trading Signal Clicked', {
    signal_type: signal,
    timestamp: new Date().toISOString(),
    user_plan: 'premium', // or 'free'
  });
  
  // Your existing logic...
}
```

---

## 🎨 Example: Track Course Enrollment

```typescript
// In your course enrollment flow
import { trackEvent } from '@/lib/mixpanel';

async function enrollInCourse(courseId: string, courseName: string) {
  try {
    // Your enrollment logic...
    
    trackEvent('Course Enrolled', {
      course_id: courseId,
      course_name: courseName,
      enrollment_date: new Date().toISOString(),
    });
  } catch (error) {
    trackEvent('Course Enrollment Failed', {
      course_id: courseId,
      error: error.message,
    });
  }
}
```

---

## 🎨 Example: Track Fundraiser Connections

```typescript
// In your fundraiser component
import { trackEvent } from '@/lib/mixpanel';

function connectWithInvestor(investorId: string) {
  trackEvent('Investor Connection Requested', {
    investor_id: investorId,
    startup_stage: 'seed', // or 'series-a', etc.
  });
  
  // Your connection logic...
}
```

---

## 🔍 Viewing Your Analytics

### Google Analytics:
1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your property
3. View real-time data, reports, and insights

### Microsoft Clarity:
1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Select project: `tlm4mjjmcx`
3. Watch session recordings and view heatmaps

### Mixpanel:
1. Go to [mixpanel.com](https://mixpanel.com)
2. Login to your project
3. View events, funnels, and user analytics

---

## 🚀 Best Practices

1. **Track Key Actions**: Focus on tracking actions that matter for your business
2. **Use Descriptive Names**: Make event names clear and consistent
3. **Add Context**: Include relevant properties with each event
4. **Respect Privacy**: Don't track sensitive personal information
5. **Test Events**: Use Mixpanel's debug mode in development

---

## 🐛 Debugging

### Check if analytics are loading:

```javascript
// In browser console
console.log('GA loaded:', typeof gtag !== 'undefined');
console.log('Clarity loaded:', typeof clarity !== 'undefined');
console.log('Mixpanel loaded:', typeof mixpanel !== 'undefined');
```

### Enable Mixpanel debug mode:

In `.env.local`, Mixpanel automatically enables debug mode in development:

```bash
NODE_ENV=development
```

---

## 📈 Recommended Events to Track

### Trading Platform:
- `Signal Viewed`
- `Signal Copied`
- `Premium Upgrade Clicked`
- `Free Trial Started`

### E-commerce Courses:
- `Course Viewed`
- `Course Enrolled`
- `Lesson Completed`
- `Certificate Downloaded`

### Fundraiser:
- `Investor Profile Viewed`
- `Connection Requested`
- `Pitch Deck Uploaded`
- `Meeting Scheduled`

### Community:
- `Discord Join Clicked`
- `Community Post Created`
- `Message Sent`

---

## 🔒 Privacy & GDPR

All analytics tools are configured to respect user privacy:

- ✅ No personally identifiable information (PII) is tracked by default
- ✅ IP addresses are anonymized in Google Analytics
- ✅ Users can opt-out via browser settings
- ✅ Session recordings exclude sensitive form fields

Make sure to update your Privacy Policy to mention these analytics tools.

---

## 📞 Support

If you need help with analytics:
- Google Analytics: [support.google.com/analytics](https://support.google.com/analytics)
- Microsoft Clarity: [clarity.microsoft.com/support](https://clarity.microsoft.com/support)
- Mixpanel: [help.mixpanel.com](https://help.mixpanel.com)