const plugin = require("tailwindcss/plugin");

module.exports = {
  // important: true,
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: { min: "475px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: [{ min: "768px", max: "1023px" }, { min: "996px" }],
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" }
    },
    extend: {
      colors: {
        // primary: 'var(--primary-color)',
        primary: "#5FA03B",
        secondary: "#00A0AA"
      },
      width: {
        maxwith: "1366px",
        w41: "10.313rem",
        w42: "10.625rem,",
        w43: "10.938rem",
        w77: "77%",
        w1050: "1050px",
        w15: "15%"
      },
      minWidth: {
        "1": "15.666667%"
      },
      backgroundImage: theme => ({
        navbar: "url('assets/images/menu-bg.png')"
      })
    }
  },
  variants: {
    extend: {
      height: ["responsive", "hover", "focus"],
      borderWidth: ["first"],
      borderColor: ["first", 'checked'],
      textColor: ["first"],
      backgroundColor: ['first', 'hover', 'checked']
    }
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant("nth-child", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`nth-child${separator}${className}`)}:nth-child(-n+3)`;
        });
      });
    })
  ]
};
