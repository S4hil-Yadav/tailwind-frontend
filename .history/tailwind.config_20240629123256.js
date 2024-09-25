/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "1.5rem",
    //   },
    // },
    extend: {
      keyframes: {
        "sliding-photo": {
          "0%": { left: "0px" },
          "10%": { left: "0px" },
          "20%": { left: "0px" },
          "30%": { left: "0px" },
          "40%": { left: "0px" },
          "50%": { left: "0px" },
          "60%": { left: "0px" },
          "70%": { left: "0px" },
          "80%": { left: "0px" },
          "90%": { left: "0px" },
          "100%": { left: "0px" },
        },
      },
    },
    screens: {
      sm: "48'0px'",
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
