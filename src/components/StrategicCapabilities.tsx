"use client";

import React from "react";

export default function StrategicCapabilities() {
  const pillars = [
    {
      num: "01",
      title: "INTERNATIONAL BUSINESS DEVELOPMENT",
      capabilities: [
        "International Sales",
        "B2B & B2C Sales",
        "Client Acquisition",
        "Lead Generation",
        "Conversion Optimization",
      ],
    },
    {
      num: "02",
      title: "FINANCIAL MARKETS",
      capabilities: [
        "Financial Markets",
        "Investment Products",
        "Forex Trading",
        "Financial Analysis",
        "Market Dynamics",
        "Brokerage Operations",
      ],
    },
    {
      num: "03",
      title: "REVENUE & SALES",
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
      capabilities: [
        "Client Relationship Management",
        "Strategic Negotiation",
        "Key Accounts",
        "Stakeholder Management",
        "High-Touch Support",
      ],
    },
    {
      num: "05",
      title: "LEADERSHIP",
      capabilities: [
        "Team Leadership",
        "Sales Coaching",
        "Mentoring",
        "Team Coordination",
        "Performance Management",
      ],
    },
  ];

  return (
    <section id="expertise" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#080a0b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.07] gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold mb-2">
              08 — CORE COMPETENCIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              STRATEGIC CAPABILITIES.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9ca3af] max-w-md font-normal leading-relaxed">
            Five strategic capability pillars grounded in verified professional execution across
            commercial leadership, financial services, and client acquisition.
          </p>
        </div>

        {/* 5 Editorial Pillars — Refined Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="border-t border-white/[0.08] pt-6 space-y-4 group"
            >
              <div className="text-xs font-mono text-[#c5a880] tracking-widest">
                {pillar.num} // PILLAR
              </div>

              <h3 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase leading-snug group-hover:text-[#dfc298] transition-colors min-h-[36px]">
                {pillar.title}
              </h3>

              <ul className="space-y-2 text-xs text-[#9ca3af]">
                {pillar.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#c5a880]">•</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
