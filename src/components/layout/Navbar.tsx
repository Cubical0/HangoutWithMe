"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

export function NavbarDemo() {
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
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About Us",
      link: "/about",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Add padding to body to account for fixed navbar */}
      <div >
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton 
                variant="primary" 
                href="https://discord.com/invite/hangoutcodex"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </NavbarButton>
            </div>
          </NavBody>
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>
            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </Link>
              ))}

            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarDemo;