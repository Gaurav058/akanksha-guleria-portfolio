"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function InternationalExperience() {
  const corridorPoints = [
    {
      title: "CROSS-MARKET ACQUISITION",
      desc: "Proven ability to prospect, onboard, and retain clients across differing regional and international financial hubs.",
    },
    {
      title: "COMMERCIAL ADAPTABILITY",
      desc: "Scaling sales operations from high-volume Indian regional trading markets to institutional Dubai brokerage environments.",
    },
    {
      title: "GLOBAL TRADING CORRIDOR",
      desc: "Deep familiarity with international currency trading hours, cross-market client behavior, and partner networks.",
    },
  ];

  return (
    <section id="international" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#080a0b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.07] gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold mb-2">
              06 — GEOGRAPHIC REACH
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase flex items-center space-x-3">
              <span>INDIA</span>
              <span className="text-[#c5a880] font-light">↔</span>
              <span>UAE</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9ca3af] max-w-md font-normal leading-relaxed">
            Cross-market exposure. Global client acquisition. International sales. Bridging emerging
            commercial centers with primary Middle Eastern financial corridors.
          </p>
        </div>

        {/* Sophisticated Route Corridor Graphic */}
        <div className="p-8 sm:p-12 rounded-lg border border-white/[0.08] bg-[#0d1112] relative overflow-hidden mb-12">
          {/* Subtle World Grid Motif */}
          <div className="absolute inset-0 bg-grid-editorial opacity-40 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Origin: India */}
            <div className="md:col-span-4 space-y-2">
              <div className="text-[10px] font-mono tracking-widest text-[#6b7280] uppercase">
                ORIGIN // COMMERCIAL FOUNDATION
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">INDIA</div>
              <div className="text-xs font-medium text-[#c5a880] tracking-wider uppercase">
                Chandigarh • Bengaluru
              </div>
              <p className="text-xs text-[#9ca3af] leading-relaxed pt-2">
                Foundational sales discipline, active FX trading execution, and business development
                across regional financial networks.
              </p>
            </div>

            {/* Connecting Corridor Line */}
            <div className="md:col-span-4 flex flex-col items-center justify-center py-4">
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#c5a880] uppercase mb-2">
                COMMERCIAL CORRIDOR
              </div>
              <div className="w-full flex items-center justify-center relative my-2">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c5a880]/60 to-transparent" />
                <div className="absolute p-1.5 rounded-full bg-[#080a0b] border border-[#c5a880] text-[#c5a880]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-[10px] text-[#6b7280] font-mono tracking-widest uppercase mt-2">
                International Client Flow
              </div>
            </div>

            {/* Destination: Dubai, UAE */}
            <div className="md:col-span-4 space-y-2 text-left md:text-right">
              <div className="text-[10px] font-mono tracking-widest text-[#6b7280] uppercase">
                COMMERCIAL HUB // GCC
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">DUBAI, UAE</div>
              <div className="text-xs font-medium text-[#c5a880] tracking-wider uppercase">
                Financial Markets & Brokerage
              </div>
              <p className="text-xs text-[#9ca3af] leading-relaxed pt-2">
                Head of Brokerage Solutions, Head of Sales Operations, and Senior Consultant
                driving international commercial expansion.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Corridor Strategic Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corridorPoints.map((pt, idx) => (
            <div key={idx} className="border-t border-white/[0.08] pt-5 space-y-2">
              <div className="text-xs font-mono text-[#c5a880] tracking-widest">
                0{idx + 1} // STRATEGY
              </div>
              <h3 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                {pt.title}
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
