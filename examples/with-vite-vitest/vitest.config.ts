import react from '@vitejs/plugin-react'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

const COVERAGE_THRESHOLD = 80

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    globals: true,
    include: [
      'src/**/*.{test,spec}.{js,jsx,ts,tsx}',
      'test/**/*.{test,spec}.{js,jsx,ts,tsx}'
    ],
    exclude: [],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        'test/setup.ts',
        '**/*.d.ts',
        '**/*.config.*',
        '**/dist/**',
        'public/**'
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
