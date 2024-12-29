/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      logoFont: ["Diphylleia", "serif"],
      themeFont: ["Inconsolata", "monospace"],
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      width: {
        screen: "100dvw",
      },
    },
  },
  plugins: [],
};
