"use client";

import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, Layers, ChevronRight } from "lucide-react";

export default function CareerArc() {
  const careerStages = [
    {
      id: "01",
      stageTitle: "Sales Foundation",
      role: "Sales Executive",
      company: "Inspiris Media Ltd.",
      period: "2016 – 2021",
      employmentType: "Full-time",
      location: "India",
      tag: "COMMERCIAL ACUMEN",
      summary:
        "Building foundational expertise in high-touch client prospecting, direct B2B/B2C sales generation, and structured pipeline management.",
      domain: "Sales Execution & Pipeline Discipline",
    },
    {
      id: "02",
      stageTitle: "Business Development",
      role: "Business Development Executive",
      company: "XtreamForex",
      period: "Feb 2019 – Apr 2021",
      employmentType: "Full-time",
      location: "India",
      tag: "BROKERAGE & ONBOARDING",
      summary:
        "Global financial markets business development, retail and institutional trader onboarding, and client account lifecycle management.",
      domain: "Forex Brokerage & Client Acquisition",
    },
    {
      id: "03",
      stageTitle: "Financial Markets",
      role: "Forex Trader",
      company: "Forex",
      period: "Feb 2018 – Feb 2026",
      employmentType: "Full-time",
      location: "Chandigarh, India",
      tag: "MARKET DYNAMICS",
      summary:
        "Direct foreign exchange trading, fundamental currency analysis, risk profiling, and deep liquidity mechanism analysis across major FX pairs.",
      domain: "FX Trading & Market Intelligence",
      isConcurrent: true,
    },
    {
      id: "04",
      stageTitle: "Brokerage Solutions",
      role: "Head of Brokerage Solutions",
      company: "Fx Global Consultants",
      period: "May 2024 – Present",
      employmentType: "Full-time",
      location: "Dubai, United Arab Emirates",
      tag: "EXECUTIVE LEADERSHIP",
      summary:
        "Leading brokerage solution delivery, strategic institutional partnerships, introducing broker (IB) networks, and multi-asset market solutions.",
      domain: "Brokerage Operations & Solutions",
      isCurrent: true,
    },
    {
      id: "05",
      stageTitle: "Sales Operations",
      role: "Head of Sales Operations",
      company: "Fx Global Consultant",
      period: "Jan 2025 – Present",
      employmentType: "Full-time",
      location: "United Arab Emirates",
      tag: "COMMERCIAL EXPANSION",
      summary:
        "Directing commercial sales operations, floor performance optimization, conversion strategy, and cross-functional team accountability.",
      domain: "Floor Sales Leadership & Operations",
      isCurrent: true,
      isConcurrent: true,
    },
    {
      id: "06",
      stageTitle: "Strategic Consulting",
      role: "Senior Consultant",
      company: "Aethora Technologies",
      period: "Jul 2026 – Present",
      employmentType: "Contract • On-site",
      location: "Dubai, United Arab Emirates",
      tag: "ENTERPRISE STRATEGY",
      summary:
        "Senior commercial consulting for international enterprise expansion, financial technology integration, and cross-border commercial strategy.",
      domain: "Strategic Consulting & Fintech Advisory",
      isCurrent: true,
      isConcurrent: true,
    },
  ];

  const [selectedStage, setSelectedStage] = useState(careerStages[3]);

  return (
    <section id="experience" className="py-24 border-b border-white/[0.08] bg-[#080a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/[0.08] pb-8 gap-6">
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
              03 — CAREER ARC
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              THE CAREER ARC
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8e959e] max-w-md">
            Chronological progression from verified LinkedIn and executive career records.
            Honoring authentic multi-dimensional activity across trading, brokerage, operations, and
            strategic consulting.
          </p>
        </div>

        {/* 6 Stages Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerStages.map((stage) => {
            const isSelected = selectedStage.id === stage.id;
            return (
              <div
                key={stage.id}
                onClick={() => setSelectedStage(stage)}
                className={`cursor-pointer p-6 rounded-lg border transition-all duration-300 relative group flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#111720] border-emerald-400 shadow-xl shadow-emerald-950/20"
                    : "bg-[#0d1015] border-white/[0.08] hover:border-white/20 hover:bg-[#0f131a]"
                }`}
              >
                <div>
                  {/* Top Bar: Stage Number & Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-emerald-400">
                      {stage.id} // {stage.stageTitle}
                    </span>

                    {stage.isCurrent && (
                      <span className="text-[10px] font-semibold tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                        PRESENT
                      </span>
                    )}
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {stage.role}
                  </h3>
                  <div className="text-sm font-medium text-[#cbd5e1] mt-0.5">
                    {stage.company}
                  </div>

                  {/* Metadata: Dates & Location */}
                  <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-[#8e959e]">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      <span>{stage.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>{stage.location}</span>
                    </div>
                  </div>

                  {/* Short Summary */}
                  <p className="mt-4 text-xs text-[#94a3b8] leading-relaxed line-clamp-3">
                    {stage.summary}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] tracking-wider uppercase text-[#8e959e] font-mono">
                    {stage.tag}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-emerald-400 translate-x-1" : "text-white/30"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Banner on Active Selected Role */}
        <div className="mt-10 p-6 sm:p-8 rounded-lg bg-[#0e1319] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
              <Layers className="w-3.5 h-3.5" />
              <span>STAGE DETAIL: {selectedStage.id} — {selectedStage.stageTitle}</span>
            </div>
            <div className="text-lg font-bold text-white">
              {selectedStage.role} • <span className="text-emerald-400">{selectedStage.company}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#94a3b8] max-w-2xl">
              {selectedStage.summary} Operating domain: {selectedStage.domain}.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs">
            <div className="text-[#cbd5e1] font-mono">{selectedStage.period}</div>
            <div className="text-[#8e959e]">{selectedStage.location} ({selectedStage.employmentType})</div>
          </div>
        </div>
      </div>
    </section>
  );
}
