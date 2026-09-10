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
  themeColor: "#080a0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://akanksha-guleria.com"),
  title: "Akanksha Guleria | Senior Sales & Business Development | Financial Markets",
  description:
    "Official executive digital identity of Akanksha Guleria — Senior Sales & Business Development professional working across Dubai, Financial Markets, International Sales, Brokerage, Investment Solutions, and Sales Leadership.",
  keywords: [
    "Akanksha Guleria",
    "Akanksha Guleria Dubai",
    "Financial Markets Dubai",
    "Senior Sales Manager Dubai",
    "International Sales",
    "Business Development",
    "Brokerage",
    "Investment Solutions",
    "Sales Leadership",
    "Aethora Technologies",
  ],
  authors: [{ name: "Akanksha Guleria", url: "https://www.linkedin.com/in/akanksha-guleria-a55264210/" }],
  creator: "Akanksha Guleria",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://akanksha-guleria.com",
    title: "Akanksha Guleria | Senior Sales & Business Development | Financial Markets",
    description:
      "Senior Sales & Business Development professional working across financial markets, investment solutions, brokerage and international client acquisition in Dubai and India.",
    siteName: "Akanksha Guleria — Executive Digital Identity",
    images: [
      {
        url: "/images/akanksha-guleria-executive.jpg",
        width: 853,
        height: 1024,
        alt: "Akanksha Guleria — Senior Sales & Business Development professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akanksha Guleria | Financial Markets & International Business Development",
    description: "International Commercial Leader in Financial Markets, Brokerage Solutions & Business Development.",
    images: ["/images/akanksha-guleria-executive.jpg"],
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
    telephone: "+91 6363112082",
  };

  return (
    <html lang="en" className={`${jakartaSans.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#080a0b] text-[#f5f6f7] selection:bg-[#c5a880]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
