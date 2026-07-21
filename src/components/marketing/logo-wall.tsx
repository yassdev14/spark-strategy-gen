import { Reveal } from "@/components/marketing/reveal";
import { PartnerMarquee } from "@/components/marketing/partner-marquee";

export function LogoWall() {
  return (
    <section className="overflow-hidden border-y border-white/5 bg-night py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Our team's experience — trusted by leading institutions
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2">
            <PartnerMarquee />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
