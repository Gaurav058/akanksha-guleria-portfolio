"use client";

import React from "react";

export default function Impact() {
  const verifiedMetrics = [
    {
      index: "01",
      value: "US$100K",
      label: "MONTHLY SALES GENERATED",
      detail: "Generated as an Account Manager",
    },
    {
      index: "02",
      value: "US$500K+",
      label: "MONTHLY FLOOR BUSINESS",
      detail: "Contributed across commercial trading floor",
    },
    {
      index: "03",
      value: "US$50K–60K",
      label: "AVERAGE MONTHLY SALES",
      detail: "Consistent baseline sales execution",
    },
    {
      index: "04",
      value: "100+",
      label: "CLIENT RELATIONSHIPS",
      detail: "High-value client retention & account management",
    },
    {
      index: "05",
      value: "3",
      label: "SALES TEAMS",
      detail: "Floor sales teams managed simultaneously",
    },
    {
      index: "06",
      value: "5",
      label: "SALES MANAGERS LED",
      detail: "Led as Business Head (teams of up to 10 members each)",
    },
  ];

  return (
    <section id="impact" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#080a0b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-white/[0.07] gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold mb-2">
              02 — THE SCALE OF EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              MEASURED COMMERCIAL PERFORMANCE.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9ca3af] max-w-md font-normal leading-relaxed">
            Verified quantitative achievements from executive leadership record. Demonstrating
            revenue contribution, client longevity, and multi-tier management scale.
          </p>
        </div>

        {/* Editorial "Proof Wall" — Large Typography, Negative Space, Minimal Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 sm:gap-y-20">
          {verifiedMetrics.map((metric) => (
            <div
              key={metric.index}
              className="flex flex-col justify-between border-t border-white/[0.08] pt-6 group"
            >
              {/* Index Number */}
              <div className="text-[11px] font-mono tracking-widest text-[#6b7280] group-hover:text-[#c5a880] transition-colors mb-3">
                {metric.index} // VERIFIED METRIC
              </div>

              {/* Visually Dominant Metric Number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-mono mb-3 group-hover:text-[#dfc298] transition-colors">
                {metric.value}
              </div>

              {/* Label & Detail */}
              <div className="space-y-1">
                <div className="text-xs font-bold tracking-[0.16em] text-[#e5e7eb] uppercase">
                  {metric.label}
                </div>
                <div className="text-xs text-[#9ca3af] leading-relaxed">
                  {metric.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Editorial Sourcing Note */}
        <div className="mt-16 sm:mt-24 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6b7280] gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
            <span className="tracking-wider uppercase font-mono text-[11px]">
              Sourced from verified executive record & commercial milestones
            </span>
          </div>
          <div className="text-[11px] font-mono tracking-wider">
            LINKEDIN REACH: 1.6K+ AUDIENCE • 500+ DIRECT CONNECTIONS
          </div>
        </div>
      </div>
    </section>
  );
}
