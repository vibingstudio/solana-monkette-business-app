module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  babel: {
    presets: [
      [
        "@babel/preset-react",
        { runtime: "automatic", importSource: "@emotion/react" },
      ],
    ],
    plugins: ["@emotion/babel-plugin"],
  },
  eslint: {
    enable: false,
  },
  typescript: { enableTypeChecking: false },
};
