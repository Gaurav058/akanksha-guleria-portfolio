"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

export default function BusinessPoint() {
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  const focusAreas = [
    {
      num: "01",
      title: "FOREX INTELLIGENCE",
      desc: "Structured intelligence on global foreign exchange pair dynamics, market trends, and currency behavior.",
    },
    {
      num: "02",
      title: "DATA ANALYSIS",
      desc: "Analytical frameworks translating market data into actionable overviews for currency traders and brokers.",
    },
    {
      num: "03",
      title: "MARKET INSIGHTS",
      desc: "Timely perspectives on economic releases, central bank sentiment, and foreign exchange market regimes.",
    },
    {
      num: "04",
      title: "FINANCIAL MARKETS",
      desc: "Bridging analytical market research with practical commercial trading ecosystem requirements.",
    },
  ];

  return (
    <section id="business-point" className="py-28 sm:py-36 border-b border-editorial bg-[#080a0b] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-editorial items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              07 — DIGITAL INITIATIVE
            </div>
            <h2 className="text-section-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase">
              BUSINESS POINT.
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">
                YOUR TRUSTED HUB FOR FOREX INTELLIGENCE
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <div className="text-xs text-[#949a9e] font-mono space-y-1.5 lg:text-right">
              <div>TIMELINE: MAR 2026 – PRESENT</div>
              <div className="text-[#c5a880]">COMPETENCY: DATA ANALYSIS • FOREX</div>
            </div>
          </div>
        </div>

        {/* 12-Column Asymmetric Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-12 border-b border-editorial pb-16">
          {/* Left: Terminal Visual (7 Cols) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden border border-white/[0.12] bg-[#0d1112]">
              <Image
                src="/images/forex-intelligence-terminal.jpg"
                alt="Business Point — Forex Intelligence Platform Preview"
                width={1000}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0b] via-transparent to-transparent opacity-50 pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs">
                <span className="font-mono text-[#cbd5e1] text-[11px] bg-[#080a0b]/85 backdrop-blur-sm px-3 py-1 border border-white/10">
                  INTERFACE PREVIEW // BUSINESS POINT
                </span>
                <button
                  onClick={() => setTerminalModalOpen(true)}
                  className="px-3.5 py-1.5 bg-[#c5a880] text-[#080a0b] font-bold text-xs flex items-center space-x-1.5 hover:bg-[#dfc298] transition-colors"
                >
                  <span>EXPAND</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Narrative & 4 Focus Areas (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[#c5a880] uppercase">
                INITIATIVE PROFILE
              </div>
              <p className="text-base text-[#f5f6f7] font-medium leading-relaxed">
                A specialized digital initiative focused on delivering market insights, structured data,
                and intelligence for the global foreign exchange ecosystem.
              </p>
              <p className="text-xs sm:text-sm text-[#949a9e] leading-relaxed">
                Developed to bring clarity to currency market participants through disciplined data
                analysis, macroeconomic awareness, and structured market overviews.
              </p>
            </div>

            {/* 4 Focus Areas as Editorial Hairline List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 border-t border-editorial-subtle">
              {focusAreas.map((area) => (
                <div key={area.num} className="space-y-1.5">
                  <div className="text-[10px] font-mono text-[#c5a880]">{area.num} • FOCUS</div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    {area.title}
                  </h3>
                  <p className="text-[11px] text-[#949a9e] leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => setTerminalModalOpen(true)}
                className="inline-flex items-center space-x-2 px-5 py-3 text-xs font-bold tracking-[0.14em] text-[#080a0b] bg-[#c5a880] hover:bg-[#dfc298] rounded transition-all active:scale-[0.98]"
              >
                <span>EXPLORE BUSINESS POINT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Initiative Source Footnote */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6e767c] gap-3">
          <div className="text-[10px] font-mono tracking-wider uppercase">
            ACTIVE STRATEGIC INITIATIVE • TIMELINE: MAR 2026 – PRESENT
          </div>
          <div className="text-[10px] font-mono tracking-wider">
            PRIMARY SOURCE: VERIFIED LINKEDIN PROJECT PORTFOLIO
          </div>
        </div>
      </div>

      {/* Terminal Expanded Modal - Strict z-[1300] */}
      {terminalModalOpen && (
        <div
          className="fixed inset-0 z-[1300] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setTerminalModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#0d1112] border border-white/15 max-w-5xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#080a0b]">
              <div>
                <div className="text-sm font-bold text-white font-mono tracking-wider uppercase">
                  BUSINESS POINT // FOREX INTELLIGENCE
                </div>
                <div className="text-xs text-[#c5a880]">
                  Market Intelligence & Data Analytics Interface
                </div>
              </div>
              <button
                onClick={() => setTerminalModalOpen(false)}
                className="p-2 rounded text-[#949a9e] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Image
                src="/images/forex-intelligence-terminal.jpg"
                alt="Business Point Terminal Expanded Preview"
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="p-4 bg-[#080a0b] border-t border-white/10 flex items-center justify-between text-xs text-[#6e767c]">
              <span>Timeline: Mar 2026 – Present • Sourced from active LinkedIn profile</span>
              <button
                onClick={() => setTerminalModalOpen(false)}
                className="px-4 py-1.5 border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

