import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ExamBadge from '../../src/components/ExamBadge'

describe('ExamBadge', () => {
  it('renders exam date text', () => {
    render(<ExamBadge />)
    expect(screen.getByText(/June 28/)).toBeInTheDocument()
  })

  it('renders as a badge with styling', () => {
    const { container } = render(<ExamBadge />)
    const badge = container.querySelector('span')
    expect(badge).toHaveClass('bg-white/20')
    expect(badge).toHaveClass('text-white')
  })
})
