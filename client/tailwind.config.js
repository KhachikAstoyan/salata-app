module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F8FFF6",
          DEFAULT: "#2CBB3A",
          dark: "#249D30",
        },
        whiteHover: {
          DEFAULT: "#fafafa",
        },
      },
      fontFamily: {
        Nunito: ['"Nunito"', '"Roboto"', "sans-serif"],
        Roboto: ['"Roboto"', '"Nunito"', "sans-serif"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        custom: "1000ms",
      },
    },
  },
  variants: {
    extend: { boxShadow: ["active"], translate: ["active"] },
  },
  plugins: [],
};
