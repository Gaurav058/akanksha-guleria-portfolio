"use client";

import React from "react";
import Image from "next/image";

export default function AboutThesis() {
  const expertisePillars = [
    {
      num: "01",
      title: "FINANCIAL MARKETS",
      detail: "Deep commercial understanding of currency pairs, market dynamics, liquidity behavior, and trading operations.",
    },
    {
      num: "02",
      title: "INVESTMENT SOLUTIONS",
      detail: "Consultative client onboarding matching market opportunities with investor profiles and institutional requirements.",
    },
    {
      num: "03",
      title: "BROKERAGE SOLUTIONS",
      detail: "Building introducer networks (IBs), broker partnerships, and high-retention commercial trading accounts.",
    },
    {
      num: "04",
      title: "INTERNATIONAL SALES",
      detail: "Cross-border client acquisition bridging high-growth regional financial hubs with the Dubai corridor.",
    },
  ];

  return (
    <section id="about" className="py-28 sm:py-36 border-b border-editorial bg-[#080a0b] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Split: Left Title & Statement, Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pb-20 border-b border-editorial">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              01 — ABOUT & PERSPECTIVE
            </div>

            <h2 className="text-section-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase leading-[1.05]">
              BEYOND THE
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">
                JOB TITLE.
              </span>
            </h2>

            <div className="pt-4 border-t border-editorial-subtle space-y-2">
              <blockquote className="text-xl sm:text-2xl font-serif italic text-[#f5f6f7] leading-snug">
                &ldquo;Sales is the engine. Relationships are the advantage.&rdquo;
              </blockquote>
              <p className="text-[10px] font-mono tracking-[0.2em] text-[#6e767c] uppercase">
                COMMERCIAL OPERATING PHILOSOPHY
              </p>
            </div>
          </div>

          {/* Right Column (7 Cols): Executive Narrative */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#949a9e] leading-relaxed font-normal">
            <p className="text-[#f5f6f7] font-medium text-lg sm:text-xl leading-relaxed">
              I am a commercial sales and business development professional with 8+ years of
              experience working across international financial services, investment solutions,
              brokerage, and high-growth trading environments.
            </p>

            <p className="leading-relaxed">
              My focus is not just transactional sales — it is the discipline of building scalable
              sales pipelines, mentoring high-performing sales teams, and establishing lasting client
              relationships based on trust and commercial consistency.
            </p>

            <p className="leading-relaxed text-xs sm:text-sm text-[#cbd5e1]">
              Operating primarily between Dubai, United Arab Emirates and India, with extensive
              exposure to cross-market client acquisition, institutional partner networks, and sales
              operations.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-[#6e767c]">
              <span className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                <span className="text-[#cbd5e1]">DUBAI, UAE</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                <span className="text-[#cbd5e1]">INDIA CORRIDOR</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                <span className="text-[#cbd5e1]">8+ YEARS TENURE</span>
              </span>
            </div>
          </div>
        </div>

        {/* 4 Editorial Domain Columns — Minimal Hairline Separation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] pt-12 border-b border-editorial pb-16">
          {expertisePillars.map((pillar) => (
            <div key={pillar.num} className="py-6 sm:py-0 sm:px-8 first:pl-0 last:pr-0 space-y-3">
              <div className="text-[10px] font-mono text-[#c5a880] tracking-widest">
                {pillar.num} • DOMAIN
              </div>
              <h3 className="text-sm font-bold tracking-[0.12em] text-[#f5f6f7] uppercase">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#949a9e] leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Architectural Environmental Strip */}
        <div className="mt-16 relative overflow-hidden border border-white/[0.08] aspect-[21/6] hidden md:block">
          <Image
            src="/images/dubai-financial-skyline.jpg"
            alt="Dubai Financial District skyline at twilight"
            fill
            sizes="100vw"
            className="object-cover filter contrast-[1.05] brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080a0b] via-[#080a0b]/40 to-[#080a0b] opacity-80 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-between px-10 text-xs text-[#cbd5e1]">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
              <span className="font-mono tracking-[0.2em] uppercase text-[11px] text-[#dfc298]">
                GLOBAL COMMERCIAL HUB • GCC
              </span>
            </div>
            <div className="font-serif italic text-base text-white">
              International exposure. Commercial discipline. Lasting relationships.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

