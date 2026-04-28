import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        forest: "var(--color-forest)",
        moss: "var(--color-moss)",
        bark: "var(--color-bark)",
        wood: "var(--color-wood)",
        beige: "var(--color-beige)",
        borderwarm: "var(--color-border)"
      },
      boxShadow: {
        float: "0 14px 38px rgba(47, 36, 27, 0.12)"
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      }
    }
  },
  plugins: []
};

export default config;
