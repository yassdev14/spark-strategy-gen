import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye, HandshakeIcon, Target } from "lucide-react";

import { ContactCTA } from "@/components/marketing/contact-cta";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

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

const VALUE_KEYS = [
  { icon: Target, key: "mission" },
  { icon: Eye, key: "vision" },
  { icon: HandshakeIcon, key: "values" },
  { icon: Compass, key: "philosophy" },
] as const;

const TIMELINE_YEARS = ["2019", "2021", "2023", "2024"] as const;

function AboutPage() {
  const { t } = useI18n();
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
              {t("aboutPage.eyebrow")}
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {t("aboutPage.titleA")}{" "}
              <span className="gradient-text">{t("aboutPage.titleB")}</span>{" "}
              {t("aboutPage.titleC")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              {t("aboutPage.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {VALUE_KEYS.map((v, i) => (
              <Reveal key={v.key} delay={i * 80}>
                <div className="flex h-full gap-6 rounded-2xl border border-white/10 bg-card/50 p-8">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-iris to-electric">
                    <v.icon
                      className="size-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {t(`aboutPage.values.${v.key}.title`)}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t(`aboutPage.values.${v.key}.body`)}
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
              eyebrow={t("aboutPage.timeline.eyebrow")}
              title={t("aboutPage.timeline.title")}
            />
          </Reveal>
          <ol className="mt-14 space-y-8 border-l border-white/10 pl-8">
            {TIMELINE_YEARS.map((year, i) => (
              <Reveal as="li" key={year} delay={i * 80}>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[42px] top-1.5 grid size-4 place-items-center rounded-full border-2 border-void bg-gradient-to-br from-iris to-electric"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric">
                    {year}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {t(`aboutPage.timeline.${year}.title`)}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                    {t(`aboutPage.timeline.${year}.body`)}
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
              eyebrow={t("aboutPage.leadership.eyebrow")}
              title={t("aboutPage.leadership.title")}
              description={t("aboutPage.leadership.description")}
            />
            <div className="mt-8">
              <Button asChild variant="brand">
                <Link to="/contact">
                  {t("aboutPage.leadership.cta")} <ArrowRight className="size-4" />
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
