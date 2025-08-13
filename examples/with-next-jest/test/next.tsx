/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { jest } from '@jest/globals'

jest.mock('next/image', () => ({
  __esModule: true,
  default: function Image({
    src,
    alt,
    priority,
    ...props
  }: {
    src: string
    alt: string
    priority?: boolean
  }) {
    return <img src={src} alt={alt} {...props} />
  }
}))

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    forward: jest.fn()
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams()
}))

jest.mock('next/headers', () => ({
  headers: () => new Headers(),
  cookies: () => ({
    get: jest.fn(),
    set: jest.fn(),
    delete: jest.fn()
  })
}))
