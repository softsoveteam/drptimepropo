import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://proposal.softsove.com";

export const viewport: Viewport = {
  themeColor: "#050508",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr.Prime Digital Growth Plan | Softsove Performance Marketing",
    template: "%s | Softsove",
  },
  description:
    "Softsove digital growth proposal for Dr.Prime / PrimeHeal — Google Ads, Meta Ads, SEO, custom CRM tracking, and SEO + SMM combo pricing with AI UGC content.",
  applicationName: "Softsove Proposal",
  authors: [{ name: "Softsove", url: "https://softsove.com" }],
  creator: "Softsove Private Limited",
  publisher: "Softsove Private Limited",
  keywords: [
    "Softsove",
    "Dr.Prime",
    "PrimeHeal",
    "Google Ads",
    "Meta Ads",
    "Facebook Ads",
    "SEO",
    "SMM",
    "digital marketing proposal",
    "performance marketing",
    "custom CRM",
    "UGC content",
    "Anand",
    "India",
  ],
  category: "marketing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Softsove",
    title: "Dr.Prime Digital Growth Plan | Softsove",
    description:
      "Google Ads, Meta Ads & SEO growth plan for Dr.Prime — with Softsove custom CRM, lead tracking, and SEO + SMM combo at ₹35,000/month.",
    images: [
      {
        url: "https://softsove.com/wp-content/uploads/2024/09/Main-Logo-3.png",
        width: 512,
        height: 512,
        alt: "Softsove logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr.Prime Digital Growth Plan | Softsove",
    description:
      "Performance marketing proposal — Google Ads, Meta Ads, SEO, custom CRM, and SEO + SMM pricing.",
    images: ["https://softsove.com/wp-content/uploads/2024/09/Main-Logo-3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "https://softsove.com/wp-content/uploads/2024/09/Main-Logo-3.png",
        type: "image/png",
      },
    ],
    apple: "https://softsove.com/wp-content/uploads/2024/09/Main-Logo-3.png",
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Anand, Gujarat",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
