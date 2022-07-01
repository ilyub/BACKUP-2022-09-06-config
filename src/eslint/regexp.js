const { eslint } = require("..");

module.exports = {
  plugins: ["regexp"],
  rules: {
    ...eslint.getAllRules("eslint-plugin-regexp"),
    "regexp/prefer-lookaround": "off",
    "regexp/prefer-named-capture-group": "off"
  }
};
