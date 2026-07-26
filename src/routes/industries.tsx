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
import { useI18n } from "@/lib/i18n";

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
  { icon: Landmark, key: "public" },
  { icon: Banknote, key: "finance" },
  { icon: Zap, key: "energy" },
  { icon: Factory, key: "industry" },
  { icon: HeartPulse, key: "health" },
  { icon: Cpu, key: "tech" },
  { icon: Ship, key: "transport" },
  { icon: Building2, key: "real" },
] as const;

function IndustriesPage() {
  const { t } = useI18n();
  return (
    <div>
      <section className="relative pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
              {t("industriesPage.eyebrow")}
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {t("industriesPage.titleA")}{" "}
              <span className="gradient-text">{t("industriesPage.titleB")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              {t("industriesPage.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((it, i) => (
              <Reveal key={it.key} delay={(i % 4) * 60}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card/50 p-7 transition-colors hover:border-white/20">
                  <div className="grid size-11 place-items-center rounded-xl bg-white/5">
                    <it.icon
                      className="size-5 text-electric"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-foreground">
                    {t(`industriesPage.${it.key}.title`)}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`industriesPage.${it.key}.body`)}
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
