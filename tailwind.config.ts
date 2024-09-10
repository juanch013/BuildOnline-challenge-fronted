import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    './src/modules/**/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green_bo: "#54FA80",
        input_bg: "#242424",
        input_text_grey: "#C3C3C3",
      },
    },
  },
  plugins: [],
};
export default config;
