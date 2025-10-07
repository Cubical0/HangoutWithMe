'use client';

import { Cloud, Package, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import PaymentModal from '@/components/ui/PaymentModal';

const courses = [
{
  id: 1,
  title: "SaaS Mastery: Beginner to Advanced",
  description: "A complete roadmap to building, launching, and scaling a successful SaaS product - from idea to revenue.",
  price: "$149",
  priceValue: "149.00", // Numeric value for PayPal
  level: "Beginner to Advanced",
  icon: Cloud,
  features: [
    'Complete SaaS development roadmap',
    'Product-market fit strategies',
    'Scaling & growth techniques',
    'Revenue optimization methods',
    'Lifetime access to course materials',
  ]
},
  {
    id: 2,
    title: "Dropshipping Mastery",
    description: "Build a profitable dropshipping business with proven strategies.",
    price: "$199",
    priceValue: "199.00", // Numeric value for PayPal
    level: "Intermediate",
    icon: Package,
    features: [
      'Product research & selection',
      'Supplier sourcing strategies',
      'Store setup & optimization',
      'Marketing & advertising tactics',
      'Lifetime access to course materials',
    ]
  },
  {
    id: 3,
    title: "Dropservicing Empire",
    description: "Scale service-based businesses using dropservicing methods.",
    price: "$179",
    priceValue: "179.00", // Numeric value for PayPal
    level: "Intermediate",
    icon: Users,
    features: [
      'Service business fundamentals',
      'Team building & outsourcing',
      'Client acquisition strategies',
      'Scaling & automation systems',
      'Lifetime access to course materials',
    ]
  },
  {
    id: 4,
    title: "Affiliate Marketing Pro",
    description: "Master affiliate marketing and create passive income streams.",
    price: "$129",
    priceValue: "129.00", // Numeric value for PayPal
    level: "Beginner",
    icon: TrendingUp,
    features: [
      'Affiliate program selection',
      'Content creation strategies',
      'Traffic generation methods',
      'Conversion optimization',
      'Lifetime access to course materials',
    ]
  }
];

export default function CoursesGrid() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<{
    title: string;
    priceValue: string;
    features: string[];
  } | null>(null);

  const handleEnrollClick = (course: typeof courses[0]) => {
    setSelectedCourse({
      title: course.title,
      priceValue: course.priceValue,
      features: course.features,
    });
    setIsPaymentModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Master E-commerce & Digital Business
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Learn from industry experts with our comprehensive courses designed to help you build and scale profitable online businesses
        </p>
      </div>
      <div className="text-center mb-8">

      </div>

      {/* Courses Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {courses.map((course) => (
          <div key={course.id} className="backdrop-blur-lg bg-white/[0.08] border border-white/20 rounded-3xl p-8 hover:bg-white/[0.12] transition-all duration-500 hover:scale-[1.02] hover:border-white/30 shadow-xl hover:shadow-2xl relative overflow-hidden group">
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Icon and level */}
              <div className="flex justify-between items-center mb-6">
                <course.icon className="w-8 h-8 text-purple-400 drop-shadow-lg" />

              </div>
              
              {/* Title */}
              <h3 className="text-white font-bold mb-4 text-xl leading-tight">{course.title}</h3>
              
              {/* Description */}
              <p className="text-white/80 text-sm mb-6 line-clamp-3 leading-relaxed">{course.description}</p>
              
              {/* Price and button */}
              <div className="flex justify-between items-center">
                <span className="text-purple-300 font-bold text-xl drop-shadow-lg">{course.price}</span>
                <button 
                  onClick={() => handleEnrollClick(course)}
                  className="bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white text-sm px-5 py-2.5 rounded-xl transition-all duration-300 border border-white/30 hover:border-white/50 font-medium hover:shadow-lg"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handleCloseModal}
        planName={selectedCourse?.title || 'Course'}
        amount={selectedCourse?.priceValue || '0.00'}
        currency="USD"
        features={selectedCourse?.features}
        redirectUrl="/courses?payment=success"
        billingType="One-time Payment"
      />
    </div>
  );
}