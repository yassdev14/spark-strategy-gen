import { createFileRoute } from "@tanstack/react-router";
import { Check, Compass, Gauge, LineChart } from "lucide-react";

import { ContactCTA } from "@/components/marketing/contact-cta";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { useI18n } from "@/lib/i18n";

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
    key: "s1",
    titleKey: "services.s1.title",
    outcomes: ["o1", "o2", "o3", "o4"],
  },
  {
    icon: LineChart,
    tag: "02",
    key: "s2",
    titleKey: "services.s2.title",
    outcomes: ["o1", "o2", "o3", "o4"],
  },
  {
    icon: Gauge,
    tag: "03",
    key: "s3",
    titleKey: "services.s3.title",
    outcomes: ["o1", "o2", "o3", "o4"],
  },
] as const;

function ServicesPage() {
  const { t } = useI18n();
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
              {t("servicesPage.eyebrow")}
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {t("servicesPage.titleA")}{" "}
              <span className="gradient-text">{t("servicesPage.titleB")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              {t("servicesPage.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.key} delay={i * 80}>
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
                    {t(s.titleKey)}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(`servicesPage.${s.key}.description`)}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {t("servicesPage.whatClients")}
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
                        {t(`servicesPage.${s.key}.${o}`)}
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
              eyebrow={t("servicesPage.outcomes.eyebrow")}
              title={t("servicesPage.outcomes.title")}
              description={t("servicesPage.outcomes.description")}
            />
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
