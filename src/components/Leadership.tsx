"use client";

import React from "react";

export default function Leadership() {
  const leadershipScale = [
    {
      metric: "5",
      title: "SALES MANAGERS DIRECTED",
      context: "MANAGERIAL MENTORING & SUPERVISION",
      narrative:
        "Led and coached five Sales Managers as Business Head. Instituted daily pipeline accountability, structured deal qualification frameworks, and consultative sales rigor across teams.",
    },
    {
      metric: "3",
      title: "SALES TEAMS COORDINATED",
      context: "SIMULTANEOUS FLOOR GOVERNANCE",
      narrative:
        "Directed three active floor teams simultaneously in high-velocity trading brokerage environments, aligning daily conversion objectives, pipeline acceleration, and client retention.",
    },
    {
      metric: "10",
      title: "MEMBERS PER UNIT CAPACITY",
      context: "HIGH-CONVERSION SALES STRUCTURES",
      narrative:
        "Structured and managed commercial trading floor units of up to 10 members each, building a high-performance culture founded on consultative customer acquisition.",
    },
    {
      metric: "100%",
      title: "COMMERCIAL REVENUE OWNERSHIP",
      context: "TARGET ACCOUNTABILITY & GROWTH",
      narrative:
        "End-to-end commercial responsibility across floor operations, client onboarding velocity, introducing broker partnerships, and monthly revenue targets.",
    },
  ];

  return (
    <section id="leadership" className="py-28 sm:py-36 border-b border-editorial bg-[#080a0b] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-editorial items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              05 — COMMERCIAL GOVERNANCE
            </div>
            <h2 className="text-section-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase">
              LEADERSHIP AT SCALE.
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">
                PEOPLE. PERFORMANCE. PROCESS.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#949a9e] font-normal leading-relaxed">
              I lead with a discipline centered on coaching, operational accountability, and customer-centric
              commercial excellence. Scaling teams from individual contributors to multi-tier sales floors.
            </p>
          </div>
        </div>

        {/* Large Number + Narrative Layout (No HR cards, No flowcharts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-b border-editorial">
          {leadershipScale.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="py-12 sm:py-16 md:px-10 first:pl-0 last:pr-0 space-y-6 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#6e767c]">
                <span className="text-[#c5a880] font-semibold">0{idx + 1}</span>
                <span className="tracking-widest uppercase text-[10px]">{item.context}</span>
              </div>

              <div className="space-y-3">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold font-mono tracking-tight text-white group-hover:text-[#dfc298] transition-colors">
                  {item.metric}
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#949a9e] leading-relaxed max-w-lg">
                  {item.narrative}
                </p>
              </div>

              <div className="pt-4 border-t border-editorial-subtle flex items-center space-x-2 text-[11px] font-mono text-[#6e767c]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                <span>Executive governance & coaching record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row of Large Number + Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-b border-editorial">
          {leadershipScale.slice(2, 4).map((item, idx) => (
            <div
              key={idx}
              className="py-12 sm:py-16 md:px-10 first:pl-0 last:pr-0 space-y-6 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#6e767c]">
                <span className="text-[#c5a880] font-semibold">0{idx + 3}</span>
                <span className="tracking-widest uppercase text-[10px]">{item.context}</span>
              </div>

              <div className="space-y-3">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold font-mono tracking-tight text-white group-hover:text-[#dfc298] transition-colors">
                  {item.metric}
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-wider text-white uppercase">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#949a9e] leading-relaxed max-w-lg">
                  {item.narrative}
                </p>
              </div>

              <div className="pt-4 border-t border-editorial-subtle flex items-center space-x-2 text-[11px] font-mono text-[#6e767c]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                <span>Commercial performance & accountability</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Leadership Principle */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6e767c] gap-4">
          <blockquote className="font-serif italic text-base sm:text-lg text-[#cbd5e1]">
            &ldquo;Better people. Stronger teams. Measurable commercial impact.&rdquo;
          </blockquote>
          <div className="text-[10px] font-mono tracking-widest text-[#6e767c] uppercase">
            VERIFIED MANAGEMENT RECORD // ATS & EXECUTIVE DOSSIER
          </div>
        </div>
      </div>
    </section>
  );
}

