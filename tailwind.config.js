/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: ["./src/components/**/*.tsx"],
  },
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      default: "1rem",
      "mobile-body": [
        "1.125rem", // 18px
        {
          fontWeight: "500",
          lineHeight: "1.875rem",
        },
      ],
      "mobile-h1": [
        "2.625rem", // 42px
        {
          fontWeight: "700",
          lineHeight: "3rem",
          letterSpacing: "-0.07rem",
        },
      ],
    },
    fontWeight: {
      medium: "500",
      bold: "700",
    },
    extend: {
      colors: {
        "primary-1": "hsl(180, 66%, 49%)",
        "primary-2": "hsl(257, 27%, 26%)",

        "secondary-1": "hsl(0, 87%, 67%)",

        "neutral-1": "hsl(0, 0%, 75%)",
        "neutral-2": "hsl(257, 7%, 63%)",
        "neutral-3": "hsl(255, 11%, 22%)",
        "neutral-4": "hsl(260, 8%, 14%)",
      },
      gridTemplateColumns: {
        subgrid: "subgrid",
      },
      backgroundImage: {
        // TODO: find out why below is not working
        "shorten-link": "url('./src/assets/images/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
};
