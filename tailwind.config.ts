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
        "gradient-light":
          "linear-gradient(to bottom, #13151f 80%, #0c0c13 100%)",
        "gradient-dark":
          "linear-gradient(to bottom, #0c0c13 90%, #13151f 100%)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        taraxa: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#15AC5B",
          "primary-content": "#FFFFFF",
          error: "#f04265",
          info: "#2094f3",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
