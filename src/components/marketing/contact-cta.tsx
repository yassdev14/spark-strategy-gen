import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function ContactCTA() {
  const { t } = useI18n();
  return (
    <section className="px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-[28px] bg-gradient-to-br from-iris via-iris/60 to-electric p-[1px]">
          <div className="rounded-[27px] bg-void px-6 py-16 text-center sm:px-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
              {t("cta.eyebrow")}
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
              {t("cta.body")}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="brand">
                <Link to="/contact">
                  {t("cta.primary")} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="glass">
                <a href="mailto:management@multivisionstrategies.com">
                  {t("cta.secondary")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
