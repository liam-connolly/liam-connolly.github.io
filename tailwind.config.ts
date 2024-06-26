import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      bone: "#F4F1EA",
      strokesBlue: "#0b17b4",
      navGrey: "#cccccc",
      white: "#FFFFFF",
      black: "#000000",
      darkBlue: "#011e75",
      darkTeal: "#22527e",
      grey: "#44484c",
    },
  },
  plugins: [],
};

export default config;
