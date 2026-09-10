"use client";

import React from "react";
import { MapPin } from "lucide-react";

export default function CareerArc() {
  const careerTimeline = [
    {
      period: "JUL 2026 – PRESENT",
      company: "AETHORA TECHNOLOGIES",
      role: "SENIOR CONSULTANT",
      location: "Dubai, United Arab Emirates",
      type: "Contract • On-site",
      summary: "Commercial expansion consulting, client acquisition strategy, and cross-border financial technology advisory.",
      isCurrent: true,
    },
    {
      period: "JAN 2025 – PRESENT",
      company: "FX GLOBAL CONSULTANT",
      role: "HEAD OF SALES OPERATIONS",
      location: "United Arab Emirates",
      type: "Full-time • On-site",
      summary: "Directing sales floor operations, conversion strategy, performance coaching, and team accountability across regional markets.",
      isCurrent: true,
    },
    {
      period: "MAY 2024 – PRESENT",
      company: "FX GLOBAL CONSULTANTS",
      role: "HEAD OF BROKERAGE SOLUTIONS",
      location: "Dubai, United Arab Emirates",
      type: "Full-time",
      summary: "Structuring brokerage partnerships, introducing broker (IB) networks, and onboarding client accounts.",
      isCurrent: true,
    },
    {
      period: "FEB 2018 – FEB 2026",
      company: "FOREX",
      role: "FOREX TRADER",
      location: "Chandigarh, India",
      type: "Full-time",
      summary: "Hands-on foreign exchange trading, fundamental currency analysis, risk profiling, and market dynamics.",
    },
    {
      period: "FEB 2019 – APR 2021",
      company: "XTREAMFOREX",
      role: "BUSINESS DEVELOPMENT EXECUTIVE",
      location: "India",
      type: "Full-time",
      summary: "Brokerage client acquisition, trader onboarding, and managing client accounts across financial markets.",
    },
    {
      period: "2016 – 2021",
      company: "INSPIRIS MEDIA LTD.",
      role: "SALES EXECUTIVE",
      location: "India",
      type: "Full-time",
      summary: "Foundational B2B/B2C sales generation, client prospecting, and account management.",
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#080a0b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.07] gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold mb-2">
              03 — CAREER TIMELINE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              THE CAREER ARC.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9ca3af] max-w-md font-normal leading-relaxed">
            Directly sourced from verified LinkedIn and executive resume records. Faithfully
            reflecting multi-dimensional activity across trading, brokerage leadership, and sales
            operations.
          </p>
        </div>

        {/* Premium Vertical Editorial Timeline */}
        <div className="max-w-4xl mx-auto divide-y divide-white/[0.07]">
          {careerTimeline.map((item, idx) => (
            <div
              key={idx}
              className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group"
            >
              {/* Date Column (3 Cols) */}
              <div className="md:col-span-4 space-y-1">
                <div className="text-sm sm:text-base font-mono font-bold tracking-wider text-white group-hover:text-[#dfc298] transition-colors">
                  {item.period}
                </div>
                {item.isCurrent && (
                  <span className="inline-block text-[10px] font-mono tracking-widest text-[#c5a880] uppercase">
                    ACTIVE APPOINTMENT
                  </span>
                )}
              </div>

              {/* Role & Company Column (8 Cols) */}
              <div className="md:col-span-8 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-wide text-white uppercase">
                    {item.role}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-[#9ca3af]">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="text-sm font-semibold tracking-wider text-[#c5a880] uppercase">
                  {item.company}
                </div>

                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed pt-1">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Chronology Integrity Note */}
        <div className="mt-16 pt-6 border-t border-white/[0.05] text-center text-xs text-[#6b7280] font-mono tracking-wider">
          AUTHENTIC CHRONOLOGY PRESERVED ACCORDING TO PRIMARY SOURCE EVIDENCE
        </div>
      </div>
    </section>
  );
}
