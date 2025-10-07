"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

export function NavbarDemo() {
  const pathname = usePathname();
  const navItems = [
    {
      name: "Trading",
      link: "/trading",
    },
    {
      name: "Ecom Launchpad",
      link: "/courses",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Fundraiser",
      link: "/fundraiser",
    },
  
    {
      name: "About Us",
      link: "/about",
    },
    //   {
    //   name: "Blog",
    //   link: "/blog",
    // },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Check if a nav item is active
  const isActive = (link: string) => {
    if (link === "/" && pathname === "/") return true;
    if (link !== "/" && pathname.startsWith(link)) return true;
    return false;
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-white font-extrabold text-lg hover:opacity-80 transition-opacity"
          >
            <span>HangoutCodex</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => {
              const active = isActive(item.link);
              return (
                <Link
                  key={`nav-${idx}`}
                  href={item.link}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active 
                      ? "text-white" 
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {/* Active state background */}
                  {active && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover state background */}
                  {hoveredIndex === idx && !active && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://discord.com/invite/hangoutcodex"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Join Discord
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu2 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, idx) => {
                const active = isActive(item.link);
                return (
                  <Link
                    key={`mobile-nav-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      active
                        ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <a
                href="https://discord.com/invite/hangoutcodex"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 mt-4 bg-white text-black text-sm font-bold text-center rounded-lg hover:bg-white/90 transition-colors"
              >
                Join Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavbarDemo;