const mobileHeader = {
  "mobile-header": "56px",
};

const desktopHeader = {
  "desktop-header": "72px",
};

module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  mode: "jit",
  theme: {
    extend: {
      colors: {
        mainBg: "#626262",
        primary: "#353535",
        secondary: "#E05F16",
        error: "#E7320E",
      },
      spacing: {
        "mobile-spacing": "16px",
        ...mobileHeader,
        ...desktopHeader,
      },
      transitionProperty: {
        width: "width",
      },
      height: {
        fit: "fit-content",
        ...mobileHeader,
      },
      width: {
        fit: "fit-content",
      },
      screens: {
        xs: "568px",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
