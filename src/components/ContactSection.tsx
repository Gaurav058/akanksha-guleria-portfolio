"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <section id="contact" className="py-24 border-b border-white/[0.08] bg-[#090b0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold mb-2">
            10 — CONTACT
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.08]">
            LET&apos;S BUILD WHAT
            <br />
            <span className="text-emerald-400">COMES NEXT.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mt-4 leading-relaxed">
            For conversations around international sales, business development, financial markets,
            brokerage, strategic partnerships and leadership opportunities.
          </p>
        </div>

        {/* Contact Grid with Aviation Visual Backdrop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Direct Verified Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-lg bg-[#0e1217] border border-white/[0.08] hover:border-emerald-500/30 transition-all flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded bg-white/[0.03] border border-white/[0.08] text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#8e959e] uppercase">
                    DIRECT EMAIL
                  </div>
                  <a
                    href="mailto:akankshaguleria4@gmail.com"
                    className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    akankshaguleria4@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("akankshaguleria4@gmail.com", "email")}
                className="p-2 rounded hover:bg-white/10 text-[#8e959e] hover:text-white transition-colors"
                title="Copy Email"
                aria-label="Copy Email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-lg bg-[#0e1217] border border-white/[0.08] hover:border-emerald-500/30 transition-all flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded bg-white/[0.03] border border-white/[0.08] text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#8e959e] uppercase">
                    DIRECT TELEPHONE
                  </div>
                  <a
                    href="tel:+919587235665"
                    className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    +91 95872 35665
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard("+919587235665", "phone")}
                className="p-2 rounded hover:bg-white/10 text-[#8e959e] hover:text-white transition-colors"
                title="Copy Phone Number"
                aria-label="Copy Phone number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-lg bg-[#0e1217] border border-white/[0.08] hover:border-emerald-500/30 transition-all flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded bg-white/[0.03] border border-white/[0.08] text-emerald-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#8e959e] uppercase">
                    LINKEDIN IDENTITY
                  </div>
                  <a
                    href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors truncate max-w-[240px] sm:max-w-none block"
                  >
                    linkedin.com/in/akanksha-guleria-a55264210
                  </a>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded hover:bg-white/10 text-emerald-400"
                aria-label="Open LinkedIn profile"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 text-xs font-bold tracking-widest text-center text-white border border-white/20 hover:border-emerald-400 rounded bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center space-x-2 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-emerald-400" />
                <span>CONNECT ON LINKEDIN</span>
              </a>

              <a
                href="mailto:akankshaguleria4@gmail.com"
                className="py-3.5 px-4 text-xs font-bold tracking-widest text-center text-[#080a0d] bg-emerald-400 hover:bg-emerald-300 rounded flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/10 transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>SEND EMAIL</span>
              </a>
            </div>
          </div>

          {/* Right Column: Aviation Twilight Visual Composition */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0e1217]">
              <Image
                src="/images/aviation-twilight-horizon.jpg"
                alt="International Aviation Twilight Horizon over Dubai Coast"
                width={800}
                height={500}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0d] via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold mb-1">
                  GLOBAL COMMERCIAL PERSPECTIVE
                </div>
                <div className="text-sm font-serif italic text-white">
                  Available for strategic commercial leadership and advisory engagements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
