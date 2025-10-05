"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

export default function Mixpanel() {
  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || "d657824c10f1c60e1383f3d11cc746a3";
    
    // Initialize Mixpanel
    mixpanel.init(token, {
      debug: process.env.NODE_ENV === "development",
      track_pageview: true,
      persistence: "localStorage",
      record_sessions_percent: 1, // records 1% of all sessions
      record_heatmap_data: true,
    });

    // Track initial page view
    mixpanel.track("Page View", {
      page: window.location.pathname,
      title: document.title,
    });
  }, []);

  return null;
}