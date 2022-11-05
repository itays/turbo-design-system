const config = {
  ...require("../../configs/tailwind/tailwind.config.js"), // gets the default brand color
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
console.log(JSON.stringify(config));
module.exports = config;
