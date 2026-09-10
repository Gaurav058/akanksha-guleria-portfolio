"use client";

import { ArrowUp, Mail, MapPin } from "lucide-react";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#06080a] border-t border-white/[0.08] py-16 text-xs text-[#8e959e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06] items-start">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="text-base font-bold tracking-[0.2em] text-white uppercase">
              AKANKSHA GULERIA
            </div>
            <div className="text-xs text-emerald-400 font-medium tracking-wider uppercase">
              International Commercial Leader • Financial Markets & Investment Solutions
            </div>
            <p className="text-xs text-[#8e959e] max-w-md leading-relaxed">
              Operating across international client acquisition, brokerage solutions, sales operations,
              and strategic consulting between Dubai, UAE and India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] font-mono tracking-widest text-white uppercase font-bold mb-3">
              DIRECT CHANNELS
            </div>
            <div className="space-y-1.5">
              <div>
                <a
                  href="mailto:akankshaguleria4@gmail.com"
                  className="hover:text-emerald-400 transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>akankshaguleria4@gmail.com</span>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/akanksha-guleria-a55264210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center space-x-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>linkedin.com/in/akanksha-guleria</span>
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[#8e959e]">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dubai, UAE • India</span>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded border border-white/10 text-white hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all text-xs font-semibold tracking-wider"
              aria-label="Scroll back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>

        {/* Legal & Compliant Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} AKANKSHA GULERIA. All rights reserved. Personal Executive
            Brand Identity.
          </div>
          <div className="text-[#64748b] text-center md:text-right max-w-xl">
            Content adheres strictly to verified professional credentials and LinkedIn profile
            records. No retail financial, investment, or legal advice is offered.
          </div>
        </div>
      </div>
    </footer>
  );
}
