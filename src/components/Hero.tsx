"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

interface HeroProps {
  onOpenProfile: () => void;
}

export default function Hero({ onOpenProfile }: HeroProps) {
  const strategicPillars = [
    "FINANCIAL MARKETS",
    "INVESTMENT SOLUTIONS",
    "BROKERAGE",
    "INTERNATIONAL CLIENTS",
    "TEAM LEADERSHIP",
    "REVENUE GROWTH",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-white/[0.08]"
    >
      {/* Background Architectural Grid & Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-[600px] h-[300px] bg-emerald-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Positioning & Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Overline Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded border border-white/10 bg-white/[0.02]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#cbd5e1] uppercase">
                SENIOR SALES & BUSINESS DEVELOPMENT
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              BUILDING MARKETS.
              <br />
              <span className="text-silver-gradient">BUILDING RELATIONSHIPS.</span>
              <br />
              <span className="text-emerald-400">DRIVING GROWTH.</span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-xl font-normal">
              Senior Sales & Business Development professional working across financial markets,
              investment solutions, brokerage and international client acquisition, with a track
              record spanning sales execution, relationship management, team leadership and revenue
              growth.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center space-x-2 px-5 py-3 text-xs font-bold tracking-widest text-[#080a0d] bg-emerald-400 hover:bg-emerald-300 rounded shadow-lg shadow-emerald-500/10 transition-all hover:shadow-emerald-500/25 active:scale-[0.98]"
              >
                <span>EXPLORE MY JOURNEY</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-3 text-xs font-semibold tracking-wider text-[#e2e8f0] hover:text-white border border-white/15 hover:border-white/30 rounded bg-white/[0.02] hover:bg-white/[0.06] transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>CONNECT ON LINKEDIN</span>
              </a>

              <button
                onClick={onOpenProfile}
                className="inline-flex items-center space-x-2 px-4 py-3 text-xs font-semibold tracking-wider text-[#94a3b8] hover:text-white border border-dashed border-white/15 hover:border-emerald-500/40 rounded transition-all"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>DOWNLOAD PROFILE</span>
              </button>
            </div>
          </div>

          {/* Center/Right Column: Portrait & Strategic Focus Visual Composition */}
          <div className="lg:col-span-6 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-6 relative">
            {/* Portrait Frame */}
            <div className="relative group w-full max-w-[320px] sm:max-w-[350px]">
              {/* Outer decorative architectural lines */}
              <div className="absolute -inset-1.5 border border-emerald-500/20 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />

              <div className="relative rounded-lg overflow-hidden bg-[#0e1217] border border-white/10 shadow-2xl">
                <Image
                  src="/images/akanksha-guleria-real.jpg"
                  alt="Akanksha Guleria — Financial Markets & International Business Development"
                  width={420}
                  height={555}
                  priority
                  className="w-full h-auto object-cover grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Subtle vignette gradient over bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a0d] via-transparent to-transparent opacity-85" />

                {/* Bottom Card Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-xs font-bold tracking-widest text-white uppercase">
                    AKANKSHA GULERIA
                  </div>
                  <div className="text-[11px] text-emerald-400 font-medium tracking-wide">
                    Senior Sales & Commercial Leadership
                  </div>
                  <div className="text-[10px] text-[#94a3b8] mt-0.5 flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Dubai, United Arab Emirates</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Pillars Rail (Matching Blueprint Layout) */}
            <div className="w-full md:w-auto flex flex-col space-y-2 border-l-2 border-emerald-500/30 pl-4 py-2">
              <div className="text-[10px] tracking-[0.25em] text-[#8e959e] uppercase font-bold mb-1">
                DOMAIN PILLARS
              </div>
              {strategicPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="text-xs font-semibold tracking-[0.14em] text-[#cbd5e1] hover:text-emerald-400 transition-colors flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8e959e]">
        <div className="flex items-center space-x-2">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span className="tracking-wide">Dubai, United Arab Emirates</span>
        </div>

        <a
          href="#impact"
          className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors tracking-widest uppercase font-semibold text-[11px]"
        >
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-emerald-400" />
        </a>
      </div>
    </section>
  );
}
