import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px", // Mobile
      md: "768px", // Tablet
      lg: "1024px", // Desktop
      xl: "1280px", // Wide desktop
      "2xl": "1440px", // Extra wide
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      spacing: {
        "section-mobile": "4rem", // 64px
        "section-tablet": "6rem", // 96px
        "section-desktop": "8rem", // 128px
      },
      maxWidth: {
        container: "1440px",
        content: "1280px",
        narrow: "960px",
      },
    },
  },
  plugins: [],
};

export default config;
