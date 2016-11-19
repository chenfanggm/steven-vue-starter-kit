"use strict"

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  env: {
    node: true,
    browser: true
  },
  globals: {
    __DEV__: true,
    __PROD__: true
  },
  plugins: [
    "html",
    "promise"
  ],
  extends: ["standard"],
  // add your custom rules here
  rules: {
    "comma-dangle": ["error", "never"],
    "import/no-unresolved": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "semi": ["error", "never"],
    "vars-on-top": 2,
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "ignore"
    }],
    "no-multiple-empty-lines": ["error", {
      max: 2
    }]
  }
}
