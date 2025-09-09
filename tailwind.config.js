/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9E7FFF",
        secondary: "#38bdf8",
        accent: "#f472b6",
        background: "#171717",
        surface: "#262626",
        text: "#FFFFFF",
        textSecondary: "#A3A3A3",
        border: "#2F2F2F",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0, transform: "translateY(-10px)" },
          to: { opacity: 1, transform: "none" },
        },
        "shine": {
          "from": { backgroundPosition: "200% 0" },
          "to": { backgroundPosition: "-200% 0" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out forwards",
        "shine": "shine 8s ease-in-out infinite",
        "infinite-scroll": "infinite-scroll 35s linear infinite",
      },
    },
  },
  plugins: [],
}
