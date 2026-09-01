import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      keyframes: {
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 0px rgba(0,210,255,0.0)" },
          "50%": { boxShadow: "0 0 22px rgba(0,210,255,0.25)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        "fade-rise-delay": "fade-rise 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s both",
        "fade-rise-delay-2": "fade-rise 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s both",
        "fade-rise-delay-3": "fade-rise 0.9s cubic-bezier(0.16,1,0.3,1) 0.55s both",
        "glow-pulse": "glow-pulse 3.2s ease-in-out infinite",
        "scan-line": "scan-line 9s linear infinite",
      },
      borderRadius: {
        lg: "0.9rem",
        md: "0.6rem",
        sm: "0.4rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
