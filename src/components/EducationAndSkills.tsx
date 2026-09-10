"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export default function EducationAndSkills() {
  const verifiedSkills = [
    { name: "Industrial Sales", note: "2 endorsements" },
    { name: "Data Analysis", note: "1 endorsement" },
    { name: "Financial Analysis", note: "1 endorsement" },
    { name: "Sales Management", note: "LinkedIn Verified" },
    { name: "Foreign Exchange (FX) Trading", note: "LinkedIn Verified" },
    { name: "Online Marketing", note: "LinkedIn Verified" },
  ];

  return (
    <section id="education" className="py-28 sm:py-36 border-b border-editorial bg-[#080a0b] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Education (5 Cols) — Minimal, Typographic */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              09 — ACADEMIC CREDENTIAL
            </div>
            <h2 className="text-section-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase">
              EDUCATION
            </h2>

            <div className="pt-6 border-t border-editorial space-y-3">
              <div className="text-lg sm:text-xl font-bold text-white tracking-wide">
                Himachal Pradesh University, Shimla
              </div>
              <div className="text-sm font-semibold text-[#dfc298] tracking-wider uppercase">
                MBA — Business Administration & Management
              </div>
              <div className="text-xs font-mono text-[#6e767c]">
                Class of 2016 – 2019
              </div>
              <p className="text-xs text-[#949a9e] leading-relaxed pt-2">
                Postgraduate degree in business administration providing the foundational rigor for
                commercial enterprise sales, business analysis, and organizational governance.
              </p>
            </div>
          </div>

          {/* Right Column: Verified LinkedIn Skills (7 Cols) — Refined Editorial List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
                  10 — VERIFIED COMPETENCIES
                </div>
                <h2 className="text-section-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase">
                  LINKEDIN SKILLS
                </h2>
              </div>
              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 text-xs text-[#c5a880] hover:text-[#dfc298] transition-colors"
              >
                <span>View LinkedIn Record</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Skills Editorial Hairline List */}
            <div className="pt-2 divide-y divide-white/[0.06] border-t border-editorial">
              {verifiedSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex items-center justify-between group hover:bg-white/[0.01] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#f5f6f7] group-hover:text-[#dfc298] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#6e767c] group-hover:text-[#c5a880] transition-colors">
                    {skill.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

