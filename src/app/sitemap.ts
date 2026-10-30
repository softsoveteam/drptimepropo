import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://proposal.softsove.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/access`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
