import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactCTA } from "@/components/marketing/contact-cta";
import { Reveal } from "@/components/marketing/reveal";
import { useI18n } from "@/lib/i18n";

const FAQ_GROUPS = [
  { key: "g1", items: ["q1", "q2", "q3"] },
  { key: "g2", items: ["q1", "q2", "q3"] },
  { key: "g3", items: ["q1", "q2"] },
] as const;

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — MultiVision Strategies" },
      {
        name: "description",
        content:
          "Frequently asked questions about engaging MultiVision Strategies for strategic advisory, investment attraction and operational excellence work.",
      },
      { property: "og:title", content: "FAQ — MultiVision Strategies" },
      {
        property: "og:description",
        content:
          "Everything clients typically want to know before starting an engagement.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useI18n();
  return (
    <div>
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
              {t("faqPage.eyebrow")}
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {t("faqPage.titleA")}{" "}
              <span className="gradient-text">{t("faqPage.titleB")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
              {t("faqPage.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          {FAQ_GROUPS.map((g, i) => (
            <Reveal key={g.key} delay={i * 60}>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {t(`faqPage.${g.key}.title`)}
                </h2>
                <Accordion type="single" collapsible className="mt-4 w-full">
                  {g.items.map((q, k) => {
                    const a = q.replace("q", "a");
                    return (
                      <AccordionItem
                        key={q}
                        value={`${i}-${k}`}
                        className="border-white/10"
                      >
                        <AccordionTrigger className="text-left text-base">
                          {t(`faqPage.${g.key}.${q}`)}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          {t(`faqPage.${g.key}.${a}`)}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
