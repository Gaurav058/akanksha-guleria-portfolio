"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
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
      setIsScrolled(window.scrollY > 30);

      const sections = [
        "hero",
        "about",
        "experience",
        "impact",
        "expertise",
        "leadership",
        "business-point",
        "contact",
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 240) {
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
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "IMPACT", href: "#impact" },
    { name: "EXPERTISE", href: "#expertise" },
    { name: "LEADERSHIP", href: "#leadership" },
    { name: "BUSINESS POINT", href: "#business-point" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#080a0b]/92 backdrop-blur-md border-b border-white/[0.07] shadow-xl shadow-black/40"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Identity */}
          <Link
            href="#hero"
            className="flex items-center space-x-2 group cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-sm sm:text-base font-bold tracking-[0.22em] text-white uppercase group-hover:text-[#c5a880] transition-colors">
              AKANKSHA GULERIA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-semibold tracking-[0.2em] transition-colors py-1 ${
                    isActive
                      ? "text-[#c5a880] border-b border-[#c5a880]"
                      : "text-[#9ca3af] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenProfile}
              className="text-[11px] font-semibold tracking-[0.16em] text-[#9ca3af] hover:text-white px-3 py-1.5 border border-white/10 hover:border-white/25 rounded transition-all"
            >
              PROFILE
            </button>
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-[11px] font-bold tracking-[0.18em] text-[#080a0b] bg-[#c5a880] hover:bg-[#dfc298] rounded transition-all active:scale-[0.98]"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#d1d5db] hover:text-white rounded border border-white/10 bg-white/[0.03] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Viewport Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#080a0b] flex flex-col justify-between p-6 sm:p-10 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <div className="text-base font-bold tracking-[0.2em] text-white uppercase">
                AKANKSHA GULERIA
              </div>
              <div className="text-[10px] tracking-[0.2em] text-[#9ca3af] uppercase mt-0.5">
                Senior Sales & Business Development • Dubai, UAE
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded border border-white/15 text-white hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col space-y-5 py-6 overflow-y-auto" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-lg sm:text-xl font-bold tracking-[0.16em] text-gray-200 hover:text-[#c5a880] border-b border-white/[0.05] transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#6b7280] font-mono">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProfile();
              }}
              className="w-full py-3.5 px-4 text-xs font-bold tracking-widest text-white border border-white/20 rounded flex items-center justify-center space-x-2 hover:bg-white/[0.06]"
            >
              <Download className="w-4 h-4 text-[#c5a880]" />
              <span>DOWNLOAD EXECUTIVE PROFILE</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 text-xs font-semibold tracking-wider text-center text-gray-300 border border-white/10 rounded flex items-center justify-center space-x-1.5 hover:bg-white/[0.05]"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>LINKEDIN</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 text-xs font-bold tracking-wider text-center text-[#080a0b] bg-[#c5a880] hover:bg-[#dfc298] rounded flex items-center justify-center space-x-1.5"
              >
                <span>GET IN TOUCH</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
