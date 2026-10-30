"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navItems, softsove } from "@/data/proposal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="shrink-0" aria-label="Softsove">
          <Image
            src={softsove.logo}
            alt="Softsove"
            width={140}
            height={48}
            className="h-10 w-auto object-contain md:h-11"
            priority
          />
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems
            .filter((item) =>
              ["overview", "channels", "google", "meta", "crm", "pricing", "next"].includes(
                item.id
              )
            )
            .map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                active === item.id
                  ? "bg-purple/20 text-purple-bright"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${softsove.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 text-sm text-white/90 md:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green/20 text-green pulse-ring">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs">
              <span className="block text-muted">Need help?</span>
              {softsove.phone}
            </span>
          </a>
          <a
            href="#next"
            className="hidden rounded-full bg-purple px-4 py-2 text-xs font-semibold text-white shadow-[0_0_24px_rgba(180,74,255,0.4)] transition hover:bg-purple-bright sm:inline-flex"
          >
            Let&apos;s Connect
          </a>
          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/8 bg-black/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
