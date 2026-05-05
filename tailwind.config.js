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
        /** פינות רכות יותר מברירת המחדל — פחות “מרובע תעשייתי” */
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      colors: {
        brand: {
          red: "#D42B2B",
        },
        surface: "#FAFAF8",
      },
      fontFamily: {
        serif: ["Frank Ruhl Libre", "serif"],
        sans: ["Heebo", "system-ui", "sans-serif"],
        /** תוויות / אנגלית — מוביל ל־Assistant שכבר נטען ב־layout */
        label: ["Assistant", "Heebo", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
