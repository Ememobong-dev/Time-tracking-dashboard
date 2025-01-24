import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       blue: "hsl(246, 80%, 60%)",
       lightRedwork: "hsl(15, 100%, 70%)",
       softBlue: "hsl(195, 74%, 62%)",
       lightRedstudy: "hsl(348, 100%, 68%)",
       limeGreen: "hsl(145, 58%, 55%)",
       violet: "hsl(264, 64%, 52%)",
       softOrange: "hsl(43, 84%, 65%)",
       veryDarkblue: "hsl(226, 43%, 10%)",
       darkBlue: "hsl(235, 46%, 20%)",
       desaturatedBlue: "hsl(235, 45%, 61%)",
       paleBlue: "hsl(236, 100%, 87%)"
      },
      fontFamily: {
        rubikRegular: ["rubik-regular", "sans-serif"],
        rubikBold: ["rubik-bold", "sans-serif"],
        rubikLight: ["rubik-light", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
