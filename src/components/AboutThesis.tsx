"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutThesis() {
  const expertisePillars = [
    {
      title: "FINANCIAL MARKETS",
      detail: "Deep commercial understanding of currency pairs, market dynamics, and trading operations.",
    },
    {
      title: "INVESTMENT SOLUTIONS",
      detail: "Consultative client onboarding matching market opportunities with investor needs.",
    },
    {
      title: "BROKERAGE",
      detail: "Building introducer networks, broker partnerships, and high-retention client accounts.",
    },
    {
      title: "INTERNATIONAL SALES",
      detail: "Cross-border client acquisition bridging high-growth regional hubs with Dubai.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#080a0b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Pre-title */}
        <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold mb-3">
          01 — ABOUT & PERSPECTIVE
        </div>

        {/* Two-Column Human Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          {/* Left Column: Large Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.08]">
              BEYOND THE
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">JOB TITLE.</span>
            </h2>

            <div className="pt-2">
              <div className="text-xl sm:text-2xl font-serif italic text-[#e5e7eb] leading-snug">
                &ldquo;Sales is the engine. Relationships are the advantage.&rdquo;
              </div>
              <p className="text-xs text-[#9ca3af] mt-2 font-mono tracking-wider uppercase">
                COMMERCIAL OPERATING PHILOSOPHY
              </p>
            </div>
          </div>

          {/* Right Column: Shorter, Human Biography */}
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#9ca3af] leading-relaxed font-normal">
            <p className="text-[#e5e7eb] font-medium text-base sm:text-lg leading-relaxed">
              I am a commercial sales and business development professional with 8+ years of
              experience working across international financial services, investment solutions,
              brokerage, and high-growth trading environments.
            </p>

            <p>
              My focus is not just transactional sales — it is the discipline of building scalable
              sales pipelines, mentoring high-performing sales teams, and establishing lasting client
              relationships based on trust and commercial consistency.
            </p>

            <p className="text-xs text-[#6b7280]">
              Operating primarily between Dubai, United Arab Emirates and India, with extensive
              exposure to cross-market client acquisition and sales operations.
            </p>
          </div>
        </div>

        {/* 4 Expertise Pillars Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/[0.08]">
          {expertisePillars.map((pillar, idx) => (
            <div key={idx} className="space-y-2 border-l border-[#c5a880]/40 pl-4 py-1">
              <div className="text-xs font-mono text-[#c5a880] tracking-widest">
                0{idx + 1} // DOMAIN
              </div>
              <h3 className="text-sm font-bold tracking-[0.12em] text-white uppercase">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Architectural Environmental Supporting Strip */}
        <div className="mt-16 relative rounded-lg overflow-hidden border border-white/[0.08] aspect-[21/6] hidden sm:block">
          <Image
            src="/images/dubai-financial-skyline.jpg"
            alt="Dubai Financial District at twilight"
            fill
            sizes="100vw"
            className="object-cover filter contrast-[1.05] brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080a0b] via-transparent to-[#080a0b] opacity-80" />
          <div className="absolute inset-0 flex items-center justify-between px-8 text-xs text-[#d1d5db]">
            <span className="font-mono tracking-widest uppercase text-[#c5a880]">
              INTERNATIONAL COMMERCIAL EXPERIENCE
            </span>
            <span className="font-serif italic text-sm text-white">
              International exposure. Commercial mindset. Lasting relationships.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
