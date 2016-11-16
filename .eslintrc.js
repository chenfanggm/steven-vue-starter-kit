"use strict"

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  "env": {
    "node": true
  },
  plugins: [
    "html",
    "standard",
    "promise"
  ],
  // add your custom rules here
  "rules": {
    "comma-dangle": ["error", "never"],
    "import/no-unresolved": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "semi": ["error", "never"],
    "vars-on-top": 2
  }
}
