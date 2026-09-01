import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  className?: string;
  triggerOnMount?: boolean;
  as?: "span" | "div" | "p";
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/**
 * Scrambles through random characters before settling on the final text.
 * Fires immediately on mount when triggerOnMount is true, otherwise
 * fires once the element enters the viewport.
 */
export default function ScrambleText({
  text,
  className,
  triggerOnMount = false,
  as = "span",
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(triggerOnMount ? "" : text);
  const ref = useRef<HTMLElement | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scramble = () => {
      if (hasRun.current) return;
      hasRun.current = true;

      if (reduceMotion) {
        setDisplay(text);
        return;
      }

      let frame = 0;
      const totalFrames = 18;
      const interval = setInterval(() => {
        frame++;
        const revealCount = Math.floor((frame / totalFrames) * text.length);
        const next = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealCount) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        setDisplay(next);
        if (frame >= totalFrames) {
          setDisplay(text);
          clearInterval(interval);
        }
      }, 30);
    };

    if (triggerOnMount) {
      scramble();
      return;
    }

    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) scramble();
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Tag = as as any;

  return (
    <Tag ref={ref} className={cn("font-mono-none tabular-nums", className)}>
      {display}
    </Tag>
  );
}
