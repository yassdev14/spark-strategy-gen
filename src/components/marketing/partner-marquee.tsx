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

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
    >
      {CLIENTS.map((name, i) => (
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
  );
}

export function PartnerMarquee({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        "[--fade:6rem] [mask-image:linear-gradient(to_right,transparent,black_var(--fade),black_calc(100%-var(--fade)),transparent)]",
        className,
      )}
      aria-label="Selected client and partner experience"
    >
      <div className="flex w-max animate-[marquee_40s_linear_infinite] will-change-transform [transform:translate3d(0,0,0)] group-hover:[animation-play-state:paused]">
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
}
