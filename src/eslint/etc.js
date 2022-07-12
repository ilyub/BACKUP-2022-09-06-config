const { eslint } = require("../../api");

module.exports = {
  plugins: ["etc"],
  rules: {
    ...eslint.getAllRules("eslint-plugin-etc"),
    "etc/no-deprecated": "off",
    "etc/no-enum": "off",
    "etc/no-misused-generics": "off",
    "etc/no-t": "off",
    "etc/prefer-less-than": "off"
  }
};
