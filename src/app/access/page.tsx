"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { softsove } from "@/data/proposal";
import { Lock, Loader2 } from "lucide-react";

export default function AccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Incorrect password. Try again.");
        setLoading(false);
        return;
      }
      const from = searchParams.get("from") || "/";
      router.replace(from === "/access" ? "/" : from);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden section-pad py-16">
      <div className="glow-orb left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 opacity-70" />
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-card/90 p-8 shadow-[0_0_60px_rgba(180,74,255,0.2)] backdrop-blur-xl md:p-10">
        <Image
          src={softsove.logo}
          alt="Softsove"
          width={160}
          height={56}
          className="mx-auto h-12 w-auto object-contain"
          priority
        />
        <div className="mt-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple/20 text-purple-bright">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
            Private proposal
          </h1>
          <p className="mt-2 text-sm text-muted">
            Enter the access password to view the Dr.Prime Digital Growth Plan.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label className="block text-xs font-medium uppercase tracking-wider text-muted">
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-purple focus:ring-2 focus:ring-purple/30"
              placeholder="Enter password"
              required
            />
          </label>
          {error && (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-purple py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(180,74,255,0.4)] transition hover:bg-purple-bright disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Unlocking…
              </>
            ) : (
              "Unlock proposal"
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-muted">
          Softsove · Confidential client document
        </p>
      </div>
    </main>
  );
}
