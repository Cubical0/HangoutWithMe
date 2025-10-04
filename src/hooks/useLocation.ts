'use client';

import { useState, useEffect } from 'react';

interface LocationData {
  country: string;
  city: string;
  region: string;
  timezone: string;
  loading: boolean;
  error: string | null;
}

export const useLocation = () => {
  const [location, setLocation] = useState<LocationData>({
    country: '',
    city: '',
    region: '',
    timezone: '',
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Try to get location from IP
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          const data = await response.json();
          setLocation({
            country: data.country_name || 'Unknown',
            city: data.city || 'Unknown',
            region: data.region || 'Unknown',
            timezone: data.timezone || 'UTC',
            loading: false,
            error: null,
          });
        } else {
          throw new Error('Failed to fetch location');
        }
  } catch {
        setLocation({
          country: 'Global',
          city: 'Worldwide',
          region: 'International',
          timezone: 'UTC',
          loading: false,
          error: 'Could not determine location',
        });
      }
    };

    fetchLocation();
  }, []);

  return location;
};