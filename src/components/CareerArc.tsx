"use client";

import React from "react";
import { MapPin } from "lucide-react";

export default function CareerArc() {
  const careerTimeline = [
    {
      period: "2026 – PRESENT",
      exactDates: "Jul 2026 – Present",
      company: "AETHORA TECHNOLOGIES",
      role: "SENIOR CONSULTANT",
      location: "Dubai, United Arab Emirates",
      type: "Contract • On-site",
      summary: "Senior commercial advisory for international expansion, financial technology client acquisition strategy, and cross-border partnership structuring.",
      isCurrent: true,
      category: "COMMERCIAL ADVISORY",
    },
    {
      period: "2025 – PRESENT",
      exactDates: "Jan 2025 – Present",
      company: "FX GLOBAL CONSULTANT",
      role: "HEAD OF SALES OPERATIONS",
      location: "United Arab Emirates",
      type: "Full-time • On-site",
      summary: "Directing commercial sales floor operations, conversion strategy, performance coaching, and team accountability across regional financial markets.",
      isCurrent: true,
      category: "OPERATIONS LEADERSHIP",
    },
    {
      period: "2024 – PRESENT",
      exactDates: "May 2024 – Present",
      company: "FX GLOBAL CONSULTANTS",
      role: "HEAD OF BROKERAGE SOLUTIONS",
      location: "Dubai, United Arab Emirates",
      type: "Full-time",
      summary: "Structuring institutional brokerage partnerships, expanding introducing broker (IB) networks, and managing high-value commercial accounts.",
      isCurrent: true,
      category: "BROKERAGE SOLUTIONS",
    },
    {
      period: "2018 – 2026",
      exactDates: "Feb 2018 – Feb 2026",
      company: "FOREX",
      role: "FOREX TRADER",
      location: "Chandigarh, India",
      type: "Full-time",
      summary: "Direct foreign exchange trading, fundamental currency analysis, risk profiling, liquidity understanding, and currency market dynamics.",
      isCurrent: false,
      category: "MARKET TRADING",
    },
    {
      period: "2019 – 2021",
      exactDates: "Feb 2019 – Apr 2021",
      company: "XTREAMFOREX",
      role: "BUSINESS DEVELOPMENT EXECUTIVE",
      location: "India",
      type: "Full-time",
      summary: "Brokerage client acquisition, trader onboarding, client account lifecycle management, and regional market business development.",
      isCurrent: false,
      category: "BUSINESS DEVELOPMENT",
    },
    {
      period: "2016 – 2021",
      exactDates: "2016 – 2021",
      company: "INSPIRIS MEDIA LTD.",
      role: "SALES EXECUTIVE",
      location: "India",
      type: "Full-time",
      summary: "Foundational B2B and B2C sales generation, client prospecting, relationship building, and account management.",
      isCurrent: false,
      category: "SALES EXECUTION",
    },
  ];

  return (
    <section id="experience" className="py-28 sm:py-36 border-b border-editorial bg-[#080a0b] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-editorial items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              03 — CAREER PROGRESSION
            </div>
            <h2 className="text-section-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase">
              THE CAREER ARC.
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">
                CHRONOLOGY & APPOINTMENTS.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#949a9e] font-normal leading-relaxed">
              Sourced directly from verified LinkedIn and executive resume records. Faithfully
              reflecting commercial activity spanning trading, brokerage leadership, and sales operations.
            </p>
          </div>
        </div>

        {/* Expansive 12-Column Editorial Timeline (Full Width, Zero Centered Box) */}
        <div className="divide-y divide-white/[0.08] border-b border-editorial">
          {careerTimeline.map((item, idx) => (
            <div
              key={idx}
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group hover:bg-white/[0.01] transition-colors"
            >
              {/* Col 1-3: Strong Year Callout */}
              <div className="lg:col-span-3 space-y-2">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-white group-hover:text-[#dfc298] transition-colors">
                  {item.period}
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#6e767c]">
                  <span>{item.exactDates}</span>
                </div>
                {item.isCurrent && (
                  <div className="inline-flex items-center space-x-1.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase">
                      ACTIVE APPOINTMENT
                    </span>
                  </div>
                )}
              </div>

              {/* Col 4-8: Role, Company, Location */}
              <div className="lg:col-span-5 space-y-3">
                <div className="text-[10px] font-mono tracking-widest text-[#6e767c] uppercase">
                  {item.category}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-wide text-white uppercase group-hover:text-[#dfc298] transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold tracking-wider text-[#c5a880] uppercase mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#949a9e]">
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{item.location}</span>
                  </div>
                  <span className="text-white/20">•</span>
                  <span className="text-[11px] font-mono text-[#6e767c]">{item.type}</span>
                </div>
              </div>

              {/* Col 9-12: Role Narrative */}
              <div className="lg:col-span-4 lg:pl-6 border-l-0 lg:border-l border-white/[0.06] pt-2 lg:pt-0">
                <p className="text-xs sm:text-sm text-[#949a9e] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chronology Sourcing Footnote */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6e767c] gap-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
            <span className="tracking-wider uppercase font-mono text-[10px]">
              Verified primary source credentials • Concurrent appointments preserved accurately
            </span>
          </div>
          <div className="text-[10px] font-mono tracking-wider uppercase">
            JURISDICTIONS: UNITED ARAB EMIRATES • INDIA
          </div>
        </div>
      </div>
    </section>
  );
}

