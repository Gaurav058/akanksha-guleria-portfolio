"use client";

import React from "react";

export default function InternationalExperience() {
  const corridorPoints = [
    {
      num: "01",
      title: "CROSS-MARKET ACQUISITION",
      desc: "Proven ability to prospect, onboard, and retain clients across differing regional and international financial hubs with tailored commercial terms.",
    },
    {
      num: "02",
      title: "COMMERCIAL ADAPTABILITY",
      desc: "Scaling sales operations from high-volume Indian regional trading markets to institutional Dubai brokerage and advisory environments.",
    },
    {
      num: "03",
      title: "GLOBAL TRADING CORRIDOR",
      desc: "Deep familiarity with international currency market hours, cross-market investor behavior, introducing broker channels, and partner networks.",
    },
  ];

  return (
    <section id="international" className="py-28 sm:py-36 border-b border-editorial bg-[#080a0b] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-editorial items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              06 — GEOGRAPHIC REACH
            </div>
            <h2 className="text-section-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase flex flex-wrap items-center gap-3">
              <span>INDIA</span>
              <span className="text-[#c5a880] font-light">───</span>
              <span>UAE</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#949a9e] font-normal leading-relaxed">
              Cross-market exposure. Global client acquisition. International sales leadership bridging
              emerging commercial centers with primary Middle Eastern financial corridors.
            </p>
          </div>
        </div>

        {/* Subtle, Architectural India → UAE Geographic Corridor (Zero 3D globes or plane animations) */}
        <div className="py-14 sm:py-20 border-b border-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Origin: India */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[#6e767c] uppercase">
                ORIGIN // COMMERCIAL FOUNDATION
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                INDIA
              </div>
              <div className="text-xs font-semibold text-[#c5a880] tracking-wider uppercase">
                Chandigarh • Regional Networks
              </div>
              <p className="text-xs sm:text-sm text-[#949a9e] leading-relaxed pt-1">
                Foundational sales discipline, direct foreign exchange trading execution, and early
                business development across regional financial networks.
              </p>
            </div>

            {/* Subtle Editorial Corridor Divider (Hairline with Minimalist Node) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center py-4 px-2">
              <div className="text-[10px] font-mono tracking-[0.24em] text-[#c5a880] uppercase mb-3">
                COMMERCIAL CORRIDOR
              </div>
              <div className="w-full flex items-center justify-center relative">
                <div className="w-full h-px bg-white/[0.15]" />
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#c5a880] ring-4 ring-[#080a0b]" />
              </div>
              <div className="text-[10px] text-[#6e767c] font-mono tracking-widest uppercase mt-3">
                CROSS-BORDER CAPITAL & CLIENT FLOW
              </div>
            </div>

            {/* Destination: Dubai, UAE */}
            <div className="lg:col-span-4 space-y-3 text-left lg:text-right">
              <div className="text-[10px] font-mono tracking-widest text-[#6e767c] uppercase">
                COMMERCIAL HUB // GCC
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                DUBAI, UAE
              </div>
              <div className="text-xs font-semibold text-[#c5a880] tracking-wider uppercase">
                Financial Markets & Brokerage
              </div>
              <p className="text-xs sm:text-sm text-[#949a9e] leading-relaxed pt-1">
                Head of Brokerage Solutions, Head of Sales Operations, and Senior Consultant
                driving international commercial expansion and brokerage governance.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Corridor Strategic Highlights — Minimal Editorial Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] pt-12 border-b border-editorial pb-16">
          {corridorPoints.map((pt) => (
            <div key={pt.num} className="py-6 md:py-0 md:px-8 first:pl-0 last:pr-0 space-y-3">
              <div className="text-[10px] font-mono text-[#c5a880] tracking-widest">
                {pt.num} • INTERNATIONAL STRATEGY
              </div>
              <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                {pt.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#949a9e] leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Sourcing Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6e767c] gap-3">
          <div className="text-[10px] font-mono tracking-wider uppercase">
            ESTABLISHED TRACK RECORD ACROSS GCC AND SOUTH ASIAN FINANCIAL CORRIDORS
          </div>
          <div className="text-[10px] font-mono tracking-wider">
            PRIMARY LOCATION: DUBAI, UNITED ARAB EMIRATES
          </div>
        </div>
      </div>
    </section>
  );
}

