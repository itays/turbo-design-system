const config = {
  ...require("../../../configs/tailwind/tailwind.config.js"), // gets the default brand color
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
};
module.exports = config;
