"use client";

import React from "react";
import { Globe, LineChart, TrendingUp, Handshake, Users2 } from "lucide-react";

export default function StrategicCapabilities() {
  const pillars = [
    {
      num: "01",
      title: "INTERNATIONAL BUSINESS DEVELOPMENT",
      icon: Globe,
      capabilities: [
        "International Sales",
        "B2B Sales",
        "B2C Sales",
        "Client Acquisition",
        "Lead Generation",
        "Conversion Optimization",
      ],
    },
    {
      num: "02",
      title: "FINANCIAL MARKETS",
      icon: LineChart,
      capabilities: [
        "Financial Markets",
        "Investment Products",
        "Forex Trading Dynamics",
        "Financial Analysis",
        "Market Analysis",
        "Brokerage Infrastructure",
      ],
    },
    {
      num: "03",
      title: "REVENUE & SALES",
      icon: TrendingUp,
      capabilities: [
        "Sales Management",
        "Revenue Growth",
        "Sales Strategy",
        "Pipeline Management",
        "Account Management",
        "Client Retention",
      ],
    },
    {
      num: "04",
      title: "RELATIONSHIPS",
      icon: Handshake,
      capabilities: [
        "Client Relationship Management",
        "Strategic Negotiation",
        "Key Accounts",
        "Stakeholder Management",
        "High-Touch Service",
        "Contract Structuring",
      ],
    },
    {
      num: "05",
      title: "LEADERSHIP",
      icon: Users2,
      capabilities: [
        "Team Leadership",
        "Executive Coaching",
        "Mentoring",
        "Team Coordination",
        "Performance Management",
        "Floor Culture",
      ],
    },
  ];

  return (
    <section id="expertise" className="py-24 border-b border-white/[0.08] bg-[#090b0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/[0.08] pb-8 gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
              05 — EXPERTISE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              STRATEGIC CAPABILITIES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8e959e] max-w-md">
            Five core strategic pillars grounded in verified professional execution. Structured
            around institutional rigor, commercial execution, and client capital longevity.
          </p>
        </div>

        {/* 5 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="p-6 rounded-lg bg-[#0e1217] border border-white/[0.07] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {pillar.num}
                    </span>
                    <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xs font-bold tracking-wider text-white uppercase mb-5 leading-snug min-h-[36px]">
                    {pillar.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {pillar.capabilities.map((cap, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors flex items-start space-x-2"
                      >
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-[#8e959e] tracking-widest uppercase">
                  VERIFIED PILLAR
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
