/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./_components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
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
};
export const plugins = [];
