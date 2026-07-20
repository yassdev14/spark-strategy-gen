import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/brand/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-void">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Strategy, investment advisory, and operational excellence for
              institutions and enterprises building across MENA and Europe.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href="mailto:management@multivisionstrategies.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                management@multivisionstrategies.com
              </a>
              <a
                href="tel:+212660126180"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                +212 660 126 180
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            <FooterCol
              title="Company"
              links={[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/industries", label: "Industries" },
                { to: "/contact", label: "Contact" },
              ]}
            />
            <FooterCol
              title="Resources"
              links={[
                { to: "/faq", label: "FAQ" },
                { to: "/privacy", label: "Privacy" },
                { to: "/terms", label: "Terms" },
              ]}
            />
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                Offices
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  Casablanca
                </li>
                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  Riyadh
                </li>
                <li className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  Paris
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} MultiVision Strategies. All rights
            reserved.
          </p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="MultiVision Strategies on LinkedIn"
            className="grid size-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-iris hover:text-foreground"
          >
            <Linkedin className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
