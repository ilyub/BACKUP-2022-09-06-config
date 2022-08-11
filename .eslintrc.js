module.exports = {
  extends: [
    "./eslint",
    "./eslint/options/allow-nodejs-modules",
    "./eslint/options/allow-require",
    "./eslint/options/allow-require-unsafe",
    "./.eslintrc.overrides",
    "./.eslintrc.rule-overrides",
    "./.eslintrc.temp"
  ]
};
