"use client";

import React from "react";
import Image from "next/image";
import { Users, Target, ArrowDown, Award, UserCheck, Shield } from "lucide-react";

export default function Leadership() {
  const leadershipTenets = [
    {
      title: "Accountability & KPIs",
      desc: "Establishing transparent daily and monthly performance metrics across trading floor teams.",
      icon: Target,
    },
    {
      title: "Coaching & Capability",
      desc: "Direct mentoring of sales managers to replicate high-conversion consultative client practices.",
      icon: UserCheck,
    },
    {
      title: "Customer-Centric Execution",
      desc: "Aligning product delivery with genuine client suitability, retention, and long-term liquidity.",
      icon: Shield,
    },
  ];

  return (
    <section id="leadership" className="py-24 border-b border-white/[0.08] bg-[#090b0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/[0.08] pb-8 gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
              04 — LEADERSHIP
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              LEADERSHIP AT SCALE
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8e959e] max-w-md">
            I lead with a focus on people, performance and process. From individual contributors to
            managing teams and Sales Managers, I build high-performing teams through accountability,
            coaching and customer-centric practices.
          </p>
        </div>

        {/* Main Grid: Organizational Tree Visual vs Boardroom Editorial Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Organizational Architecture Hierarchy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold mb-2">
              ORGANIZATIONAL GOVERNANCE STRUCTURE
            </div>

            {/* Hierarchy Level 1: Business Leadership */}
            <div className="p-5 rounded-lg bg-[#0e1217] border border-emerald-500/30 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-wider text-emerald-400 font-bold uppercase">
                      LEVEL 01 // EXECUTIVE OVERSIGHT
                    </div>
                    <div className="text-base font-bold text-white">BUSINESS LEADERSHIP</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#cbd5e1] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
                  5 Sales Managers Led
                </span>
              </div>
              <p className="text-xs text-[#8e959e] mt-2 leading-relaxed">
                Strategic target setting, floor governance, budget allocation, and overarching
                commercial revenue accountability.
              </p>
            </div>

            {/* Connector Arrow */}
            <div className="flex justify-center -my-2">
              <div className="p-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Hierarchy Level 2: Sales Managers */}
            <div className="p-5 rounded-lg bg-[#0e1217] border border-white/10 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded bg-white/[0.04] text-white border border-white/10">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-wider text-[#94a3b8] font-bold uppercase">
                      LEVEL 02 // MANAGERIAL TIER
                    </div>
                    <div className="text-base font-bold text-white">SALES MANAGERS</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#cbd5e1] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
                  Teams up to 10 Members Each
                </span>
              </div>
              <p className="text-xs text-[#8e959e] mt-2 leading-relaxed">
                Tactical execution, daily floor pipeline supervision, conversion analytics, and
                performance mentoring.
              </p>
            </div>

            {/* Connector Arrow */}
            <div className="flex justify-center -my-2">
              <div className="p-1 rounded-full bg-white/[0.05] border border-white/15 text-white/60">
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Hierarchy Level 3: Client-Facing Teams */}
            <div className="p-5 rounded-lg bg-[#0e1217] border border-white/10 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded bg-white/[0.04] text-white border border-white/10">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-wider text-[#94a3b8] font-bold uppercase">
                      LEVEL 03 // FRONT-LINE EXECUTION
                    </div>
                    <div className="text-base font-bold text-white">CLIENT-FACING TEAMS</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#cbd5e1] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
                  3 Active Sales Teams
                </span>
              </div>
              <p className="text-xs text-[#8e959e] mt-2 leading-relaxed">
                High-net-worth client onboarding, multi-market brokerage acquisition, institutional
                relationship management, and ongoing account retention.
              </p>
            </div>
          </div>

          {/* Right Column: Boardroom Editorial Photo & Leadership Quotes */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative group rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-[#0e1217]">
              <Image
                src="/images/executive-boardroom.jpg"
                alt="Executive Boardroom overlooking skyline at dusk"
                width={800}
                height={480}
                className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0d] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold mb-1">
                  LEADERSHIP PHILOSOPHY
                </div>
                <div className="text-lg font-serif italic text-white leading-tight">
                  &ldquo;Better people. Stronger teams. Bigger impact.&rdquo;
                </div>
              </div>
            </div>

            {/* 3 Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {leadershipTenets.map((tenet, idx) => {
                const Icon = tenet.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#0e1217] border border-white/[0.06] hover:border-emerald-500/30 transition-all"
                  >
                    <Icon className="w-4 h-4 text-emerald-400 mb-2" />
                    <div className="text-xs font-bold text-white mb-1">{tenet.title}</div>
                    <div className="text-[11px] text-[#8e959e] leading-snug">{tenet.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
