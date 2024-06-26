export default {
  content: ["./{src/**/,}*.{js,jsx,ts,tsx,html,svelte,vue}"],
  theme: {
    extend: {
      fontFamily: { inter: "Inter", plus_jakarta_sans: "Plus Jakarta Sans" },
      backgroundImage: {
        "put-your-image-here-":
          "url(/assets/put-your-image-here.png)",
        "put-your-image-here-1":
          "url(/assets/put-your-image-here-5.png)",
      },
      colors: {
        "accent": "#7E74F1",
        "textOnDark": "#F1F1F1",
        "textOnLight": "#232E35",
        "textOnLightLighter": "#656D72",
        "backgroundDark": "#1E1E1E",
        "backgroundLight": "#FBFBFB",
      }
    },
  },
  plugins: [],
  mode: "jit",
};
