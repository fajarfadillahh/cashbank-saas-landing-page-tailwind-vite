module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1120px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#183b56",
      grey: "#5a7184",
      white: "#ffffff",
      blue: {
        light: "#00bfb2",
        dark: "#028090",
      },
    },
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      title: "135%",
      text: "175%",
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};
