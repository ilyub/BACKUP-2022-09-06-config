const { getAllRules } = require("../eslint/plugins/api");

const preset = require("../jest/preset");

const skylib = require("../eslint/plugins/skylib");

const typescriptEslint = require("../eslint/plugins/typescript-eslint");

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
