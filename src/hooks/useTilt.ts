import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  "max-glare"?: number;
  scale?: number;
}

const defaultOptions: TiltOptions = {
  max: 6,
  speed: 400,
  glare: true,
  "max-glare": 0.08,
  scale: 1.015,
};

export function useTilt<T extends HTMLElement = HTMLDivElement>(options: TiltOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    VanillaTilt.init(node, { ...defaultOptions, ...options });

    return () => {
      (node as unknown as { vanillaTilt?: { destroy: () => void } }).vanillaTilt?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
