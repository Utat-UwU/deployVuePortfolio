/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "dracula",
      {
        mytheme: {
          primary: "#d2b154",

          secondary: "#353436",

          accent: "#8c8c8c",

          neutral: "#fef08a",

          "base-100": "#dfdde0",

          info: "#84cc16",

          success: "#4ade80",

          warning: "#f97316",

          error: "#ff0000",
        },
      },
    ],
  },
};
