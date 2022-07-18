const { getAllRules } = require("./api");

module.exports = {
  plugins: ["sonarjs"],
  rules: {
    ...getAllRules("eslint-plugin-sonarjs"),
    "sonarjs/cognitive-complexity": ["warn", 50],
    "sonarjs/no-duplicate-string": "off",
    "sonarjs/no-identical-functions": ["warn", 10],
    "sonarjs/no-nested-switch": "off",
    "sonarjs/no-small-switch": "off",
    "sonarjs/prefer-single-boolean-return": "off"
  }
};
