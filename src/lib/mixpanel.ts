import mixpanel from "mixpanel-browser";

// Helper functions for tracking events throughout your app
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    mixpanel.track(eventName, properties);
  }
};

export const identifyUser = (userId: string, traits?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    mixpanel.identify(userId);
    if (traits) {
      mixpanel.people.set(traits);
    }
  }
};

export const trackPageView = (pageName: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    mixpanel.track("Page View", {
      page: pageName,
      ...properties,
    });
  }
};

export const resetUser = () => {
  if (typeof window !== "undefined") {
    mixpanel.reset();
  }
};