import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'node14',
  outDir: 'dist',
  clean: true,
  dts: true,
  async onSuccess() {
    console.log('Done...')
  },
})
