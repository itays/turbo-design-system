module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["./configs/eslint/index.js"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
