/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#333333",
        white: "#F5F5F5",
        blue: "#4169e1",
        orange: "#FFCC99",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: { themes: ["light", "dark"] },
};
