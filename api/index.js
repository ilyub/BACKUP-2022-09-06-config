const { getAllRules } = require("../src/eslintrc/plugins/api");

const preset = require("../src/jest-preset");

const skylib = require("../src/eslintrc/plugins/skylib");

const typescriptEslint = require("../src/eslintrc/plugins/typescript-eslint");

module.exports = {
  eslint: {
    getAllRules,
    rules: {
      "@skylib/consistent-import": skylib.rules["@skylib/consistent-import"][1],
      "@typescript-eslint/no-shadow":
        typescriptEslint.rules["@typescript-eslint/no-shadow"][1]
    }
  },
  jest: { preset }
};
