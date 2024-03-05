import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        outfit: ['var(--font-outfit)'],
      },
      colors: {
        pg: 'rgba(var(--pgreen), <alpha-value>)',
        pw: 'rgba(var(--pwhite), <alpha-value>)',
        pp: 'rgba(var(--ppurple), <alpha-value>)',
        
      }
    },
  },
  plugins: [],
};
export default config;
