/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

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
