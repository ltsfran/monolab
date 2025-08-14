import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import App from '../App'

describe('Home component', () => {
  test('renders the main headline elements', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Vite + React' })
    ).toBeInTheDocument()
  })
})
