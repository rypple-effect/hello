import { useTilt } from "@/hooks/useTilt";
import SplitReveal from "./SplitReveal";

const EXPERIENCES = [
  {
    desc: "Engineered automated ETL pipelines and deployed continuous data-integrity audits to proactively identify reporting discrepancies across university departments.",
    role: "Office Assistant - Database Management",
    org: "UPLB OVCRE",
    year: "2026",
  },
  {
    desc: "Conducted advanced statistical analysis on massive national datasets, translating complex metrics into intuitive insights for government stakeholders.",
    role: "Intern - Office of the National Statistician",
    org: "Philippine Statistics Authority",
    year: "2025",
  },
  {
    desc: "Developed predictive machine learning models for highly imbalanced financial datasets and delivered data-driven recommendations to senior banking stakeholders.",
    role: "Intern - Data Modeling",
    org: "Bank of the Philippine Islands",
    year: "2024",
  },
];

function ExperienceCard({
  desc,
  role,
  org,
  year,
}: {
  desc: string;
  role: string;
  org: string;
  year: string;
}) {
  const tiltRef = useTilt<HTMLDivElement>();
  return (
    <div ref={tiltRef} className="liquid-glass rounded-lg p-7 flex flex-col h-full">
      <p className="text-sm text-foreground/90 leading-relaxed flex-1">{desc}</p>
      <div className="mt-6 pt-5 border-t border-border">
        <p className="text-sm font-medium text-foreground">{role}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {org} <span className="text-primary">&middot;</span> {year}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="container">
        <SplitReveal
          as="h2"
          text="Professional Trajectory"
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground max-w-2xl"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.org} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
