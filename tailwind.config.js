module.exports = {
  purge: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        pink: "#F5B7CF",
        "strong-pink": "#e77da0",
        white: "#ffffff",
        black: "#000000",
        grey: "#c0c0c0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
