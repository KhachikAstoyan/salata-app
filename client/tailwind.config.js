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
        fontPrimary: {
          DEFAULT: "5A5A5A",
        },
      },
      fontFamily: {
        Nunito: ['"Nunito"', '"Roboto"', "sans-serif"],
        Roboto: ['"Roboto"', '"Nunito"', "sans-serif"],
        Comfortaa: ['"Comfortaa"', '"Roboto"', "sans-serif"],
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
    extend: {
      boxShadow: ["active"],
      translate: ["active"],
      textColor: ["active"],
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
