const config = {
  ...require("../../configs/tailwind/tailwind.config.js"), // gets the default brand color
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@components/button/dist/*.js",
  ],
  mode: "jit",
};
module.exports = config;
