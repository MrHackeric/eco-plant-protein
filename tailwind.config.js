module.exports = {
  theme: {
    extend: {
      colors: {
        primaryGreen: "#04713d",
        secondaryGreen: "#0a9e5b",
        lightGreen: "#f4f8f5",
        dark: "#1d1d1f",
        gray: "#666666",
      },
      fontFamily: {
        main: ["'Red Hat Display'", "sans-serif"],
      },
      boxShadow: {
        green: "0 12px 28px rgba(4, 113, 61, 0.25)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.9s ease-out forwards",
      },
    },
  },
  plugins: [],
};
