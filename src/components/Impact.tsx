"use client";

import React from "react";
import { TrendingUp, Users, ShieldCheck, DollarSign, Building, Award } from "lucide-react";

export default function Impact() {
  const verifiedMetrics = [
    {
      value: "US$100K",
      label: "Monthly sales generated",
      context: "Generated as an Account Manager",
      icon: DollarSign,
      highlight: true,
    },
    {
      value: "US$500K+",
      label: "Monthly floor business",
      context: "Contributed across commercial trading floor",
      icon: TrendingUp,
      highlight: true,
    },
    {
      value: "US$50K–60K",
      label: "Average monthly sales",
      context: "Consistent baseline sales execution",
      icon: ShieldCheck,
      highlight: false,
    },
    {
      value: "100+",
      label: "Client relationships managed",
      context: "High-net-worth & institutional retention",
      icon: Users,
      highlight: false,
    },
    {
      value: "3",
      label: "Sales teams managed",
      context: "Cross-functional floor coordination",
      icon: Building,
      highlight: false,
    },
    {
      value: "5",
      label: "Sales Managers led",
      context: "Led as Business Head (teams up to 10 each)",
      icon: Award,
      highlight: true,
    },
  ];

  return (
    <section id="impact" className="py-24 border-b border-white/[0.08] relative bg-[#080a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/[0.08] pb-8 gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
              02 — IMPACT
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              THE SCALE OF EXPERIENCE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8e959e] max-w-md">
            Verified quantitative achievements from executive leadership record. Demonstrating
            high-volume sales generation, floor contribution, and structural team leadership.
          </p>
        </div>

        {/* 6 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-lg bg-[#0e1217] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
              >
                {/* Top indicator & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#8e959e] uppercase">
                    METRIC // 0{idx + 1}
                  </span>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] text-emerald-400 group-hover:text-emerald-300 group-hover:bg-emerald-500/10 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Primary Metric Value */}
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors mb-2 font-mono">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-sm font-bold text-[#e2e8f0] tracking-wide mb-1">
                  {metric.label}
                </div>

                {/* Contextual verification note */}
                <div className="text-xs text-[#8e959e] leading-relaxed">
                  {metric.context}
                </div>

                {/* Bottom subtle accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-white/[0.06] group-hover:bg-emerald-500/50 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Live LinkedIn Network Context (Carefully Labeled As Per Prompt Rules) */}
        <div className="mt-12 p-6 rounded-lg bg-[#0a0d12] border border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              PROFESSIONAL REACH & NETWORK
            </div>
            <div className="text-xs text-[#8e959e]">
              Data originates from active LinkedIn profile network (subject to dynamic change):
            </div>
          </div>

          <div className="flex items-center space-x-8 sm:space-x-12">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                1.6K+
              </div>
              <div className="text-[10px] tracking-widest uppercase text-[#8e959e] font-semibold">
                LinkedIn Audience
              </div>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                500+
              </div>
              <div className="text-[10px] tracking-widest uppercase text-[#8e959e] font-semibold">
                Professional Connections
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
