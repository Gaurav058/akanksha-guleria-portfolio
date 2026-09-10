"use client";

import React from "react";
import Image from "next/image";
import { Globe, LineChart, Briefcase, Handshake, CheckCircle2 } from "lucide-react";

export default function AboutThesis() {
  const domainBadges = [
    { title: "Financial Markets", icon: LineChart, desc: "FX liquidity & institutional flow" },
    { title: "Investment Solutions", icon: Briefcase, desc: "High-net-worth portfolio alignment" },
    { title: "Brokerage", icon: Handshake, desc: "Structuring IB & partner ecosystems" },
    { title: "International Sales", icon: Globe, desc: "Cross-border client acquisition" },
  ];

  const thesisPillars = [
    "International Client Acquisition",
    "Financial Markets Execution",
    "Investment Products",
    "Brokerage Infrastructure",
    "Business Development",
    "Relationship Management",
    "Sales Strategy",
    "Team Coordination",
    "Revenue Growth",
  ];

  return (
    <section id="about" className="py-24 border-b border-white/[0.08] relative bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
            01 — ABOUT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            BEYOND THE JOB TITLE.
          </h2>
        </div>

        {/* Top Grid: Narrative & Editorial Skyline Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
          {/* Left: Professional Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-[#e2e8f0] font-normal leading-relaxed">
              I am a commercial professional with{" "}
              <span className="text-white font-semibold underline decoration-emerald-500/50 decoration-2 underline-offset-4">
                8+ years of experience
              </span>{" "}
              in international financial services, fintech, investment, brokerage and high-growth
              businesses.
            </p>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              I specialize in sales execution, client relationships, acquisition, and revenue growth,
              with a strong focus on building long-term partnerships and creating measurable business
              impact across competitive international jurisdictions.
            </p>

            {/* Strategic Domain Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {domainBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#0e1217] border border-white/[0.07] hover:border-emerald-500/30 transition-all text-left"
                  >
                    <Icon className="w-4 h-4 text-emerald-400 mb-2" />
                    <div className="text-xs font-bold text-white tracking-wide">{badge.title}</div>
                    <div className="text-[10px] text-[#8e959e] mt-1 leading-tight">{badge.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Dubai Financial District Skyline Image Composition */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-[#0e1217]">
              <Image
                src="/images/dubai-financial-skyline.jpg"
                alt="Dubai DIFC Financial District Skyline"
                width={800}
                height={500}
                className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0d] via-[#080a0d]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold mb-1">
                  INTERNATIONAL PERSPECTIVE
                </div>
                <div className="text-sm font-serif italic text-white leading-snug">
                  &ldquo;International exposure. Commercial mindset. Lasting relationships.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Statement: Professional Thesis Banner */}
        <div className="p-8 sm:p-12 rounded-xl bg-gradient-to-br from-[#0e1319] via-[#0d1117] to-[#080a0d] border border-emerald-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-block text-[11px] font-mono tracking-[0.25em] text-emerald-400 uppercase font-bold px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              COMMERCIAL THESIS
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              SALES IS THE ENGINE.
              <br />
              <span className="text-emerald-400">RELATIONSHIPS ARE THE ADVANTAGE.</span>
            </h3>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Sustainable commercial performance does not rely on short-term transactions. It is
              built on establishing deep institutional trust, understanding client investment
              horizons, and leading teams that execute with disciplined consistency.
            </p>

            {/* Structured focus areas */}
            <div className="pt-2 flex flex-wrap gap-2">
              {thesisPillars.map((pillar, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#cbd5e1] bg-white/[0.03] border border-white/[0.08]"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{pillar}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
