import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="relative grid size-7 place-items-center overflow-hidden rounded-full bg-gradient-to-tr from-iris to-electric shadow-[0_0_24px_-4px_var(--iris)]"
      >
        <span className="absolute inset-[2px] rounded-full bg-void/70" />
        <span className="relative size-2.5 rounded-full bg-gradient-to-tr from-iris to-electric" />
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-foreground">
        MultiVision <span className="text-muted-foreground">Strategies</span>
      </span>
    </span>
  );
}
