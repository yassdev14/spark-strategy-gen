import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactCTA } from "@/components/marketing/contact-cta";
import { Reveal } from "@/components/marketing/reveal";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_GROUPS.flatMap((g) =>
            g.items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const FAQ_GROUPS = [
  {
    title: "Engaging the firm",
    items: [
      {
        q: "What kinds of clients does MultiVision Strategies work with?",
        a: "We work with ministries, sovereign entities, family offices, private-equity portfolio companies, and multinational corporates across MENA and Europe.",
      },
      {
        q: "How do engagements typically start?",
        a: "Most engagements start with a short scoping conversation with one of our partners. From there, we draft a tailored proposal within 5 business days.",
      },
      {
        q: "Do you work under NDA?",
        a: "Yes — every conversation is confidential by default, and NDAs are signed prior to detailed diagnostic work whenever needed.",
      },
    ],
  },
  {
    title: "Practice & method",
    items: [
      {
        q: "Which regions do you cover?",
        a: "Our hubs in Casablanca, Riyadh and Paris let us run mandates across North Africa, the Gulf, and Western Europe with a single accountable team.",
      },
      {
        q: "How senior is the delivery team?",
        a: "Partners and senior managers are on every mandate from day one and stay accountable through execution.",
      },
      {
        q: "How do you price engagements?",
        a: "We use fixed fee, retainer, or milestone-based pricing depending on the mandate. We are transparent about scope, cost and expected outcomes upfront.",
      },
    ],
  },
  {
    title: "After the engagement",
    items: [
      {
        q: "Do you support execution after the strategy is defined?",
        a: "Yes. Operational Excellence & Support is a dedicated practice for exactly that — we help clients implement, monitor, and refine.",
      },
      {
        q: "How do you measure success?",
        a: "Every engagement is scoped around a small set of business outcomes we agree upfront — revenue, cost, capital, or time-to-value — and we hold ourselves to them.",
      },
    ],
  },
] as const;

function FaqPage() {
  return (
    <div>
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
              FAQ
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Frequently asked{" "}
              <span className="gradient-text">questions.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
              Everything clients typically want to know before starting an
              engagement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          {FAQ_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {g.title}
                </h2>
                <Accordion type="single" collapsible className="mt-4 w-full">
                  {g.items.map((item, k) => (
                    <AccordionItem
                      key={item.q}
                      value={`${i}-${k}`}
                      className="border-white/10"
                    >
                      <AccordionTrigger className="text-left text-base">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
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
