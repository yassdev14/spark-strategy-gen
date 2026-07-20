import { useEffect, useRef, useState } from "react";

import { useCountUp } from "@/hooks/use-count-up";

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
};

export function StatCounter({ stat }: { stat: Stat }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const v = useCountUp(stat.value, active);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const formatted = v.toLocaleString(undefined, {
    maximumFractionDigits: stat.decimals ?? 0,
    minimumFractionDigits: stat.decimals ?? 0,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
        <span className="gradient-text">
          {stat.prefix}
          {formatted}
          {stat.suffix}
        </span>
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}
