import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#080a0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://akanksha-guleria.com"),
  title: "Akanksha Guleria | International Commercial Leader & Financial Markets Executive",
  description:
    "Executive digital identity of Akanksha Guleria — Senior Sales & Business Development professional specializing in Financial Markets, Brokerage Solutions, Investment Products, and International Client Acquisition across UAE and India.",
  keywords: [
    "Akanksha Guleria",
    "Akanksha Guleria Dubai",
    "Akanksha Guleria Sales",
    "Akanksha Guleria Business Development",
    "Akanksha Guleria Financial Markets",
    "Akanksha Guleria Forex",
    "Akanksha Guleria Brokerage",
    "Akanksha Guleria Aethora Technologies",
    "Senior Sales Manager Dubai",
    "International Business Development",
    "Financial Markets Sales",
  ],
  authors: [{ name: "Akanksha Guleria", url: "https://www.linkedin.com/in/akanksha-guleria-a55264210/" }],
  creator: "Akanksha Guleria",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://akanksha-guleria.com",
    title: "Akanksha Guleria | Financial Markets & International Business Development",
    description:
      "Senior Sales & Business Development professional working across financial markets, investment solutions, brokerage and international client acquisition.",
    siteName: "Akanksha Guleria - Executive Identity",
    images: [
      {
        url: "/images/akanksha-guleria-real.jpg",
        width: 1200,
        height: 630,
        alt: "Akanksha Guleria - Financial Markets Executive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akanksha Guleria | Financial Markets & Business Development",
    description: "International Commercial Leader in Financial Markets, Brokerage Solutions & Business Development.",
    images: ["/images/akanksha-guleria-real.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://akanksha-guleria.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akanksha Guleria",
    jobTitle: "Senior Consultant / Head of Brokerage Solutions & Sales Operations",
    worksFor: [
      {
        "@type": "Organization",
        name: "Aethora Technologies",
      },
      {
        "@type": "Organization",
        name: "Fx Global Consultants",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "United Arab Emirates",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Himachal Pradesh University, Shimla",
      department: "Master of Business Administration (MBA)",
    },
    knowsAbout: [
      "Financial Markets",
      "Investment Solutions",
      "Brokerage",
      "Foreign Exchange (FX) Trading",
      "International Client Acquisition",
      "Sales Strategy & Revenue Growth",
      "Data Analysis",
    ],
    sameAs: ["https://www.linkedin.com/in/akanksha-guleria-a55264210/"],
    email: "mailto:akankshaguleria4@gmail.com",
    telephone: "+91 95872 35665",
  };

  return (
    <html lang="en" className={`${jakartaSans.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#080a0d] text-[#f4f5f7] selection:bg-emerald-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
