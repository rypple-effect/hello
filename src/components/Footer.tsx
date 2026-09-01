const NAV = ["Expertise", "Workflow", "Experience", "Projects"];
const CONNECT = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rcgalaban" },
  { label: "GitHub", href: "https://github.com/rypple-effect" },
  { label: "Email", href: "mailto:galabanry@outlook.com" },
  { label: "Resume", href: `${import.meta.env.BASE_URL}resume.pdf` },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-16 px-6">
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <span className="font-display font-extrabold text-xl text-foreground">
            Ryan Galaban<span className="text-primary">™</span>
          </span>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Statistical rigor meets scalable engineering.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Navigation</h4>
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Connect</h4>
          <ul className="space-y-2">
            {CONNECT.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mt-14 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground">
          &copy; 2026 Ryan Christian S. Galaban. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
