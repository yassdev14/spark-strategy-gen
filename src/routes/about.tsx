import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye, HandshakeIcon, Target } from "lucide-react";

import { ContactCTA } from "@/components/marketing/contact-cta";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MultiVision Strategies" },
      {
        name: "description",
        content:
          "MultiVision Strategies is a consulting firm based in Casablanca, Riyadh and Paris. Learn about our mission, vision, values and philosophy.",
      },
      { property: "og:title", content: "About MultiVision Strategies" },
      {
        property: "og:description",
        content:
          "Casablanca · Riyadh · Paris — strategy, investment advisory and operational excellence.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Target,
    title: "Mission",
    body: "Enable institutions and companies to achieve sustainable growth by pairing deep expertise with rigorous, hands-on execution.",
  },
  {
    icon: Eye,
    title: "Vision",
    body: "Be the strategic partner of reference for organisations building bridges between the MENA region and Europe.",
  },
  {
    icon: HandshakeIcon,
    title: "Values",
    body: "Integrity, discretion, and long-term partnership. We are measured by the outcomes we help our clients realise.",
  },
  {
    icon: Compass,
    title: "Philosophy",
    body: "Bring senior partners into every mandate. Stay accountable through execution. Leave the client stronger than we found them.",
  },
] as const;

const TIMELINE = [
  {
    year: "2019",
    title: "Founding partners meet",
    body: "A group of Tier-1 consultants incubates the idea of a firm bridging MENA and Europe.",
  },
  {
    year: "2021",
    title: "Casablanca office",
    body: "First mandates delivered for public-sector and industrial clients across North Africa.",
  },
  {
    year: "2023",
    title: "Riyadh hub opens",
    body: "Expanding into the Gulf to accompany sovereign investment programmes and regional PMIs.",
  },
  {
    year: "2024",
    title: "Paris office",
    body: "Paris hub anchors European coverage — capital markets, industrial supply chains, energy.",
  },
] as const;

function AboutPage() {
  return (
    <div className="relative">
      <section className="relative pt-24 pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 flex justify-center"
        >
          <div className="h-[500px] w-[900px] max-w-[95vw] rounded-full bg-iris/15 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
              About us
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              A consulting firm built for the{" "}
              <span className="gradient-text">next decade</span> of growth.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              We are Multivision Strategies — a consulting firm based in
              Casablanca, Riyadh and Paris, specialising in supporting
              companies across diverse industries with strategic advisory and
              business consulting services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="flex h-full gap-6 rounded-2xl border border-white/10 bg-card/50 p-8">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-iris to-electric">
                    <v.icon
                      className="size-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {v.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-night/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title="A short timeline."
            />
          </Reveal>
          <ol className="mt-14 space-y-8 border-l border-white/10 pl-8">
            {TIMELINE.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 80}>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[42px] top-1.5 grid size-4 place-items-center rounded-full border-2 border-void bg-gradient-to-br from-iris to-electric"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric">
                    {t.year}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Leadership"
              title="Senior partners in every room."
              description="Partner biographies will be published shortly. In the meantime, our management team is reachable directly for scoping conversations."
            />
            <div className="mt-8">
              <Button asChild variant="brand">
                <Link to="/contact">
                  Meet the team <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
