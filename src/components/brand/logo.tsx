import { cn } from "@/lib/utils";
import logoAsset from "@/assets/brand/multivision-logo.png.asset.json";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="MultiVision Strategies"
      loading="eager"
      decoding="async"
      draggable={false}
      className={cn("h-8 w-auto select-none", className)}
    />
  );
}
