import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#090B11",
          surface: "#0F1117",
          elevated: "#161B27",
          overlay: "#1E2436",
        },
        border: {
          DEFAULT: "#1F2535",
          subtle: "#161B27",
        },
        text: {
          primary: "#F0F4FF",
          secondary: "#8B95B0",
          muted: "#4A5270",
        },
        brand: {
          DEFAULT: "#7B5EF8",
          glow: "rgba(123,94,248,0.25)",
        },
        accent: {
          cyan: "#22D3EE",
        },
        semantic: {
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
          info: "#3B82F6",
        },
        ai: {
          glow: "rgba(34,211,238,0.15)",
          border: "rgba(34,211,238,0.30)",
        }
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #7B5EF8, #22D3EE)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.4)",
        md: "0 4px 12px rgba(0,0,0,0.5)",
        lg: "0 8px 32px rgba(0,0,0,0.6)",
        xl: "0 16px 64px rgba(0,0,0,0.7)",
        brand: "0 0 24px rgba(123,94,248,0.35)",
        ai: "0 0 20px rgba(34,211,238,0.25)",
        success: "0 0 16px rgba(16,185,129,0.30)",
        danger: "0 0 16px rgba(239,68,68,0.30)",
        innerGlow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
