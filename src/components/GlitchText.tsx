import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  as?: "span" | "div";
  className?: string;
  delay?: number;
}

/**
 * Renders text with two offset RGB-shifted clones layered behind it,
 * then briefly glitches them into place on mount using GSAP.
 */
export default function GlitchText({ text, as = "span", className, delay = 0 }: GlitchTextProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layers = node.querySelectorAll<HTMLElement>("[data-glitch-layer]");
    const tl = gsap.timeline({ delay });

    tl.set(layers, { opacity: 0 })
      .to(layers, {
        opacity: 0.7,
        duration: 0.06,
        stagger: 0.03,
      })
      .to(layers[0], { x: -3, duration: 0.05 }, "<")
      .to(layers[1], { x: 3, duration: 0.05 }, "<")
      .to(layers, { x: 0, opacity: 0, duration: 0.18, stagger: 0.02 });

    return () => {
      tl.kill();
    };
  }, [delay]);

  const Tag = as;

  return (
    <Tag className={cn("relative inline-block", className)}>
      <span ref={wrapRef} className="relative inline-block">
        <span
          data-glitch-layer
          aria-hidden
          className="absolute inset-0 text-[#ff2ea6] mix-blend-screen pointer-events-none select-none"
        >
          {text}
        </span>
        <span
          data-glitch-layer
          aria-hidden
          className="absolute inset-0 text-[#00d2ff] mix-blend-screen pointer-events-none select-none"
        >
          {text}
        </span>
        <span className="relative">{text}</span>
      </span>
    </Tag>
  );
}
