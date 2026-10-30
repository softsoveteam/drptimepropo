import { softsove } from "@/data/proposal";

const rowA = [
  "GOOGLE ADS",
  "META ADS",
  "SEO",
  "DESIGN",
  "DATA & ANALYTICS",
  "PERFORMANCE MARKETING",
];

const rowB = [
  ...softsove.services.map((s) => s.toUpperCase()),
  "ARTIFICIAL INTELLIGENCE",
];

export function Marquee() {
  return (
    <div className="relative z-10 -mt-4 mb-8 overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />

      <div className="-rotate-1 bg-purple py-3 shadow-[0_0_40px_rgba(180,74,255,0.35)]">
        <div className="marquee-track gap-8 px-4">
          {[...rowA, ...rowA].map((item, i) => (
            <span
              key={`a-${i}`}
              className="flex items-center gap-8 whitespace-nowrap text-sm font-bold tracking-wide text-black"
            >
              {item}
              <span className="text-black/50">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 rotate-1 border border-white/15 bg-white/95 py-3">
        <div className="marquee-track reverse gap-8 px-4">
          {[...rowB, ...rowB].map((item, i) => (
            <span
              key={`b-${i}`}
              className="flex items-center gap-8 whitespace-nowrap text-sm font-bold tracking-wide text-black"
            >
              {item}
              <span className="text-purple">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
