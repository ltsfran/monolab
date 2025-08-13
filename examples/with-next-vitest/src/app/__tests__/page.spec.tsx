import Home from '@/app/page'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('Home component', () => {
  test('renders the main headline elements', () => {
    render(<Home />)

    expect(screen.getByAltText('Next.js logo')).toBeInTheDocument()

    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Save and see your changes instantly./i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Click me!/i })
    ).toBeInTheDocument()
  })
})
