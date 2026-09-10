"use client";

import React from "react";

export default function StrategicCapabilities() {
  const pillars = [
    {
      num: "01",
      title: "INTERNATIONAL BUSINESS DEVELOPMENT",
      capabilities: [
        "International Sales",
        "B2B & B2C Sales Execution",
        "Cross-Border Client Acquisition",
        "Lead Generation Pipelines",
        "Conversion Optimization",
      ],
    },
    {
      num: "02",
      title: "FINANCIAL MARKETS & BROKERAGE",
      capabilities: [
        "Foreign Exchange (FX) Markets",
        "Investment Products",
        "Forex Trading Dynamics",
        "Financial Market Analysis",
        "Brokerage Operations",
      ],
    },
    {
      num: "03",
      title: "REVENUE & SALES GOVERNANCE",
      capabilities: [
        "Sales Management",
        "Commercial Revenue Growth",
        "Go-to-Market Sales Strategy",
        "Pipeline Velocity Tracking",
        "Key Account Retention",
      ],
    },
    {
      num: "04",
      title: "RELATIONSHIP MANAGEMENT",
      capabilities: [
        "Client Relationship Management",
        "Strategic Commercial Negotiation",
        "Key Accounts & Introducers",
        "Stakeholder Engagement",
        "High-Touch Consultative Support",
      ],
    },
    {
      num: "05",
      title: "EXECUTIVE LEADERSHIP",
      capabilities: [
        "Sales Team Leadership",
        "Managerial Coaching & Mentoring",
        "Multi-Tier Team Coordination",
        "Floor Performance Governance",
        "Commercial Discipline",
      ],
    },
  ];

  return (
    <section id="expertise" className="py-28 sm:py-36 border-b border-editorial bg-[#080a0b] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-editorial items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              08 — CORE COMPETENCIES
            </div>
            <h2 className="text-section-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase">
              STRATEGIC CAPABILITIES.
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">
                VERIFIED COMMERCIAL DISCIPLINE.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#949a9e] font-normal leading-relaxed">
              Five strategic capability pillars grounded in verified professional execution across
              commercial leadership, financial markets, and client acquisition.
            </p>
          </div>
        </div>

        {/* 5 Editorial Pillars — Refined Typography & Spacing (Zero pill badges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] pt-12 border-b border-editorial pb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="py-8 md:py-0 md:px-7 first:pl-0 last:pr-0 space-y-5 group"
            >
              <div className="text-[10px] font-mono text-[#c5a880] tracking-widest">
                {pillar.num} • PILLAR
              </div>

              <h3 className="text-xs sm:text-sm font-bold tracking-wider text-white uppercase leading-snug group-hover:text-[#dfc298] transition-colors min-h-[38px]">
                {pillar.title}
              </h3>

              <ul className="space-y-2.5 text-xs text-[#949a9e]">
                {pillar.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="text-[#c5a880] text-[10px] mt-0.5">•</span>
                    <span className="tracking-wide">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Sourcing Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6e767c] gap-3">
          <div className="text-[10px] font-mono tracking-wider uppercase">
            COMPETENCY PROFILE SOURCED FROM 8+ YEARS COMMERCIAL SALES & TRADING PRACTICE
          </div>
          <div className="text-[10px] font-mono tracking-wider">
            CROSS-BORDER SCOPE: DUBAI • INDIA
          </div>
        </div>
      </div>
    </section>
  );
}

