import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { globSync } from 'glob'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const assetFileNames = (assetInfo: { name?: string }) => {
  if (assetInfo.name?.includes('theme.css')) return 'theme.css'
  if (assetInfo.name?.includes('main.css')) return 'lib.css'
  return '[name][extname]'
}

const FILE_EXTENSIONS = { es: 'js', cjs: 'cjs' } as const

const createBuildOutput = (format: 'es' | 'cjs') => ({
  format,
  entryFileNames: `[name].${FILE_EXTENSIONS[format]}`,
  chunkFileNames: `[name]-[hash].${FILE_EXTENSIONS[format]}`,
  assetFileNames,
})

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: {
        ...Object.fromEntries(
          globSync(
            [
              'lib/main.ts',
              'lib/components/**/*.{ts,tsx}',
              'lib/styles/theme.css',
            ],
            {
              ignore: ['lib/**/*.{d,stories,test,types}.ts{,x}'],
            },
          ).map((file) => [
            relative('lib', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
        ),
      },
      output: [createBuildOutput('es'), createBuildOutput('cjs')],
    },
  },
})
