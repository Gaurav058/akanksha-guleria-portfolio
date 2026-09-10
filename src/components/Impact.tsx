"use client";

import React from "react";

export default function Impact() {
  return (
    <section id="impact" className="py-28 sm:py-36 border-b border-editorial bg-[#080a0b] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header: Left-Aligned Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-editorial items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              02 — QUANTIFIED COMMERCIAL IMPACT
            </div>
            <h2 className="text-section-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase">
              MEASURED PERFORMANCE.
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">
                VERIFIED LEADERSHIP SCALE.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs sm:text-sm text-[#949a9e] font-normal leading-relaxed">
              Quantitative achievements drawn directly from verified executive appointments across
              financial markets, brokerage operations, and multi-tier commercial sales floors.
            </p>
          </div>
        </div>

        {/* Editorial Proof Wall: Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] border-b border-editorial">
          {/* Dominant Primary Metric (Col span 7) */}
          <div className="lg:col-span-7 py-12 lg:pr-14 space-y-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-[#6e767c]">
              <span className="text-[#c5a880] font-semibold">01</span>
              <span className="tracking-widest uppercase text-[10px]">PEAK FLOOR CONTRIBUTION</span>
            </div>

            <div className="space-y-3">
              <div className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight font-mono">
                US$500K+
              </div>
              <div className="text-sm sm:text-base font-bold tracking-[0.16em] text-[#dfc298] uppercase">
                MONTHLY FLOOR BUSINESS
              </div>
              <p className="text-xs sm:text-sm text-[#949a9e] max-w-lg leading-relaxed">
                Total commercial trading floor volume contributed and supervised across active sales
                floor operations in high-velocity financial brokerage environments.
              </p>
            </div>

            <div className="pt-4 border-t border-editorial-subtle flex items-center space-x-2 text-[11px] font-mono text-[#6e767c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              <span>Multi-desk floor coordination and commercial pipeline management</span>
            </div>
          </div>

          {/* Secondary Metric (Col span 5) */}
          <div className="lg:col-span-5 py-12 lg:pl-14 space-y-6 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-[#6e767c]">
              <span className="text-[#c5a880] font-semibold">02</span>
              <span className="tracking-widest uppercase text-[10px]">INDIVIDUAL SALES EXECUTION</span>
            </div>

            <div className="space-y-3">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-mono">
                US$100K
              </div>
              <div className="text-sm sm:text-base font-bold tracking-[0.16em] text-[#f5f6f7] uppercase">
                MONTHLY SALES GENERATED
              </div>
              <p className="text-xs sm:text-sm text-[#949a9e] leading-relaxed">
                Direct individual sales generation achieved as an Account Manager, closing high-value
                investor accounts and establishing key introducing broker channels.
              </p>
            </div>

            <div className="pt-4 border-t border-editorial-subtle flex items-center space-x-2 text-[11px] font-mono text-[#6e767c]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              <span>Direct client acquisition and onboarding execution</span>
            </div>
          </div>
        </div>

        {/* Secondary Tier: 4-Column Editorial Rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] border-b border-editorial">
          {/* Metric 03: Baseline */}
          <div className="py-10 sm:px-6 first:pl-0 space-y-4">
            <div className="text-[10px] font-mono text-[#6e767c] flex items-center justify-between">
              <span>03</span>
              <span className="text-[#c5a880] uppercase">REVENUE RUN-RATE</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              US$50K–60K
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold tracking-wider text-[#e5e7eb] uppercase">
                AVERAGE MONTHLY SALES
              </div>
              <p className="text-xs text-[#949a9e] leading-relaxed">
                Consistent baseline sales execution maintained across market cycles.
              </p>
            </div>
          </div>

          {/* Metric 04: Client Relationships */}
          <div className="py-10 sm:px-6 space-y-4">
            <div className="text-[10px] font-mono text-[#6e767c] flex items-center justify-between">
              <span>04</span>
              <span className="text-[#c5a880] uppercase">CLIENT PORTFOLIO</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              100+
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold tracking-wider text-[#e5e7eb] uppercase">
                CLIENT RELATIONSHIPS
              </div>
              <p className="text-xs text-[#949a9e] leading-relaxed">
                High-touch consultative client retention and account lifecycle leadership.
              </p>
            </div>
          </div>

          {/* Metric 05: Sales Teams */}
          <div className="py-10 sm:px-6 space-y-4">
            <div className="text-[10px] font-mono text-[#6e767c] flex items-center justify-between">
              <span>05</span>
              <span className="text-[#c5a880] uppercase">FLOOR ARCHITECTURE</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              3
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold tracking-wider text-[#e5e7eb] uppercase">
                SALES TEAMS MANAGED
              </div>
              <p className="text-xs text-[#949a9e] leading-relaxed">
                Simultaneous floor sales teams coordinated for pipeline acceleration.
              </p>
            </div>
          </div>

          {/* Metric 06: Managers Led */}
          <div className="py-10 sm:px-6 last:pr-0 space-y-4">
            <div className="text-[10px] font-mono text-[#6e767c] flex items-center justify-between">
              <span>06</span>
              <span className="text-[#c5a880] uppercase">LEADERSHIP SCALE</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              5
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold tracking-wider text-[#e5e7eb] uppercase">
                SALES MANAGERS LED
              </div>
              <p className="text-xs text-[#949a9e] leading-relaxed">
                Led as Business Head with teams of up to 10 members each.
              </p>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Editorial Citation */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6e767c] gap-3">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
            <span className="tracking-wider uppercase font-mono text-[10px]">
              Sourced from verified commercial appointments and executive track record
            </span>
          </div>
          <div className="text-[10px] font-mono tracking-wider">
            PRIMARY CORRIDOR: INDIA • UNITED ARAB EMIRATES
          </div>
        </div>
      </div>
    </section>
  );
}

