"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 section-pad ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl"
      >
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-purple-bright">
            {eyebrow}
          </p>
        )}
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
        <div className="mt-10 md:mt-14">{children}</div>
      </motion.div>
    </section>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/8 bg-card/80 p-5 md:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-purple/15 px-2.5 py-1 text-xs font-medium text-purple-bright">
      {children}
    </span>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="table-scroll rounded-2xl border border-white/8 bg-card/60">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/8 text-xs uppercase tracking-wider text-muted">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-medium md:px-5">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-white/5 last:border-0 transition-colors hover:bg-white/[0.03]"
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3.5 align-top text-white/90 md:px-5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
