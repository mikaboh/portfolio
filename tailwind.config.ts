import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { inter: "Inter", plus_jakarta_sans: "Plus Jakarta Sans" },
      aspectRatio: {
        '3/4': '3 / 4',
      },
      colors: {
        "accent": "#7E74F1",
        "textOnDark": "#F1F1F1",
        "textOnLight": "#232E35",
        "textOnLightLighter": "#656D72",
        "backgroundDark": "#1E1E1E",
        "backgroundLight": "#FBFBFB",
        "borderColorOnLight": "#E5E7EB",
      }
    },
  },
  plugins: [],
};
export default config;
