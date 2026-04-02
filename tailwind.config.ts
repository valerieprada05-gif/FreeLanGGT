import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--navy)",
        navy2: "var(--navy2)",
        navy3: "var(--navy3)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "gold-pale": "var(--gold-pale)",
        off: "var(--off)",
        muted2: "var(--muted2)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
}

export default config
