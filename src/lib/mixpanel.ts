import mixpanel from "mixpanel-browser";

// Type for Mixpanel properties
type MixpanelProperties = Record<string, string | number | boolean | null | undefined>;

// Helper functions for tracking events throughout your app
export const trackEvent = (eventName: string, properties?: MixpanelProperties) => {
  if (typeof window !== "undefined") {
    mixpanel.track(eventName, properties);
  }
};

export const identifyUser = (userId: string, traits?: MixpanelProperties) => {
  if (typeof window !== "undefined") {
    mixpanel.identify(userId);
    if (traits) {
      mixpanel.people.set(traits);
    }
  }
};

export const trackPageView = (pageName: string, properties?: MixpanelProperties) => {
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