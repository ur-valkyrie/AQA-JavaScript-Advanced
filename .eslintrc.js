module.exports = {
    parser: "babel-eslint",
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    rules: {
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "prefer-arrow-callback": "error",
        "no-unused-vars": "error",
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    },
  };