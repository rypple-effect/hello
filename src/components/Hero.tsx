import { useParallax } from "@/hooks/useParallax";
import ScrambleText from "./ScrambleText";
import GlitchText from "./GlitchText";
import ParticleField from "./ParticleField";

export default function Hero() {
  const videoParallax = useParallax<HTMLVideoElement>(0.15);
  const eyebrowParallax = useParallax<HTMLDivElement>(0.25);
  const h1Parallax = useParallax<HTMLHeadingElement>(0.35);
  const subtextParallax = useParallax<HTMLParagraphElement>(0.45);
  const ctaParallax = useParallax<HTMLDivElement>(0.55);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-[120px] pb-[90px] px-6 overflow-hidden">
      {/* Video background */}
      <video
        ref={videoParallax}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwlXH07IWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      {/* Dark vignette overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(0,0,0,0.45)" }}
        aria-hidden="true"
      />

      {/* 3D particle field */}
      <ParticleField />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div ref={eyebrowParallax}>
          <ScrambleText
            text="Statistician & Data Analyst"
            triggerOnMount
            as="span"
            className="inline-block text-xs uppercase tracking-widest text-primary liquid-glass rounded-full px-4 py-2 mb-7"
          />
        </div>

        <h1
          ref={h1Parallax}
          className="animate-fade-rise-delay font-display font-extrabold text-[2.6rem] leading-[1.08] sm:text-6xl md:text-7xl tracking-tight text-foreground"
        >
          <GlitchText as="span" className="block" text="Engineering logic from" />
          <GlitchText as="span" className="block text-primary text-glow" text="complex data." />
        </h1>

        <p
          ref={subtextParallax}
          className="animate-fade-rise-delay-2 mt-7 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          I build predictive machine learning models, automated ETL pipelines, and dynamic
          analytics architectures that transform raw datasets into actionable strategic
          intelligence.
        </p>

        <div
          ref={ctaParallax}
          className="animate-fade-rise-delay-3 mt-10 flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="#projects"
            className="liquid-glass rounded-full px-8 py-3.5 text-sm font-medium text-foreground border border-primary/30 animate-glow-pulse"
          >
            View Projects
          </a>
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
          >
            Read Resume &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
