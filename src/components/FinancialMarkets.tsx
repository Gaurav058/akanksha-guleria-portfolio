"use client";

import React from "react";

export default function FinancialMarkets() {
  const marketAreas = [
    {
      num: "01",
      title: "FOREIGN EXCHANGE (FX)",
      description: "Direct understanding of foreign exchange dynamics, currency pairs, central bank policies, and liquidity provider behavior.",
    },
    {
      num: "02",
      title: "FINANCIAL MARKETS",
      description: "Macro-level perspective on market cycles, macro sentiment, risk appetites, and financial service operations.",
    },
    {
      num: "03",
      title: "INVESTMENT SOLUTIONS",
      description: "Aligning market opportunities with appropriate investor profiles, commercial fee structures, and capital preservation goals.",
    },
    {
      num: "04",
      title: "BROKERAGE SOLUTIONS",
      description: "Building introducing broker (IB) networks, client onboarding channels, liquidity partnerships, and account retention.",
    },
    {
      num: "05",
      title: "CLIENT ACQUISITION",
      description: "High-touch consultative sales execution for regional high-net-worth market participants and institutional introducers.",
    },
    {
      num: "06",
      title: "FINANCIAL ANALYSIS",
      description: "Data-driven commercial decision making, pipeline velocity tracking, sales floor conversion metrics, and revenue optimization.",
    },
  ];

  return (
    <section id="markets" className="py-28 sm:py-36 border-b border-editorial bg-[#080a0b] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-editorial items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              04 — COMMERCIAL PERSPECTIVE
            </div>
            <h2 className="text-section-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase leading-tight">
              FINANCIAL MARKETS,
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">
                FROM THE COMMERCIAL SIDE.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#949a9e] font-normal leading-relaxed">
              Bridging global currency markets with client needs through disciplined sales
              execution, institutional brokerage partnerships, and consultative investment solutions.
            </p>
          </div>
        </div>

        {/* 6 Clean Editorial Areas — Hairline Separation, Zero Trading Clutter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 gap-y-12 lg:gap-x-14 pt-12 border-b border-editorial pb-16">
          {marketAreas.map((area) => (
            <div
              key={area.num}
              className="space-y-4 pt-6 md:pt-0 border-t border-editorial-subtle group"
            >
              <div className="text-[10px] font-mono tracking-widest text-[#6e767c] group-hover:text-[#c5a880] transition-colors flex items-center space-x-2">
                <span className="text-[#c5a880]">{area.num}</span>
                <span>• COMMERCIAL PILLAR</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase group-hover:text-[#dfc298] transition-colors">
                {area.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#949a9e] leading-relaxed font-normal">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sourcing & Compliance Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6e767c] gap-3">
          <div className="text-[10px] font-mono tracking-wider uppercase">
            COMMERCIAL DISTRIBUTION & SALES EXECUTION • NOT PERSONAL RETAIL INVESTMENT ADVICE
          </div>
          <div className="text-[10px] font-mono tracking-wider uppercase">
            CROSS-MARKET EXPOSURE: GCC & ASIA
          </div>
        </div>
      </div>
    </section>
  );
}

