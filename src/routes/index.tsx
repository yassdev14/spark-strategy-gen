import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Compass,
  Gauge,
  Globe2,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import heroOrb from "@/assets/hero-orb.jpg";
import aboutTexture from "@/assets/about-texture.jpg";
import ogImage from "@/assets/og-image.jpg";
import { ContactCTA } from "@/components/marketing/contact-cta";
import { LogoWall } from "@/components/marketing/logo-wall";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StatCounter, type Stat } from "@/components/marketing/stat-counter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "MultiVision Strategies — Strategy, Investment Advisory & Consulting",
      },
      {
        name: "description",
        content:
          "Delivering value. Driving change. A premium strategy, investment attraction and operational excellence firm serving MENA and Europe from Casablanca, Riyadh and Paris.",
      },
      {
        property: "og:title",
        content: "MultiVision Strategies — Delivering Value. Driving Change.",
      },
      {
        property: "og:description",
        content:
          "Strategic business advisory, investment attraction and operational excellence for institutions and enterprises across MENA and Europe.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    icon: Compass,
    title: "Strategic Business Advisory",
    description:
      "Assessments, transformation roadmaps, and executive decision support to align operations with long-term strategy.",
    accent: "from-iris to-iris/40",
  },
  {
    icon: LineChart,
    title: "Investment Attraction & Advisory",
    description:
      "Deploy, customise, and fine-tune investment solutions that align with strategic imperatives and drive growth.",
    accent: "from-electric to-iris",
  },
  {
    icon: Gauge,
    title: "Operational Excellence & Support",
    description:
      "Technical and functional assistance, proactive performance monitoring, and continuous solution optimisation.",
    accent: "from-electric/70 to-electric",
  },
] as const;

const PILLARS = [
  {
    icon: BadgeCheck,
    title: "Proven Industry Knowledge",
    body: "Our partners have led mandates across global markets with public and private multinational corporations.",
  },
  {
    icon: Users,
    title: "Agile, Client-Centric Approach",
    body: "Tailored engagements that align with each client's specific business needs and market dynamics.",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to Excellence",
    body: "A results-driven mindset focused on generating long-term value and durable competitive advantage.",
  },
] as const;

const STATS: Stat[] = [
  { value: 3, label: "Continental Hubs", suffix: "" },
  { value: 15, label: "National Entities Advised", suffix: "+" },
  { value: 98, label: "Client Retention", suffix: "%" },
  { value: 12, label: "Years of Combined Practice", suffix: "+" },
];

const FAQS = [
  {
    q: "What kinds of clients does MultiVision Strategies work with?",
    a: "We work with ministries, sovereign entities, family offices, private-equity portfolio companies, and multinational corporates across MENA and Europe.",
  },
  {
    q: "Which regions do you cover?",
    a: "Our hubs in Casablanca, Riyadh and Paris let us run mandates across North Africa, the Gulf, and Western Europe with a single accountable team.",
  },
  {
    q: "How do engagements typically start?",
    a: "Most engagements start with a short scoping conversation with one of our partners. From there, we draft a tailored proposal within 5 business days.",
  },
] as const;

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Why />
      <Stats />
      <LogoWall />
      <Testimonial />
      <Faq />
      <ContactCTA />
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-24 sm:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 flex justify-center"
      >
        <div className="h-[720px] w-[720px] max-w-[95vw] rounded-full bg-iris/25 blur-[140px] animate-pulse-glow" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-20 flex justify-center"
      >
        <div className="h-[500px] w-[500px] max-w-[80vw] rounded-full bg-electric/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <Sparkles className="size-3 text-electric" aria-hidden="true" />
            {t("hero.badge")}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-8 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl md:leading-[0.95]">
            {t("hero.titleA")}
            <br />
            <span className="gradient-text">{t("hero.titleB")}</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t("hero.subtitle")}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="light">
              <Link to="/contact">
                {t("hero.ctaPrimary")} <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <Link to="/services">{t("hero.ctaSecondary")}</Link>
            </Button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={320}>
        <div className="relative mx-auto mt-20 max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night/40 shadow-[0_40px_120px_-40px_rgba(109,40,217,0.6)]">
            <img
              src={heroOrb}
              alt="Iridescent violet orb — MultiVision Strategies signature visual"
              width={1600}
              height={912}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover animate-float"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="border-y border-white/5 bg-night/50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10">
            <img
              src={aboutTexture}
              alt="Abstract violet glass texture representing the firm's brand"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-void/60 via-transparent to-transparent"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading
            eyebrow={t("about.eyebrow")}
            title={t("about.title")}
            description={t("about.description")}
          />
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {[t("about.item1"), t("about.item2"), t("about.item3")].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-iris to-electric"
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild variant="glass">
              <Link to="/about">
                {t("about.cta")} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Our services"
            title="Three practices, one accountable team."
            description="From high-stakes decisions to day-to-day execution — we support institutions and enterprises end-to-end."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-8 transition-colors hover:border-white/20">
                <div
                  className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${s.accent} shadow-[0_10px_30px_-10px_var(--iris)]`}
                >
                  <s.icon className="size-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    Learn more{" "}
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 -bottom-24 h-40 rounded-full bg-iris/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="border-t border-white/5 bg-night/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Why leading institutions choose MultiVision."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-card/40 p-8">
                <div className="grid size-10 place-items-center rounded-lg bg-white/5">
                  <p.icon className="size-5 text-electric" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="By the numbers"
            title="A track record built on delivery."
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          {STATS.map((s) => (
            <StatCounter key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <figure className="rounded-3xl border border-white/10 bg-card/60 p-10 text-center sm:p-14">
            <div className="mx-auto mb-6 grid size-10 place-items-center rounded-full bg-gradient-to-br from-iris to-electric">
              <Target className="size-4 text-white" aria-hidden="true" />
            </div>
            <blockquote className="text-balance text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              &ldquo;MultiVision brought clarity to a complex transformation and
              delivered outcomes we can measure. Their senior team stayed
              hands-on from mandate to execution.&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-sm text-muted-foreground">
              Program Director · Public sector engagement
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers before you ask."
            description="The most common questions from clients evaluating an engagement."
          />
          <div className="mt-8">
            <Button asChild variant="glass">
              <Link to="/faq">See all questions</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

// Referenced for visual variety
void Building2;
void Globe2;
void Rocket;
