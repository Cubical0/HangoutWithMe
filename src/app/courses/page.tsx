'use client';

import { Suspense } from 'react';
import CoursesHero from '@/components/sections/courses/CoursesHero';
import CoursesGrid from '@/components/sections/courses/CoursesGrid';
import LearningPath from '@/components/sections/courses/LearningPath';
import ContactUs from '@/components/sections/home/ContactUs';
import PaymentNotification from '@/components/sections/courses/PaymentNotification';

export default function Courses() {
  return (
    <div className="min-h-screen bg-black">
      {/* Payment Notification */}
      <Suspense fallback={null}>
        <PaymentNotification />
      </Suspense>

      <CoursesHero />
      <CoursesGrid />
      <LearningPath />
      <ContactUs />
    </div>
  );
}