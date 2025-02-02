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
        lavender : "#F3E4FF",
        darkLavender : "#47037E",
        purple : "#7028AB",
        offWhite : "#FBF6FF",
        darkGrey : "#2F2835",
        lightGrey : "#4A3F53",
        background: "#FBF6FF",
        foreground: "var(--foreground)",
      },
      fontFamily :{
        Montserrat : 'Montserrat',
      }
    },
  },
  plugins: [],
} satisfies Config;
