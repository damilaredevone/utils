module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  overrides: [
    {
      files: ['*.yml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: '**/package.json',
      options: {
        useTabs: false,
        tabWidth: 2,
      },
    },
  ],
}
