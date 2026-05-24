import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0A",
        ink: "#F2EDE4",
        muted: "#807E78",
        line: "#1F1E1B",
        panel: "#121210",
        acid: "#D6FF3B",
        signal: "#FF3D2E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightish: "-0.02em",
        tighter2: "-0.04em",
      },
      animation: {
        ticker: "ticker 60s linear infinite",
        "ticker-slow": "ticker 90s linear infinite",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "30%": { transform: "translate(3%,-15%)" },
          "50%": { transform: "translate(12%,9%)" },
          "70%": { transform: "translate(9%,4%)" },
          "90%": { transform: "translate(-1%,7%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
