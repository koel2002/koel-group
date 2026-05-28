import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forestGreen: "#0B291B",
        fuchsia258: "#C82A7A",
        softIvory: "#FBFBFA",
        charcoalDark: "#1A1A1A"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
