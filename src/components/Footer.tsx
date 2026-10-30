import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { softsove } from "@/data/proposal";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black section-pad py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src={softsove.logo}
            alt="Softsove"
            width={160}
            height={56}
            className="h-12 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Softsove Private Limited — future-ready AI solutions, digital
            marketing, and performance advertising that turn innovation into
            measurable growth.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-bright">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-purple-bright" />
              <a href={`tel:${softsove.phone.replace(/\s/g, "")}`}>
                {softsove.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-purple-bright" />
              <a href={`tel:${softsove.phoneAlt.replace(/\s/g, "")}`}>
                {softsove.phoneAlt}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-purple-bright" />
              <a href={`mailto:${softsove.email}`}>{softsove.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-bright">
            Visit
          </h4>
          <p className="mt-4 flex gap-2 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple-bright" />
            {softsove.address}
          </p>
          <p className="mt-3 text-xs text-muted">{softsove.hours}</p>
          <a
            href={softsove.website}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-purple-bright hover:underline"
          >
            softsove.com →
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/8 pt-6 text-xs text-muted">
        © 2026 Softsove Private Limited. All rights reserved. · Dr.Prime
        Digital Growth Plan · Confidential
      </div>
    </footer>
  );
}
