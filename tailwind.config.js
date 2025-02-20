//TODO DO NOT USE THIS FILE SINCE TAILWIND 4 IS NOT SUPPORTED

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //todo okumuyor...
        "custom-dark": "#030303",
        background: "#ffffff",
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
