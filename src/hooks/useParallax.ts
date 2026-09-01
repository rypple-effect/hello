import { useEffect, useRef } from "react";

/**
 * Applies a translateY(scrollY * speed) transform to the returned ref element.
 * Disabled on mobile (window.innerWidth < 768) to avoid jank / layout issues
 * on touch devices — the ref is returned untouched in that case.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed: number) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;

    let rafId = 0;
    let latestScrollY = window.scrollY;
    let ticking = false;

    const apply = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(${latestScrollY * speed}px)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      latestScrollY = window.scrollY;
      if (!ticking) {
        rafId = requestAnimationFrame(apply);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return ref;
}
