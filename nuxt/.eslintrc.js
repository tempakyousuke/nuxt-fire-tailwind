module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "vue/script-setup-uses-vars": false,
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
      },
    ],
    "no-console": "off",
    camelcase: "off",
  },
};
