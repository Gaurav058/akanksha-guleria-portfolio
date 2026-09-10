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
    <section id="education" className="py-20 sm:py-28 border-b border-white/[0.07] bg-[#080a0b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Education (5 Cols) — Simple, Refined */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              09 — ACADEMIC FOUNDATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              EDUCATION
            </h2>

            <div className="border-t border-white/[0.08] pt-6 space-y-2">
              <div className="text-base sm:text-lg font-bold text-white">
                Himachal Pradesh University, Shimla
              </div>
              <div className="text-xs font-semibold text-[#c5a880] tracking-wider uppercase">
                Master of Business Administration (MBA)
              </div>
              <div className="text-xs text-[#9ca3af]">
                Business Administration and Management, General • 2016–2019
              </div>
              <p className="text-xs text-[#6b7280] leading-relaxed pt-2">
                Primary academic record aligned with active LinkedIn executive positioning.
              </p>
            </div>
          </div>

          {/* Right Column: LinkedIn Skills as Refined Typography (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
                  10 — VERIFIED COMPETENCIES
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
                  LINKEDIN SKILLS
                </h2>
              </div>
              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 text-xs text-[#c5a880] hover:underline"
              >
                <span>LinkedIn Record</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Skills as Refined Editorial Typography List */}
            <div className="border-t border-white/[0.08] pt-4 divide-y divide-white/[0.05]">
              {verifiedSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="py-3 flex items-center justify-between group"
                >
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#e5e7eb] group-hover:text-[#dfc298] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#6b7280] group-hover:text-[#c5a880] transition-colors">
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
