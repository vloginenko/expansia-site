import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070B17",
        ink: "#EAEEF5",
        muted: "#7A8497",
        line: "#1A2138",
        panel: "#0F1426",
        // primary acid token now = cyan (matches logo, all existing classes work)
        acid: "#00D4FF",
        violet: "#7C5CFF",
        signal: "#FF4D6D",
        navy: "#0A0E1B",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
        display: ["var(--font-display)", "Inter", "ui-sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.02em",
        tighter2: "-0.04em",
      },
      animation: {
        ticker: "ticker 60s linear infinite",
        "ticker-slow": "ticker 90s linear infinite",
        ring: "ring 4s ease-out infinite",
        "ring-d": "ring 4s ease-out infinite 1.3s",
        "ring-d2": "ring 4s ease-out infinite 2.6s",
        glow: "glow 3s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ring: {
          "0%": { transform: "scale(0.6)", opacity: "0.9" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px, -10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
