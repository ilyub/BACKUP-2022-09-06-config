module.exports = {
  rules: {
    "@skylib/require-jsdoc": "off",
    "@skylib/sort-keys": "off",
    "@skylib/statements-order": [
      "warn",
      {
        rootOrder: [
          "ImportDeclaration",
          "GlobalModuleDeclaration",
          "ExportAllDeclaration",
          "ExportDeclaration",
          "ExportTypeDeclaration",
          "ExportFunctionDeclaration",
          "ExportModuleDeclaration",
          "ExportUnknown",
          "TypeDeclaration",
          "FunctionDeclaration",
          "ModuleDeclaration",
          "Unknown",
          "ExportDefaultDeclaration",
          "JestTest"
        ]
      }
    ]
  }
};
