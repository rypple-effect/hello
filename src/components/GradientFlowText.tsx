import { cn } from "@/lib/utils";

interface GradientFlowTextProps {
  text: string;
  className?: string;
  as?: "span" | "h3" | "h4";
}

/**
 * Renders text with a slowly animated cyan-to-white gradient sweep, used
 * for featured project titles.
 */
export default function GradientFlowText({ text, className, as = "span" }: GradientFlowTextProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-flow_5s_ease-in-out_infinite]",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(90deg, #ffffff 0%, #00d2ff 35%, #ffffff 65%, #00d2ff 100%)",
      }}
    >
      {text}
      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </Tag>
  );
}
