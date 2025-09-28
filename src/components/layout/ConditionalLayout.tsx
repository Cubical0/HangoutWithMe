'use client';

import { usePathname } from 'next/navigation';
import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Check if current path is SuperAdmin related
  const isAdminPage = pathname?.startsWith('/SuperAdmin');
  
  // For admin pages, render without navbar and footer
  if (isAdminPage) {
    return (
      <div className="bg-gray-50 text-gray-900 min-h-screen">
        {children}
      </div>
    );
  }
  
  // For regular pages, render with navbar and footer
  return (
    <LenisProvider>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </LenisProvider>
  );
}