import { Reveal } from "@/components/marketing/reveal";

const LOGOS = [
  "BCG",
  "KPMG",
  "PwC",
  "NEOM",
  "STELLANTIS",
  "EDF",
  "FAB",
  "MISA",
  "ALPHA GROUP",
  "KAEFER",
  "ABU DHABI PORTS",
  "MOH",
];

export function LogoWall() {
  return (
    <section className="border-y border-white/5 bg-night py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Institutional experience across global markets
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 opacity-60 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {LOGOS.map((label) => (
              <div
                key={label}
                className="flex items-center justify-center text-center text-sm font-semibold tracking-tight text-foreground/85 transition-opacity hover:opacity-100"
              >
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
