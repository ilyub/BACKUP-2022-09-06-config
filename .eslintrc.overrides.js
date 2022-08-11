module.exports = {
  overrides: [
    { files: "./eslint/**", extends: "./eslint/roles/eslintrc" },
    {
      files: "./api/index.js",
      extends: "./eslint/options/allow-global-access"
    },
    {
      files: "./jest/jest-preset.js",
      extends: "./eslint/options/skip-html-literal-check"
    }
  ]
};
