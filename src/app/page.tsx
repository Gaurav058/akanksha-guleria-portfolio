"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import AboutThesis from "@/components/AboutThesis";
import CareerArc from "@/components/CareerArc";
import FinancialMarkets from "@/components/FinancialMarkets";
import Leadership from "@/components/Leadership";
import InternationalExperience from "@/components/InternationalExperience";
import BusinessPoint from "@/components/BusinessPoint";
import StrategicCapabilities from "@/components/StrategicCapabilities";
import EducationAndSkills from "@/components/EducationAndSkills";
import ContactSection from "@/components/ContactSection";
import ProfileModal from "@/components/ProfileModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080a0b] text-[#f5f6f7] flex flex-col antialiased selection:bg-[#c5a880]/30 selection:text-white">
      {/* Sticky Executive Navigation Bar */}
      <Navbar onOpenProfile={() => setProfileModalOpen(true)} />

      {/* Main Content Sections Following Cinematic Scroll Rhythm */}
      <main className="flex-grow">
        {/* 01: Hero Section */}
        <Hero onOpenProfile={() => setProfileModalOpen(true)} />

        {/* 02: Impact (The Scale of Experience) */}
        <Impact />

        {/* 03: About & Professional Thesis (Beyond The Job Title) */}
        <AboutThesis />

        {/* 04: The Career Arc */}
        <CareerArc />

        {/* 05: Financial Markets, From The Commercial Side */}
        <FinancialMarkets />

        {/* 06: Leadership at Scale */}
        <Leadership />

        {/* 07: International Experience (India ↔ UAE) */}
        <InternationalExperience />

        {/* 08: Case Study — Project: Business Point */}
        <BusinessPoint />

        {/* 09: Strategic Capabilities (Expertise System) */}
        <StrategicCapabilities />

        {/* 10: Education & Verified LinkedIn Skills */}
        <EducationAndSkills />

        {/* 11: Contact Section (Let's Build What Comes Next) */}
        <ContactSection />
      </main>

      {/* Verified Executive Profile Modal */}
      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />

      {/* Executive Footer */}
      <Footer />
    </div>
  );
}
