import ScrambleText from "./ScrambleText";
import SplitReveal from "./SplitReveal";

const STEPS = [
  {
    n: "01",
    title: "Data Ingestion & Cleaning",
    desc: "Harvesting alternative web data and structuring fragmented legacy datasets via automated pipelines.",
  },
  {
    n: "02",
    title: "Feature Engineering",
    desc: "Executing advanced transformations on existing variables to maximize model predictive power.",
  },
  {
    n: "03",
    title: "Model Development",
    desc: "Deploying specialized algorithms to mitigate data skewness and optimize classification accuracy.",
  },
  {
    n: "04",
    title: "Insight Translation",
    desc: "Synthesizing complex quantitative outputs into actionable market intelligence for stakeholders.",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-28 px-6">
      <div className="container max-w-3xl">
        <ScrambleText text="Methodology" className="text-xs uppercase tracking-widest text-primary" />
        <SplitReveal
          as="h2"
          text="From Raw Data to Strategic Insight"
          className="mt-4 font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground"
        />

        <div className="mt-16 flex flex-col">
          {STEPS.map((step, i) => (
            <div key={step.n} className={i > 0 ? "dashed-divider pt-10 mt-10" : ""}>
              <div className="flex gap-6 sm:gap-10 items-start">
                <span className="font-display font-extrabold text-2xl text-primary shrink-0 w-10">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
