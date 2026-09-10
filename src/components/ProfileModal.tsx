"use client";

import React from "react";
import { X, Printer, Mail, Phone, MapPin } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-[1300] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto no-print"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Executive Profile Dossier"
    >
      <div
        className="bg-[#0d1112] border border-white/15 rounded-lg max-w-3xl w-full my-8 overflow-hidden shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#080a0b]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
            <span className="text-xs font-mono tracking-widest text-white uppercase font-bold">
              VERIFIED EXECUTIVE PROFILE // AKANKSHA GULERIA
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded text-xs font-bold bg-[#c5a880] text-[#080a0b] hover:bg-[#dfc298] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / SAVE PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-[#9ca3af] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Executive Dossier Content */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible text-white">
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
              AKANKSHA GULERIA
            </h1>
            <div className="text-sm font-semibold text-[#c5a880] mt-1">
              Senior Sales & Business Development • Financial Markets & Investment Solutions
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#cbd5e1]">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <a href="mailto:akankshaguleria4@gmail.com" className="hover:underline">
                  akankshaguleria4@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <a href="tel:+919587235665" className="hover:underline">
                  +91 95872 35665
                </a>
              </div>
              <div className="flex items-center space-x-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#c5a880]" />
                <a
                  href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/akanksha-guleria-a55264210
                </a>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <div className="text-xs font-mono tracking-widest text-[#c5a880] uppercase font-bold mb-2">
              EXECUTIVE SUMMARY
            </div>
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              Senior Sales & Business Development professional with 8+ years of experience working
              across financial markets, investment solutions, brokerage and international client
              acquisition. Proven track record spanning high-value sales execution (US$100K monthly
              as Account Manager; US$500K+ monthly floor business contribution), multi-tier sales team
              governance (led 5 Sales Managers as Business Head), and long-term client relationship
              retention across India and the United Arab Emirates.
            </p>
          </div>

          {/* Key Verified Metrics */}
          <div>
            <div className="text-xs font-mono tracking-widest text-[#c5a880] uppercase font-bold mb-3">
              VERIFIED QUANTITATIVE IMPACT
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded bg-white/[0.03] border border-white/[0.08]">
                <div className="text-lg font-bold text-white font-mono">US$100K</div>
                <div className="text-[11px] text-[#9ca3af]">Monthly sales as Account Manager</div>
              </div>
              <div className="p-3 rounded bg-white/[0.03] border border-white/[0.08]">
                <div className="text-lg font-bold text-white font-mono">US$500K+</div>
                <div className="text-[11px] text-[#9ca3af]">Monthly floor business contributed</div>
              </div>
              <div className="p-3 rounded bg-white/[0.03] border border-white/[0.08]">
                <div className="text-lg font-bold text-white font-mono">US$50K–60K</div>
                <div className="text-[11px] text-[#9ca3af]">Average monthly sales baseline</div>
              </div>
              <div className="p-3 rounded bg-white/[0.03] border border-white/[0.08]">
                <div className="text-lg font-bold text-white font-mono">100+</div>
                <div className="text-[11px] text-[#9ca3af]">Client relationships managed</div>
              </div>
              <div className="p-3 rounded bg-white/[0.03] border border-white/[0.08]">
                <div className="text-lg font-bold text-white font-mono">3</div>
                <div className="text-[11px] text-[#9ca3af]">Sales teams managed</div>
              </div>
              <div className="p-3 rounded bg-white/[0.03] border border-white/[0.08]">
                <div className="text-lg font-bold text-white font-mono">5</div>
                <div className="text-[11px] text-[#9ca3af]">Sales Managers led as Business Head</div>
              </div>
            </div>
          </div>

          {/* Career Chronology */}
          <div>
            <div className="text-xs font-mono tracking-widest text-[#c5a880] uppercase font-bold mb-4">
              PROFESSIONAL CAREER APPOINTMENTS
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-[#c5a880] pl-4">
                <div className="font-bold text-white">Senior Consultant • Aethora Technologies</div>
                <div className="text-xs text-[#9ca3af] font-mono">Jul 2026 – Present | Dubai, UAE (Contract • On-site)</div>
                <div className="text-xs text-[#cbd5e1] mt-1">
                  Senior advisory for commercial expansion, client acquisition strategy, and cross-market financial technology initiatives.
                </div>
              </div>

              <div className="border-l-2 border-[#c5a880] pl-4">
                <div className="font-bold text-white">Head of Sales Operations • Fx Global Consultant</div>
                <div className="text-xs text-[#9ca3af] font-mono">Jan 2025 – Present | UAE (Full-time • On-site)</div>
                <div className="text-xs text-[#cbd5e1] mt-1">
                  Floor sales leadership, workflow optimization, pipeline acceleration, and performance coaching.
                </div>
              </div>

              <div className="border-l-2 border-[#c5a880] pl-4">
                <div className="font-bold text-white">Head of Brokerage Solutions • Fx Global Consultants</div>
                <div className="text-xs text-[#9ca3af] font-mono">May 2024 – Present | Dubai, UAE (Full-time)</div>
                <div className="text-xs text-[#cbd5e1] mt-1">
                  Structuring brokerage partnerships, introducing broker (IB) networks, and onboarding client accounts.
                </div>
              </div>

              <div className="border-l-2 border-white/20 pl-4">
                <div className="font-bold text-white">Forex Trader • Forex</div>
                <div className="text-xs text-[#9ca3af] font-mono">Feb 2018 – Feb 2026 | Chandigarh, India (Full-time)</div>
                <div className="text-xs text-[#cbd5e1] mt-1">
                  Direct FX market trading, fundamental currency analysis, risk profiling, and liquidity understanding.
                </div>
              </div>

              <div className="border-l-2 border-white/20 pl-4">
                <div className="font-bold text-white">Business Development Executive • XtreamForex</div>
                <div className="text-xs text-[#9ca3af] font-mono">Feb 2019 – Apr 2021 (Full-time)</div>
                <div className="text-xs text-[#cbd5e1] mt-1">
                  International brokerage business development, client relationship acquisition, and onboarding operations.
                </div>
              </div>

              <div className="border-l-2 border-white/20 pl-4">
                <div className="font-bold text-white">Sales Executive • Inspiris Media Ltd.</div>
                <div className="text-xs text-[#9ca3af] font-mono">2016 – 2021 (Full-time)</div>
                <div className="text-xs text-[#cbd5e1] mt-1">
                  Foundational B2B/B2C sales generation, client prospecting, and account lifecycle management.
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="text-xs font-mono tracking-widest text-[#c5a880] uppercase font-bold mb-2">
              ACADEMIC CREDENTIALS
            </div>
            <div className="p-4 rounded bg-white/[0.03] border border-white/[0.08]">
              <div className="font-bold text-white text-sm">Himachal Pradesh University, Shimla</div>
              <div className="text-xs text-[#c5a880] font-medium">
                Master of Business Administration (MBA) • Business Administration and Management, General
              </div>
              <div className="text-xs text-[#9ca3af] font-mono mt-1">2016 – 2019</div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#080a0b] border-t border-white/10 flex items-center justify-between text-xs text-[#9ca3af]">
          <span>Executive Digital Dossier • Dubai, United Arab Emirates</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
