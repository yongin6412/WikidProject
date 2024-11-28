import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: {
          100: "#ffffff",
        },
        gray: {
          100: "#f7f7fa",
          200: "#e4e5f0",
          300: "#c6cada",
          400: "#8f95b2",
          500: "#474d66",
          600: "#3b415b",
        },
        green: {
          100: "#eef9f6",
          200: "#4cbfa4",
          300: "#32a68a",
        },
        red: {
          100: "#fbeded",
          200: "#d14343",
        },
        purple: {
          100: "#8e66ff",
        },
        yellow: {
          100: "#fdd181",
        },
      },
      fontSize: {
        xssss: ["10px", { lineHeight: "12px" }],
        sm: ["16px", { lineHeight: "18px" }],
        me: ["20px", { lineHeight: "23px" }],
        la: ["30px", { lineHeight: "35px" }],
        xl: ["32px", { lineHeight: "37px" }],
        xxl: ["50px", { lineHeight: "57px" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
