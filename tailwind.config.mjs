/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#02cf5f",
        "color-secondary": "#5dfda4",
        "color-tertiary": "#111a28",
        "color-quaternary": "#1D2939",
        "color-senary": "#535b6b",
      },
      fontSize: {
        sm: "clamp(1.1rem, 4vw, 1.2rem)",
        md: "clamp(1.3rem, 4.5vw, 1.5rem)",
        lg: "clamp(2rem, 6.5vw, 3rem)",
      },
    },
  },
  plugins: [],
}
