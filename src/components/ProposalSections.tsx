"use client";

import {
  channels,
  creativeFormats,
  crmFeatures,
  googleCampaigns,
  googleKeywords,
  landingReasons,
  laterMonths,
  marketSearches,
  metaCampaigns,
  month1Budget,
  needsFromYou,
  nextSteps,
  onePager,
  personas,
  pricingPlans,
  processSteps,
  proposal,
  seoFixes,
  seoKeywords,
  seoToday,
  softsove,
  targets,
  timeline,
  trackingItems,
  understanding,
} from "@/data/proposal";
import { Card, DataTable, Pill, Section } from "./ui";
import {
  BarChart3,
  CheckCircle2,
  Clock3,
  LayoutDashboard,
  Megaphone,
  Search,
  Share2,
  Target,
  TrendingUp,
} from "lucide-react";

export function ProposalSections() {
  return (
    <>
      {/* Overview */}
      <Section
        id="overview"
        eyebrow="In short · Section 00"
        title="The plan on one page"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="lg:col-span-2 bg-gradient-to-br from-purple/15 to-transparent">
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-bright">
              Where you are
            </p>
            <p className="mt-3 text-lg leading-relaxed text-white/90 md:text-xl">
              {onePager.whereYouAre}
            </p>
          </Card>
          {onePager.channels.map((c) => (
            <Card key={c.name}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                  {c.name}
                </h3>
                <Pill>{c.speed}</Pill>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.job}</p>
            </Card>
          ))}
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-bright">
              How we work
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              {onePager.approach}
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-bright">
              Our commitment
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              {onePager.commitment}
            </p>
          </Card>
        </div>
      </Section>

      {/* Understanding */}
      <Section
        id="understanding"
        eyebrow="Section 01"
        title="Our understanding of your business"
        className="bg-elevated/40"
      >
        <DataTable
          headers={["Area", "What we understand"]}
          rows={understanding.rows.map((r) => [
            <span key={r.area} className="font-medium text-purple-bright">
              {r.area}
            </span>,
            r.value,
          ])}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-bright">
              What this tells us
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              {understanding.insight}
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-bright">
              Starting assumption
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              {understanding.assumption}
            </p>
          </Card>
        </div>
      </Section>

      {/* Market */}
      <Section id="market" eyebrow="Section 02" title="The market opportunity">
        <p className="mb-8 max-w-3xl text-muted">
          Demand is already there — more than{" "}
          <span className="text-white font-semibold">200,000 searches / month</span>{" "}
          in the US alone in this category. Our job is to be present when interest
          appears, starting with specific, lower-CPC searches.
        </p>
        <DataTable
          headers={["What people are searching (US)", "Monthly searches", "Buying intent"]}
          rows={marketSearches.map((r) => [
            r.term,
            <span key={r.term} className="font-semibold text-purple-bright">
              {r.searches}
            </span>,
            r.intent,
          ])}
        />
      </Section>

      {/* Channels */}
      <Section
        id="channels"
        eyebrow="Section 03"
        title="How the three channels work together"
        className="bg-elevated/40"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c, i) => {
            const Icon = [Search, Share2, TrendingUp][i];
            return (
              <Card key={c.name} className="relative overflow-hidden">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple/20 text-purple-bright">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm text-muted">{c.does}</p>
                <div className="mt-5 space-y-2 border-t border-white/8 pt-4 text-xs">
                  <Row label="Speed" value={c.speed} />
                  <Row label="If you stop paying" value={c.ifStop} />
                  <Row label="Goes live" value={c.live} />
                </div>
              </Card>
            );
          })}
        </div>
        <Card className="mt-6">
          <p className="text-sm leading-relaxed text-white/90">
            Run together, each makes the others cheaper. Meta builds recognition
            that lifts Google CTR. Paid traffic creates the retargeting pool. SEO
            content becomes landing pages and ad angles. Order:{" "}
            <strong className="text-purple-bright">Google first</strong> for
            conversion learnings,{" "}
            <strong className="text-purple-bright">Meta second</strong> for scale,{" "}
            <strong className="text-purple-bright">SEO from day one</strong> for
            long-term free traffic.
          </p>
        </Card>
      </Section>

      {/* Process */}
      <Section id="process" eyebrow="Section 04" title="How we work — 4 steps">
        <div className="grid gap-4 md:grid-cols-2">
          {processSteps.map((s) => (
            <Card key={s.step} className="flex gap-4">
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold text-purple/50">
                {s.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>
                    <Clock3 className="mr-1 inline h-3 w-3" />
                    {s.timing}
                  </Pill>
                  <span className="text-xs text-white/70">{s.outcome}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Google Ads */}
      <Section
        id="google"
        eyebrow="Section 05"
        title="Google Ads plan"
        className="bg-elevated/40"
      >
        <p className="mb-8 max-w-3xl text-muted">
          Account built in layers. Each campaign has one job, its own budget and
          success measure — so we always know what is working.
        </p>
        <DataTable
          headers={["#", "Campaign", "Type", "Its job", "Goes live"]}
          rows={googleCampaigns.map((c) => [
            c.n,
            <span key={c.name} className="font-medium text-white">
              {c.name}
            </span>,
            c.type,
            c.job,
            c.live,
          ])}
        />
        <h3 className="mt-12 mb-4 font-[family-name:var(--font-display)] text-2xl font-bold">
          Keyword groups
        </h3>
        <DataTable
          headers={["Group", "Example searches", "Priority"]}
          rows={googleKeywords.map((k) => [
            k.group,
            k.examples,
            <Pill key={k.group}>{k.priority}</Pill>,
          ])}
        />
        <h3 className="mt-12 mb-4 font-[family-name:var(--font-display)] text-2xl font-bold">
          Why traffic lands on {proposal.clientUrl} first
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {landingReasons.map((r) => (
            <Card key={r.title}>
              <h4 className="font-semibold text-white">{r.title}</h4>
              <p className="mt-2 text-sm text-muted">{r.body}</p>
            </Card>
          ))}
        </div>
        <Card className="mt-6 border-purple/30 bg-purple/10">
          <p className="text-sm text-white/90">
            <strong className="text-purple-bright">Recommendation:</strong> a
            dedicated ad landing page with one clear “Buy on Amazon” button and
            no nav distractions — typically lifts Amazon click-through, and
            serves Meta too. Softsove can produce it.
          </p>
        </Card>
      </Section>

      {/* Meta Ads */}
      <Section id="meta" eyebrow="Section 06" title="Meta Ads plan">
        <p className="mb-8 max-w-3xl text-muted">
          Google finds people already looking. Meta finds the far larger group
          who have the problem but never thought to search for a pillow — visual,
          emotional, under $50.
        </p>
        <DataTable
          headers={["#", "Campaign", "Audience", "Its job", "Goes live"]}
          rows={metaCampaigns.map((c) => [
            c.n,
            <span key={c.name} className="font-medium">
              {c.name}
            </span>,
            c.audience,
            c.job,
            c.live,
          ])}
        />
        <h3 className="mt-12 mb-4 font-[family-name:var(--font-display)] text-2xl font-bold">
          Five buyers we will speak to
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <Card key={p.name}>
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-purple/20">
                <Megaphone className="h-4 w-4 text-purple-bright" />
              </div>
              <h4 className="font-semibold text-white">{p.name}</h4>
              <p className="mt-1 text-xs text-muted">{p.who}</p>
              <p className="mt-3 text-sm italic text-purple-bright">“{p.angle}”</p>
            </Card>
          ))}
        </div>
        <h3 className="mt-12 mb-4 font-[family-name:var(--font-display)] text-2xl font-bold">
          Creative plan
        </h3>
        <DataTable
          headers={["Format", "Angle", "Where it runs"]}
          rows={creativeFormats.map((c) => [c.format, c.angle, c.where])}
        />
      </Section>

      {/* Custom CRM */}
      <Section
        id="crm"
        eyebrow="Included with Google & Meta Ads"
        title="Custom-built CRM software"
        className="bg-elevated/40"
      >
        <p className="mb-8 max-w-3xl text-muted">
          With Facebook (Meta) Ads and Google Ads, we provide our own custom CRM
          application — so you can track leads, spend, and performance in one
          place without digging through ad managers.
        </p>
        <div className="mb-8 flex flex-wrap gap-3">
          <Pill>
            <LayoutDashboard className="mr-1 inline h-3 w-3" />
            Softsove Custom CRM
          </Pill>
          <Pill>Google Ads</Pill>
          <Pill>Facebook / Meta Ads</Pill>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {crmFeatures.map((f) => (
            <Card key={f.title}>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-purple/20 text-purple-bright">
                <BarChart3 className="h-4 w-4" />
              </div>
              <h3 className="font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-muted">{f.body}</p>
            </Card>
          ))}
        </div>
        <Card className="mt-6 border-purple/30 bg-purple/10">
          <p className="text-sm text-white/90">
            <strong className="text-purple-bright">What you get:</strong> lead
            tracking, ad spend, full reports, CPM, CPC, daily reports, weekly
            reports — all inside Softsove’s custom CRM, built for performance
            marketing teams and clients who want clarity, not noise.
          </p>
        </Card>
      </Section>

      {/* SEO */}
      <Section
        id="seo"
        eyebrow="Section 07"
        title="SEO plan"
      >
        <p className="mb-8 max-w-3xl text-muted">
          Paid stops when you stop paying. SEO is slow to build but keeps working
          — reducing dependency on ad spend.
        </p>
        <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold">
          Where the site stands today
        </h3>
        <DataTable
          headers={["Measure", "Today", "What it means"]}
          rows={seoToday.map((r) => [r.measure, r.today, r.means])}
        />
        <h3 className="mt-12 mb-4 font-[family-name:var(--font-display)] text-xl font-bold">
          Phase 1 — Technical foundation (Month 1)
        </h3>
        <DataTable
          headers={["Fix", "Why it matters", "Priority"]}
          rows={seoFixes.map((r) => [
            r.fix,
            r.why,
            <Pill key={r.fix}>{r.priority}</Pill>,
          ])}
        />
        <h3 className="mt-12 mb-4 font-[family-name:var(--font-display)] text-xl font-bold">
          Content targets — 2 articles / month
        </h3>
        <DataTable
          headers={["Target keyword", "Monthly searches", "Difficulty", "Type"]}
          rows={seoKeywords.map((r) => [
            r.term,
            r.searches,
            r.difficulty,
            r.type,
          ])}
        />
        <Card className="mt-6">
          <p className="text-sm text-muted">
            First meaningful organic traffic realistically arrives around{" "}
            <span className="text-white">month four</span>. We start now because
            every delayed month pushes payoff further out — and unlike ads, work
            done today keeps returning value.
          </p>
        </Card>
      </Section>

      {/* Tracking */}
      <Section id="tracking" eyebrow="Section 08" title="Tracking & measurement">
        <div className="grid gap-4 md:grid-cols-2">
          {trackingItems.map((t) => (
            <Card key={t.title}>
              <div className="mb-2 flex items-center gap-2">
                <Target className="h-4 w-4 text-purple-bright" />
                <h3 className="font-semibold text-white">{t.title}</h3>
              </div>
              <p className="text-sm text-muted">{t.body}</p>
              <p className="mt-3 text-xs font-medium text-purple-bright">{t.note}</p>
            </Card>
          ))}
        </div>
        <h3 className="mt-12 mb-4 font-[family-name:var(--font-display)] text-xl font-bold">
          Numbers we aim for (Month 1 benchmarks — not guarantees)
        </h3>
        <DataTable
          headers={["Measure", "Target", "Why it matters"]}
          rows={targets.map((t) => [
            t.measure,
            <span key={t.measure} className="font-semibold text-purple-bright">
              {t.target}
            </span>,
            t.why,
          ])}
        />
      </Section>

      {/* Budget */}
      <Section
        id="budget"
        eyebrow="Section 09"
        title="Budget & timeline"
        className="bg-elevated/40"
      >
        <p className="mb-8 max-w-3xl text-muted">
          A deliberately modest start. Prove the model on a small budget before
          asking for heavier commitment.
        </p>
        <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold">
          Month 1 — Test phase
        </h3>
        <DataTable
          headers={["Channel", "Month 1", "Per day", "Its role"]}
          rows={[
            ...month1Budget.map((r) => [r.channel, r.month, r.day, r.role]),
            [
              <strong key="t" className="text-white">
                Total media spend
              </strong>,
              <strong key="m" className="text-purple-bright">
                $2,100
              </strong>,
              <strong key="d">$70</strong>,
              "Test phase",
            ],
          ]}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {laterMonths.map((m) => (
            <Card key={m.month}>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-white">{m.month}</h4>
                <Pill>{m.spend}</Pill>
              </div>
              <p className="mt-3 text-sm text-muted">{m.focus}</p>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          Figures above are advertising spend only. Scope of work and monthly
          retainer are covered separately.
        </p>
        <h3 className="mt-12 mb-4 font-[family-name:var(--font-display)] text-xl font-bold">
          90-day timeline
        </h3>
        <div className="relative space-y-0 border-l border-purple/40 pl-6">
          {timeline.map((t) => (
            <div key={t.when} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[1.9rem] top-1 h-3 w-3 rounded-full bg-purple shadow-[0_0_12px_rgba(180,74,255,0.8)]" />
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-bright">
                {t.when}
              </p>
              <p className="mt-1 text-sm text-white/90">{t.what}</p>
            </div>
          ))}
        </div>
        <Card className="mt-8 border-white/10">
          <p className="text-sm text-muted">
            Both Google and Meta need 3–4 weeks of data before automated bidding
            performs well. Month 1 will look weaker than Month 2 — normal and
            expected. We will always tell you which is which.
          </p>
        </Card>
      </Section>

      {/* Pricing */}
      <Section id="pricing" eyebrow="Retainer pricing" title="Service pricing">
        <p className="mb-8 max-w-3xl text-muted">
          Clear monthly packages for growth work. Media spend (Google / Meta ad
          budget) is billed separately.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className="relative overflow-hidden border-purple/40 bg-gradient-to-br from-purple/20 via-card to-black"
            >
              {plan.badge && (
                <span className="absolute right-4 top-4 rounded-full bg-purple px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {plan.badge}
                </span>
              )}
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-bright">
                {plan.name}
              </p>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="mb-2 text-sm text-muted">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/90"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-bright" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#next"
                className="mt-8 inline-flex rounded-full bg-purple px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-bright"
              >
                Choose this plan
              </a>
            </Card>
          ))}
          <Card className="flex flex-col justify-center">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
              Google Ads + Meta Ads
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Performance campaigns managed by Softsove, with our custom CRM
              included for leads, spend, CPM, CPC, and daily / weekly reporting.
              Media budget is separate; management scope is confirmed on kick-off.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>Custom CRM included</Pill>
              <Pill>Full reports</Pill>
              <Pill>Daily + weekly</Pill>
            </div>
            <a
              href={`mailto:${softsove.email}?subject=Ads%20%2B%20CRM%20pricing`}
              className="mt-8 inline-flex text-sm font-medium text-purple-bright hover:underline"
            >
              Request ads + CRM quote →
            </a>
          </Card>
        </div>
      </Section>

      {/* Next steps */}
      <Section id="next" eyebrow="Section 10" title="What we need & next steps">
        <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold">
          Seven things from you
        </h3>
        <DataTable
          headers={["#", "What", "Why"]}
          rows={needsFromYou.map((n) => [
            n.n,
            <span key={n.what} className="font-medium text-white">
              {n.what}
            </span>,
            n.why,
          ])}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {nextSteps.map((s) => (
            <Card key={s.n} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
                {s.n}
              </div>
              <div>
                <h4 className="font-semibold text-white">{s.title}</h4>
                <p className="mt-1 text-sm text-muted">{s.body}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-purple/30 bg-gradient-to-br from-purple/25 via-card to-black p-8 md:p-12">
          <div className="glow-orb right-0 top-0 h-64 w-64 opacity-60" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-bright">
              Why Softsove
            </p>
            <h3 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-2xl font-bold text-white md:text-4xl">
              Small measurable steps. Plain language. Honest when something is
              not working.
            </h3>
            <p className="mt-4 max-w-2xl text-sm text-muted md:text-base">
              We manage Google Ads, Meta Ads and SEO for growing brands across
              New Zealand and India. That is the whole approach — and the one we
              will run for {proposal.client}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${softsove.email}?subject=Dr.Prime%20Digital%20Growth%20Plan`}
                className="inline-flex items-center gap-2 rounded-full bg-purple px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(180,74,255,0.45)] hover:bg-purple-bright"
              >
                <CheckCircle2 className="h-4 w-4" />
                Approve &amp; schedule kick-off
              </a>
              <a
                href={`tel:${softsove.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5"
              >
                Call {softsove.phone}
              </a>
            </div>
            <p className="mt-8 text-sm text-muted">
              {proposal.preparedBy} · {proposal.preparedByRole}
              <br />
              Prepared {proposal.date} · Version {proposal.version} · Confidential
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-muted">{label}</span>
      <span className="text-right text-white/90">{value}</span>
    </div>
  );
}
