const config = {
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
      colors: {
        catgreen: "#a6da95",
        catmauve: "#c6a0f6",
        catsub1: "#a5adcb",
        cattext1: "#181926",
        cat_title_bg: "#6e738d",
        cat_text_bg: "#494d64",
        cat_text_primary: "#cad3f5",
      },
    },
  },
  plugins: [],
};
export default config;
