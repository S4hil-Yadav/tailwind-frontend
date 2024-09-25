/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    keyframes: {},
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "1.5rem",
    //   },
    // },
    extend: {},
    screens: {
      sm: "480px",
      mn2: "894px",
      mn3: "1374px",
      nv: "992px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      exo: ["Exo", "sans-serrif"],
    },
  },
  plugins: [],
};
