"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { proposal, softsove } from "@/data/proposal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 section-pad"
    >
      <div className="glow-orb left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 opacity-80" />
      <div className="glow-orb -left-20 bottom-20 h-72 w-72 opacity-40" />
      <div className="glow-orb -right-16 top-40 h-64 w-64 opacity-30" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-3 py-1.5 text-xs font-medium text-purple-bright"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Confidential · Prepared for client review · v{proposal.version}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 flex items-center gap-2 text-sm text-muted"
          >
            <span className="inline-block h-2 w-2 rounded-sm bg-purple" />
            Softsove Performance Marketing · {proposal.date}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Digital Growth
            <span className="block bg-gradient-to-r from-purple-bright via-white to-purple bg-clip-text text-transparent">
              Plan for {proposal.client}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            A pre-launch strategy and working framework across{" "}
            <span className="text-white">Google Ads</span>,{" "}
            <span className="text-white">Meta Ads</span> and{" "}
            <span className="text-white">SEO</span> — built to turn PrimeHeal
            visibility into measurable Amazon sales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-full bg-purple px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(180,74,255,0.45)] transition hover:bg-purple-bright"
            >
              Explore the plan
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={softsove.website}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted underline-offset-4 hover:text-white hover:underline"
            >
              softsove.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-6 border-t border-white/8 pt-8 text-sm"
          >
            <Meta label="Prepared for" value={`${proposal.client} · ${proposal.clientUrl}`} />
            <Meta label="Prepared by" value={proposal.preparedBy} />
            <Meta label="Focus" value={proposal.subtitle} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple/20 via-card to-black p-1 shadow-[0_0_80px_rgba(180,74,255,0.25)]">
            <div className="rounded-[1.85rem] bg-elevated p-8 md:p-10">
              <Image
                src={softsove.logo}
                alt="Softsove"
                width={180}
                height={64}
                className="mb-6 h-14 w-auto object-contain"
              />
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white md:text-3xl">
                Ads Operations™ + Custom CRM
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Google & Meta campaigns with built-in CRM — track leads, spend,
                CPM, CPC, and daily / weekly reports in one place.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {softsove.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/8 bg-black/40 px-3 py-3"
                  >
                    <div className="font-[family-name:var(--font-display)] text-xl font-bold text-purple-bright">
                      {s.value}
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="float-badge absolute -right-2 -top-4 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white text-center shadow-xl md:-right-6 md:h-32 md:w-32">
            <div className="px-2">
              <p className="text-[9px] font-bold uppercase leading-tight tracking-wide text-black md:text-[10px]">
                Let&apos;s bring your imagination
              </p>
              <span className="mt-1 inline-block text-lg text-purple">✈</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-muted">{label}</div>
      <div className="mt-0.5 font-medium text-white">{value}</div>
    </div>
  );
}
