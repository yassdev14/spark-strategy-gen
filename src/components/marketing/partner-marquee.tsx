import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

import abuDhabiPorts from "@/assets/partners/abu-dhabi-ports.png.asset.json";
import alphaGroup from "@/assets/partners/alpha-group.png.asset.json";
import aseer from "@/assets/partners/aseer.png.asset.json";
import cri from "@/assets/partners/cri-souss-massa.png.asset.json";
import fab from "@/assets/partners/fab.jpg.asset.json";
import kaefer from "@/assets/partners/kaefer.jpg.asset.json";
import kpmg from "@/assets/partners/kpmg.png.asset.json";
import ministryHealth from "@/assets/partners/ministry-health.png.asset.json";
import ministryIndustry from "@/assets/partners/ministry-industry.png.asset.json";
import stellantis from "@/assets/partners/stellantis.png.asset.json";

type Partner = { name: string; url: string };

const PARTNERS: Partner[] = [
  { name: "KPMG", url: kpmg.url },
  { name: "Stellantis", url: stellantis.url },
  { name: "First Abu Dhabi Bank", url: fab.url },
  { name: "Abu Dhabi Ports", url: abuDhabiPorts.url },
  { name: "Alpha Group", url: alphaGroup.url },
  { name: "KAEFER", url: kaefer.url },
  { name: "Aseer Development Authority", url: aseer.url },
  { name: "Ministry of Health — KSA", url: ministryHealth.url },
  { name: "Ministry of Industry & Mineral Resources", url: ministryIndustry.url },
  { name: "Centre Régional d'Investissement Souss Massa", url: cri.url },
];

const SPEED_PX_PER_SEC = 60;

export function PartnerMarquee() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    const normalize = (v: number) => {
      const w = halfWidthRef.current;
      if (!w) return v;
      let n = v % w;
      if (n > 0) n -= w;
      return n;
    };

    const apply = () => {
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    };

    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      if (!pausedRef.current && !draggingRef.current && !reduced) {
        offsetRef.current = normalize(offsetRef.current - SPEED_PX_PER_SEC * dt);
        apply();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
      ro.disconnect();
    };
  }, [reduced]);

  const onPointerEnter = () => {
    pausedRef.current = true;
  };
  const onPointerLeave = () => {
    pausedRef.current = false;
    draggingRef.current = false;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    const w = halfWidthRef.current || 1;
    let next = (dragStartOffsetRef.current + dx) % w;
    if (next > 0) next -= w;
    offsetRef.current = next;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${next}px, 0, 0)`;
    }
  };
  const onPointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
    lastTsRef.current = null;
  };

  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <div
      className="group relative select-none"
      onMouseEnter={onPointerEnter}
      onMouseLeave={onPointerLeave}
    >
      {/* Edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent sm:w-32"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent sm:w-32"
      />

      <div
        className="overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          ref={trackRef}
          className="flex w-max items-center gap-6 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {loop.map((p, i) => (
            <LogoChip key={`${p.name}-${i}`} partner={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoChip({ partner }: { partner: Partner }) {
  return (
    <div
      className={cn(
        "flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl",
        "border border-white/10 bg-white/95 px-6 py-5",
        "shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)]",
        "transition-transform duration-300 ease-out",
        "hover:scale-[1.04] hover:bg-white",
        "sm:h-28 sm:w-52",
      )}
      title={partner.name}
    >
      <img
        src={partner.url}
        alt={`${partner.name} logo`}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}
