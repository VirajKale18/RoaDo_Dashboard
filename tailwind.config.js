module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        teal: { 300: "#4fd2b5" },
        black: { 900: "#000000" },
        gray: { 50: "#f7faff", 400: "#cacaca", 700: "#676666", 900: "#111111" },
        green: { 800: "#148714" },
        red: { 600: "#d04141" },
        indigo: { 900: "#1a3875" },
        blue: { 50: "#e0eaff" },
      },
      boxShadow: { xs: "0px 2px 8px 0px #1a38750c", sm: "0px 0px 2px 0px #d0414126" },
      fontFamily: { roboto: "Roboto", montserrat: "Montserrat" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #ffffff,#ffcb49)",
        gradient1: "linear-gradient(90deg, #ffffff,#7464ff)",
        gradient2: "linear-gradient(90deg, #ffffff,#4fd2b5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
