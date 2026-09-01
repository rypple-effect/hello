import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface SplitRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/**
 * Splits heading text into individual words and reveals them with a
 * staggered clip-path + translateY animation once scrolled into view.
 */
export default function SplitReveal({ text, as = "h2", className }: SplitRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const wordEls = node.querySelectorAll<HTMLElement>("[data-word]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(wordEls, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(wordEls, { opacity: 0, y: "100%" });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(wordEls, {
            opacity: 1,
            y: "0%",
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.06,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [text]);

  const Tag = as;

  return (
    <Tag ref={containerRef} className={cn("overflow-hidden", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em] align-top">
          <span data-word className="inline-block">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
