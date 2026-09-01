import { useTilt } from "@/hooks/useTilt";
import ScrambleText from "./ScrambleText";
import SplitReveal from "./SplitReveal";

const ITEMS = [
  {
    title: "Predictive Modeling",
    desc: "Building high-accuracy classification models for highly imbalanced datasets using XGBoost, CatBoost, and Random Forest architectures.",
  },
  {
    title: "Automated ETL Pipelines",
    desc: "Engineering robust data extraction and transformation workflows using Python, Power Query, and advanced web-scraping techniques.",
  },
  {
    title: "Executive Dashboards",
    desc: "Translating fragmented legacy data into dynamic, real-time visual insights across Power BI and Google Looker Studio.",
  },
  {
    title: "Econometric Analysis",
    desc: "Extracting key demographic and economic trends from massive-scale national survey datasets using R and Python.",
  },
  {
    title: "Statistical Consulting",
    desc: "Conducting end-to-end data analysis frameworks, from hypothesis testing to complex modelling and testing",
  },
  {
    title: "Database Management",
    desc: "Designing standardized database architectures and implementing strict data-governance protocols to ensure reporting compliance.",
  },
];

function ExpertiseCard({ title, desc }: { title: string; desc: string }) {
  const tiltRef = useTilt<HTMLDivElement>();
  return (
    <div
      ref={tiltRef}
      className="liquid-glass rounded-lg p-6 sm:p-7 md:p-8 flex flex-col justify-between aspect-square"
    >
      <h3 className="font-display font-bold text-lg sm:text-xl text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-28 px-6">
      <div className="container">
        <ScrambleText
          text="Core Competencies"
          className="text-xs uppercase tracking-widest text-primary"
        />
        <SplitReveal
          as="h2"
          text="Advanced Analytics & Architecture"
          className="mt-4 font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground max-w-3xl"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {ITEMS.map((item) => (
            <ExpertiseCard key={item.title} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
