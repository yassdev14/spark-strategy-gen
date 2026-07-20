import { createFileRoute } from "@tanstack/react-router";
import {
  Banknote,
  Building2,
  Cpu,
  Factory,
  HeartPulse,
  Landmark,
  Ship,
  Zap,
} from "lucide-react";

import { ContactCTA } from "@/components/marketing/contact-cta";
import { Reveal } from "@/components/marketing/reveal";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — MultiVision Strategies" },
      {
        name: "description",
        content:
          "Sectors we serve: public sector, financial services, energy, industry, health, technology, transport and logistics.",
      },
      { property: "og:title", content: "Industries — MultiVision Strategies" },
      {
        property: "og:description",
        content:
          "Deep expertise across the sectors driving MENA and European growth.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const INDUSTRIES = [
  {
    icon: Landmark,
    title: "Public sector",
    body: "Ministries, sovereign investment vehicles, and regional development authorities across MENA.",
  },
  {
    icon: Banknote,
    title: "Financial services",
    body: "Banks, insurers and asset managers pursuing digital, regulatory or M&A transformation.",
  },
  {
    icon: Zap,
    title: "Energy & utilities",
    body: "Power, renewables and energy-transition programmes across public and private stakeholders.",
  },
  {
    icon: Factory,
    title: "Industry & manufacturing",
    body: "Industrial operators optimising supply chains, capacity, and cost-to-serve at scale.",
  },
  {
    icon: HeartPulse,
    title: "Health & life sciences",
    body: "Public and private health systems modernising delivery, procurement and digital care.",
  },
  {
    icon: Cpu,
    title: "Technology",
    body: "Growth-stage tech companies navigating market entry, scale-up and capital strategy.",
  },
  {
    icon: Ship,
    title: "Transport & logistics",
    body: "Ports, mobility and logistics operators optimising throughput and asset productivity.",
  },
  {
    icon: Building2,
    title: "Real estate & infrastructure",
    body: "Long-cycle infrastructure and real-estate portfolios with a value-creation lens.",
  },
] as const;

function IndustriesPage() {
  return (
    <div>
      <section className="relative pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
              Industries
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Sector-specific depth,{" "}
              <span className="gradient-text">delivered globally.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              We take on engagements only in sectors where our partners have
              first-hand operating and advisory experience.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((it, i) => (
              <Reveal key={it.title} delay={(i % 4) * 60}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card/50 p-7 transition-colors hover:border-white/20">
                  <div className="grid size-11 place-items-center rounded-xl bg-white/5">
                    <it.icon
                      className="size-5 text-electric"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-foreground">
                    {it.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {it.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
