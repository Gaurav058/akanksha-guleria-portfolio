"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Download, Mail } from "lucide-react";
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
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

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
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll locking and ESC key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
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
            ? "py-3 bg-[#080a0d]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <Link
            href="#hero"
            className="flex flex-col group cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-base sm:text-lg font-bold tracking-[0.2em] text-white group-hover:text-emerald-400 transition-colors uppercase">
              AKANKSHA GULERIA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#8e959e] uppercase font-medium">
              Dubai • Financial Markets
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold tracking-[0.18em] transition-all duration-200 py-1 ${
                    isActive
                      ? "text-emerald-400 border-b border-emerald-400"
                      : "text-[#a0aec0] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenProfile}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold tracking-wider text-[#cbd5e1] hover:text-white border border-white/15 hover:border-white/30 rounded transition-all bg-white/[0.03] hover:bg-white/[0.08]"
              title="Download verified executive profile"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>DOWNLOAD PROFILE</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold tracking-widest text-[#080a0d] bg-emerald-400 hover:bg-emerald-300 rounded shadow-md shadow-emerald-500/10 transition-all hover:shadow-emerald-500/20 active:scale-[0.98]"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={onOpenProfile}
              className="md:hidden p-2 text-gray-300 hover:text-white border border-white/10 rounded bg-white/[0.04]"
              aria-label="Download executive profile"
            >
              <Download className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white border border-white/15 rounded bg-white/[0.04] transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-400"
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Viewport Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#080a0d] flex flex-col justify-between p-6 sm:p-8 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <div className="text-base font-bold tracking-[0.2em] text-white uppercase">
                AKANKSHA GULERIA
              </div>
              <div className="text-[10px] tracking-[0.2em] text-[#8e959e] uppercase">
                Executive Identity • Dubai, UAE
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded border border-white/20 text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-400"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 py-8 overflow-y-auto" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-2 text-lg sm:text-xl font-bold tracking-[0.15em] text-gray-200 hover:text-emerald-400 border-b border-white/[0.06] transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#8e959e] font-mono group-hover:text-emerald-400 transition-colors">
                  0{idx + 1}
                </span>
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
              className="w-full py-3.5 px-4 text-xs font-bold tracking-widest text-white border border-white/20 rounded flex items-center justify-center space-x-2 bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>DOWNLOAD EXECUTIVE PROFILE</span>
            </button>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 text-xs font-semibold tracking-wider text-center text-gray-300 border border-white/10 rounded flex items-center justify-center space-x-1.5 hover:bg-white/[0.05]"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>LINKEDIN</span>
              </a>
              <a
                href="mailto:akankshaguleria4@gmail.com"
                className="py-3 px-3 text-xs font-bold tracking-wider text-center text-[#080a0d] bg-emerald-400 hover:bg-emerald-300 rounded flex items-center justify-center space-x-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL DIRECT</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
