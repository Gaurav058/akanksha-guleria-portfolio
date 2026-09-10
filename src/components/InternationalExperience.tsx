"use client";

import React from "react";
import { Plane, Compass, Globe2, Building2, TrendingUp, ShieldCheck } from "lucide-react";

export default function InternationalExperience() {
  const corridorInsights = [
    {
      title: "Cross-Border Acquisition",
      desc: "Navigating diverse regulatory frameworks and client expectations across South Asia and GCC financial centers.",
      icon: Globe2,
    },
    {
      title: "Commercial Adaptability",
      desc: "Transitioning high-velocity sales methodology from regional emerging markets to institutional Dubai brokerage hubs.",
      icon: TrendingUp,
    },
    {
      title: "Global Liquidity Dynamics",
      desc: "Deep alignment with global FX trading hours, cross-currency settlements, and multinational partner networks.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="international" className="py-24 border-b border-white/[0.08] bg-[#080a0d] relative overflow-hidden">
      {/* Background World Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/[0.08] pb-8 gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
              06 — INTERNATIONAL EXPERIENCE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase flex items-center gap-3">
              <span>INDIA</span>
              <span className="text-emerald-400">↔</span>
              <span>UAE</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8e959e] max-w-md">
            Cross-market exposure. Global client acquisition. International sales. Bridging emerging
            financial hubs with primary Middle Eastern capital centers.
          </p>
        </div>

        {/* Geographic Corridor Interactive Graphic */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#0e1217] border border-white/10 relative overflow-hidden mb-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Origin Node: India */}
            <div className="md:col-span-4 p-6 rounded-lg bg-[#080a0d]/80 border border-white/[0.08] text-left">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#8e959e] uppercase">
                  ORIGIN HUB // ASIA
                </span>
                <Compass className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-xl font-extrabold text-white">INDIA</div>
              <div className="text-xs text-emerald-400 font-medium mt-0.5">
                Chandigarh • Bengaluru
              </div>
              <p className="text-xs text-[#94a3b8] mt-3 leading-relaxed">
                Foundations in high-velocity client acquisition, FX trading discipline, and early
                commercial business development across emerging institutional corridors.
              </p>
            </div>

            {/* Flight / Capital Corridor Vector Animation */}
            <div className="md:col-span-4 flex flex-col items-center justify-center py-4 relative">
              <div className="text-[10px] font-mono tracking-[0.2em] text-emerald-400 uppercase font-bold mb-2">
                CROSS-BORDER CORRIDOR
              </div>

              {/* Animated Flight Path Line */}
              <div className="w-full relative flex items-center justify-center my-3">
                <div className="w-full h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-400 to-emerald-500/20" />
                <div className="absolute p-2 rounded-full bg-[#080a0d] border border-emerald-400 text-emerald-400 animate-pulse shadow-lg shadow-emerald-500/20">
                  <Plane className="w-4 h-4" />
                </div>
              </div>

              <div className="text-[11px] text-[#8e959e] text-center tracking-wide mt-2">
                International Capital & Client Mobility
              </div>
            </div>

            {/* Destination Node: Dubai, UAE */}
            <div className="md:col-span-4 p-6 rounded-lg bg-[#080a0d]/80 border border-emerald-500/30 text-left relative group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                  COMMERCIAL HUB // GCC
                </span>
                <Building2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-xl font-extrabold text-white">DUBAI, UAE</div>
              <div className="text-xs text-emerald-400 font-medium mt-0.5">
                Financial Markets • DIFC Corridor
              </div>
              <p className="text-xs text-[#94a3b8] mt-3 leading-relaxed">
                Head of Brokerage Solutions, Head of Sales Operations, and Senior Consultant
                driving multi-asset institutional brokerage and strategic enterprise expansion.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Corridor Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corridorInsights.map((insight, idx) => {
            const Icon = insight.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#0e1217] border border-white/[0.06] hover:border-emerald-500/30 transition-all"
              >
                <div className="p-2.5 w-fit rounded bg-white/[0.03] border border-white/[0.08] text-emerald-400 mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{insight.title}</h3>
                <p className="text-xs text-[#8e959e] leading-relaxed">{insight.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
