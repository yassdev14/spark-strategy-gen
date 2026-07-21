import { Reveal } from "@/components/marketing/reveal";
import { PartnerMarquee } from "@/components/marketing/partner-marquee";

export function LogoWall() {
  return (
    <section className="border-y border-white/5 bg-night py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Our team's experience — trusted by leading institutions
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-12">
            <PartnerMarquee />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
