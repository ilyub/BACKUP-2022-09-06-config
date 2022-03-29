module.exports = {
  plugins: ["eslint-comments"],
  rules: {
    ...require("./getAll")("eslint-plugin-eslint-comments"),
    "eslint-comments/disable-enable-pair": ["warn", { allowWholeFile: true }],
    "eslint-comments/no-use": [
      "warn",
      {
        allow: [
          "eslint-enable",
          "eslint-disable",
          "eslint-disable-line",
          "eslint-disable-next-line"
        ]
      }
    ],
    // eslint-disable-next-line no-warning-comments
    // temp
    "eslint-comments/require-description": "off"
  }
};
