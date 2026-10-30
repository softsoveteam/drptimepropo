import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Access | Softsove Digital Growth Plan",
  description:
    "Enter the password to access the Softsove private digital growth proposal.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function AccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<div className="min-h-svh bg-background" />}>{children}</Suspense>;
}
