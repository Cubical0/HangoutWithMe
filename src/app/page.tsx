'use client';

import Hero from '@/componets/sections/Hero';
import { useEffect, useState } from 'react';

export default function Home() {
 


  return (
    <div>
      <Hero/>
      {/* Additional content to test scrolling */}
      <div className="h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Smooth Scrolling with Lenis</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience buttery smooth scrolling throughout the entire application. 
            Lenis provides enhanced scroll performance and natural easing.
          </p>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-b from-gray-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Enhanced User Experience</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The scroll-based animations now work seamlessly with Lenis, 
            providing a more refined and professional feel to your application.
          </p>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-b from-purple-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Perfect Integration</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            All your existing animations and scroll effects continue to work, 
            but now with the added benefit of Lenis smooth scrolling.
          </p>
        </div>
      </div>
   </div>
  );
}
