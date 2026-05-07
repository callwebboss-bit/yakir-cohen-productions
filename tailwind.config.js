/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        /* Bauhaus — sharp. 2px max for surfaces, 4px ceiling for large panels.
           rounded-3xl/4xl/5xl deliberately omitted; use rounded-full for avatars. */
        none: "0",
        sm: "2px",
        DEFAULT: "2px",
        md: "2px",
        lg: "4px",
        xl: "4px",
        "2xl": "4px",
      },
      colors: {
        brand: {
          red: "#D42B2B",
          ink: "#1A1A1A",
        },
        surface: "#FAFAF8",
        "surface-container": "#F0EDE6",
        "surface-deep": "#E6E2D6",
        ink: "#1A1A1A",
        "ink-soft": "rgba(26, 26, 26, 0.15)",
      },
      borderWidth: {
        hairline: "1.5px",
      },
      fontFamily: {
        serif: ["Frank Ruhl Libre", "serif"],
        sans: ["Heebo", "system-ui", "sans-serif"],
        label: ["Assistant", "Heebo", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
