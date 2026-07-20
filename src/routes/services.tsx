import { createFileRoute } from "@tanstack/react-router";
import { Check, Compass, Gauge, LineChart } from "lucide-react";

import { ContactCTA } from "@/components/marketing/contact-cta";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MultiVision Strategies" },
      {
        name: "description",
        content:
          "Strategic business advisory, investment attraction and operational excellence — three practices delivered by one accountable team.",
      },
      { property: "og:title", content: "Services — MultiVision Strategies" },
      {
        property: "og:description",
        content:
          "Explore our advisory, investment and operational excellence services for institutions and enterprises.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Compass,
    tag: "01",
    title: "Strategic Business Advisory",
    description:
      "In-depth assessments, transformation roadmaps and operational optimisation for companies preparing their next chapter.",
    outcomes: [
      "Growth and market-entry strategy",
      "Organisational and operating-model redesign",
      "Post-merger integration and PMO leadership",
      "Board and executive decision support",
    ],
  },
  {
    icon: LineChart,
    tag: "02",
    title: "Investment Attraction & Advisory",
    description:
      "We deploy, customise and fine-tune investment solutions that align with strategic imperatives and drive growth for institutions and companies.",
    outcomes: [
      "Sovereign and regional investment programmes",
      "Deal origination and due diligence",
      "Investor relations and capital-raise support",
      "Portfolio value-creation planning",
    ],
  },
  {
    icon: Gauge,
    tag: "03",
    title: "Operational Excellence & Support",
    description:
      "Technical and functional assistance, proactive performance monitoring, and continuous solution optimisation.",
    outcomes: [
      "Performance frameworks and KPI systems",
      "Process re-engineering and cost optimisation",
      "Digital transformation delivery",
      "Managed support during ramp-up phases",
    ],
  },
] as const;

function ServicesPage() {
  return (
    <div>
      <section className="relative pt-24 pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 flex justify-center"
        >
          <div className="h-[500px] w-[900px] max-w-[95vw] rounded-full bg-electric/15 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
              Our services
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Three practices.{" "}
              <span className="gradient-text">One accountable team.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              From the boardroom to day-to-day operations, we bring senior
              partners into every mandate and stay accountable through
              execution.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group grid gap-10 rounded-3xl border border-white/10 bg-card/50 p-8 md:grid-cols-[1fr_1.5fr] md:p-12">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-electric">
                      {s.tag} /
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <div className="mt-6 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-iris to-electric shadow-[0_20px_60px_-20px_var(--iris)]">
                    <s.icon className="size-6 text-white" aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-foreground">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    What clients get
                  </h3>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {s.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-iris to-electric"
                        >
                          <Check className="size-3 text-white" />
                        </span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Expected outcomes"
              title="Measurable value on every mandate."
              description="Every engagement is scoped around a small set of business outcomes we agree upfront — revenue, cost, capital, or time-to-value — and we hold ourselves to them."
            />
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
