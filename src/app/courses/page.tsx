'use client';

import CoursesHero from '@/components/sections/courses/CoursesHero';
import CoursesGrid from '@/components/sections/courses/CoursesGrid';
import LearningPath from '@/components/sections/courses/LearningPath';
import ContactUs from '@/components/sections/home/ContactUs';

export default function Courses() {
  return (
    <div className="min-h-screen bg-black">
      <CoursesHero />
      <CoursesGrid />
      <LearningPath />
      <ContactUs />
    </div>
  );
}