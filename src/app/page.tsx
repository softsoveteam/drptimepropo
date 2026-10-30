import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { ProposalSections } from "@/components/ProposalSections";

export const metadata: Metadata = {
  title: "Dr.Prime Digital Growth Plan | Softsove Performance Marketing",
  description:
    "Explore Softsove’s Google Ads, Meta Ads, SEO, custom CRM, and ₹35,000/month SEO + SMM combo plan for Dr.Prime / PrimeHeal.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dr.Prime Digital Growth Plan | Softsove",
    description:
      "Performance marketing proposal with custom CRM reporting and SEO + SMM pricing.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-purple focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to proposal content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1" role="main">
        <Hero />
        <Marquee />
        <article itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="Dr.Prime Digital Growth Plan" />
          <meta itemProp="author" content="Softsove" />
          <ProposalSections />
        </article>
      </main>
      <Footer />
    </>
  );
}
