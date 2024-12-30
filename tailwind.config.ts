import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2-auto": "repeat(1, auto)",
      },
      borderRadius: {
        "3xl": "32px",
        "4xl": "48px",
      },
      colors: {
        light: {
          accentSoft: "#388FB4",
          accent: "#115572",
          base: "#FFFFFF",
          bg: "#F8F8F8",
          bgHover: "#F0F0F0",
          bgPress: "#E8E8E8",
          softLight: "#E0E0E0",
          bodyLight: "#ABABAB",
          softBody: "#6F6F6F",
          body: "#191919",
          baseInverted: "#000000",
        },
        dark: {
          accentSoft: "#4CA2C7",
          accent: "#8CD0ED",
          base: "#080808",
          bg: "#232323",
          bgHover: "#0F0F0F",
          bgPress: "#171717",
          softLight: "#1F1F1F",
          bodyLight: "#545454",
          softBody: "#8F8F8F",
          body: "#E5E5E5",
          baseInverted: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-rethink-sans)"],
        body: ["var(--font-rethink-sans)"],
      },
    },
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [],
} satisfies Config;
