import type { Config } from 'jest'

const config: Config = {
  rootDir: './',
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.test.json'
      }
    ]
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$': '<rootDir>/test/assets.ts',
    '^.+\\.(svg)$': '<rootDir>/test/assets.ts'
  }
}

export default config
