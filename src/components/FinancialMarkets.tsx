"use client";

import React from "react";
import { Coins, BarChart3, Briefcase, Network, UserPlus, FileSpreadsheet, ShieldAlert } from "lucide-react";

export default function FinancialMarkets() {
  const marketPillars = [
    {
      title: "Forex",
      tagline: "Global Currency Dynamics",
      desc: "Deep hands-on background in foreign exchange liquidity, currency trading mechanics, volatility profiles, and trading infrastructure.",
      icon: Coins,
    },
    {
      title: "Financial Markets",
      tagline: "Macro & Multi-Asset Scope",
      desc: "Broad multi-asset perspective assessing global macroeconomic trends, central bank policies, and institutional risk appetites.",
      icon: BarChart3,
    },
    {
      title: "Investment Solutions",
      tagline: "Commercial Product Structuring",
      desc: "Aligning institutional and private client needs with appropriate financial market vehicles and structured investment offerings.",
      icon: Briefcase,
    },
    {
      title: "Brokerage",
      tagline: "Ecosystem & Partner Networks",
      desc: "Developing Introducing Broker (IB) networks, white-label operational solutions, onboarding funnels, and retention programs.",
      icon: Network,
    },
    {
      title: "Client Acquisition",
      tagline: "High-Touch Onboarding",
      desc: "Direct outreach and consultative relationship management for high-net-worth individuals, family offices, and active market participants.",
      icon: UserPlus,
    },
    {
      title: "Financial Analysis",
      tagline: "Data-Driven Commercial Strategy",
      desc: "Applying financial intelligence and analytical modeling to optimize sales floor conversion, client retention, and margin sustainability.",
      icon: FileSpreadsheet,
    },
  ];

  return (
    <section id="markets" className="py-24 border-b border-white/[0.08] bg-[#090b0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/[0.08] pb-8 gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
              COMMERCIAL PERSPECTIVE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase max-w-2xl leading-tight">
              FINANCIAL MARKETS, FROM THE COMMERCIAL SIDE.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8e959e] max-w-md">
            Bridging global markets with client needs through sales, brokerage and investment
            solutions.
          </p>
        </div>

        {/* 6 Market Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-lg bg-[#0e1217] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.08] text-emerald-400 group-hover:text-emerald-300 group-hover:bg-emerald-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#8e959e] uppercase">
                      PILLAR // 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400 mt-1 mb-3">
                    {pillar.tagline}
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-[#8e959e] uppercase">
                  <span>COMMERCIAL DOMAIN</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory & Institutional Positioning Disclaimer */}
        <div className="mt-12 p-4 rounded bg-[#080a0d] border border-white/[0.06] flex items-center space-x-3 text-xs text-[#8e959e]">
          <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Professional profile highlights commercial sales leadership, brokerage business
            development, and operational execution. Does not constitute personal retail investment
            advice or portfolio solicitation.
          </span>
        </div>
      </div>
    </section>
  );
}
