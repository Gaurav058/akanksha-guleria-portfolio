"use client";

import React from "react";

export default function FinancialMarkets() {
  const marketAreas = [
    {
      num: "01",
      title: "FOREX",
      description: "Direct understanding of foreign exchange dynamics, currency pairs, and liquidity behavior.",
    },
    {
      num: "02",
      title: "FINANCIAL MARKETS",
      description: "Commercial perspectives on market cycles, macro sentiment, and financial service operations.",
    },
    {
      num: "03",
      title: "INVESTMENT SOLUTIONS",
      description: "Aligning market opportunities with appropriate investor profiles and commercial structures.",
    },
    {
      num: "04",
      title: "BROKERAGE",
      description: "Building introducing broker (IB) networks, client onboarding channels, and account retention.",
    },
    {
      num: "05",
      title: "CLIENT ACQUISITION",
      description: "High-touch consultative sales execution for regional and international market participants.",
    },
    {
      num: "06",
      title: "FINANCIAL ANALYSIS",
      description: "Data-driven commercial decision making, pipeline analysis, and revenue optimization.",
    },
  ];

  return (
    <section id="markets" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#080a0b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.07] gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold mb-2">
              04 — COMMERCIAL PERSPECTIVE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase max-w-2xl leading-tight">
              FINANCIAL MARKETS, FROM THE COMMERCIAL SIDE.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9ca3af] max-w-md font-normal leading-relaxed">
            Bridging global markets with client needs through sales execution, brokerage partnerships,
            and consultative investment solutions.
          </p>
        </div>

        {/* 6 Clean Editorial Areas — Minimal, Typography-Forward */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {marketAreas.map((area) => (
            <div
              key={area.num}
              className="border-t border-white/[0.08] pt-6 space-y-3 group"
            >
              <div className="text-xs font-mono tracking-widest text-[#6b7280] group-hover:text-[#c5a880] transition-colors">
                {area.num} // DOMAIN
              </div>

              <h3 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase group-hover:text-[#dfc298] transition-colors">
                {area.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed font-normal">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sourcing & Compliance Note */}
        <div className="mt-16 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6b7280] gap-4">
          <div className="text-[11px] font-mono tracking-wider uppercase">
            COMMERCIAL DISTRIBUTION & SALES EXECUTION • NOT PERSONAL RETAIL INVESTMENT ADVICE
          </div>
          <div className="text-[11px] font-mono tracking-wider">
            CROSS-MARKET EXPOSURE: GCC & ASIA
          </div>
        </div>
      </div>
    </section>
  );
}
