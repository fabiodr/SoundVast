module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true
  },
  extends: "airbnb",
  rules: {
    "react/wrap-multilines": "off",
    "react/require-extension": "off",
  },
  overrides: [
    {
      files: [
        "**/actions.js"
      ],
      rules: {
        "import/prefer-default-export": "off"
      }
    }
  ],
  plugins: [
    "react",
    "relay"
  ]
}
