import { useTilt } from "@/hooks/useTilt";
import { cn } from "@/lib/utils";
import GradientFlowText from "./GradientFlowText";
import SplitReveal from "./SplitReveal";

export default function Projects() {
  const tier1Ref = useTilt<HTMLDivElement>();
  const tier2Ref = useTilt<HTMLDivElement>();
  const tier3Ref = useTilt<HTMLDivElement>();

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="container">
        <SplitReveal
          as="h2"
          text="Analytical Portfolio"
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground max-w-2xl"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Tier 1 — Credit Risk Classification */}
          <div ref={tier1Ref} className="liquid-glass rounded-lg p-7 flex flex-col h-full">
            <span className="inline-flex w-fit rounded-full liquid-glass px-3 py-1 text-xs text-primary">
              Machine Learning
            </span>
            <GradientFlowText
              as="h3"
              text="BPI Predictive Analytics"
              className="mt-5 font-display font-bold text-xl"
            />
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1">
              <li>XGBoost &amp; CatBoost</li>
              <li>SMOTE integration</li>
              <li>Imbalanced data mitigation</li>
              <li>Python (Selenium/BeautifulSoup)</li>
            </ul>
          </div>

          {/* Tier 2 — Institutional Data Architecture (FEATURED) */}
          <div
            ref={tier2Ref}
            className={cn(
              "liquid-glass rounded-lg p-7 flex flex-col h-full",
              "border border-[rgba(0,210,255,0.3)]"
            )}
            style={{ boxShadow: "0 0 30px rgba(0,210,255,0.08)" }}
          >
            <span className="inline-flex w-fit rounded-full liquid-glass px-3 py-1 text-xs text-primary animate-glow-pulse">
              Data Engineering
            </span>
            <GradientFlowText
              as="h3"
              text="UPLB Workflow ETL"
              className="mt-5 font-display font-bold text-xl"
            />
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1">
              <li>Power Query integration</li>
              <li>Standardized database architecture</li>
              <li>Power BI &amp; Looker Studio Dashboards</li>
              <li>Cross-departmental scaling</li>
            </ul>
          </div>

          {/* Tier 3 — Environmental Abundance & Statistics */}
          <div ref={tier3Ref} className="liquid-glass rounded-lg p-7 flex flex-col h-full">
            <span className="inline-flex w-fit rounded-full liquid-glass px-3 py-1 text-xs text-primary animate-glow-pulse">
              Statistics
            </span>
            <GradientFlowText
              as="h3"
              text="R Packages"
              className="mt-5 font-display font-bold text-xl"
            />
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground flex-1">
              <li>R Package creation</li>
              <li>Hypothesis testing</li>
              <li>Regression analysis</li>
              <li>Structural Equation Modelling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
