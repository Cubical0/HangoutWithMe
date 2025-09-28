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

export function NavbarDemo() {
  const navItems = [
    {
      name: "Trading hub",
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
      link: "/services",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Add padding to body to account for fixed navbar */}
      <div className="pt-20">
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
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}

            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarDemo;