module.exports = {
  env: {
    commonjs: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": 0,
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/label-has-associated-control": 0,
    quotes: 0,
  },
};
