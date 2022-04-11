module.exports = {
  extends: ["eslint:all"],
  rules: {
    "array-callback-return": "off",
    "arrow-body-style": [
      "warn",
      "as-needed",
      { requireReturnForObjectLiteral: true }
    ],
    "camelcase": "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "off",
    "complexity": ["warn", 25],
    "func-names": ["warn", "never"],
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "id-length": [
      "warn",
      {
        exceptionPatterns: [],
        exceptions: [],
        max: 50,
        min: 1,
        properties: "always"
      }
    ],
    "line-comment-position": ["warn", { ignorePattern: "NOSONAR" }],
    "max-depth": ["warn", 10],
    "max-lines": ["warn", 5000],
    "max-lines-per-function": ["warn", 500],
    "max-params": ["warn", 10],
    "max-statements": ["warn", 500],
    "multiline-comment-style": "off",
    "new-cap": "off",
    "no-inline-comments": ["warn", { ignorePattern: "NOSONAR" }],
    "no-lone-blocks": "off",
    "no-magic-numbers": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    // eslint-disable-next-line no-warning-comments -- Wait for @skylib/eslint-plugin update
    // fixme
    "no-restricted-syntax": [
      "error",
      {
        message: "Underscore export is disallowed",
        selector:
          "ExportNamedDeclaration > FunctionDeclaration > Identifier.id[name=/^_/u]"
      },
      {
        message: "Underscore export is disallowed",
        selector:
          "ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > Identifier.id[name=/^_/u]"
      },
      {
        message: 'Use "Extends" type from "ts-toolbelt" package instead',
        selector: "TSConditionalType"
      }
    ],
    "no-shadow": [
      "warn",
      {
        allow: ["event", "name"],
        builtinGlobals: true,
        hoist: "all"
      }
    ],
    "no-ternary": "off",
    "no-undef": ["warn", { typeof: true }],
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: /^(?:_|omit)/u.source,
        varsIgnorePattern: /^(?:_|omit)/u.source
      }
    ],
    "no-use-before-define": "off",
    "object-shorthand": ["warn", "always", { avoidExplicitReturnArrows: true }],
    "one-var": ["warn", "never"],
    "prefer-destructuring": "off",
    "prefer-named-capture-group": "off",
    "prefer-object-has-own": "off",
    "sort-imports": "off",
    "sort-keys": "off",
    "spaced-comment": ["warn", "always", { markers: ["/ <reference"] }]
  }
};
