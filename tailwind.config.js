/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: ["./src/components/**/*.tsx"],
  },
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      default: "1rem",
      "mobile-p-sm": [
        "0.9375rem", // 15px
        {
          fontWeight: "500",
          lineHeight: "1.625rem",
        },
      ],
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
      "mobile-h2": [
        "1.75rem", // 28px
        {
          fontWeight: "700",
          lineHeight: "2.5rem",
          letterSpacing: "-0.05rem",
        },
      ],
      "mobile-h3": [
        "1.375rem", // 22px
        {
          fontWeight: "700",
        },
      ],
      "mobile-h4": [
        "0.9375rem", // 15px
        {
          fontWeight: "700",
        },
      ],
      "desktop-h1": [
        "5.0625rem", // 81px
        {
          lineHeight: "5.6rem",
          letterSpacing: "-0.18rem",
        },
      ],
    },
    fontWeight: {
      normal: "300",
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
        "shorten-link-mobile": "url('/images/bg-shorten-mobile.svg')",
        "shorten-link-desktop": "url('/images/bg-shorten-desktop.svg')",
        "boost-mobile": "url('/images/bg-boost-mobile.svg')",
        "boost-desktop": "url('/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
