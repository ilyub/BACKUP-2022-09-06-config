const { eslint } = require("../../api");

module.exports = {
  plugins: ["pii"],
  rules: {
    ...eslint.getAllRules("eslint-plugin-pii"),
    "pii/no-dob": "off",
    "pii/no-phone-number": "off"
  }
};
