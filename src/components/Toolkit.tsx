import SplitReveal from "./SplitReveal";

const TOOLS = [
  { name: "Python & R", desc: "Advanced modeling, Pandas, NumPy, Selenium" },
  { name: "SQL & C", desc: "Database management and systems programming" },
  { name: "Power BI & Looker", desc: "High-fidelity data visualization" },
  { name: "SAS & STATA", desc: "Advanced statistical and econometric tools" },
];

export default function Toolkit() {
  return (
    <section className="relative py-28 px-6 grid-bg">
      <div className="container relative">
        <SplitReveal
          as="h2"
          text="The Technical Stack"
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground max-w-2xl"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {TOOLS.map((tool) => (
            <div key={tool.name} className="flex flex-col gap-2">
              <h3 className="font-display font-bold text-lg text-foreground">{tool.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
