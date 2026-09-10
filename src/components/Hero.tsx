"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenProfile: () => void;
}

export default function Hero({ onOpenProfile }: HeroProps) {
  const domainPillars = [
    "Financial Markets",
    "Investment Solutions",
    "Brokerage",
    "International Sales",
    "Team Leadership",
    "Revenue Growth",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-12 border-b border-editorial bg-[#080a0b] overflow-hidden"
    >
      {/* Architectural Background Pattern */}
      <div className="absolute inset-0 bg-grid-editorial opacity-70 pointer-events-none" />

      {/* Main 12-Column Editorial Grid */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (55% on Desktop): Authoritative Editorial Headline & Content */}
          <div className="lg:col-span-7 space-y-7 text-left order-1">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.24em] text-[#c5a880] uppercase">
                SENIOR SALES & BUSINESS DEVELOPMENT
              </span>
            </div>

            {/* Authoritative Fluid Headline */}
            <h1 className="text-hero-headline font-extrabold text-[#f5f6f7] tracking-tight">
              BUILDING MARKETS.
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">
                BUILDING RELATIONSHIPS.
              </span>
              <br />
              <span>DRIVING GROWTH.</span>
            </h1>

            {/* Concise Supporting Narrative */}
            <p className="text-sm sm:text-base lg:text-lg text-[#949a9e] leading-relaxed max-w-2xl font-normal">
              Senior Sales & Business Development professional working across financial markets,
              investment solutions, brokerage and international client acquisition, with a track
              record spanning sales execution, relationship management, team leadership and revenue
              growth.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#experience"
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-bold tracking-[0.14em] text-[#080a0b] bg-[#c5a880] hover:bg-[#dfc298] rounded transition-all active:scale-[0.98] shadow-lg shadow-black/40"
              >
                <span>VIEW EXPERIENCE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-[#f5f6f7] hover:text-white border border-white/15 hover:border-white/35 rounded bg-white/[0.02] hover:bg-white/[0.05] transition-all"
              >
                <span>CONTACT AKANKSHA</span>
              </a>

              <button
                onClick={onOpenProfile}
                className="inline-flex items-center space-x-1.5 px-4 py-3.5 text-xs font-medium tracking-wider text-[#949a9e] hover:text-[#dfc298] transition-colors"
              >
                <span>EXECUTIVE DOSSIER</span>
              </button>
            </div>

            {/* Commercial Focus Areas — Understated Inline Editorial Elements */}
            <div className="pt-6 border-t border-editorial-subtle">
              <div className="text-[10px] font-mono tracking-[0.24em] text-[#6e767c] uppercase mb-3">
                COMMERCIAL FOCUS AREAS
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#cbd5e1]">
                {domainPillars.map((pillar, idx) => (
                  <span key={idx} className="flex items-center space-x-2">
                    <span className="text-[#c5a880] text-[9px]">•</span>
                    <span className="font-medium tracking-wide">{pillar}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (45% on Desktop): Visually Dominant, Authentic Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center w-full order-2">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-none aspect-[3/4] overflow-hidden rounded-sm group">
              {/* Authentic Executive Portrait of Akanksha Guleria */}
              <Image
                src="/images/akanksha-guleria-executive.jpg"
                alt="Akanksha Guleria — Senior Sales & Business Development professional"
                fill
                priority
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 560px"
                className="object-cover object-top filter contrast-[1.02] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* Seamless Editorial Edge Blending Into Dark Canvas */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0b] via-[#080a0b]/15 to-transparent opacity-90 pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#080a0b]/50 to-transparent hidden lg:block pointer-events-none" />

              {/* Editorial Caption — Clear, Restrained Typography */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs z-10">
                <div>
                  <div className="text-xs font-bold tracking-[0.18em] text-white uppercase">
                    AKANKSHA GULERIA
                  </div>
                  <div className="text-[11px] text-[#dfc298] font-medium tracking-wide mt-0.5">
                    Senior Sales & Business Development
                  </div>
                </div>

                <div className="text-[10px] font-mono text-[#949a9e] tracking-widest uppercase bg-[#080a0b]/85 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                  DUBAI, UAE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Status Line */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full mt-10 pt-5 border-t border-editorial-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6e767c] gap-3">
        <div className="flex items-center space-x-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="tracking-widest uppercase text-[10px] font-mono">
            DUBAI FINANCIAL CORRIDOR • CROSS-MARKET COMMERCIAL EXECUTION
          </span>
        </div>

        <a
          href="#impact"
          className="flex items-center space-x-2 text-[#949a9e] hover:text-[#dfc298] transition-colors tracking-widest uppercase font-semibold text-[10px] font-mono"
        >
          <span>EXPLORE PERFORMANCE METRICS</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#c5a880]" />
        </a>
      </div>
    </section>
  );
}

