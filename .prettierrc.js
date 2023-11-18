module.exports = {
  plugins: [require("@trivago/prettier-plugin-sort-imports")],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  trailingComma: "none",
  bracketSpacing: true,
  arrowParens: "always",
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^components/(.*)$",
    "^libs/(.*)$",
    "^data/(.*)$",
    "^types/(.*)$",
    "^styles/(.*)$",
    "^[./]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
