import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
      playwrite: ["Playwrite CU", "cursive"],
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-0": "var(--primary-light-0)",
        "primary-2": "var(--primary-light-2)",
        "primary-3": "var(--primary-light-3)",
        light: "var(--primary-light)",
        lighter: "var(--primary-light-1)",
        secondary: "var(--secondary)",
        disabled:'var(--primary-light-4)',
        dark: {
          "0": "var(--color-dark-0)",
          "1": "var(--color-dark-1)",
          "2": "var(--color-dark-2)",
          "3": "var(--color-dark-3)",
        },
        green: {
          0: "var(--color-green-0)",
          1: "var(--color-green-1)",
        },
        red: {
          0: "var(--color-red-0)",
          1: "var(--color-red-1)",
        },
        yellow: {
          "1": "var(--yellow-1)",
        },
        border: "var(--border)",
        background: "var(--background)",
        transparent: "var(--transparent)",
      },
      screens: {
        xs: "400px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
