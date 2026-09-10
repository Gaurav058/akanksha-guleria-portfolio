"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LineChart, Globe, Database, ArrowUpRight, ShieldCheck, X } from "lucide-react";

export default function BusinessPoint() {
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  const initiativeFeatures = [
    {
      title: "Forex Intelligence",
      desc: "Structured intelligence on global foreign exchange pair liquidity, market regimes, and institutional order dynamics.",
      icon: Globe,
    },
    {
      title: "Data Analysis",
      desc: "Analytical frameworks translating macro currency data into actionable insights for market participants.",
      icon: Database,
    },
    {
      title: "Market Insights",
      desc: "Curated overviews on economic releases, central bank rate cycles, and risk sentiment shifts.",
      icon: LineChart,
    },
    {
      title: "Financial Ecosystem",
      desc: "Connecting brokerage offerings, institutional insights, and market participants within a cohesive intelligence hub.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="business-point" className="py-24 border-b border-white/[0.08] bg-[#080a0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/[0.08] pb-8 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>07 — INITIATIVE // CASE STUDY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              BUSINESS POINT
            </h2>
            <p className="text-base text-emerald-400 font-medium mt-1">
              &ldquo;Your trusted hub for Forex Intelligence&rdquo;
            </p>
          </div>
          <div className="text-xs text-[#8e959e] space-y-1 font-mono">
            <div>TIMELINE: Mar 2026 – Present</div>
            <div>ASSOCIATION: Forex • Primary Skill: Data Analysis</div>
          </div>
        </div>

        {/* Case Study Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Terminal Mockup Visual */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0e1217]">
              <Image
                src="/images/forex-intelligence-terminal.jpg"
                alt="Business Point — Forex Intelligence Dashboard Terminal"
                width={900}
                height={550}
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0d] via-transparent to-transparent opacity-60" />

              {/* Bottom tag over preview */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded bg-[#080a0d]/90 border border-white/10 text-white font-mono">
                  PLATFORM INTERFACE: BUSINESS POINT
                </span>
                <button
                  onClick={() => setTerminalModalOpen(true)}
                  className="px-3 py-1 rounded bg-emerald-400 text-[#080a0d] font-bold text-xs flex items-center space-x-1 hover:bg-emerald-300 transition-colors"
                >
                  <span>FULL VIEW</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Case Study Narrative & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                THE INITIATIVE
              </div>
              <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                A digital initiative focused on delivering market insights, data and intelligence
                for the global forex ecosystem.
              </p>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Conceived at the intersection of practical currency trading expertise and structured
                data analysis, Business Point delivers clarity in high-noise foreign exchange
                environments.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {initiativeFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#0e1217] border border-white/[0.06] hover:border-emerald-500/30 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-emerald-400 mb-2" />
                    <div className="text-xs font-bold text-white mb-1">{feat.title}</div>
                    <div className="text-[11px] text-[#8e959e] leading-snug">{feat.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => setTerminalModalOpen(true)}
                className="inline-flex items-center space-x-2 px-5 py-3 text-xs font-bold tracking-widest text-[#080a0d] bg-emerald-400 hover:bg-emerald-300 rounded shadow-lg shadow-emerald-500/10 transition-all hover:shadow-emerald-500/25 active:scale-[0.98]"
              >
                <span>EXPLORE BUSINESS POINT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Full View Modal */}
      {terminalModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setTerminalModalOpen(false)}
        >
          <div
            className="bg-[#0e1217] border border-white/20 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white font-mono tracking-wider">
                  BUSINESS POINT // FOREX INTELLIGENCE SYSTEM
                </div>
                <div className="text-xs text-emerald-400">
                  Global Foreign Exchange Data Analysis Interface
                </div>
              </div>
              <button
                onClick={() => setTerminalModalOpen(false)}
                className="p-1.5 rounded text-[#8e959e] hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Terminal Image */}
            <div className="relative">
              <Image
                src="/images/forex-intelligence-terminal.jpg"
                alt="Business Point Terminal Preview"
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#080a0d] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8e959e] gap-2">
              <span>Initiative timeline: Mar 2026 – Present • Domain: Forex & Data Analysis</span>
              <button
                onClick={() => setTerminalModalOpen(false)}
                className="px-4 py-1.5 rounded border border-white/20 text-white hover:bg-white/10"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
