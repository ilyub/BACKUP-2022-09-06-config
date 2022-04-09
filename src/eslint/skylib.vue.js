module.exports = {
  rules: {
    "@skylib/require-jsdoc": "off",
    "@skylib/sort-keys": "off",
    "@skylib/statements-order": [
      "warn",
      {
        rootOrder: [
          "ImportDeclaration",
          "ModuleDeclaration",
          "ExportDeclaration",
          "ExportTypeDeclaration",
          "ExportFunctionDeclaration",
          "ExportUnknown",
          "TypeDeclaration",
          "FunctionDeclaration",
          "Unknown",
          "ExportDefaultDeclaration"
        ]
      }
    ]
  }
};
