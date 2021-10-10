module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      "border-gray-300",
      "border-yellow-300",
      "border-green-300",
      "border-red-300",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      customShadow: "0 3px 7px 0 rgba(1, 134, 96, 0.16)",
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        primary: {
          lighten: "#02d296",
          light: "#f1faf9",
          DEFAULT: "#018660",
          dark: "#016d4e",
          bgLight: "#F1FAF9",
          imgBg: " #e6fff8",
          extraInfo: "#01866029",
        },
        secondary: {
          light: "#7C7F80",
          DEFAULT: "#5C5F60",
          dark: "#43464F",
        },
        tertiary: {
          light: "",
          DEFAULT: "#AEDAD5",
          dark: "",
        },
        warning: {
          DEFAULT: "#E06A6A",
          light: "#e03838",
          dark: "#c71f1f",
        },
      },
      fontFamily: {
        Nunito: ['"Nunito"', '"Roboto"', "sans-serif"],
        Roboto: ['"Roboto"', '"Nunito"', "sans-serif"],
        // Comfortaa: ['"Comfortaa"', '"Roboto"', "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
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
      margin: ["active", "focus"],
      borderWidth: ["active"],
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
