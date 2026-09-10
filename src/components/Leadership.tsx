"use client";

import React from "react";
import { ArrowDown } from "lucide-react";

export default function Leadership() {
  const leadershipStory = [
    {
      level: "01",
      title: "BUSINESS LEADERSHIP",
      subtitle: "EXECUTIVE OVERSIGHT & COMMERCIAL STRATEGY",
      detail: "Strategic target setting, floor performance governance, conversion accountability, and commercial growth.",
    },
    {
      level: "02",
      title: "5 SALES MANAGERS",
      subtitle: "MANAGERIAL MENTORING & SUPERVISION",
      detail: "Leading and coaching five Sales Managers to build accountability, process rigor, and consultative sales discipline.",
    },
    {
      level: "03",
      title: "TEAMS OF UP TO 10 MEMBERS EACH",
      subtitle: "HIGH-CONVERSION SALES CAPACITY",
      detail: "Overseeing multi-tier commercial trading floor teams driving structured lead generation, onboarding, and retention.",
    },
    {
      level: "04",
      title: "CLIENT-FACING SALES EXECUTION",
      subtitle: "3 ACTIVE SALES TEAMS MANAGED",
      detail: "Direct floor execution, account manager coaching, client relationship longevity, and customer-centric sales practices.",
    },
  ];

  return (
    <section id="leadership" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#080a0b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-white/[0.07] gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold mb-2">
              05 — LEADERSHIP
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              LEADERSHIP AT SCALE.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9ca3af] max-w-md font-normal leading-relaxed">
            I lead with a focus on people, performance, and process. Building high-performing teams
            through accountability, coaching, and customer-centric commercial discipline.
          </p>
        </div>

        {/* Organizational Leadership Story Visual */}
        <div className="max-w-3xl mx-auto space-y-4">
          {leadershipStory.map((step, idx) => (
            <React.Fragment key={step.level}>
              {/* Step Card */}
              <div className="p-6 sm:p-8 rounded-lg border border-white/[0.08] bg-[#0d1112] hover:border-[#c5a880]/40 transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-xl font-bold tracking-wide text-white uppercase group-hover:text-[#dfc298] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-mono tracking-widest text-[#c5a880] uppercase">
                    {step.subtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {step.detail}
                </p>
              </div>

              {/* Connecting Line & Subtle Arrow (Between Steps) */}
              {idx < leadershipStory.length - 1 && (
                <div className="flex items-center justify-center py-1">
                  <div className="flex flex-col items-center">
                    <div className="h-4 w-px bg-white/15" />
                    <ArrowDown className="w-3 h-3 text-[#c5a880]" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Supporting Leadership Principle */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.05] text-center">
          <div className="font-serif italic text-lg sm:text-xl text-[#e5e7eb]">
            &ldquo;Better people. Stronger teams. Measurable impact.&rdquo;
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#6b7280] uppercase mt-2">
            EXECUTIVE MANAGEMENT RECORD // VERIFIED IN ATS & EXECUTIVE DOSSIER
          </div>
        </div>
      </div>
    </section>
  );
}
