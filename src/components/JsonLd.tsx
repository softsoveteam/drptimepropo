import { proposal, softsove } from "@/data/proposal";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://proposal.softsove.com";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Softsove Private Limited",
    url: softsove.website,
    logo: softsove.logo,
    email: softsove.email,
    telephone: softsove.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "5th Floor, Aakruti Business Hub, A-V Rd, Beside Triveni Complex",
      addressLocality: "Anand",
      addressRegion: "Gujarat",
      postalCode: "388001",
      addressCountry: "IN",
    },
    sameAs: [softsove.website],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${proposal.client} Digital Growth Plan`,
    description:
      "Softsove performance marketing proposal covering Google Ads, Meta Ads, SEO, custom CRM, and SEO + SMM combo pricing.",
    url: siteUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Softsove",
      url: softsove.website,
    },
    about: {
      "@type": "Thing",
      name: `${proposal.client} / PrimeHeal digital growth`,
    },
    provider: {
      "@type": "Organization",
      name: "Softsove",
      url: softsove.website,
    },
    datePublished: "2026-08-01",
    dateModified: "2026-10-30",
    inLanguage: "en-IN",
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO + SMM Combo Plan",
    description:
      "Combined SEO and social media marketing plan including AI-made UGC content and social media posting.",
    provider: {
      "@type": "Organization",
      name: "Softsove",
      url: softsove.website,
    },
    areaServed: ["IN", "NZ", "US"],
    offers: {
      "@type": "Offer",
      price: "35000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/#pricing`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}
