"use client";

import React, { useState } from "react";
import { Mail, Phone, ArrowUpRight, Copy, Check, Send } from "lucide-react";
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
    <section id="contact" className="py-24 sm:py-36 border-b border-white/[0.07] bg-[#080a0b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-4xl space-y-12">
          {/* Pre-title & Headline */}
          <div className="space-y-4">
            <div className="text-xs font-mono tracking-[0.24em] text-[#c5a880] uppercase font-semibold">
              11 — DIRECT ENGAGEMENT
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.04]">
              LET&apos;S BUILD WHAT
              <br />
              <span className="font-serif italic font-normal text-[#dfc298]">COMES NEXT.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#9ca3af] max-w-2xl font-normal leading-relaxed pt-2">
              For conversations around international sales, business development, financial markets,
              brokerage, strategic partnerships and leadership opportunities.
            </p>
          </div>

          {/* Three Direct Channels: Email, Phone, LinkedIn */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/[0.08]">
            {/* Email */}
            <div className="space-y-2 border-l border-white/10 pl-5 py-2 group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#6b7280] uppercase">
                  EMAIL DIRECT
                </span>
                <button
                  onClick={() => copyToClipboard("akankshaguleria4@gmail.com", "email")}
                  className="text-[#9ca3af] hover:text-white p-1"
                  title="Copy Email"
                  aria-label="Copy Email address"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                href="mailto:akankshaguleria4@gmail.com"
                className="text-sm font-bold text-white hover:text-[#c5a880] transition-colors block break-all"
              >
                akankshaguleria4@gmail.com
              </a>
              <div className="text-[11px] text-[#6b7280]">Verified Direct Inbox</div>
            </div>

            {/* Phone */}
            <div className="space-y-2 border-l border-white/10 pl-5 py-2 group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#6b7280] uppercase">
                  TELEPHONE
                </span>
                <button
                  onClick={() => copyToClipboard("+919587235665", "phone")}
                  className="text-[#9ca3af] hover:text-white p-1"
                  title="Copy Phone"
                  aria-label="Copy Phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-[#c5a880]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <a
                href="tel:+919587235665"
                className="text-sm font-bold text-white hover:text-[#c5a880] transition-colors block"
              >
                +91 95872 35665
              </a>
              <div className="text-[11px] text-[#6b7280]">Direct Line (India / UAE)</div>
            </div>

            {/* LinkedIn */}
            <div className="space-y-2 border-l border-white/10 pl-5 py-2 group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#6b7280] uppercase">
                  LINKEDIN
                </span>
                <a
                  href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c5a880] p-1"
                  aria-label="Open LinkedIn profile"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-white hover:text-[#c5a880] transition-colors block truncate"
              >
                linkedin.com/in/akanksha-guleria
              </a>
              <div className="text-[11px] text-[#6b7280]">1.6K+ Audience • 500+ Network</div>
            </div>
          </div>

          {/* Two Primary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-4 text-xs font-bold tracking-[0.16em] text-[#080a0b] bg-[#c5a880] hover:bg-[#dfc298] rounded transition-all active:scale-[0.98] shadow-lg shadow-black/30"
            >
              <LinkedinIcon className="w-4 h-4 text-[#080a0b]" />
              <span>CONNECT ON LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:akankshaguleria4@gmail.com"
              className="inline-flex items-center space-x-2 px-6 py-4 text-xs font-semibold tracking-[0.14em] text-white border border-white/20 hover:border-white/40 rounded bg-white/[0.02] hover:bg-white/[0.06] transition-all"
            >
              <Send className="w-4 h-4 text-[#c5a880]" />
              <span>SEND EMAIL</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
