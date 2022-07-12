const { eslint } = require("../../api");

module.exports = {
  plugins: ["unused-imports"],
  rules: {
    ...eslint.getAllRules("eslint-plugin-unused-imports"),
    "unused-imports/no-unused-vars": "off",
    "unused-imports/no-unused-vars-ts": "off"
  }
};
