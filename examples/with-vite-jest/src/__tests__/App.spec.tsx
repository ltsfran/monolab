import { describe, expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Home component', () => {
  test('renders the main headline elements', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Vite + React' })
    ).toBeInTheDocument()
  })
})
