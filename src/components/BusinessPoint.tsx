"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

export default function BusinessPoint() {
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  const focusAreas = [
    {
      title: "FOREX INTELLIGENCE",
      desc: "Structured intelligence on global foreign exchange pair dynamics, market trends, and currency behavior.",
    },
    {
      title: "DATA ANALYSIS",
      desc: "Analytical frameworks translating market data into actionable overviews for currency traders and brokers.",
    },
    {
      title: "MARKET INSIGHTS",
      desc: "Timely perspectives on economic releases, central bank sentiment, and foreign exchange market regimes.",
    },
    {
      title: "FINANCIAL MARKETS",
      desc: "Bridging analytical market research with practical commercial trading ecosystem requirements.",
    },
  ];

  return (
    <section id="business-point" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#080a0b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.07] gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold mb-2">
              07 — DIGITAL INITIATIVE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              BUSINESS POINT.
            </h2>
            <p className="text-base text-[#c5a880] font-serif italic mt-2">
              &ldquo;Your trusted hub for Forex Intelligence&rdquo;
            </p>
          </div>
          <div className="text-xs text-[#9ca3af] font-mono tracking-wider space-y-1">
            <div>TIMELINE: Mar 2026 – Present</div>
            <div>CORE COMPETENCY: Data Analysis • Forex</div>
          </div>
        </div>

        {/* Large Visual Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Terminal Visual (7 Cols) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl bg-[#0d1112]">
              <Image
                src="/images/forex-intelligence-terminal.jpg"
                alt="Business Point — Forex Intelligence Dashboard"
                width={1000}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0b] via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-mono text-[#cbd5e1] text-[11px] bg-[#080a0b]/80 px-3 py-1 rounded border border-white/10">
                  INTERFACE PREVIEW // BUSINESS POINT
                </span>
                <button
                  onClick={() => setTerminalModalOpen(true)}
                  className="px-3.5 py-1.5 rounded bg-[#c5a880] text-[#080a0b] font-bold text-xs flex items-center space-x-1.5 hover:bg-[#dfc298] transition-colors"
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
              <div className="text-xs font-mono tracking-widest text-[#c5a880] uppercase">
                INITIATIVE PROFILE
              </div>
              <p className="text-sm sm:text-base text-[#e5e7eb] leading-relaxed">
                A digital initiative focused on delivering market insights, data and intelligence
                for the global forex ecosystem.
              </p>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Developed to bring clarity to currency market participants through disciplined data
                analysis, macroeconomic awareness, and structured market overviews.
              </p>
            </div>

            {/* 4 Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="border-t border-white/[0.08] pt-3 space-y-1">
                  <div className="text-[10px] font-mono text-[#c5a880]">0{idx + 1}</div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    {area.title}
                  </h3>
                  <p className="text-[11px] text-[#9ca3af] leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setTerminalModalOpen(true)}
                className="inline-flex items-center space-x-2 px-5 py-3 text-xs font-bold tracking-[0.16em] text-[#080a0b] bg-[#c5a880] hover:bg-[#dfc298] rounded transition-all active:scale-[0.98]"
              >
                <span>EXPLORE BUSINESS POINT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Expanded Modal */}
      {terminalModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setTerminalModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#0d1112] border border-white/15 rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white font-mono tracking-wider">
                  BUSINESS POINT // FOREX INTELLIGENCE
                </div>
                <div className="text-xs text-[#c5a880]">
                  Market Intelligence & Data Analytics Interface
                </div>
              </div>
              <button
                onClick={() => setTerminalModalOpen(false)}
                className="p-1.5 rounded text-[#9ca3af] hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Image
                src="/images/forex-intelligence-terminal.jpg"
                alt="Business Point Terminal Expanded"
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="p-4 bg-[#080a0b] border-t border-white/10 flex items-center justify-between text-xs text-[#6b7280]">
              <span>Timeline: Mar 2026 – Present • Sourced from active LinkedIn profile</span>
              <button
                onClick={() => setTerminalModalOpen(false)}
                className="px-3.5 py-1 rounded border border-white/20 text-white hover:bg-white/10"
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
