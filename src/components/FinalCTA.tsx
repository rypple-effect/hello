import SplitReveal from "./SplitReveal";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 px-6 text-center">
      <div className="container flex flex-col items-center">
        <SplitReveal
          as="h2"
          text="Ready to optimize your data architecture?"
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground max-w-3xl mx-auto"
        />
        <a
          href="mailto:galabanry@outlook.com"
          className="mt-10 liquid-glass rounded-full text-foreground border border-primary/30 animate-glow-pulse"
          style={{ padding: "1rem 2.5rem" }}
        >
          Let&rsquo;s Collaborate
        </a>
      </div>
    </section>
  );
}
