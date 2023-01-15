import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, '.eslintignore'],
    globals: true,
    reporters: 'dot',
  },
})
