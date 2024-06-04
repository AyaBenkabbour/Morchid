/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f1edee",
        white: "#fff",
        gray: "#858585",
        black: "#000",
        chocolate: "#e67019",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "3xs": "0.625rem",
      sm: "0.875rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
