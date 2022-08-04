module.exports = {
  overrides: [
    { files: "./src/eslintrc/**", extends: "./src/eslintrc/roles/eslintrc" },
    {
      files: "./api/index.js",
      extends: "./src/eslintrc/options/allow-global-access"
    },
    {
      files: "./src/jest-preset.js",
      extends: "./src/eslintrc/options/skip-html-literal-check"
    }
  ]
};
