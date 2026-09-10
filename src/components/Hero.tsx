"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, MapPin } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

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
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 overflow-hidden border-b border-white/[0.07] bg-[#080a0b]"
    >
      {/* Subtle Editorial Background Lines */}
      <div className="absolute inset-0 bg-grid-editorial opacity-60 pointer-events-none" />

      {/* Main 50 / 50 Executive Composition */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left 50% Column: Headline & Editorial Statement */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#c5a880] uppercase">
                SENIOR SALES & BUSINESS DEVELOPMENT
              </span>
            </div>

            {/* Substantially Larger Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.04]">
              BUILDING MARKETS.
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">
                BUILDING RELATIONSHIPS.
              </span>
              <br />
              <span>DRIVING GROWTH.</span>
            </h1>

            {/* Concise Supporting Statement */}
            <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed max-w-xl font-normal">
              Senior Sales & Business Development professional working across financial markets,
              investment solutions, brokerage and international client acquisition, with a track
              record spanning sales execution, relationship management, team leadership and revenue
              growth.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-bold tracking-[0.16em] text-[#080a0b] bg-[#c5a880] hover:bg-[#dfc298] rounded transition-all active:scale-[0.98] shadow-lg shadow-black/40"
              >
                <span>EXPLORE MY JOURNEY</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#e5e7eb] hover:text-white border border-white/15 hover:border-white/30 rounded bg-white/[0.02] hover:bg-white/[0.05] transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>CONNECT ON LINKEDIN</span>
              </a>

              <button
                onClick={onOpenProfile}
                className="inline-flex items-center space-x-1.5 px-4 py-3.5 text-xs font-semibold tracking-wider text-[#9ca3af] hover:text-white transition-colors"
              >
                <span>EXECUTIVE PROFILE</span>
              </button>
            </div>

            {/* Reduced Domain Pillars: Subtle Editorial List */}
            <div className="pt-4 border-t border-white/[0.07]">
              <div className="text-[10px] font-mono tracking-[0.24em] text-[#6b7280] uppercase mb-2.5">
                COMMERCIAL FOCUS AREAS
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#cbd5e1]">
                {domainPillars.map((pillar, idx) => (
                  <span key={idx} className="flex items-center space-x-2">
                    <span className="text-[#c5a880] text-[10px]">•</span>
                    <span className="font-medium tracking-wide">{pillar}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right 50% Column: Visually Dominant Portrait Composition */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-end w-full">
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[560px] aspect-[4/5] overflow-hidden rounded-lg">
              {/* Reference Portrait of Akanksha Guleria */}
              <Image
                src="/images/akanksha-guleria-executive.webp"
                alt="Akanksha Guleria — Senior Sales & Business Development professional"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                className="object-cover object-top filter contrast-[1.03] brightness-[0.98]"
              />

              {/* Seamless Vignette & Dark Atmosphere Blending Image into Page */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0b] via-transparent to-transparent opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080a0b]/40 via-transparent to-transparent hidden lg:block" />

              {/* Minimal Overlaid Caption Tag */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs">
                <div>
                  <div className="text-xs font-bold tracking-[0.16em] text-white uppercase">
                    AKANKSHA GULERIA
                  </div>
                  <div className="text-[11px] text-[#c5a880] font-medium tracking-wide">
                    Senior Sales & Business Development
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 text-[11px] text-[#9ca3af] bg-[#080a0b]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                  <MapPin className="w-3 h-3 text-[#c5a880]" />
                  <span>Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Row */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-[#6b7280]">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="tracking-wider uppercase text-[10px] font-mono">
            DUBAI FINANCIAL CORRIDOR • INTERNATIONAL MARKETS
          </span>
        </div>

        <a
          href="#impact"
          className="flex items-center space-x-1.5 hover:text-[#c5a880] transition-colors tracking-widest uppercase font-semibold text-[10px]"
        >
          <span>EXPLORE PERFORMANCE</span>
          <ArrowDown className="w-3 h-3 text-[#c5a880]" />
        </a>
      </div>
    </section>
  );
}
