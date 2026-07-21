import { useCallback, useEffect, useRef, useState } from "react";
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

const SECONDS_PER_LOGO = 3;
const DURATION_MS = PARTNERS.length * SECONDS_PER_LOGO * 1000;

export function PartnerMarquee() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<Animation | null>(null);
  const loopWidthRef = useRef(0);
  const hoveredRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const [reduced, setReduced] = useState(false);

  const normalize = useCallback((value: number) => {
    const width = loopWidthRef.current;
    if (!width) return value;

    let next = value % width;
    if (next > 0) next -= width;
    return next;
  }, []);

  const offsetToTime = useCallback((offset: number) => {
    const width = loopWidthRef.current;
    if (!width) return 0;
    return (-normalize(offset) / width) * DURATION_MS;
  }, [normalize]);

  const setPaused = useCallback((next: boolean) => {
    const animation = animationRef.current;
    if (!animation || reduced) return;
    if (next) animation.pause();
    else void animation.play();
  }, [reduced]);

  const getCurrentOffset = useCallback(() => {
    const animation = animationRef.current;
    const width = loopWidthRef.current;
    if (!animation || !width) return 0;
    const time = Number(animation.currentTime ?? 0) % DURATION_MS;
    return normalize(-(time / DURATION_MS) * width);
  }, [normalize]);
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const pause = () => {
      hoveredRef.current = true;
      setPaused(true);
    };
    const resume = () => {
      hoveredRef.current = false;
      if (!draggingRef.current) setPaused(false);
    };

    marquee.addEventListener("pointerenter", pause);
    marquee.addEventListener("pointerleave", resume);

    return () => {
      marquee.removeEventListener("pointerenter", pause);
      marquee.removeEventListener("pointerleave", resume);
    };
  }, [setPaused]);

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

    const createLoop = () => {
      if (animationRef.current) {
        animationRef.current.cancel();
        animationRef.current = null;
      }

      const firstSecondSetItem = track.children[PARTNERS.length] as HTMLElement | undefined;
      const exactLoopWidth = firstSecondSetItem?.offsetLeft ?? track.scrollWidth / 2;
      loopWidthRef.current = exactLoopWidth;

      if (!exactLoopWidth || reduced) {
        track.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      animationRef.current = track.animate(
        [
          { transform: "translate3d(0, 0, 0)" },
          { transform: `translate3d(${-exactLoopWidth}px, 0, 0)` },
        ],
        {
          duration: DURATION_MS,
          easing: "linear",
          iterations: Infinity,
        },
      );

      if (hoveredRef.current || draggingRef.current) animationRef.current.pause();
    };

    const measure = () => {
      const previousOffset = getCurrentOffset();
      createLoop();
      const animation = animationRef.current;
      if (animation && loopWidthRef.current) {
        animation.currentTime = offsetToTime(previousOffset);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    // Re-measure once images have loaded (scrollWidth can change)
    const imgs = Array.from(track.querySelectorAll("img"));
    let pending = imgs.length;
    const onImg = () => {
      pending -= 1;
      if (pending <= 0) measure();
    };
    imgs.forEach((img) => {
      if (img.complete) onImg();
      else {
        img.addEventListener("load", onImg, { once: true });
        img.addEventListener("error", onImg, { once: true });
      }
    });

    return () => {
      if (animationRef.current) animationRef.current.cancel();
      animationRef.current = null;
      ro.disconnect();
    };
  }, [getCurrentOffset, offsetToTime, reduced]);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    setPaused(true);
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = getCurrentOffset();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    const next = normalize(dragStartOffsetRef.current + dx);
    const animation = animationRef.current;
    if (animation) animation.currentTime = offsetToTime(next);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    setPaused(hoveredRef.current && e.pointerType === "mouse");
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
  };

  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <div
      data-partner-marquee
      ref={marqueeRef}
      className="group relative select-none"
    >
      {/* Edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-night via-night/90 to-transparent sm:w-36 lg:w-48"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-night via-night/90 to-transparent sm:w-36 lg:w-48"
      />

      <div
        className="overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          data-partner-track
          ref={trackRef}
          className="flex w-max items-center gap-8 py-2 will-change-transform sm:gap-12"
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
        "flex h-20 w-40 shrink-0 items-center justify-center rounded-lg",
        "bg-slate-200/10 px-5 py-4 backdrop-blur-sm ring-1 ring-white/8",
        "transition-all duration-300 ease-out",
        "hover:bg-slate-100/15 hover:scale-[1.035] hover:ring-white/14",
        "sm:h-24 sm:w-48",
      )}
      title={partner.name}
    >
      <img
        src={partner.url}
        alt={`${partner.name} logo`}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="max-h-full max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}

