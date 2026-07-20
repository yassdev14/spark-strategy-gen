import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { ContactForm } from "@/components/marketing/contact-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MultiVision Strategies" },
      {
        name: "description",
        content:
          "Reach the MultiVision Strategies management team. Offices in Casablanca, Riyadh and Paris. Get a quote or set up a consultation.",
      },
      { property: "og:title", content: "Contact — MultiVision Strategies" },
      {
        property: "og:description",
        content:
          "Get a quote or set up a consultation with our partners.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact MultiVision Strategies",
          url: "/contact",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative">
      <section className="relative pt-24 pb-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 flex justify-center"
        >
          <div className="h-[500px] w-[900px] max-w-[95vw] rounded-full bg-iris/20 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
              Contact
            </p>
            <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Get a quote or set up a{" "}
              <span className="gradient-text">consultation.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Tell us a little about your business and what you're trying to
              accomplish. A partner will reply personally within two business
              days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="space-y-8">
              <ContactInfo
                icon={Phone}
                label="Phone"
                value="+212 660 126 180"
                href="tel:+212660126180"
              />
              <ContactInfo
                icon={Mail}
                label="Email"
                value="management@multivisionstrategies.com"
                href="mailto:management@multivisionstrategies.com"
              />
              <ContactInfo
                icon={Linkedin}
                label="LinkedIn"
                value="MultiVision Strategies"
                href="https://www.linkedin.com/"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Offices
                </p>
                <ul className="mt-4 space-y-3 text-sm text-foreground">
                  {["Casablanca, Morocco", "Riyadh, Saudi Arabia", "Paris, France"].map(
                    (loc) => (
                      <li key={loc} className="flex items-center gap-3">
                        <MapPin
                          className="size-4 text-electric"
                          aria-hidden="true"
                        />
                        {loc}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/3] w-full">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(109,40,217,0.35),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(219,39,119,0.25),transparent_60%),linear-gradient(180deg,#0b0b12,#020204)]"
                  />
                  <div className="absolute inset-0 grid place-items-center text-center">
                    <div>
                      <MapPin
                        className="mx-auto size-8 text-electric"
                        aria-hidden="true"
                      />
                      <p className="mt-3 text-sm text-muted-foreground">
                        Map available on request
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      className="group flex items-start gap-4"
    >
      <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-iris">
        <Icon className="size-4 text-electric" aria-hidden />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-base font-medium text-foreground group-hover:text-electric">
          {value}
        </p>
      </div>
    </a>
  );
}
