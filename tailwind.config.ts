import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        // Named after the Neela Kurinji flower (Strobilanthes kunthiana),
        // which blooms blue-violet across the Nilgiri hills once every 12 years.
        ink: "#15131C", // primary text — near-black, violet undertone
        paper: "#FCFBF9", // primary background — warm near-white
        bloom: {
          DEFAULT: "#5B4A8F", // primary accent — the flower itself
          deep: "#2C2140", // dark sections, hover states
          light: "#8A78BE",
        },
        mist: "#EDEAF6", // secondary background / hairline borders
        muted: "#6E6B7A", // secondary text
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      keyframes: {
        "bloom-pulse": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "bloom-pulse": "bloom-pulse 8s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
