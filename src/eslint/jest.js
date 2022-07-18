const { getAllRules } = require("./api");

module.exports = {
  plugins: ["jest"],
  rules: {
    ...getAllRules("eslint-plugin-jest"),
    "jest/no-hooks": "off",
    "jest/prefer-expect-assertions": [
      "warn",
      {
        onlyFunctionsWithExpectInCallback: true,
        onlyFunctionsWithExpectInLoop: true
      }
    ],
    "jest/prefer-lowercase-title": "off",
    "jest/require-hook": "off",
    "jest/require-top-level-describe": "off",
    "jest/unbound-method": "off"
  }
};
