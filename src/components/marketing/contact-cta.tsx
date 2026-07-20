import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="px-6 py-24">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-[28px] bg-gradient-to-br from-iris via-iris/60 to-electric p-[1px]">
          <div className="rounded-[27px] bg-void px-6 py-16 text-center sm:px-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
              Ready when you are
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Get a quote or set up a consultation.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
              Our partners engage directly with founders, boards, and public
              institutions on cross-border strategy and investment mandates.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="brand">
                <Link to="/contact">
                  Start a conversation <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="glass">
                <a href="mailto:management@multivisionstrategies.com">
                  Email management
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
