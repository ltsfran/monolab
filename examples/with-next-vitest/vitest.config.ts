import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

const COVERAGE_THRESHOLD = 80

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts', './test/next.tsx'],
    globals: true,
    include: [
      'src/**/*.{test,spec}.{js,jsx,ts,tsx}',
      'test/**/*.{test,spec}.{js,jsx,ts,tsx}'
    ],
    exclude: [
      'src/app/layout.{js,jsx,ts,tsx}',
      'src/app/global-error.{js,jsx,ts,tsx}',
      '**/*.server.{js,jsx,ts,tsx}'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        'test/setup.ts',
        '**/*.d.ts',
        '**/*.config.*',
        '**/dist/**',
        '.next/**',
        'public/**',
        'src/app/layout.{js,jsx,ts,tsx}',
        'src/app/global-error.{js,jsx,ts,tsx}',
        '**/*.server.{js,jsx,ts,tsx}'
      ],
      thresholds: {
        lines: COVERAGE_THRESHOLD,
        functions: COVERAGE_THRESHOLD,
        branches: COVERAGE_THRESHOLD,
        statements: COVERAGE_THRESHOLD
      }
    }
  }
})
