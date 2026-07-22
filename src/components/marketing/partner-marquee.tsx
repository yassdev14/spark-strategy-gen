import { cn } from "@/lib/utils";

const CLIENTS = [
  "BCG",
  "KPMG",
  "PwC",
  "NEOM",
  "EDF",
  "Stellantis",
  "Alpha Group",
  "Ministry of Investment — KSA",
  "Ministry of Health — KSA",
  "Ministry of Industry & Mineral Resources",
  "First Abu Dhabi Bank",
  "Abu Dhabi Ports",
  "KAEFER",
  "Aseer Development Authority",
  "CRI Souss-Massa",
];

export function PartnerMarquee({ className }: { className?: string }) {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        "[--fade:6rem] [mask-image:linear-gradient(to_right,transparent,black_var(--fade),black_calc(100%-var(--fade)),transparent)]",
        className,
      )}
      aria-label="Selected client and partner experience"
    >
      <div
        className="flex w-max animate-[marquee_45s_linear_infinite] gap-10 py-2 will-change-transform group-hover:[animation-play-state:paused] sm:gap-14"
      >
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex shrink-0 items-center gap-10 text-lg font-medium tracking-tight text-foreground/85 sm:gap-14 sm:text-xl"
          >
            {name}
            <span
              aria-hidden="true"
              className="inline-block size-1.5 rounded-full bg-gradient-to-r from-iris to-electric"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
