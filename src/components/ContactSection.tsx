"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Send } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 border-b border-editorial bg-[#080a0b] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authoritative Executive Invitation (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[11px] font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              11 — DIRECT ENGAGEMENT
            </div>

            <h2 className="text-hero-headline font-extrabold tracking-tight text-[#f5f6f7] uppercase leading-[1.02]">
              LET&apos;S BUILD
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">
                WHAT&apos;S NEXT.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#949a9e] max-w-xl font-normal leading-relaxed">
              Available for commercial leadership appointments, institutional brokerage solutions,
              sales floor operations advisory, and cross-border business expansion between Dubai, the GCC,
              and India.
            </p>

            {/* Two Primary CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 text-xs font-bold tracking-[0.14em] text-[#080a0b] bg-[#c5a880] hover:bg-[#dfc298] rounded transition-all active:scale-[0.98] shadow-lg shadow-black/30"
              >
                <LinkedinIcon className="w-4 h-4 text-[#080a0b]" />
                <span>CONNECT ON LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:akankshaguleria4@gmail.com"
                className="inline-flex items-center space-x-2 px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-white border border-white/20 hover:border-white/40 rounded bg-white/[0.02] hover:bg-white/[0.06] transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>SEND DIRECT EMAIL</span>
              </a>
            </div>
          </div>

          {/* Right Column: Three Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-8">
            <div className="border-t border-editorial pt-6 space-y-6">
              {/* Email */}
              <div className="space-y-1.5 group">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#6e767c] uppercase">
                  <span>DIRECT INBOX</span>
                  <button
                    onClick={() => copyToClipboard("akankshaguleria4@gmail.com", "email")}
                    className="text-[#949a9e] hover:text-white p-1 transition-colors"
                    title="Copy Email address"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? (
                      <span className="flex items-center space-x-1 text-[#c5a880]">
                        <Check className="w-3 h-3" />
                        <span>COPIED</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1">
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </span>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:akankshaguleria4@gmail.com"
                  className="text-base sm:text-lg font-bold text-white hover:text-[#dfc298] transition-colors block break-all font-mono"
                >
                  akankshaguleria4@gmail.com
                </a>
                <div className="text-xs text-[#6e767c]">Primary Executive Correspondence</div>
              </div>

              {/* Telephone */}
              <div className="space-y-1.5 group pt-4 border-t border-editorial-subtle">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#6e767c] uppercase">
                  <span>DIRECT TELEPHONE</span>
                  <button
                    onClick={() => copyToClipboard("+916363112082", "phone")}
                    className="text-[#949a9e] hover:text-white p-1 transition-colors"
                    title="Copy Phone number"
                    aria-label="Copy Phone number"
                  >
                    {copiedPhone ? (
                      <span className="flex items-center space-x-1 text-[#c5a880]">
                        <Check className="w-3 h-3" />
                        <span>COPIED</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1">
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </span>
                    )}
                  </button>
                </div>
                <a
                  href="tel:+916363112082"
                  className="text-base sm:text-lg font-bold text-white hover:text-[#dfc298] transition-colors block font-mono"
                >
                  +91 6363112082
                </a>
                <div className="text-xs text-[#6e767c]">Direct Line • India & UAE Timezones</div>
              </div>

              {/* Location */}
              <div className="space-y-1.5 pt-4 border-t border-editorial-subtle">
                <div className="text-[10px] font-mono tracking-widest text-[#6e767c] uppercase">
                  PRIMARY RESIDENCE & BASE
                </div>
                <div className="text-base sm:text-lg font-bold text-white">
                  Dubai, United Arab Emirates
                </div>
                <div className="text-xs text-[#6e767c]">Available for global commercial travel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

