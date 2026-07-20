import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "reveal-on-scroll",
        visible && "reveal-visible",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
