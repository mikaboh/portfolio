export default {
  content: ["./{src/**/,}*.{js,jsx,ts,tsx,html,svelte,vue,json}"],
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
  mode: "jit",
};
