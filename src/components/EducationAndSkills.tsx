"use client";

import { GraduationCap, Award, CheckCircle2, ExternalLink } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function EducationAndSkills() {
  const verifiedSkills = [
    { name: "Industrial Sales", endorsements: "2 endorsements" },
    { name: "Data Analysis", endorsements: "1 endorsement" },
    { name: "Financial Analysis", endorsements: "1 endorsement" },
    { name: "Sales Management", endorsements: "LinkedIn Verified" },
    { name: "Foreign Exchange (FX) Trading", endorsements: "LinkedIn Verified" },
    { name: "Online Marketing", endorsements: "LinkedIn Verified" },
  ];

  return (
    <section id="education" className="py-24 border-b border-white/[0.08] bg-[#080a0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education (07 — EDUCATION) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-b border-white/[0.08] pb-6">
              <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
                07 — ACADEMIC FOUNDATION
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                EDUCATION
              </h2>
            </div>

            {/* University Card */}
            <div className="p-8 rounded-lg bg-[#0e1217] border border-white/[0.08] relative group hover:border-emerald-500/30 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded bg-white/[0.03] border border-white/[0.08] text-emerald-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#8e959e] px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.05]">
                  2016 – 2019
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                Himachal Pradesh University, Shimla
              </h3>

              <div className="text-sm font-semibold text-emerald-400 mt-1">
                Master of Business Administration (MBA)
              </div>

              <div className="text-xs text-[#94a3b8] mt-1">
                Business Administration and Management, General
              </div>

              <p className="mt-4 text-xs text-[#8e959e] leading-relaxed">
                Core grounding in strategic management, organizational behavior, financial analysis,
                and quantitative business operations. Primary academic record aligned with current
                LinkedIn positioning.
              </p>
            </div>
          </div>

          {/* Right Column: LinkedIn Skills & Endorsements (08 — SKILLS) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-b border-white/[0.08] pb-6 flex items-end justify-between">
              <div>
                <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
                  08 — VERIFIED SKILLS
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                  LINKEDIN COMPETENCIES
                </h2>
              </div>
              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 text-xs text-emerald-400 hover:underline"
              >
                <span>View on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Skills List with Exact Endorsements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {verifiedSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#0e1217] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-bold text-white">{skill.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8e959e] shrink-0">
                    {skill.endorsements}
                  </span>
                </div>
              ))}
            </div>

            {/* Transparent Data Note */}
            <div className="p-4 rounded bg-[#0a0d12] border border-white/[0.05] flex items-center justify-between text-xs text-[#8e959e]">
              <div className="flex items-center space-x-2">
                <LinkedinIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Endorsement counts faithfully reflect verified LinkedIn profile counts.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
