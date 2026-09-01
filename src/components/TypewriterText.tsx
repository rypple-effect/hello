import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  showCursor?: boolean;
}

/**
 * Types text out character by character once the element scrolls into view.
 */
export default function TypewriterText({
  text,
  className,
  speed = 32,
  showCursor = true,
}: TypewriterTextProps) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const type = () => {
      if (started.current) return;
      started.current = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplay(text);
        setDone(true);
        return;
      }

      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) type();
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={cn(className)}>
      {display}
      {showCursor && !done && <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />}
    </span>
  );
}
