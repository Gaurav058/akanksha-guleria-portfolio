"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

interface NavbarProps {
  onOpenProfile: () => void;
}

export default function Navbar({ onOpenProfile }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = [
        "hero",
        "about",
        "experience",
        "impact",
        "markets",
        "leadership",
        "international",
        "business-point",
        "expertise",
        "education",
        "contact",
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom >= 260) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Leadership", href: "#leadership", id: "leadership" },
    { name: "Expertise", href: "#expertise", id: "expertise" },
    { name: "Business Point", href: "#business-point", id: "business-point" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* Executive Header - Strict z-[1000] */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? "py-3 sm:py-3.5 bg-[#080a0b]/95 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/50"
            : "py-5 sm:py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Left: Typographic Identity */}
          <Link
            href="#hero"
            className="flex flex-col group cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-sm sm:text-base font-extrabold tracking-[0.22em] text-white uppercase group-hover:text-[#dfc298] transition-colors">
              AKANKSHA GULERIA
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.24em] text-[#949a9e] uppercase mt-0.5">
              SALES & BUSINESS DEVELOPMENT
            </span>
          </Link>

          {/* Right: Executive Horizontal Links & Action */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-medium tracking-[0.08em] transition-colors py-1 ${
                      isActive
                        ? "text-[#dfc298] border-b border-[#c5a880]"
                        : "text-[#949a9e] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="h-4 w-px bg-white/10" />

            {/* Direct Connect & Socials */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#949a9e] hover:text-white hover:bg-white/[0.04] rounded transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#c5a880]" />
              </a>

              <button
                onClick={onOpenProfile}
                className="text-xs font-medium tracking-wider text-[#949a9e] hover:text-white px-3 py-1.5 border border-white/10 hover:border-white/25 rounded transition-all"
              >
                Dossier
              </button>

              <a
                href="#contact"
                className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold tracking-[0.12em] text-[#080a0b] bg-[#c5a880] hover:bg-[#dfc298] rounded transition-all active:scale-[0.98]"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Trigger (Accessible, always above page content) */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-white rounded border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition-colors focus:outline-none"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Stacking Architecture: Backdrop Overlay (z-[1100]) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[1100] bg-black/75 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Stacking Architecture: Drawer Panel (z-[1200]) */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[1200] w-full sm:w-[380px] bg-[#0d1112] border-l border-white/10 flex flex-col justify-between p-6 sm:p-8 lg:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <div className="text-sm font-bold tracking-[0.2em] text-white uppercase">
              AKANKSHA GULERIA
            </div>
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#c5a880] uppercase mt-0.5">
              Dubai, UAE • Financial Markets
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded border border-white/15 text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 py-8 overflow-y-auto" aria-label="Mobile Navigation">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-base font-semibold tracking-wide text-[#f5f6f7] hover:text-[#dfc298] border-b border-white/[0.04] transition-colors"
            >
              <span>{link.name}</span>
              <span className="text-xs text-[#6e767c] font-mono">0{idx + 1}</span>
            </a>
          ))}
        </nav>

        {/* Drawer Footer Actions */}
        <div className="space-y-3 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenProfile();
            }}
            className="w-full py-3 px-4 text-xs font-bold tracking-wider text-white border border-white/20 rounded flex items-center justify-center space-x-2 hover:bg-white/[0.06] transition-colors"
          >
            <span>VIEW EXECUTIVE DOSSIER</span>
          </button>

          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-3 text-xs font-semibold tracking-wider text-center text-[#cbd5e1] border border-white/10 rounded flex items-center justify-center space-x-1.5 hover:bg-white/[0.05]"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>LINKEDIN</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 text-xs font-bold tracking-wider text-center text-[#080a0b] bg-[#c5a880] hover:bg-[#dfc298] rounded flex items-center justify-center space-x-1.5"
            >
              <span>CONNECT</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

