import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#626A9D",
        primary: "#003A87",
        primary_text: "#EBEEFF",
        secondary_text: "#D0A617",
      },
    },
  },
  plugins: [],
};
export default config;
