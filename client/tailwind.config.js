module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
     textColor: {
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
       'white':'#ffffff',
       'red':'#E06A6A',
       'yellow':'#FCD573',
       'lightGreen':'#96CA4F',
       'myGreen':'#018660',
       'mainText' : '#5C5F60',
       'DueBy':'#AEDAD5'
     },
     boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      customShadow:'0 3px 7px 0 rgba(1, 134, 96, 0.16)'
    },
    extend: {
      colors: {
        primary: {
          light: "#F8FFF6",
          DEFAULT: "#2CBB3A",
          dark: "#249D30",
          'myGreen':'#018660',
          'gray':'#5C5F60',
          'itemsBg':'#AEDAD5'
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
      margin: ["active"],
      borderWidth: ["active"]
    },
  },
  plugins: [],
};
