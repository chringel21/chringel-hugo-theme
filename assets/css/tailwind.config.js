const themeDir = __dirname + "/../../";
const colors = require("tailwindcss/colors");
const {
  borderColor,
  fontWeight,
  fontFamily,
} = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    themeDir + "layouts/**/*.html",
    themeDir + "assets/js/**/*.js",
    "layouts/**/*.html",
    "assets/js/**/*.js",
    "exampleSite/layouts/**/*.html",
    "exampleSite/assets/js/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        resume__xsm: "500px",
        resume__sm: "640px",
        resume__md: "811px",
        resume__lg: "1051px",
        resume__xl: "1280px",
        screen: { raw: "screen" },
        print: { raw: "print" },
      },
      fontFamily: {
        headline: ["Comfortaa"],
        body: ["Fira Sans"],
      },
      fontSize: {
        resume__sm2: "0.9375rem", // 15px label
        resume__base: "1rem", // 16px base
        resume__md: "1.0625rem", // 17px body
        resume__lg: "1.125rem", // 18px heading
      },
      lineHeight: {
        resume__snugish: "1.32",
        resume__normal: "1.34",
      },
      maxWidth: {
        a4: "64.609375rem",
      },
      height: {
        a4: "91.350883rem",
        "a4-col": "77.038383rem",
        "a4-col-full": "83.350883rem",
      },
      spacing: {
        1.5: "0.375rem", // 6px
        1.6: "0.4375rem", // 7px
        2.1: "0.5625rem", // 9px
        3.2: "0.8125rem", // 16px
        4.5: "1.125rem", // 8px
        11: "2.75rem", // 44px (once)
      },
      boxShadow: (theme) => ({
        "1-bottom": `inset 0 0 0 1px ${theme("colors.gray.400")}`,
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.gray.500"),
              fontWeight: "300",
            },
            a: {
              fontWeight: "500",
              color: theme("colors.accent.600"),
              "&:hover": {
                color: theme("colors.accent.800"),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            h1: { color: theme("colors.gray.200") },
            h2: { color: theme("colors.gray.200") },
            h3: { color: theme("colors.gray.200") },
            h4: { color: theme("colors.gray.200") },
            h5: { color: theme("colors.gray.200") },
            h6: { color: theme("colors.gray.200") },
            a: { color: theme("colors.accent.500") },
            p: { color: theme("colors.gray.200") },
            ul: { color: theme("colors.gray.200") },
            ol: { color: theme("colors.gray.200") },
            figcaption: { color: theme("colors.gray.300") },
            strong: { color: theme("colors.gray.200") },
            span: { color: theme("colors.gray.200") },
            code: {
              color: theme("colors.gray.200"),
              fontWeight: 800,
            },
          },
        },
      }),
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      accent: colors.green,
    },
    borderColor: (theme) => ({
      ...theme("colors"),
    }),
    keyframes: (theme) => ({
      blink: {
        "0%, 100%": { color: "transparent" },
        "50%": { color: theme("colors.accent.500") },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
    }),
    animation: {
      blink: "blink 1s step-end infinite",
      bounce: "bounce 1s infinite",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
